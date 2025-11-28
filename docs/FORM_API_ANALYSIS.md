# Form API Analysis & Specification

This document analyzes all forms in the SkyPrep Marketing project and specifies how API calls should be structured for form submissions.

## Quick Reference - API Call Example

**Endpoint:** `POST /api/leads`

**Request:**
```http
POST /api/leads HTTP/1.1
Content-Type: application/json

{
  "name": "Captain Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "+91 98765 43210",
  "topic": "FocusONE",
  "message": "I'm interested in personalized DGCA coaching. I have 50 flight hours and need help with DGCA exam preparation.",
  "source": "contact-page",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you within 1 business day.",
  "submissionId": "lead_abc123xyz",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

---

## Forms Overview

The project contains **2 main form types** that now collect **identical data** and can use the **same API endpoint**:

1. **Contact Form** (`/contact` page) - `components/ContactForm.tsx`
2. **Enquiry Form** (`/enquiry` page) - `app/enquiry/page.tsx`

Both forms have been unified to collect the same fields for consistency and to use the same leads table.

---

## Unified Form Structure

Both forms now collect the following fields:

| Field Name | HTML Name | Type | Required | Options/Default |
|------------|-----------|------|----------|-----------------|
| Full Name | `name` | text | ✅ Yes | - |
| Email | `email` | email | ✅ Yes | - |
| Phone / WhatsApp | `phone` | tel | ❌ No | - |
| Topic | `topic` | select | ❌ No | Default: "General"<br>Options: See below |
| Message / Mission Brief | `message` | textarea | ✅ Yes | - |

### Topic Dropdown Options

The `topic` field includes all courses, services, and additional options:

- **General** (default)
- **FocusONE** (course)
- **Cohorts** (course)
- **DGCA Medical Assistance** (service)
- **DGCA Computer Number Assistance** (service)
- **eLogbook Filing Assistance** (service)
- **Conversion Training** (service)
- **Test Series**
- **Other**

---

## Unified API Call Structure

Since both forms collect identical data, they should use the **same API endpoint**.

### Endpoint

**Recommended:** `POST /api/leads` or `POST /api/forms/submit`

**Alternative (if keeping separate endpoints):**
- Contact: `POST /api/forms/contact`
- Enquiry: `POST /api/forms/enquiry`

Both endpoints should accept the same request body structure.

### Request Body & Validation

```json
{
  "name": "Captain Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "+91 98765 43210",
  "topic": "FocusONE",
  "message": "I'm interested in personalized DGCA coaching. I have 50 flight hours and need help with DGCA exam preparation...",
  "source": "contact-page",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Field Descriptions & Rules:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ Yes | Full name of the submitter (min 2 chars) |
| `email` | string | ✅ Yes | Valid email address |
| `phone` | string | ❌ No | Phone number / WhatsApp |
| `topic` | string | ❌ No | Selected topic (defaults to "General") |
| `message` | string | ✅ Yes | Message/mission brief content (min 10 chars) |
| `source` | string | ✅ Yes | `"contact-page"` \| `"enquiry-page"` |
| `timestamp` | string | ❌ Optional | ISO 8601 string persisted as `clientTimestamp` |
| `referrer` | string | ❌ Optional | Sent by client, server also captures `metadata.referrer` |
| `userAgent` | string | ❌ Optional | Sent by client, server also captures `metadata.userAgent` |

Additional metadata (`metadata.ipAddress`, `metadata.referrer`, `metadata.userAgent`) is captured automatically by the backend even if not supplied by the client.

**Environment Variables**

- `NEXT_PUBLIC_API_URL` / `NEXT_API_URL`: Base API URL (e.g., `https://api.skyprepaero.com`)  
- `NEXT_PUBLIC_API_VERSION` / `API_VERSION`: API version string (default `v1`)

The combined endpoint is `${NEXT_PUBLIC_API_URL}/api/${API_VERSION}/leads`.

### Response (Success - 200/201)

```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you within 1 business day.",
  "submissionId": "lead_abc123xyz",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Response (Error - 400)

```json
{
  "success": false,
  "error": "Validation failed",
  "message": "Please check the following fields:",
  "errors": {
    "email": "Invalid email format",
    "name": "Name is required",
    "message": "Message is required"
  }
}
```

### Response (Error - 500)

```json
{
  "success": false,
  "error": "Internal server error",
  "message": "An error occurred while processing your request. Please try again later."
}
```

---

## Unified API Specification

### Base URL
```
https://api.skyprepaero.com
```
Or use environment variable: `NEXT_PUBLIC_API_BASE_URL`

### Common Headers
```http
Content-Type: application/json
Accept: application/json
```

### Common Request Fields

All form submissions should include:

| Field | Type | Description |
|-------|------|-------------|
| `source` | string | Page/source identifier (e.g., "contact-page", "enquiry-page") |
| `timestamp` | ISO 8601 string | Submission timestamp (client-side) |
| `userAgent` | string | Browser user agent (optional, can be added server-side) |
| `referrer` | string | Page referrer (optional) |

### Common Response Structure

**Success Response:**
```typescript
{
  success: boolean;        // Always true
  message: string;         // Human-readable success message
  submissionId: string;    // Unique submission identifier
  timestamp: string;       // Server timestamp
}
```

**Error Response:**
```typescript
{
  success: boolean;        // Always false
  error: string;          // Error type/category
  message?: string;        // Human-readable error message
  errors?: {               // Field-specific validation errors
    [fieldName: string]: string;
  };
}
```

---

## Implementation Recommendations

### 1. API Client Setup

The project already has `lib/api.ts` with an axios client. Extend it with unified form submission method:

```typescript
// lib/api.ts additions

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
}

export interface LeadSubmissionPayload extends LeadFormData {
  source: 'contact-page' | 'enquiry-page';
  timestamp: string;
}

export async function submitLeadForm(
  data: LeadFormData,
  source: 'contact-page' | 'enquiry-page' = 'contact-page'
) {
  const payload: LeadSubmissionPayload = {
    ...data,
    source,
    timestamp: new Date().toISOString(),
  };
  
  const response = await apiClient.post('/api/leads', payload);
  return response.data;
}

// Convenience functions for each form type
export async function submitContactForm(data: LeadFormData) {
  return submitLeadForm(data, 'contact-page');
}

export async function submitEnquiryForm(data: LeadFormData) {
  return submitLeadForm(data, 'enquiry-page');
}
```

### 2. Form Handler Implementation

Create a unified Next.js API route:

**`app/api/leads/route.ts`** (Recommended - Unified Endpoint)
```typescript
import { NextRequest, NextResponse } from 'next/server';

interface LeadSubmission {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
  source: 'contact-page' | 'enquiry-page';
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadSubmission = await request.json();
    
    // Validate required fields
    const errors: Record<string, string> = {};
    
    if (!body.name || body.name.trim().length < 2) {
      errors.name = 'Name is required and must be at least 2 characters';
    }
    
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.email = 'Valid email is required';
    }
    
    if (!body.message || body.message.trim().length < 10) {
      errors.message = 'Message is required and must be at least 10 characters';
    }
    
    if (!body.source || !['contact-page', 'enquiry-page'].includes(body.source)) {
      errors.source = 'Valid source is required';
    }
    
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          message: 'Please check the following fields:',
          errors,
        },
        { status: 400 }
      );
    }

    // TODO: Submit to backend API/database
    // Example:
    // const result = await submitToBackendAPI(body);
    // Or save to database directly
    
    // For now, return success response
    const submissionId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return NextResponse.json(
      {
        success: true,
        message: body.source === 'enquiry-page' 
          ? 'Your enquiry has been received. Our team will contact you within 24 hours.'
          : 'Thank you for your message. We\'ll get back to you within 1 business day.',
        submissionId,
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}
```

**Alternative: Separate Endpoints** (if needed for backward compatibility)

**`app/api/forms/contact/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { POST as leadsPOST } from '@/app/api/leads/route';

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Add source and forward to unified endpoint
  return leadsPOST(
    new NextRequest(request.url, {
      method: 'POST',
      body: JSON.stringify({ ...body, source: 'contact-page' }),
      headers: request.headers,
    })
  );
}
```

**`app/api/forms/enquiry/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { POST as leadsPOST } from '@/app/api/leads/route';

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Add source and forward to unified endpoint
  return leadsPOST(
    new NextRequest(request.url, {
      method: 'POST',
      body: JSON.stringify({ ...body, source: 'enquiry-page' }),
      headers: request.headers,
    })
  );
}
```

### 3. Client-Side Form Handling

**Example for Contact Form:**
```typescript
"use client";

import { useState, FormEvent } from 'react';
import { submitContactForm, type LeadFormData } from '@/lib/api';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const data: LeadFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || undefined,
      topic: (formData.get('topic') as string) || undefined,
      message: formData.get('message') as string,
    };

    try {
      const result = await submitContactForm(data);
      setSubmitStatus('success');
      // Reset form
      e.currentTarget.reset();
    } catch (error: any) {
      setSubmitStatus('error');
      if (error.response?.data?.errors) {
        setFieldErrors(error.response.data.errors);
      }
      setErrorMessage(error.response?.data?.message || 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      {submitStatus === 'success' && (
        <div className="text-green-400">Message sent successfully!</div>
      )}
      {submitStatus === 'error' && (
        <div className="text-red-400">
          {errorMessage}
          {Object.entries(fieldErrors).map(([field, message]) => (
            <div key={field} className="text-sm mt-1">
              {field}: {message}
            </div>
          ))}
        </div>
      )}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

**Example for Enquiry Form:**
```typescript
"use client";

import { useState, FormEvent } from 'react';
import { submitEnquiryForm, type LeadFormData } from '@/lib/api';

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data: LeadFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || undefined,
      topic: (formData.get('topic') as string) || undefined,
      message: formData.get('message') as string,
    };

    try {
      const result = await submitEnquiryForm(data);
      setSubmitStatus('success');
      // Reset form
      e.currentTarget.reset();
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.response?.data?.message || 'Failed to submit enquiry');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="enquiry-form" onSubmit={handleSubmit}>
      {/* Form fields */}
      {submitStatus === 'success' && (
        <div className="text-green-400">Enquiry submitted successfully!</div>
      )}
      {submitStatus === 'error' && (
        <div className="text-red-400">{errorMessage}</div>
      )}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit enquiry'}
      </button>
    </form>
  );
}
```

---

## Validation Rules

### Email Validation
- Must be valid email format
- Required for both forms

### Name Validation
- Required
- Minimum 2 characters
- Maximum 100 characters

### Phone Validation (Optional)
- If provided, should match international format
- Example: `+91 98765 43210` or `+1 555 123 4567`

### Message Validation
- Required
- Minimum 10 characters
- Maximum 5000 characters

---

## Error Handling

### Client-Side
1. **Network Errors**: Show user-friendly message, allow retry
2. **Validation Errors**: Display field-specific errors
3. **Server Errors**: Show generic error message, log details

### Server-Side
1. **400 Bad Request**: Validation errors, return field-specific messages
2. **500 Internal Server Error**: Log error, return generic message
3. **Rate Limiting**: Return 429 with retry-after header

---

## Security Considerations

1. **CSRF Protection**: Use Next.js built-in CSRF protection
2. **Rate Limiting**: Implement rate limiting per IP/email
3. **Input Sanitization**: Sanitize all user inputs
4. **Spam Protection**: Consider adding reCAPTCHA or similar
5. **Email Validation**: Verify email format and potentially domain

---

## Persistence (`Lead` Collection / Table)

All submissions are stored in the `Lead` collection (or relational table) with the following fields:

- `name`, `email`, `phone`, `topic`, `message`, `source`
- `status` workflow: `new`, `contacted`, `qualified`, `closed`, `archived`
- `notes` (internal use)
- `submittedAt` (server timestamp), `clientTimestamp` (from payload `timestamp`)
- `metadata.referrer`, `metadata.userAgent`, `metadata.ipAddress`

**Indexes**

- `email`
- `source`
- `status`
- `createdAt` / `submittedAt`

## Testing Checklist

- [ ] Contact form submission with all fields
- [ ] Contact form submission with only required fields
- [ ] Enquiry form submission with all fields
- [ ] Enquiry form submission with only required fields
- [ ] Form validation (missing required fields)
- [ ] Email format validation
- [ ] Phone format validation (if provided)
- [ ] Topic dropdown options (all courses, services, Test Series, Other)
- [ ] Error handling (network errors, server errors)
- [ ] Success message display
- [ ] Form reset after successful submission
- [ ] Loading state during submission
- [ ] Rate limiting (if implemented)
- [ ] Both forms save to same leads table
- [ ] Source field correctly identifies form type
- [ ] Email notification triggered to `leads@skyprepaero.com`

## Notifications

Every successful submission triggers an email notification to `leads@skyprepaero.com` (configurable via `LEAD_NOTIFICATION_EMAIL`). The message uses the Handlebars template located at `templates/emails/leads/new-lead.hbs`.

---

## Next Steps

1. ✅ Create API client functions in `lib/api.ts`
2. ✅ Create Next.js API routes in `app/api/forms/`
3. ✅ Update form components to use API client
4. ✅ Add form validation
5. ✅ Add loading and error states
6. ✅ Add success feedback
7. ✅ Implement rate limiting
8. ✅ Add spam protection (optional)
9. ✅ Set up email notifications (backend)
10. ✅ Set up database storage (backend)



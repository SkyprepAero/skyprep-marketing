# Form API Analysis & Specification

This document analyzes all forms in the SkyPrep Marketing project and specifies how API calls should be structured for form submissions.

## Forms Overview

The project contains **2 main form types**:

1. **Contact Form** (`/contact` page)
2. **Enquiry Form** (`/enquiry` page)

---

## 1. Contact Form

**Location:** `components/ContactForm.tsx`  
**Used on:** `/contact` page

### Form Fields

| Field Name | HTML Name | Type | Required | Options/Default |
|------------|-----------|------|----------|-----------------|
| Full Name | `name` | text | ✅ Yes | - |
| Email | `email` | email | ✅ Yes | - |
| Phone | `phone` | tel | ❌ No | - |
| Topic | `topic` | select | ❌ No | Default: "General"<br>Options: "General", "1-to-1 Coaching", "Cohorts", "Subject-Wise" |
| Preferred Contact | `preferred` | select | ❌ No | Default: "Email"<br>Options: "Email", "Phone" |
| Mission Brief | `message` | textarea | ✅ Yes | - |

### API Call Structure

**Endpoint:** `POST /api/contact` or `POST /api/forms/contact`

**Request Body:**
```json
{
  "name": "Captain Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "+91 98765 43210",
  "topic": "1-to-1 Coaching",
  "preferred": "Email",
  "message": "I'm interested in personalized DGCA coaching...",
  "source": "contact-page",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Response (Success - 200/201):**
```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you within 1 business day.",
  "submissionId": "contact_abc123xyz",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "error": "Validation failed",
  "errors": {
    "email": "Invalid email format",
    "name": "Name is required"
  }
}
```

---

## 2. Enquiry Form

**Location:** `app/enquiry/page.tsx`  
**Used on:** `/enquiry` page

### Form Fields

| Field Name | HTML Name | Type | Required | Options/Default |
|------------|-----------|------|----------|-----------------|
| Full Name | `name` | text | ✅ Yes | - |
| Email | `email` | email | ✅ Yes | - |
| Phone / WhatsApp | `phone` | tel | ❌ No | - |
| Preferred Contact Window | `contactPreference` | select | ❌ No | Default: "Anytime"<br>Options: "Anytime", "Weekdays (9am - 1pm)", "Weekdays (2pm - 6pm)", "Weekends" |
| Primary Goal | `goal` | select | ❌ No | Default: "CPL Ground Classes"<br>Options: "CPL Ground Classes", "Medical Class I/ Class II", "ElogBook Filling", "Conversion Training", "Computer Number", "Other (describe below)" |
| Target Timeline | `timeline` | select | ❌ No | Default: "0-3 months"<br>Options: "0-3 months", "3-6 months", "6-12 months", "12+ months" |
| Mission Brief | `message` | textarea | ✅ Yes | - |

### API Call Structure

**Endpoint:** `POST /api/enquiry` or `POST /api/forms/enquiry`

**Request Body:**
```json
{
  "name": "Captain John Smith",
  "email": "john.smith@example.com",
  "phone": "+91 98765 43210",
  "contactPreference": "Weekdays (9am - 1pm)",
  "goal": "CPL Ground Classes",
  "timeline": "3-6 months",
  "message": "I have 50 flight hours and need help with DGCA exam preparation...",
  "source": "enquiry-page",
  "interest": "test-series",  // Optional: from query param ?interest=test-series
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Response (Success - 200/201):**
```json
{
  "success": true,
  "message": "Your enquiry has been received. Our team will contact you within 24 hours.",
  "submissionId": "enquiry_xyz789abc",
  "estimatedResponseTime": "24 hours",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "error": "Validation failed",
  "errors": {
    "email": "Invalid email format",
    "message": "Mission brief is required"
  }
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

The project already has `lib/api.ts` with an axios client. Extend it with form submission methods:

```typescript
// lib/api.ts additions

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  preferred?: string;
  message: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone?: string;
  contactPreference?: string;
  goal?: string;
  timeline?: string;
  message: string;
  interest?: string; // from query param
}

export async function submitContactForm(data: ContactFormData) {
  const response = await apiClient.post('/api/forms/contact', {
    ...data,
    source: 'contact-page',
    timestamp: new Date().toISOString(),
  });
  return response.data;
}

export async function submitEnquiryForm(data: EnquiryFormData) {
  const response = await apiClient.post('/api/forms/enquiry', {
    ...data,
    source: 'enquiry-page',
    timestamp: new Date().toISOString(),
  });
  return response.data;
}
```

### 2. Form Handler Implementation

Create Next.js API routes:

**`app/api/forms/contact/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Submit to backend API
    const result = await submitContactForm(body);
    
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
```

**`app/api/forms/enquiry/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { submitEnquiryForm } from '@/lib/api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Submit to backend API
    const result = await submitEnquiryForm(body);
    
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
```

### 3. Client-Side Form Handling

**Example for Contact Form:**
```typescript
"use client";

import { useState, FormEvent } from 'react';
import { submitContactForm } from '@/lib/api';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      topic: formData.get('topic') as string || undefined,
      preferred: formData.get('preferred') as string || undefined,
      message: formData.get('message') as string,
    };

    try {
      const result = await submitContactForm(data);
      setSubmitStatus('success');
      // Reset form
      e.currentTarget.reset();
    } catch (error: any) {
      setSubmitStatus('error');
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
        <div className="text-red-400">{errorMessage}</div>
      )}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
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

## Testing Checklist

- [ ] Contact form submission with all fields
- [ ] Contact form submission with only required fields
- [ ] Enquiry form submission with all fields
- [ ] Enquiry form submission with only required fields
- [ ] Form validation (missing required fields)
- [ ] Email format validation
- [ ] Phone format validation (if provided)
- [ ] Error handling (network errors, server errors)
- [ ] Success message display
- [ ] Form reset after successful submission
- [ ] Loading state during submission
- [ ] Rate limiting (if implemented)

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


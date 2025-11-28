"use client";

import { useEffect, useRef, useState } from "react";

interface CountryCode {
  code: string;
  dialCode: string;
  flag: string;
}

const countryCodes: CountryCode[] = [
  { code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { code: "US", dialCode: "+1", flag: "🇺🇸" },
  { code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { code: "NZ", dialCode: "+64", flag: "🇳🇿" },
  { code: "ZA", dialCode: "+27", flag: "🇿🇦" },
  { code: "PH", dialCode: "+63", flag: "🇵🇭" },
  { code: "AE", dialCode: "+971", flag: "🇦🇪" },
  { code: "SG", dialCode: "+65", flag: "🇸🇬" },
  { code: "MY", dialCode: "+60", flag: "🇲🇾" },
  { code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { code: "NL", dialCode: "+31", flag: "🇳🇱" },
  { code: "BE", dialCode: "+32", flag: "🇧🇪" },
  { code: "CH", dialCode: "+41", flag: "🇨🇭" },
  { code: "AT", dialCode: "+43", flag: "🇦🇹" },
  { code: "SE", dialCode: "+46", flag: "🇸🇪" },
  { code: "NO", dialCode: "+47", flag: "🇳🇴" },
  { code: "DK", dialCode: "+45", flag: "🇩🇰" },
  { code: "FI", dialCode: "+358", flag: "🇫🇮" },
  { code: "PL", dialCode: "+48", flag: "🇵🇱" },
  { code: "PT", dialCode: "+351", flag: "🇵🇹" },
  { code: "GR", dialCode: "+30", flag: "🇬🇷" },
  { code: "IE", dialCode: "+353", flag: "🇮🇪" },
  { code: "JP", dialCode: "+81", flag: "🇯🇵" },
  { code: "KR", dialCode: "+82", flag: "🇰🇷" },
  { code: "CN", dialCode: "+86", flag: "🇨🇳" },
  { code: "HK", dialCode: "+852", flag: "🇭🇰" },
  { code: "TW", dialCode: "+886", flag: "🇹🇼" },
  { code: "TH", dialCode: "+66", flag: "🇹🇭" },
  { code: "ID", dialCode: "+62", flag: "🇮🇩" },
  { code: "VN", dialCode: "+84", flag: "🇻🇳" },
  { code: "BR", dialCode: "+55", flag: "🇧🇷" },
  { code: "MX", dialCode: "+52", flag: "🇲🇽" },
  { code: "AR", dialCode: "+54", flag: "🇦🇷" },
  { code: "CL", dialCode: "+56", flag: "🇨🇱" },
  { code: "CO", dialCode: "+57", flag: "🇨🇴" },
  { code: "PE", dialCode: "+51", flag: "🇵🇪" },
  { code: "EG", dialCode: "+20", flag: "🇪🇬" },
  { code: "KE", dialCode: "+254", flag: "🇰🇪" },
  { code: "NG", dialCode: "+234", flag: "🇳🇬" },
  { code: "SA", dialCode: "+966", flag: "🇸🇦" },
  { code: "IL", dialCode: "+972", flag: "🇮🇱" },
  { code: "TR", dialCode: "+90", flag: "🇹🇷" },
  { code: "RU", dialCode: "+7", flag: "🇷🇺" },
];

interface PhoneInputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  defaultValue?: string;
  variant?: "default" | "enquiry";
}

export function PhoneInput({
  id,
  name,
  label,
  placeholder = "98765 43210",
  required = false,
  className = "",
  labelClassName = "",
  defaultValue = "",
  variant = "default",
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countryCodes[0]); // Default to India
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Parse default value if provided (format: +91 98765 43210)
  useEffect(() => {
    if (defaultValue) {
      const match = defaultValue.match(/^(\+\d+)\s*(.+)$/);
      if (match) {
        const dialCode = match[1];
        const number = match[2];
        const country = countryCodes.find((c) => c.dialCode === dialCode) || countryCodes[0];
        setSelectedCountry(country);
        setPhoneNumber(number);
      } else {
        setPhoneNumber(defaultValue);
      }
    }
  }, [defaultValue]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  };

  // Combined phone value (country code + number)
  const fullPhoneValue = phoneNumber ? `${selectedCountry.dialCode} ${phoneNumber}` : "";

  const isEnquiryVariant = variant === "enquiry";
  const inputPadding = isEnquiryVariant ? "px-4 py-3.5" : "px-5 py-4";
  const inputTextSize = isEnquiryVariant ? "text-sm" : "text-base";
  const bgOpacity = isEnquiryVariant ? "bg-white/5" : "bg-white/[0.04]";
  const buttonBgOpacity = isEnquiryVariant ? "bg-white/5" : "bg-white/[0.04]";
  const buttonHoverBg = isEnquiryVariant ? "hover:bg-white/8" : "hover:bg-white/[0.06]";

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <div className="relative flex min-w-0">
        {/* Hidden input with full phone number for form submission */}
        <input type="hidden" name={name} value={fullPhoneValue} />
        
        {/* Country Code Dropdown */}
        <div className="relative flex-shrink-0" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-1.5 rounded-l-2xl border-r border-white/15 border border-white/15 ${buttonBgOpacity} ${inputPadding} ${inputTextSize} text-slate-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-500/20 ${buttonHoverBg} whitespace-nowrap`}
            aria-label="Select country code"
          >
            <span className="text-base leading-none">{selectedCountry.flag}</span>
            <span className="text-xs sm:text-sm font-medium">{selectedCountry.dialCode}</span>
            <svg
              className={`w-3.5 h-3.5 text-slate-400 transition-transform flex-shrink-0 ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 z-50 mt-1 max-h-64 w-64 overflow-y-auto rounded-xl border border-white/15 bg-slate-900 shadow-2xl backdrop-blur-xl">
              <div className="p-2">
                {countryCodes.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm transition-colors ${
                      selectedCountry.code === country.code
                        ? "bg-sky-500/20 text-sky-300"
                        : "text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="flex-1 font-medium">{country.dialCode}</span>
                    {selectedCountry.code === country.code && (
                      <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <input
          ref={inputRef}
          id={id}
          type="tel"
          autoComplete="tel"
          placeholder={placeholder}
          required={required}
          value={phoneNumber}
          onChange={(e) => {
            // Only allow digits and spaces
            const value = e.target.value.replace(/[^\d\s]/g, "");
            setPhoneNumber(value);
          }}
          className={`flex-1 min-w-0 rounded-r-2xl border-l-0 border border-white/15 ${bgOpacity} ${inputPadding} ${inputTextSize} text-slate-100 placeholder:text-slate-400/80 transition-all duration-300 focus:border-sky-400/60 focus:outline-none focus:ring-4 focus:ring-sky-500/20 ${className}`}
        />
      </div>
    </div>
  );
}


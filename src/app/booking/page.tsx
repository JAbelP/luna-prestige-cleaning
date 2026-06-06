'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const serviceOptions = [
  'Regular Cleaning',
  'Deep Cleaning',
  'Airbnb Turnover',
  'Move-In / Move-Out',
  'Post-Construction',
  'Office Cleaning',
]

const propertyTypes = ['Home', 'Apartment', 'Airbnb', 'Office']
const timePreferences = ['Morning (8am–12pm)', 'Afternoon (12pm–4pm)', 'Evening (4pm–8pm)']

interface FormData {
  fullName: string
  email: string
  phone: string
  serviceType: string
  propertyType: string
  preferredDate: string
  preferredTime: string
  specialInstructions: string
}

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)',
  color: 'var(--color-text)',
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 0,
  padding: '1rem 1.25rem',
  outline: 'none',
  transition: 'border-color 150ms ease',
  boxSizing: 'border-box',
}

function FormField({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-xs)',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
        }}
      >
        {label}
        {required && (
          <span style={{ color: 'var(--color-accent)', marginLeft: '0.25rem' }}>
            *
          </span>
        )}
      </label>
      {children}
    </div>
  )
}

export default function BookingPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    propertyType: '',
    preferredDate: '',
    preferredTime: '',
    specialInstructions: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const focusStyle: React.CSSProperties = {
    borderColor: 'var(--color-accent)',
    boxShadow: '0 0 0 2px rgba(201, 168, 76, 0.15)',
  }

  return (
    <>
      {/* Page Hero */}
      <div
        style={{
          backgroundColor: 'var(--color-primary)',
          padding: '6rem 0 5rem',
        }}
      >
        <Container>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '1rem',
            }}
          >
            Schedule Your Service
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--color-bg)',
              lineHeight: 1.15,
            }}
          >
            Book Your Cleaning
          </h1>
          <div
            style={{
              width: '3rem',
              height: '2px',
              backgroundColor: 'var(--color-accent)',
              marginTop: '1.5rem',
            }}
          />
        </Container>
      </div>

      {/* Form Section */}
      <div style={{ padding: '5rem 0', backgroundColor: 'var(--color-bg)' }}>
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="booking-grid"
          >
            {/* Form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-accent)',
                    padding: '3rem 2.5rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.5rem',
                      color: 'var(--color-accent)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    ✦
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 'var(--text-3xl)',
                      color: 'var(--color-primary)',
                      marginBottom: '1rem',
                      lineHeight: 1.2,
                    }}
                  >
                    Request Received
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-muted)',
                      lineHeight: 1.7,
                      maxWidth: '400px',
                      margin: '0 auto',
                    }}
                  >
                    Thank you! We&apos;ll contact you within 2 hours to confirm
                    your booking.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.75rem',
                  }}
                >
                  {/* Two-column row: Name + Email */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1.5rem',
                    }}
                    className="form-row"
                  >
                    <FormField label="Full Name" required>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        style={{
                          ...inputStyle,
                          ...(focusedField === 'fullName' ? focusStyle : {}),
                        }}
                        onFocus={() => setFocusedField('fullName')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormField>
                    <FormField label="Email Address" required>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                        style={{
                          ...inputStyle,
                          ...(focusedField === 'email' ? focusStyle : {}),
                        }}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormField>
                  </div>

                  {/* Phone */}
                  <FormField label="Phone Number" required>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(305) 555-0100"
                      style={{
                        ...inputStyle,
                        ...(focusedField === 'phone' ? focusStyle : {}),
                      }}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </FormField>

                  {/* Two-column: Service + Property */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1.5rem',
                    }}
                    className="form-row"
                  >
                    <FormField label="Service Type" required>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        style={{
                          ...inputStyle,
                          cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='square'/%3E%3C/svg%3E\")",
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          paddingRight: '2.5rem',
                          ...(focusedField === 'serviceType' ? focusStyle : {}),
                        }}
                        onFocus={() => setFocusedField('serviceType')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </FormField>
                    <FormField label="Property Type" required>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required
                        style={{
                          ...inputStyle,
                          cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='square'/%3E%3C/svg%3E\")",
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          paddingRight: '2.5rem',
                          ...(focusedField === 'propertyType' ? focusStyle : {}),
                        }}
                        onFocus={() => setFocusedField('propertyType')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option value="">Select type</option>
                        {propertyTypes.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Two-column: Date + Time */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1.5rem',
                    }}
                    className="form-row"
                  >
                    <FormField label="Preferred Date" required>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        style={{
                          ...inputStyle,
                          ...(focusedField === 'preferredDate' ? focusStyle : {}),
                        }}
                        onFocus={() => setFocusedField('preferredDate')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormField>
                    <FormField label="Preferred Time" required>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        style={{
                          ...inputStyle,
                          cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='square'/%3E%3C/svg%3E\")",
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          paddingRight: '2.5rem',
                          ...(focusedField === 'preferredTime' ? focusStyle : {}),
                        }}
                        onFocus={() => setFocusedField('preferredTime')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option value="">Select time</option>
                        {timePreferences.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Special Instructions */}
                  <FormField label="Special Instructions">
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Let us know about pets, access instructions, specific areas to focus on, or any other details..."
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '120px',
                        ...(focusedField === 'specialInstructions'
                          ? focusStyle
                          : {}),
                      }}
                      onFocus={() => setFocusedField('specialInstructions')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </FormField>

                  <div style={{ paddingTop: '0.5rem' }}>
                    <Button type="submit" variant="primary">
                      Request My Quote
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--color-primary)',
                  padding: '2.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 'var(--text-2xl)',
                    color: 'var(--color-bg)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.2,
                  }}
                >
                  What to Expect
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.875rem',
                  }}
                >
                  {[
                    'Quote confirmed within 2 hours',
                    'Flexible rescheduling at no charge',
                    'Background-checked team members',
                    'Eco-certified products only',
                    'Satisfaction guaranteed',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                    >
                      <span
                        style={{
                          color: 'var(--color-accent)',
                          lineHeight: 1.6,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-sm)',
                          color: 'rgba(250, 247, 242, 0.8)',
                          lineHeight: 1.6,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  border: '1px solid var(--color-border)',
                  padding: '2rem',
                  backgroundColor: 'var(--color-surface)',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  Prefer to Call?
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 'var(--text-2xl)',
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  (305) 555-0192
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-muted)',
                  }}
                >
                  Monday – Saturday, 8am to 6pm
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .booking-grid { grid-template-columns: 1fr 380px !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

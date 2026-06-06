'use client'

import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Booking', href: '/booking' },
  { label: 'About', href: '/about' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-bg)',
      }}
    >
      {/* Main footer columns */}
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '4rem 1.5rem 3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
        }}
      >
        {/* Brand column */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '1.75rem',
                color: 'var(--color-bg)',
                lineHeight: 1,
              }}
            >
              Luna
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}
            >
              Prestige Cleaning
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'rgba(250, 247, 242, 0.7)',
              lineHeight: 1.7,
              maxWidth: '240px',
            }}
          >
            White-glove cleaning for the homes you love.
          </p>
        </div>

        {/* Quick Links column */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '1.25rem',
            }}
          >
            Quick Links
          </h4>
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {quickLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </nav>
        </div>

        {/* Contact column */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '1.25rem',
            }}
          >
            Contact
          </h4>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <FooterLink href="tel:+13055550192">(305) 555-0192</FooterLink>
            <FooterLink href="mailto:hello@lunaprestige.com">
              hello@lunaprestige.com
            </FooterLink>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'rgba(250, 247, 242, 0.7)',
              }}
            >
              Raleigh
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(201, 168, 76, 0.25)',
        }}
      >
        <div
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              color: 'rgba(250, 247, 242, 0.5)',
              letterSpacing: '0.05em',
            }}
          >
            &copy; {new Date().getFullYear()} Luna Prestige Cleaning. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              color: 'rgba(250, 247, 242, 0.5)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Licensed &amp; Insured
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        color: 'rgba(250, 247, 242, 0.7)',
        textDecoration: 'none',
        transition: 'color 150ms ease',
        display: 'inline-block',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--color-accent)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(250, 247, 242, 0.7)'
      }}
    >
      {children}
    </Link>
  )
}

'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'accent'

interface ButtonBaseProps {
  children: React.ReactNode
  variant?: ButtonVariant
  className?: string
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  type?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const baseStyles: CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-xs)',
  fontWeight: 500,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  padding: 'var(--space-4) var(--space-8)',
  border: '1px solid transparent',
  borderRadius: 0,
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
  whiteSpace: 'nowrap',
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-bg)',
    borderColor: 'var(--color-primary)',
  },
  secondary: {
    backgroundColor: 'transparent',
    color: 'var(--color-accent)',
    borderColor: 'var(--color-accent)',
  },
  accent: {
    backgroundColor: 'var(--color-accent)',
    color: 'var(--color-primary)',
    borderColor: 'var(--color-accent)',
    fontWeight: 600,
  },
}

export default function Button({
  children,
  variant = 'primary',
  className,
  href,
  onClick,
  type = 'button',
}: ButtonProps) {
  const combinedStyle: CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
  }

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={className}
        style={combinedStyle}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          if (variant === 'primary') {
            el.style.backgroundColor = 'var(--color-primary-light)'
            el.style.borderColor = 'var(--color-accent)'
          } else if (variant === 'accent') {
            el.style.backgroundColor = 'var(--color-primary)'
            el.style.color = 'var(--color-accent)'
            el.style.borderColor = 'var(--color-accent)'
          } else {
            el.style.backgroundColor = 'var(--color-accent)'
            el.style.color = 'var(--color-surface)'
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          if (variant === 'primary') {
            el.style.backgroundColor = 'var(--color-primary)'
            el.style.borderColor = 'var(--color-primary)'
          } else if (variant === 'accent') {
            el.style.backgroundColor = 'var(--color-accent)'
            el.style.color = 'var(--color-primary)'
            el.style.borderColor = 'var(--color-accent)'
          } else {
            el.style.backgroundColor = 'transparent'
            el.style.color = 'var(--color-accent)'
          }
        }}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={className}
      style={combinedStyle}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        if (variant === 'primary') {
          el.style.backgroundColor = 'var(--color-primary-light)'
          el.style.borderColor = 'var(--color-accent)'
        } else {
          el.style.backgroundColor = 'var(--color-accent)'
          el.style.color = 'var(--color-surface)'
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        if (variant === 'primary') {
          el.style.backgroundColor = 'var(--color-primary)'
          el.style.borderColor = 'var(--color-primary)'
        } else {
          el.style.backgroundColor = 'transparent'
          el.style.color = 'var(--color-accent)'
        }
      }}
    >
      {children}
    </button>
  )
}

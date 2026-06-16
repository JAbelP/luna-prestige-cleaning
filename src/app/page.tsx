import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            padding: '5rem 0',
          }}
          className="hero-grid"
        >
          {/* Text side */}
          <div
            className="anim-fade-up"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '1.5rem',
              }}
            >
              Premium Residential Cleaning · Raleigh, NC
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                lineHeight: 1.1,
                color: 'var(--color-bg)',
                marginBottom: '1.5rem',
              }}
            >
              Immaculate Homes.
              <br />
              <span style={{ color: 'var(--color-accent)' }}>
                Effortless Living.
              </span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-lg)',
                color: 'rgba(250, 247, 242, 0.75)',
                lineHeight: 1.7,
                maxWidth: '500px',
                marginBottom: '2.5rem',
              }}
            >
              Luna Prestige delivers white-glove residential cleaning across
              Raleigh. Whether you own a family home or a portfolio of Airbnb
              properties, we bring the detail and discretion your home deserves.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/booking" variant="accent">
                Book a Cleaning
              </Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>

          {/* Image placeholder side */}
          <div
            className="anim-fade-in"
            style={{
              position: 'relative',
              minHeight: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animationDelay: '0.2s',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: '480px',
                border: '2px solid var(--color-accent)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/hero-image.jpeg"
                alt="Immaculate home cleaned by Luna Prestige"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
              {/* Decorative corner lines */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  width: '40px',
                  height: '40px',
                  borderTop: '2px solid var(--color-accent)',
                  borderLeft: '2px solid var(--color-accent)',
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  right: '1.5rem',
                  width: '40px',
                  height: '40px',
                  borderBottom: '2px solid var(--color-accent)',
                  borderRight: '2px solid var(--color-accent)',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .anim-fade-up { animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .anim-fade-in { animation: fade-in 0.9s ease both; }
      `}</style>
    </div>
  )
}

// ─── Trust Bar ───────────────────────────────────────────────────────────────

function TrustBar() {
  const stats = [
    '500+ Happy Clients',
    '5-Star Rated',
    'Eco-Friendly Products',
    'Fully Insured',
  ]

  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary)',
        borderTop: '1px solid rgba(201, 168, 76, 0.3)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.3)',
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0',
            padding: '1.25rem 0',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  color: 'var(--color-bg)',
                  padding: '0 1.5rem',
                  whiteSpace: 'nowrap',
                }}
              >
                {stat}
              </span>
              {i < stats.length - 1 && (
                <span
                  style={{
                    color: 'var(--color-accent)',
                    opacity: 0.6,
                    fontSize: '1rem',
                  }}
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

// ─── Services Preview ─────────────────────────────────────────────────────────

const serviceCards = [
  {
    icon: '✦',
    name: 'Regular Cleaning',
    description:
      'Consistent, thorough maintenance cleaning to keep your home in pristine condition week after week.',
  },
  {
    icon: '◈',
    name: 'Deep Cleaning',
    description:
      'A comprehensive top-to-bottom clean covering every surface, corner, and appliance in your home.',
  },
  {
    icon: '⟡',
    name: 'Airbnb Turnover',
    description:
      'Fast, guest-ready turnovers between stays — fresh linens, restocked essentials, spotless finish.',
  },
]

function ServiceCard({
  icon,
  name,
  description,
}: {
  icon: string
  name: string
  description: string
}) {
  return (
    <div
      className="card-hover"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        padding: '2.5rem 2rem',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.75rem',
          color: 'var(--color-accent)',
          marginBottom: '1.25rem',
          lineHeight: 1,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'var(--text-2xl)',
          color: 'var(--color-primary)',
          marginBottom: '0.75rem',
          lineHeight: 1.2,
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-muted)',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
        }}
      >
        {description}
      </p>
      <Button href="/services" variant="secondary">
        Learn More
      </Button>
    </div>
  )
}

function ServicesPreview() {
  return (
    <Section>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '0.75rem',
            }}
          >
            What We Offer 
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.2,
            }}
          >
            Services Tailored to Your Home
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {serviceCards.map((card) => (
            <ServiceCard key={card.name} {...card} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  )
}

// ─── Why Luna ─────────────────────────────────────────────────────────────────

const bullets = [
  'Trained and background-checked professionals',
  'Eco-certified, non-toxic cleaning products',
  'Flexible scheduling — morning, afternoon, or evening',
  '100% satisfaction guarantee on every clean',
]

function WhyLuna() {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
        }}
        className="why-grid"
      >
        {/* Left dark panel */}
        <div
          style={{
            backgroundColor: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5rem 3rem',
            minHeight: '400px',
          }}
        >
          <div>
            <div
              style={{
                width: '3rem',
                height: '2px',
                backgroundColor: 'var(--color-accent)',
                marginBottom: '2rem',
              }}
            />
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: 'var(--color-bg)',
                lineHeight: 1.4,
                fontStyle: 'italic',
                maxWidth: '360px',
              }}
            >
              &ldquo;We treat every home as if it were our own.&rdquo;
            </blockquote>
            <div
              style={{
                width: '3rem',
                height: '2px',
                backgroundColor: 'var(--color-accent)',
                marginTop: '2rem',
              }}
            />
          </div>
        </div>

        {/* Right content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '5rem 3rem',
            backgroundColor: 'var(--color-bg)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '0.75rem',
            }}
          >
            Why Choose Luna
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.2,
              marginBottom: '2rem',
            }}
          >
            The Standard Your Home Deserves
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {bullets.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.875rem',
                }}
              >
                <span
                  style={{
                    color: 'var(--color-accent)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text)',
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .why-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}

// ─── Gallery Strip ────────────────────────────────────────────────────────────

const galleryItems = [
  { alt: 'Kitchen after deep clean', src: '/images/gallery-kitchen.jpeg' },
  { alt: 'Living room after maintenance clean', src: '/images/gallery-living-room.jpeg' },
  { alt: 'Airbnb guest-ready turnover', src: '/images/gallery-airbnb.jpeg' },
]

function GalleryStrip() {
  return (
    <Section>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '0.75rem',
            }}
          >
            Our Work
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.2,
            }}
          >
            Results That Speak for Themselves
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {galleryItems.map((item) => (
            <div key={item.src} className="gallery-img" style={{ position: 'relative', height: '280px' }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </Container>
      <style>{`
        .gallery-img { overflow: hidden; }
        .gallery-img img { transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1); }
        .gallery-img:hover img { transform: scale(1.05); }
      `}</style>
    </Section>
  )
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <Section>
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2rem',
          }}
        >
          <div
            style={{
              width: '3rem',
              height: '2px',
              backgroundColor: 'var(--color-accent)',
            }}
          />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.2,
            }}
          >
            Ready for a Spotless Home?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              color: 'var(--color-muted)',
              maxWidth: '480px',
              lineHeight: 1.7,
            }}
          >
            Join over 500 Raleigh homeowners and Airbnb hosts who trust Luna
            Prestige for a flawless clean every time.
          </p>
          <Button href="/booking" variant="primary">
            Book Your First Clean
          </Button>
        </div>
      </Container>
    </Section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyLuna />
      <GalleryStrip />
      <CTABanner />
    </>
  )
}

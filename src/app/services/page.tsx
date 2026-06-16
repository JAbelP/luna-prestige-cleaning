import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

const services = [
  {
    icon: '✦',
    name: 'Regular Cleaning',
    price: 'From $120',
    description:
      'Our weekly and biweekly maintenance service covers all rooms, surfaces, floors, and high-touch areas. Ideal for homeowners who want a consistently pristine living environment without the effort.',
  },
  {
    icon: '◈',
    name: 'Deep Cleaning',
    price: 'From $220',
    description:
      'A top-to-bottom intensive clean that goes far beyond the surface. We clean inside appliances, scrub baseboards, clear vents, and address every corner that routine cleaning overlooks.',
  },
  {
    icon: '⟡',
    name: 'Airbnb Turnover',
    price: 'From $150',
    description:
      'Fast, thorough turnovers between guests with guaranteed guest-ready results. Includes fresh linens, restocked essentials, and a detailed inspection before the next arrival.',
  },
  {
    icon: '◻',
    name: 'Move-In / Move-Out',
    price: 'From $180',
    description:
      'A complete clean for empty properties before or after tenants. We ensure every surface, cabinet, and fixture is spotless — giving you or the next resident a true fresh start.',
  },
  {
    icon: '▲',
    name: 'Post-Construction',
    price: 'From $300',
    description:
      'Specialized dust, debris, and construction residue removal following renovation or new construction. We restore your property to a clean, livable condition so you can enjoy your new space immediately.',
  },
  {
    icon: '◇',
    name: 'Office Cleaning',
    price: 'From $100',
    description:
      'Professional cleaning for small offices and creative studios. Desks, floors, bathrooms, and common areas kept spotless so your team can focus on what matters.',
  },
]

function PageHero() {
  return (
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
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '1rem',
          }}
        >
          What We Offer
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: 'var(--color-bg)',
            lineHeight: 1.15,
            maxWidth: '600px',
          }}
        >
          Our Services
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
  )
}

function ServiceCard({
  icon,
  name,
  price,
  description,
}: {
  icon: string
  name: string
  price: string
  description: string
}) {
  return (
    <div
      className="card-hover"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            color: 'var(--color-accent)',
            lineHeight: 1,
          }}
        >
          {icon}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            color: 'var(--color-accent)',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
          }}
        >
          {price}
        </span>
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'var(--text-2xl)',
          color: 'var(--color-primary)',
          lineHeight: 1.2,
        }}
      >
        {name}
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-muted)',
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        {description}
      </p>
      <div style={{ paddingTop: '0.5rem' }}>
        <Button href="/booking" variant="secondary">
          Get a Quote
        </Button>
      </div>
    </div>
  )
}

function ServicesShowcase() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '360px' }}>
      <Image
        src="/images/services-banner.jpeg"
        alt="Luna Prestige cleaning team at work"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

function ServicesGrid() {
  return (
    <Section>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

function BottomCTA() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary)',
        padding: '5rem 0',
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.75rem',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              color: 'var(--color-bg)',
              lineHeight: 1.2,
            }}
          >
            Not Sure Which Service You Need?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'rgba(250, 247, 242, 0.7)',
              maxWidth: '440px',
              lineHeight: 1.7,
            }}
          >
            Tell us about your space and we&apos;ll recommend the right service
            and provide a free, no-obligation quote within 2 hours.
          </p>
          <Button href="/booking" variant="primary">
            Request a Free Quote
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <ServicesShowcase />
      <ServicesGrid />
      <BottomCTA />
    </>
  )
}

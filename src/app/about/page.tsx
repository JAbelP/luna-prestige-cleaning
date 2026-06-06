import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const teamMembers = [
  {
    filename: 'team-luna.jpg',
    name: 'Luna R.',
    role: 'Founder & Head of Operations',
    bio: 'With over a decade of experience in premium hospitality and residential care, Luna founded Luna Prestige to bring a truly elevated standard of cleaning to Raleigh homes.',
  },
  {
    filename: 'team-detail-work.jpg',
    name: 'Maria S.',
    role: 'Lead Cleaning Specialist',
    bio: 'Maria leads every deep cleaning and turnover service, bringing meticulous attention to detail and a passion for delivering consistently perfect results.',
  },
  {
    filename: 'team-fresh-linen.jpg',
    name: 'Carlos T.',
    role: 'Client Relations',
    bio: 'Carlos ensures every client receives a seamless experience from first inquiry to post-service follow-up, coordinating schedules and guaranteeing satisfaction.',
  },
]

const values = [
  {
    icon: '◈',
    title: 'Excellence',
    description:
      'We hold every clean to the highest standard, treating no corner as too small and no detail as unimportant.',
  },
  {
    icon: '✦',
    title: 'Trust',
    description:
      'Our team is background-checked, trained, and fully insured — earning your confidence with every visit.',
  },
  {
    icon: '⟡',
    title: 'Eco-Conscious',
    description:
      'We use only eco-certified, non-toxic products that protect your family, your pets, and the environment.',
  },
  {
    icon: '◻',
    title: 'Reliability',
    description:
      'On time, every time. We respect your schedule and deliver consistent results you can count on.',
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
            fontSize: 'var(--text-xs)',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '1rem',
          }}
        >
          Our Story
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
          About Luna Prestige
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-lg)',
            color: 'rgba(250, 247, 242, 0.7)',
            marginTop: '1.25rem',
            maxWidth: '520px',
            lineHeight: 1.6,
          }}
        >
          A Raleigh-founded cleaning company built on the belief that your home
          deserves the same care and attention you give it.
        </p>
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

function OurStory() {
  return (
    <Section>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'stretch',
          }}
          className="story-grid"
        >
          {/* Text block */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: 'var(--color-primary)',
                lineHeight: 1.2,
              }}
            >
              How Luna Prestige Began
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-muted)',
                lineHeight: 1.8,
              }}
            > 
              Luna Prestige was founded in Raleigh in 2010 by Maria Nunez, a
              hospitality professional who believed that residential cleaning
              should carry the same standard of care as the finest hotels. After
              years of managing housekeeping at a luxury beachside property, Ms.Nunez
              saw a gap: homeowners and Airbnb hosts deserved a cleaning service
              that treated their spaces with genuine pride — not just efficiency.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-muted)',
                lineHeight: 1.8,
              }}
            >
              What started as a one-person operation has grown into a trusted
              team of specialists, serving hundreds of homeowners, families, and
              short-term rental hosts across Wake County. We&apos;ve built
              our reputation on detail, consistency, and the kind of care that
              only comes from people who genuinely love the work they do.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-muted)',
                lineHeight: 1.8,
              }}
            >
              Today, Luna Prestige is Raleigh&apos;s preferred cleaning partner
              for discerning homeowners who refuse to settle for less than
              immaculate.
            </p>
          </div>

          {/* Story image */}
          <div style={{ position: 'relative', minHeight: '380px' }}>
            <Image
              src="/images/about-story.png"
              alt="The Luna Prestige story"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </Container>

      <style>{`
        @media (min-width: 768px) {
          .story-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </Section>
  )
}

function MeetTheTeam() {
  return (
    <div style={{ backgroundColor: 'var(--color-primary)' }}>
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
            The People Behind Every Clean
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-bg)',
              lineHeight: 1.2,
            }}
          >
            Meet the Team
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card-hover-dark"
              style={{
                border: '1px solid rgba(201, 168, 76, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                overflow: 'hidden',
              }}
            >
              {/* Portrait */}
              <ImagePlaceholder
                label={member.name}
                dims="480 × 560 px"
                filename={member.filename}
                minHeight="220px"
              />
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 'var(--text-2xl)',
                      color: 'var(--color-bg)',
                      lineHeight: 1.2,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {member.role}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(250, 247, 242, 0.65)',
                    lineHeight: 1.7,
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
    </div>
  )
}

function Values() {
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
            What Drives Us
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
            Our Values
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="card-hover"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                padding: '2.25rem 1.75rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--color-accent)',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                {value.icon}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-muted)',
                  lineHeight: 1.7,
                }}
              >
                {value.description}
              </p>
            </div>
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
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
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
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.2,
            }}
          >
            Experience the Luna Difference
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-muted)',
              maxWidth: '440px',
              lineHeight: 1.7,
            }}
          >
            Ready to see what white-glove cleaning truly feels like? Book your
            first clean today and join the Luna family.
          </p>
          <Button href="/booking" variant="primary">
            Book a Cleaning
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <OurStory />
      <MeetTheTeam />
      <Values />
      <BottomCTA />
    </>
  )
}

export default function ImagePlaceholder({
  label,
  dims,
  minHeight = '300px',
  filename,
}: {
  label: string
  dims: string
  minHeight?: string
  filename: string
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px dashed rgba(201, 168, 76, 0.45)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '2rem',
        minHeight,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span style={{ fontSize: '1.5rem', color: 'rgba(201, 168, 76, 0.5)', lineHeight: 1 }}>◈</span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6875rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
          textAlign: 'center',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.625rem',
          letterSpacing: '0.12em',
          color: 'rgba(201, 168, 76, 0.6)',
        }}
      >
        {dims}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.5625rem',
          letterSpacing: '0.08em',
          color: 'rgba(201, 168, 76, 0.4)',
          marginTop: '0.25rem',
          fontStyle: 'italic',
        }}
      >
        {filename}
      </span>
    </div>
  )
}

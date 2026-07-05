/* Showcase section — big feature image with heading (Radiant "snapshot" block). */
function Showcase() {
  const { Container, Eyebrow, Heading, Lead } = window.BayglassDesignSystem_405762;
  return (
    <Container style={{ marginTop: '9rem' }}>
      <Eyebrow>Craftsmanship</Eyebrow>
      <Heading size="lg" style={{ margin: '0.75rem 0 0', maxWidth: '16ch' }}>
        Craftsmanship you can see straight through.
      </Heading>
      <Lead style={{ marginTop: '1.25rem' }}>
        Two decades glazing the Bay of Islands — from a single broken pane to a full
        frameless fit-out, measured, cut and installed by our own team.
      </Lead>
      <div style={{
        marginTop: '3rem',
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        aspectRatio: '16 / 8',
        background: 'var(--neutral-100)',
      }}>
        <img
          src="https://bayglass.co.nz/wp-content/uploads/bay-glass-waipapa-kerikeri2.jpg"
          alt="Bay Glass Kerikeri workshop and showroom"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </Container>
  );
}
window.Showcase = Showcase;

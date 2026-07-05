/* Dark navy section — emergencies / retrofit glazing (Radiant dark "outreach" block). */
function DarkSection() {
  const { Container, Eyebrow, Heading, Lead, BentoCard } = window.BayglassDesignSystem_405762;
  const B = 'https://bayglass.co.nz/wp-content/uploads/';
  return (
    <div style={{ marginTop: '9rem', background: 'var(--surface-dark)', padding: '6rem 0' }}>
      <Container>
        <Eyebrow dark>Always on call</Eyebrow>
        <Heading size="lg" dark style={{ margin: '0.75rem 0', maxWidth: '16ch' }}>
          Emergencies handled, day or night.
        </Heading>
        <Lead dark style={{ marginBottom: '3rem' }}>
          A smashed window doesn't wait for business hours — and neither do we.
          24-hour callouts keep your home secure until the permanent fix goes in.
        </Lead>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1.5rem' }}>
          <BentoCard dark eyebrow="Retrofit" title="Warmer, drier, healthier homes" media={B + 'Retro-picture-girl-front-300x199.jpg'}>
            Retrofit double glazing fits most existing aluminium or timber joinery —
            new-home comfort without new-home windows.
          </BentoCard>
          <BentoCard dark eyebrow="24hr callouts" title="Board-ups & glass repairs">
            Broken shopfronts, windscreens and home windows made safe fast, right across Northland.
          </BentoCard>
        </div>
      </Container>
    </div>
  );
}
window.DarkSection = DarkSection;

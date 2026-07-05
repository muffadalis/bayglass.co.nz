/* Services bento grid — the "everything we make" block. */
function Services() {
  const { Container, Eyebrow, Heading, BentoCard } = window.BayglassDesignSystem_405762;
  const B = 'https://bayglass.co.nz/wp-content/uploads/';
  const cards = [
    { e: 'Showers', t: 'Frameless glass showers', m: B + 'cubicle_shower_pakiri-1080-2.jpg', d: 'Frameless enclosures made to suit every unique bathroom — stylish, easy-clean, elegant lines.' },
    { e: 'Splashbacks', t: 'Coloured glass splashbacks', m: B + 'Splashback-4.png', d: 'Subtle tones, vibrant colour or a printed image. Custom made to your exact requirements.' },
    { e: 'Balustrades', t: 'Balustrades & handrails', m: B + 'Jacks-Bay-017-1329.jpg', d: 'Glass and aluminium systems for decks, pools, stairways and balconies — including gates.' },
  ];
  return (
    <Container style={{ marginTop: '9rem' }}>
      <Eyebrow>Our services</Eyebrow>
      <Heading size="lg" style={{ margin: '0.75rem 0 2.5rem', maxWidth: '18ch' }}>
        Everything we make, made to measure.
      </Heading>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {cards.map((c) => (
          <BentoCard key={c.t} eyebrow={c.e} title={c.t} media={c.m}>{c.d}</BentoCard>
        ))}
      </div>
    </Container>
  );
}
window.Services = Services;

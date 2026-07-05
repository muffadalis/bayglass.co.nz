/* Bayglass website — Hero + supplier strip. Radiant layout, Bayglass brand. */
function Hero() {
  const { Container, Navbar, Heading, Lead, Button, Gradient, LogoCloud } = window.BayglassDesignSystem_405762;
  return (
    <div style={{ padding: '12px' }}>
      <Gradient panel style={{ padding: '0 0 4.5rem' }}>
        <Container>
          <Navbar />
        </Container>
        <Container style={{ marginTop: '5rem' }}>
          <Heading as="h1" size="xl" style={{ maxWidth: '15ch' }}>More than just glass.</Heading>
          <Lead style={{ marginTop: '1.5rem', maxWidth: '40ch', color: 'rgba(2,48,71,0.72)' }}>
            Kerikeri's glass specialists — showers, splashbacks, balustrades and glazing,
            custom made and expertly installed across the Bay of Islands.
          </Lead>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
            <Button href="#">Get a quote</Button>
            <Button href="#" variant="secondary">Our services</Button>
          </div>
        </Container>
      </Gradient>
      <Container style={{ marginTop: '4rem' }}>
        <LogoCloud items={['LouvreTec', 'Metro Glass', 'Viridian', 'Insulglass', 'Houzz']} />
      </Container>
    </div>
  );
}
window.Hero = Hero;

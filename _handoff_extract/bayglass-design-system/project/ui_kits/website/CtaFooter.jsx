/* CTA band + footer on the soft radiant wash (Radiant closing block). */
function CtaFooter() {
  const { Container, Eyebrow, Heading, Lead, Button, Gradient, Footer } = window.BayglassDesignSystem_405762;
  return (
    <Gradient soft style={{ marginTop: '0' }}>
      <Container style={{ textAlign: 'center', padding: '7rem 0 5rem' }}>
        <Eyebrow>Get started</Eyebrow>
        <Heading size="lg" style={{ margin: '1rem auto 0', maxWidth: '18ch' }}>
          Ready to bring your space to life?
        </Heading>
        <Lead style={{ margin: '1.25rem auto 0', textAlign: 'center' }}>
          Tell us what you're picturing and we'll measure, quote and make it — free, no obligation.
        </Lead>
        <div style={{ marginTop: '2.5rem' }}>
          <Button href="#" size="lg">Get a free quote</Button>
        </div>
      </Container>
      <Container>
        <Footer />
      </Container>
    </Gradient>
  );
}
window.CtaFooter = CtaFooter;

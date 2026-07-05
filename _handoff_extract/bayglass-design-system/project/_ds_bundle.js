/* @ds-bundle: {"format":4,"namespace":"BayglassDesignSystem_405762","components":[{"name":"BentoCard","sourcePath":"components/core/BentoCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Container","sourcePath":"components/core/Container.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Footer","sourcePath":"components/core/Footer.jsx"},{"name":"Gradient","sourcePath":"components/core/Gradient.jsx"},{"name":"Heading","sourcePath":"components/core/Heading.jsx"},{"name":"Lead","sourcePath":"components/core/Lead.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"LogoCloud","sourcePath":"components/core/LogoCloud.jsx"},{"name":"Navbar","sourcePath":"components/core/Navbar.jsx"}],"sourceHashes":{"components/core/BentoCard.jsx":"62ef5a2f1a73","components/core/Button.jsx":"bb68e7d2f1f0","components/core/Container.jsx":"a7144e654828","components/core/Eyebrow.jsx":"d58d420a69c1","components/core/Footer.jsx":"6ceee02c2642","components/core/Gradient.jsx":"3fcb1cf49092","components/core/Heading.jsx":"c0c18ae93576","components/core/Lead.jsx":"ce33233d7d6e","components/core/Logo.jsx":"66d9b7809da3","components/core/LogoCloud.jsx":"8a497547bc01","components/core/Navbar.jsx":"f3566d9bc325","ui_kits/website/CtaFooter.jsx":"c3b9f0927ffa","ui_kits/website/DarkSection.jsx":"4d2ff5c10d4e","ui_kits/website/Hero.jsx":"9a7d8af2c800","ui_kits/website/Services.jsx":"3150750869ab","ui_kits/website/Showcase.jsx":"4239f56005c6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BayglassDesignSystem_405762 = window.BayglassDesignSystem_405762 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/BentoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bento-grid feature tile (Radiant "Know more about your customers" grid).
 * Light theme by default; `dark` for the navy outreach section.
 * Supply `media` (an image src or node) shown above the eyebrow + heading + body.
 */
function BentoCard({
  eyebrow,
  title,
  children,
  media,
  dark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: dark ? 'var(--surface-dark-2)' : 'var(--surface-card)',
      border: dark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-card)',
      boxShadow: dark ? 'none' : 'var(--shadow-md)',
      ...style
    }
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: dark ? 'rgba(255,255,255,0.03)' : 'var(--neutral-100)'
    }
  }, typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.75rem 1.75rem 2rem'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--color-primary)',
      marginBottom: '0.6rem'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 0.5rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, children)));
}
Object.assign(__ds_scope, { BentoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BentoCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bayglass primary action button.
 * Radiant-style pill: solid navy default, soft neutral secondary, hollow outline.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.5rem 1rem',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '0.7rem 1.4rem',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '0.9rem 1.9rem',
      fontSize: 'var(--text-lg)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--surface-dark)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--color-accent)'
    },
    secondary: {
      background: 'rgba(2,48,71,0.06)',
      color: 'var(--text-heading)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '1px solid rgba(2,48,71,0.18)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.filter = 'brightness(1.08)';
  };
  const onLeave = e => {
    e.currentTarget.style.filter = 'none';
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'none';
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: href ? undefined : disabled,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: e => {
      onLeave(e);
      onUp(e);
    },
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Container.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centered max-width content column used across every Bayglass page section. */
function Container({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '100%',
      maxWidth: 'var(--container-max)',
      marginInline: 'auto',
      paddingInline: 'var(--container-pad)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Container });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Container.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase, letter-spaced eyebrow label that sits above section headings (Radiant style). */
function Eyebrow({
  children,
  dark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--color-primary)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Gradient.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The signature Bayglass "radiant" gradient — sky-blue drifting into gold/orange.
 * `panel` renders a rounded hero card (Radiant hero); `soft` uses the pale wash.
 */
function Gradient({
  children,
  panel = false,
  soft = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: soft ? 'var(--gradient-radiant-soft)' : 'var(--gradient-radiant)',
      borderRadius: panel ? 'var(--radius-2xl)' : 0,
      boxShadow: panel ? 'var(--shadow-ring)' : 'none',
      overflow: 'hidden',
      position: 'relative',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Gradient });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Gradient.jsx", error: String((e && e.message) || e) }); }

// components/core/Heading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bayglass display heading — Space Grotesk, tight tracking, low leading.
 * `size` maps to the Radiant heading scale; `dark` flips color for navy sections.
 */
function Heading({
  children,
  size = 'lg',
  as = 'h2',
  dark = false,
  style = {},
  ...rest
}) {
  const sizes = {
    xl: 'var(--text-7xl)',
    // hero
    lg: 'var(--text-5xl)',
    // section
    md: 'var(--text-4xl)',
    // sub-section
    sm: 'var(--text-3xl)' // card / small
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: sizes[size],
      lineHeight: size === 'xl' ? 'var(--leading-tight)' : 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      textWrap: 'balance',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Heading.jsx", error: String((e && e.message) || e) }); }

// components/core/Lead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Large intro paragraph that follows a heading (Work Sans, muted). */
function Lead({
  children,
  dark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 'var(--leading-relaxed)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
      maxWidth: '42ch',
      textWrap: 'pretty',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Lead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Lead.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bayglass wordmark. Renders the brand name in Michroma (the logo typeface).
 * `dark` for use on light surfaces (navy ink); default light for dark surfaces.
 */
function Logo({
  dark = false,
  showLocation = true,
  style = {},
  ...rest
}) {
  const ink = dark ? 'var(--bg-navy)' : '#ffffff';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.55rem',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '3px'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 22,
      background: 'var(--bg-sky)',
      transform: 'skewX(-16deg)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 22,
      background: 'var(--bg-blue)',
      transform: 'skewX(-16deg)',
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-logo)',
      fontSize: '1.1rem',
      letterSpacing: '0.01em',
      color: ink,
      lineHeight: 1
    }
  }, "BAYGLASS"), showLocation && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-logo)',
      fontSize: '0.6rem',
      letterSpacing: '0.18em',
      color: dark ? 'var(--color-primary)' : 'var(--bg-sky)',
      lineHeight: 1
    }
  }, "KERIKERI"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radiant-style footer: brand + link columns on the soft gradient, fine dividers. */
function Footer({
  columns = [{
    title: 'Services',
    links: ['Glass & glazing', 'Splashbacks', 'Glass showers', 'Balustrades']
  }, {
    title: 'Company',
    links: ['About', 'Testimonials', 'Contact', 'Careers']
  }, {
    title: 'Support',
    links: ['24hr callouts', 'Get a quote', 'Warranty']
  }],
  legal = '© 2026 Bay Glass Kerikeri Ltd.',
  style = {},
  ...rest
}) {
  const linkStyle = {
    color: 'var(--text-body)',
    textDecoration: 'none',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-body)',
    display: 'block',
    padding: '0.35rem 0'
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: '2rem',
      padding: '3.5rem 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    dark: true
  })), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginBottom: '0.5rem',
      fontWeight: 'var(--weight-medium)'
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkStyle
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 0',
      borderTop: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", null, "09-407 9035 \xB7 40 Klinac Lane, Waipapa")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Footer.jsx", error: String((e && e.message) || e) }); }

// components/core/LogoCloud.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal partner / brand strip (Radiant logo cloud). Renders text wordmarks by default. */
function LogoCloud({
  items = ['LouvreTec', 'Metro Glass', 'Viridian', 'Insulglass', 'Houzz'],
  dark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
      ...style
    }
  }, rest), items.map(it => /*#__PURE__*/React.createElement("span", {
    key: typeof it === 'string' ? it : it.key,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      opacity: 0.85
    }
  }, it)));
}
Object.assign(__ds_scope, { LogoCloud });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LogoCloud.jsx", error: String((e && e.message) || e) }); }

// components/core/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bayglass top navigation — Radiant layout: wordmark left, optional announcement
 * pill, nav links + action right. Sits on the light gradient panel.
 */
function Navbar({
  links = [{
    label: 'Services',
    href: '#'
  }, {
    label: 'Testimonials',
    href: '#'
  }, {
    label: 'About',
    href: '#'
  }, {
    label: 'Contact',
    href: '#'
  }],
  banner = '24-hour emergency callouts — Northland wide',
  cta = {
    label: 'Get a quote',
    href: '#'
  },
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      padding: '1.25rem 0',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    dark: true
  }), banner && /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      padding: '0.35rem 0.9rem',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(2,48,71,0.06)',
      color: 'var(--text-heading)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, banner, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.75rem'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      color: 'var(--text-heading)',
      textDecoration: 'none',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)'
    }
  }, l.label)), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: cta.href,
    size: "sm"
  }, cta.label)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CtaFooter.jsx
try { (() => {
/* CTA band + footer on the soft radiant wash (Radiant closing block). */
function CtaFooter() {
  const {
    Container,
    Eyebrow,
    Heading,
    Lead,
    Button,
    Gradient,
    Footer
  } = window.BayglassDesignSystem_405762;
  return /*#__PURE__*/React.createElement(Gradient, {
    soft: true,
    style: {
      marginTop: '0'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      textAlign: 'center',
      padding: '7rem 0 5rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Get started"), /*#__PURE__*/React.createElement(Heading, {
    size: "lg",
    style: {
      margin: '1rem auto 0',
      maxWidth: '18ch'
    }
  }, "Ready to bring your space to life?"), /*#__PURE__*/React.createElement(Lead, {
    style: {
      margin: '1.25rem auto 0',
      textAlign: 'center'
    }
  }, "Tell us what you're picturing and we'll measure, quote and make it \u2014 free, no obligation."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#",
    size: "lg"
  }, "Get a free quote"))), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Footer, null)));
}
window.CtaFooter = CtaFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CtaFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DarkSection.jsx
try { (() => {
/* Dark navy section — emergencies / retrofit glazing (Radiant dark "outreach" block). */
function DarkSection() {
  const {
    Container,
    Eyebrow,
    Heading,
    Lead,
    BentoCard
  } = window.BayglassDesignSystem_405762;
  const B = 'https://bayglass.co.nz/wp-content/uploads/';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '9rem',
      background: 'var(--surface-dark)',
      padding: '6rem 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, "Always on call"), /*#__PURE__*/React.createElement(Heading, {
    size: "lg",
    dark: true,
    style: {
      margin: '0.75rem 0',
      maxWidth: '16ch'
    }
  }, "Emergencies handled, day or night."), /*#__PURE__*/React.createElement(Lead, {
    dark: true,
    style: {
      marginBottom: '3rem'
    }
  }, "A smashed window doesn't wait for business hours \u2014 and neither do we. 24-hour callouts keep your home secure until the permanent fix goes in."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement(BentoCard, {
    dark: true,
    eyebrow: "Retrofit",
    title: "Warmer, drier, healthier homes",
    media: B + 'Retro-picture-girl-front-300x199.jpg'
  }, "Retrofit double glazing fits most existing aluminium or timber joinery \u2014 new-home comfort without new-home windows."), /*#__PURE__*/React.createElement(BentoCard, {
    dark: true,
    eyebrow: "24hr callouts",
    title: "Board-ups & glass repairs"
  }, "Broken shopfronts, windscreens and home windows made safe fast, right across Northland."))));
}
window.DarkSection = DarkSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DarkSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Bayglass website — Hero + supplier strip. Radiant layout, Bayglass brand. */
function Hero() {
  const {
    Container,
    Navbar,
    Heading,
    Lead,
    Button,
    Gradient,
    LogoCloud
  } = window.BayglassDesignSystem_405762;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px'
    }
  }, /*#__PURE__*/React.createElement(Gradient, {
    panel: true,
    style: {
      padding: '0 0 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Navbar, null)), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: '5rem'
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    as: "h1",
    size: "xl",
    style: {
      maxWidth: '15ch'
    }
  }, "More than just glass."), /*#__PURE__*/React.createElement(Lead, {
    style: {
      marginTop: '1.5rem',
      maxWidth: '40ch',
      color: 'rgba(2,48,71,0.72)'
    }
  }, "Kerikeri's glass specialists \u2014 showers, splashbacks, balustrades and glazing, custom made and expertly installed across the Bay of Islands."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#"
  }, "Get a quote"), /*#__PURE__*/React.createElement(Button, {
    href: "#",
    variant: "secondary"
  }, "Our services")))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(LogoCloud, {
    items: ['LouvreTec', 'Metro Glass', 'Viridian', 'Insulglass', 'Houzz']
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Services bento grid — the "everything we make" block. */
function Services() {
  const {
    Container,
    Eyebrow,
    Heading,
    BentoCard
  } = window.BayglassDesignSystem_405762;
  const B = 'https://bayglass.co.nz/wp-content/uploads/';
  const cards = [{
    e: 'Showers',
    t: 'Frameless glass showers',
    m: B + 'cubicle_shower_pakiri-1080-2.jpg',
    d: 'Frameless enclosures made to suit every unique bathroom — stylish, easy-clean, elegant lines.'
  }, {
    e: 'Splashbacks',
    t: 'Coloured glass splashbacks',
    m: B + 'Splashback-4.png',
    d: 'Subtle tones, vibrant colour or a printed image. Custom made to your exact requirements.'
  }, {
    e: 'Balustrades',
    t: 'Balustrades & handrails',
    m: B + 'Jacks-Bay-017-1329.jpg',
    d: 'Glass and aluminium systems for decks, pools, stairways and balconies — including gates.'
  }];
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: '9rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our services"), /*#__PURE__*/React.createElement(Heading, {
    size: "lg",
    style: {
      margin: '0.75rem 0 2.5rem',
      maxWidth: '18ch'
    }
  }, "Everything we make, made to measure."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem'
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(BentoCard, {
    key: c.t,
    eyebrow: c.e,
    title: c.t,
    media: c.m
  }, c.d))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Showcase.jsx
try { (() => {
/* Showcase section — big feature image with heading (Radiant "snapshot" block). */
function Showcase() {
  const {
    Container,
    Eyebrow,
    Heading,
    Lead
  } = window.BayglassDesignSystem_405762;
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: '9rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Craftsmanship"), /*#__PURE__*/React.createElement(Heading, {
    size: "lg",
    style: {
      margin: '0.75rem 0 0',
      maxWidth: '16ch'
    }
  }, "Craftsmanship you can see straight through."), /*#__PURE__*/React.createElement(Lead, {
    style: {
      marginTop: '1.25rem'
    }
  }, "Two decades glazing the Bay of Islands \u2014 from a single broken pane to a full frameless fit-out, measured, cut and installed by our own team."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3rem',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '16 / 8',
      background: 'var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://bayglass.co.nz/wp-content/uploads/bay-glass-waipapa-kerikeri2.jpg",
    alt: "Bay Glass Kerikeri workshop and showroom",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })));
}
window.Showcase = Showcase;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Showcase.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BentoCard = __ds_scope.BentoCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Container = __ds_scope.Container;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Gradient = __ds_scope.Gradient;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.Lead = __ds_scope.Lead;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LogoCloud = __ds_scope.LogoCloud;

__ds_ns.Navbar = __ds_scope.Navbar;

})();

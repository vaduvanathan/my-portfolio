# Extractable Components

## SiteHeader
- Source: `script.js:renderHeader`
- Category: layout
- Description: Fixed portfolio navigation with desktop links and responsive mobile menu.
- Extractable props: none; links are site-specific.
- Hardcoded: logo, navigation labels, View Work action, CSS classes.

## HeroSection
- Source: `script.js:renderHero`
- Category: layout
- Description: Introductory identity block with primary actions and animated robotics schematic.
- Extractable props: none; copy and SVG are portfolio-specific.
- Hardcoded: hero copy, scene labels, SVG geometry, CSS classes.

## SpotlightCard
- Source: `style.css:.spotlight-card`
- Category: basic
- Description: Shared translucent surface with hover illumination used for content blocks.
- Extractable props: none; current implementation is CSS-only.
- Hardcoded: border, surface, hover treatment.

## SiteFooter
- Source: `script.js:renderFooter`
- Category: layout
- Description: Minimal copyright footer.
- Extractable props: none.
- Hardcoded: copyright format and styling.

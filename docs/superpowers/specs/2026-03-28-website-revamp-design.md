# Website Revamp Design — Alruwaimi Law Firm

**Date:** 2026-03-28
**Goal:** Revamp alruwaimi-law.com from generic template feel to a premium "Editorial Luxury" identity that converts B2B and fintech/PDPL clients.
**Constraints:** Single `index.html` file, Cloudflare Workers + Assets hosting, Arabic RTL primary with English accents.

---

## Design Direction: Editorial Luxury

High-end magazine meets law firm. Dramatic typographic hierarchy, dark/light rhythm, generous whitespace, editorial left-aligned headers. Every section has a clear purpose in guiding visitors toward action (WhatsApp/email).

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--charcoal` | `#1A1A1A` | Dark section backgrounds (hero, lawyer, footer) |
| `--warm-white` | `#F5F2EB` | Light section backgrounds |
| `--gold` | `#C8A84E` | Primary accent — headings, buttons, lines |
| `--gold-light` | `#D4B96A` | Hover states |
| `--text-on-dark` | `#E8E2D6` | Body text on dark backgrounds |
| `--text-on-light` | `#2C2C2C` | Body text on light backgrounds |
| `--gold-subtle` | `rgba(200,168,78,0.2)` | Borders, dividers |

## Typography

- **Display/headings:** Amiri (Google Fonts) — elegant Arabic serif for firm name, section headers, key statements
- **Body/UI:** Tajawal (already loaded) — clean sans-serif for paragraphs, buttons, navigation
- **English accents:** Tajawal Light with letter-spacing for the English firm name and small labels
- **Headers are left-aligned** (right-aligned in RTL context), not centered — editorial style

## Page Sections (in order)

### 1. Navigation

- Fixed top, blur backdrop
- Firm name (Amiri, gold) on the right
- Nav links on the left: خدماتنا | حماية البيانات | المحامية | تواصل معنا (gold CTA button)
- Shrinks slightly on scroll with subtle shadow increase
- Mobile: hamburger menu

### 2. Hero

- Full viewport height, dark charcoal background with subtle radial warm gradient
- No SVG icon — typography-driven
- Firm name in large Amiri serif, centered
- English name "ALRUWAIMI LAW FIRM" below in small tracked-out Tajawal Light
- Thin gold horizontal line divider
- Tagline in gold: "خبرة قانونية.. نتائج موثوقة"
- Two buttons: "احجز استشارتك" (primary, gold fill → WhatsApp) + "تعرّف على خدماتنا" (gold outline → services)
- Staggered fade-in animation on load (name → line → tagline → buttons, 100ms delays)

### 3. Trust Bar

- Narrow horizontal strip, warm-white background (#F5F2EB)
- 3 trust signals in a row, separated by gold diamond (◆):
  - محامية مرخصة من وزارة العدل
  - عضو الهيئة السعودية للمحامين
  - متخصصون في PDPL والامتثال التنظيمي
- Small text, no icons, no cards — purely typographic
- Purpose: early credibility for scanning B2B visitors

### 4. Services

- Light warm-white background
- Section header: "خدماتنا" in large Amiri serif, right-aligned (RTL), gold underline
- Asymmetric grid layout:
  - **Left 2/3 (RTL: right 2/3):** Featured PDPL block
    - Dark charcoal card with gold accent border on one side
    - Compelling paragraph + 3 key bullets (تقييم الامتثال، DPO خارجي، الاستجابة للحوادث)
    - Highlighted penalty callout: غرامة ٥ م.ر
    - Own CTA: "اطلب تقييم مجاني" → WhatsApp
  - **Right 1/3 (RTL: left 1/3):** Three service cards stacked
    - ٠١ القضايا التجارية
    - ٠٢ القضايا العقارية
    - ٠٣ التنفيذ والتوثيق
    - Each: title + one-line description, thin gold top border on hover
    - Gold numbered labels (not emoji icons)

### 5. About the Lawyer

- Full-width dark charcoal background
- Two-column layout:
  - **Right column:** Initials circle (thin gold ring outline, not solid fill) with "إ.ر", name "أ. ابتسام الرويمي" and title below
  - **Left column:** Bio content
    - Opening line in gold Amiri: "محامية سعودية تجمع بين الخبرة القانونية والفهم العملي لتحديات الأعمال"
    - 2 condensed bio paragraphs (warm off-white text)
    - Qualifications as numbered list (gold numbers ١–٧) with generous line spacing, no bullet decorations

### 6. Contact

- Light warm-white background
- Centered editorial layout
- Header: "تواصل معنا" in Amiri serif
- Subtitle: "نسعد بخدمتكم والإجابة على استفساراتكم القانونية"
- Two prominent buttons:
  - WhatsApp (primary gold fill, large) → wa.me/966505557277
  - Email (gold outline) → mailto:info@alruwaimi-law.com
- No cards, no map, no phone card — two clear actions only

### 7. Footer

- Dark charcoal background
- Firm name in gold (Amiri)
- Copyright line
- Single row of nav links + privacy policy link
- Compact and minimal

### 8. Floating WhatsApp Button

- Fixed position, bottom-left (RTL layout)
- Gold circle with white WhatsApp icon
- Always visible on scroll
- Links to wa.me/966505557277
- Subtle pulse animation on first appearance, then static

### 9. Privacy Policy Modal

- Same modal approach as current site
- Triggered from footer link
- Styled to match new dark/gold palette

## Removed from Current Site

- Blog section (placeholder content with no real articles)
- Scale SVG icon in hero
- Emoji icons on service cards
- Beige/light-only palette
- Centered section headers
- About stats grid (٦+ مجالات، ٣ درجات، etc.) — trust bar replaces this
- Consultation form section (already removed, WhatsApp is primary CTA)

## Motion & Animation

- **Page load:** Staggered fade-up with 100ms delays between hero elements
- **Scroll:** Elements fade up (opacity 0 → 1, translateY 30px → 0) on viewport entry, threshold 0.1
- **Hover:** Gold border transitions on service cards (0.3s), button background glow
- **Nav:** Backdrop blur, shadow increases on scroll
- **WhatsApp button:** Single pulse animation on first appearance

## Responsive Behavior

- **Desktop (>900px):** Full layouts as described
- **Mobile (<=900px):**
  - Single column for all sections
  - Hamburger menu
  - PDPL featured block stacks full-width above other service cards
  - Lawyer section: photo/initials above bio text
  - WhatsApp floating button always visible
  - Hero text sizes scale down (firm name ~2rem, tagline ~1.1rem)

## Technical Notes

- Single `index.html` file with inline CSS and JS (current architecture preserved)
- Google Fonts: add Amiri, keep Tajawal
- CSS custom properties for all color tokens
- IntersectionObserver for scroll animations (current approach)
- No external dependencies beyond Google Fonts

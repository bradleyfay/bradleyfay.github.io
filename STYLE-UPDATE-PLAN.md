# Style Update Plan

*Created: December 2024*
*Purpose: Bring all pages and components into alignment with the new prose-first design*

---

## Design Philosophy Recap

**Understated, blog-style presentation** inspired by lethain.com and pragmaticengineer.com.

### Core Principles
1. **Prose-first**: Let content speak, no promotional elements
2. **System fonts**: No Google Fonts, use native font stack
3. **Left-aligned**: No centered headers or promotional hero sections
4. **Simple layouts**: Lists over grids, text over cards
5. **No decorative elements**: No hover transforms, shadows, badges, or icons

---

## Style Audit Findings

### Pages Needing Updates

#### 1. about.astro (HIGH PRIORITY)

**Current Issues**:
- **Hero section** with centered header - should be left-aligned page header
- **Expertise grid** with card backgrounds - should be simple prose list
- **Background color sections** (alternating) - should be uniform white
- **Timeline with decorative dots/lines** - should be simple text-based
- Uses `var(--font-serif)` for timeline years - should use sans-serif
- Overly complex section structure

**Target State**:
- Simple page header (left-aligned h1 + lead paragraph)
- Bio section with prose paragraphs
- Expertise as simple headers with paragraph descriptions (no cards)
- Timeline as simple list or integrated into prose
- Single background color throughout

**Files**: `src/pages/about.astro`

---

#### 2. speaking.astro (HIGH PRIORITY)

**Current Issues**:
- **Centered page header** - should be left-aligned
- **SpeakingCard grid** with promotional card styling - should be simple list
- **CTA card** ("Interested in a conversation?") - promotional, remove entirely
- **CTA button** with hover effects - remove
- Uses `SpeakingCard` component with icons and badges

**Target State**:
- Left-aligned page header with lead paragraph
- Simple list of speaking engagements (title, venue, date as text)
- No cards, no CTA section
- Match the Writing page list style

**Files**: `src/pages/speaking.astro`, `src/components/SpeakingCard.astro`

---

### Layout Issues

#### 3. BaseLayout.astro (MEDIUM PRIORITY)

**Current Issues**:
- Loads **Google Fonts** (Inter + Libre Baskerville)
- New design uses system fonts - Google Fonts add unnecessary load time
- `var(--font-serif)` should not be used anywhere

**Target State**:
- Remove Google Fonts `<link>` tags
- Rely entirely on system font stack defined in global.css

**Files**: `src/layouts/BaseLayout.astro`

---

### Components Needing Updates

#### 4. SpeakingCard.astro (MEDIUM PRIORITY)

**Current Issues**:
- Full promotional card with:
  - Type icons (podcast, conference, etc.)
  - Type badges
  - `var(--font-serif)` for title
  - Hover transform/shadow effects
  - Arrow animation on links
- Too complex for prose-first design

**Options**:
- **Option A**: Simplify to minimal styling (remove icons, badges, hover effects)
- **Option B**: Replace entirely with inline list items in speaking.astro

**Recommendation**: Option B - inline the simple list rendering

**Files**: `src/components/SpeakingCard.astro`

---

#### 5. global.css (LOW PRIORITY)

**Current Issues**:
- Defines `--font-serif: Georgia, 'Times New Roman', serif`
- This font family shouldn't be used in the new design
- Harmless but could cause confusion

**Target State**:
- Remove or comment out `--font-serif` definition
- Add comment noting sans-serif-only design choice

**Files**: `src/styles/global.css`

---

### Components to Remove/Deprecate

#### 6. Unused Components (LOW PRIORITY)

These components are no longer used in the updated design:

| Component | Status | Recommendation |
|-----------|--------|----------------|
| `src/components/case-study/*` | Untracked | Delete directory |
| `CaseStudyCard.astro` | Unused | Delete or move to archive |
| `Navigation.astro` | Replaced by Header.astro | Delete or keep as backup |
| `ContactLinks.astro` | Replaced by Footer.astro | Delete or keep as backup |
| `ExpertiseCard.astro` | Will be unused after about.astro update | Delete |
| `TimelineItem.astro` | Will be unused after about.astro update | Delete |

**Files**: Various in `src/components/`

---

## Implementation Checklist

### Phase 1: Pages (Critical Path)

- [ ] **about.astro** - Redesign to prose-first layout
  - [ ] Replace hero section with simple page header
  - [ ] Convert expertise grid to prose sections
  - [ ] Simplify timeline to text-only (no decorative elements)
  - [ ] Remove background color alternation
  - [ ] Remove serif font usage

- [ ] **speaking.astro** - Simplify to list layout
  - [ ] Replace centered header with left-aligned
  - [ ] Replace SpeakingCard grid with simple list
  - [ ] Remove CTA section entirely
  - [ ] Match styling to Writing page

### Phase 2: Layout & Components

- [ ] **BaseLayout.astro** - Remove Google Fonts
  - [ ] Remove `<link>` tags for fonts.googleapis.com
  - [ ] Test that system fonts render correctly

- [ ] **SpeakingCard.astro** - Deprecate or simplify
  - [ ] If keeping: strip to minimal text-only
  - [ ] If removing: inline list in speaking.astro

- [ ] **global.css** - Clean up
  - [ ] Remove or comment `--font-serif` variable
  - [ ] Add design note comment

### Phase 3: Cleanup

- [ ] Delete `src/components/case-study/` directory
- [ ] Delete unused components:
  - [ ] `CaseStudyCard.astro`
  - [ ] `Navigation.astro`
  - [ ] `ContactLinks.astro`
  - [ ] `ExpertiseCard.astro`
  - [ ] `TimelineItem.astro`

---

## Style Reference

### Page Header Pattern (Use This)

```astro
<header class="page-header">
  <h1>Page Title</h1>
  <p class="lead">
    Brief description of the page content.
  </p>
</header>

<style>
  .page-header {
    margin-bottom: var(--space-2xl);
  }

  .page-header h1 {
    margin-bottom: var(--space-sm);
  }

  .lead {
    color: var(--color-text-muted);
    font-size: var(--text-lg);
    max-width: var(--content-width);
    margin: 0;
  }
</style>
```

### List Item Pattern (Use This)

```astro
<ul class="item-list">
  {items.map(item => (
    <li class="item">
      <a href={item.url} class="item-link">
        <span class="item-title">{item.title}</span>
      </a>
      <p class="item-description">{item.description}</p>
      <span class="item-meta">{item.meta}</span>
    </li>
  ))}
</ul>

<style>
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .item {
    padding: var(--space-lg) 0;
    border-bottom: 1px solid var(--color-border);
  }

  .item:first-child {
    padding-top: 0;
  }

  .item:last-child {
    border-bottom: none;
  }

  .item-link {
    display: block;
    text-decoration: none;
    margin-bottom: var(--space-sm);
  }

  .item-title {
    display: block;
    font-weight: 600;
    font-size: var(--text-lg);
    color: var(--color-accent);
  }

  .item-description {
    color: var(--color-text);
    line-height: 1.6;
    margin: 0;
    max-width: var(--content-width);
  }

  .item-meta {
    display: block;
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    margin-top: var(--space-xs);
  }
</style>
```

### What NOT to Use

- Card components with backgrounds, borders, border-radius
- Hover transforms (`transform: translateY(-2px)`)
- Box shadows on interactive elements
- Icon badges or type indicators
- CTA buttons with accent background
- Centered text alignment for headers
- Grid layouts for content lists
- `var(--font-serif)` anywhere
- Google Fonts

---

## Testing Checklist

After each phase, verify:

- [ ] Pages render without errors
- [ ] No visual regression in updated pages
- [ ] No console errors
- [ ] Lighthouse performance score maintained
- [ ] Typography is consistent (system sans-serif only)
- [ ] All links work correctly
- [ ] Mobile responsive layout works

---

## Notes

### Design Inspiration Reference

- **lethain.com**: Text-first, no cards, simple lists
- **pragmaticengineer.com**: Essay-focused, minimal chrome
- **charity.wtf**: Personality in prose, not visual elements

### Key Insight

The old design tried to "look professional" through visual complexity (cards, gradients, icons, animations). The new design establishes credibility through content quality and restraint. Less design = more trust.

---

*This plan should be worked through in order. Phase 1 has the highest visual impact.*

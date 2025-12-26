# Case Study Page Redesign: Implementation Plan

*Created: December 2024*
*Approach: Stripe-style Technical Narrative + Intercom Framework Posters*

---

## Executive Summary

Redesign the case study pages to match the technical depth expected by VP-level hiring managers, drawing inspiration from Stripe's engineering blog narrative style and Intercom's shareable framework posters. The goal is to transform text-heavy case studies into visual proof of impact and systematic thinking.

---

## Design Philosophy

### Primary References
1. **Stripe Engineering Blog** - Technical narrative with progressive diagrams, chronological problem-solving
2. **Intercom Articles** - Bold framework posters, color-coded visual systems, shareable graphics

### Key Principles
- Lead with impact (hero stat banner above the fold)
- Progressive disclosure (problem → investigation → solution → result)
- Visual proof at every stage (diagrams, charts, framework posters)
- Scannable for busy executives (pull quotes, stat callouts)
- Shareable artifacts (framework posters as standalone images)

---

## Component Architecture

### New Components to Create

```
website/src/components/case-study/
├── HeroStatBanner.astro       # Impact metrics above the fold
├── FrameworkPoster.astro      # Shareable framework visualization
├── ProgressiveDiagram.astro   # Before/after or timeline diagrams
├── PullQuote.astro            # Key insight callouts
├── MetricCard.astro           # Individual metric display
├── TimelineSection.astro      # Chronological narrative blocks
├── TechnicalDetail.astro      # Expandable technical depth
└── index.ts                   # Barrel export
```

---

## Component Specifications

### 1. HeroStatBanner

**Purpose**: Immediately communicate transformation magnitude above the fold.

**Location**: Below header, before any prose content.

**Props**:
```typescript
interface HeroStatBannerProps {
  stats: Array<{
    before: string;        // e.g., "6%"
    after: string;         // e.g., "100+"
    label: string;         // e.g., "Valid Experiments"
    unit?: string;         // e.g., "concurrent"
  }>;
  variant?: 'transformation' | 'impact' | 'scale';
}
```

**Visual Design**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   6% ────────────────────────────────────→ 100s            │
│   Valid Experiments           Concurrent Experiments        │
│                                                             │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│   │    90%      │  │   $100M+    │  │    Self-    │        │
│   │  Volatility │  │   Revenue   │  │  Sustaining │        │
│   │  Reduction  │  │   Impact    │  │   System    │        │
│   └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**CSS Variables**:
```css
--hero-stat-bg: var(--color-surface);
--hero-stat-accent: var(--color-accent);
--hero-stat-arrow: linear-gradient(90deg, var(--color-text-muted), var(--color-accent));
--hero-stat-card-bg: var(--color-background);
```

**Implementation Notes**:
- Arrow animation on scroll into view (subtle, 0.5s ease)
- Stat cards use CSS Grid for responsive layout
- Before/after values use larger font weight (700)
- Labels use smaller, muted text
- Full-width on mobile, contained on desktop

---

### 2. FrameworkPoster

**Purpose**: Shareable visual artifact showcasing systematic thinking.

**Use Cases**:
- "8 Dimensions of Experimentation Excellence"
- "Consensus-First Framework"
- "Offer Optimization Architecture"

**Props**:
```typescript
interface FrameworkPosterProps {
  title: string;
  subtitle?: string;
  type: 'radar' | 'matrix' | 'flow' | 'grid' | 'timeline';
  items: Array<{
    label: string;
    description?: string;
    icon?: string;          // Emoji or icon name
    highlight?: boolean;    // Emphasize this item
  }>;
  downloadable?: boolean;   // Show download button
  citation?: string;        // Attribution/source
}
```

**Visual Design (Grid Type)**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         8 DIMENSIONS OF EXPERIMENTATION EXCELLENCE          │
│              Building a Best-in-Class Platform              │
│                                                             │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │
│   │ 📊 Analysis   │  │ 🚩 Feature    │  │ ⚡ Automation │  │
│   │   Platform    │  │    Flags      │  │               │  │
│   │ Statistical   │  │ Safe rollout  │  │ Self-service  │  │
│   │ rigor & viz   │  │ & targeting   │  │ experiment    │  │
│   └───────────────┘  └───────────────┘  └───────────────┘  │
│                                                             │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │
│   │ 📚 Education  │  │ 🔄 Process    │  │ 📏 Standards  │  │
│   │               │  │               │  │               │  │
│   │ Org-wide      │  │ Experiment    │  │ Naming, docs, │  │
│   │ training      │  │ lifecycle     │  │ review gates  │  │
│   └───────────────┘  └───────────────┘  └───────────────┘  │
│                                                             │
│   ┌───────────────┐  ┌───────────────┐                     │
│   │ 🏗️ Infra      │  │ 🎯 Culture    │                     │
│   │               │  │               │                     │
│   │ Data pipeline │  │ Experiment-   │     [Download ↓]    │
│   │ reliability   │  │ first mindset │                     │
│   └───────────────┘  └───────────────┘                     │
│                                                             │
│                          © Bradley Fay                      │
└─────────────────────────────────────────────────────────────┘
```

**CSS Design System**:
```css
.framework-poster {
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-background) 100%);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: var(--space-2xl);
  margin: var(--space-2xl) 0;
}

.framework-poster__title {
  font-size: var(--text-2xl);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  color: var(--color-text);
}

.framework-poster__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-md);
}

.framework-poster__item {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-md);
  text-align: center;
}

.framework-poster__icon {
  font-size: 2rem;
  margin-bottom: var(--space-sm);
}

.framework-poster__download {
  position: absolute;
  bottom: var(--space-md);
  right: var(--space-md);
}
```

**Implementation Notes**:
- Generate OG image version for social sharing (1200x630)
- Download button generates PNG via html2canvas or pre-rendered
- Poster is self-contained (no external dependencies for screenshot)
- Consider dark mode variant

---

### 3. ProgressiveDiagram

**Purpose**: Show before/after transformation or timeline progression.

**Props**:
```typescript
interface ProgressiveDiagramProps {
  type: 'before-after' | 'timeline' | 'funnel' | 'flow';
  title?: string;

  // For before-after type
  before?: {
    label: string;
    items: string[];
    color?: string;
  };
  after?: {
    label: string;
    items: string[];
    color?: string;
  };

  // For timeline type
  milestones?: Array<{
    date: string;
    title: string;
    description: string;
    metric?: string;
  }>;
}
```

**Visual Design (Before/After)**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  BEFORE                              AFTER                  │
│  ────────                            ─────                  │
│                                                             │
│  ┌─────────────────┐                ┌─────────────────┐    │
│  │ ❌ Ad-hoc       │                │ ✅ Systematic   │    │
│  │   decisions     │                │   framework     │    │
│  ├─────────────────┤    ═════▶      ├─────────────────┤    │
│  │ ❌ 6% validity  │                │ ✅ 100+ valid   │    │
│  │   rate          │                │   concurrent    │    │
│  ├─────────────────┤                ├─────────────────┤    │
│  │ ❌ No trust in  │                │ ✅ Org-wide     │    │
│  │   results       │                │   confidence    │    │
│  └─────────────────┘                └─────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Visual Design (Timeline)**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ●────────────●────────────●────────────●────────────●     │
│  │            │            │            │            │     │
│  Q1 2022      Q2 2022      Q3 2022      Q4 2022      2023+ │
│  ─────────    ─────────    ─────────    ─────────    ───── │
│  Discovery    Meta-        Quick Win    Full         Scale │
│  & Audit      Analysis     Deploy       Framework    & Hand│
│                                                      off   │
│  6 valid      Root cause   90% fix      8 dims      100s  │
│  experiments  identified   shipped      complete    concur │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 4. PullQuote

**Purpose**: Highlight key insights for scanning executives.

**Props**:
```typescript
interface PullQuoteProps {
  quote: string;
  attribution?: string;
  variant?: 'insight' | 'result' | 'lesson';
  icon?: string;
}
```

**Visual Design**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───┐                                                      │
│  │ 💡│  "The consensus framework wasn't just process—      │
│  └───┘   it was the foundation that made everything         │
│          else possible. Without alignment on what           │
│          'valid' meant, no technical fix would stick."      │
│                                                             │
│                                        — Key Insight        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**CSS**:
```css
.pull-quote {
  border-left: 4px solid var(--color-accent);
  background: var(--color-surface);
  padding: var(--space-lg) var(--space-xl);
  margin: var(--space-xl) 0;
  font-size: var(--text-xl);
  font-style: italic;
  line-height: 1.5;
  position: relative;
}

.pull-quote--insight { border-color: #2563eb; }
.pull-quote--result { border-color: #16a34a; }
.pull-quote--lesson { border-color: #d97706; }

.pull-quote__icon {
  position: absolute;
  top: var(--space-md);
  left: calc(-1 * var(--space-lg));
  background: var(--color-background);
  padding: var(--space-xs);
  font-size: 1.5rem;
}
```

---

### 5. TimelineSection

**Purpose**: Structure narrative as chronological phases.

**Props**:
```typescript
interface TimelineSectionProps {
  phase: number;
  title: string;
  duration?: string;
  status?: 'discovery' | 'execution' | 'result';
  children: astro.JSX.Element;
}
```

**Visual Design**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ PHASE 1                                    Q1 2022    │ │
│  │ ─────────────────────────────────────────────────     │ │
│  │ Discovery & Audit                                     │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  When I inherited the experimentation platform, the        │
│  first task wasn't to fix it—it was to understand why     │
│  it was broken...                                          │
│                                                             │
│  [Content continues...]                                     │
│                                                             │
│     │                                                       │
│     │  (visual connector to next phase)                    │
│     ▼                                                       │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ PHASE 2                                    Q2 2022    │ │
│  │ ─────────────────────────────────────────────────     │ │
│  │ Meta-Analysis & Root Cause                            │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 6. TechnicalDetail

**Purpose**: Expandable section for deep technical content.

**Props**:
```typescript
interface TechnicalDetailProps {
  title: string;
  summary: string;
  defaultOpen?: boolean;
  children: astro.JSX.Element;
}
```

**Visual Design**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌ Technical Deep Dive: Randomization Algorithm ─────────┐ │
│  │                                                   [▼]  │ │
│  │ How we identified that UUID-based assignment was      │ │
│  │ causing 90% of experiment volatility...               │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  [Expanded content when clicked]                           │
│                                                             │
│  The existing system used UUID assignment which            │
│  created sample ratio mismatch (SRM) issues...             │
│                                                             │
│  ```                                                        │
│  // Before: UUID-based (problematic)                       │
│  user_variant = hash(user_id) % 100                        │
│                                                             │
│  // After: Deterministic with salt                         │
│  user_variant = hash(experiment_id + user_id) % 100        │
│  ```                                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Page Layout Redesign

### Current Layout (portfolio/[id].astro)
```
Header (back link, title, meta)
├── Overview Cards (Problem, Approach, Outcome) - 3 column grid
├── Tags
├── Metrics Sidebar
└── Prose Content (markdown body)
```

### New Layout
```
Header (back link, title, meta)
├── HeroStatBanner (transformation metrics)
├── Tags (moved up, more prominent)
│
├── TimelineSection: Phase 1 - Discovery
│   ├── Prose content
│   └── ProgressiveDiagram (before state)
│
├── TimelineSection: Phase 2 - Investigation
│   ├── Prose content
│   ├── PullQuote (key insight)
│   └── TechnicalDetail (optional deep dive)
│
├── TimelineSection: Phase 3 - Solution
│   ├── Prose content
│   ├── FrameworkPoster (e.g., 8 Dimensions)
│   └── ProgressiveDiagram (architecture/flow)
│
├── TimelineSection: Phase 4 - Results
│   ├── Prose content
│   ├── ProgressiveDiagram (after state)
│   └── PullQuote (outcome statement)
│
├── FrameworkPoster (Consensus-First Framework - shareable)
│
└── Key Learnings Section
    └── Numbered list with icons
```

---

## Content Structure Changes

### Updated Frontmatter Schema

```yaml
---
title: "Experimentation Platform Transformation"
company: "DraftKings"
role: "Director, Data Science"
timeframe: "2022-2023"
description: "How I transformed a 6% experiment validity rate..."

# Hero stats (new)
heroStats:
  transformation:
    before: "6%"
    after: "100s"
    beforeLabel: "Valid Experiments"
    afterLabel: "Concurrent Experiments"
  metrics:
    - value: "90%"
      label: "Volatility Reduction"
    - value: "$100M+"
      label: "Revenue Impact"
    - value: "Self-Sustaining"
      label: "System Status"

# Timeline phases (new)
phases:
  - id: "discovery"
    title: "Discovery & Audit"
    duration: "Q1 2022"
  - id: "investigation"
    title: "Meta-Analysis & Root Cause"
    duration: "Q2 2022"
  - id: "solution"
    title: "Framework & Quick Win"
    duration: "Q3 2022"
  - id: "results"
    title: "Scale & Handoff"
    duration: "Q4 2022 - 2023"

# Framework posters (new)
frameworks:
  - id: "8-dimensions"
    title: "8 Dimensions of Experimentation Excellence"
    type: "grid"
    items:
      - label: "Analysis Platform"
        icon: "📊"
        description: "Statistical rigor & visualization"
      # ... (8 items total)
  - id: "consensus-first"
    title: "Consensus-First Framework"
    type: "flow"
    items:
      - label: "Define Success"
      - label: "Align Stakeholders"
      - label: "Apply Data"
      - label: "Iterate"

# Pull quotes (new)
pullQuotes:
  - id: "consensus-insight"
    quote: "The consensus framework wasn't just process—it was the foundation..."
    variant: "insight"
  - id: "result-statement"
    quote: "From 6 valid experiments to hundreds running concurrently..."
    variant: "result"

# Existing fields (keep)
tags: ["Experimentation", "Data Science", "ML Platform"]
---
```

### Updated Markdown Body Structure

```markdown
<!-- Phase 1: Discovery -->
## The Inherited Challenge

When I joined as Director of Data Science, the experimentation platform had a
fundamental credibility problem. Only 6% of experiments were producing valid,
actionable results.

<!-- ProgressiveDiagram: before-state -->

The symptoms were clear: stakeholders had stopped trusting experiment results,
teams were making decisions based on intuition rather than data, and the
platform was becoming organizational theater rather than a decision-making tool.

---

<!-- Phase 2: Investigation -->
## Finding the Root Cause

<!-- PullQuote: consensus-insight -->

Rather than jumping to technical fixes, I started with a meta-analysis of 2.5
years of experiment data. The goal wasn't just to identify what was wrong, but
to build consensus on what "valid" should mean.

<!-- TechnicalDetail: randomization-algorithm -->

The investigation revealed a critical insight: 90% of the volatility came from
a single source—the randomization algorithm was causing sample ratio mismatch
(SRM) issues.

---

<!-- Phase 3: Solution -->
## Building the Framework

<!-- FrameworkPoster: 8-dimensions -->

With alignment on what needed to change, I designed an 8-dimension framework
for experimentation excellence. This wasn't just about fixing the immediate
problem—it was about building a system that would sustain itself.

The quick win—fixing the randomization algorithm—addressed 90% of the volatility.
But the framework ensured we wouldn't just fix this problem and create new ones.

---

<!-- Phase 4: Results -->
## Transformation at Scale

<!-- ProgressiveDiagram: timeline -->

Within 18 months, the platform went from 6 valid experiments to hundreds running
concurrently. More importantly, the system became self-sustaining—I was able to
hand it off to a capable IC and move to new challenges.

<!-- PullQuote: result-statement -->

---

<!-- FrameworkPoster: consensus-first (shareable) -->

## Key Learnings

1. **Consensus before code** - Technical fixes without organizational alignment create new problems
2. **Find the 90% fix** - Often one root cause explains most symptoms
3. **Build for handoff** - Success means the system doesn't need you
4. **Measure trust, not just metrics** - Stakeholder confidence is a leading indicator
```

---

## Visual Assets Required

### Priority 0 (Required for Launch)

| Asset | Type | Dimensions | Location |
|-------|------|------------|----------|
| Hero transformation arrow | SVG | 100% width | HeroStatBanner |
| 8 Dimensions grid | Component | 800x600 | FrameworkPoster |
| Before/After state diagram | SVG | 100% width | ProgressiveDiagram |
| Timeline with milestones | SVG | 100% width | ProgressiveDiagram |

### Priority 1 (Nice to Have)

| Asset | Type | Dimensions | Location |
|-------|------|------------|----------|
| Consensus-First flow diagram | SVG | 600x400 | FrameworkPoster |
| OG image for sharing | PNG | 1200x630 | Meta tags |
| Framework poster download | PNG | 1600x900 | Download button |

### Asset Creation Approach

1. **SVG diagrams**: Create in Figma or Excalidraw, export as optimized SVG
2. **Component-based**: Build with CSS Grid/Flexbox, no image dependencies
3. **OG images**: Generate with satori or pre-render during build

---

## Implementation Phases

### Phase 1: Component Foundation (Day 1-2)

**Tasks**:
1. Create `website/src/components/case-study/` directory
2. Implement `HeroStatBanner.astro` with props interface
3. Implement `PullQuote.astro` with 3 variants
4. Implement `TimelineSection.astro` with connectors
5. Add CSS variables to global styles
6. Create barrel export `index.ts`

**Deliverables**:
- [ ] 3 working components with props
- [ ] Storybook-style test page showing all variants
- [ ] CSS design system tokens defined

### Phase 2: Advanced Components (Day 2-3)

**Tasks**:
1. Implement `FrameworkPoster.astro` (grid type first)
2. Implement `ProgressiveDiagram.astro` (before-after type first)
3. Implement `TechnicalDetail.astro` with expand/collapse
4. Add timeline type to ProgressiveDiagram
5. Add flow type to FrameworkPoster

**Deliverables**:
- [ ] 3 additional working components
- [ ] Responsive behavior verified (mobile, tablet, desktop)
- [ ] Accessibility audit passed (ARIA, keyboard nav)

### Phase 3: Page Template Redesign (Day 3-4)

**Tasks**:
1. Refactor `portfolio/[id].astro` to use new components
2. Update content schema (frontmatter additions)
3. Create component mapping from frontmatter to JSX
4. Implement phase-based content rendering
5. Add scroll-based animations (subtle)

**Deliverables**:
- [ ] New page template working with existing content
- [ ] Backward compatible with current frontmatter
- [ ] Preview link for review

### Phase 4: Content Migration (Day 4-5)

**Tasks**:
1. Update `experimentation-platform.md` frontmatter
2. Restructure markdown body into phases
3. Add pull quotes and framework definitions
4. Create placeholder diagrams (text-based initially)
5. Test full page rendering

**Deliverables**:
- [ ] Complete case study with new structure
- [ ] All components rendering correctly
- [ ] Visual placeholders where assets needed

### Phase 5: Visual Assets (Day 5-7)

**Tasks**:
1. Design 8 Dimensions framework poster in Figma
2. Create before/after transformation diagram
3. Design timeline progression graphic
4. Export SVGs optimized for web
5. Generate OG image for social sharing

**Deliverables**:
- [ ] All P0 visual assets created
- [ ] Assets integrated into components
- [ ] OG meta tags updated

### Phase 6: Polish & Launch (Day 7-8)

**Tasks**:
1. Cross-browser testing
2. Performance optimization (image lazy loading, etc.)
3. Final accessibility review
4. Update portfolio landing page preview
5. Re-enable Portfolio nav link

**Deliverables**:
- [ ] All tests passing
- [ ] Lighthouse score 90+
- [ ] Portfolio section live

---

## File Changes Summary

### New Files

```
website/src/components/case-study/
├── HeroStatBanner.astro
├── FrameworkPoster.astro
├── ProgressiveDiagram.astro
├── PullQuote.astro
├── TimelineSection.astro
├── TechnicalDetail.astro
├── MetricCard.astro
└── index.ts

website/src/styles/
└── case-study.css              # Component-specific styles

website/public/images/case-studies/
├── 8-dimensions.svg
├── transformation-timeline.svg
└── before-after-state.svg
```

### Modified Files

```
website/src/pages/portfolio/[id].astro    # Complete redesign
website/src/content/config.ts              # Schema updates
website/src/content/portfolio/experimentation-platform.md  # Content restructure
website/src/styles/global.css              # New CSS variables
website/src/components/Navigation.astro    # Re-enable Portfolio link
```

---

## Success Criteria

### Quantitative
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 100
- [ ] Page load time: <2s on 3G
- [ ] All components responsive (320px - 1920px)

### Qualitative
- [ ] Hiring manager can understand impact in <30 seconds (hero stats)
- [ ] Technical depth available for those who want it (expandable sections)
- [ ] Framework posters are shareable (download, OG images)
- [ ] Narrative flows logically (timeline structure)
- [ ] Visual proof at every phase (diagrams)

### Stakeholder Review Checkpoints
1. **After Phase 1**: Component design review
2. **After Phase 3**: Page layout review
3. **After Phase 5**: Visual asset review
4. **After Phase 6**: Final launch approval

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Visual assets take too long | Use CSS-based placeholders initially, swap later |
| Content restructure breaks existing | Keep backward compatibility with fallbacks |
| Over-engineering components | Start simple, add complexity only as needed |
| Performance impact from new elements | Lazy load diagrams, optimize SVGs |

---

## Next Steps

1. Review and approve this plan
2. Set up component development branch
3. Begin Phase 1 implementation
4. Schedule stakeholder review checkpoints

---

*This plan should be executed within the `website/` submodule. Commit frequently with conventional commits.*

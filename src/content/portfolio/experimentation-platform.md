---
title: "Experimentation Platform Transformation"
description: "Transformed DraftKings' broken experimentation culture from 6% validity to hundreds of concurrent valid experiments, protecting hundreds of millions in revenue."
problem: "Only 6 of 100 historical experiments met validity standards—a 6% success rate masked by organizational consensus that the system was 'great.'"
approach: "Built measurement framework first to establish consensus, then applied data to reveal dysfunction. Fixed quick wins (randomization algorithm), then systematically improved across 8 dimensions of best-in-class experimentation."
outcome: "Scaled from 6 valid experiments annually to hundreds running concurrently. System became self-sustaining after handoff, with estimated impact in the hundreds of millions of dollars."
company: "DraftKings"
role: "Director, Data Science"
timeframe: "2021-2023"
featured: true
order: 1
tags:
  - Experimentation
  - A/B Testing
  - Platform Engineering
  - Vendor Strategy
  - Organizational Transformation
metrics:
  - "6% → 100s of experiments"
  - "90% volatility reduction"
  - "$100M+ revenue impact"
  - "Self-sustaining post-handoff"
---

## The Challenge

When I joined DraftKings as Director of Data Science, there was a significant disconnect between perception and reality in our experimentation program. The organization believed our A/B testing infrastructure was producing reliable results. I suspected otherwise, but suspicion alone doesn't drive change.

The real challenge wasn't technical—it was cultural. **How do you convince an organization that a system they believe is working is actually fundamentally broken?**

The stakes were enormous. Every product decision relied on experimentation. Bad experiments meant bad decisions, which meant either killing good ideas before they reached production or shipping bad ideas that hurt revenue and user experience.

## The Approach

I knew that showing up with data first would trigger defensive reactions. Instead, I took a different path:

### 1. Framework Before Evidence

I built a comprehensive framework defining what constitutes a reliable experiment—statistical validity, proper randomization, sample size adequacy, metric selection, bias detection, and confound analysis. This wasn't controversial; these are well-established principles in experimentation.

### 2. Build Consensus on Standards

I worked with the team's subject matter experts to codify the framework into an evaluation rubric. The key insight: **get everyone to agree on the measurement criteria before applying those criteria to our work.** This meant no one could debate the conclusions after seeing the data.

### 3. Meta-Analysis as Mirror

We analyzed 2.5 years of historical experiments against the agreed-upon framework. When we sat in a room and reviewed the results, the revelation was undeniable: **Only 6 out of approximately 100 experiments met our validity standards.**

We weren't slightly off. We had a 6% success rate.

### 4. Quick Wins Build Momentum

Rather than boiling the ocean, I identified that 90% of our experiment volatility stemmed from a single issue: our randomization algorithm. I taught the team the fix, gave them autonomy to work with partner teams, and let them own the implementation.

This quick win built credibility and demonstrated that improvement was achievable.

### 5. Systematic Excellence

With SVP sponsorship secured, I researched best-in-class experimentation programs at Microsoft and leading tech companies. We defined 8 dimensions of excellence and built a roadmap:

- **Analysis platform**: Led vendor evaluation, selected and onboarded Eppo for experiment analysis UI
- **Feature flagging**: Influenced architecture and platform teams to adopt LaunchDarkly (recognizing this was an engineering decision, not a data science one)
- **Automation**: Built tooling to scale analysis without scaling headcount linearly
- **Education**: Trained product managers and engineers on experimental design principles

### 6. Build for Sustainability

The ultimate test of zero-to-one work is whether it survives your departure. I hired an exceptionally capable IC to own the program and empowered them to scale it. I deliberately stepped back to ensure the system didn't depend on me.

## The Outcome

The transformation was dramatic:

- **Year 0**: 6 valid experiments (baseline from historical analysis)
- **Year 1**: 6 valid experiments running in production
- **Year 2**: 12 valid experiments
- **Year 3+**: Hundreds of concurrent experiments across multiple product dimensions

More importantly, the system became **self-sustaining**. The IC I brought in scaled the program far beyond what I could have achieved alone. I haven't had to intervene—the system maintains itself through clear processes, the right tooling, and organizational alignment.

### Business Impact

The financial impact is difficult to quantify precisely because it operates in two directions:

1. **Revenue loss prevention**: Killing bad ideas before they reached production
2. **Revenue growth enablement**: Validating and shipping good ideas with confidence

The conservative estimate is **hundreds of millions of dollars** in combined impact. But the true value extends beyond direct measurement—it changed how product strategy and reinvestment decisions were made across the organization.

### Vendor Relationships

The platform modernization required strategic vendor partnerships:

- **Eppo**: Led end-to-end relationship management, from technical evaluation to contract negotiation. Structured consumption-based pricing to give them predictable revenue (Series B cash flow needs) while securing internal budget headroom for scaling scenarios.
- **LaunchDarkly**: Recognized feature flagging belonged in engineering's domain, but motivated the platform team to explore third-party options when our in-house system couldn't scale.

## Key Learnings

### 1. Consensus Precedes Evidence

When challenging established beliefs, **build agreement on measurement criteria before revealing measurements.** This transforms a debate about conclusions into a shared realization.

### 2. Organizational Dysfunction Masks as Technical Problems

The 6% validity rate wasn't primarily a technical failure—it was an organizational failure to define and enforce standards. Fixing the technology without addressing the culture would have been temporary at best.

### 3. Quick Wins Unlock Systematic Change

The randomization algorithm fix took weeks but solved 90% of volatility. This created space and credibility to tackle the deeper, longer-term transformation work.

### 4. Zero-to-One Means Building Systems That Don't Need You

The measure of success isn't what you build—it's whether it continues to thrive after you leave. I deliberately designed for sustainability: clear processes, the right people, and organizational ownership.

### 5. Technical Leaders Need Commercial Acumen

Understanding vendor economics (consumption pricing, Series B cash flow needs) allowed me to structure partnerships that worked for both parties. Technical excellence alone isn't enough at the director/VP level—you need to think like a business operator.

---

**Technologies**: Eppo, LaunchDarkly, Python, Statistical analysis frameworks, Randomization algorithms

**Cross-functional Partners**: Engineering, Product Management, Platform Engineering, Architecture, Finance, SVP Leadership

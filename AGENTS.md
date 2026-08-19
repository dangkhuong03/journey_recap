# AGENTS.md — Day 27 Journey Recap

## Mission
Build an impressive infographic-style landing page that tells a clear, evidence-based visual story of the intern's **past four weeks of internship**.

Earlier AI20K learning is supporting context only. It explains the mindset the intern entered the internship with; it must not dominate the page.

The page is NOT a generic portfolio, NOT a list of challenges, NOT a full AI20K autobiography, and NOT a flashy animation demo.

The central outcome is:
> A reviewer should be able to SEE what happened during the four-week internship, what the intern learned and achieved, and how the intern's way of thinking changed — from a technology-first software engineer toward a more product-, evidence-, alignment-, human-, and evaluation-aware AI builder.

## Source of truth
Read these files before implementation:
1. `docs/01_DAY27_BRIEF.md`
2. `docs/02_JOURNEY_SOURCE.md` — preserve its meaning; use it as source material, not as page-length copy
3. `docs/03_STORY_ARCHITECTURE.md`
4. `docs/04_ACCEPTANCE_CRITERIA.md`
5. `docs/05_CONTENT_AND_DESIGN_RULES.md`
6. `docs/06_RESEARCH_SOURCES.md`

## Required skills
Use the local project skills when relevant:
- `$visual-storytelling`
- `$infographic-information-design`
- `$landing-page-ux`
- `$motion-scrollytelling`
- `$human-centered-ai-story`

## Scope rule — critical
The story must be visually weighted toward the **four internship weeks**.

Recommended narrative weighting:
- Pre-internship / AI20K prologue: 10–20%
- Four-week internship journey: 60–70%
- Reflection, evolution, and future direction: 20–25%

Do not let the pre-internship AI20K story become the main subject.

## Product principles
1. Story before decoration.
2. The four-week internship is the protagonist; AI20K is the prologue.
3. Evidence before self-praise.
4. Transformation before exhaustive chronology, but keep a truthful Day-based temporal spine.
5. Human judgment remains visible; AI is a supporting tool in the story.
6. The engineer mindset is expanded, not rejected.
7. Distinguish exposure, learning, application, and mastery. Do not overclaim.
8. Keep the user's Vietnamese voice and intent. English may be used selectively for strong visual headlines.
9. Do not invent metrics, dates, user counts, prototypes, test results, or achievements.
10. Do not invent mentor quotes.
11. If content is uncertain, use neutral wording or mark a TODO rather than fabricate.
12. Do not add a fabricated challenge-by-challenge portfolio section. Challenges may appear as contextual learning nodes only when supported by the source.
13. Do not assign a fixed learning theme to each week. Learning topics were distributed across individual Days/challenges; use Day 1 → Day 27 as the time spine and extract cross-cutting patterns afterward.

## What the page must explicitly answer
A reviewer must be able to identify all four:
1. **What happened?** — the four-week internship progression, challenge environment, feedback, tests, learning situations, and mentor interaction.
2. **What was learned?** — product value, evidence, AI systems, human judgment, alignment, evaluation, and communication.
3. **What was achieved?** — growth in understanding, applied practice, changed workflow, clearer evaluation mindset, and a more deliberate way of working with AI. Do not invent quantitative achievements.
4. **How did the intern evolve?** — show concrete before/after changes in questions, decisions, process, and behavior.

## Recommended implementation defaults
If the repository is empty:
- Vite + React + TypeScript
- Semantic HTML
- Custom CSS or a small maintainable styling layer
- SVG/CSS for bespoke infographic visuals
- IntersectionObserver / lightweight motion for scroll reveals
- Avoid heavy 3D/WebGL unless there is a clear narrative reason
- Avoid generic dashboard/card-grid aesthetics

If the repo already has a stack, preserve it unless there is a strong reason not to.

## Visual direction
Aim for editorial + technical + reflective.
The design should feel like a visual essay / internship journey map rather than a SaaS landing page.

Use:
- strong typography hierarchy
- deliberate whitespace
- a continuous Day 1 → Day 27 / four-week progression motif
- before/after comparisons
- learning/evaluation diagrams
- one major mentor-feedback turning point
- restrained motion with semantic meaning

Avoid:
- excessive gradients
- generic glassmorphism
- random floating blobs
- arbitrary charts
- fake statistics
- animation that does not help the story
- every section using the same card layout

## Required narrative arc
The implemented page must communicate this arc:

### PROLOGUE — starting mindset
Software Engineer
→ joins AI20K wanting deeper AI / originally favors Application
→ gains Product / Value / Human / Evidence perspective

### FOUR-WEEK INTERNSHIP — main story
Enters internship with this expanded mindset
→ moves through many different Day-level challenges across product, business, UX, AI systems, infrastructure, evaluation, and human–AI collaboration
→ learning topics appear interleaved across the four weeks rather than as one fixed subject per week
→ deliberately directs AI according to personal reasoning rather than following AI output
→ repeatedly reflects on whether the chosen direction and reasoning are correct
→ a later mentor conversation reveals mismatch between assumed outcome and intended outcome
→ learns **Alignment before optimization**

### EVOLUTION — synthesis
Technology-first → Problem/value-aware
Output → Outcome
Assumption → Evidence
AI answer → Human judgment over AI output
Execution → Alignment + execution
Learning broadly → Learning selectively toward a goal

### NEXT DIRECTION
Continuous learning loop
→ interest in Human Evaluation × Development

Human Evaluation × Development is a future direction, not the main subject and not a claimed finished job title.

## Before coding
Create a concise implementation plan. Then implement without waiting for further confirmation unless a destructive operation is required.

## Quality gate
Before completion, audit the result against `docs/04_ACCEPTANCE_CRITERIA.md` and fix major failures.

---
name: motion-scrollytelling
description: Add restrained scroll-based motion and transitions that communicate progression, causality, comparison, or transformation. Use when implementing animation for the Day 27 journey without turning it into decorative motion.
---

# Motion / Scrollytelling Skill

## Goal
Motion should explain the story.

## Good uses
- draw a journey line as progress occurs
- reveal stages in a process sequentially
- morph/transition before → after states
- activate a current chapter marker
- progressively assemble a system map
- transition from AI output to human audit/decision
- animate a loop to explain repeated learning

## Bad uses
- random floating particles
- constant motion behind text
- 3D just for spectacle
- large parallax that harms reading
- scroll hijacking
- animation that forces users to wait

## Implementation guidance
- prefer CSS transforms/opacity and IntersectionObserver
- keep motion performant
- respect `prefers-reduced-motion`
- the content must remain understandable with JS/motion disabled
- avoid continuous animations unless they encode an active state

## Audit question
For every animation ask: "What information becomes clearer because this moves?"
If there is no answer, remove it.

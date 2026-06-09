# /create-carousel

## Description
Full carousel creation workflow — from topic input to complete editable Figma file.

## Trigger
User says: "cria um carrossel sobre [X]", "quero um carrossel de [X]", "crie um carrossel", "create carousel"

## Workflow
1. Load SKILL.md for full design system reference
2. **Brand check (Step 0):** confirm active brand — auto-load Chavossel for Lucas Grigo, or collect brand colors + typography + visual references from any other user
3. Collect requirements (topic, slides count, typography, image preference)
4. Plan slide structure — show plan for approval
5. Optionally generate images via Nano Banana (using brand visual style + user reference images)
6. Create Figma file and build all frames with brand tokens
7. Return file URL + summary

## Arguments
- topic (required): the carousel theme
- slides (optional, default 7): number of slides
- typo (optional, default old_money): typography style
- images (optional, default no): generate AI images for photo zones

## Example Invocations
- /create-carousel sobre os 3 erros fatais de precificação
- /create-carousel O poder do posicionamento de nicho | slides=8 typo=modern
- /create-carousel storytelling de autoridade | images=yes

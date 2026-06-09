# /generate-slide

## Description
Creates a single Chavossel-branded slide in an existing Figma file.

## Trigger
"gera um slide com layout [X]", "adiciona um slide", "gerar slide avulso"

## Workflow
1. Load SKILL.md
2. Get figma_url (ask user if not provided)
3. Get layout_id from user (or suggest based on content)
4. Get slide text (headline, subtitle, body)
5. Optionally generate image for photo zone
6. Call use_figma to build the frame

## Arguments
- figma_url (required): URL of the target Figma file
- layout (required): layout ID from the library (e.g. STORY_SHOUT)
- headline: main title text
- subtitle: subtitle text
- body: optional body text
- image: yes/no for AI image generation

## Example Invocations
- /generate-slide layout=STORY_SHOUT headline="A maioria das pessoas erra aqui"
- /generate-slide layout=CTA_MINIMAL headline="Quer aprender mais?" subtitle="Salva esse carrossel"

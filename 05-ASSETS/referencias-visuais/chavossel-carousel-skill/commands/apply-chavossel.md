# /apply-chavossel

## Description
Reads existing frames in a Figma file and applies the Chavossel design system: colors, typography, and layout polish. Best-effort visual upgrade.

## Trigger
"aplica o chavossel", "reformatar no estilo chavossel", "aplicar design system"

## Workflow
1. Load SKILL.md
2. Get figma_url
3. Read existing frames via get_design_context
4. For each frame:
   - Update background fills to VOID palette
   - Replace text colors with Chavossel palette (titles → GOLD, body → TXT_MD)
   - Update font to selected typography style
   - Add gold decorative elements if space allows
5. Report changes made

## Arguments
- figma_url (required): URL of the Figma file to update
- typo (optional): target typography style (default: old_money)
- mode (optional): full / colors_only / typography_only

## Notes
This command works best on simple single-column layouts. Complex existing designs may need manual cleanup after application.

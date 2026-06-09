# /restyle

## Description
Swaps the typography family across all text layers in an existing Chavossel carousel file.

## Trigger
"muda a tipografia", "troca a fonte", "restyle", "mudar estilo visual"

## Workflow
1. Load SKILL.md
2. Get figma_url
3. Get target typography style
4. Use use_figma to traverse all text nodes and swap font families
5. Report how many layers were updated

## Arguments
- figma_url (required): URL of the Figma file
- style (required): elegant | modern | old_money | impact | aesthetic | jornal

## Typography Swaps Reference
| Style | Title Font | Body Font |
|---|---|---|
| elegant | Playfair Display Bold | Lato Regular |
| modern | Montserrat Bold | Roboto Regular |
| old_money | Cinzel SemiBold | EB Garamond Regular |
| impact | Anton Regular | Inter Semi Bold |
| aesthetic | Playfair Display Bold Italic | Montserrat Light |
| jornal | Merriweather Bold | Georgia Regular |

## Example Invocations
- /restyle figma.com/design/ABC123 style=modern
- /restyle style=impact (uses currently open file if URL not provided)

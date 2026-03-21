# Chave Mestra — Ecossistema de Coprodução Digital

Sistema de criação, estratégia e operação para qualquer expert, marca ou negócio digital. Estruturado em 7 camadas, executado por 6 plugins de IA.

**Tese central:** Personalidade + Inteligência = diferenciação real e resultados sustentáveis.

**Natureza do sistema:** ecossistema de coprodução — opera para qualquer cliente. A marca Chave Mestra é a arquitetura; invisível nos outputs para clientes externos.

---

## Estrutura do Projeto

```
CHAVE-MESTRA/
├── 00-FUNDACAO/          → Manifesto, Mapa do Projeto, Glossário, Modo Cliente
├── 01-PLUGINS/           → Os 6 plugins com skills e referências
│   ├── 00-chaveiro/      → Meta-manutenção + Conhecimento + Tesouro dos Erros
│   ├── 01-cartografo/    → Diagnóstico de Mercado + Persona
│   ├── 02-alquimista/    → Copy + Oferta + Escala + Frameworks
│   ├── 03-bardo/         → Vídeo + Carrossel + Headlines + Scripts
│   ├── 04-arauto/        → Campanha + Notion + Protocolo Massivo
│   └── 05-iluminista/     → Design, UX e Produção Visual (5 skills)
├── 04-PERGAMINHOS/       → Conteúdo produzido (brancos/pretos/dourados)
├── 05-ASSETS/            → Brand kit, tema visual, prompts
└── 06-TESOURO-DOS-ERROS/ → Registro de erros e aprendizados
```

Cada plugin tem:
- `.claude-plugin/plugin.json` — manifesto com gatilhos de ativação
- `README.md` — visão geral do plugin e suas skills
- `skills/<nome>/SKILL.md` — manual técnico de operação
- `skills/<nome>/[referências].md` — materiais de apoio co-locados

---

## Os 6 Plugins

| # | Nome | Diretório | Camadas | Skills |
|---|------|-----------|---------|--------|
| 00 | Chaveiro | `01-PLUGINS/00-chaveiro/` | Meta + C0 | chaveiro, forja-do-conhecimento, tesouro-dos-erros, ritual-da-chave |
| 01 | Cartógrafo | `01-PLUGINS/01-cartografo/` | C1 — Diagnóstico | portal-do-terreno, forja-da-persona, forja-do-universo |
| 02 | Alquimista | `01-PLUGINS/02-alquimista/` | C2 — Estratégia + C6 — Escala | pergaminho-de-copy, forja-de-oferta, portal-da-escala, frameworks-anuncios |
| 03 | Bardo | `01-PLUGINS/03-bardo/` | C3 — Criação | chavideo, chavossel, headline-generator, script-creator, script-analyzer, copy-enhancer |
| 04 | Arauto | `01-PLUGINS/04-arauto/` | C4 — Lançamento + C5 — Operação | mapa-de-campanha, esteira-notion, protocolo-massivo |
| 05 | Iluminista | `01-PLUGINS/05-iluminista/` | Transversal | sistema-de-design, forja-de-imagem, arquiteto-de-experiencia, ponte-figma, publicador-visual |

---

## Gatilhos de Ativação

| Gatilho | Plugin | Skill |
|---------|--------|-------|
| "chaveiro", "assimila esse livro/PDF", "atualiza o skill X", "onde isso se encaixa" | Chaveiro | chaveiro |
| "Zettelkasten", "nota permanente", "modelos mentais", "documenta isso" | Chaveiro | forja-do-conhecimento |
| "Tesouro dos Erros", "registra esse erro", "que erros existem para", "o que pode dar errado" | Chaveiro | tesouro-dos-erros |
| "ritual da chave", "Lua Cheia", "Forja Semanal", "Giro da Chave", "planejamento mensal", "pauta da semana", "workflow", "rotina de criação" | Chaveiro | ritual-da-chave |
| "analisa o mercado", "mapa do terreno", "pesquisa de nicho", "players", "brechas" | Cartógrafo | portal-do-terreno |
| "mapeia a persona", "SZC", "Alma da Persona", "quem é o lead", "inferno/purgatório/céu" | Cartógrafo | forja-da-persona |
| "worldbuilding", "universo de marca", "Primal Branding", "StoryBrand", "léxico de marca", "Forja do Universo", "Mapa do Universo", "DNA de marca" | Cartógrafo | forja-do-universo |
| "copy", "Copy 3x5", "Método Carga", "calibra a peça", "nível de consciência" | Alquimista | pergaminho-de-copy |
| "cria a oferta", "stack de bônus", "equação de valor", "garantia", "oferta irresistível" | Alquimista | forja-de-oferta |
| "diagnóstico de fase", "alavancas", "CAC", "LTV", "escala o negócio", "esteira de valor" | Alquimista | portal-da-escala |
| "frameworks de anúncio", "templates de oferta", "Manychat" | Alquimista | frameworks-anuncios |
| "roteiro de vídeo", "chavideo", "reel", "script", "Progymnasmata" | Bardo | chavideo |
| "carrossel", "chavossel", "10 slides", "ensaio visual" | Bardo | chavossel |
| "gere headlines", "headlines para", "ideias de conteúdo" | Bardo | headline-generator |
| "cria roteiro a partir da headline", "desenvolve roteiro" | Bardo | script-creator |
| "analisa esse roteiro viral", "engenharia reversa" | Bardo | script-analyzer |
| "otimiza essa copy para fala", "melhora o roteiro" | Bardo | copy-enhancer |
| "campanha", "lançamento", "meteórico", "desafio", "cronograma" | Arauto | mapa-de-campanha |
| "popula o Notion", "MINHA ESTEIRA", "cria as tarefas no Notion" | Arauto | esteira-notion |
| "protocolo massivo", "protocolo luxo", "protocolo urgência", "campanha intensiva" | Arauto | protocolo-massivo |
| "tema visual", "paleta", "design system", "pergaminho branco/preto/dourado/arcano" | Iluminista | sistema-de-design |
| "gera imagem", "forja de imagem", "nano banana", "edita imagem" | Iluminista | forja-de-imagem |
| "UX", "hierarquia visual", "layout", "arquiteto de experiência" | Iluminista | arquiteto-de-experiencia |
| "manda pro Figma", "ponte Figma", "Chavossel Figma", "renderiza no Figma" | Iluminista | ponte-figma |
| "publica no Notion" (visual), "exporta visual", "galeria visual" | Iluminista | publicador-visual |

---

## Regras de Operação

**Antes de qualquer output em uma camada:** leia o `SKILL.md` do plugin correspondente.

**Para criar carrossel:** ative Bardo → leia `chavossel/SKILL.md` + `exercicios.md` + `exemplos.md`.

**Para criar roteiro de vídeo:** ative Bardo → leia `chavideo/SKILL.md` + `progymnasmata-video-map.md` + `cinematicas-combinacoes.md` + `arsenal-narrativo.md`.

**Para criar copy:** ative Alquimista → leia `pergaminho-de-copy/SKILL.md` + `copy-3x5.md` + `metodo-carga.md` + `arsenal-retorico.md`.

**Para criar oferta:** ative Alquimista → leia `forja-de-oferta/SKILL.md`.

**Para planejar campanha:** ative Arauto → leia `mapa-de-campanha/SKILL.md` + `modalidades.md` + `copy-campanha.md`.

**Para campanha intensiva:** ative Arauto → leia `protocolo-massivo/SKILL.md`.

**Para popular Notion:** ative Arauto → leia `esteira-notion/SKILL.md` + `notion-integracao.md`.

**Para diagnosticar escala:** ative Alquimista → leia `portal-da-escala/SKILL.md`.

**Para atualizar o sistema:** ative Chaveiro → opera com os 5 protocolos do `chaveiro/SKILL.md`.

**Para registrar/consultar erros:** ative Chaveiro → leia `tesouro-dos-erros/SKILL.md`.

**Para gestão de conhecimento:** ative Chaveiro → leia `forja-do-conhecimento/SKILL.md` + `modelos-mentais.md` + `arsenal-epistemologico.md`.

**Para analisar mercado:** ative Cartógrafo → leia `portal-do-terreno/SKILL.md` + `arsenal-estrategico.md`.

**Para mapear persona:** ative Cartógrafo → leia `forja-da-persona/SKILL.md` + `alma-da-persona.md` + `szc.md` + `perfis-cognitivos.md`.

**Para construir universo de marca:** ative Cartógrafo → leia `forja-do-universo/SKILL.md` + `primal-branding.md` + `storybrand.md` + `worldbuilding.md`.

**Para planejar rotina/workflow:** ative Chaveiro → leia `ritual-da-chave/SKILL.md`. Usar os 3 ciclos: Lua Cheia (mensal) → Forja Semanal → Giro da Chave (diário).

**Para design visual / tema:** ative Iluminista → leia `sistema-de-design/SKILL.md`.

**Para gerar imagens:** ative Iluminista → leia `forja-de-imagem/SKILL.md` (usa Nano Banana Pro / Gemini API).

**Para UX/layout de conteúdo:** ative Iluminista → leia `arquiteto-de-experiencia/SKILL.md` + `principios-visuais.md`.

**Para renderizar no Figma:** ative Iluminista → leia `ponte-figma/SKILL.md` (usa Figma MCP).

**Para publicar visuais no Notion:** ative Iluminista → leia `publicador-visual/SKILL.md` (usa Notion MCP).

---

## Fluxo Natural das Camadas (Value Creation Loop)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
▼                                                         │
Step 1: FOF — Diagnóstico (Cartógrafo — terreno + persona │
              + universo de marca + Founder Opportunity    │
              Fit)                                        │
    ↓                                                     │
Step 2-3: Validação + PMF — Estratégia (Alquimista —      │
          copy + oferta + portal-da-escala Fase 1-2)      │
    ↓                                                     │
Step 4: Go To Market — Criação (Bardo — vídeo +           │
        carrossel) + Lançamento (Arauto — campanha +      │
        Notion)                                           │
    ↓                                                     │
Step 5: Scale Up — Escala (Alquimista — métricas +        │
        alavancas, Fases 3-4)                             │
    ↓                                                     │
Step 6: Exit/Loop ────────────────────────────────────────┘
        Arquivar (MINHA ESTEIRA) + Documentar (Chaveiro)
        + Próximo tier da escada de valor

Base permanente: Chaveiro (conhecimento + erros + Ritual da Chave)
Transversal: Iluminista (design, imagem, Figma, Notion)
```

---

## Modo Cliente — Separação sistema / output

O sistema opera em dois modos. Identificar o modo antes de qualquer output:

**Modo CM** — o cliente da sessão é Lucas / Chave Mestra.
→ Aplicar o glossário CM integralmente em todos os outputs.

**Modo Cliente Externo** — o cliente da sessão é outro expert, marca ou negócio.
→ Todo output usa a linguagem, os nomes de produto e o vocabulário DO CLIENTE.
→ Zero menção a "Chave Mestra", "Lucas De Maria", ou qualquer termo proprietário CM.
→ Os métodos operam internamente; o output é 100% da identidade do cliente.

**Antes de gerar qualquer output em Modo Cliente Externo**, capturar 5 elementos:
1. Nome / marca do cliente
2. Produtos (nome + tipo para cada um)
3. Como o cliente chama sua audiência
4. Nome da comunidade do cliente (ou "não tem")
5. Tom de voz — 3 adjetivos + 1 frase que ele nunca diria

→ Ver `00-FUNDACAO/MODO-CLIENTE.md` para o protocolo completo e tabela de equivalências.

---

## Glossário CM (aplicável apenas em Modo CM)

Quando o cliente da sessão é Chave Mestra / Lucas, nunca substituir termos proprietários por equivalentes genéricos:

| Usar (Modo CM) | Equivalente genérico (Modo Cliente Externo) |
|----------------|---------------------------------------------|
| Pergaminho | nome do produto do cliente / material digital / guia |
| Portal | nome do produto do cliente / curso / programa |
| Forja | nome do produto do cliente / intensivo / imersão |
| A Ordem | nome da comunidade do cliente / grupo / turma |
| Portadores | o termo que o cliente usa para sua audiência |
| Chavideo, Chavossel | carrossel, roteiro de vídeo (método invisível) |
| Copy 3x5, Método Carga | aplicados internamente — output é só a copy |
| SZC, Alma da Persona | pesquisa de audiência (método invisível) |

---

## Referências

- `00-FUNDACAO/MANIFESTO.md` — princípios que nunca mudam
- `00-FUNDACAO/MAPA-DO-PROJETO.md` — arquitetura completa
- `00-FUNDACAO/GLOSSARIO.md` — vocabulário proprietário completo
- `00-FUNDACAO/MODO-CLIENTE.md` — protocolo de adaptação a clientes externos
- `CLAUDE-PROJECTS.md` — como montar os 6 kits no claude.ai
- `ORDENS.md` — agrupamentos estratégicos de plugins para venda

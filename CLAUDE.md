# Chave Mestra — Ecossistema de Coprodução Digital

Sistema de criação, estratégia e operação para qualquer expert, marca ou negócio digital. Estruturado em 7 camadas, executado por 11 plugins de IA.

**Tese central:** Personalidade + Inteligência = diferenciação real e resultados sustentáveis.

**Natureza do sistema:** ecossistema de coprodução — opera para qualquer cliente. A marca Chave Mestra é a arquitetura; invisível nos outputs para clientes externos.

---

## Estrutura do Projeto

```
CHAVE-MESTRA/
├── 00-FUNDACAO/          → Manifesto, Mapa do Projeto, Glossário
├── 01-SKILLS/            → SKILL.md fonte (canônico) + referências por skill
├── 02-REFERENCIAS/       → Materiais de apoio compartilhados
├── 03-CAMPANHAS/         → Campanhas ativas e arquivadas
├── 04-PERGAMINHOS/       → Conteúdo produzido (brancos/pretos/dourados)
├── 05-ASSETS/            → Brand kit, tema visual, prompts
├── 06-TESOURO-DOS-ERROS/ → Registro de erros e aprendizados
│
├── chaveiro/             → Plugin 00 — Chaveiro (meta-manutenção)
├── cartografo/           → Plugin 01 — Portal do Terreno (diagnóstico de mercado)
├── oraculo/              → Plugin 02 — Forja da Persona (SZC + Alma)
├── alquimista/           → Plugin 03 — Pergaminho de Copy (Copy 3x5 + Método Carga)
├── bardo/                → Plugin 04 — Chavideo (roteiros de vídeo)
├── escriba/              → Plugin 05 — Chavossel (carrosséis editoriais)
├── estrategista/         → Plugin 06 — Mapa de Campanha (planejamento)
├── arquiteto/            → Plugin 07 — Esteira Notion (operação no Notion)
├── tesoureiro/           → Plugin 08 — Portal da Escala (métricas e escala)
└── forjador/             → Plugin 09 — Forja do Conhecimento (Zettelkasten)
```

Cada plugin tem:
- `.claude-plugin/plugin.json` — manifesto com gatilhos de ativação
- `skills/<nome>/SKILL.md` — manual técnico de operação
- `skills/<nome>/[referências].md` — materiais de apoio co-locados

---

## Os 10 Plugins

| # | Nome | Diretório | Camada | Gatilhos principais |
|---|------|-----------|--------|---------------------|
| 00 | Chaveiro | `chaveiro/` | Meta | "chaveiro", "assimila esse livro/PDF", "atualiza o skill X", "onde isso se encaixa" |
| 01 | Portal do Terreno | `cartografo/` | C1 — Diagnóstico | "analisa o mercado", "mapa do terreno", "pesquisa de nicho" |
| 02 | Forja da Persona | `oraculo/` | C1 — Diagnóstico | "mapeia a persona", "SZC", "Alma da Persona", "quem é o lead" |
| 03 | Pergaminho de Copy | `alquimista/` | C2 — Estratégia | "copy", "Copy 3x5", "Método Carga", "calibra a peça" |
| 04 | Chavideo | `bardo/` | C3 — Criação | "roteiro de vídeo", "chavideo", "reel", "script" |
| 05 | Chavossel | `escriba/` | C3 — Criação | "carrossel", "chavossel", "10 slides", "ensaio visual" |
| 06 | Mapa de Campanha | `estrategista/` | C4 — Lançamento | "campanha", "lançamento", "meteórico", "desafio", "cronograma" |
| 07 | Esteira Notion | `arquiteto/` | C5 — Operações | "popula o Notion", "MINHA ESTEIRA", "cria as tarefas no Notion" |
| 08 | Portal da Escala | `tesoureiro/` | C6 — Escala | "diagnóstico de fase", "alavancas", "CAC", "LTV", "escala o negócio" |
| 09 | Forja do Conhecimento | `forjador/` | C0 — Base | "Zettelkasten", "nota permanente", "Tesouro dos Erros", "atualiza plugin" |

---

## Regras de operação

**Antes de qualquer output em uma camada:** leia o `SKILL.md` do plugin correspondente.

**Para criar carrossel:** ative `escriba/` — leia `SKILL.md` + `exercicios.md` + `exemplos.md`.

**Para criar roteiro de vídeo:** ative `bardo/` — leia `SKILL.md` + `progymnasmata-video-map.md` + `cinematicas-combinacoes.md`.

**Para criar copy:** ative `alquimista/` — leia `SKILL.md` + `copy-3x5.md` + `metodo-carga.md`.

**Para planejar campanha:** ative `estrategista/` — leia `SKILL.md` + `modalidades.md` + `copy-campanha.md`.

**Para popular Notion:** ative `arquiteto/` — leia `SKILL.md` + `notion-integracao.md`.

**Para atualizar o sistema:** ative `chaveiro/` — opera com os 5 protocolos do SKILL.md.

---

## Fluxo natural das camadas

```
Diagnóstico (cartografo + oraculo)
    ↓
Estratégia (alquimista)
    ↓
Criação (bardo + escriba)
    ↓
Lançamento (estrategista)
    ↓
Operação (arquiteto → Notion)
    ↓
Escala (tesoureiro)
    ↑
Base permanente (forjador — alimenta todas as camadas)
Meta (chaveiro — mantém o sistema coerente)
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
- `00-FUNDACAO/MAPA-DO-PROJETO.md` — arquitetura completa, kits Claude Projects, fila de prioridade
- `00-FUNDACAO/GLOSSARIO.md` — vocabulário proprietário completo
- `00-FUNDACAO/MODO-CLIENTE.md` — protocolo de adaptação a clientes externos
- `CLAUDE-PROJECTS.md` — como montar os 6 kits no claude.ai

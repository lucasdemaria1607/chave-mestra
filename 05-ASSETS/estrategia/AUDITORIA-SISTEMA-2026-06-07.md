---
tipo: auditoria
data: 2026-06-07
escopo: sistema completo — git/local, Notion, Drive, CLAUDE.md, referências cruzadas
resultado: 23 itens verificados, 14 gaps encontrados, 0 bloqueantes imediatos
---

# Auditoria de Sistema — Chave Mestra

Verificação completa de alinhamento entre todas as plataformas.

---

## RESUMO EXECUTIVO

```
PLATAFORMA        ESTADO         GAPS ENCONTRADOS
─────────────────────────────────────────────────
Git/local         ██████████░░   3 gaps (pastas e skills planejadas ainda não criadas)
CLAUDE.md         █████████░░░   2 gaps (gatilhos das skills novas não adicionados)
Notion            ████████░░░░   4 gaps (espaços planejados não criados)
Drive             ██████░░░░░░   3 gaps (estrutura financeira não existe)
Referências       █████████░░░   1 gap (skill sem SKILL.md)
Diagramas         ██████░░░░░░   1 gap (numeração diverge do plano)
```

Nenhum gap é bloqueante para a operação atual. Todos são itens planejados na INTEGRACAO-OPERACIONAL.md que ainda não foram executados — o que é esperado, dado que o blueprint foi aprovado mas os 5 blocos de execução ainda não iniciaram.

---

## 1. GIT / ARQUIVOS LOCAIS

### O que EXISTE e está correto

| Item | Local | Status |
|---|---|---|
| 00-FUNDACAO (12 arquivos) | `00-FUNDACAO/` | OK — Manifesto, Guia, Artefatos, Filosofia, Blueprint, Glossário, Mapa, Modo-Cliente, Protocolo-Chaveiro, Protocolo-Assimilação, Referências PM-PMM, Blueprint-Workflows |
| 6 plugins com plugin.json | `01-PLUGINS/0X-nome/.claude-plugin/` | OK — todos os 6 plugins têm manifesto |
| 30 SKILL.md | `01-PLUGINS/**/skills/*/SKILL.md` | OK — todas as skills documentadas existem |
| Pergaminhos (27 arquivos) | `04-PERGAMINHOS/` | OK — brancos (3), pretos (6), dourados (18) |
| Template de Dossiê | `05-ASSETS/dossies/TEMPLATE-DOSSIE.md` | OK |
| 8 SOPs | `05-ASSETS/templates-cliente/sops/` | OK — Drive, Criação, Revisão, Entrega, Campanha, Comercial, Coprod, Onboarding |
| 4 referências estratégicas | `05-ASSETS/referencias/` | OK — Documentos Empresariais, Financeiro Solo, Gestão de Produto, Legal |
| 4 documentos de estratégia | `05-ASSETS/estrategia/` | OK — Esteira, Conteúdo, Inventário, Integração Operacional |
| 2 novos (esta sessão) | `05-ASSETS/estrategia/` | OK — Growth Loop, Protocolo Captura Financeira |
| 6 diagramas HTML | `05-ASSETS/diagramas/` | OK — loop-central, 10-atos, ativos-percepcao, esteira, saber-fazer, olimpo |
| Tema visual HTML | `05-ASSETS/tema/` | OK |
| MCP Server | `06-MCP-SERVER/` | OK — Express app com node_modules |

### GAPS encontrados

| # | Gap | Gravidade | Plano de ação |
|---|---|---|---|
| G1 | **Pasta `templates-negocio/` não existe** | Média | Bloco 1 da Integração Operacional. Criar com os 10 templates planejados. |
| G2 | **Pasta `diagramas/html/` não existe** | Baixa | Bloco 5 da Integração Operacional. Os 6 diagramas atuais estão em `diagramas/` (sem subpasta `html/`). Quando criar novos, migrar para a estrutura planejada. |
| G3 | **4 skills novas não criadas** | Média | Bloco 2 da Integração. Skills: `forja-de-negocio`, `gestao-de-produto`, `hq-financeiro`, `onboarding-builder`. Nenhuma pasta ou SKILL.md existe ainda. |

### Nota sobre `06-TESOURO-DOS-ERROS/`

A pasta existe na estrutura declarada no CLAUDE.md mas está **vazia** no git. O Tesouro dos Erros opera via Notion (database `d842a0c6`) e via skill `tesouro-dos-erros/SKILL.md`. A pasta local pode servir como export/backup. Não é gap — é decisão de arquitetura (Notion como fonte primária).

---

## 2. CLAUDE.md — GATILHOS DE ATIVAÇÃO

### O que está correto

- 30+ gatilhos mapeados para skills existentes
- Regra Menos Um (detecção de ambiente por Tier)
- Protocolo de Auto-Gravação (Drive MCP)
- Regra Zero (Diagnóstico antes de tudo)
- Protocolo Anti-Impulso
- Protocolo de Entrega ao Cliente
- Protocolos Sync, Export, Espelhamento
- Protocolo Lua Cheia Expansão
- Modo Cliente

### GAPS encontrados

| # | Gap | Gravidade | Plano de ação |
|---|---|---|---|
| G4 | **Gatilhos das 4 skills novas não adicionados ao CLAUDE.md** | Alta (quando skills forem criadas) | Adicionar gatilhos para: `forja-de-negocio` ("cria um SOP", "playbook de", "política de"), `hq-financeiro` ("fecha o mês", "classifica transações", "simula cenário"), `gestao-de-produto` ("product brief do", "PRD do", "registra feedback"), `onboarding-builder` ("cria onboarding do"). Fazer junto com Bloco 2. |
| G5 | **Skill `lua-cheia-expansao` tem gatilho no CLAUDE.md mas NÃO tem SKILL.md** | Média | O gatilho existe ("lua cheia expansão", "ciclo de expansão"), mas não há pasta `skills/lua-cheia-expansao/` nem SKILL.md. A lógica pode estar embutida no `ritual-da-chave/SKILL.md`, mas o CLAUDE.md trata como skill separada. Alinhar: ou criar SKILL.md separado, ou redirecionar o gatilho para `ritual-da-chave`. |
| G5b | **Skill `frameworks-anuncios` não tem SKILL.md** | Baixa | Tem referências (`manychat-ativacao.md`, `templates-oferta.md`) mas não tem SKILL.md próprio. O gatilho no CLAUDE.md aponta para o Alquimista. Criar SKILL.md ou incorporar na skill existente mais próxima. |

---

## 3. NOTION

### O que EXISTE

| Espaço | Workspace | ID | Status |
|---|---|---|---|
| ESTEIRA (página portal) | Lucas (25cfc) | `25cfc122-de3b-80fd` | OK |
| ESTEIRA (página portal) | Template (357fc) | `357fc122-de3b-8153` | OK — espelhado |
| MINHA ESTEIRA (database) | Lucas (25cfc) | `25cfc122-de3b-81a3` | OK |
| MINHA ESTEIRA (database) | Template (357fc) | `357fc122-de3b-8143` | OK — espelhado |
| Métricas de Vendas (database) | Lucas | `6ca6be75-2dd8-451c` | OK |
| Tesouro dos Erros (database) | Lucas | `d842a0c6-3434-4d5f` | OK |
| Tesouro dos Erros (database) | Template (357fc) | `357fc122-de3b-81cc` | OK — espelhado |
| Arquitetura Comercial v2.0 | Lucas | `360fc122-de3b-81e8` | OK |
| Feedback Loops (página) | Template (357fc) | `357fc122-de3b-814c` | Existe como página, não como database estruturada |

### GAPS encontrados

| # | Gap | Gravidade | Plano de ação |
|---|---|---|---|
| G6 | **HQ Financeiro não existe** | Alta (quando financeiro ativar) | Bloco 3 da Integração. Criar portal + sub-databases: Dashboard Executivo, Relatórios Mensais, Ofertas, Campanhas, SOPs Financeiros, Decisões Financeiras. Apenas no workspace Lucas (dados sensíveis — não espelha). |
| G7 | **Ficha de Produto não existe dentro de MINHA ESTEIRA** | Média | Bloco 3. Cada produto na database MINHA ESTEIRA deveria ter página interna com: Product Brief, PRD, Jornada, Roadmap, Backlog, Feedback, Changelog, Métricas. Criar template de página interna. |
| G8 | **Feedback Log não existe como database** | Média | Bloco 3. Existe uma página "Feedback Loops" no template, mas não é database estruturada com campos (Data, Cliente, Produto, Feedback, Tipo, Etapa, Gravidade, Ação). Criar database. |
| G9 | **Changelog não existe como database** | Média | Bloco 3. Criar database com campos: Data, Versão, Mudança, Motivo, Fonte, Impacto. Espelhar estrutura no template cliente. |

---

## 4. GOOGLE DRIVE

### O que EXISTE

| Item | Status |
|---|---|
| Template "Controle financeiro" (Sheets, de 2023) | Existe mas é modelo antigo (pré-CM), estrutura diferente do framework atual |
| Perfil dos Clientes (Sheets) | Existe — útil como base |
| Pasta CLIENTES organizada | Não encontrada com busca — pode existir com outro nome |

### GAPS encontrados

| # | Gap | Gravidade | Plano de ação |
|---|---|---|---|
| G10 | **Estrutura `Financeiro/2026/` não existe** | Alta (quando financeiro ativar) | Criar árvore completa conforme PROTOCOLO-CAPTURA-FINANCEIRA.md: `Financeiro/2026/[Mês]/Extratos/Comprovantes/Notas_Fiscais_Emitidas/...` |
| G11 | **Planilha Financeira Mestre não existe** | Alta (quando financeiro ativar) | Criar Google Sheet com as 10 abas definidas no framework: Transações, Categorias, Contas a Pagar, Contas a Receber, DRE, Fluxo de Caixa, Ofertas, Campanhas, Dashboard, Simulações. |
| G12 | **Inventário de Assinaturas não existe** | Média | Criar `_Inventário_Assinaturas.md` no Drive ou como database no Notion (HQ Financeiro). Listar todas as ferramentas recorrentes com valor, vencimento, categoria, essencialidade. |

---

## 5. DIAGRAMAS HTML

### O que EXISTE

| # atual | Arquivo | Conteúdo |
|---|---|---|
| 01 | `01-loop-central.html` | Loop central do sistema |
| 02 | `02-10-atos.html` | 10 atos da jornada |
| 03 | `03-ativos-de-percepcao.html` | Framework de ativos |
| 04 | `04-esteira.html` | Esteira de produtos |
| 05 | `05-saber-fazer.html` | Loop SABER↔FAZER |
| 06 | `06-olimpo.html` | Os 6 agentes |

### GAP encontrado

| # | Gap | Gravidade | Plano de ação |
|---|---|---|---|
| G13 | **Numeração dos HTMLs existentes diverge do plano na INTEGRACAO-OPERACIONAL.md** | Baixa | O plano define 14 HTMLs com numeração diferente (ex: `01-arquitetura-sistema`, `09-esteira-produtos`). Os 6 existentes usam numeração própria. Ao criar os novos, decidir: renumerar os existentes para alinhar com o plano, ou manter e ajustar o plano. Renumerar é mais limpo. |

---

## 6. REFERÊNCIAS CRUZADAS — CONSISTÊNCIA

### Verificações realizadas

| Verificação | Resultado |
|---|---|
| Todos os gatilhos no CLAUDE.md apontam para skills que existem? | **FALHA** — `lua-cheia-expansao` e `frameworks-anuncios` não têm SKILL.md (G5, G5b) |
| Todas as skills com SKILL.md têm gatilho no CLAUDE.md? | OK — as 30 skills existentes estão mapeadas |
| Todos os plugin.json existem para os 6 plugins? | OK |
| Os READMEs dos plugins estão atualizados? | OK — Chaveiro, Cartógrafo, Alquimista, Bardo, Iluminista têm README |
| Arauto tem README? | **NÃO** — único plugin sem README.md |
| GUIA-DO-SISTEMA.md referencia estrutura atual? | OK |
| SISTEMA-DE-ARTEFATOS.md está alinhado com Dossiê template? | OK |
| As 3 referências estratégicas estão completas e acessíveis? | OK |
| INTEGRACAO-OPERACIONAL.md está consistente com estado atual? | OK — gaps são todos itens ainda não executados dos 5 blocos |
| GROWTH-LOOP.md referencia corretamente esteira, conteúdo e integração? | OK |
| PROTOCOLO-CAPTURA-FINANCEIRA.md está alinhado com framework financeiro? | OK |

---

## 7. PRIORIZAÇÃO DOS GAPS

### Tier 1 — Resolver ANTES de ativar o sistema financeiro ou criar skills novas

| Gap | O que | Bloqueante para |
|---|---|---|
| G4 | Adicionar gatilhos no CLAUDE.md | Skills novas serem ativáveis |
| G5 | Criar SKILL.md para `lua-cheia-expansao` ou redirecionar | Ritual trimestral funcionar via gatilho |
| G3 | Criar as 4 skills novas (SKILL.md) | Operação financeira e de produto |

### Tier 2 — Resolver quando ATIVAR cada módulo

| Gap | O que | Ativador |
|---|---|---|
| G6 | Criar HQ Financeiro no Notion | Primeira transação real |
| G10 | Criar estrutura Financeiro/ no Drive | Primeira transação real |
| G11 | Criar Planilha Financeira Mestre | Primeira transação real |
| G7 | Criar Ficha de Produto dentro de MINHA ESTEIRA | Primeiro Product Brief |
| G8 | Criar Feedback Log (database) | Primeiro feedback de cliente |
| G9 | Criar Changelog (database) | Primeira melhoria de produto |
| G1 | Criar pasta `templates-negocio/` com 10 templates | Skills de negócio ativarem |

### Tier 3 — Organização e cosmético

| Gap | O que |
|---|---|
| G2 | Migrar diagramas para `diagramas/html/` |
| G5b | Criar SKILL.md para `frameworks-anuncios` |
| G12 | Criar Inventário de Assinaturas |
| G13 | Alinhar numeração dos HTMLs com o plano |
| — | Criar README.md para Arauto |

---

## 8. ESTADO GERAL POR BLOCO DE EXECUÇÃO

Conforme definido em INTEGRACAO-OPERACIONAL.md:

```
BLOCO 1 — Infraestrutura (templates + pastas)
  Status: NÃO INICIADO
  Gaps: G1, G2
  Pré-requisito para: Blocos 2-5

BLOCO 2 — Skills novas (4 SKILL.md)
  Status: NÃO INICIADO
  Gaps: G3, G4, G5, G5b
  Pré-requisito para: Blocos 3-5

BLOCO 3 — Notion (espaços e databases)
  Status: NÃO INICIADO
  Gaps: G6, G7, G8, G9
  Pré-requisito para: Bloco 4

BLOCO 4 — Rotinas (integrar ao Ritual da Chave)
  Status: NÃO INICIADO
  Gap: nenhum além de G5 (lua-cheia-expansao)
  Pré-requisito para: operação contínua

BLOCO 5 — Diagramas HTML (14 planejados, 6 existem)
  Status: PARCIAL (6/14 = 43%)
  Gaps: G13
  Independente dos outros blocos
```

---

## 9. VEREDICTO

O sistema está **estrategicamente alinhado** — toda a arquitetura conceitual (frameworks, growth loop, protocolo de captura, integração operacional) está documentada, consistente e referenciando corretamente entre si.

O que falta é **execução dos blocos operacionais**: criar as pastas, skills, databases e templates que a arquitetura planejou. Isso é esperado e correto — o princípio do Lucas foi "engatilhar, não executar tudo de uma vez".

**Para o momento atual** (pré-primeiro-beta), o sistema está pronto para operar com as skills existentes. Os gaps se tornam relevantes no momento em que cada módulo for ativado:
- Primeira venda → ativa financeiro (G6, G10, G11)
- Primeiro product brief → ativa gestão de produto (G7)
- Primeiro feedback de cliente → ativa feedback loop (G8, G9)
- Decisão de criar documento empresarial → ativa forja-de-negocio (G1, G3)

Nenhum gap impede a operação imediata do sistema. Todos são itens de ativação futura, corretamente planejados e priorizados.

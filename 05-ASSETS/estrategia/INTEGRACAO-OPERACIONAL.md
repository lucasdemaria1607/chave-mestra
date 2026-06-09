---
status: blueprint aprovado — executar por blocos
criado: 2026-06-07
autor: Lucas De Maria (Grigo)
prioridade: alta
uso: mapa-mestre de como os 3 frameworks (Documentos Empresariais, Financeiro Solo, Gestao de Produto) se integram ao sistema CM
---

# Integração Operacional — Blueprint Mestre

Como os 3 frameworks de referência viram sistema vivo dentro da Chave Mestra.

Princípio: **nada estanque, nada deslocado, nada inutilizável.** Cada elemento precisa ter: dono (skill/plugin), casa (onde vive), gatilho (quando ativa), formato de output (como sai), e conexão (com o que se relaciona).

---

## PARTE 1 — MAPA DE INTEGRAÇÃO: O QUE VIRA O QUÊ

### 1.1 O que vira SKILL nova

Skills são capacidades ativáveis por comando. Só viram skill coisas que: (a) têm input/output definido, (b) serão usadas mais de uma vez, (c) precisam de método, não só template.

| Skill nova | Plugin hospedeiro | O que faz | Input | Output | Gatilho |
|---|---|---|---|---|---|
| **forja-de-negocio** | Alquimista | Gera/atualiza documentos empresariais por tipo (SOP, Playbook, Policy, Guidelines, Briefing, One-Pager) | tipo + contexto + dados do Dossiê | documento formatado + salvo na pasta correta | "cria um SOP de...", "política de...", "playbook de..." |
| **hq-financeiro** | Arauto | Opera o sistema financeiro: classifica transações, gera DRE, fluxo de caixa, relatório mensal, simulações | CSV/dados + período | relatório + dashboard atualizado | "fecha o mês", "classifica transações", "simula cenário" |
| **gestao-de-produto** | Alquimista | Cria/atualiza documentos de produto (Product Brief, PRD, Journey Map, Backlog, Changelog, Feedback Log) | produto da esteira + dados | documento de produto formatado | "product brief do...", "PRD do...", "registra feedback" |
| **onboarding-builder** | Arauto | Gera manual de onboarding para qualquer produto ou cliente | produto + persona + jornada | guia de onboarding completo | "cria onboarding do...", "manual de entrada do..." |

> **Nota:** NÃO criar skills para coisas que são templates estáticos (ex: modelo de contrato). Templates vivem como referência, não como skill.

### 1.2 O que vira ROTINA (ritual recorrente)

Rotinas são processos que repetem em cadência fixa. Integram ao Ritual da Chave existente.

| Rotina | Cadência | O que faz | Skill/Plugin | Integra com |
|---|---|---|---|---|
| **Giro Financeiro Semanal** | Segunda, 20 min | Atualiza entradas/saídas, confere contas, verifica caixa | hq-financeiro | Giro da Chave (diário) |
| **Fechamento Mensal** | Fim do mês, 90 min | Consolida transações, fecha DRE, gera relatório com IA, registra decisões | hq-financeiro | Lua Cheia (mensal) |
| **Revisão de Produto** | Mensal (junto com Lua Cheia) | Checa: vendeu? usou? travou? feedback? margem? | gestao-de-produto | Lua Cheia + metricas-produto |
| **Revisão de Dívida de Produto** | Mensal | Verifica: docs desatualizados? onboarding confuso? templates antigos? links quebrados? | gestao-de-produto | Lua Cheia |
| **Auditoria Documental** | Trimestral | Verifica quais documentos empresariais precisam ser criados/atualizados dado o estágio atual | forja-de-negocio | Lua Cheia Expansão |

**Como integra ao Ritual da Chave existente:**

```
GIRO DA CHAVE (diário)
└── [sem mudança — continua como está]

FORJA SEMANAL (semanal)
├── [rotina existente de conteúdo]
└── + Giro Financeiro Semanal (segunda, 20 min)

LUA CHEIA (mensal)
├── [rotina existente: métricas, 6D, erros, planejamento]
├── + Fechamento Mensal Financeiro (90 min)
├── + Revisão de Produto (30 min)
└── + Revisão de Dívida de Produto (15 min)

LUA CHEIA EXPANSÃO (trimestral/por volume)
├── [rotina existente: curadoria de notas]
└── + Auditoria Documental (30 min)
```

### 1.3 O que vira ESPAÇO NO NOTION

Espaços são databases ou páginas estruturadas no Notion. Criados no workspace Lucas Grigo E no template Nome do Cliente (protocolo de espelhamento).

| Espaço | Tipo | Onde vive | Campos principais | Espelha no cliente? |
|---|---|---|---|---|
| **HQ Financeiro** | Página-portal | Root do workspace | Dashboard + sub-páginas | NÃO (dados pessoais) |
| **Decisões Financeiras** | Database | Dentro de HQ Financeiro | Data, Contexto, Número, Problema, Decisão, Hipótese, Revisar em, Resultado, Aprendizado | NÃO |
| **Ofertas (financeiro)** | Database | Dentro de HQ Financeiro | Nome, Preço, Margem, CAC, Lucro/venda, Status, Papel na esteira | NÃO (dados reais) |
| **Campanhas (financeiro)** | Database | Dentro de HQ Financeiro | Campanha, Oferta, Canal, Investimento, Receita, CAC, ROAS, Lucro, Aprendizado | NÃO |
| **Ficha de Produto** | Página interna | Dentro de cada produto na MINHA ESTEIRA | Product Brief + PRD + Jornada + Roadmap + Backlog + Feedback + Changelog + Métricas | SIM (estrutura) |
| **Feedback Log** | Database | Dentro de MINHA ESTEIRA ou sub-db | Data, Cliente, Produto, Feedback, Tipo, Etapa, Gravidade, Ação | SIM (estrutura) |
| **Changelog** | Database | Dentro de MINHA ESTEIRA | Data, Versão, Mudança, Motivo, Fonte, Impacto | SIM (estrutura) |
| **Documentos Empresariais** | Database | Root do workspace (PORTAIS) | Nome, Tipo, Status, Dono, Atualizado em, Produto relacionado, Link | NÃO (ops interna) |

### 1.4 O que vira TEMPLATE (modelo reutilizável)

Templates são estruturas pré-prontas que se duplicam. Vivem em `05-ASSETS/templates-cliente/` ou `05-ASSETS/templates-negocio/`.

| Template | Formato | Onde vive | Quando usar |
|---|---|---|---|
| TEMPLATE-PRODUCT-BRIEF.md | Markdown | templates-negocio/ | Ao criar qualquer produto novo |
| TEMPLATE-PRD.md | Markdown | templates-negocio/ | Ao detalhar escopo de produto |
| TEMPLATE-CUSTOMER-JOURNEY.md | Markdown | templates-negocio/ | Ao mapear experiência do cliente |
| TEMPLATE-SALES-PLAYBOOK.md | Markdown | templates-negocio/ | Ao estruturar processo de venda |
| TEMPLATE-SOP.md | Markdown | templates-negocio/ | Ao documentar procedimento operacional |
| TEMPLATE-POLICY.md | Markdown | templates-negocio/ | Ao definir regra/limite oficial |
| TEMPLATE-ONBOARDING.md | Markdown | templates-negocio/ | Ao criar entrada de cliente/aluno |
| TEMPLATE-POST-MORTEM.md | Markdown | templates-negocio/ | Ao fechar campanha/lançamento |
| TEMPLATE-RELATORIO-FINANCEIRO.md | Markdown | templates-negocio/ | Ao fechar mês financeiro |
| TEMPLATE-FEEDBACK-LOG.md | Markdown | templates-negocio/ | Ao registrar feedback de cliente |

### 1.5 O que vira REFERÊNCIA (consulta sob demanda)

Referências são os próprios documentos já salvos. Não viram skill, não viram rotina. São consultados quando um gatilho específico dispara.

| Referência | Arquivo | Quem consulta | Quando |
|---|---|---|---|
| Framework de Documentos Empresariais | `referencias/DOCUMENTOS-EMPRESARIAIS.md` | forja-de-negocio, qualquer plugin | Ao criar qualquer documento empresarial |
| Framework Financeiro Solo | `referencias/SISTEMA-FINANCEIRO-SOLO.md` | hq-financeiro | Ao operar o sistema financeiro |
| Framework de Gestão de Produto | `referencias/GESTAO-DE-PRODUTO.md` | gestao-de-produto, portal-da-escala | Ao criar/melhorar qualquer produto |
| Referência Legal | `referencias/LEGAL-AUXILIAR.md` | forja-de-negocio | Ao criar contrato, política, termo |
| Referências PM/PMM | `00-FUNDACAO/REFERENCIAS-PM-PMM.md` | Vários | Ao aplicar framework de produto/marketing |

---

## PARTE 2 — FORMATO DE OUTPUT POR TIPO DE SAÍDA

Cada tipo de documento/artefato tem um formato ideal. A escolha depende de: quem vai consumir, como vai usar, e onde vai viver.

### 2.1 Documentos internos (ops do negócio)

| Tipo | Formato primário | Formato secundário | Por quê |
|---|---|---|---|
| SOP | **Markdown** (.md) | Notion (página) | Precisa ser versionado (git), consultado rápido, atualizável |
| Policy | **Markdown** (.md) | Notion (página) | Mesmo motivo — precisa de histórico |
| Playbook | **Markdown** (.md) | Notion (página) | Mais longo, mas mesma lógica |
| Relatório financeiro | **Markdown** (.md) | Notion (página) + PDF | IA gera em md, você revisa, exporta se necessário |
| Decisão financeira | **Notion** (database entry) | — | Precisa de campos estruturados, filtros, views |
| Feedback Log | **Notion** (database entry) | — | Precisa de filtros por tipo, produto, gravidade |
| Changelog | **Notion** (database entry) | — | Precisa de timeline, filtro por produto |
| Backlog | **Notion** (database entry) | — | Precisa de priorização, status, filtros |

### 2.2 Documentos de produto (estratégicos)

| Tipo | Formato primário | Formato secundário | Por quê |
|---|---|---|---|
| Product Brief | **Markdown** (.md) | Notion (página interna do produto) | Precisa ser preciso, versionável |
| PRD | **Markdown** (.md) | Notion (página interna) | Idem |
| Customer Journey | **Markdown** (.md) + **HTML** (diagrama) | Notion (página) | O md descreve; o HTML visualiza |
| Service Blueprint | **HTML** (diagrama interativo) | Markdown (versão texto) | Precisa ser visual — tabela complexa |
| Value Proposition Canvas | **HTML** (diagrama) | Markdown | Visual por natureza |
| Roadmap | **Notion** (database com views) | Markdown | Precisa de timeline visual |

### 2.3 Documentos de marca/identidade

| Tipo | Formato primário | Formato secundário | Por quê |
|---|---|---|---|
| Brand Book | **HTML** (apresentação visual) | PDF | Precisa de estética — md não basta |
| Culture Code | **Markdown** (.md) | Notion | Comportamental, não visual |
| Manifesto | **HTML** (apresentação) | PDF | Precisa de impacto visual |

### 2.4 Documentos de entrega ao cliente

| Tipo | Formato primário | Formato secundário | Por quê |
|---|---|---|---|
| Kit de Entrega (Fases 0-5) | **PDF** (exportado de md) | Notion (compartilhado) | Cliente precisa de formato limpo |
| Relatório de Diagnóstico | **PDF** | — | Entrega formal |
| Proposta de Oferta | **PDF** + **HTML** (se interativo) | — | Precisa de apresentação |
| Plano de Campanha | **PDF** + **Notion** (operacional) | — | Visual + operacional |

### 2.5 Visuais / Diagramas / Apresentações

| Tipo | Formato | Tecnologia | Por quê |
|---|---|---|---|
| Arquitetura do sistema | **HTML** interativo | HTML/CSS/JS estático | Navegável, zoom, clicável |
| Ciclo de vida do produto | **HTML** | HTML/CSS | Etapas com expand/collapse |
| Fluxo financeiro | **HTML** | HTML/CSS | Camadas visuais |
| Hierarquia de documentos (6 níveis) | **HTML** | HTML/CSS | Árvore navegável |
| Mapa de dependências dos plugins | **HTML** | HTML/CSS/JS | Nós e conexões |
| Customer Journey (visual) | **HTML** | HTML/CSS | Timeline horizontal |
| Service Blueprint (visual) | **HTML** | HTML/CSS | Linhas de visibilidade |
| SABER ↔ FAZER loop | **HTML** | HTML/CSS | Circular, animado |
| Esteira de Produtos | **HTML** | HTML/CSS | Funil visual com preços |
| Cavalo de Troia (estratégia) | **HTML** | HTML/CSS | 4 movimentos visuais |
| Os 6 Agentes do Olimpo | **HTML** | HTML/CSS | Pantheon visual |
| Stack financeiro (4 camadas) | **HTML** | HTML/CSS | Diagrama de camadas |
| Ciclo DISCOVERY → DELIVERY | **HTML** | HTML/CSS | Dois hemisférios |
| Mapa Dor → Reveal (conteúdo) | **HTML** | HTML/CSS | Tabela visual interativa |

**Padrão técnico para todos os HTMLs:**

```
- Arquivo único (.html) — CSS e JS inline, zero dependência externa
- Tema dark (fundo escuro, tipografia clara, acentos dourados/azuis)
- Responsivo (funciona em tela e mobile)
- Exportável como PNG via screenshot ou print
- Navegável: hover mostra detalhes, click expande seções
- Cada HTML tem versão "aula" (com explicações) e versão "mapa" (só estrutura)
```

**Onde vivem:** `05-ASSETS/diagramas/html/`

**Nomenclatura:** `[numero]-[slug]-[versao].html`

Exemplos:
```
01-arquitetura-sistema-v1.html
02-ciclo-produto-v1.html
03-fluxo-financeiro-v1.html
04-hierarquia-documentos-v1.html
05-dependencias-plugins-v1.html
06-customer-journey-v1.html
07-service-blueprint-v1.html
08-saber-fazer-loop-v1.html
09-esteira-produtos-v1.html
10-cavalo-de-troia-v1.html
11-olimpo-agentes-v1.html
12-stack-financeiro-v1.html
13-discovery-delivery-v1.html
14-mapa-dor-reveal-v1.html
```

---

## PARTE 3 — ORGANIZAÇÃO E ARMAZENAMENTO

### 3.1 Estrutura de pastas (o que muda)

```
CHAVE-MESTRA/
├── 00-FUNDACAO/          → [sem mudança]
├── 01-PLUGINS/           → [sem mudança na estrutura]
│   ├── 02-alquimista/
│   │   └── skills/
│   │       ├── forja-de-negocio/     ← NOVO: documentos empresariais
│   │       │   ├── SKILL.md
│   │       │   └── templates/        ← templates de cada tipo de documento
│   │       └── gestao-de-produto/    ← NOVO: ciclo de vida de produto
│   │           └── SKILL.md
│   ├── 04-arauto/
│   │   └── skills/
│   │       ├── hq-financeiro/        ← NOVO: sistema financeiro
│   │       │   ├── SKILL.md
│   │       │   └── categorias.md     ← plano de categorias fixo
│   │       └── onboarding-builder/   ← NOVO: gerador de onboarding
│   │           └── SKILL.md
├── 05-ASSETS/
│   ├── referencias/                  → [3 frameworks já salvos + legal]
│   ├── estrategia/                   → [esteira + conteúdo + inventário + NOVO]
│   │   └── INTEGRACAO-OPERACIONAL.md ← ESTE DOCUMENTO
│   ├── templates-negocio/            ← NOVO: templates de documentos empresariais
│   │   ├── TEMPLATE-PRODUCT-BRIEF.md
│   │   ├── TEMPLATE-PRD.md
│   │   ├── TEMPLATE-CUSTOMER-JOURNEY.md
│   │   ├── TEMPLATE-SALES-PLAYBOOK.md
│   │   ├── TEMPLATE-SOP.md
│   │   ├── TEMPLATE-POLICY.md
│   │   ├── TEMPLATE-ONBOARDING.md
│   │   ├── TEMPLATE-POST-MORTEM.md
│   │   ├── TEMPLATE-RELATORIO-FINANCEIRO.md
│   │   └── TEMPLATE-FEEDBACK-LOG.md
│   ├── templates-cliente/            → [já existe — SOPs e estrutura de projeto]
│   └── diagramas/
│       └── html/                     ← NOVO: todos os diagramas HTML interativos
│           ├── 01-arquitetura-sistema-v1.html
│           ├── ...
│           └── 14-mapa-dor-reveal-v1.html
```

### 3.2 O que vive onde — mapa completo

| Tipo de artefato | Onde NASCE | Onde VIVE | Onde é CONSULTADO |
|---|---|---|---|
| Referência estratégica | Conversa / estudo | `referencias/*.md` | Skills, ao ativar |
| Template de documento | Criado uma vez | `templates-negocio/*.md` | Skills, ao gerar documento |
| SOP operacional | Skill forja-de-negocio | `templates-cliente/sops/` | Rotinas, onboarding, equipe |
| Documento de produto | Skill gestao-de-produto | Notion (dentro do produto) + git | Revisão mensal, decisões |
| Relatório financeiro | Skill hq-financeiro | Notion (HQ Financeiro) + git | Lua Cheia, decisões |
| Diagrama HTML | Criado por skill/manual | `diagramas/html/` | Aulas, apresentações, contexto |
| Dossiê do cliente | Chaveiro | `dossies/[nome].md` + Notion | Todos os plugins |
| Entrega ao cliente | SOP-ENTREGA-CLIENTE | `entregas/` ou Notion | Cliente final |

---

## PARTE 4 — CONEXÕES: COMO TUDO SE RELACIONA

### 4.1 O grafo de dependências completo

```
CAMADA 0 — IDENTIDADE (quem a empresa é)
├── Brand Book → Cartógrafo / Forja do Universo (já existe)
├── Culture Code → forja-de-negocio (NOVO) — gatilho: equipe/comunidade
├── Manifesto → 00-FUNDACAO (já existe)
└── Tom de voz → Cartógrafo (já existe no DNA de marca)

CAMADA 1 — ESTRATÉGIA (para onde vai)
├── Esteira de Produtos → ESTEIRA-DE-PRODUTOS.md (já existe)
├── Estratégia de Conteúdo → ESTRATEGIA-DE-CONTEUDO.md (já existe)
├── Product Strategy → gestao-de-produto (NOVO) — 1 por produto
├── Roadmap → ESTEIRA (já existe) + gestao-de-produto (por produto)
└── OKRs → gestao-de-produto (FUTURO) — gatilho: 3+ meses dados

CAMADA 2 — PRODUTO (o que é entregue)
├── Product Brief → gestao-de-produto (NOVO) — 1 por produto
├── PRD → gestao-de-produto (NOVO)
├── Customer Journey → gestao-de-produto (NOVO) + HTML visual
├── Service Blueprint → gestao-de-produto (NOVO) + HTML visual
├── Onboarding → onboarding-builder (NOVO)
└── Knowledge Base (externa) → FUTURO — gatilho: perguntas repetidas

CAMADA 3 — OPERAÇÃO (como executa)
├── SOPs → templates-cliente/sops/ (4 existem) + forja-de-negocio (NOVO)
├── Playbooks → forja-de-negocio (NOVO)
├── Ritual da Chave → já existe (3 ciclos)
│   ├── + Giro Financeiro Semanal (NOVO)
│   ├── + Revisão de Produto Mensal (NOVO)
│   └── + Auditoria Documental Trimestral (NOVO)
├── RACI → forja-de-negocio (FUTURO) — gatilho: mais de 1 pessoa
└── Calendário → Notion + Bardo (já existe)

CAMADA 4 — VENDAS (como adquire e converte)
├── Documento de Oferta → Alquimista / Forja de Oferta (já existe)
├── Sales Playbook → forja-de-negocio (NOVO)
├── Matriz de Objeções → Alquimista (parcial) + forja-de-negocio
├── Scripts → Arauto / prospeccao-ativa (já existe)
└── Conteúdo de venda → Bardo + Cavalo de Troia (já existe)

CAMADA 5 — FINANCEIRO (como administra dinheiro)
├── Banco de Transações → hq-financeiro (NOVO) — Google Sheets
├── DRE Mensal → hq-financeiro (NOVO)
├── Fluxo de Caixa → hq-financeiro (NOVO)
├── Controle de Ofertas → hq-financeiro (NOVO) — cruza com ESTEIRA
├── Controle de Campanhas → hq-financeiro (NOVO) — cruza com metricas-produto
├── Dashboard → Notion HQ Financeiro (NOVO)
├── Decisões Financeiras → Notion database (NOVO)
└── SOPs Financeiros → forja-de-negocio (NOVO)

CAMADA 6 — GOVERNANÇA (regras e limites)
├── Políticas → forja-de-negocio (NOVO)
├── Contratos → referencias/LEGAL-AUXILIAR.md (já existe)
├── Termos de uso → forja-de-negocio (FUTURO)
└── Compliance → forja-de-negocio (FUTURO)

CAMADA 7 — APRENDIZADO (como evolui)
├── Post-Mortem → SOP-REVISAO-MENSAL (já existe) + forja-de-negocio
├── Feedback Log → gestao-de-produto (NOVO)
├── Changelog → gestao-de-produto (NOVO)
├── Tesouro dos Erros → Chaveiro (já existe)
├── PMF Log → gestao-de-produto (FUTURO)
└── Zettelkasten → Sistema de Conhecimento (já existe)
```

### 4.2 Cruzamentos críticos (onde os sistemas conversam)

| Sistema A | Sistema B | Ponto de cruzamento | Como implementar |
|---|---|---|---|
| ESTEIRA (produto) | FINANCEIRO | Margem por produto, lucro por venda | Relation: Ofertas (fin) → MINHA ESTEIRA |
| ESTEIRA (produto) | GESTÃO DE PRODUTO | Product Brief, PRD, Backlog | Páginas internas dentro de cada produto |
| FINANCEIRO | CAMPANHAS | CAC, ROAS, investimento vs retorno | Relation: Campanhas (fin) → Conteúdo + MINHA ESTEIRA |
| CONTEÚDO | VENDAS | Cavalo de Troia → lead → venda | Métricas de conteúdo → funil de conversão |
| FEEDBACK | BACKLOG | Feedback vira melhoria no backlog | Relation: Feedback Log → Backlog |
| CHANGELOG | ROADMAP | Mudança realizada vs planejada | Timeline comparativa |
| DECISÕES FIN | LUA CHEIA | Decisão financeira → revisão mensal | Consulta cruzada no ritual |
| TESOURO DOS ERROS | POST-MORTEM | Erro operacional → lição de campanha | Relation bidirecional |

---

## PARTE 5 — OS 14 DIAGRAMAS HTML

Cada diagrama é um HTML autossuficiente que serve como: (a) material de aula, (b) mapa de resgate ("onde estou? o que falta?"), (c) apresentação para clientes/parceiros.

### Lista completa com especificação

| # | Nome | O que mostra | Nível de detalhe | Interatividade |
|---|---|---|---|---|
| 01 | **Arquitetura do Sistema CM** | Os 7 níveis (identidade→aprendizado), 6 plugins, 2 pilares (SABER/FAZER), como tudo se conecta | Alto — zoom por camada | Click expande cada camada em sub-itens |
| 02 | **Ciclo de Vida do Produto** | 8 etapas (descoberta→evolução), documentos por etapa, perguntas-guia | Médio | Click em etapa mostra docs + perguntas |
| 03 | **Fluxo Financeiro** | 4 camadas (captura→memória), ferramentas por camada, rotinas | Médio | Hover mostra detalhe de cada módulo |
| 04 | **Hierarquia de Documentos** | 6 níveis de documentos empresariais, quais existem na CM, quais faltam | Alto | Cor = status (existe/novo/futuro) |
| 05 | **Dependências dos Plugins** | Grafo de quem produz o quê para quem, fases 0-5 | Alto | Nós clicáveis, arestas mostram o artefato |
| 06 | **Customer Journey Template** | Etapas da jornada, o que o cliente pensa/sente/faz/trava em cada uma | Médio | Template genérico preenchível |
| 07 | **Service Blueprint Template** | Frontstage/backstage/suporte, 5 linhas de visibilidade | Médio | Template genérico |
| 08 | **SABER ↔ FAZER Loop** | Dois hemisférios, fluxos bidirecionais, databases envolvidas | Médio | Hover mostra exemplos de cada fluxo |
| 09 | **Esteira de Produtos** | Funil visual: isca → SO → Olimpo → Comunidade → Serviço, preços, dependências | Alto | Click em produto mostra detalhes |
| 10 | **Cavalo de Troia** | 4 movimentos (hook→dev→reveal→CTA), mapa dor→sistema, séries A-D | Médio | Click em dor mostra reveal correspondente |
| 11 | **Olimpo — Os 6 Agentes** | Pantheon visual: Zeus→5 deuses, função CM de cada um, dependências | Alto | Click em agente mostra skills e outputs |
| 12 | **Stack Financeiro** | 4 camadas visuais empilhadas: captura/classificação/análise/memória, ferramentas | Médio | Hover mostra detalhe |
| 13 | **Discovery ↔ Delivery** | Dois hemisférios com ciclo, atividades de cada lado | Médio | Click expande atividades |
| 14 | **Mapa Dor → Reveal** | Tabela visual: 82 peças de conteúdo, 7 mundos, dor→conceito→reveal→formato | Alto — filtros por mundo | Filtro por mundo, busca por dor |

### Especificação visual padrão

```
TEMA:
- Fundo: #0a0a0f (quase preto)
- Texto principal: #e8e4df (off-white quente)
- Acentos: #c9a84c (dourado) para títulos e destaques
- Secundário: #4a9eff (azul elétrico) para links e interações
- Alerta: #ff6b6b (vermelho suave) para gaps/riscos
- Sucesso: #4ecdc4 (verde-água) para itens existentes

TIPOGRAFIA:
- Títulos: Inter ou similar, bold, tracking largo
- Corpo: Inter, regular
- Código/dados: JetBrains Mono ou similar

LAYOUT:
- Max-width: 1200px centrado
- Padding generoso
- Cards com border sutil (#1a1a2e)
- Hover states com glow sutil
- Transições suaves (0.3s ease)

RESPONSIVIDADE:
- Desktop: layout completo
- Tablet: simplificado
- Mobile: stack vertical, interações por tap
```

---

## PARTE 6 — ORDEM DE EXECUÇÃO

### Bloco 1 — Infraestrutura (criar antes de tudo)

- [ ] Criar pasta `05-ASSETS/templates-negocio/`
- [ ] Criar pasta `05-ASSETS/diagramas/html/`
- [ ] Criar os 10 templates de documento (.md)
- [ ] Atualizar CLAUDE.md com gatilhos das 4 skills novas

### Bloco 2 — Skills novas (criar os SKILL.md)

- [ ] `forja-de-negocio/SKILL.md` — referencia DOCUMENTOS-EMPRESARIAIS.md + templates
- [ ] `gestao-de-produto/SKILL.md` — referencia GESTAO-DE-PRODUTO.md + templates
- [ ] `hq-financeiro/SKILL.md` — referencia SISTEMA-FINANCEIRO-SOLO.md
- [ ] `onboarding-builder/SKILL.md`

### Bloco 3 — Notion (criar espaços)

- [ ] HQ Financeiro (portal + databases)
- [ ] Ficha de Produto (template dentro de MINHA ESTEIRA)
- [ ] Feedback Log (database)
- [ ] Changelog (database)
- [ ] Documentos Empresariais (database de tracking)

### Bloco 4 — Rotinas (integrar ao Ritual da Chave)

- [ ] Atualizar `ritual-da-chave/SKILL.md` com as novas rotinas
- [ ] Criar checklists para cada rotina nova

### Bloco 5 — Diagramas HTML (criar por prioridade)

Prioridade 1 (precisa agora — contexto e aulas):
- [ ] 01 — Arquitetura do Sistema CM
- [ ] 09 — Esteira de Produtos
- [ ] 08 — SABER ↔ FAZER Loop
- [ ] 05 — Dependências dos Plugins

Prioridade 2 (precisa logo — operação):
- [ ] 04 — Hierarquia de Documentos
- [ ] 02 — Ciclo de Vida do Produto
- [ ] 11 — Olimpo — Os 6 Agentes
- [ ] 10 — Cavalo de Troia

Prioridade 3 (quando ativar — escala):
- [ ] 03 — Fluxo Financeiro
- [ ] 12 — Stack Financeiro
- [ ] 06 — Customer Journey Template
- [ ] 07 — Service Blueprint Template
- [ ] 13 — Discovery ↔ Delivery
- [ ] 14 — Mapa Dor → Reveal

---

## PARTE 7 — O FIO DE ARIADNE

Como garantir que nada se perde, nenhuma lacuna fica aberta, e qualquer contexto pode ser resgatado:

### 7.1 O protocolo de resgate

Quando você (Lucas) precisar resgatar contexto sobre qualquer aspecto do negócio:

```
"Qual é a situação do [aspecto]?"

→ O sistema consulta:
  1. Dossiê CM (contexto do projeto/cliente)
  2. ESTEIRA-DE-PRODUTOS.md (posição na esteira)
  3. Notion databases (dados operacionais)
  4. Referências estratégicas (frameworks)
  5. Diagramas HTML (visualização)
  6. Tesouro dos Erros (o que não repetir)
  7. Decisões Financeiras (o que já foi decidido)
  8. Feedback Log (o que o mercado disse)
  9. Changelog (o que mudou)
```

### 7.2 A regra anti-lacuna

Todo elemento do sistema precisa passar neste checklist:

```
[ ] Tem DONO (qual skill/plugin é responsável)
[ ] Tem CASA (onde o arquivo/dado vive)
[ ] Tem GATILHO (quando é ativado/criado/atualizado)
[ ] Tem FORMATO (como sai — md, html, notion, pdf)
[ ] Tem CONEXÃO (com o que se relaciona)
[ ] Tem CADÊNCIA (quando é revisado)
[ ] Tem VERSÃO (como rastreia mudanças)
```

Se qualquer item falha nesse checklist, ele vira lacuna. Lacuna vira retrabalho. Retrabalho vira amnésia operacional.

### 7.3 O mapa mental definitivo

A hierarquia completa do negócio, de cima pra baixo:

```
CHAVE MESTRA (a empresa)
├── IDENTIDADE — quem somos (Brand Book, Culture Code, Manifesto, Tom de Voz)
│   └── Dono: Cartógrafo + forja-de-negocio
│
├── ESTRATÉGIA — para onde vamos (Esteira, Conteúdo, Roadmap, OKRs)
│   └── Dono: Alquimista + gestao-de-produto
│
├── PRODUTOS — o que entregamos (Product Brief, PRD, Journey, Blueprint)
│   ├── ① Sistema Operacional
│   ├── ② Olimpo (A/B/C)
│   ├── ③ Comunidade
│   ├── ④ Implementação
│   ├── ⑤ Mentoria
│   └── ⑥ White Label
│   └── Dono: gestao-de-produto + Alquimista
│
├── OPERAÇÃO — como executamos (SOPs, Playbooks, Rituais, RACI)
│   └── Dono: Arauto + forja-de-negocio + Ritual da Chave
│
├── VENDAS — como adquirimos e convertemos (Oferta, Playbook, Objeções, Conteúdo)
│   └── Dono: Alquimista + Bardo + Arauto
│
├── FINANCEIRO — como administramos dinheiro (DRE, Caixa, Campanhas, Decisões)
│   └── Dono: hq-financeiro
│
├── GOVERNANÇA — regras e limites (Políticas, Contratos, Termos)
│   └── Dono: forja-de-negocio + LEGAL-AUXILIAR
│
├── APRENDIZADO — como evoluímos (Feedback, Changelog, Erros, PMF, Zettelkasten)
│   └── Dono: Chaveiro + gestao-de-produto
│
└── CONHECIMENTO — o que sabemos (Zettelkasten, PARA, Modelos Mentais, Progymnasmata)
    └── Dono: Chaveiro / Forja do Conhecimento
```

Cada nó desse mapa tem: documentos, skills, rotinas, métricas e diagramas HTML associados. Nada fica órfão.

---

*Integração Operacional — Blueprint Mestre CM.*
*Criado em 2026-06-07. Lucas De Maria (Grigo).*
*Executar por blocos, na ordem definida.*

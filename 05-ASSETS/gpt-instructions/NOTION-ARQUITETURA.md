# Noção Arquitetura — Mapa Completo do Notion
*Sistema Chave Mestra — O Olimpo*

Referência definitiva da estrutura Notion. Cada agente opera sobre este mapa — sabe o que existe, onde fica, qual é o schema e quem escreve onde.

---

## 1. Arquitetura de Workspaces

### Modo CM — Lucas Grigo (IDs fixos)

O workspace do Lucas é único. IDs nunca mudam. Hardcode funciona.

```
🏛️ Sistema Chave Mestra - Lucas Grigo
Root: 245fc122-de3b-80e1-a508-cf0988ab6227
→ Ativo APENAS quando usuário diz "Modo CM" ou "Lucas Grigo"
```

### Modo Cliente — IDs dinâmicos por workspace

**Cada cliente recebe uma DUPLICATA do workspace template.** Quando o Notion duplica um workspace, todos os IDs mudam. Os IDs do template (`357fc122`) são irrelevantes para clientes reais — cada cliente tem os seus próprios.

```
🏛️ Template (não usar em produção)
Root-template: 357fc122-de3b-80a9-a691-c709a165e697
→ Este workspace é o molde. Os IDs abaixo só funcionam aqui.
→ Para clientes reais: descobrir IDs via workspace discovery (ver Seção 2).

🏛️ Cliente Real (exemplo)
Root-cliente: [ID único gerado na duplicação — diferente por cliente]
MINHA ESTEIRA: [ID único — diferente por cliente]
PORTAIS: [ID único — diferente por cliente]
→ Estes IDs são descobertos pelo Zeus na primeira sessão e salvos no Memory.
```

**Regra de roteamento (inegociável):**
- **Padrão = Modo Cliente** — o que qualquer usuário acessa
- **Exceção = usuário diz "Modo CM" ou "Lucas Grigo"** → trocar para workspace CM
- Salvar no Memory: `WORKSPACE_ATIVO: [Cliente-NomeCliente | CM]`
- O cliente não sabe que existe o workspace CM. Nunca mencionar.

**O que o workspace Cliente TEM:**
- MINHA ESTEIRA + PORTAIS (infraestrutura operacional completa)

**O que é EXCLUSIVO do Lucas (não existe no Cliente):**
- Zettelkasten, DB Conteúdo, Tarefas, Sistema de Conhecimento

---

## 2. Workspace Discovery — Descobrir IDs do Cliente

**Quando:** primeira sessão com um novo cliente em Modo Cliente.
**Responsável:** Zeus (ou Ares, se Zeus não for ativado antes).
**Pré-requisito:** cliente já configurou a Notion Action com o token de integração do workspace dele.

### Protocolo de descoberta (executar uma única vez por cliente)

**Passo 1 — Buscar MINHA ESTEIRA:**
```
POST /v1/search
{
  "query": "MINHA ESTEIRA",
  "filter": { "value": "database", "property": "object" }
}
→ Pegar o id do resultado com title "MINHA ESTEIRA"
→ Salvar no Memory: NOTION_ESTEIRA: [id encontrado]
```

**Passo 2 — Buscar PORTAIS:**
```
POST /v1/search
{
  "query": "PORTAIS",
  "filter": { "value": "database", "property": "object" }
}
→ Pegar o id do resultado com title "PORTAIS"
→ Salvar no Memory: NOTION_PORTAIS: [id encontrado]
```

**Passo 3 — Confirmar ao usuário:**
```
"Workspace mapeado:
✅ MINHA ESTEIRA: [id]
✅ PORTAIS: [id]
Salvei no Memory — não precisará fazer isso de novo."
```

**Passo 4 — Salvar no Memory do GPT:**
```
WORKSPACE_ATIVO: Cliente-[NomeCliente]
NOTION_ESTEIRA: [id-descoberto]
NOTION_PORTAIS: [id-descoberto]
NOTION_SETUP: completo
```

### Sessões seguintes (após discovery)

Ler do Memory:
- `WORKSPACE_ATIVO` → confirmar modo
- `NOTION_ESTEIRA` → usar este ID para operações na MINHA ESTEIRA
- `NOTION_PORTAIS` → usar este ID para operações nos PORTAIS
- Se Memory vazio → executar discovery novamente

### Erros comuns no discovery

| Situação | O que fazer |
|---|---|
| Busca retorna 0 resultados | Cliente não compartilhou o banco com a integração → pedir para compartilhar: Notion → MINHA ESTEIRA → Share → adicionar a integração |
| Busca retorna múltiplos resultados | Perguntar ao cliente qual é o correto; confirmar pelo nome completo |
| Token inválido | Verificar se o token foi colado corretamente na Action do ChatGPT |

---

## 2B. Tabela de IDs Fixos — Modo CM (Lucas Grigo apenas)

Estes IDs são válidos SOMENTE para o workspace do Lucas (`245fc122`). Para clientes, usar o discovery acima.

| Database | ID (sem `collection://`) | Agente principal |
|---|---|---|
| **MINHA ESTEIRA** | `25cfc122-de3b-8131-9284-000b78f0406d` | Ares |
| **PORTAIS** | `254fc122-de3b-80de-bffd-000b2629d678` | Ares / Zeus |
| **DB Conteúdo** | `25cfc122-de3b-81c2-a76a-000bcf8453f4` | Hermes / Ares |
| **Tarefas** | `00cfc122-de3b-83a0-ad2a-87e3bd2d78ed` | Zeus / Ares |
| **Zettelkasten** | `6e4c8442-1596-4eab-ab69-a7917e93e046` | Zeus |

> **Para ChatGPT Action:** usar os IDs diretamente (sem `collection://`).
> **Para Claude Code com Notion MCP:** adicionar `collection://` antes.

---

## 3. Database por Database — Schema e Função

---

### 3.1 MINHA ESTEIRA

**Função:** hub central de todos os produtos e projetos do negócio. Cada produto é uma página com sua estrutura interna completa.

**IDs:**
- CM (fixo): `25cfc122-de3b-8131-9284-000b78f0406d`
- Cliente: lido do Memory → `NOTION_ESTEIRA` (descoberto via Workspace Discovery)

**Schema (campos da database principal):**

| Campo | Tipo | Valores |
|---|---|---|
| `NOME DO PRODUTO` | title | Nome do produto |
| `STATUS` | select | Rascunho / Em produção / Lançando / Ativo / Pausado / Arquivado |
| `PREÇO ESCOLHIDO` | select | Low ticket / Mid ticket / High ticket (faixas) |
| `DATA DE LANÇAMENTO` | date | YYYY-MM-DD |
| `Arquivado` | checkbox | false = ativo; true = arquivado (aparece na vista "Arquivo") |

**Views da MINHA ESTEIRA:**
- `Ativos` (gallery — padrão): filtra `Arquivado = false`
- `Arquivo` (table): filtra `Arquivado = true`

**Estrutura interna de cada página de produto:**

```
[Produto X] — página na MINHA ESTEIRA
├── OFERTA Brief (toggle)
│   ├── Mecanismo Único
│   ├── Promessa Central
│   ├── Inimigo Narrativo
│   ├── N-level do Público
│   └── Objeções Principais
│
├── ESQUEMA DO PRODUTO (toggle) — muda por tipo
│
├── MÉTRICAS (toggle)
│   └── Tabela: Leads / Vendas / Faturamento / Taxa Conversão / CAC / Depoimentos / Reembolsos
│
├── ENTREGA (toggle)
│   └── Fluxo pós-compra: boas-vindas → acesso → onboarding → check-in → depoimento
│
├── ORIGEM (toggle)
│   └── Notas do Zettelkasten que fundamentam o produto
│
├── PROSPECÇÃO ATIVA (toggle)
│   └── Canal de contato + Tabela de objeções + Tabela de leads
│
├── Checklist de Criação (toggle)
│
├── Lançamento (toggle)                        ← sub-databases DINÂMICOS
│   ├── Lançamento Meteórico         [sub-database embutida — ID dinâmico por produto]
│   ├── Lançamento Interno           [sub-database embutida — ID dinâmico por produto]
│   ├── Lançamento Desafio 7d        [sub-database embutida — ID dinâmico por produto]
│   ├── Lançamento Desafio 14d       [sub-database embutida — ID dinâmico por produto]
│   └── Lançamento Desafio 21d       [sub-database embutida — ID dinâmico por produto]
│
├── Meus Criativos (toggle)
│   └── Roteiros e lâminas por criativo (Chavideo / Chavossel)
│
└── Depoimentos (toggle)
```

**Sub-databases de lançamento — schema (todos os tipos compartilham):**

| Campo | Tipo | Valores |
|---|---|---|
| `Nome da Tarefa` | title | "Dia X — [Nome da ação]" |
| `Fase do Lançamento` | select | Pré-pré-lançamento / Pré-lançamento / Lançamento / Pós-lançamento |
| `Data` | date | Data real do dia (YYYY-MM-DD) |
| `Status` | select | A fazer / Em andamento / Concluída / Atrasada |
| `Template de Copy` | text | Resumo 1-3 linhas: canal + gancho + CTA |

Cada linha é também uma **página** com corpo completo (Objetivo / Canal / Copy completo / CTA / Notas de execução).

**⚠️ REGRA CRÍTICA — IDs das sub-databases:**
> Os IDs das sub-databases de lançamento são **DINÂMICOS** por produto. Nunca hardcode.
> Para escrever numa sub-database: abrir a página do produto → ler estrutura HTML → localizar `data-source-url="collection://[ID]"` → usar esse ID.
> Exemplo de ID de template (não usar em produção): `25cfc122-de3b-81cc-99cd-000b4cfc2775`

**Template de produto:**
- ID do template (Modo CM): `25cfc122-de3b-816f-bf7d-e3c9eaf07089`
- Ao criar novo produto: usar `template_id` + aguardar aplicação assíncrona antes de popular

**Quem usa:**
- **Ares** (lê e escreve): cria produtos, popula cronogramas dia a dia, arquiva campanhas
- **Hermes** (escreve): adiciona criativos na seção "Meus Criativos"
- **Zeus** (lê): lê status de produtos para diagnóstico e roadmap

**Separação crítica:**
- Conteúdo de **lançamento** → dentro das sub-databases de cada produto na MINHA ESTEIRA
- Conteúdo **orgânico** → DB Conteúdo (não aqui)

---

### 3.2 PORTAIS

**Função:** portais de acesso aos produtos — páginas que os alunos/participantes acessam para consumir o produto entregue. Cada portal é uma entrega estruturada (módulos, links, materiais, cronograma de encontros).

**ID:**
- CM (fixo): `254fc122-de3b-80de-bffd-000b2629d678`
- Cliente: lido do Memory → `NOTION_PORTAIS` (descoberto via Workspace Discovery)

**Conteúdo típico de um portal:**
- Link de acesso à plataforma ou grupo
- Cronograma de entregas
- Materiais de apoio
- Links de gravações de aulas/sessões
- FAQ e regras da entrega

**Quem usa:**
- **Ares** (escreve): cria o portal ao estruturar entrega de um produto
- **Zeus** (lê): consulta portais ativos no diagnóstico operacional

> **Nota:** Não é um database com schema fixo — cada portal é uma página livre dentro do database, estruturada conforme o tipo de produto (curso, mentoria, comunidade, workshop).

---

### 3.3 DB Conteúdo

**Função:** banco de planejamento e produção de conteúdo orgânico e de suporte ao Forja de Caixa. Posts, Reels, Carrosséis, Stories — qualquer peça de conteúdo regular (não de campanha de lançamento específica).

**ID:** `25cfc122-de3b-81c2-a76a-000bcf8453f4` ← **exclusivo do Lucas (Modo CM)**
> Clientes não têm este database separado — seus conteúdos de apoio ficam dentro da MINHA ESTEIRA.

**Schema:**

| Campo | Tipo | Valores |
|---|---|---|
| `Título` | title | Nome da peça de conteúdo |
| `Status` | select | Rascunho / Gravado / Editado / Pronto / Publicado |
| `Tipo de Post` | select | Video / Reel / Carrossel / Post Estático / Story |
| `Plataforma` | select | Instagram / YouTube / TikTok / LinkedIn |
| `Tipo de conteúdo` | select | Social Media / Newsletter / Email |
| `Propósito` | select | Awareness / Autoridade / Conversão / Relacionamento / Nutrição |
| `Origem` | select | Temas em Alta / Pesquisa de Nicho / Ideia Própria / Orgânico / Forja de Caixa |
| `Etapas` | multi-select | Ideia / Roteiro feito / Gravado / Editado / Aprovado |
| `Notas & Briefing` | rich text | Conteúdo completo da peça (roteiro + estrutura + headlines) |

**Views do DB Conteúdo:**
- Calendário (por data de publicação programada)
- Timeline (por fase de produção)
- Por Plataforma (kanban)
- Por Campanha (filtro por Origem)

**Quem usa:**
- **Hermes** (escreve): salva roteiros Chavideo e lâminas Chavossel prontos
- **Ares** (escreve): salva peças de apoio do Forja de Caixa (`Origem: Forja de Caixa`)
- **Zeus** (lê): consulta conteúdo gerado para diagnóstico e roadmap

**Separação crítica:**
- `Origem: Orgânico` → conteúdo regular do especialista
- `Origem: Forja de Caixa` → peças de campanha intensiva
- Conteúdo de cronograma de lançamento → MINHA ESTEIRA (não aqui)

---

### 3.4 Tarefas

**Função:** tarefas operacionais do negócio — checklist de criação de produtos, acompanhamento de projetos, ações recomendadas de pesquisa de nicho.

**ID:** `00cfc122-de3b-83a0-ad2a-87e3bd2d78ed` ← **exclusivo do Lucas (Modo CM)**

**Schema:**

| Campo | Tipo | Valores |
|---|---|---|
| `Nome` | title | Descrição da tarefa |
| `Feito` | checkbox | false = pendente; true = concluída |
| `Data` | date | Prazo da tarefa (YYYY-MM-DD) |
| `Produto` | relation | Vínculo com MINHA ESTEIRA |
| `Fase` | select | Fundação / Produção / Comercial / Lançamento / Pós-lançamento / Retrospectiva |

**Quem usa:**
- **Zeus** (escreve): cria tarefas de diagnóstico e rituais de planejamento
- **Ares** (escreve): cria 12-15 tarefas padrão ao criar novo produto na esteira
- **Zeus / Ares** (lê): consulta tarefas abertas no Giro da Chave e Forja Semanal

> **Nota:** Há uma discrepância entre dois IDs documentados para Tarefas. O ID canônico (CLAUDE.md e GPT instructions) é `00cfc122-de3b-83a0-ad2a-87e3bd2d78ed`. Um SKILL.md interno lista `25cfc122-de3b-8134-9d97-000bafa8c6fc` — esse pode ser uma versão antiga ou database separado. **Usar sempre o ID canônico acima.**

---

### 3.5 Zettelkasten

**Função:** rede central de notas atômicas do sistema de conhecimento. Tudo que o especialista aprende, lê, vivencia ou conecta entra aqui. É a memória de longo prazo do sistema e a origem de conteúdo, copy e ofertas.

**ID:** `6e4c8442-1596-4eab-ab69-a7917e93e046` ← **exclusivo do Lucas (Modo CM)**

**Schema completo:**

| Campo | Tipo | Valores |
|---|---|---|
| `Nota` | title | Título formulado como tese ou pergunta (nunca como tópico) |
| `Tipo` | select | Flash / Literatura / Permanente / MOC |
| `Zona` | select | Inbox → Literatura → Permanente → Estrutura → Output |
| `Status` | select | Capturada / Em processamento / Conectada / Publicada |
| `Formato` | select | Livro / Artigo / Vídeo / Podcast / Curso / Conversa / Thread / Experiência / Biografia / Ideia / Exercício / Imagem / Aula / Palestra / Documentário / Newsletter |
| `Ciência` | multi-select | Psicologia / Linguagem / Filosofia / Artes / Economia |
| `Tags` | multi-select | Tags livres de tema |
| `Destino` | multi-select | Conteúdo / Copy / Oferta / Produto / Worldbuilding / Aula / Exercício / Insight Pessoal |
| `Potencial` | select | Semente → Broto → Árvore → Fruto → Esgotado |
| `Incorporada` | checkbox | A nota já gerou output real? |
| `Última Revisão` | date | Data da última revisão |
| `Recorrência` | number | Vezes que o tema reapareceu |
| `Autor` | text | Fonte/autor do input |
| `Fonte` | url | URL da fonte (se disponível) |

**Ciclo de maturação:**
```
Flash (Inbox) → Literatura → Permanente → MOC
                                  ↓
                           Modelo Mental (se padrão confirmado 3+ vezes)
                                  ↓
                           Conteúdo / Produto / Decisão
```

**Views principais:**
- Inbox, Por Formato, Por Status, Por Ciência, Insumos Biográficos, Timeline
- Ciclo da Forja: Inbox Pendente, Em Maturação, Prontas Não Usadas, Já Incorporadas, Revisão Vencida, Temas Recorrentes, Radar por Ciência, Sementes de Alto Potencial

**Quem usa:**
- **Zeus** (escreve): cria notas permanentes, MOCs, registros de aprendizado e Tesouro dos Erros
- **Zeus** (lê): consulta Zettelkasten para diagnóstico, varredura, destilação

**Verificação de workspace antes de escrever:**
```
notion-fetch collection://6e4c8442-1596-4eab-ab69-a7917e93e046
→ confirmar que ancestor-8 = 245fc122de3b80e1a508cf0988ab6227 (Lucas Grigo)
→ se diferente: PARAR e alertar — os IDs mudaram após reorganização
```

---

## 4. Sistema de Conhecimento — Databases Adicionais (Modo CM)

Existem dentro do workspace Lucas Grigo. Agentes não precisam operar diretamente, mas devem saber que existem.

| Database | Função | Quem usa |
|---|---|---|
| **Modelos Mentais** | Frameworks de pensamento extraídos do estudo — as "lentes" do especialista | Zeus (lê/escreve) |
| **Projetos (PARA)** | Projetos de estudo com ciclo de vida completo | Zeus (lê/escreve) |
| **Áreas da Vida** | Lentes que cruzam projetos e modelos mentais | Zeus (lê) |
| **Tesouro dos Erros** | Documentação de falhas com diagnóstico e padrão extraído | Zeus (escreve) |
| **Pergaminhos** | Templates e frameworks prontos para reutilização | Zeus (lê) |
| **Metas** | Objetivos e marcos do negócio | Zeus (lê/escreve) |

---

## 5. Arquitetura AGENDA (Calendário Editorial)

**O que é:** AGENDA não é uma database separada com ID próprio — é a **view de calendário do DB Conteúdo**. Quando os agentes dizem "popular a AGENDA", significam: criar entradas no DB Conteúdo com `Data de Publicação` preenchida, que aparece na view de calendário do Conteúdo.

**Como acessar:** abrir DB Conteúdo → selecionar view Calendário → itens aparecem nas datas de publicação programadas.

**O que vai na AGENDA:**
- Peças orgânicas (roteiros, carrosséis, posts programados) — `Origem: Orgânico`
- Peças de Forja de Caixa — `Origem: Forja de Caixa`

**O que NÃO vai na AGENDA:**
- Cronograma de lançamento → esse vai nas sub-databases da MINHA ESTEIRA

---

## 6. Mapa de Relações entre Databases

```
ZETTELKASTEN ──────────── ORIGEM ──────────▶ MINHA ESTEIRA
     │                                              │
     │                                         [cada produto]
     │                                              │
     │         ┌───────────────────────────────────┤
     │         │                                   │
     ▼         ▼                                   ▼
DB CONTEÚDO ◀──── orgânico         sub-databases de LANÇAMENTO
(Hermes / Ares)                         (Ares — cronograma dia a dia)
     │
     ▼
AGENDA (view calendário do DB Conteúdo)
     
TAREFAS ◀──── vínculo ──▶ MINHA ESTEIRA (produto vinculado)
(Zeus / Ares)

PORTAIS ◀──── entrega ──▶ MINHA ESTEIRA (portal do produto entregue)
(Ares)
```

**Relações diretas:**
- Zettelkasten → MINHA ESTEIRA: produto tem ORIGEM nas notas que o fundamentam
- Zettelkasten → DB Conteúdo: notas com `Destino: Conteúdo` viram peças no DB Conteúdo
- MINHA ESTEIRA → DB Conteúdo: conteúdo orgânico promove o produto ativo
- MINHA ESTEIRA → Tarefas: tarefas são vinculadas ao produto (`Produto` relation)
- MINHA ESTEIRA → PORTAIS: cada produto tem seu portal de entrega
- Tesouro dos Erros → MINHA ESTEIRA: erros são vinculados ao produto onde ocorreram

---

## 7. Quem Escreve Onde — Tabela de Permissões

| Database | Zeus | Apolo | Atena | Hermes | Ares | Hefesto |
|---|---|---|---|---|---|---|
| **MINHA ESTEIRA** | lê | — | — | lê | ✍️ | — |
| **PORTAIS** | lê | — | — | — | ✍️ | — |
| **DB Conteúdo** | lê | — | — | ✍️ | ✍️ | — |
| **Tarefas** | ✍️ | — | — | — | ✍️ | — |
| **Zettelkasten** | ✍️ | — | — | — | — | — |
| **Sub-databases de lançamento** | — | — | — | — | ✍️ | — |
| **Criativos (dentro do produto)** | — | — | — | ✍️ | ✍️ | — |

---

## 8. Protocolo de Verificação de Workspace

Antes de qualquer escrita no Notion, confirmar o workspace e os IDs corretos:

```
SE usuário disse "Modo CM" ou "Lucas Grigo":
  → Usar IDs fixos da Seção 2B
  → MINHA ESTEIRA: 25cfc122-de3b-8131-9284-000b78f0406d
  → PORTAIS: 254fc122-de3b-80de-bffd-000b2629d678
  → DB Conteúdo: 25cfc122-de3b-81c2-a76a-000bcf8453f4
  → Tarefas: 00cfc122-de3b-83a0-ad2a-87e3bd2d78ed
  → Zettelkasten: 6e4c8442-1596-4eab-ab69-a7917e93e046

SENÃO (padrão — Modo Cliente):
  → Ler do Memory: NOTION_ESTEIRA e NOTION_PORTAIS
  → Se não estiver no Memory → executar Workspace Discovery (Seção 2)
  → DB Conteúdo: não existe no workspace Cliente
  → Tarefas: não existe no workspace Cliente
  → Zettelkasten: não existe no workspace Cliente
```

**Confirmação por search (quando houver dúvida no Modo CM):**
```
notion-search: query="MINHA ESTEIRA", filter=database
→ verificar que o resultado pertence ao workspace Lucas (245fc122)
→ se resultado errado → PARAR e alertar: "Confirme o workspace antes de prosseguir"
```

---

## 9. Regras de Operação

1. **IDs de cliente NUNCA são hardcoded** — cada cliente tem IDs únicos gerados pela duplicação do workspace; usar sempre os IDs do Memory (descobertos via Workspace Discovery)
2. **Nunca hardcode IDs de sub-databases** — os IDs das sub-databases de lançamento são dinâmicos por produto; sempre ler do produto específico via notion-fetch
3. **Uma linha por dia** em cronogramas de lançamento — nunca agrupar
4. **Conteúdo de campanha NUNCA vai no DB Conteúdo** — vai nas sub-databases dentro do produto na MINHA ESTEIRA
5. **Arquivamento, não deleção** — campanhas encerradas: marcar `Arquivado = true` no produto; o histórico é preservado
6. **Workspace Discovery na primeira sessão** — se `NOTION_SETUP` não estiver no Memory, executar o protocolo da Seção 2 antes de qualquer escrita

---

*NOTION-ARQUITETURA v1.1 — Maio 2026*
*v1.1: Corrigido problema de IDs dinâmicos por cliente — descoberta automática via API substituiu hardcode do workspace cliente.*
*Referência para todos os agentes do Olimpo. Atualizar sempre que houver mudança estrutural nos databases.*

---
name: esteira-notion
description: Usar quando o usuário pedir "popula o Notion", "MINHA ESTEIRA", "cria as tarefas no Notion", "joga a campanha no Notion", "atualiza o Notion", ou qualquer operação de escrita e população de campanhas no banco de dados Notion.
version: 1.2
layer: Camada 4 — Lançamento (operacional)
role: Protocolo de escrita e população do banco de dados MINHA ESTEIRA no Notion com campanhas completas
inputs: produto (nome), modalidade de lançamento, cronograma gerado pelo Mapa de Campanha, data de início
outputs: sub-database de lançamento populada no Notion com uma linha por dia + copy completo no corpo de cada página
feeds-into: Portal da Escala (métricas e resultado da campanha)
---

# Esteira Notion — Protocolo de Integração com MINHA ESTEIRA

A Esteira Notion não cria campanhas. Executa a operação de escrita no banco de dados — transformando o cronograma gerado pelo Mapa de Campanha em registros acionáveis dentro do Notion, prontos para execução dia a dia.

---

## GATEKEEPING — Pré-Requisitos

Antes de popular o Notion, verificar no **Dossiê CM** (`05-ASSETS/dossies/[projeto].md`):

| Pré-requisito | Seção do Dossiê | Se não existir |
|---------------|-----------------|----------------|
| Campanha planejada | §3 > Campanha | 🔴 **Crítico.** A Esteira executa — não planeja. Sem cronograma do Mapa de Campanha, não há o que popular. Redirecionar para Mapa de Campanha primeiro. |
| Oferta definida | §3 > Oferta | ⚠️ Sem oferta, as tarefas de campanha ficam sem contexto de produto. Alertar e sugerir. |

**Exceção:** se o usuário quer popular uma pauta semanal (não campanha), a Esteira pode operar com lista de tarefas informadas diretamente.

**Ao concluir:** registrar no §5 do Dossiê (Operação — Esteira Notion populada + período coberto).

---

## Arquitetura do Notion (Chave Mestra)

```
MINHA ESTEIRA (database principal — campo "Arquivado" checkbox para campanhas encerradas)
├── Vista "Ativos" (gallery — filtra Arquivado = false) ← vista padrão
├── Vista "Arquivo" (table — filtra Arquivado = true)
└── [Produto X] (página do produto)
    ├── 🗒️ Meus Criativos (toggle)
    ├── 📚 Módulos / Aulas (toggle)
    │   └── [DB inline: Nome da Aula, Módulo, Tipo, Duração, Status, Plataforma, Link, Script]
    ├── 📣 Lançamentos (toggle)
    │   ├── Lançamento Meteórico (toggle)
    │   │   └── [cronograma: linhas = dias da campanha + copy completo]
    │   ├── Lançamento Desafio (toggle)
    │   │   ├── Desafio 7d  → [cronograma]
    │   │   ├── Desafio 14d → [cronograma]
    │   │   └── Desafio 21d → [cronograma]
    │   ├── Lançamento Interno (toggle)
    │   │   └── [cronograma]
    │   ├── ⚡ Forja de Caixa — Relâmpago (toggle)
    │   │   └── [cronograma: 4 momentos em 48h]
    │   ├── 🌱 Forja de Caixa — Semente (toggle)
    │   │   └── [cronograma: 7 dias + pitch]
    │   ├── 🔥 Forja de Caixa — Urgência (toggle)
    │   │   └── [cronograma: 3 fases em 72h]
    │   ├── 💎 Forja de Caixa — Luxo (toggle)
    │   │   └── [cronograma: 5 fases em 7–12d]
    │   └── 🎯 Forja de Caixa — Tripwire (toggle)
    │       └── [cronograma: 4 passos perpétuos]
    ├── 📊 Métricas de Vendas (toggle)
    │   └── [DB inline: Lançamento, Data, Modalidade, Leads, Vendas, Faturamento, TX Conv., CAC, Reembolsos, Depoimentos, Retrospectiva]
    ├── 🚀 Onboarding (toggle — checklist compacto)
    └── 💬 Depoimentos (toggle)
```

**Conteúdo de campanha vai DENTRO dos cronogramas de cada produto** — texto, imagem, data, tudo dentro da linha do dia correspondente. A database separada "Conteúdo" é exclusivamente para conteúdo orgânico (campo `Origem`: Orgânico). Peças de apoio da Forja de Caixa (stories de manifesto, scripts WPP) podem ir na database Conteúdo com `Origem: Forja de Caixa`, mas o **cronograma operacional da campanha** vai DENTRO do produto na MINHA ESTEIRA.

### Schema dos Cronogramas de Lançamento (todos os tipos)

Todos os cronogramas (Meteórico, Interno, Desafio 7d/14d/21d, e os 5 modos Forja de Caixa) compartilham o mesmo schema base:

| Campo | Tipo | Valores |
|---|---|---|
| `Nome da Tarefa` | title | Texto livre — ex: "Dia 1 — Revelação" |
| `Fase do Lançamento` | select | Pré-pré-lançamento / Pré-lançamento / Lançamento / Pós-lançamento (lançamentos clássicos) ou fases específicas do modo Forja (ver tabela abaixo) |
| `Data` | date | Data real do dia (ISO: YYYY-MM-DD) |
| `Status` | select | A fazer / Em andamento / Concluída / Atrasada |
| `Template de Copy` | text | Resumo curto: canal + gancho + CTA (1–3 linhas) |

Cada linha é também uma **página** com corpo completo onde fica o copy detalhado + imagens + assets do dia.

### Schema das Fases — Forja de Caixa (por modo)

Os cronogramas Forja usam o mesmo campo `Fase do Lançamento` com valores específicos:

| Modo | Fases disponíveis |
|---|---|
| ⚡ Relâmpago | Antecipação / Abertura / Prova Social / Fechamento |
| 🌱 Semente | Captação / Aquecimento / Aula e Pitch / Fechamento |
| 🔥 Urgência | Detonação / Pressão Narrativa / Fechamento de Portão |
| 💎 Luxo | Manifestação / Seleção / Revelação / Conversão Silenciosa / Fechamento Natural |
| 🎯 Tripwire | Setup / Isca / Tripwire / Order Bump / Nurture |

### Schema — Módulos / Aulas

Database inline embutida na página de cada produto. `collection://8893569c-0db5-4aba-a0f7-4d5e224326d5` (template — ID muda por produto).

| Campo | Tipo | Valores |
|---|---|---|
| `Nome da Aula` | title | Texto livre |
| `Módulo` | text | Ex: "Módulo 1 — Fundação" |
| `Tipo` | select | Aula gravada / Live / PDF & Material / Workshop / Bônus |
| `Duração` | text | Ex: "18min" |
| `Status` | select | Rascunho / Em produção / Gravado / Editado / Publicado |
| `Plataforma` | select | Hotmart / Kiwify / Cakto / Drive / YouTube / Notion |
| `Link` | url | Link direto da aula na plataforma |
| `Script / Roteiro` | text | Notas ou link para o roteiro |

### Schema — Métricas de Vendas

Database inline embutida na página de cada produto. `collection://3fd25d4d-0e7b-4215-8fc6-dead4c8c5583` (template — ID muda por produto).

| Campo | Tipo | Valores |
|---|---|---|
| `Lançamento` | title | Ex: "Meteórico Jun/2026" |
| `Data` | date | Data de abertura do carrinho |
| `Modalidade` | select | Meteórico / Desafio 7d / Desafio 14d / Desafio 21d / Interno / Relâmpago / Semente / Urgência / Luxo / Tripwire |
| `Leads Alcançados` | number | Total na lista/grupo antes do carrinho |
| `Vendas` | number | Unidades vendidas |
| `Faturamento (R$)` | number | Receita bruta |
| `TX Conversão` | text | Ex: "3,2%" (calculado manualmente) |
| `CAC (R$)` | number | Custo de aquisição por cliente |
| `Reembolsos` | number | Quantidade de reembolsos |
| `Depoimentos` | number | Depoimentos coletados pós-entrega |
| `Retrospectiva` | text | O que funcionou, o que não funcionou, próximo movimento |

### Schema — MINHA ESTEIRA (database principal)

Propriedades da database `collection://25cfc122-de3b-8131-9284-000b78f0406d`:

| Campo | Tipo | Notas |
|---|---|---|
| `NOME DO PRODUTO` | title | Nome do produto |
| `STATUS` | select | Rascunho / Em construção / Ativo / Pausado / Arquivado |
| `CHECKOUT` | url | Link do checkout (Cakto / Hotmart / Kiwify) |
| `UPSELL` | text | Produto de upsell sugerido |
| `DOWNSELL` | text | Produto de downsell |
| `CROSS-SELL` | text | Produto de cross-sell |
| `DATA DE LANÇAMENTO` | date | Data do primeiro lançamento |
| `PREÇO ESCOLHIDO` | select | Faixas de preço |
| `IMAGEM DO PRODUTO` | file | Capa / arte do produto |
| `ARQUIVADO` | checkbox | true → sai da vista Ativos |
| `DESCRIÇÃO` | text | Descrição interna |
| `MECANISMO ÚNICO` | text | O mecanismo diferenciador da oferta |
| `PROMESSA` | text | Promessa principal (headline da oferta) |
| `INIMIGO` | text | O vilão / obstáculo que o produto elimina |
| `N-LEVEL` | select | Nível de consciência do público: N1–N2 / N2–N3 / N3–N4 / N4–N5 |
| `OBJEÇÕES` | text | Objeções mais comuns (campo de campo) |
| `PROVAS` | text | Provas disponíveis (depoimentos, casos, dados) |

**Nota:** MECANISMO ÚNICO, PROMESSA, INIMIGO, N-LEVEL, OBJEÇÕES e PROVAS substituem o antigo brief de oferta que ficava no corpo da página. Todo posicionamento do produto fica nas propriedades — a página é o espaço de trabalho.

### Arquivamento de Campanhas

Após encerrar uma campanha:
1. Marcar `Arquivado = true` no produto da MINHA ESTEIRA
2. O produto sai da vista "Ativos" e aparece na vista "Arquivo"
3. Todo o contexto (cronogramas, copy, criativos, depoimentos) é preservado intacto
4. Registrar resultado no Tesouro dos Erros + Forja do Conhecimento

---

## Protocolo de Execução — 5 Etapas

### Etapa 1 — Localizar o Produto

```
Usar: notion-search com query = "[nome do produto]"
Alternativa: notion-search com query = "MINHA ESTEIRA" → listar itens do data source
```

Se o produto ainda não existe: criar nova entrada na MINHA ESTEIRA usando o template padrão antes de continuar.

### Etapa 2 — Abrir a Página do Produto

Usar `notion-fetch` na URL do produto para ler a estrutura interna e localizar as URLs das sub-databases embutidas na seção "Lançamento".

A página retornará as databases embutidas no formato:
```
<database url="..." data-source-url="collection://[collection-id]">
```

Identificar qual das sub-databases é a modalidade correta (Meteórico / Desafio 7d/14d/21d / Interno / Forja Relâmpago / Forja Semente / Forja Urgência / Forja Luxo / Forja Tripwire) pelo contexto da seção.

### Etapa 3 — Mapear o data-source-id

O `data-source-url` (formato `collection://[ID]`) é o parâmetro `parent.data_source_id` para criar páginas (tarefas) dentro dessa sub-database.

**Atenção:** cada produto criado a partir da template tem seu próprio conjunto de IDs. **Nunca hardcode — sempre ler do produto específico.**

### Etapa 4 — Criar as Linhas (Uma por Dia)

Para cada dia da campanha, criar uma página no cronograma:

```json
parent: { "data_source_id": "[collection-id-do-cronograma]" }
properties: {
  "Nome da Tarefa": "Dia X — [Nome da ação]",
  "Fase do Lançamento": "[fase correta]",
  "date:Data:start": "YYYY-MM-DD",
  "date:Data:is_datetime": 0,
  "Status": "A fazer",
  "Template de Copy": "[resumo 1-3 linhas: canal + gancho + CTA]"
}
content: "[copy completo do dia em Notion Markdown]"
```

### Etapa 5 — Escrever o Copy no Corpo de Cada Página

Corpo de cada tarefa em Notion Markdown:

```markdown
## Objetivo do Dia
[1–2 frases sobre o que este dia precisa fazer narrativamente]

## Canal(es)
[WhatsApp / Instagram Feed / Stories / Email / TikTok / YouTube]

## Copy Completo

### [Tipo da peça — ex: Mensagem WhatsApp]
[texto completo pronto para enviar/publicar]

### [Segunda peça do dia, se houver]
[texto completo]

## Métrica de Acompanhamento
[o que medir neste dia: respostas / cliques / conversões]
```

---

## Mapeamento de Fases para o Campo `Fase do Lançamento`

### Lançamentos Clássicos

| Modalidade | Fase | Dias típicos |
|---|---|---|
| Meteórico | Pré-lançamento | D-2 e D-1 — Convite ao Caldeirão |
| Meteórico | Lançamento | Dias 1–3 Aquecimento + Dia D Abertura/Fechamento |
| Meteórico | Pós-lançamento | Lista de espera + próximo ciclo |
| Desafio | Pré-pré-lançamento | Construção de curiosidade |
| Desafio | Pré-lançamento | Dias do desafio antes do carrinho |
| Desafio | Lançamento | Dias de carrinho aberto |
| Interno | Pré-pré-lançamento | CPL / série educativa |
| Interno | Pré-lançamento | Aquecimento de lista |
| Interno | Lançamento | Carrinho aberto |
| Interno | Pós-lançamento | Entrega + upsell |

### Forja de Caixa

| Modo | Fase | Momento típico |
|---|---|---|
| ⚡ Relâmpago | Antecipação | D-1 tarde |
| ⚡ Relâmpago | Abertura | D0 manhã |
| ⚡ Relâmpago | Prova Social | D0 tarde |
| ⚡ Relâmpago | Fechamento | D0 noite |
| 🌱 Semente | Captação | Dias 1–3 |
| 🌱 Semente | Aquecimento | Dias 4–5 |
| 🌱 Semente | Aula e Pitch | Dia 6 |
| 🌱 Semente | Fechamento | Dia 7 |
| 🔥 Urgência | Detonação | H0–6 |
| 🔥 Urgência | Pressão Narrativa | H6–48 |
| 🔥 Urgência | Fechamento de Portão | H48–72 |
| 💎 Luxo | Manifestação | D-7 a D-3 |
| 💎 Luxo | Seleção | D-3 a D-1 |
| 💎 Luxo | Revelação | D0 |
| 💎 Luxo | Conversão Silenciosa | D1–3 |
| 💎 Luxo | Fechamento Natural | D4–5 |
| 🎯 Tripwire | Setup | Configuração inicial |
| 🎯 Tripwire | Isca | Entrega gratuita |
| 🎯 Tripwire | Tripwire | Oferta de impulso |
| 🎯 Tripwire | Order Bump | Checkout |
| 🎯 Tripwire | Nurture | Email nurture → oferta principal |

---

## Regras de Execução

1. **Nunca hardcode IDs** — sempre ler data-source-id dinamicamente do produto específico
2. **Uma linha por dia** — não agrupar dias em uma única tarefa
3. **Copy completo no corpo** — o campo `Template de Copy` é só o resumo; o texto completo vai no corpo
4. **Datas reais** — usar a data real do dia, não "Dia 1", "Dia 2" — o campo `data` permite visualização em calendário
5. **Criar na ordem** — criar as linhas em sequência cronológica para preservar a lógica narrativa
6. **Verificar schema** — antes de criar a primeira linha, confirmar os campos disponíveis na sub-database usando `notion-fetch` no data-source-id

---

## Fluxo Completo — Uso Coordenado com Mapa de Campanha

```
1. Mapa de Campanha gera: modalidade + cronograma + copy por dia
2. Esteira Notion executa:
   a. Busca o produto na MINHA ESTEIRA
   b. Abre a página e localiza os cronogramas de lançamento
   c. Identifica o data-source-id da modalidade correta
   d. Cria uma linha por dia com copy completo + assets no corpo
3. Portal da Escala monitora: métricas por fase + diagnóstico de resultado
4. Pós-campanha: marcar Arquivado = true no produto + registrar no Tesouro dos Erros
```

**Importante:** Conteúdo de campanha NUNCA vai na database Conteúdo. Vai DENTRO do cronograma do produto na MINHA ESTEIRA. A database Conteúdo é exclusivamente para:
- Conteúdo orgânico (Origem: Orgânico)
- Peças de apoio do Forja de Caixa (Origem: Forja de Caixa)

---

## Tratamento de Erros Comuns

| Erro | Causa | Solução |
|---|---|---|
| data-source-id não encontrado | Produto criado sem template padrão | Criar produto novo a partir da template antes de popular |
| Campo não reconhecido | Schema diferente do padrão | Usar `notion-fetch` no data-source-id para ver schema atual antes de criar |
| Produto não encontrado | Nome diferente do esperado | Buscar com variações do nome ou listar todos os itens da MINHA ESTEIRA |

---

## Separação de Databases — Campanha vs. Orgânico

| Tipo de conteúdo | Destino | Campo |
|---|---|---|
| Cronograma de lançamento (Meteórico, Desafio, Interno) | Cronograma dentro do produto na MINHA ESTEIRA | N/A — é o próprio cronograma |
| Cronograma Forja de Caixa (Relâmpago, Semente, Urgência, Luxo, Tripwire) | Cronograma Forja correspondente dentro do produto na MINHA ESTEIRA | N/A — é o próprio cronograma |
| Conteúdo orgânico (posts, reels, carrosséis regulares) | Database Conteúdo | Origem: Orgânico |
| Scripts WPP/DM de apoio da Forja (não o cronograma) | Database Conteúdo | Origem: Forja de Caixa, Tipo: Copy WPP |

---

## Referências Cruzadas

- `notion-integracao.md` — protocolo técnico completo com exemplos de calls reais
- `modalidades.md` — estrutura de cada campanha que alimenta os dias
- `mapa-de-campanha.md` — gera o cronograma que esta skill executa
- `forja-de-caixa/SKILL.md` — campanhas intensivas (peças orgânicas vão na database Conteúdo)
- `portal-da-escala.md` — recebe os resultados registrados na MINHA ESTEIRA

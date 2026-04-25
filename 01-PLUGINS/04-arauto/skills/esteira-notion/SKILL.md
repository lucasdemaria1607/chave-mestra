---
name: esteira-notion
description: Usar quando o usuário pedir "popula o Notion", "MINHA ESTEIRA", "cria as tarefas no Notion", "joga a campanha no Notion", "atualiza o Notion", ou qualquer operação de escrita e população de campanhas no banco de dados Notion.
version: 1.0
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
    ├── Checklist de Criação (toggle)
    ├── Lançamento (toggle)
    │   ├── Lançamento Meteórico (toggle)
    │   │   └── [cronograma: linhas = dias da campanha + copy completo]
    │   ├── Lançamento Interno (toggle)
    │   │   └── [cronograma: linhas = dias da campanha + copy completo]
    │   ├── Lançamento Desafio 7d (toggle)
    │   │   └── [cronograma: linhas = dias da campanha + copy completo]
    │   ├── Lançamento Desafio 14d (toggle)
    │   │   └── [cronograma: linhas = dias da campanha + copy completo]
    │   └── Lançamento Desafio 21d (toggle)
    │       └── [cronograma: linhas = dias da campanha + copy completo]
    ├── Meus Criativos (toggle)
    └── Depoimentos (toggle)
```

**Conteúdo de campanha vai DENTRO dos cronogramas de cada produto** — texto, imagem, data, tudo dentro da linha do dia correspondente. A database separada "Conteúdo" é exclusivamente para conteúdo orgânico e Protocolo Massivo (campo `Origem`: Orgânico / Protocolo Massivo).

### Schema dos Cronogramas de Lançamento (todos os tipos)

Todos os cronogramas (Meteórico, Interno, Desafio 7d/14d/21d) compartilham o mesmo schema base:

| Campo | Tipo | Valores |
|---|---|---|
| `Nome da Tarefa` | title | Texto livre — ex: "Dia 1 — Revelação" |
| `Fase do Lançamento` | select | Pré-pré-lançamento / Pré-lançamento / Lançamento / Pós-lançamento |
| `Data` | date | Data real do dia (ISO: YYYY-MM-DD) |
| `Status` | select | A fazer / Em andamento / Concluída / Atrasada |
| `Template de Copy` | text | Resumo curto: canal + gancho + CTA (1–3 linhas) |

Cada linha é também uma **página** com corpo completo onde fica o copy detalhado + imagens + assets do dia.

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

Identificar qual das três sub-databases é a modalidade correta (Meteórico / Interno / Desafio) pelo contexto da seção.

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

| Modalidade | Fase | Dias típicos |
|---|---|---|
| Meteórico | Pré-lançamento | Dias antes da abertura de carrinho |
| Meteórico | Lançamento | Dias de carrinho aberto |
| Meteórico | Pós-lançamento | Fechamento + lista de espera |
| Desafio | Pré-pré-lançamento | Construção de curiosidade |
| Desafio | Pré-lançamento | Dias do desafio antes do carrinho |
| Desafio | Lançamento | Dias de carrinho aberto |
| Interno | Pré-pré-lançamento | CPL / série educativa |
| Interno | Pré-lançamento | Aquecimento de lista |
| Interno | Lançamento | Carrinho aberto |
| Interno | Pós-lançamento | Entrega + upsell |

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
- Peças de apoio do Protocolo Massivo (Origem: Protocolo Massivo)

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
| Conteúdo de lançamento (Meteórico, Desafio, Interno) | Cronograma dentro do produto na MINHA ESTEIRA | N/A — é o próprio cronograma |
| Conteúdo orgânico (posts, reels, carrosséis regulares) | Database Conteúdo | Origem: Orgânico |
| Peças de apoio Protocolo Massivo (manifestos, stories) | Database Conteúdo | Origem: Protocolo Massivo |

---

## Referências Cruzadas

- `notion-integracao.md` — protocolo técnico completo com exemplos de calls reais
- `modalidades.md` — estrutura de cada campanha que alimenta os dias
- `mapa-de-campanha.md` — gera o cronograma que esta skill executa
- `protocolo-massivo/SKILL.md` — campanhas intensivas (peças orgânicas vão na database Conteúdo)
- `portal-da-escala.md` — recebe os resultados registrados na MINHA ESTEIRA

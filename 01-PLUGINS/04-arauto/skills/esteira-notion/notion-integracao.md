# Integração Notion — Protocolo de Escrita de Campanhas na MINHA ESTEIRA

## ARQUITETURA DO NOTION (Chave Mestra)

```
MINHA ESTEIRA (database principal — campo "Arquivado" checkbox)
├── Vista "Ativos" (gallery — filtra Arquivado = false) ← padrão
├── Vista "Arquivo" (table — filtra Arquivado = true)
└── [Produto X] (página do produto)
    ├── Checklist de Criação (toggle)
    ├── Lançamento (toggle)
    │   ├── Lançamento Meteórico (toggle)
    │   │   └── [cronograma: linhas = dias da campanha + copy + assets]
    │   ├── Lançamento Interno (toggle)
    │   │   └── [cronograma: linhas = dias da campanha + copy + assets]
    │   ├── Lançamento Desafio 7d (toggle)
    │   │   └── [cronograma: linhas = dias da campanha + copy + assets]
    │   ├── Lançamento Desafio 14d (toggle)
    │   │   └── [cronograma: linhas = dias da campanha + copy + assets]
    │   └── Lançamento Desafio 21d (toggle)
    │       └── [cronograma: linhas = dias da campanha + copy + assets]
    ├── Meus Criativos (toggle)
    └── Depoimentos (toggle)
```

**Conteúdo de campanha vai DENTRO dos cronogramas**, não na database Conteúdo. A database Conteúdo serve apenas para conteúdo orgânico (Origem: Orgânico) e peças de apoio do Protocolo Massivo (Origem: Protocolo Massivo).

Todos os cronogramas compartilham o mesmo schema base:

| Campo | Tipo | Valores possíveis |
|---|---|---|
| `Nome da Tarefa` | title | Texto livre — ex: "Dia 1 — Revelação" |
| `Fase do Lançamento` | select | Pré-pré-lançamento / Pré-lançamento / Lançamento / Pós-lançamento |
| `Data` | date | Data real do dia (ISO: YYYY-MM-DD) |
| `Status` | select | A fazer / Em andamento / Concluída / Atrasada |
| `Template de Copy` | text | Resumo curto da peça (canal + gancho + CTA) |

Cada linha (tarefa) é também uma **página** com corpo completo onde fica o copy detalhado + imagens + assets.

---

## PROTOCOLO DE EXECUÇÃO

### Etapa 1 — Localizar o Produto

```
Busca: notion-search com query = "[nome do produto]"
Alternativa: notion-search com query = "MINHA ESTEIRA" → listar itens do data source
```

Se o produto ainda não existe: criar nova entrada na MINHA ESTEIRA usando o template padrão.

### Etapa 2 — Abrir a Página do Produto

Usar `notion-fetch` na URL do produto para ler a estrutura interna e localizar as URLs das sub-databases embutidas na seção "Lançamento".

A página vai retornar as databases embutidas com suas URLs no formato:
```
<database url="{{https://www.notion.so/[ID]}}" data-source-url="{{collection://[collection-id]}}">
```

Identificar qual das três é a modalidade correta (Meteórico / Interno / Desafio) pelo contexto da seção onde está aninhada.

### Etapa 3 — Mapear o data-source-id da Sub-Database

O `data-source-url` (formato `collection://[ID]`) é o que você vai usar como `parent.data_source_id` para criar páginas (tarefas) dentro dessa sub-database.

Exemplo real do Meteórico na template:
```
collection://25cfc122-de3b-81cc-99cd-000b4cfc2775
```
**Atenção:** Cada produto criado a partir da template tem seu próprio conjunto de IDs. Nunca hardcode — sempre leia do produto específico.

### Etapa 4 — Criar as Linhas (Uma por Dia)

Para cada dia da campanha, criar uma página na sub-database com:

```json
parent: { "data_source_id": "[collection-id-da-sub-database]" }
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

O corpo de cada tarefa deve conter, em Notion Markdown:

```markdown
## Objetivo do Dia
[1-2 frases sobre o que este dia precisa fazer narrativamente]

## Canal(es)
[WhatsApp / Instagram Feed / Stories / Email / TikTok / YouTube]

## Copy Completo

### [Tipo da peça — ex: Mensagem WhatsApp]
[texto completo pronto para enviar/publicar]

### [Segunda peça do dia, se houver]
[texto completo]

## CTA do Dia
[A ação exata que o lead deve tomar hoje]

## Notas de Execução
[Timing, hora de envio, observações técnicas]
```

---

## CRIAÇÃO DE PRODUTO NOVO (se não existir na Esteira)

Se o produto ainda não tem entrada na MINHA ESTEIRA:

1. Criar nova página na MINHA ESTEIRA com o template padrão:
   - `data_source_id`: `25cfc122-de3b-8131-9284-000b78f0406d`
   - `template_id`: `25cfc122-de3b-816f-bf7d-e3c9eaf07089`
   - `properties`: Nome do Produto, Preço Escolhido, Data de Lançamento, Status = "Rascunho"

2. **Aguardar** — o template é aplicado de forma assíncrona. Informar ao usuário que a estrutura vai aparecer em instantes.

3. Após confirmação do usuário, continuar com o protocolo (Etapas 1–5 acima).

---

## MAPEAMENTO DE FASES POR MODALIDADE

### Meteórico (3–7 dias)

| Dia(s) | Fase Notion |
|---|---|
| Dias antes da abertura | Pré-lançamento |
| Dia de abertura do carrinho | Lançamento |
| Dias de fechamento | Lançamento |
| Mensagem de encerramento | Pós-lançamento |

### Desafio (7–21 dias)

| Fase | Fase Notion |
|---|---|
| Convite / aquecimento (2d antes) | Pré-pré-lançamento |
| Dias de desafio (conteúdo diário) | Pré-lançamento |
| Abertura e fechamento do carrinho | Lançamento |
| Boas-vindas / lista de espera | Pós-lançamento |

### Lançamento Interno (4–8 semanas)

| Semana | Fase Notion |
|---|---|
| Semana 1 — antecipação | Pré-pré-lançamento |
| Semana 2 — aquecimento profundo | Pré-pré-lançamento |
| Semana 3 — CPL (aulas gratuitas) | Pré-lançamento |
| Semana 4 — carrinho aberto | Lançamento |
| Semana 5 — pós (onboarding/downgrade) | Pós-lançamento |

---

## CHECKLIST DE EXECUÇÃO NOTION

Antes de confirmar que o lançamento foi escrito:

- [ ] Produto localizado ou criado na MINHA ESTEIRA
- [ ] Sub-database da modalidade correta identificada (não misturar Meteórico com Interno)
- [ ] data-source-id da sub-database correto (lido do produto, não hardcoded)
- [ ] Uma linha criada por cada dia da campanha
- [ ] Nome da Tarefa segue o padrão "Dia X — [Nome da ação]"
- [ ] Fase do Lançamento correta para cada dia (conforme mapeamento acima)
- [ ] Data real preenchida (calcular a partir da data de início informada)
- [ ] Template de Copy preenchido (resumo curto, não vazio)
- [ ] Corpo de cada página contém o copy completo e o CTA
- [ ] Status de todas as tarefas = "A fazer"
- [ ] Informar ao usuário o link para o produto no Notion após concluir

---

## ATUALIZAÇÃO DE CAMPANHA EXISTENTE

Se o usuário quer atualizar um lançamento já criado (ex: refinar copy, mudar data):

1. Buscar a página da tarefa específica: `notion-search` com query = "[nome da tarefa]"
2. Usar `notion-update-page` com comando `update_properties` para alterar campos da tabela
3. Usar `notion-update-page` com comando `replace_content_range` para alterar copy no corpo

Nunca criar linhas duplicadas — verificar sempre se a tarefa já existe antes de criar.

---

## ADICIONANDO CRIATIVOS (Seção "Meus Criativos")

Após gerar scripts de vídeo (Chavideo) ou carrosséis (Chavossel) para o lançamento:

1. Abrir a página do produto
2. Localizar a seção "Meus Criativos" (toggle)
3. Usar `notion-update-page` com `insert_content_after` para adicionar as peças
4. Formato sugerido por criativo:

```markdown
### [Título do criativo] — [Canal] — [Dia do lançamento]
**Tipo:** Reel / Carrossel / Story
**Objetivo:** [o que essa peça faz na campanha]

[copy/roteiro completo]
```

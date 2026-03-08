---
name: esteira-notion
version: 1.0
layer: Camada 4 — Lançamento (operacional)
role: Protocolo de escrita e população do banco de dados MINHA ESTEIRA no Notion com campanhas completas
inputs: produto (nome), modalidade de lançamento, cronograma gerado pelo Mapa de Campanha, data de início
outputs: sub-database de lançamento populada no Notion com uma linha por dia + copy completo no corpo de cada página
feeds-into: Portal da Escala (métricas e resultado da campanha)
---

## ⚙️ Identidade do Usuário — Antes de Qualquer Output

Antes de gerar qualquer conteúdo, verifique se os dados abaixo foram fornecidos na sessão. Se não foram, pergunte:

1. **Nome / marca:**
2. **Produtos** (nome + tipo de cada um):
3. **Como chama sua audiência:**
4. **Tom de voz** — 3 adjetivos + 1 frase que nunca diria:
5. **Nicho e posicionamento** em uma frase:

> **Regra inviolável de output:** todo conteúdo gerado usa exclusivamente o nome, marca, produtos, linguagem e tom de voz do usuário. Nada externo ao negócio do usuário aparece no que é entregue. Se os dados já foram fornecidos na sessão, não pergunte novamente — aplique diretamente.

---

# Esteira Notion — Protocolo de Integração com MINHA ESTEIRA

A Esteira Notion não cria campanhas. Executa a operação de escrita no banco de dados — transformando o cronograma gerado pelo Mapa de Campanha em registros acionáveis dentro do Notion, prontos para execução dia a dia.

---

## Arquitetura do Notion (Chave Mestra)

```
MINHA ESTEIRA (database principal)
└── [Produto X] (página do produto)
    ├── Checklist de Criação (toggle)
    ├── Lançamento (toggle)
    │   ├── Lançamento Meteórico (toggle)
    │   │   └── [sub-database: linhas = dias da campanha]
    │   ├── Lançamento Interno (toggle)
    │   │   └── [sub-database: linhas = dias da campanha]
    │   └── Lançamento Desafio (toggle)
    │       └── [sub-database: linhas = dias da campanha]
    ├── Meus Criativos (toggle)
    └── Depoimentos (toggle)
```

### Schema da Sub-Database de Lançamento

| Campo | Tipo | Valores |
|---|---|---|
| `Nome da Tarefa` | title | Texto livre — ex: "Dia 1 — Revelação" |
| `Fase do Lançamento` | select | Pré-pré-lançamento / Pré-lançamento / Lançamento / Pós-lançamento |
| `data` | date | Data real do dia (ISO: YYYY-MM-DD) |
| `Status da Tarefa` | select | A fazer / Em andamento / Concluída / Atrasada |
| `Template de Copy` | text | Resumo curto: canal + gancho + CTA (1–3 linhas) |

Cada linha é também uma **página** com corpo completo onde fica o copy detalhado.

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

Para cada dia da campanha, criar uma página na sub-database:

```json
parent: { "data_source_id": "[collection-id-da-sub-database]" }
properties: {
  "Nome da Tarefa": "Dia X — [Nome da ação]",
  "Fase do Lançamento": "[fase correta]",
  "date:data:start": "YYYY-MM-DD",
  "date:data:is_datetime": 0,
  "Status da Tarefa": "A fazer",
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
   b. Abre a página e localiza as sub-databases de lançamento
   c. Identifica o data-source-id da modalidade correta
   d. Cria uma linha por dia com copy completo no corpo
3. Portal da Escala monitora: métricas por fase + diagnóstico de resultado
```

---

## Tratamento de Erros Comuns

| Erro | Causa | Solução |
|---|---|---|
| data-source-id não encontrado | Produto criado sem template padrão | Criar produto novo a partir da template antes de popular |
| Campo não reconhecido | Schema diferente do padrão | Usar `notion-fetch` no data-source-id para ver schema atual antes de criar |
| Produto não encontrado | Nome diferente do esperado | Buscar com variações do nome ou listar todos os itens da MINHA ESTEIRA |

---

## Referências Cruzadas

- `notion-integracao.md` — protocolo técnico completo com exemplos de calls reais
- `modalidades.md` — estrutura de cada campanha que alimenta os dias
- `mapa-de-campanha.md` — gera o cronograma que esta skill executa
- `portal-da-escala.md` — recebe os resultados registrados na MINHA ESTEIRA

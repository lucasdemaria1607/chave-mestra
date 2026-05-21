# Esteira de Campanha — Arquitetura e Formato de Cronogramas

Ares não opera o Notion diretamente. Esta skill define a arquitetura da MINHA ESTEIRA e o formato de output dos cronogramas — prontos para o especialista implementar no próprio Notion.

---

## Arquitetura da MINHA ESTEIRA (Referência para Formatação)

```
MINHA ESTEIRA (database principal)
├── Vista "Ativos" — produtos em andamento (filtro: Arquivado = false)
├── Vista "Arquivo" — campanhas encerradas (filtro: Arquivado = true)
└── [Produto X] — página do produto
    ├── Checklist de Criação
    ├── Lançamento
    │   ├── Lançamento Meteórico → cronograma (1 linha por dia)
    │   ├── Lançamento Interno → cronograma
    │   ├── Lançamento Desafio 7d → cronograma
    │   ├── Lançamento Desafio 14d → cronograma
    │   └── Lançamento Desafio 21d → cronograma
    ├── Meus Criativos
    └── Depoimentos
```

**Regra de destino do conteúdo:**

| Tipo de conteúdo | Destino |
|---|---|
| Conteúdo de lançamento (Meteórico, Desafio, Interno) | Cronograma do produto na MINHA ESTEIRA |
| Conteúdo orgânico (posts, reels, carrosséis regulares) | Database Conteúdo (Origem: Orgânico) |
| Peças de apoio Forja de Caixa (manifestos, stories) | Database Conteúdo (Origem: Forja de Caixa) |

Conteúdo de campanha NUNCA vai na database Conteúdo. Vai DENTRO do cronograma do produto.

---

## Schema dos Cronogramas (todos os tipos)

Todos os cronogramas compartilham o mesmo schema:

| Campo | Tipo | Valores |
|---|---|---|
| `Nome da Tarefa` | Texto | "Dia 1 — Revelação", "Dia 2 — Prova Social" |
| `Fase do Lançamento` | Select | Pré-pré-lançamento / Pré-lançamento / Lançamento / Pós-lançamento |
| `Data` | Data | Data real do dia (YYYY-MM-DD) |
| `Status` | Select | A fazer / Em andamento / Concluída / Atrasada |
| `Template de Copy` | Texto | Resumo 1–3 linhas: canal + gancho + CTA |

Cada linha é também uma **página** com corpo completo onde fica o copy detalhado.

---

## Formato de Output — Tabela de Cronograma

Ares entrega o cronograma formatado em tabela para o especialista implementar:

```
CRONOGRAMA — [PRODUTO] — [MODALIDADE] — [PERÍODO]

| Data | Dia | Fase | Tipo de conteúdo | Headline | Copy principal | CTA | Canal |
|---|---|---|---|---|---|---|---|
| DD/MM | 1 | Pré-lançamento | Mensagem WhatsApp | [gancho] | [copy resumida] | [CTA] | WhatsApp |
| DD/MM | 2 | Pré-lançamento | Story Instagram | [gancho] | [copy resumida] | [CTA] | Instagram |
...
```

**Regras de formato:**
- 1 linha por dia — nunca agrupar
- Status inicial: "A fazer" (especialista atualiza conforme executa)
- Copy completa entregue abaixo da tabela, organizada por dia
- Campanhas encerradas → marcar `Arquivado = true` e registrar no Tesouro dos Erros

---

## Formato de Copy por Dia (abaixo da tabela)

```
DIA 1 — [NOME DA AÇÃO]
Data: DD/MM
Fase: [Pré-lançamento / Lançamento / etc.]
Canal: WhatsApp + Stories

Objetivo do dia: [o que este dia precisa fazer narrativamente]

PEÇA 1 — Mensagem WhatsApp
[texto completo pronto para enviar]

PEÇA 2 — Story Instagram
[texto completo / roteiro]

Métrica de acompanhamento: [respostas / cliques / conversões]

---

DIA 2 — [NOME DA AÇÃO]
...
```

---

## Mapeamento de Fases por Modalidade

| Modalidade | Fase | Dias típicos |
|---|---|---|
| Meteórico | Pré-lançamento | Antes da abertura de carrinho |
| Meteórico | Lançamento | Carrinho aberto |
| Meteórico | Pós-lançamento | Fechamento + lista de espera |
| Desafio | Pré-pré-lançamento | Construção de curiosidade |
| Desafio | Pré-lançamento | Dias do desafio |
| Desafio | Lançamento | Carrinho aberto |
| Interno | Pré-pré-lançamento | CPL / série educativa |
| Interno | Pré-lançamento | Aquecimento de lista |
| Interno | Lançamento | Carrinho aberto |
| Interno | Pós-lançamento | Entrega + upsell |

---

## Regras

1. 1 linha por dia — nunca agrupar dias
2. Copy completa sempre incluída — nunca só o título
3. Datas reais — usar o calendário real, não "Dia 1", "Dia 2"
4. Criar na ordem cronológica — preserva a lógica narrativa
5. Conteúdo de campanha → cronograma do produto; conteúdo orgânico → database Conteúdo
6. Campanhas encerradas: arquivadas, nunca deletadas

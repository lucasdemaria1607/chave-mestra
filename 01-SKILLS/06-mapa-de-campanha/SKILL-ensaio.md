---
name: lancamentos-e-campanhas
description: Sistema completo de planejamento e execução de lançamentos e campanhas digitais do método Chave Mestra, com escrita direta no Notion (MINHA ESTEIRA). Use este skill quando o usuário quiser planejar um lançamento, criar uma campanha, gerar cronograma de lançamento, escolher a modalidade certa (Meteórico, Desafio ou Interno), construir a narrativa de uma campanha, criar sequências de mensagens para WhatsApp, emails ou redes sociais para lançamentos, ou perguntar "qual lançamento devo fazer". TAMBÉM usar quando o usuário pedir para popular o Notion, preencher a tabela de lançamento, criar as tarefas no Notion, ou "escrever o lançamento lá". Também usar quando o usuário mencionar: "campanha", "lançar", "lançamento", "meteórico", "desafio", "carrinho aberto", "lista de espera", "cronograma de lançamento", ou pedir assets de copy para uma campanha específica. Integra-se com Chavideo (vídeos) e Chavossel (carrosséis) para geração de conteúdo dentro de campanhas.
---

# Chave Mestra — Sistema de Lançamentos e Campanhas

Motor de planejamento estratégico e execução de campanhas de conversão. Traduz produto, ticket e momento em cronograma executável — e escreve cada peça diretamente na sub-database correta do produto no Notion (MINHA ESTEIRA).

## Filosofia

Lançamentos não são eventos — são arcos dramáticos. A diferença entre uma campanha que converte e uma que não converte está na **tensão narrativa acumulada** antes do carrinho abrir. Conteúdo orgânico é a fundação. Lançamentos são os picos de intensidade que monetizam a atenção já construída.

---

## Passo 1: Diagnóstico de Modalidade

Antes de gerar qualquer cronograma, colete as seguintes informações (pergunte ao usuário caso não estejam no contexto):

1. **Produto** — o que será vendido? (curso, mentoria, infoproduto, serviço)
2. **Ticket** — qual faixa de preço? (Low: R$47–297 / Mid: R$497–2k / High: R$3k+)
3. **Base** — qual canal principal? (Instagram, WhatsApp lista, email, YouTube)
4. **Tamanho da base** — quantas pessoas tem acesso
5. **Urgência de caixa** — resultado rápido (3–7 dias) ou pode estruturar bem (3–8 semanas)?
6. **Aquecimento** — a audiência já conhece o produto/método? É fria ou quente?
7. **Objetivo secundário** — só vender OU também construir autoridade?
8. **Data de início desejada** — necessário para preencher o campo `data` de cada tarefa no Notion

### Matriz de Decisão

| Situação | Modalidade Recomendada |
|---|---|
| Urgência alta + ticket low/mid + base WhatsApp | **Meteórico** |
| Quer autoridade + ticket mid + tem 1–3 semanas | **Desafio** |
| Ticket alto + audiência morna + quer estrutura completa | **Interno** |
| Base pequena + produto novo + validar ideia | **Meteórico** (validação) |
| Base grande + produto consolidado + maximizar receita | **Interno** |
| Base média + autoridade a construir + mid ticket | **Desafio 14d** |

---

## Passo 2: Seleção de Referências

Após diagnóstico, leia o arquivo de referência correspondente:

- **Meteórico** → `references/modalidades.md` — seção 1
- **Desafio** → `references/modalidades.md` — seção 2
- **Interno** → `references/modalidades.md` — seção 3

Para narrativa e copy de cada fase → `references/copy-campanha.md`

Para protocolo completo de escrita no Notion → `references/notion-integracao.md`

---

## Passo 3: Geração do Plano Completo

Com a modalidade escolhida, gere internamente:

1. **Narrativa mestra** — arco dramático completo (promessa → tensão → mecanismo → oferta)
2. **Cronograma dia-a-dia** — cada dia: nome da tarefa, fase, objetivo, canal, copy completo
3. **Assets de copy por dia** — texto completo pronto para cada peça de cada dia

---

## Passo 4: Escrita no Notion (OBRIGATÓRIO quando usuário quer)

Se o usuário quer popular o Notion com o lançamento, execute o protocolo em `references/notion-integracao.md`:

1. Localizar o produto na MINHA ESTEIRA
2. Navegar até a sub-database da modalidade escolhida dentro da página do produto
3. Criar uma linha por dia da campanha com os campos corretos
4. Escrever o copy completo de cada dia no corpo da página da tarefa

**Campos do Notion por tarefa (linha na sub-database):**

| Campo Notion | O que escrever |
|---|---|
| `Nome da Tarefa` | "Dia X — [Nome da ação]" ex: "Dia 1 — Revelação" |
| `Fase do Lançamento` | Um de: Pré-pré-lançamento / Pré-lançamento / Lançamento / Pós-lançamento |
| `data` | Data real do dia (calcular a partir da data de início) |
| `Status da Tarefa` | Sempre "A fazer" ao criar |
| `Template de Copy` | Resumo da peça (1–3 linhas: canal + tipo + gancho central) |

**Conteúdo da página de cada tarefa:**
- Objetivo do dia
- Canal(es) de publicação
- Copy completo pronto para uso (WhatsApp, email, post, stories, etc.)
- CTA específico do dia

---

## Passo 5: Integração com Conteúdo Orgânico

Especifique quais peças devem ser criadas **antes** do lançamento para aquecer a audiência:

- **Chavideo** → scripts de vídeo para aquecimento (skill chavideo-script-creator)
- **Chavossel** → carrosséis de autoridade (skill chave-mestra-progymnasmata)
- **Copy Total** → diagnóstico de persona para calibrar a narrativa

---

## Padrão de Output (quando NÃO escreve no Notion)

```
DIAGNÓSTICO
├── Modalidade + justificativa (3 linhas)
└── Premissas assumidas

CRONOGRAMA
├── Dia 1: [nome tarefa] | [fase] | [data] | [canal] | [resumo copy]
├── Dia 2: ...
└── Dia N: Fechamento

NARRATIVA MESTRA
├── Promessa central
├── Conflito/tensão
├── Mecanismo único
└── Prova/desfecho

COPY COMPLETO POR DIA
├── Dia 1 — [Nome]: [texto completo]
└── ...
```

Output em português, tom direto e estratégico. Sem linguagem de guru motivacional.

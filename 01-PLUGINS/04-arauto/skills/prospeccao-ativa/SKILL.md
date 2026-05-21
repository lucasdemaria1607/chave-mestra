---
name: prospeccao-ativa
description: Usar quando o usuário pedir "prospecção ativa", "venda direta", "vender pelo Pix", "Pix sem plataforma", "cadência de prospecção", "DM para vender", "registra objeção", "objeções do campo", "feedback de prospecção", "ajusta abordagem", ou qualquer operação de venda direta e acompanhamento de leads em tempo real.
version: 1.0
layer: Camada 4 — Lançamento + Camada 2 — Estratégia
role: Protocolo de venda direta — cadência de prospecção ativa, estrutura de oferta sem plataforma, tracking de leads e objeções em tempo real, ajuste de abordagem por rodada
inputs: produto (nome + preço + oferta), canal de prospecção escolhido, meta de vendas
outputs: cadência de abordagem pronta + templates de DM/mensagem + banco de objeções atualizado + abordagem ajustada baseada em feedback real
feeds-into: Mapa de Campanha (informa o que está funcionando), Portal da Escala (métricas de conversão), Forja de Oferta (objeções indicam reposicionamento), Tesouro dos Erros (aprendizados do campo)
---

# Prospecção Ativa — Protocolo de Venda Direta

Prospecção ativa não é spam. É o processo de ir até as pessoas certas, com a mensagem certa, no momento certo — e aprender com cada resposta. Cada objeção é dado. Cada "não agora" é um ajuste de abordagem. O objetivo não é só fechar vendas neste ciclo: é construir um banco de respostas que torna cada próxima rodada mais precisa.

---

## Quando Usar Este Protocolo

| Situação | Indicado |
|---|---|
| Produto novo, sem checkout ou plataforma estruturada | ✅ Venda direta via Pix |
| Quer feedback real antes de estruturar funil completo | ✅ Prospecção primeiro, funil depois |
| Precisa de caixa rápido com produto já definido | ✅ Protocolo Venda Direta |
| Audiência pequena (<500) e quente | ✅ DM direto + Pix |
| Quer mapear objeções reais antes de lançar em escala | ✅ Prospecção como pesquisa de mercado |

---

## Módulo 1 — Estrutura da Oferta Direta (Pix Sem Plataforma)

Antes de qualquer prospecção, estruturar a oferta para transação direta. Essa estrutura vai na seção 🎯 PROSPECÇÃO da página do produto.

```
OFERTA DIRETA — 6 ELEMENTOS

① Promessa em 1 linha
   "Em [X dias], [avatar] consegue [resultado] mesmo sem [obstáculo típico]."

② O que entrega (máx. 3 itens — específico, não genérico)
   ✗ "Acesso ao curso"
   ✓ "12 vídeos de 15min + 3 templates + grupo de suporte por 30 dias"

③ Para quem é (exclusão eleva desejo)
   "Exclusivo para [quem está em X situação específica]"
   "Não é para quem [X] ou quer [Y genérico]"

④ Prova de entrega
   Resultado próprio / depoimento / print / antes-e-depois
   Se não tiver: "Ensino o mesmo método que usei para [resultado próprio]"

⑤ Preço + pagamento
   "R$[X] — Pix para [chave Pix]"
   Prazo real: "Disponível até [data] ou [X vagas] — após isso, sobe para R$[Y]"

⑥ Como recebe (eliminar fricção)
   "Após confirmação do Pix, envio [link/acesso/grupo] em até [X horas]"
```

---

## Módulo 2 — Cadência de Prospecção

### Definição de Canal e Volume Diário

| Canal | Perfil ideal | Volume recomendado/dia |
|---|---|---|
| Instagram DM | Engajados recentes (curtiu / comentou / perguntou) | 10–20 mensagens |
| WhatsApp | Lista pessoal ou leads anteriores | 15–30 mensagens |
| Stories + CTA direto | Audiência quente, qualquer tamanho | 1–3 stories/dia |
| Email | Lista própria | 1 disparo por fase |
| LinkedIn | Público B2B | 5–10 mensagens |

**Regra de volume:** 15–20 contatos/dia por 5–7 dias > 100 contatos em 1 dia. Consistência gera dados; volume único gera ruído.

### Template de Primeiro Contato — 2 Modelos

**Modelo A: Curiosidade + Relevância**
```
"Oi [nome], vi que você [contexto real — curtiu, comentou, perguntou sobre X].

Tenho [produto/resultado] que pode ser exatamente o que você estava buscando.

Em [tempo], [promessa específica].

Faz sentido te contar mais?"
```

**Modelo B: Direto + Transparente**
```
"Oi [nome], vou ser direto: estou rodando [produto] essa semana para [X pessoas].

[Resultado] em [tempo], por R$[X].

Você teria interesse em saber mais?"
```

**Regras de abordagem:**
- Nunca mandar link na primeira mensagem
- Nunca mandar áudio não solicitado
- Máximo 3 tentativas de follow-up por lead
- Registrar TUDO na tabela de leads do produto

### Cadência de Follow-up

```
Dia 0:   Primeiro contato (template acima)
Dia 1:   Sem resposta → "Oi [nome], só confirmando que você recebeu minha mensagem..."
Dia 3:   Sem resposta → Mensagem de valor (insight útil + soft CTA)
Dia 7:   Sem resposta → "Estou fechando as vagas hoje, caso queira garantir sua..."
Dia 7+:  Arquivar como "Nutrição futura" → marcar data de follow-up no próximo lançamento
```

---

## Módulo 3 — Tracking em Tempo Real

### Ciclo de Operação

```
Usuário sai e prospecta
         ↓
Coleta objeções e feedbacks do campo
         ↓
Cola aqui (no sistema)
         ↓
Arauto processa → classifica → gera resposta calibrada
         ↓
Usuário testa a resposta na próxima rodada
         ↓
Registra o resultado → banco de objeções atualiza
         ↓
Abordagem melhora a cada ciclo
```

### Status dos Leads (Tabela de Prospecção)

| Status | Significado |
|---|---|
| `Contactado` | Mensagem enviada, sem resposta ainda |
| `Respondeu` | Engajou — conversa aberta |
| `Objeção` | Respondeu com resistência |
| `Negociando` | Interesse ativo, em conversa |
| `Fechou` | Comprou — registrar no DB Clientes |
| `Perdeu` | Não vai comprar neste ciclo |
| `Nutrição` | Para o próximo lançamento — marcar data |

---

## Módulo 4 — Análise e Ajuste de Objeções

Quando o usuário traz objeções do campo, processar:

### Classificação das Objeções

| Tipo | Exemplos do lead | O que indica |
|---|---|---|
| **Preço** | "Tá caro", "não tenho verba agora" | Percepção de valor insuficiente OU timing errado |
| **Tempo** | "Não tenho tempo", "tô muito corrida" | Entregável parece pesado OU produto mal posicionado |
| **Confiança** | "Não te conheço", "já fiz isso e não funcionou" | Prova social insuficiente OU autoridade não estabelecida |
| **Fit** | "Não é pra mim", "já faço diferente" | Segmentação errada OU promessa genérica |
| **Prioridade** | "Agora não", "depois" | Urgência insuficiente OU outro problema mais urgente |

### Respostas Padrão por Tipo

**Preço:**
> "Entendo. Só para contextualizar: [resultado específico]. A maioria das pessoas que faz isso por conta própria gasta [X tempo / Y dinheiro] sem chegar no resultado. Aqui é [entregável concreto] por R$[X]. Mas respeito se não for o momento."

**Confiança:**
> "Faz todo sentido ser cético. [Resultado próprio ou prova específica]. Se quiser, posso te mostrar [depoimento / print / demonstração]."

**Tempo:**
> "Pensando bem, [produto] foi desenhado para caber em [X minutos/horas por semana]. A ideia não é adicionar mais coisa na sua rotina — é substituir o que você já faz de forma menos eficiente."

**Prioridade:**
> "Totalmente ok. Vou te mandar um lembrete quando abrir a próxima turma. Só me diz: qual seria o momento ideal para você pensar nisso?"

### Ajuste de Abordagem por Rodada

Após cada ciclo de 20–30 contatos, verificar:

| Indicador | Sinal de problema | Ajuste |
|---|---|---|
| Taxa de resposta < 30% | Template de abertura fraco | Revisar modelo A ou B |
| Objeção de preço > 50% | Valor percebido insuficiente | Reforçar entregáveis concretos |
| "Não é pra mim" > 30% | Segmentação errada | Revisar para quem está prospectando |
| Fechamento < 5% de quem respondeu | Oferta ou canal inadequado | Revisar oferta com Alquimista |

---

## Módulo 5 — Banco de Objeções (Ativo)

O banco de objeções na seção 🎯 PROSPECÇÃO do produto cresce a cada rodada e alimenta:
- Copy de campanha (Bardo + Alquimista)
- FAQ da página de vendas
- Scripts de fechamento em calls futuras
- Material de prova social a produzir

**Formato de registro no banco:**
```
Objeção:          [texto exato como o lead disse]
Frequência:       [quantas vezes apareceu neste ciclo]
Momento:          [início / valor / preço / fechamento]
Resposta testada: [o que respondemos]
Resultado:        [comprou / não comprou / ficou em aberto]
Status:           Pendente / Tratada / Incorporada na copy
```

**Regra do texto exato:** nunca parafrasear. "Tá caro" e "não tenho orçamento" são objeções diferentes com respostas diferentes.

---

## Módulo 6 — Venda 1:1 (Call ou Conversa Aprofundada)

Quando o lead demonstra interesse mas não fecha por DM, oferecer conversa:

```
ESTRUTURA DA CALL DE VENDAS (20–30 min)

① Diagnóstico (5 min)
   "Me conta: qual é o maior desafio que você tem com [tema do produto] hoje?"
   → Deixar o lead falar. Não interromper.

② Aprofundamento (5 min)
   "Quanto tempo você está lidando com isso?"
   "O que você já tentou fazer?"
   "Como isso está impactando [área específica]?"

③ Transição (2 min)
   "Faz sentido te mostrar como [produto] resolve exatamente isso?"

④ Apresentação (5 min)
   Apresentar produto pelo resultado — não pelas features.
   Usar a dor exata que o lead descreveu no ①.

⑤ Proposta e silêncio (3 min)
   "Para você, seria R$[X]. Você sente que faz sentido para o que você precisa?"
   → Silêncio. Quem falar primeiro perde.

⑥ Objeção e fechamento (5 min)
   Tratar 1 objeção por vez. Confirmar resolução antes de continuar.
   "Dado o que conversamos, faz sentido avançar?"
```

---

## Regras

1. **Nunca inventar objeções** — registrar só o que o mercado disse, com as palavras exatas
2. **Volume consistente** — 15–20 contatos/dia por 5–7 dias > 100 em 1 dia
3. **Ajustar após cada rodada** — prospecção que não aprende é spam com mais trabalho
4. **Registrar "nãos"** — o "não agora" de hoje é o lead do próximo lançamento
5. **Pix não é gambeta** — ter o processo de entrega definido ANTES de aceitar o pagamento
6. **Nunca pressionar** — urgência real (vagas ou prazo) sim; fake scarcity não

---

## Referências Cruzadas

- `criar-produto-esteira/SKILL.md` — cria a estrutura de prospecção vinculada ao produto
- `mapa-de-campanha/SKILL.md` — as objeções coletadas aqui alimentam o copy de campanha
- `forja-de-oferta/SKILL.md` — objeções frequentes indicam o que precisa ser reposicionado
- `pergaminho-de-copy/SKILL.md` — usar objeções para calibrar N-level e ângulo da copy
- `metricas-produto/SKILL.md` — dados de conversão desta fase alimentam o dashboard do produto
- `forja-de-caixa/SKILL.md` — quando a prospecção valida o produto, forja de caixa escala
- `negociacao-1x1.md` — referência adicional para calls de fechamento

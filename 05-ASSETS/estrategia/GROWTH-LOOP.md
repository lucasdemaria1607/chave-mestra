---
status: blueprint
criado: 2026-06-07
autor: Lucas De Maria (Grigo)
prioridade: alta
uso: motor de crescimento auto-reforçante — onde cada ciclo fortalece o próximo
depende-de: ESTEIRA-DE-PRODUTOS.md, ESTRATEGIA-DE-CONTEUDO.md, INTEGRACAO-OPERACIONAL.md
---

# Growth Loop — Chave Mestra

O growth loop não é um funil. Funil tem começo e fim. Loop tem voltas — e cada volta acelera a próxima.

A maioria dos negócios solo opera em modo linear: cria → vende → entrega → espera → repete. O problema é que cada ciclo começa do zero. Não acumula. Não compõe. Não aprende.

O growth loop transforma cada operação em combustível para a próxima.

---

## O LOOP CENTRAL — 6 MOVIMENTOS

```
                    ┌─────────────────────────────────┐
                    │                                   │
              ╔═════▼══════╗                             │
              ║  1. CAPTAR  ║                             │
              ║  (conteúdo) ║                             │
              ╚═════╤══════╝                             │
                    │ lead qualificado                   │
              ╔═════▼══════╗                             │
              ║ 2. CONVERTER║                             │
              ║   (oferta)  ║                             │
              ╚═════╤══════╝                             │
                    │ cliente pagante                    │
              ╔═════▼══════╗                             │
              ║ 3. ENTREGAR ║                             │
              ║  (produto)  ║                             │
              ╚═════╤══════╝                             │
                    │ resultado + dados                  │
              ╔═════▼══════╗                             │
              ║ 4. MEDIR   ║                             │
              ║(financeiro) ║                             │
              ╚═════╤══════╝                             │
                    │ inteligência                       │
              ╔═════▼══════╗                             │
              ║ 5. APRENDER ║                             │
              ║ (feedback)  ║                             │
              ╚═════╤══════╝                             │
                    │ decisão                            │
              ╔═════▼══════╗                             │
              ║ 6. MELHORAR ║─────────────────────────────┘
              ║  (evolução) ║
              ╚════════════╝
```

Cada volta do loop gera:
- **Dados** que alimentam a próxima volta
- **Inteligência** que melhora decisões
- **Ativos** que se acumulam (conteúdo, cases, templates, reputação)
- **Evidência** que prova o que funciona

O negócio que roda esse loop 12 vezes por mês é incomparavelmente mais forte que o que tenta "fazer tudo certo da primeira vez".

---

## DETALHAMENTO DOS 6 MOVIMENTOS

### MOVIMENTO 1 — CAPTAR (Conteúdo → Lead)

**O que acontece:** conteúdo entra no mundo do lead pela dor dele, não pela metodologia.

**Motor:** Cavalo de Troia (ESTRATEGIA-DE-CONTEUDO.md)

**Fórmula:** Dor de entrada → Desenvolvimento → Reveal do sistema → CTA

**Plugins envolvidos:** Bardo (criação), Cartógrafo (persona), Alquimista (copy)

**O que alimenta este movimento:**
- Feedback Log (mov. 5) → revela quais dores são reais vs imaginadas
- Métricas de conteúdo (mov. 4) → mostra quais temas convertem vs quais só engajam
- Cases de clientes (mov. 3) → vira prova social nos conteúdos
- Tesouro dos Erros → evita repetir hooks que não funcionaram

**Output que alimenta o próximo:** lead qualificado + dado de origem (canal, tema, tipo de dor)

**Métrica-chave:** CPL por tema/mundo + taxa de conversão conteúdo→lead

**Cadência:** contínuo (Forja Semanal gera a pauta)

---

### MOVIMENTO 2 — CONVERTER (Lead → Cliente)

**O que acontece:** lead qualificado encontra a oferta certa no momento certo.

**Motor:** Esteira de Produtos (ESTEIRA-DE-PRODUTOS.md) + Copy 3x5 + Forja de Oferta

**Lógica de match:**
- Lead frio → isca gratuita → Sistema Operacional (①)
- Lead morno → Agente Único ou Ordem (②A/②B)
- Lead quente → Olimpo Completo (②C) ou Comunidade (③)
- Lead high-ticket → Implementação (④) ou Mentoria (⑤)

**Plugins envolvidos:** Alquimista (oferta + copy), Arauto (campanha + prospecção)

**O que alimenta este movimento:**
- Controle de Ofertas financeiro (mov. 4) → mostra margem por produto → prioriza o que vender
- Controle de Campanhas (mov. 4) → mostra qual canal/formato converte melhor
- Product Brief (mov. 6) → mantém a promessa calibrada
- Objeções do campo (mov. 5) → entram na copy como antecipação

**Output que alimenta o próximo:** cliente pagante + dados (produto comprado, canal, ticket, objeções encontradas)

**Métrica-chave:** taxa de conversão lead→venda + CAC por produto + ticket médio

**Cadência:** contínuo + campanhas (mapa-de-campanha)

---

### MOVIMENTO 3 — ENTREGAR (Cliente → Resultado)

**O que acontece:** cliente recebe o produto, é onboardado, implementa, tem resultado.

**Motor:** Customer Journey + Service Blueprint + SOPs de entrega + Dossiê CM

**Jornada crítica:**
```
Compra → Acesso → Onboarding → Primeiro uso → Implementação
→ Resultado inicial → Suporte → Continuidade → Indicação
```

**Plugins envolvidos:** Arauto (esteira-notion, onboarding), Chaveiro (dossiê)

**O que alimenta este movimento:**
- PRD (mov. 6) → define exatamente o que o produto precisa ter
- Changelog (mov. 6) → mantém o produto atualizado para novos clientes
- Feedback de clientes anteriores (mov. 5) → revela onde novos clientes vão travar

**Output que alimenta o próximo:**
- Dados de ativação (usou? completou? travou onde?)
- Feedback espontâneo do cliente
- Case de sucesso (ou case de fracasso — tão útil quanto)
- Pedidos de continuidade (upgrade, mentoria, etc.)

**Métrica-chave:** taxa de ativação + tempo até primeiro resultado + NPS informal

**Cadência:** por cliente (SOP-ENTREGA-CLIENTE, fases 0-5)

---

### MOVIMENTO 4 — MEDIR (Dados → Inteligência)

**O que acontece:** os números viram informação interpretável.

**Motor:** Sistema Financeiro Solo (SISTEMA-FINANCEIRO-SOLO.md) + Métricas de Produto

**As 4 camadas financeiras:**
```
CAPTURA       → Google Sheets (transações brutas)
CLASSIFICAÇÃO → IA classifica + humano revisa
ANÁLISE       → DRE, fluxo de caixa, margem por oferta, CAC, ROAS
MEMÓRIA       → Decisões Financeiras (Notion)
```

**Plugins envolvidos:** Arauto (hq-financeiro), Alquimista (metricas-produto)

**O que alimenta este movimento:**
- Dados de venda (mov. 2) → receita, ticket, canal
- Dados de campanha (mov. 2) → investimento, leads, conversão
- Dados de entrega (mov. 3) → custo de suporte, reembolso, tempo de entrega
- Dados de produto (mov. 3) → qual produto gera mais resultado vs mais custo

**Output que alimenta o próximo:**
- Relatório mensal financeiro com variações e alertas
- Dashboard com margem por produto, runway, despesas críticas
- Simulações de cenário (conservador/realista/agressivo)
- Ranking de produtos por lucratividade real (não receita bruta — lucro líquido)

**Métrica-chave:** lucro líquido + margem por produto + runway

**Cadência:** semanal (Giro Financeiro) + mensal (Fechamento Mensal na Lua Cheia)

---

### MOVIMENTO 5 — APRENDER (Inteligência → Decisão)

**O que acontece:** os dados viram compreensão, e a compreensão vira decisão documentada.

**Motor:** Feedback Log + Tesouro dos Erros + Decisões Financeiras + Post-Mortem

**Tipos de aprendizado:**
```
FEEDBACK DO MERCADO    → o que o cliente disse, sentiu, pediu, reclamou
FEEDBACK FINANCEIRO    → o que os números mostraram (CAC alto, margem apertada, etc.)
FEEDBACK DE PRODUTO    → o que o produto fez bem e onde falhou
FEEDBACK DE CONTEÚDO   → o que engajou, converteu, flopou
FEEDBACK OPERACIONAL   → o que demorou, travou, custou caro pra executar
```

**Plugins envolvidos:** Chaveiro (tesouro-dos-erros, forja-do-conhecimento), todos os outros alimentam

**O que alimenta este movimento:**
- Relatório financeiro (mov. 4) → variações, alertas, comparativos
- Feedback do cliente (mov. 3) → dores, elogios, objeções reais
- Métricas de conteúdo (mov. 1) → o que o mercado respondeu
- Métricas de campanha (mov. 2) → o que converteu vs o que custou

**Output que alimenta o próximo:**
- Decisões documentadas (com hipótese, critério e prazo de revisão)
- Patterns identificados (sazonalidade, canal mais eficiente, perfil de cliente ideal)
- Erros catalogados (Tesouro dos Erros — para não repetir)
- Insights estratégicos (novas oportunidades, pivots, ajustes de preço)

**Métrica-chave:** qualidade das decisões (revisão trimestral: a decisão deu certo?)

**Cadência:** mensal (Lua Cheia) + sob demanda (quando insight relevante aparece)

---

### MOVIMENTO 6 — MELHORAR (Decisão → Ação)

**O que acontece:** as decisões viram melhorias reais — no produto, na oferta, no conteúdo, no processo, no preço.

**Motor:** Gestão de Produto (GESTAO-DE-PRODUTO.md) + Roadmap + Backlog

**Tipos de melhoria:**
```
PRODUTO     → novo módulo, novo template, onboarding melhor, bug fix
OFERTA      → preço ajustado, bônus novo, promessa recalibrada, garantia
CONTEÚDO    → novos temas validados, formatos que funcionam, hooks testados
PROCESSO    → SOP atualizado, automação nova, ferramenta substituída
FINANCEIRO  → corte de despesa, canal mais eficiente, margem recalculada
ESTEIRA     → novo produto, produto descontinuado, upgrade, bundle
```

**Plugins envolvidos:** Alquimista (gestao-de-produto, forja-de-oferta), Arauto (criar-produto-esteira)

**O que alimenta este movimento:**
- Decisões do mov. 5 → o que foi decidido fazer
- Backlog priorizado → o que tem maior impacto x menor esforço
- Roadmap → o que está no "agora" vs "depois"

**Output que alimenta o INÍCIO do loop (mov. 1):**
- Produto melhor → cases mais fortes → conteúdo com mais prova
- Oferta ajustada → promessa mais precisa → copy mais certeira
- Processo mais eficiente → mais tempo pra criar conteúdo
- Novo produto na esteira → novo conteúdo de reveal
- Erros evitados → menos retrabalho → mais velocidade
- Preço saudável → margem melhor → mais investimento em aquisição

**Changelog registra tudo:** cada melhoria vira versão do produto, consultável no futuro.

**Métrica-chave:** velocidade de implementação (dias entre decisão e execução)

**Cadência:** contínuo + Revisão de Produto Mensal + Auditoria Documental Trimestral

---

## OS 3 EFEITOS COMPOSTOS

O growth loop não é só "fazer as coisas em sequência". Ele gera 3 efeitos que se acumulam com o tempo:

### Efeito 1 — INTELIGÊNCIA ACUMULADA

```
Mês 1:  Você acha que sabe quem é seu cliente.
Mês 3:  Você tem dados de quem comprou, onde travou, o que pediu.
Mês 6:  Você tem padrões: sazonalidade, canal ideal, objeção recorrente.
Mês 12: Você tem um histórico que nenhum concorrente que está começando tem.
```

Onde mora essa inteligência:
- Decisões Financeiras (Notion) → o que os números ensinaram
- Feedback Log → o que o mercado disse
- Tesouro dos Erros → o que não repetir
- Changelog → como o produto evoluiu
- Zettelkasten → conhecimento estruturado

**O concorrente pode copiar seu produto. Não pode copiar 12 meses de decisões documentadas.**

### Efeito 2 — ATIVOS QUE COMPÕEM

```
Cada conteúdo publicado → ativo permanente de aquisição
Cada case documentado → ativo permanente de prova social
Cada template melhorado → ativo permanente de entrega
Cada SOP atualizado → ativo permanente de eficiência
Cada decisão registrada → ativo permanente de inteligência
```

No mês 1 você tem 4 conteúdos, 0 cases, 1 versão do produto.
No mês 12 você tem 48+ conteúdos, 10+ cases, produto na v4, 12 relatórios financeiros, padrões de mercado documentados.

**Negócio linear reinventa a roda todo mês. Negócio com loop compõe sobre a roda que já gira.**

### Efeito 3 — CICLOS MAIS RÁPIDOS

```
Loop 1:  Tudo é novo. Demora. Você está aprendendo o processo.
Loop 3:  As rotinas estão no corpo. O Giro Financeiro leva 15 min.
Loop 6:  Você já sabe qual hook funciona, qual produto vende, onde cortar.
Loop 12: O loop roda quase sozinho. Sua energia vai pra decisão, não pra operação.
```

Isso acontece porque:
- SOPs documentados → execução sem pensar
- Templates prontos → produção mais rápida
- Categorias padronizadas → classificação instantânea
- Prompts de IA calibrados → análise mais precisa a cada mês
- Feedback acumulado → menos experimento, mais certeza

---

## COMO O LOOP SE ENCAIXA NOS RITUAIS EXISTENTES

O growth loop não é um ritual novo. Ele é o **motivo pelo qual os rituais existem**.

```
GIRO DA CHAVE (diário)
├── Micro-captura: anotar insight, feedback, dado que apareceu
├── Micro-produção: criar 1 peça de conteúdo (mov. 1)
└── Micro-verificação: algo travado? algo vencendo?

FORJA SEMANAL (semanal)
├── CAPTAR: produzir e publicar conteúdo da semana (mov. 1)
├── CONVERTER: checar campanhas ativas, ajustar (mov. 2)
├── MEDIR: Giro Financeiro — atualizar entradas/saídas (mov. 4)
└── APRENDER: algo chamou atenção? anotar no Feedback Log (mov. 5)

LUA CHEIA (mensal)
├── MEDIR: Fechamento Mensal — DRE, dashboard, relatório (mov. 4)
├── APRENDER: Revisão completa — feedback, erros, decisões (mov. 5)
├── MELHORAR: Revisão de Produto + Backlog + Roadmap (mov. 6)
└── CAPTAR: Planejar conteúdo do próximo mês com base nos dados (mov. 1)

LUA CHEIA EXPANSÃO (trimestral)
├── MEDIR: LTV, payback, margem por oferta, runway (mov. 4)
├── APRENDER: Patterns de 3 meses, decisões que deram certo/errado (mov. 5)
├── MELHORAR: Auditoria Documental + Pricing Review + Roadmap trimestral (mov. 6)
└── CAPTAR: Novo ciclo de temas de conteúdo com base em padrões (mov. 1)
```

---

## OS 4 SUB-LOOPS QUE GIRAM DENTRO DO LOOP PRINCIPAL

O loop central tem 4 sub-loops menores que giram em cadências próprias:

### Sub-loop A — CONTEÚDO → LEAD → FEEDBACK → CONTEÚDO

```
Publica conteúdo → atrai lead → lead reage (engaja, comenta, ignora)
→ dado de reação alimenta próximo conteúdo
```

**Cadência:** semanal (Forja Semanal)
**O que acelera:** qualidade e precisão do conteúdo
**Sem esse sub-loop:** você publica no escuro e reza

### Sub-loop B — OFERTA → VENDA → MARGEM → OFERTA

```
Vende oferta → receita entra → calcula margem real → ajusta preço/escopo
→ oferta melhor na próxima venda
```

**Cadência:** mensal (Fechamento Mensal) com ajustes pontuais
**O que acelera:** rentabilidade por produto
**Sem esse sub-loop:** você vende achando que lucra e descobre que não no susto

### Sub-loop C — PRODUTO → USO → FEEDBACK → PRODUTO

```
Entrega produto → cliente usa → feedback aparece → melhora produto
→ próximo cliente tem experiência melhor
```

**Cadência:** contínua (feedback) + mensal (Revisão de Produto)
**O que acelera:** qualidade do produto e satisfação do cliente
**Sem esse sub-loop:** produto fica estagnado enquanto o mercado evolui

### Sub-loop D — CAMPANHA → CUSTO → RESULTADO → CAMPANHA

```
Roda campanha → gasta X → vende Y → calcula CAC, ROAS, payback
→ próxima campanha aloca melhor
```

**Cadência:** por campanha + mensal (análise comparativa)
**O que acelera:** eficiência de aquisição
**Sem esse sub-loop:** você joga dinheiro em tráfego sem saber o que volta

---

## MAPA DE DADOS: O QUE ALIMENTA O QUÊ

```
CONTEÚDO (mov. 1)
├── gera → leads
├── gera → dados de engajamento (tema, formato, mundo)
├── gera → feedback qualitativo (comentários, DMs)
└── alimenta → Feedback Log + Inventário de Conteúdo

OFERTA (mov. 2)
├── gera → receita
├── gera → dados de conversão (canal, copy, objeções)
├── gera → dados de aquisição (CPL, CAC)
└── alimenta → Controle de Ofertas + Controle de Campanhas

ENTREGA (mov. 3)
├── gera → dados de ativação (usou? completou?)
├── gera → feedback do cliente (dor, elogio, pedido)
├── gera → cases (sucesso ou fracasso)
├── gera → pedidos de continuidade (upgrade, mentoria)
└── alimenta → Feedback Log + Changelog + Dossiê

FINANCEIRO (mov. 4)
├── gera → DRE (lucratividade real)
├── gera → fluxo de caixa (liquidez)
├── gera → margem por produto (ranking de rentabilidade)
├── gera → simulações (cenários futuros)
└── alimenta → Dashboard + Relatório Mensal + Decisões Financeiras

APRENDIZADO (mov. 5)
├── gera → decisões documentadas
├── gera → patterns (sazonalidade, perfil ideal, canal eficiente)
├── gera → erros catalogados (Tesouro dos Erros)
└── alimenta → Roadmap + Backlog + próxima pauta de conteúdo

MELHORIA (mov. 6)
├── gera → produto atualizado (Changelog)
├── gera → oferta recalibrada (promessa, preço, escopo)
├── gera → processo otimizado (SOP, automação)
├── gera → conteúdo novo (cases, reveals, novos temas)
└── alimenta → volta ao mov. 1 com mais munição
```

---

## QUANDO O LOOP ACELERA — OS GATILHOS DE ESCALA

O loop começa devagar. Algumas condições fazem ele acelerar:

### Gatilho 1 — PRIMEIRO CASE DOCUMENTADO

Quando o primeiro cliente tem resultado e você documenta:
- Conteúdo ganha prova social real (não mais "eu criei isso")
- Oferta ganha credibilidade (não mais "confie em mim")
- Produto ganha validação (não mais "eu acho que funciona")

**Ação:** transformar o case em pelo menos 3 peças de conteúdo (Série B do inventário)

### Gatilho 2 — MARGEM POSITIVA CONFIRMADA

Quando o financeiro mostra lucro real (não receita — lucro):
- Você sabe quanto pode investir em aquisição
- Pode calcular payback e decidir escalar campanha
- Pode planejar próximos 3 meses sem medo

**Ação:** definir % de reinvestimento em marketing + reserva

### Gatilho 3 — FEEDBACK PADRÃO IDENTIFICADO

Quando 3+ clientes dizem a mesma coisa (positiva ou negativa):
- Feedback positivo → vira argumento de venda e conteúdo
- Feedback negativo → vira prioridade no backlog

**Ação:** transformar o padrão em melhoria concreta + conteúdo de reveal

### Gatilho 4 — PRODUTO ESTÁVEL (v2+)

Quando o produto já teve 2+ ciclos de melhoria e a qualidade está consistente:
- Pode aumentar volume de aquisição sem quebrar entrega
- Pode subir preço com confiança
- Pode criar próximo produto da esteira

**Ação:** abrir próximo degrau da esteira + planejar conteúdo de lançamento

### Gatilho 5 — 3 MESES DE HISTÓRICO FINANCEIRO

Quando você tem DRE, fluxo de caixa e dashboard de 3 meses consecutivos:
- Inteligência acumulada permite decisões baseadas em padrão, não em pontual
- Sazonalidade começa a aparecer
- LTV estimado se torna confiável

**Ação:** primeira Revisão Estratégica Trimestral (Lua Cheia Expansão)

---

## O ANTI-LOOP: O QUE MATA O CRESCIMENTO

O oposto do growth loop é o **death spiral** — ciclo vicioso onde cada volta piora.

```
NÃO MEDE → não sabe o que funciona
→ DECIDE NO IMPULSO → gasta onde não devia
→ MARGEM APERTA → menos dinheiro pra investir
→ PARA DE CRIAR → menos leads
→ MENOS VENDA → mais desespero
→ DESCONTO → margem pior
→ BURNOUT → qualidade cai
→ REEMBOLSO → reputação cai
→ volta ao início com menos energia e mais dúvida
```

As 7 causas mais comuns de death spiral em negócio solo:

| Causa | Movimento que falta | Solução no sistema |
|---|---|---|
| Amnésia operacional | Mov. 5 (Aprender) | Decisões Financeiras + Feedback Log + Tesouro dos Erros |
| Produto estagnado | Mov. 6 (Melhorar) | Revisão de Produto mensal + Changelog |
| Margem cega | Mov. 4 (Medir) | DRE + Controle de Ofertas com margem real |
| Conteúdo sem direção | Mov. 1 (Captar) sem dados de mov. 5 | Inventário de Conteúdo alimentado por feedback |
| Feature creep | Mov. 3 (Entregar) sem PRD | PRD + escopo/fora de escopo antes de construir |
| Preço emocional | Mov. 2 (Converter) sem dados de mov. 4 | Pricing Review baseado em margem real |
| Dispersão criativa | Todos | Roadmap simples: agora/próximo/depois/talvez |

---

## DASHBOARD DO LOOP — O QUE ACOMPANHAR

Um número por movimento, revisado mensalmente na Lua Cheia:

```
CAPTAR      → CPL médio (custo por lead qualificado)
CONVERTER   → Taxa de conversão lead→venda (%)
ENTREGAR    → Taxa de ativação (% que usou o produto)
MEDIR       → Margem líquida (%)
APRENDER    → Decisões tomadas no mês (quantidade + qualidade)
MELHORAR    → Melhorias implementadas no mês (quantidade)
```

North Star do loop inteiro:

**Lucro líquido por cliente que completou o ciclo de entrega.**

Esse número captura tudo: aquisição eficiente, conversão saudável, produto que funciona, custo controlado.

---

## IMPLEMENTAÇÃO — COMO ATIVAR O LOOP

### Fase 0 — AGORA (antes do primeiro cliente beta)

O loop já gira, mesmo sem venda. Os movimentos que já operam:

```
[x] CAPTAR   → Cavalo de Troia + Inventário de Conteúdo (existe)
[x] CONVERTER → Esteira de Produtos + Forja de Oferta (existe)
[ ] ENTREGAR → Onboarding do Sistema Operacional (próximo passo imediato)
[ ] MEDIR    → HQ Financeiro (ativar com primeira transação)
[x] APRENDER → Tesouro dos Erros + Zettelkasten (existe)
[x] MELHORAR → Backlog mental → formalizar em Roadmap (parcial)
```

**Próximos passos para fechar o loop:**
1. Finalizar onboarding do Sistema Operacional (mov. 3)
2. Criar Product Brief do Sistema Operacional (mov. 6 → mov. 3)
3. Primeira venda beta → primeira transação → ativa HQ Financeiro (mov. 4)
4. Primeiro feedback do beta → primeiro registro no Feedback Log (mov. 5)
5. Primeira Lua Cheia com dados reais → loop completo

### Fase 1 — PRIMEIROS 5-10 BETAS

```
Semana 1: vende → registra transação → classifica
Semana 2: cliente usa → anota feedback → atualiza Feedback Log
Semana 3: Giro Financeiro → primeiros números reais
Semana 4: Lua Cheia → primeiro fechamento mensal → primeira decisão documentada
```

Nessa fase, o loop gira lento e manual. Normal. O objetivo não é velocidade — é fechar o ciclo completo pelo menos uma vez.

### Fase 2 — LOOP GIRANDO (3+ meses)

```
Conteúdo semanal com temas validados por dados (não por achismo)
Oferta calibrada por margem real (não por "quanto o mercado cobra")
Produto na v2+ com melhorias baseadas em feedback real
Financeiro com 3 DREs comparáveis
Decisões com hipótese + prazo de revisão
Roadmap atualizado todo mês
```

### Fase 3 — LOOP COMPONDO (6+ meses)

```
Patterns identificados (sazonalidade, canal ideal, perfil de cliente)
LTV estimado confiável
CAC otimizado por 6 campanhas documentadas
Produto estável → pode escalar volume
Cases suficientes → conteúdo com prova social forte
Próximo produto da esteira → nova fonte de receita
```

---

## CONEXÃO COM A ESTEIRA DE PRODUTOS

O growth loop não é por produto — é do negócio inteiro. Mas cada produto na esteira tem seu próprio sub-ciclo:

```
ESTEIRA:
  ① Sistema Operacional  → loop girando primeiro (é o MVP)
  ② Olimpo               → loop ativa quando ① prova PMF
  ③ Comunidade           → loop ativa quando ② tem base de clientes
  ④ Implementação        → loop ativa quando ③ filtra high-ticket
  ⑤ Mentoria             → loop ativa quando ④ gera cases
  ⑥ White Label          → loop ativa quando ⑤ prova modelo completo
```

Cada produto novo é um **novo motor dentro do loop**. Não um projeto separado.

O produto ① gera cases que vendem o ②.
O ② gera clientes que pedem o ③.
O ③ gera candidatos para o ④.
O ④ gera cases que provam o sistema inteiro.
O ⑤ gera parceiros que licenciam o ⑥.

Essa é a esteira funcionando como growth loop — não como catálogo.

---

## CONEXÃO COM OS PLUGINS

Cada plugin da CM tem papel no loop:

```
CHAVEIRO    → Mov. 5 (Aprender) — Tesouro dos Erros, Ritual da Chave, Zettelkasten
CARTÓGRAFO  → Mov. 1 (Captar) — Persona, Mercado, Universo de Marca
ALQUIMISTA  → Mov. 2 (Converter) — Copy, Oferta, Escala, Produto
BARDO       → Mov. 1 (Captar) — Criação de conteúdo em todos os formatos
ARAUTO      → Mov. 2-4 (Converter + Entregar + Medir) — Campanha, Notion, Financeiro
ILUMINISTA  → Transversal — Visual que amplifica todos os movimentos
```

---

## A FRASE-MÃE DO GROWTH LOOP

**O negócio não cresce porque você trabalha mais. Cresce porque cada volta do ciclo deposita inteligência que a próxima volta saca com juros.**

Trabalho linear: 1 + 1 + 1 + 1 = 4
Growth loop: 1 × 1.1 × 1.2 × 1.3 = composto

A diferença não aparece no mês 1. Aparece no mês 12. E no mês 24 é abissal.

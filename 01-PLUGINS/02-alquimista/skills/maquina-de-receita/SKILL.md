---
name: maquina-de-receita
description: Usar quando o usuário perguntar sobre monetização, plataformas de venda (Cakto, Hotmart, Eduzz, Stripe), como bater metas de receita (10k, 30k, 100k), funis curtos, ManyChat, venda pelo PIX, afiliados, estrutura de precificação, co-produção comercial, ou qualquer questão sobre "como transformar produto em dinheiro de forma inteligente".
version: 1.0
layer: Camada 2 — Estratégia Comercial
inputs: produto, ticket, fase do negócio (1-4), meta de receita, público-alvo, canal principal
outputs: Recomendação de Plataforma + Mapa de Marco de Receita + Arquitetura de Funil + Matriz de Decisão Comercial
feeds-into: forja-de-oferta, portal-da-escala, mapa-de-campanha, frameworks-anuncios, prospeccao-ativa
---

# Máquina de Receita — Inteligência Comercial do Negócio Digital

A Máquina de Receita responde a pergunta que a maioria dos criadores ignora até perder dinheiro: **como e onde monetizar, dado o que você tem?**

Plataforma errada para o produto errado = taxa que devora margem ou perfil de comprador que não converte. Funil longo para produto de impulso = morte por atrito. Meta de receita sem path claro = frustração disfarçada de ambição.

Este skill organiza a inteligência comercial em 4 camadas:
1. **Plataforma** — onde vender (tecnologia, taxa, perfil de comprador)
2. **Marco** — como chegar ao próximo número (caminho de receita por tipo de produto × ticket)
3. **Funil** — como encurtar o caminho entre interesse e PIX
4. **Decisão** — qual combinação faz sentido dado o momento do negócio

Referência transversal: `00-FUNDACAO/REFERENCIAS-PM-PMM.md` — frameworks JTBD, Van Westendorp, PLG e Bullseye informam as decisões deste skill.

---

## Módulo 0 — Princípios da Máquina de Receita

Antes de escolher plataforma ou funil, três princípios que evitam erros caros:

**Princípio 1 — Validar antes de automatizar**
Funil automatizado no produto errado escala o erro. A sequência correta: vender manualmente → entender por que compram → documentar o processo manual → automatizar o que converte. Nunca o inverso.

**Princípio 2 — Ticket determina tudo**
O ticket de um produto define o canal, o funil, a plataforma e o esforço de venda. Produto de R$97 não sustenta ligação de qualificação. Produto de R$5.000 não converte por WhatsApp automático. O ticket é a bússola de todas as decisões comerciais.

```
TICKET        CANAL             FUNIL           PLATAFORMA
< R$197    → Orgânico/tráfego  Funil curto     Cakto (PIX zero)
R$197–997  → Orgânico + pago   Funil médio     Hotmart / Eduzz
R$1k–5k    → Pago + indicação  Funil longo     Hotmart / Perfect Pay
> R$5k     → Indicação/1:1     Venda direta    Contrato + PIX / Stripe
```

**Princípio 3 — Margem acima de faturamento**
Faturar R$50k com 20% de margem (R$10k líquido) é pior que faturar R$30k com 60% de margem (R$18k líquido). A Máquina de Receita sempre apresenta o número real — após taxas de plataforma, impostos MEI/ME, tráfego pago e equipe.

---

## Módulo 1 — Matriz de Plataformas

### BR — Plataformas Nacionais

#### Cakto
**Perfil:** e-commerce digital com checkout otimizado para conversão.

**Vantagem estrutural:**
- PIX com taxa ZERO (outras plataformas cobram 1–2%)
- Checkout mais rápido do mercado BR (menos campos, menos atrito)
- Upsell e order bump nativos
- Integração com ManyChat e WhatsApp

**Taxa efetiva:**
- Cartão: 4,99% + R$2,00 por venda
- PIX: 0% (zero)
- Boleto: 2,99% + R$2,00
- Parcelado: acréscimo de 1,99% por parcela

**Quando usar Cakto:**
- Produtos de ticket baixo (R$27–R$497) que convertem bem por PIX
- Ofertas de impulso com funil curto (ManyChat → link → PIX)
- Quando a conversão por PIX é estratégia central (eventos ao vivo, lives)
- Produtos com upsell imediato (order bump de +R$47–R$97)

**Quando NÃO usar:**
- Produtos acima de R$1.500 onde o comprador precisa de boleto parcelado em muitas vezes
- Se seu público tem preferência forte por cartão parcelado em 12x (a taxa fica alta)
- Para afiliados com volume alto (Hotmart tem infraestrutura de afiliados mais robusta)

**Ecossistema:** integra nativamente com ActiveCampaign, Mailchimp, RD Station, Zapier, Google Tag Manager.

---

#### Hotmart
**Perfil:** plataforma de infoprodutos — a maior do BR, ecossistema completo.

**Vantagem estrutural:**
- Maior rede de afiliados do BR (base de compradores pré-existente)
- Área de membros nativa (Hotmart Club) — sem precisar de plataforma separada
- Recorrência (assinatura) nativa
- Suporte a co-produtores com split automático
- Hotleads (leads da plataforma que já compraram algo)

**Taxa efetiva:**
- 9,9% + R$1,00 por venda (produtos acima de R$10)
- Afiliado: de 1% a 80% de comissão (configurável)
- Checkout Hotmart ou externo (via link)

**Quando usar Hotmart:**
- Produtos que dependem de afiliados para distribuição
- Programas de assinatura recorrente
- Cursos com área de membros sem querer pagar plataforma separada
- Quando o público-alvo já é "comprador de Hotmart" (tem conta, confia no checkout)
- Co-produções com split de receita automático

**Quando NÃO usar:**
- Funis puramente por PIX (taxa de 9,9% corrói margem em ticket baixo)
- Quando você quer checkout ultra-rápido sem criar conta Hotmart

---

#### Perfect Pay
**Perfil:** plataforma white-label — checkout personalizado, sem branding de plataforma.

**Vantagem estrutural:**
- Checkout sem logo da plataforma (percepção de marca própria)
- Funciona com domínio próprio
- Upsell e order bump avançados
- Suporte a sub-contas (agência ou co-produtor gerencia múltiplos clientes)

**Taxa efetiva:**
- A partir de 4,99% + R$1,50 (varia por plano)
- PIX: taxa menor que Hotmart, maior que Cakto

**Quando usar Perfect Pay:**
- Marca consolidada que não quer associar checkout a terceiro
- Agência ou co-produtor com múltiplos clientes
- Funis com múltiplos upsells sofisticados
- Quando a experiência de checkout é parte da experiência da marca

---

#### Braip / Monetizze
**Perfil:** plataformas focadas em afiliados agressivos e distribuição em volume.

**Vantagem estrutural:**
- Rede de afiliados com perfil de compra mais impulsivo
- Bom para produtos de ticket baixo com comissão alta
- Forte em nichos como saúde, emagrecimento, relacionamento

**Taxa efetiva:**
- Similar ao Hotmart (~9–10% + fixo)

**Quando usar:**
- Produto que depende de volume via afiliados agressivos
- Nichos de massa com ticket R$47–R$197
- Quando a estratégia é 100% afiliado, sem orgânico próprio

**Quando NÃO usar:**
- Produtos premium — o perfil de comprador tende a ser mais sensível a preço
- Quando a marca própria importa — essas plataformas têm imagem de "produto de afiliado"

---

#### Eduzz / Ticto
**Perfil:** plataformas de médio porte com ecossistema de tools integradas.

**Eduzz:** bom ecossistema de e-mail marketing + checkout integrado.
**Ticto:** focada em comunidades e recorrência com checkout limpo.

**Quando considerar:**
- Ticto: produto de comunidade paga com recorrência mensal
- Eduzz: quando já usa o ecossistema de ferramentas deles

---

### Internacional — Quando Faz Sentido

#### Stripe
**Quando usar BR + Internacional:**
- Produto em USD ou EUR (curso para público lusófono fora do BR)
- SaaS ou ferramenta digital (cobrança recorrente sofisticada)
- Precisa de gateway robusto + APIs para customização
- Volume alto que justifica taxa mais baixa que plataformas BR (~2,9% + $0,30)

**Requisito:** conta com CNPJ + banco compatível. Stripe BR é limitado comparado ao Stripe US — verificar limitações antes.

#### Lemon Squeezy / Gumroad
**Quando usar:**
- Produto digital simples (template, ebook, ferramenta) em USD
- Público internacional já existente
- Sem necessidade de área de membros
- Venda de produto independente (não curso estruturado)

#### Hotmart Internacional (Hotmart for Creators)
**Quando usar:**
- Expansão do produto BR para LATAM / Portugal
- Já usa Hotmart BR — mesma infraestrutura, abre mercado internacional

---

### Tabela Comparativa Rápida

| Critério | Cakto | Hotmart | Perfect Pay | Braip | Stripe |
|---|---|---|---|---|---|
| PIX sem taxa | ✅ Sim | ❌ 9,9% | ⚠️ Taxa menor | ❌ 9,9% | ❌ N/A |
| Afiliados robustos | ⚠️ Básico | ✅ Melhor BR | ⚠️ Médio | ✅ Volume | ❌ Manual |
| White-label checkout | ⚠️ Parcial | ❌ Hotmart branding | ✅ Total | ❌ | ✅ Total |
| Área de membros | ❌ | ✅ Club | ❌ | ❌ | ❌ |
| Recorrência | ⚠️ | ✅ | ✅ | ⚠️ | ✅ |
| Ticket ideal | < R$500 | Qualquer | R$500+ | < R$300 | USD/EUR |
| Foco | Conversão PIX | Ecosistema | Branding | Afiliado | Internacional |

---

## Módulo 2 — Mapa de Marcos de Receita

**Como usar:** identificar o marco de receita alvo → ler o caminho correspondente ao ticket e produto → extrair o número mágico de operações necessárias → conectar à plataforma e funil adequados.

### Marco R$10.000/mês

O primeiro marco de prova. Sinal de que existe demanda real.

**Caminho A — Produto de ticket baixo (R$97–R$197):**
```
R$97  × 104 vendas/mês  = R$10.088  →  ~3,5 vendas/dia
R$147 × 68 vendas/mês   = R$9.996   →  ~2,3 vendas/dia
R$197 × 51 vendas/mês   = R$10.047  →  ~1,7 vendas/dia
```
**Realidade:** com taxa de conversão de 1–3%, você precisa de 1.700–5.200 pessoas expostas à oferta por mês. Em orgânico, é possível com audiência de 5k+ engajados. Em tráfego pago com CPL de R$3–5, investe R$5–15k para gerar leads.

**Plataforma:** Cakto (PIX zero maximiza margem em ticket baixo).
**Funil:** ManyChat → link direto → PIX (Módulo 3, Funil A).

---

**Caminho B — Produto de ticket médio (R$497–R$997):**
```
R$497  × 21 vendas/mês = R$10.437  →  menos de 1 venda/dia
R$997  × 11 vendas/mês = R$10.967  →  3 vendas/semana
```
**Realidade:** 21 vendas/mês com taxa de conversão de 2% = 1.050 leads qualificados/mês. Em orgânico com audiência ativa, alcançável em 3–6 meses de consistência.

**Plataforma:** Hotmart (se usar afiliados) ou Cakto (se funil próprio e quer margem em PIX).
**Funil:** sequência de email + WhatsApp + campanha de 5–7 dias.

---

**Caminho C — Produto de ticket alto (R$1.997–R$3.997):**
```
R$1.997 × 5 vendas/mês  = R$9.985   →  5 novos clientes
R$3.997 × 3 vendas/mês  = R$11.991  →  3 novos clientes
```
**Realidade:** 3–5 vendas por mês são possíveis sem tráfego pago — por indicação, conteúdo de autoridade, prospecção ativa 1:1.

**Plataforma:** Perfect Pay ou Hotmart + venda consultiva.
**Funil:** conversa → diagnóstico → proposta → PIX/parcelado.

---

### Marco R$30.000/mês

O marco de viabilidade — negócio que se sustenta e gera margem para reinvestir.

**Caminho A — Ticket baixo × volume:**
Exige sistema: tráfego pago + funil automatizado + afiliados.
```
R$197 × 152 vendas/mês = R$29.944
→ ~5 vendas/dia
→ Investe ~R$8–15k em tráfego para gerar leads (ROAS 2–3x)
```
**Pré-requisito:** PMF confirmado. Funil testado e convertendo manualmente. Prova social robusta. Só então escalar com tráfego pago.

---

**Caminho B — Ticket médio × consistência:**
```
R$997 × 30 vendas/mês = R$29.910
→ 1 venda/dia com sistema semi-automatizado
→ Lista de 3.000+ leads qualificados + lançamento mensal leve
```
**Estratégia:** combinar perpétuo (funil sempre ativo) + lançamentos pontuais (picos de receita).

---

**Caminho C — Ticket alto × relacionamento:**
```
R$2.997 × 10 mentoriados = R$29.970
→ Mentoria de grupo: 10 pessoas × R$2.997
→ Indicação + conteúdo de autoridade + prospecção cirúrgica
```
**Vantagem:** sem tráfego pago, sem afiliado, sem automação complexa. Puro relacionamento e resultado.

---

**Caminho D — Esteira combinada (o mais sustentável):**
```
Isca gratuita → Entrada (R$197) × 50 = R$9.850
              → Core (R$997)   × 12 = R$11.964
              → Premium (R$2.997) × 3 = R$8.991
                                    TOTAL = R$30.805
```
A esteira distribui o risco — nenhum produto precisa carregar sozinho o peso da meta.

---

### Marco R$100.000/mês

O marco de escala — exige sistema completo: produto, funil, tráfego, afiliados ou equipe.

**Quatro arquiteturas possíveis:**

```
ARQUITETURA 1 — VOLUME BAIXO TICKET
R$197 × 508 vendas/mês = R$100.076
→ Funil automatizado + afiliados + tráfego escalado
→ Requer estrutura: gestor de tráfego, editor, CS

ARQUITETURA 2 — PROGRAMA PREMIUM ESCALADO
R$2.997 × 34 mentoriados = R$101.898
→ Mentoria em grupo com 4 turmas/ano + waiting list
→ Solo viável com sistema de entrega eficiente

ARQUITETURA 3 — RECORRÊNCIA
R$197/mês × 508 assinantes = R$100.076/mês
→ Comunidade ou produto de acesso contínuo
→ Exige retenção: churn < 5%/mês para não encolher

ARQUITETURA 4 — ESTEIRA COMPLETA
Isca → Entrada (R$297) × 150 = R$44.550
     → Core (R$1.497) × 25  = R$37.425
     → Premium (R$4.997) × 4 = R$19.988
                            TOTAL = R$101.963
```

**Verdade do R$100k:** nenhuma das arquiteturas acima funciona sem:
- PMF confirmado (produto que alunos recomendam)
- Pelo menos 1 canal de aquisição funcionando de forma previsível
- Margem para reinvestir (≥ 30% para tráfego ou afiliados)
- Processo de entrega que não depende 100% do fundador

---

### Calculadora de Marco — Fórmula Reversa

Para qualquer meta de receita:

```
META MENSAL ÷ TICKET = VENDAS NECESSÁRIAS
VENDAS NECESSÁRIAS ÷ TAXA DE CONVERSÃO (%) = LEADS NECESSÁRIOS

Exemplo:
Meta: R$20.000 / Ticket: R$997 / Conversão: 2%
→ R$20.000 ÷ R$997 = 20 vendas
→ 20 ÷ 0,02 = 1.000 leads qualificados necessários/mês
```

**Taxas de referência para conversão:**
- Lista de email bem nutrida: 1–5%
- WhatsApp aquecido (leads próprios): 3–15%
- Tráfego frio → oferta direta: 0,5–3%
- Audiência engajada → oferta alinhada: 2–8%
- Prospecção ativa 1:1 (leads quentes): 10–30%

---

## Módulo 3 — Arquitetura de Funis Curtos

**Princípio:** quanto menor o ticket, mais curto deve ser o funil. Cada clique extra é atrito. Cada campo a mais é desistência.

### Funil A — PIX Direto (ManyChat)

**Ticket ideal:** R$27–R$197
**Tempo médio de decisão:** minutos
**Onde usar:** lives, stories com link, post com CTA para DM

```
GATILHO (palavra-chave na DM / comentário)
    ↓
MENSAGEM AUTOMÁTICA (ManyChat)
  "Oi! Aqui está o link com os detalhes e o PIX direto:"
    ↓
LINK PARA CHECKOUT (Cakto — PIX zero)
    ↓
PIX GERADO → CONFIRMAÇÃO AUTOMÁTICA → ENTREGA
```

**Configuração ManyChat:**
1. Palavra-gatilho na DM (ex: "QUERO", "LINK", "PIX")
2. Primeira mensagem: entrega o link + urgência suave
3. Follow-up automático em 30 min (opcional): "Ainda está disponível por X horas"
4. Follow-up em 24h: "Última chance"

**Elementos que aumentam conversão:**
- Mostrar o QR Code do PIX na própria mensagem (quando possível via API WhatsApp)
- Timer de oferta (genuíno — não timer eterno)
- Valor do desconto expresso em reais, não porcentagem ("você economiza R$50" > "50% off")

---

### Funil B — Sequência WhatsApp (3 mensagens)

**Ticket ideal:** R$197–R$997
**Tempo médio de decisão:** horas a 2 dias
**Onde usar:** pós-lead magnet, pós-evento gratuito, pós-webinar

```
LEAD CAPTURADO (via landing page, bio link, DM)
    ↓
MENSAGEM 1 (imediata) — Entrega da isca + Apresentação
  "Seja bem-vindo(a)! Seu [lead magnet] está aqui: [link]
   Sou [Nome]. Ajudo [público] a [resultado] em [prazo]."
    ↓
MENSAGEM 2 (24h depois) — Conteúdo de valor + Prova social
  "Ontem muitas pessoas me pediram [dúvida comum].
   A resposta curta é: [insight valioso].
   [Nome do aluno] conseguiu [resultado] usando exatamente isso."
    ↓
MENSAGEM 3 (48h depois) — Oferta + Urgência
  "Abri [X] vagas para [produto]. O acesso fecha [data].
   Link para garantir: [checkout]"
```

**Regra:** nunca mandar link de vendas na primeira mensagem. Valor primeiro, oferta depois.

---

### Funil C — Email de 5 dias (Aquecimento → Venda)

**Ticket ideal:** R$297–R$1.997
**Tempo médio de decisão:** 3–7 dias
**Onde usar:** lista de email, pós-webinar, pós-challenge

```
DIA 1 — Boas-vindas + Promessa da sequência
  Subject: "O que você vai receber nos próximos dias"
  Body: Apresentação pessoal + resultado que vai entregar

DIA 2 — Conteúdo de maior valor (ensina algo real)
  Subject: "[Resultado específico] em [prazo]"
  Body: Framework ou insight tangível + prova social

DIA 3 — Problema aprofundado (nomeia a dor com precisão)
  Subject: "Por que [solução comum] não funciona"
  Body: Diagnóstico do problema + por que outras soluções falham

DIA 4 — Apresentação da solução (soft open)
  Subject: "Como resolvi isso com [método]"
  Body: Apresentação do produto de forma narrativa + depoimento

DIA 5 — Oferta + Urgência real
  Subject: "[Último dia] [produto] — Acesso encerra hoje"
  Body: Oferta completa + garantia + urgência genuína + CTA claro
```

**KPIs para monitorar:**
- Abertura: benchmark email marketing BR = 20–35%
- Click-through: benchmark = 2–5%
- Conversão email → venda: benchmark = 0,5–3%

---

### Funil D — Venda Consultiva 1:1

**Ticket ideal:** R$1.997–R$10.000+
**Tempo médio de decisão:** 1–2 semanas
**Onde usar:** produtos premium, mentoria individual, serviço high-touch

```
CONTEÚDO DE AUTORIDADE (orgânico — cria a percepção)
    ↓
LEAD ENTRA EM CONTATO (DM, email, formulário de aplicação)
    ↓
PRÉ-QUALIFICAÇÃO (formulário de 3–5 perguntas)
  → Filtra quem tem fit real
  → Aumenta percepção de exclusividade
    ↓
CONVERSA DE DIAGNÓSTICO (30–45 min, gratuita)
  → Entender o problema do lead com precisão
  → Apresentar a solução com dados do próprio lead
    ↓
PROPOSTA PERSONALIZADA
  → Enviada em até 24h após a conversa
  → Inclui: resultado esperado, método, investimento, garantia
    ↓
FOLLOW-UP (se necessário) + FECHAMENTO
  → 1 follow-up em 48h: "Ficou alguma dúvida sobre a proposta?"
  → Decisão: sim → contrato/PIX | não → nutrir para próximo ciclo
```

**O que NÃO fazer na venda consultiva:**
- Enviar a proposta sem a conversa de diagnóstico
- Falar do produto antes de entender o problema do lead
- Fazer follow-up agressivo (> 2 contatos após a proposta)
- Dar desconto imediatamente — reduz percepção de valor

---

### Funil E — Lançamento Relâmpago (48–72h)

**Ticket ideal:** qualquer (funciona melhor com R$197–R$997)
**Onde usar:** reativação de lista, aproveitamento de momentum (viral, mídias), bônus com validade real

```
HORA 0 — Abertura (email + stories + post)
  → Anunciar que as vagas abriram / oferta liberada
  → Contagem regressiva real (48 ou 72 horas)

HORA 6 — Prova social (histórias de alunos)
  → Stories com resultados reais
  → Responder dúvidas ao vivo

HORA 24 — Meio da janela (lembrete + conteúdo)
  → "Metade das vagas já foram"
  → Post ou vídeo com argumento de autoridade

HORA 36 — Urgência escalada
  → "Últimas X vagas"
  → Email de recuperação de carrinho abandonado

HORA 48 — Fechamento
  → "Encerra em X horas"
  → Live de perguntas e respostas (opcional — muito eficiente)
  → Checkout fecha (honrar o prazo é obrigatório)
```

**Requisito:** urgência genuína. Fechar e reabrir imediatamente destrói a credibilidade para todos os lançamentos futuros.

---

## Módulo 4 — Matriz de Decisão Comercial

Dado o produto, o ticket e a fase — qual combinação de plataforma + funil faz mais sentido?

### Diagnóstico de Entrada

Antes de recomendar, coletar:
1. **Produto:** o que é, como é entregue (curso, mentoria, comunidade, serviço)
2. **Ticket:** valor de venda
3. **Fase:** 1 (validação) / 2 (crescimento) / 3 (escala) / 4 (otimização)
4. **Canal principal:** onde está a audiência hoje (IG, YT, TikTok, LinkedIn, email, WhatsApp)
5. **Meta mensal:** R$ bruto desejado

### Mapa de Decisão

```
FASE 1 (< 50 clientes) + qualquer ticket
→ Plataforma: Cakto ou Hotmart (básico — sem automação)
→ Funil: MANUAL — DM 1:1, WhatsApp direto, sem ManyChat
→ Prioridade: entender por que compram, não otimizar o funil
→ Meta realista: R$5–15k/mês até validar

FASE 2 (50–500 clientes) + ticket baixo/médio
→ Plataforma: Cakto (PIX) se ticket < R$500, Hotmart se afiliados
→ Funil: ManyChat (Funil A) ou sequência WhatsApp (Funil B)
→ Prioridade: consistência de geração de leads + conversão
→ Meta realista: R$15–50k/mês

FASE 2 + ticket alto (R$2k+)
→ Plataforma: Perfect Pay ou Hotmart
→ Funil: Consultivo (Funil D) — sem automação de vendas
→ Prioridade: qualidade do cliente, não volume
→ Meta realista: R$20–60k/mês

FASE 3 (500+ clientes) + qualquer ticket
→ Plataforma: Hotmart (afiliados) ou Cakto (PIX volume)
→ Funil: Email de 5 dias (Funil C) + perpétuo automatizado + afiliados
→ Prioridade: ROAS, LTV, churn rate
→ Meta realista: R$50–200k/mês

FASE 4 (otimização de margem)
→ Plataforma: revisar — plataforma atual pode ser trocada por margem
→ Funil: simplificar — remover etapas que não convertem
→ Prioridade: margem líquida, não faturamento bruto
```

---

### Combinações por Tipo de Produto

| Produto | Ticket Sugerido | Plataforma | Funil | Afiliados? |
|---|---|---|---|---|
| Mini-curso / workshop | R$47–R$197 | Cakto | A (ManyChat) | Sim (Braip) |
| Curso completo | R$297–R$997 | Hotmart | B + C | Sim |
| Programa com comunidade | R$997–R$1.997 | Hotmart / Cakto | C + E (relâmpago) | Seletivo |
| Mentoria grupo (mensal) | R$497–R$997/mês | Hotmart ou Ticto | D + sequência email | Não |
| Mentoria individual | R$2.997–R$9.997 | Perfect Pay ou direto | D (consultivo) | Não |
| Conteúdo recorrente | R$47–R$197/mês | Ticto / Hotmart | B | Sim |
| Serviço (agência/consultoria) | Variável | Contrato + PIX/Stripe | D | Não |

---

### Modelo de Afiliados — Quando e Como

**Quando ativar afiliados:**
- Produto com PMF confirmado (alunos indicam organicamente)
- Prova social robusta (10+ depoimentos com resultado)
- Margem suficiente para pagar comissão (mínimo 30% de margem líquida antes da comissão)
- Materiais de afiliado prontos (copy, criativo, emails)

**Comissão por tipo de produto:**

| Tipo | Comissão típica | Raciocínio |
|---|---|---|
| Curso baixo ticket | 30–50% | Alta comissão compensa ticket baixo para o afiliado |
| Curso médio ticket | 20–40% | Equilíbrio margem/atratividade |
| Mentoria | 10–20% | Ticket alto — 20% já é muito para o afiliado |
| Recorrência | 20–30% por mês recorrente | Incentiva retenção do afiliado |

**Seleção de afiliados — não aceitar todos:**
1. Afiliados que já têm sua audiência como público
2. Afiliados que conseguem mostrar como divulgariam (não os que pedem materiais prontos e somem)
3. Microafiliados comprometidos > macroafiliados desengajados

---

### Co-produção — Quando Estruturar

**Co-produção** = parceria onde um sócio entra com audiência/distribuição e o outro com produto/método.

**Quando faz sentido:**
- Expert tem produto sólido mas audiência pequena
- Parceiro tem audiência alinhada mas não tem produto para vender
- Ambos têm produto — co-criação de produto conjunto

**Modelo de split:**

| Quem entra com o quê | Split típico |
|---|---|
| Expert com produto + parceiro com audiência enorme | 20–30% expert / 70–80% parceiro |
| Ambos contribuem equilibradamente | 50/50 |
| Expert com produto + parceiro com audiência média | 40–50% expert / 50–60% parceiro |

**Documentar sempre:** co-produção sem contrato é sociedade sem registro. Ver `05-ASSETS/referencias/LEGAL-AUXILIAR.md` para modelo de contrato de co-produção.

---

## Módulo 5 — Output da Máquina de Receita

```
MÁQUINA DE RECEITA — [EXPERT / PRODUTO]

PRODUTO: [nome + formato + entregável]
TICKET ATUAL / RECOMENDADO: [R$X]
FASE DO NEGÓCIO: [1 / 2 / 3 / 4]
META DE RECEITA: [R$X/mês]

PLATAFORMA RECOMENDADA: [Nome + justificativa]
  Por que não [plataforma alternativa]: [razão]

MAPA DE MARCO:
  Para atingir R$X/mês com ticket R$Y:
  → Vendas necessárias: Z vendas
  → Leads necessários (taxa X%): N leads
  → Origem dos leads: [canal A + canal B]
  → Tempo estimado com consistência: [N meses]

FUNIL RECOMENDADO: [Tipo + nome do módulo]
  Fluxo:
  [passo 1 → passo 2 → passo 3]
  Ferramentas: [ManyChat / ActiveCampaign / Typebot]

AFILIADOS / CO-PRODUÇÃO:
  [Sim / Não — justificativa]
  Comissão sugerida: [X%]

PRÓXIMOS 3 MOVIMENTOS:
  1. [ação imediata com prazo]
  2. [ação de crescimento — próximo mês]
  3. [alavanca a ativar na Fase seguinte]

RISCO PRINCIPAL: [O que pode travar esse caminho + como mitigar]
```

---

## Regras da Máquina de Receita

1. **Ticket primeiro** — toda recomendação começa pelo ticket. Ticket errado invalida plataforma e funil
2. **Cakto para PIX** — qualquer funil de impulso com ticket < R$500 passa por Cakto para maximizar margem
3. **Funil manual antes de automatizado** — nunca recomendar ManyChat ou sequência automatizada para produto sem vendas manuais confirmadas
4. **Afiliados = amplificador, não fundação** — afiliados escalam o que já funciona; não salvam produto sem PMF
5. **Marco de margem real** — sempre apresentar receita após taxas (plataforma + gateway + imposto MEI/ME + tráfego)
6. **Co-produção = contrato** — qualquer split de receita com terceiro requer documento formal. Redirecionar para LEGAL-AUXILIAR.md
7. **Um funil por vez** — não recomendar múltiplos funis simultâneos para quem está em Fase 1 ou 2

---

## Referências Cruzadas

- `portal-da-escala/SKILL.md` — diagnóstico de fase e métricas (CAC, LTV, ROAS) alimentam as decisões da Máquina de Receita
- `forja-de-oferta/SKILL.md` — a oferta (stack, garantia, preço) é o produto que o funil vende
- `mapa-de-campanha/SKILL.md` — a campanha é o contexto que ativa o funil
- `frameworks-anuncios/manychat-ativacao.md` — configuração técnica do funil ManyChat (Funil A e B)
- `prospeccao-ativa/SKILL.md` — venda 1:1 / prospecção direta (Funil D)
- `00-FUNDACAO/REFERENCIAS-PM-PMM.md` — JTBD (por que compram), Van Westendorp (precificação), PLG (isca como produto), Bullseye (canal)
- `05-ASSETS/referencias/LEGAL-AUXILIAR.md` — contratos de co-produção e afiliados

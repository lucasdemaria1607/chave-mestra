# REFERENCIAS PM + PMM — Fundação Transversal

Documento de referência permanente. Não é um output — é a base que todos os plugins consultam quando precisam de frameworks de produto e marketing de produto. Organizado para operação: cada framework tem definição, sinal de uso, e onde entra no sistema CM.

**Uso:** qualquer plugin pode referenciar este documento. Não ativar como skill — ler como contexto de apoio.

---

## PARTE I — PRODUCT MANAGEMENT (PM)

### 1. Jobs to Be Done (JTBD)

**Origem:** Clayton Christensen (teoria da inovação), refinado por Bob Moesta, Alan Klement e Tony Ulwick (Outcome-Driven Innovation).

**Tese central:** pessoas não compram produtos — elas os "contratam" para realizar um progresso em uma situação específica. O produto certo é o que faz o job melhor que a alternativa atual.

**Os 4 Forças do Progresso (Bob Moesta):**
```
PUSH (empurra para sair do atual)    PULL (atrai para o novo)
  ↓ problemas com a solução atual       ↓ promessa do produto
  ↓ frustração, limitação, ineficiência  ↓ visão de vida melhor

ANSIEDADE (freia a compra)           INÉRCIA (mantém no atual)
  ↓ medo de errar, não funcionar        ↓ "sempre fiz assim"
  ↓ aprendizado, complexidade           ↓ hábito, conforto, esforço de mudança
```

A venda acontece quando PUSH + PULL > ANSIEDADE + INÉRCIA.

**Switch Interview — 5 momentos de diagnóstico:**
1. **First thought** — Quando você teve o primeiro pensamento de que precisava mudar?
2. **Event** — O que aconteceu que fez você agir?
3. **Looking** — Como você procurou opções?
4. **Decision** — O que te fez escolher este produto específico?
5. **Use** — O que aconteceu quando você começou a usar?

**Functional / Social / Emotional jobs:**
- **Funcional** — o progresso tangível que o cliente quer fazer ("quero aprender a editar vídeos")
- **Social** — como ele quer ser percebido ao fazer isso ("quero ser visto como criativo")
- **Emocional** — como ele quer se sentir ("quero me sentir confiante no palco")

**Opportunity Scoring (Tony Ulwick — ODI):**
```
Importância do outcome  +  (Importância − Satisfação atual)  =  Prioridade
```
Outcomes com importância alta e satisfação baixa = maiores oportunidades.

**Onde entra no CM:**
- Cartógrafo → `forja-da-persona`: a pergunta "o que esse cliente está tentando realizar?" substitui a análise demográfica superficial
- Alquimista → `forja-de-oferta`: o stack de bônus resolve jobs periféricos; a garantia reduz ansiedade; o lead da oferta nomeia o job funcional
- Bardo → `pergaminho-de-copy`: PUSH é o problema que o copy nomeia; PULL é a promessa; a objeção é ansiedade + inércia

---

### 2. Opportunity Solution Tree (OST)

**Origem:** Teresa Torres — *Continuous Discovery Habits* (2021).

**Estrutura:**
```
OUTCOME DESEJADO (negócio)
    ↓
OPORTUNIDADES (dores, desejos, jobs dos clientes)
    ↓
SOLUÇÕES (ideias de produto, features, conteúdo)
    ↓
EXPERIMENTOS (testes rápidos para validar cada solução)
```

**Como usar:**
1. Definir 1 outcome de negócio para o ciclo (ex: "aumentar taxa de conclusão do curso")
2. Mapear oportunidades via entrevistas com clientes reais (não pesquisas)
3. Para cada oportunidade, gerar múltiplas soluções — sem se apaixonar pela primeira
4. Testar a solução mais promissora com o menor experimento possível

**Princípio central:** a maioria dos times vai diretamente de "problema" para "solução" sem mapear o espaço de oportunidades. A OST força a explorar o espaço antes de converger.

**Onde entra no CM:**
- Alquimista → `portal-da-escala`: mapear oportunidades de crescimento por fase — qual dor ainda não resolvida pode virar o próximo produto?
- Chaveiro → `tesouro-dos-erros`: cada erro documentado é uma oportunidade mal explorada

---

### 3. Priorização: RICE / ICE / Kano

#### RICE Score (Intercom)

```
RICE = (Reach × Impact × Confidence) / Effort
```

| Variável | O que é | Como medir |
|---|---|---|
| **Reach** | Quantas pessoas afeta por período | N° de usuários/leads por mês |
| **Impact** | Quanto muda a métrica-alvo | Escala 0.25 / 0.5 / 1 / 2 / 3 |
| **Confidence** | Certeza sobre as estimativas | % (100% = certeza / 50% = palpite) |
| **Effort** | Quanto trabalho para executar | Semanas-pessoa |

**Quando usar:** priorizar entre várias iniciativas de produto ou conteúdo concorrentes.

#### ICE Score (Sean Ellis)

```
ICE = Impact × Confidence × Ease (1–10 cada)
```

Mais simples que RICE. Ideal para decisões rápidas de growth. Foco em velocidade de aprendizado.

#### Kano Model (Noriaki Kano)

```
MUST-HAVE (Basic)     → ausência = insatisfação; presença = neutro
PERFORMANCE (Linear)  → mais = mais satisfeito, menos = menos satisfeito
DELIGHTER (Exciting)  → inesperado; ausência = neutro; presença = encantamento
INDIFFERENTE          → presença ou ausência não muda nada
REVERSO               → alguns clientes preferem a ausência
```

**Método:** perguntar para clientes "como você se sentiria SE tivesse X?" e "como você se sentiria SE NÃO tivesse X?". Cruzar as respostas para classificar.

**Onde entra no CM:**
- Arauto → `criar-produto-esteira`: priorizar qual feature ou bônus incluir na oferta (o que é must-have vs. delighter)
- Alquimista → `forja-de-oferta`: a equação de valor de Hormozi tem a mesma lógica — delighters aumentam valor percebido sem custo proporcional

---

### 4. North Star Metric (NSM)

**Origem:** popularizado pela Amplitude; também chamado de OMTM (One Metric That Matters).

**Definição:** a única métrica que melhor captura o valor que o produto entrega aos clientes E prediz o crescimento sustentável do negócio.

**Teste do NSM:**
1. Representa valor entregue ao cliente — não só receita
2. Quando cresce, o negócio cresce junto
3. É acionável — ações específicas podem movê-la
4. É compreensível — qualquer pessoa da equipe entende
5. É lagging (mede resultado) suficiente para ser confiável, mas leading (prediz o futuro) suficiente para informar decisão

**Exemplos por modelo de negócio:**

| Modelo | NSM candidato |
|---|---|
| Curso digital | N° de alunos que concluíram E reportaram resultado |
| Comunidade | Membros ativos semanais (não total cadastrado) |
| Mentoria | N° de mentorados que atingiram meta definida no onboarding |
| Conteúdo | N° de leads qualificados por semana (não views) |
| Agência/serviço | N° de clientes com NPS ≥ 8 ao final do projeto |

**Armadilhas:**
- Vanity metrics como NSM: seguidores, views, downloads (não conectam a valor real)
- Métricas de atividade: emails enviados, reuniões feitas (não medem outcome)
- Revenue como NSM: é consequência, não causa — mover só receita sem entender por quê é perigoso

**Input Tree — o que move a NSM:**
```
NSM ← Fator 1 (ativação)
     ← Fator 2 (retenção)
     ← Fator 3 (aquisição de novo perfil)
     ← Fator 4 (monetização)
```

**Onde entra no CM:**
- Alquimista → `portal-da-escala` Módulo 4 (Painel de Métricas): a NSM informa qual dashboard priorizar por fase
- Arauto → `metricas-produto`: o dashboard de campanha tem NSM + input metrics

---

### 5. AARRR — Pirate Metrics

**Origem:** Dave McClure (500 Startups) — framework de funil de crescimento.

```
ACQUISITION   → como as pessoas chegam até você
ACTIVATION    → quando têm a primeira experiência de valor
RETENTION     → voltam? ficam? usam de novo?
REVENUE       → como e quando pagam
REFERRAL      → indicam? geram mais pessoas?
```

**Contexto BR para expert digital:**

| Etapa | O que medir | Canais típicos |
|---|---|---|
| Acquisition | Leads por canal / CPL | Orgânico (IG, YT, TikTok), Tráfego pago, Indicação |
| Activation | % que abre o produto / faz ação 1 | Onboarding, aula 1, boas-vindas |
| Retention | % que volta na semana 2 e 4 | Email/WhatsApp, comunidade, novo conteúdo |
| Revenue | Taxa de conversão, ticket médio, LTV | Oferta, upsell, recorrência |
| Referral | % de clientes que indicaram | Afiliados, programa de indicação, NPS promotores |

**Versão expandida — RAARRR (com "Reach" antes):** visibilidade antes de aquisição — para criadores de conteúdo que dependem de alcance orgânico.

**Armadilha:** otimizar Acquisition sem Retention = balde furado. Custo de re-aquisição sempre sobe.

**Onde entra no CM:**
- Alquimista → `portal-da-escala`: diagnóstico de fase usa o funil AARRR implicitamente — Fase 1 = Activation, Fase 2 = Acquisition + Revenue, Fase 3 = Retention + Referral
- Arauto → `mapa-de-campanha`: cada tipo de campanha (Meteórico, Desafio, Interno) opera em diferentes etapas do funil

---

### 6. Product-Market Fit (PMF)

**Origem:** Marc Andreessen (cunhou o termo), Sean Ellis (operacionalizou o teste), Steve Blank + Eric Ries (Lean Startup).

**Definição:** o produto satisfaz uma demanda forte de um mercado específico ao ponto em que o mercado puxa o produto.

**Teste Sean Ellis:**
> "Como você se sentiria se não pudesse mais usar este produto?"
> - Muito desapontado
> - Um pouco desapontado
> - Não me importaria
> - Não uso mais

**Threshold:** ≥ 40% respondendo "muito desapontado" = PMF confirmado.

**Outros sinais de PMF:**
- NPS ≥ 50
- Churn mensal < 3%
- >30% de novos clientes vieram por indicação orgânica
- Usuários criam workarounds para continuar usando
- Clientes pedem "quando abre de novo?" sem você anunciar

**Anti-PMF — sinais de que NÃO tem:**
- Alta taxa de reembolso (>5%)
- Alunos não concluem (completion rate < 20%)
- Ninguém indica sem incentivo
- Você precisa empurrar para cada venda
- Clientes explicam o produto diferente de como você descreve

**O erro mais comum:** confundir "consigo vender" com PMF. Vendas são validação de Acquisition. PMF é validação de que o produto transforma de forma que as pessoas valorizam e recomendam.

**PMF por tipo de produto CM:**

| Produto | Sinal PMF específico |
|---|---|
| Curso | Alunos concluem E têm resultado documentado E indicam |
| Mentoria | Mentorados renovam / indicam sem você pedir |
| Comunidade | Membros se ajudam entre si sem depender do fundador |
| Conteúdo gratuito | Pessoas compartilham sem tag, comentam "já salvei esse 3x" |

**Onde entra no CM:**
- Alquimista → `portal-da-escala` Step 3 do Value Creation Loop: a transição Fase 1 → Fase 2 depende de PMF confirmado
- Chaveiro → `tesouro-dos-erros`: erros de PMF são os mais caros — documentar para não repetir em próximo produto

---

### 7. Shape Up

**Origem:** Ryan Singer / Basecamp — *Shape Up* (2019), disponível gratuitamente em basecamp.com/shapeup.

**Filosofia:** times pequenos, ciclos de 6 semanas, sem backlogs infinitos, sem estimativas falsas.

**Conceitos centrais:**

**Appetite (apetite):** quanto tempo *queremos* gastar — não quanto tempo vai levar. Força a decisão de escopo antes de começar.
- Small batch: 1–2 semanas
- Big batch: 6 semanas (1 ciclo completo)

**Pitch:** documento de forma — não especificação técnica. Define:
1. Problema (por que isso importa)
2. Appetite (quanto tempo vale)
3. Solução (ideia, não blueprint)
4. Rabbit holes (o que evitar)
5. No-gos (o que está fora do escopo)

**Circuit Breaker:** se o trabalho não encaixou no ciclo, não se prorrroga automaticamente — reavalia-se se vale continuar.

**Hill Chart:** forma de visualizar progresso — lado esquerdo = descoberta/incerteza; lado direito = execução/clareza.

**Cooldown:** 2 semanas entre ciclos para limpeza, bugs, decisões do próximo ciclo.

**Aplicação para criador solo:**
- Ciclo de 6 semanas = 1 campanha ou 1 produto novo
- Appetite = "quero lançar isso em 3 semanas" → define o escopo que cabe em 3 semanas
- Pitch = briefing de campanha (Arauto → mapa-de-campanha)
- Circuit breaker = se o lançamento não saiu no ciclo planejado → reavalia, não empurra para frente

**Onde entra no CM:**
- Chaveiro → `ritual-da-chave`: a Lua Cheia (mensal) e a Forja Semanal usam a lógica de ciclos com escopo definido
- Arauto → `mapa-de-campanha`: o cronograma de campanha tem appetite implícito — o que cabe em cada modalidade de lançamento

---

### 8. OKRs

**Origem:** Andy Grove (Intel) → John Doerr (*Measure What Matters*) → Google/Silicon Valley.

**Estrutura:**
```
OBJECTIVE (qualitativo, inspirador, direcionador)
  └── Key Result 1 (quantitativo, mensurável, com prazo)
  └── Key Result 2 (quantitativo, mensurável, com prazo)
  └── Key Result 3 (quantitativo, mensurável, com prazo)
```

**Regras:**
- O: deve ser motivador, não ser um KR disfarçado
- KRs: 2–5 por objetivo; mensuráveis (número, não ação); output, não input
- Ciclo: trimestral (empresa) + semanal (check-in de progresso)
- Grading: 0.0–1.0; atingir 0.7 = sucesso; 1.0 sempre = objetivo fácil demais

**Committed vs Aspirational:**
- **Committed** — atingir 100% é esperado; deixar de atingir exige explicação
- **Aspirational** — 70% já é vitória; existe para puxar esforço além do confortável

**OKR para expert digital solo (trimestral):**
```
Objective: Estabelecer autoridade demonstrável no nicho X

KR1: Publicar 48 peças de conteúdo (16/mês) com média ≥ 500 engajamentos
KR2: Atingir 30 clientes no produto core com NPS ≥ 8
KR3: Gerar R$25.000 de receita com margem ≥ 50%
```

**Onde entra no CM:**
- Chaveiro → `ritual-da-chave`: a Lua Cheia (mensal) é o check-in natural dos OKRs
- Alquimista → `portal-da-escala`: os KRs de negócio informam quais métricas do Módulo 4 priorizar

---

### 9. Product-Led Growth (PLG)

**Origem:** OpenView Venture Partners — Blake Bartlett cunhou o termo em 2016. Expandido por Wes Bush (*Product-Led Growth*, 2019).

**Tese:** o produto é o principal canal de aquisição, retenção e expansão de receita — não a força de vendas ou marketing.

**Modelos PLG:**

| Modelo | Como funciona | Exemplo |
|---|---|---|
| **Freemium** | Versão gratuita cria hábito; features avançadas são pagas | Spotify, Notion |
| **Free Trial** | Produto completo grátis por período limitado | Netflix (trial), SaaS |
| **Usage-based** | Paga pelo que usa — crescimento vinculado ao valor entregue | Twilio, AWS |
| **Community-led** | Comunidade cria conteúdo, suporte e aquisição | GitHub, Reddit |

**PLG para expert digital:**
- **Isca gratuita como produto** — não como brinde, mas como produto real que entrega valor tangível e cria dependência positiva
- **Conteúdo como PLG** — cada vídeo/post é uma amostra do produto; quem "usa" o conteúdo e tem resultado quer comprar mais
- **Comunidade como PLG** — membros da comunidade gratuita viram clientes pagantes e indicam mais membros

**Flywheel PLG:**
```
CONTEÚDO GRATUITO → Audiência → Confiança → Conversão → Cliente com resultado
        ↑                                                         ↓
        └─────────────── Indicação + Prova Social ────────────────┘
```

**Onde entra no CM:**
- Alquimista → `maquina-de-receita`: PLG informa a lógica da isca e da entrada da esteira
- Cartógrafo → `forja-do-universo`: o worldbuilding cria o universo que faz o conteúdo gratuito funcionar como PLG

---

## PARTE II — PRODUCT MARKETING MANAGEMENT (PMM)

### 10. Obviously Awesome — April Dunford

**Obra:** *Obviously Awesome: How to Nail Product Positioning So Customers Get It, Buy It, Love It* (2019).

**Problema que resolve:** a maioria dos produtos é "obviamente ótimo para quem entende, mas incompreensível para quem não entende". O posicionamento correto resolve isso — torna o valor instantaneamente óbvio.

**Os 5 Componentes do Posicionamento (Dunford):**

```
1. ALTERNATIVAS COMPETITIVAS
   "Se seu produto não existisse, o que o cliente faria?"
   → Define o quadro de referência real — não a categoria que você acha que é

2. ATRIBUTOS ÚNICOS
   "O que você tem que os concorrentes não têm / não conseguem facilmente copiar?"
   → Features, metodologia, acesso, personalidade, comunidade

3. VALUE PARA O CLIENTE
   "Por que esses atributos únicos importam para o cliente?"
   → O que muda na vida ou no negócio deles ao ter isso

4. MERCADO-ALVO
   "Quem se importa profundamente com esses valores?"
   → Não o maior mercado possível — o mercado para quem o valor é máximo

5. CATEGORIA DE MERCADO
   "Qual é o contexto que faz o valor ser entendido instantaneamente?"
   → A tag mental que ativa o quadro correto de referência
```

**Processo de posicionamento (Dunford 10-step):**
1. Entender as alternativas competitivas (como o cliente realmente se orienta)
2. Listar atributos únicos diferenciadores
3. Mapear o valor de cada atributo para o cliente
4. Identificar o segmento que mais valoriza esses atributos
5. Encontrar a categoria de mercado que maximiza o entendimento do valor
6. Testar o posicionamento — ele deve fazer o mercado-alvo dizer "isso foi feito para mim"

**Onde entra no CM:**
- Cartógrafo → `forja-do-universo`: o DNA de marca usa a lógica Dunford para posicionamento
- Alquimista → `forja-de-oferta`: a proposta de valor da oferta é o atributo único → valor para o cliente
- Arauto → `mapa-de-campanha`: o ângulo de campanha começa pela alternativa competitiva atual do lead

---

### 11. Crossing the Chasm — Geoffrey Moore

**Obra:** *Crossing the Chasm* (1991/2014) — considerado o livro de go-to-market mais influente de tecnologia.

**Technology Adoption Lifecycle:**

```
INNOVATORS   EARLY ADOPTERS   EARLY MAJORITY   LATE MAJORITY   LAGGARDS
   2.5%           13.5%             34%              34%           16%
   │               │                │                │              │
   └───────────────┴────────────────┴────────────────┴──────────────┘
                          ↑
                       O ABISMO
                  (a maioria não cruza)
```

**O Abismo:** gap entre Early Adopters (aceitam risco, compram visão) e Early Majority (querem referências, provas, solução completa). A maioria das startups e experts morrem aqui.

**Estratégia D-Day — beachhead market:**
- Não tentar conquistar todo o mercado de uma vez
- Identificar 1 segmento específico onde você pode dominar completamente
- Vencer esse segmento → usar como referência para o próximo
- Bowling pin strategy: o primeiro pino derruba todos os outros

**Aplicação para expert digital:**

| Fase | Equivalente em Crossing the Chasm |
|---|---|
| Primeiras 10–30 vendas manuais | Innovators — compram pela relação e crença na visão |
| 50–200 primeiros clientes | Early Adopters — querem estar na frente, aceitam imperfeição |
| Cruzar o abismo | Precisam de provas sociais robustas, completude, previsibilidade |
| Maioria | Compram porque "todo mundo está fazendo" |

**Onde entra no CM:**
- Alquimista → `portal-da-escala`: a transição Fase 1 → Fase 2 é cruzar o abismo — requer prova social documentada, não apenas mais venda manual
- Arauto → `mapa-de-campanha`: o beachhead market informa o ângulo de nicho do Meteórico

---

### 12. Category Design

**Origem:** Al Ramadan, Dave Peterson, Christopher Lochhead, Kevin Maney — *Play Bigger* (2016). Expandido por Lochhead em *Category Pirates* (newsletter).

**Tese central:** as empresas que ganham não competem dentro de categorias existentes — elas criam novas categorias e se tornam a "category queen". A categoria queen captura 76% do valor total da categoria.

**3 Leis da Category Design:**

1. **Se você não define a categoria, o mercado define — e geralmente errado**
2. **Category queens não ganham por ter o melhor produto — ganham por moldar como o mercado pensa sobre o problema**
3. **Timing importa mais que execução — entrar muito cedo é tão letal quanto tarde**

**Lightning Strike:** evento ou momento que define a categoria na mente do mercado. Para experts: um livro, uma palestra viral, um método proprietário com nome, uma pesquisa original.

**POV (Point of View):** o manifesto da categoria — por que o mundo mudou, por que as soluções antigas não funcionam mais, por que existe um novo problema urgente.

**Onde entra no CM:**
- Cartógrafo → `forja-do-universo`: o "DNA de marca" e o "Léxico de Marca" são ferramentas de category design — o vocabulário proprietário cria a categoria na mente do mercado
- Bardo → `cavalo-de-troia`: o conteúdo que "ensina a categoria" educa o mercado para comprar

---

### 13. Message House (Hierarquia de Mensagem)

**Origem:** arquitetura de comunicação corporativa — adaptada por PMMs modernos de B2B e B2C.

**Estrutura:**

```
┌─────────────────────────────────────────┐
│        MENSAGEM PRINCIPAL (teto)        │
│   A promessa central — 1 frase forte    │
└─────────────────────────────────────────┘
          ↓           ↓           ↓
   PILAR 1       PILAR 2       PILAR 3
   (por quê 1)  (por quê 2)  (por quê 3)
       ↓             ↓             ↓
   Prova 1.1    Prova 2.1    Prova 3.1
   Prova 1.2    Prova 2.2    Prova 3.2
```

**Regra de ouro:** a mensagem principal deve ser verdadeira para todos os segmentos. Os pilares podem ser adaptados por segmento.

**Aplicação para expert digital:**

```
MENSAGEM PRINCIPAL:
"Você não precisa de mais seguidores — precisa de um método que converte o que você já tem."

PILAR 1: Clareza de oferta
→ Prova: "Alunos que definem a oferta antes de lançar convertem 3x mais"
→ Prova: Caso do cliente X que dobrou ticket sem mudar audiência

PILAR 2: Conteúdo estratégico (não volume)
→ Prova: Framework de conteúdo que gera 80% do resultado com 20% dos posts
→ Prova: Aluno Y com 2k seguidores faturando R$15k/mês

PILAR 3: Sistema, não sorte
→ Prova: Método replicado por N alunos em diferentes nichos
→ Prova: Resultado documentado com prazo
```

**Onde entra no CM:**
- Alquimista → `pergaminho-de-copy`: o Copy 3x5 e o Método Carga são execuções táticas da Message House
- Bardo → `chavossel`: a estrutura de carrossel segue a lógica pilar → prova → call
- Arauto → `mapa-de-campanha`: o copy de campanha usa a Message House como referência de consistência

---

### 14. GTM Launch Tiers

**Origem:** framework de Product Marketing — adaptado de práticas de lançamento B2B/B2C de empresas como Salesforce, HubSpot, Drift.

**Classificação de lançamentos por impacto e esforço:**

| Tier | Quando usar | Esforço | Ativações |
|---|---|---|---|
| **T1 — Major Launch** | Novo produto, novo tier, mudança de posicionamento | Alto (4–8 semanas) | Email + social + PR + afiliados + evento ao vivo |
| **T2 — Minor Launch** | Nova feature, novo bônus, reativação | Médio (1–2 semanas) | Email + social + comunidade |
| **T3 — Silent Release** | Correção, atualização menor, teste | Baixo (horas–dias) | Aviso interno, sem campanha |

**Critérios para classificar o tier:**

```
É o maior lançamento do semestre? → T1
Tem novo público-alvo ou novo posicionamento? → T1
É uma melhoria dentro do produto existente? → T2
Tem prova social nova relevante? → T2
Menos de 20% da audiência vai se importar? → T3
```

**Launch Readiness Checklist (T1):**
- [ ] Posicionamento validado com amostra da audiência
- [ ] Copy de vendas completa (landing, email, social)
- [ ] Prova social confirmada (depoimentos, resultados, cases)
- [ ] Suporte preparado para volume maior
- [ ] Sequência de email pós-venda pronta
- [ ] Cronograma de conteúdo de aquecimento (4+ semanas)

**Onde entra no CM:**
- Arauto → `mapa-de-campanha`: as modalidades de campanha (Meteórico, Desafio, Interno, etc.) mapeiam diretamente para os tiers — Interno = T1; Meteórico = T2–T3

---

### 15. Bullseye Framework

**Origem:** Gabriel Weinberg & Justin Mares — *Traction: How Any Startup Can Achieve Explosive Customer Growth* (2015).

**Premissa:** 19 canais de tração existem. A maioria dos times usa 1–2. Poucos testam sistematicamente para encontrar o canal que vai dominar.

**Os 19 canais (compilação Traction):**
Viral Marketing, PR, Unconventional PR, SEM, Social/Display Ads, Offline Ads, SEO, Content Marketing, Email Marketing, Engineering as Marketing, Targeting Blogs, Business Development, Sales, Affiliate Programs, Existing Platforms, Trade Shows, Offline Events, Speaking Engagements, Community Building.

**Método Bullseye:**

```
CÍRCULO EXTERNO — "O que poderia funcionar?"
  Listar todos os 19 canais; pré-filtrar os 6 mais promissores

CÍRCULO DO MEIO — "O que parece mais promissor?"
  Selecionar 3 canais para testar; testar com orçamento e tempo mínimos

CÍRCULO INTERNO — "O que realmente está funcionando?"
  Identificar o canal vencedor e dobrar (80% do esforço nele)
  Ao saturar → repetir o processo
```

**Regra de ouro:** manter apenas 1 canal como foco principal por fase. Diversificar prematuramente = nenhum canal funciona bem.

**Canais mais relevantes por fase para expert digital:**

| Fase | Canal mais indicado | Por quê |
|---|---|---|
| 1 — Validação | Targeting Blogs + Speaking + Sales (1:1) | Custo zero, aprendizado máximo |
| 2 — Crescimento | Content Marketing + Existing Platforms (IG/YT) | Orgânico com composição |
| 3 — Escala | Social Ads + Affiliate Programs | Escala com ROAS positivo |
| 4 — Otimização | Email Marketing + Community | LTV + referral |

**Onde entra no CM:**
- Arauto → `mapa-de-campanha`: a escolha de modalidade de campanha começa pela identificação do canal atual (Bullseye inner ring)
- Alquimista → `portal-da-escala` Módulo 2: alavancas de escala mapeiam para canais Bullseye

---

### 16. Van Westendorp — Price Sensitivity Meter (PSM)

**Origem:** Hans van Westendorp (1976) — pesquisador holandês. Método de pesquisa de preço qualitativo-quantitativo.

**As 4 perguntas (aplicar em amostra de 20+ potenciais clientes):**

1. A que preço este produto seria **tão barato** que você duvidaria da qualidade?
2. A que preço este produto seria **barato / uma boa compra**?
3. A que preço este produto começaria a parecer **caro** (mas ainda consideraria)?
4. A que preço este produto seria **caro demais** para considerar?

**Como analisar:**
Plotar as 4 curvas de frequência acumulada no gráfico. Encontrar:
- **PMC** (Ponto de Preço Marginal de Barato): interseção de "barato" e "nem barato nem caro"
- **PME** (Ponto de Preço Marginal de Caro): interseção de "caro" e "nem barato nem caro"
- **OPP** (Optimal Pricing Point): interseção de "caro demais" e "barato demais" — menor rejeição
- **IPP** (Indifference Pricing Point): interseção de "barato" e "caro" — preço médio de mercado

**Aplicação simplificada para expert digital (sem plotar gráfico):**
Fazer as 4 perguntas para 15–25 leads qualificados → calcular a mediana de cada resposta → definir faixa aceitável entre PMC e PME.

**Regra prática:** o preço ótimo é aquele que a maioria do mercado considera "caro mas vale". Preço abaixo da mediana de "barato" destrói percepção de qualidade.

**Onde entra no CM:**
- Alquimista → `forja-de-oferta`: a precificação da oferta usa PSM como diagnóstico antes de definir o ticket

---

### 17. Battle Cards (Inteligência Competitiva)

**Origem:** prática de vendas B2B — adaptado para PMMs modernos.

**O que são:** documentos de uma página que treinam um time (ou o fundador) a responder objeções competitivas específicas no momento da venda.

**Estrutura de uma Battle Card:**

```
CONCORRENTE: [Nome]
QUANDO APARECE: [Em que situação o lead menciona esse concorrente]

NOSSOS PONTOS FORTES vs ELE:
  ✅ [Atributo 1 onde ganhamos]
  ✅ [Atributo 2 onde ganhamos]

VULNERABILIDADES (ser honesto):
  ⚠️ [Onde eles são melhores — prepare-se]

COMO RESPONDER A "X É MAIS BARATO":
  "Entendo. A diferença de preço existe porque..."

COMO RESPONDER A "X TEM MAIS ALUNOS":
  "Quantidade não é resultado. O que nos diferencia é..."

PROVA SOCIAL PARA USAR:
  [Caso específico de cliente que migrou de X para nós]
```

**Tipos de concorrentes para expert digital:**

| Tipo | Exemplo | Como posicionar |
|---|---|---|
| Direto (mesmo nicho, mesmo formato) | "Outro coach de marketing" | Diferenciação por método + resultado específico |
| Indireto (resolve o mesmo job de forma diferente) | "YouTube gratuito" | O custo do DIY vs. o acelerador |
| Não consumo (não comprar nada) | "Vou fazer sozinho depois" | Custo de oportunidade do tempo |
| Status quo (como faziam antes) | "Planilha / instinto" | Predictabilidade vs. tentativa e erro |

**Onde entra no CM:**
- Arauto → `prospeccao-ativa`: objeções de campo são battle cards em construção
- Alquimista → `forja-de-oferta`: a garantia é a resposta a battle cards de risco

---

## PARTE III — Tabela de Integração CM

Mapeamento completo: framework → plugin CM → como opera dentro do sistema.

| Framework | Plugin | Skill | Como Integra |
|---|---|---|---|
| JTBD | Cartógrafo | forja-da-persona | "O que esse cliente está tentando realizar?" substitui análise demográfica |
| JTBD | Alquimista | forja-de-oferta | Push/Pull informam lead da oferta; ansiedade/inércia informam garantia e objeções |
| JTBD | Alquimista | pergaminho-de-copy | Forças do progresso = estrutura do Método Carga |
| OST | Alquimista | portal-da-escala | Oportunidades por fase → próximo produto ou feature da esteira |
| RICE/ICE | Arauto | criar-produto-esteira | Priorização de features de produto e bônus de oferta |
| Kano | Alquimista | forja-de-oferta | Must-have = promessa core; Delighters = bônus que excedem expectativa |
| NSM | Alquimista | portal-da-escala | Dashboard de métricas: qual número move tudo? |
| NSM | Arauto | metricas-produto | KPI principal do produto monitorado por ciclo |
| AARRR | Alquimista | portal-da-escala | Funil completo: diagnóstico de onde está o gargalo |
| AARRR | Arauto | mapa-de-campanha | Cada tipo de campanha serve uma etapa do funil |
| PMF | Alquimista | portal-da-escala | Critério de transição Fase 1 → 2 |
| PMF | Chaveiro | tesouro-dos-erros | Erros de PMF documentados para não repetir |
| Shape Up | Chaveiro | ritual-da-chave | Ciclos com appetite definido; circuit breaker para evitar scope creep |
| Shape Up | Arauto | mapa-de-campanha | Cronograma de campanha = pitch com appetite e no-gos |
| OKRs | Chaveiro | ritual-da-chave | Lua Cheia (mensal) = check-in de KRs; Forja Semanal = committed KRs |
| OKRs | Alquimista | portal-da-escala | KRs de negócio informam métricas prioritárias por fase |
| PLG | Alquimista | maquina-de-receita | Isca gratuita como produto PLG → funil curto orgânico |
| PLG | Cartógrafo | forja-do-universo | Worldbuilding cria conteúdo PLG que educa a categoria |
| Dunford | Cartógrafo | forja-do-universo | DNA de marca usa 5 componentes de posicionamento |
| Dunford | Alquimista | forja-de-oferta | Valor único da oferta = atributo único → value para cliente |
| Dunford | Arauto | mapa-de-campanha | Ângulo de campanha começa pela alternativa competitiva atual |
| Moore | Alquimista | portal-da-escala | Transição Fase 1 → 2 = cruzar o abismo; requer prova social |
| Moore | Arauto | mapa-de-campanha | Beachhead market = nicho-foco do Meteórico |
| Category Design | Cartógrafo | forja-do-universo | Léxico proprietário = criação de categoria na mente do mercado |
| Category Design | Bardo | cavalo-de-troia | Conteúdo que "ensina a categoria" educa para comprar |
| Message House | Alquimista | pergaminho-de-copy | Copy 3x5: mensagem principal + pilares + provas |
| Message House | Bardo | chavossel | Estrutura de carrossel: pilar → prova → call |
| Message House | Arauto | mapa-de-campanha | Consistência de mensagem por todo o cronograma |
| GTM Tiers | Arauto | mapa-de-campanha | Modalidades de campanha = tiers de lançamento |
| Bullseye | Arauto | mapa-de-campanha | Canal do inner ring informa modalidade recomendada |
| Bullseye | Alquimista | portal-da-escala | Alavancas de escala ↔ canais Bullseye |
| Van Westendorp | Alquimista | forja-de-oferta | Pesquisa de preço antes de definir ticket |
| Van Westendorp | Alquimista | maquina-de-receita | Faixa aceitável informa mapa de marcos de receita |
| Battle Cards | Arauto | prospeccao-ativa | Objeções de campo = battle cards em construção |
| Battle Cards | Alquimista | forja-de-oferta | Garantia é a resposta às battle cards de risco |

---

## Referências Cruzadas

- `FILOSOFIA.md` — fundamento filosófico: Inteligência + Personalidade como chave mestra
- `MAPA-DO-PROJETO.md` — arquitetura do sistema que estas referências servem
- `01-PLUGINS/02-alquimista/skills/maquina-de-receita/SKILL.md` — monetização operacional
- `01-PLUGINS/02-alquimista/skills/portal-da-escala/SKILL.md` — escala operacional (usa NSM, AARRR, PMF)
- `01-PLUGINS/02-alquimista/skills/forja-de-oferta/SKILL.md` — oferta (usa Dunford, JTBD, Van Westendorp)
- `01-PLUGINS/01-cartografo/skills/forja-do-universo/SKILL.md` — posicionamento (usa Dunford, Category Design)
- `01-PLUGINS/04-arauto/skills/mapa-de-campanha/SKILL.md` — campanha (usa GTM Tiers, Bullseye, Moore)
- `05-ASSETS/referencias/LEGAL-AUXILIAR.md` — contratos, LGPD e documentação jurídica

---
name: mapa-de-campanha
description: Usar quando o usuário pedir "planejar campanha", "lançamento", "meteórico", "desafio", "lançamento interno", "cronograma de campanha", "copy de lançamento", "arco narrativo do lançamento", ou qualquer planejamento completo de campanha com modalidade e copy por fase.
version: 1.0
layer: Camada 4 — Lançamento
role: Planejamento completo de campanhas — diagnóstico de modalidade, cronograma dia a dia, copy por fase
inputs: produto, ticket, audiência (temperatura + tamanho), tempo disponível, objetivo (caixa / autoridade / escala)
outputs: modalidade indicada + cronograma completo + copy por fase
feeds-into: Esteira Notion (população do banco de dados), Portal da Escala (métricas pós-lançamento)
---

# Mapa de Campanha — Sistema de Planejamento e Copy de Lançamento

O Mapa de Campanha não é planilha de tarefas. É o arco dramático completo do lançamento — da primeira mensagem ao fechamento do carrinho. Cada campanha é uma história com 4 atos. O copywriter que entende isso não escreve peças isoladas: escreve capítulos de um único arco.

---

## As 4 Modalidades

### Modalidade 01 — Meteórico (3–7 dias)
**Conceito:** alta intensidade, curta duração. Monetização rápida de audiência quente via oferta direta com urgência real. Motor: represamento num caldeirão WPP → tensão crescente → abertura explosiva no Dia D.

**Quando usar:**
- Urgência de caixa
- Produto validado (não lançar novidade aqui)
- Base de WhatsApp com 100+ pessoas ativas
- Ticket até R$997 (ideal até R$497)

**Quando NÃO usar:**
- Audiência fria sem aquecimento
- Produto sem prova social

**Arco Caldeirão WPP — 5 dias:**
- **D-2 e D-1 — Convite:** Stories + DM + WPP pessoal. "Vou liberar uma condição única para [produto] apenas para quem estiver no grupo VIP. Entre agora — vou fechar o acesso em [prazo]." Grupo fica silenciado após entrada.
- **Dia 1 — Aquecimento 1:** Vídeo ou texto curto. A dor que o produto resolve, específica e pessoal. Sem pitch.
- **Dia 2 — Aquecimento 2:** Prova social. Depoimento + história. "Isso é o que acontece quando [mecanismo] é aplicado."
- **Dia 3 — Aquecimento 3:** Bastidores do produto: como foi construído, por que existe, o que entrega de diferente.
- **Dia D — Abertura + Fechamento:** Manhã: abre grupo para dúvidas por 2h. Meio-dia: solta link com condição exclusiva. Noite: "Link expira em Xh. Depois disso removo todos do grupo." Encerramento real: remove todos. O grupo acaba.

---

## GATEKEEPING — Pré-Requisitos

Antes de planejar campanha, verificar no **Dossiê CM** (`05-ASSETS/dossies/[projeto].md`):

| Pré-requisito | Seção do Dossiê | Se não existir |
|---------------|-----------------|----------------|
| Persona mapeada | §2 > Persona | 🔴 **Crítico.** Campanha sem público definido é tiro no escuro. Alertar: "Sem persona, a campanha não tem tom, narrativa nem ângulo. Recomendo Forja da Persona antes." |
| Oferta definida | §3 > Oferta | 🔴 **Crítico.** Campanha sem oferta não tem o que vender. Alertar: "Sem oferta estruturada, a campanha não tem o que entregar. Recomendo Forja de Oferta antes." |
| DNA de Marca (recomendado) | §1 > DNA de Marca | ⚠️ Sem DNA, a campanha perde arco narrativo proprietário. Alertar e sugerir. |
| Diagnóstico de fase (recomendado) | Portal da Escala | ⚡ Para escolher a modalidade certa. Sem diagnóstico, perguntar diretamente: ticket, tamanho de audiência, tempo disponível. |

**Ao concluir:** escrever resumo executivo em §3 > Campanha do Dossiê + linkar cronograma completo. Sinalizar peças necessárias para Bardo + Alquimista + Iluminista.

### Alerta de Maturidade — Diagnóstico Anti-Impulso

Antes de montar o cronograma, verificar sinais de campanha prematura:

| Sinal de risco | Consequência real |
|---------------|-------------------|
| 🔴 Audiência fria, sem aquecimento prévio | Lançar para desconhecidos. Conversão próxima a zero. Desgaste de lista sem retorno. |
| 🔴 Sem conteúdo publicado nos 30 dias anteriores | Audiência não aquecida = não reconhece autoridade = não compra. A campanha começa com déficit de confiança. |
| 🔴 Calendário comprimido (< 7 dias de aquecimento) | Sem margem para elevar nível de consciência. O cliente não entende o que está comprando. Alta objeção, baixa conversão. |
| 🔴 Oferta sem validação prévia | Campanha de algo que o mercado ainda não confirmou que quer. Risco duplo: sem venda E sem aprendizado útil. |
| 🟡 Sem CTA claro ou mecanismo de conversão definido | Campanha gera atenção mas não direciona para ação. Energia desperdiçada. |
| 🟡 Meta de receita sem base histórica | Meta chutada = expectativa irrealista = frustração garantida. Calcular pela lista real + taxa conservadora. |

**Perguntas para fazer antes de prosseguir:**
- "Qual foi sua última publicação? Há quantos dias?"
- "A audiência que vai ver essa campanha já conhece você ou é fria?"
- "Quanto tempo você tem antes de precisar abrir o carrinho?"
- "A oferta foi testada de alguma forma antes dessa campanha?"

**Se 2+ sinais 🔴 estiverem ativos:** apresentar diagnóstico antes de montar o cronograma. O usuário decide — mas com plena consciência dos pontos cegos. Marcar output como `[campanha planejada sem base de aquecimento — risco alto de conversão baixa]` se avançar assim mesmo.
- Produto novo sem prova social
- Ticket acima de R$2.000

**Arco narrativo:** Revelação → Prova + Conflito → Mecanismo Único → Abertura de Carrinho → Fechamento e Urgência

---

### Modalidade 02 — Desafio (7, 14 ou 21 dias)
**Conceito:** conteúdo de valor diário constrói autoridade enquanto aquece o lead para a oferta. O comprometimento progressivo do lead aumenta a propensão de compra.

**Quando usar:**
- Produto mid ticket (R$497–R$2.000)
- Quer construir autoridade além de vender
- Tem 1–3 semanas disponíveis
- Audiência morna que precisa de mais contexto

**Quando NÃO usar:**
- Audiência muito fria (sem engajamento base)
- Ticket baixo (não compensa o esforço)
- Sem capacidade de entrega de conteúdo diário

**Arco narrativo:** Convite → Comprometimento → Entrega diária → Transformação acumulada → Oferta natural

---

### Modalidade 03 — Lançamento Interno (4–8 semanas)
**Conceito:** construção de lista qualificada antes da oferta. CPL ou série educativa + oferta a lista quente pré-construída.

**Quando usar:**
- Produto high ticket (R$2.000+)
- Quer construir lista qualificada antes de vender
- Tem 1–2 meses de tempo
- Audiência fria ou nova que precisa de jornada educativa

**Quando NÃO usar:**
- Precisa de caixa rápido
- Sem capacidade de criar série educativa

**Arco narrativo:** Pré-pré-lançamento (construção de curiosidade) → Pré-lançamento (CPL) → Lançamento (carrinho) → Pós-lançamento

---

### Modalidade 04 — Forja de Caixa (geração de caixa rápida)
**Conceito:** campanhas de pressão cirúrgica para converter audiência existente em receita no menor prazo possível. 5 modos: Relâmpago (24-48h), Semente (5-7d), Urgência (48-72h), Luxo (7-12d), Tripwire (perpétuo).

**Quando usar:**
- Produto validado com prova social
- Base quente existente (WhatsApp, lista, DM)
- Precisa de caixa sem a complexidade de um lançamento completo

**→ Ver `forja-de-caixa/SKILL.md` para o protocolo completo com copy por modo.**

**Arco narrativo por modo:** cada modo tem seu próprio arco — ver skill dedicada.

---

## Diagnóstico de Modalidade

Antes de qualquer planejamento, mapear:

| Variável | Opções |
|---|---|
| **Temperatura da audiência** | Quente (comprou antes) / Morna (engajada, nunca comprou) / Fria (desconhece) |
| **Tamanho da base** | <200 / 200–1.000 / 1.000–10.000 / 10.000+ |
| **Ticket** | Low: R$47–297 / Mid: R$497–2k / High: R$3k+ |
| **Tempo disponível** | 3–7 dias / 1–3 semanas / 1–2 meses / 3+ meses |
| **Objetivo primário** | Caixa rápido / Autoridade / Escala / Posicionamento |

**Matriz de decisão rápida:**
- Quente + Low/Mid + Urgência de caixa → **Meteórico** (3–7d, caldeirão WPP)
- Morna + Mid + 1–3 semanas + Autoridade → **Desafio**
- Fria + Mid/High + 1–2 meses + Escala → **Interno**
- Base quente + Caixa rápido + Produto validado → **Forja de Caixa** (ver skill dedicada)

---

## Frameworks Narrativos por Modalidade

**Meteórico — "Revelação Pessoal"**
> "Eu estava [situação passada]. Então descobri [mecanismo]. Aplicando [método], consegui [resultado específico]. E hoje, pela primeira vez, vou ensinar exatamente como fazer isso em [tempo]."

**Desafio — "Comprometimento Progressivo"**
> "Em [X dias], vou te guiar por um processo que vai te mostrar [resultado parcial tangível]. Não vou te pedir para comprar nada. Só que você apareça, execute e veja com seus próprios olhos."

**Lançamento Interno — "Tese de Investimento"**
> "[Público] que aplica [método] obtém [resultado específico] em [tempo]. Não porque são especiais — mas porque têm acesso a [mecanismo único]. Em [data], abro [X vagas] para quem quer esse acesso."

**Forja de Caixa — ver `forja-de-caixa/SKILL.md`**
> Cada modo tem seu próprio arco: Luxo usa manifesto de posicionamento, Urgência usa detonação direta, Semente usa revelação de método. Arcos completos na skill dedicada.

---

## Estrutura de Cronograma — Output Padrão

Para cada campanha, o Mapa de Campanha gera um cronograma dia a dia com:

```
DIA [X] — [NOME DA FASE]

Objetivo narrativo: [o que este dia precisa fazer na história da campanha]
Objetivo psicológico: [qual resistência tratar ou qual desejo ativar]
Canal principal: [WhatsApp / Instagram Feed / Stories / TikTok / Email]
Canais de apoio: [lista]

PEÇAS DO DIA:
1. [Tipo de peça — ex: Mensagem WhatsApp 200–300 palavras]
   Gancho: [hook da peça]
   Copy completo: [texto pronto]
   
2. [Segunda peça, se houver]
   ...

Métrica de acompanhamento: [o que medir neste dia]
```

---

## Estrutura do Arco Narrativo dos 4 Atos

| Ato | Nome | Função |
|---|---|---|
| 1 | Estabelecimento do Mundo | Como o mundo do lead está agora (Status Quo) + o que está errado |
| 2 | Incidente Incitante | Por que as soluções comuns falham + o mecanismo único que muda tudo |
| 3 | A Jornada | Lead experimenta a transformação em miniatura + prova de que funciona |
| 4 | A Decisão | Momento de escolha + urgência genuína + custo da inação |

---

## Copy por Fase — Assets Essenciais

### Fase Pré-lançamento
- Mensagem de curiosidade / abertura de loop
- Story de "algo está chegando"
- Post de autoridade ou caso de resultado

### Fase de Aquecimento (Desafio/Interno)
- Série de conteúdo educativo diário
- Mensagens de comprometimento progressivo
- Stories de bastidores + prova social emergente

### Fase de Abertura de Carrinho
- Mensagem de lançamento da oferta (WhatsApp)
- Post de feed com prova social + link
- Stories com contador regressivo

### Fase de Fechamento
- Sequência de urgência (manhã + tarde + noite do último dia)
- Mensagem de fechamento definitivo
- Mensagem pós-fechamento + lista de espera (opcional)

---

## Destino do Conteúdo de Campanha

O conteúdo gerado pelo Mapa de Campanha tem destinos diferentes conforme o tipo:

| Tipo | Destino no Notion |
|---|---|
| Conteúdo de lançamento (Meteórico, Desafio, Interno) | Cronograma do produto na MINHA ESTEIRA → uma linha por dia com copy + assets no corpo |
| Campanhas Forja de Caixa (Relâmpago, Semente, Urgência, Luxo) | Cronograma do produto na MINHA ESTEIRA (toggle Forja de Caixa correspondente) |
| Peças orgânicas de suporte | Database Conteúdo → campo Origem: Orgânico |
| Isca digital + Tripwire | Database Conteúdo → campo Origem: Forja de Caixa |

**Regra fundamental:** conteúdo de campanha NUNCA vai na database Conteúdo. Vai DENTRO do produto correspondente na MINHA ESTEIRA. Cada produto já carrega cronogramas para todas as modalidades (Meteórico, Desafio 7d/14d/21d, Interno + 5 modos de Forja de Caixa) — basta popular o correto.

### Pós-campanha

Ao encerrar uma campanha:
1. Marcar `Arquivado = true` no produto da MINHA ESTEIRA (sai da vista "Ativos", aparece na vista "Arquivo")
2. Registrar resultados no Tesouro dos Erros + Forja do Conhecimento
3. O cronograma completo permanece preservado para consulta e reutilização como template

---

## Regras

1. Nunca planejar campanha sem diagnosticar modalidade primeiro
2. O arco narrativo dos 4 atos é inegociável — cada dia serve a um dos atos
3. Urgência só funciona quando genuína — nunca fake scarcity
4. Copy de fechamento tem 3 mensagens no último dia: manhã / tarde / noite
5. Toda peça de campanha tem gancho + corpo + CTA único
6. Conteúdo de campanha vai no cronograma do produto (MINHA ESTEIRA), não na database Conteúdo

---

## Referências Cruzadas

- `modalidades.md` — cronogramas detalhados e variações de cada modalidade
- `copy-campanha.md` — templates de mensagens WhatsApp, email e post por fase (narrativa e frameworks)
- `mensagens-operacionais.md` — templates operacionais por momento tático (lembretes CPL, sustentação de carrinho, reoferta, upsell/downsell, quebra de objeção, pós-compra)
- `alma-da-persona.md` — Inferno/Céu informa a promessa de cada fase
- `copy-3x5.md` — calibração de camadas por nível de consciência do público em cada fase
- `esteira-notion/SKILL.md` — protocolo de população dos cronogramas no Notion (schema, archiving, separação campanha/orgânico)

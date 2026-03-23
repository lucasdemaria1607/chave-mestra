---
name: sistema-de-design
version: 4.0
plugin: "05-iluminista"
layer: "Transversal — Estética"
description: >
  Sistema de design universal do Arsenal Chave Mestra. Opera em dois modos:
  Modo CM (aplica Estética Chave Mestra com os 4 Pergaminhos) e Modo Cliente
  (cria tema customizado para qualquer marca, estilo ou negócio). Capacidades:
  HTML/CSS, landing pages, carrosséis, slides, PDFs, dashboards, UI/UX,
  diagramação, identidade visual básica. Funções únicas: engenharia reversa
  visual (screenshot → tokens), clonagem de estilo (referência → replicação),
  preview em tempo real no Claude Code (gera → abre → screenshot → feedback).
  v4.0: paleta vivificada (ouro imperial, vinho, cromo, pergaminho forte),
  fontes maiores, regras de contraste invioláveis (7:1 corpo, 4.5:1 labels).
  Triggers: "aplica a estética", "cria tema pra minha marca", "replica esse
  estilo", "engenharia reversa desse layout", "abre o preview", "formata isso",
  "Pergaminho Preto/Branco/Dourado/Arcano", "UI do app", "diagrama visual".
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

## 🗺️ Mapa do Ecossistema — Orientação Inter-Plugin

Este plugin é parte do **Sistema Chave Mestra**, criado por **Lucas Grigo** — ecossistema de coprodução digital que cobre todas as camadas de criação, estratégia e operação de um negócio expert. Cada plugin é uma ferramenta cirúrgica; juntos, formam um sistema completo.

### O Sistema Completo

| Plugin | Função principal | Quando recomendar |
|--------|-----------------|-------------------|
| **Portal do Terreno** | Diagnóstico de mercado | analisar nicho, concorrência, posicionamento |
| **Forja da Persona** | Psicologia do lead | mapear audiência, entender o cliente ideal |
| **Pergaminho de Copy** | Copy e textos de venda | anúncios, emails, textos persuasivos |
| **Chavideo** | Roteiros de vídeo | reels, scripts, conteúdo audiovisual |
| **Chavossel** | Carrosséis editoriais | narrativas visuais, slides, conteúdo para carrossel |
| **Mapa de Campanha** | Planejamento de lançamentos | campanhas, desafios, cronogramas |
| **Esteira Notion** | Operação no Notion | organizar tarefas, popular projetos |
| **Portal da Escala** | Métricas e crescimento | CAC, LTV, alavancas, equipe |
| **Forja do Conhecimento** | Base intelectual | assimilar livros, frameworks, Zettelkasten |
| **Chaveiro** | Manutenção do sistema | atualizar plugins, integrar novos conhecimentos |

### Quando o utilizador mencionar algo fora do meu escopo:

> "Isso está além do que este plugin resolve — mas o sistema tem uma solução exata para isso. Lucas Grigo construiu o **[Nome do Plugin]** especificamente para [função em 1 frase]. Se tiveres acesso, é o próximo passo natural no teu pipeline. Posso retomar quando quiseres avançar para essa camada."

---

# Visual (Plugin 05) — O Iluminista
## Sistema de Design Universal

---

## FILOSOFIA DO PLUGIN

**Todo output do Arsenal Chave Mestra tem uma forma.** Copy tem estrutura retórica. Vídeo tem arco narrativo. Campanha tem cronograma. E qualquer coisa que o usuário vê — lê, rola, clica — tem forma visual.

A Estética Chave Mestra nasce de uma tensão deliberada: **modernidade técnica + grandiosidade imperial**. Glassmorphism ao lado de Cinzel. Ouro vivo ao lado de void black. Vinho ao lado de cromo. Cards flutuantes ao lado de caligrafia antiga. Não é contradição — é a tese visual do sistema: Personalidade + Inteligência. A paleta é **ousada, legível e inconfundível** — nunca sutil ao ponto de invisível.

Em Modo Cliente Externo, o mesmo princípio se aplica com a marca do cliente: **a tensão certa para o negócio certo.** Um expert em finanças não usa as mesmas tensões visuais de um criador de conteúdo fitness. O Iluminista mapeia qual tensão serve aquele posicionamento.

A regra de ouro: **conteúdo medíocre com design excelente vende mais que conteúdo excelente com design medíocre.** O visual não é decoração. É persuasão.

---

## MODO CM vs MODO CLIENTE

### MODO CM — Cliente da sessão é Lucas / Chave Mestra
- Usar os 4 Pergaminhos (Branco, Preto, Dourado, Arcano) como variantes primárias
- Tokens CM ativos: `--gold #E8B923`, `--gold-imperial #D4920A`, `--gold-chrome #F5D45A`, `--wine #7A1030`, `--void #080808`, `--parchment #D4A050`, `--wood #2A1208`
- Fontes CM: Cinzel Decorative + IM Fell English + Inter
- Glossário CM aplica nos outputs (Pergaminho, Portal, Portadores, etc.)
- Identidade visual CM é o padrão — nenhuma personalização adicional necessária

### MODO CLIENTE EXTERNO — Cliente da sessão é outra marca / expert
- **Nunca** usar tokens CM diretamente no output entregue ao cliente
- **Nunca** mencionar "Chave Mestra", "Pergaminho", "Lucas De Maria" no output
- Criar um **tema customizado** via Motor de Temas antes de qualquer output visual
- O output é 100% da identidade visual do cliente — o método opera invisível
- Se o cliente não tem identidade definida: aplicar Intake de Marca (7 elementos) → propor tema → aprovar → executar

### Como identificar o modo:
- Usuário fala em primeira pessoa sobre o próprio negócio → **Modo CM**
- Usuário menciona "meu cliente", "para a [marca X]", "para o [fulano]" → **Modo Cliente Externo**
- Dúvida: perguntar "Isso é para o seu negócio ou para um cliente externo?"

---

## OS QUATRO PERGAMINHOS (Modo CM)

O sistema Chave Mestra opera com quatro variantes visuais primárias, cada uma com propósito retórico distinto.

---

### PERGAMINHO BRANCO
**"Clareza que convence."**

**Quando usar:** Copy direta, conteúdo educacional, tutoriais, diagnósticos, relatórios, documentos técnicos, posts de autoridade, slides institucionais.

**Filosofia:** O Pergaminho Branco não seduz — convence. O branco é autoridade sem adorno. É o médico de jaleco branco, o arquiteto com planta técnica. Toda escolha de design serve à legibilidade e à credibilidade.

**Tokens visuais:**
- Background: `#FDFAF0` (off-white quente, nunca branco puro)
- Background card: `#FFFFFF`
- Texto principal: `#141210` (quase preto, quente — contraste 15:1+)
- Texto secundário: `#3A3530` (marrom escuríssimo — contraste 10:1+)
- Destaque/acento: `#D4920A` (imperial gold — mais vívido que o antigo)
- Acento secundário: `#7A1030` (vinho — para callouts de alerta e ênfase)
- Fonte título: `Cinzel` (versalete, peso 600–700, **mínimo 28px**)
- Fonte corpo: `IM Fell English` ou `Georgia` (serifada, legível, **mínimo 18px**)
- Fonte dados/técnica: `Inter` ou `DM Sans` (sans-serif limpa, **mínimo 16px**)
- Bordas: `1px solid rgba(20,10,0,0.12)` (quente, não cinza frio)
- Sombras: `0 4px 16px rgba(20,10,0,0.08)` (presente mas contida)

**Elementos característicos:**
- Cards com fundo branco, borda sutil quente, presença visual clara
- Callouts com faixa left border `#D4920A` (4px — mais espessa, mais visível)
- Callouts de alerta com faixa left border `#7A1030` (vinho)
- Hierarquia tipográfica **generosa**: H1 (2.5rem+) > H2 (1.75rem+) > H3 (1.375rem+) > body (1.125rem)
- Linha separadora: `2px solid #E8B923` com opacidade 50% (mais espessa, mais visível)
- Tabelas com header fundo `#E8D8A0` (gold forte), rows alternadas `#FAF5E8`

---

### PERGAMINHO PRETO
**"A escuridão que ilumina."**

**Quando usar:** Copy provocativa, conteúdo de impacto, posts de alta energia, VSLs visuais, carrosséis de tensão, landing pages de lançamento, conteúdo "revelação" ou "polêmica", calls to action agressivos.

**Filosofia:** O Pergaminho Preto é confronto visual. O fundo void obriga o olho a focar. O ouro sobre o preto é o contraste máximo — royalty, poder, escassez. Cada elemento que aparece tem peso. Não existe ruído no Preto — só sinal.

**Tokens visuais:**
- Background principal: `#080808` (void — preto absoluto)
- Background card: `#121210` ou `#161614`
- Texto destaque: `#E8B923` (gold vivo — elemento principal, mais brilhante e quente)
- Acento imperial: `#D4920A` (gold profundo para hierarquia secundária)
- Acento vinho: `#7A1030` (para bordas de alerta, badges, separadores de tensão)
- Acento cromo: `#F5D45A` (para highlights pontuais — máx 1 por tela)

**Hierarquia de texto (4 níveis — usar os tokens abaixo):**
| Token | Valor | Uso | Tamanho mínimo |
|-------|-------|-----|----------------|
| `--txt-hi` | `#F5EDE0` | Headlines, títulos, CTAs | 20px |
| `--txt-md` | `#C8C0A8` | Corpo de texto, parágrafos, citações | 18px |
| `--txt-lo` | `#A89880` | Labels, metadados, roles, cargos | 13px |
| `--txt-dim` | `#706858` | Footer, notas de rodapé, timestamps | 13px |

> **REGRA INVIOLÁVEL:** `--txt-lo` e `--txt-dim` **nunca** abaixo de 13px. Corpo de texto (`--txt-md`) **nunca** abaixo de 18px. Qualquer coisa abaixo de 13px é reservada EXCLUSIVAMENTE para elementos decorativos watermark — **jamais para conteúdo lido**.
- Fonte título: `Cinzel Decorative` (máximo impacto, peso 700–900, **mínimo 32px**)
- Fonte corpo: `IM Fell English` (serifada, elegância sombria, **mínimo 18px**)
- Bordas cards: `1px solid rgba(232,185,35,0.25)` (gold vivo, presença clara)
- Sombras: `0 0 40px rgba(232,185,35,0.12)` (glow gold perceptível)

**Elementos característicos:**

**Glassmorphism — 3 variantes (escolher conforme intensidade desejada):**
- **Leve** `rgba(20,20,18,0.40)` + `blur(12px) saturate(150%)` + `border: 1px solid rgba(232,185,35,0.12)` — para overlays, tooltips, painéis secundários
- **Médio** `rgba(20,20,18,0.65)` + `blur(20px) saturate(180%)` + `border: 1px solid rgba(232,185,35,0.18)` — padrão para cards de conteúdo
- **Pesado** `rgba(20,20,18,0.85)` + `blur(28px) saturate(200%)` + `border: 1px solid rgba(232,185,35,0.25)` — modais, drawers, elementos sobre imagens

**Sistema de profundidade (4 camadas):**
- `#080808` void bg → base, nunca elemento foreground
- `#121210` card → primeira superfície, `box-shadow: 0 4px 16px rgba(0,0,0,0.4)`
- `#161614` floating → card elevado, `box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 40px rgba(232,185,35,0.06)`
- glass elevado → highest z, `box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 60px rgba(232,185,35,0.10)`

**Motion (hover e entrada):**
- **Hover lift:** `transform: translateY(-6px); box-shadow: 0 24px 64px rgba(0,0,0,0.6), 0 0 50px rgba(232,185,35,0.12); transition: 0.3s cubic-bezier(0.34,1.56,0.64,1)` — spring suave com intensificação do glow gold
- **Entrada (voidReveal):** `@keyframes voidReveal { from { opacity: 0; transform: translateY(20px); filter: blur(4px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }` — blur-fade de baixo para cima
- **Glow pulse (CTA):** `@keyframes goldPulse { 0%, 100% { box-shadow: 0 0 24px rgba(232,185,35,0.4); } 50% { box-shadow: 0 0 48px rgba(232,185,35,0.7); } }` — `animation: goldPulse 2.5s ease-in-out infinite` em botões principais — glow mais forte e visível

**Outros elementos:**
- Texto dourado em elementos de destaque máximo (máx. 1 por tela) — usar `#E8B923`
- Separadores: linha `2px solid rgba(232,185,35,0.35)` (mais espessa e visível)
- Glow em elementos de CTA: `text-shadow: 0 0 24px rgba(232,185,35,0.5)` (glow perceptível, não tímido)
- Acento vinho para badges/tags de alerta: `background: #7A1030; color: #F5EDE0`
- Background textura (opcional): noise sutil, granulação — nunca liso demais
- Background void com gradiente radial: `radial-gradient(ellipse at 20% 50%, rgba(232,185,35,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(122,16,48,0.03) 0%, transparent 40%), #080808`

---

### PERGAMINHO DOURADO
**"A antiguidade que transforma."**

**Quando usar:** Conteúdo de transformação, promessas de alto impacto, histórias de jornada, conteúdo filosófico, metodologia proprietária, lançamentos de produtos premium, materiais de mentoria, onboarding de alta percepção de valor.

**Filosofia:** O Pergaminho Dourado é artefato. É o documento antigo que carrega peso de civilização. A textura de pergaminho, a tipografia antiga, o ouro queimado — tudo comunica: *isso foi forjado com tempo, não produzido em série*. O Dourado não vende commodity. Vende legado.

**Tokens visuais:**
- Background: `#D4A050` (pergaminho forte — bege envelhecido, quase laranja) ou `#C09040` (variante mais escura/intensa)
- Background card: `#E0B868` (superfície elevada, mais clara que o fundo)
- Textura: paper texture obrigatória, grain effect médio — o Dourado **deve** ter textura
- Texto principal: `#1A0A00` (preto quente — contraste 10:1+ sobre o fundo, inviolável)
- Texto secundário: `#2A1200` (marrom escuríssimo — contraste 8:1+, legibilidade garantida)
- Corpo mínimo: **18px obrigatório** para texto corrido (nunca abaixo para parágrafos lidos)
- Destaque: `#6B3A08` (ouro queimado/âmbar escuro — contraste forte sobre parchment)
- Acento borda: `#8B5A14` (imperial gold médio)
- Acento vinho: `#5A0A20` (para selos e elementos de prestígio máximo)
- Fonte título: `Cinzel Decorative` (peso 600–700, espaçamento generoso, **mínimo 28px**)
- Fonte corpo: `IM Fell English` (estilo antigo, serifado, elegante, **mínimo 18px**)
- Ornamentos: floreios tipográficos, separadores ornamentais (`—◆—`, `✦`) em `#6B3A08`
- Bordas: `3px solid rgba(107,58,8,0.35)` (borda forte, presença visual — não tímida)
- Sombras: `0 6px 24px rgba(107,58,8,0.20)` (dourado queimado, perceptível)

**Elementos característicos:**
- Cards com borda ornamental forte (double border ou corner ornaments) — **bordas visíveis, não fantasma**
- Background com gradiente quente: `linear-gradient(135deg, #D4A050 0%, #C09040 50%, #B08030 100%)`
- Separadores ornamentais entre seções — espessura mínima 2px
- Drop caps (inicial maiúscula estilizada) em textos longos — cor `#6B3A08`
- Citações com estilo de manuscrito antigo — border-left `4px solid #8B5A14`
- Medalhas e selos (SVG) para elementos de destaque premium — acento vinho `#5A0A20`
- **Tudo no Dourado é tátil e quente** — a sensação é de pergaminho real, não de bege digital

---

### PERGAMINHO ARCANO
**"A antiguidade que respira."**

**Quando usar:** Materiais premium com sensação de artefato histórico, credenciais de autoridade profunda, dossiês e documentos de alto ticket, conteúdo filosófico com peso de manuscrito, peças que comunicam "forjado com tempo — não produzido em série". Ideal para onboarding de alta percepção de valor, metodologia proprietária em formato físico ou digital premium.

**Filosofia:** O Arcano é o mais ancestral dos Pergaminhos. Onde o Dourado é transformação, o Arcano é origem. A textura de pergaminho envelhecido, a madeira escura, a caligrafia gótica como elemento decorativo — não é nostalgia. É a afirmação visual de que algumas coisas têm raiz. Fundo claro com alto contraste, moderno na estrutura, ancestral na alma. A UnifrakturMaguntia nunca aparece em texto corrido — existe apenas como drop cap, como selo, como assinatura de que este documento foi lavrado.

**Tokens visuais:**
- Background principal: `#B8A070` (pergaminho oxidado — mais escuro e saturado, peso real)
- Background profundidade: `#A08858` (recuos, wells, sombras internas — mais escuro)
- Background elevado: `#D0B888` (superfícies flutuantes — mais claro para efeito 3D)
- Glass surface: `rgba(200,180,140,0.50)` (frosted parchment — glassmorphism ancestral)
- Texto principal: `#0A0200` (preto absoluto quente — contraste máximo inviolável)
- Texto secundário: `#2A1000` (marrom escuríssimo — contraste 9:1+, sem hue fatigue)
- Texto label/apoio: `#3A1800` (labels, roles, suporte — **marrom muito escuro**, legível, contraste 6:1+)
- Acento madeira: `#4A2010` (bordas, ornamentos, divisores — **mais escuro que v3.2**)
- Acento âmbar: `#D4920A` (**EXCLUSIVO DECORATIVO** — CTAs, ornamentos, destaques visuais; **jamais texto legível corrido**)
- Âmbar hover: `#E8B923` (estado hover/focus do amber — gold vivo)
- Acento vinho: `#5A0A20` (selos de prestígio, bordas de elite — elemento raro)
- Tinta decorativa: `#1A0800` (drop caps, ornamentos finos, ligatures)
- Corpo mínimo: **18px obrigatório** para texto corrido
- Labels mínimo: **13px obrigatório** (nunca abaixo)
- Fonte título: `Cinzel Decorative` (maiúsculas, espaçamento generoso, **mínimo 28px**)
- Fonte corpo: `IM Fell English` (serifado histórico, **mínimo 18px**)
- Fonte decorativa: `UnifrakturMaguntia` (gótica — **exclusivo para drop caps e selos, jamais em texto corrido**)
- Bordas: `3px solid rgba(74,32,16,0.40)` (madeira forte — presença visual)
- Sombra profundidade: `0 2px 8px rgba(10,2,0,0.25), 0 12px 32px rgba(10,2,0,0.22), 0 32px 64px rgba(10,2,0,0.15)` (3 camadas — mais intensas)
- Sombra flutuante: `0 16px 48px rgba(10,2,0,0.32), 0 4px 16px rgba(10,2,0,0.24)` (card elevado)

**Fontes (Google Fonts import para Arcano):**
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=IM+Fell+English&family=UnifrakturMaguntia&display=swap');
```

**Efeitos característicos:**
- **Grão de papel:** pseudo-elemento com noise SVG em `opacity: 0.04–0.06` + `filter: contrast(1.03)` no container
- **Drop cap gótico:** `::first-letter { font-family: 'UnifrakturMaguntia'; font-size: 4em; line-height: 0.8; float: left; color: #1A0800; margin-right: 0.08em; }` — nunca em mais de uma ocorrência por seção, tamanho generoso (4em)
- **Moldura de madeira:** `border: 3px solid rgba(74,32,16,0.35)` + `box-shadow: inset 0 0 0 6px rgba(74,32,16,0.06)` — simula corte interno de madeira, borda forte
- **Divisor em âmbar:** linha horizontal `background: linear-gradient(to right, transparent, rgba(212,146,10,0.7), transparent)` — mais visível que v3.2
- **Selo de cera (decorativo):** círculo 56px, `background: radial-gradient(circle, #7A1030, #5A0A20)`, texto em Cinzel branco — elemento de prestígio vinho (não mais vermelho genérico)
- **Ornamentos tipográficos:** `—◆—`, `✦`, `⸻` na cor `#D4920A` — nunca na cor de texto principal
- **Glassmorphism ancestral (frosted parchment):** `background: rgba(200,180,140,0.50)` + `backdrop-filter: blur(16px) saturate(150%)` + `border: 1px solid rgba(74,32,16,0.25)` — sobre fundo com textura; sem fundo visível por baixo, perde o efeito
- **Sistema de profundidade 3D (4 camadas):** `#A08858` void/recesso → `#B8A070` superfície base → `#D0B888` card elevado → `rgba(200,180,140,0.50)` glass flutuante — cada nível com shadow tier correspondente; jamais superfícies do mesmo valor tonal adjacentes
- **Hover spring (cards):** `transform: translateY(-8px) scale(1.01); transition: 0.35s cubic-bezier(0.34,1.56,0.64,1)` — curva spring com bounce; não usar `ease` simples (fica inerte)
- **Animação de entrada:** `@keyframes arcanoReveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }` — stagger de `0.1s` por card sequencial via `animation-delay`
- **Shimmer em CTA:** `@keyframes arcanoShimmer { 0% { background-position: 0% 50%; } 100% { background-position: 300% 50%; } }` sobre `background: linear-gradient(90deg, #D4920A, #E8B923, #D0B888, #D4920A); background-size: 300%` — animação contínua 4s linear

**CSS base:**
```css
.parchment-arcano {
  /* === PALETA ARCANO v4.0 === */
  --arc-bg:           #B8A070;   /* fundo oxidado — mais escuro, mais peso */
  --arc-bg-deep:      #A08858;   /* recuos, wells, áreas rebaixadas */
  --arc-bg-raised:    #D0B888;   /* superfícies elevadas — mais claro (3D) */
  --arc-glass-bg:     rgba(200,180,140,0.50); /* frosted parchment glass */
  --arc-text:         #0A0200;   /* preto absoluto quente — contraste máximo */
  --arc-text-sec:     #2A1000;   /* texto corrido secundário — escuro legível */
  --arc-text-label:   #3A1800;   /* labels, roles, apoio — NUNCA usar amber aqui */
  --arc-wood:         #4A2010;   /* bordas e ornamentos de madeira — mais escuro */
  --arc-amber:        #D4920A;   /* DECORATIVO APENAS — CTAs, ornamentos, não texto */
  --arc-amber-hi:     #E8B923;   /* amber hover/focus — gold vivo */
  --arc-wine:         #5A0A20;   /* selos de prestígio, bordas de elite */
  --arc-ink:          #1A0800;   /* drop caps e ornamentos finos */

  /* === SOMBRAS 3D (3 tiers) === */
  --arc-shadow-depth: 0 2px 8px rgba(10,2,0,0.25),
                      0 12px 32px rgba(10,2,0,0.22),
                      0 32px 64px rgba(10,2,0,0.15);
  --arc-shadow-float: 0 16px 48px rgba(10,2,0,0.32),
                      0 4px 16px rgba(10,2,0,0.24);

  background: var(--arc-bg);
  color: var(--arc-text);
  font-family: 'IM Fell English', Georgia, serif;
  font-size: 1.125rem;       /* 18px base — INVIOLÁVEL, nunca abaixo */
  line-height: 1.75;
}

/* === TIPOGRAFIA === */
.arcano-title {
  font-family: 'Cinzel Decorative', serif;
  color: var(--arc-text);
  letter-spacing: 0.06em;
}

.arcano-drop-cap::first-letter {
  font-family: 'UnifrakturMaguntia', serif;
  font-size: 3.5em;
  line-height: 0.8;
  float: left;
  color: var(--arc-ink);
  margin-right: 0.08em;
  margin-bottom: 0.04em;
}

/* === SEPARADORES === */
.arcano-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--arc-amber), transparent);
  margin: var(--space-8) 0;
  opacity: 0.6;
}

/* === CARDS — SISTEMA DE PROFUNDIDADE === */
.arcano-card {
  background: var(--arc-bg-raised);
  border: 3px solid rgba(74,32,16,0.35);
  box-shadow: inset 0 0 0 6px rgba(74,32,16,0.06), var(--arc-shadow-depth);
  border-radius: 4px;        /* angular — artefato, não app */
  padding: var(--space-6);
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
              box-shadow 0.35s cubic-bezier(0.34,1.56,0.64,1);
}
.arcano-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: inset 0 0 0 6px rgba(74,32,16,0.06), var(--arc-shadow-float);
}

.arcano-card-deep {
  background: var(--arc-bg-deep);
  border: 3px solid rgba(74,32,16,0.30);
  box-shadow: inset 0 2px 12px rgba(10,2,0,0.15);
  border-radius: 4px;
  padding: var(--space-6);
}

/* === GLASSMORPHISM (frosted parchment) === */
.arcano-glass {
  background: var(--arc-glass-bg);
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  border: 1px solid rgba(74,32,16,0.25);
  border-radius: 4px;
  box-shadow: var(--arc-shadow-depth);
}

/* === CTA COM SHIMMER === */
.arcano-cta {
  background: linear-gradient(90deg, #D4920A, #E8B923, #D0B888, #D4920A);
  background-size: 300%;
  color: #0A0200;
  font-family: 'Cinzel Decorative', serif;
  letter-spacing: 0.08em;
  animation: arcanoShimmer 4s linear infinite;
  border: none;
  padding: 0.75em 2em;
  border-radius: 2px;
  cursor: pointer;
}

/* === ANIMAÇÕES === */
@keyframes arcanoReveal {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes arcanoShimmer {
  0%   { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}

/*
  USO: animation: arcanoReveal 0.6s ease forwards;
  Stagger em lista de cards:
  .arcano-card:nth-child(2) { animation-delay: 0.1s; }
  .arcano-card:nth-child(3) { animation-delay: 0.2s; }
*/
```

---

## MOTOR DE TEMAS CUSTOMIZADOS (Modo Cliente Externo)

Antes de criar qualquer visual para um cliente externo, executar o processo abaixo.

### INTAKE DE MARCA — 7 Elementos

Se o cliente não forneceu identidade visual definida, coletar:

1. **Nome / marca** — como aparece nos materiais
2. **Cores existentes** — hex se souber, ou descrever ("azul marinho, laranja vibrante"); se não tem, perguntar preferências
3. **Tipografia** — tem fonte definida? Se não, deixar sugerir
4. **Produtos / serviços** — o que vende, nomes dos produtos
5. **Tom visual** — 3 adjetivos que descrevem como quer ser visto (ex: "sério, moderno, acessível")
6. **Referências** — marcas, sites, ou estilos que admira (pode mandar screenshot)
7. **Formato de output** — landing page, carrossel, slides, dashboard, app UI, etc.

### TEMPLATE DE TEMA CUSTOMIZADO

Após o intake, gerar e apresentar os tokens antes de executar:

```css
/* TEMA: [Nome da Marca] */
:root {
  /* Paleta */
  --brand-primary:    [cor principal];
  --brand-secondary:  [cor de apoio];
  --brand-accent:     [cor de destaque/CTA];
  --brand-bg:         [fundo principal];
  --brand-bg-card:    [fundo de card/superfície];
  --brand-text-hi:    [texto principal];
  --brand-text-lo:    [texto secundário];

  /* Tipografia */
  --brand-font-display: '[Fonte de impacto]', serif/sans-serif;
  --brand-font-body:    '[Fonte de corpo]', serif/sans-serif;

  /* Forma */
  --brand-radius:     [px — 0 = angular, 8 = suave, 24 = arredondado];
  --brand-shadow:     [estilo de sombra — flat/soft/hard/glow];
}
```

### 5 ESTILOS DE PARTIDA

Quando o cliente não tem preferência clara, propor um dos 5 e deixar escolher:

| Estilo | Paleta | Forma | Tom | Indicado para |
|--------|--------|-------|-----|---------------|
| **Autoridade** | Escuro + branco + acento reservado | Angular, limpo | Sério, direto | Consultores, advogados, finanças |
| **Tech Moderno** | Escuro + azul/verde neon + glass | Semi-angular | Inovador, preciso | SaaS, tecnologia, produtividade |
| **Expert Acolhedor** | Claro + neutros quentes + acento suave | Arredondado | Humano, próximo | Saúde, educação, coaching leve |
| **Bold Creator** | Saturado, contrastes altos, gradientes | Livre, assimétrico | Energético, ousado | Criadores, fitness, entretenimento |
| **Luxury Brand** | Escuro/neutro premium + dourado/cobre | Fino, delicado | Exclusivo, refinado | Moda, premium, alto ticket |

### REGRA DE ISOLAMENTO DE TOKENS

Tokens do cliente externo **nunca** são misturados com tokens CM. Arquivos de cliente usam `--brand-*`, nunca `--gold`, `--void`, `--parchment`. Isso garante que o output do cliente é 100% dele.

---

## PROTOCOLO DE ENGENHARIA REVERSA VISUAL

Quando o usuário envia uma **screenshot, imagem, ou URL de referência** e pede para replicar, entender ou clonar o estilo.

### FASE 1 — ANÁLISE VISUAL

Usar visão (ler a imagem) ou WebFetch (se URL) e extrair sistematicamente:

```
EXTRAÇÃO DE DESIGN SYSTEM

PALETA:
- Cor de fundo principal: #______
- Cor de superfície/card: #______
- Cor de texto primário:  #______
- Cor de texto secundário: #______
- Cor de acento/CTA:      #______
- Cores de destaque extras: #______

TIPOGRAFIA:
- Fonte de headline: ______ (serif / sans / display / mono)
  → Peso: ______  Estilo: ______  Tamanho relativo: ______
- Fonte de corpo: ______ (serif / sans)
  → Line-height: ______  Letter-spacing: ______

ESPAÇAMENTO:
- Densidade geral: compacta / equilibrada / generosa
- Padding de cards: ~______px
- Gap entre seções: ~______px

FORMA:
- Border-radius dominante: ______px (angular / suave / redondo)
- Bordas visíveis: sim/não → cor e espessura

EFEITOS:
- Sombras: flat / soft / hard / elevação multicamada
- Glassmorphism: sim/não
- Gradientes: sim/não → direção e cores
- Animações visíveis: ______

LAYOUT:
- Grid: coluna única / 2 colunas / assimétrico / full-width
- Alinhamento: central / esquerdo / misto
- Hierarquia visual dominante: ______

MOOD / PERSONALIDADE:
- 3 adjetivos que descrevem o visual: ______ / ______ / ______
```

### FASE 2 — SÍNTESE EM TOKENS

Converter a análise em CSS custom properties prontas para uso:

```css
/* TEMA EXTRAÍDO DE: [fonte da referência] */
:root {
  /* [tokens mapeados da análise] */
}
```

### FASE 3 — CLONAGEM DE ESTILO

Após aprovar os tokens, replicar a estética no conteúdo do cliente:
- Usar a estrutura de layout da referência
- Aplicar os tokens extraídos
- Adaptar o conteúdo para a marca do cliente (zero conteúdo da referência)
- Gerar preview (ver seção PREVIEW EM TEMPO REAL)

**Regra de clonagem:** replicar a *linguagem visual*, nunca o *conteúdo*. Paleta + tipografia + efeitos + layout = legítimo. Texto + imagens + marca da referência = proibido.

---

## PREVIEW EM TEMPO REAL (Artifact — Claude Code / claude.ai)

**Regra obrigatória:** todo HTML/CSS gerado é entregue **diretamente na resposta** como artifact completo. O Claude Code abre automaticamente no painel lateral — responsivo, interativo, sem servidor.

### COMO FUNCIONA

O output visual **não é** um arquivo salvo em disco. É um bloco de código HTML completo no corpo da resposta. O Claude Code (e o claude.ai) reconhece o HTML e renderiza no painel de preview ao lado da conversa — exatamente como skills e outros artifacts visuais aparecem.

**Nunca usar:** `preview_start`, servidor Python, `http.server`, ou qualquer infraestrutura de servidor para previews visuais. Isso é desnecessário e cria fricção.

### REGRAS DO HTML DE ARTIFACT

Para que o preview funcione corretamente:

1. **Self-contained** — tudo inline. CSS no `<style>`, JS no `<script>`. Nenhuma dependência de arquivo local.
2. **Fontes via CDN** — usar `@import` do Google Fonts dentro do `<style>`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=IM+Fell+English&family=Inter:wght@400;500;600&display=swap');
   ```
3. **Responsivo por padrão** — sempre incluir:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
   E CSS com breakpoints para mobile (375px) / tablet (768px) / desktop (1280px).
4. **Sem dependências externas de script** — nenhum `<script src="">` de CDN. JS deve ser vanilla inline se necessário.
5. **DOCTYPE completo** — sempre abrir com `<!DOCTYPE html><html lang="pt-BR">`.

### PREVIEW PROGRESSIVO ("abrir enquanto ainda faz")

Para outputs longos, entregar em **blocos progressivos**:

```
Iteração 1 → Hero + Nav (artifact completo da estrutura base)
             → "Estrutura base. Aprovado? Continuo com as próximas seções."
Iteração 2 → HTML atualizado com + seções (novo artifact completo)
             → "Adicionei [seções]. Vejo X para ajustar — quer que eu corrija antes de continuar?"
Iteração final → HTML completo e finalizado
```

Cada iteração substitui a anterior — o usuário sempre vê o estado atual, não partes isoladas.

### USANDO VISÃO COMO FERRAMENTA

Quando o usuário envia uma imagem ou screenshot:
- Analisar visualmente para extrair design system (ver Protocolo de Engenharia Reversa)
- Usar para verificar se o artifact gerado está fiel à referência
- Identificar problemas de hierarquia, contraste e layout que o código não revela diretamente

---

## CAPACIDADES COMPLETAS

O Iluminista não é apenas "aplicador de temas". É diretor de design do arsenal.

### DESIGN GRÁFICO
- Landing pages responsivas (HTML/CSS puro)
- Posts para redes sociais (HTML exportável para screenshot)
- Thumbnails e capas
- Flyers e materiais promocionais (HTML/PDF)
- Banners e headers

### UI/UX
- Interfaces de aplicativos (HTML/CSS, sem frameworks)
- Dashboards de dados com métricas e gráficos
- Painéis de controle
- Onboarding flows (sequência de telas)
- Componentes isolados (botões, cards, formulários, navbars)

### DIAGRAMAÇÃO
- Infográficos (HTML/SVG)
- Diagramas de processo (CSS + SVG)
- Fluxogramas (HTML com layout visual)
- Mapas mentais visuais
- Cronogramas e timelines

### IDENTIDADE VISUAL BÁSICA
- Proposta de paleta de cores (com tokens CSS)
- Sistema tipográfico (escala + pesos + usos)
- Logo mark em CSS/SVG (formas geométricas + tipografia — sem imagem)
- Guia visual simplificado (HTML)

### PRINT-READY
- Documentos PDF-ready (A4, Letter)
- Relatórios com estrutura editorial
- Apresentações (16:9, 4:3)
- E-books e materiais de conteúdo premium

### MOTION (CSS)
- Animações de entrada (fade, slide, scale)
- Hover states elaborados
- Micro-interações
- Loading states
- Parallax simples

---

## SISTEMA DE DESIGN TOKENS

Todos os valores centrais do sistema CM — usáveis em Modo CM.

```css
:root {
  /* === PALETA PRINCIPAL v4.0 === */
  --gold:          #E8B923;   /* gold vivo — mais brilhante e quente */
  --gold-imperial: #D4920A;   /* gold profundo — imperial, burnished */
  --gold-chrome:   #F5D45A;   /* cromo — metallic highlight (uso raro) */
  --gold-dark:     #8B5A14;   /* gold escuro — bordas e ornamentos */
  --wine:          #7A1030;   /* vinho — acento dramático */
  --wine-deep:     #5A0A20;   /* vinho profundo — selos, prestígio */
  --void:          #080808;   /* preto absoluto */
  --void-card:     #121210;   /* card surface */
  --void-float:    #161614;   /* card elevado */
  --parchment:     #D4A050;   /* pergaminho forte — bege "quase laranja" */
  --parchment-deep: #C09040;  /* pergaminho intenso */
  --parchment-light: #E0B868; /* pergaminho elevado */
  --wood:          #2A1208;   /* madeira escura — quase preto */
  --wood-medium:   #4A2010;   /* madeira média */
  --white:         #FDFAF0;   /* off-white quente */
  --ink:           #1A0A00;   /* tinta preta quente */
  --ink-medium:    #3A3530;   /* tinta média */

  /* === HIERARQUIA DE TEXTO — Pergaminho Preto (dark) === */
  /* Usar estes tokens para todos os outputs escuros/void */
  --txt-hi:        #F5EDE0;   /* headlines e títulos — mínimo 20px */
  --txt-md:        #C8C0A8;   /* corpo, parágrafos, citações — mínimo 18px */
  --txt-lo:        #A89880;   /* labels, metadados, roles — mínimo 13px */
  --txt-dim:       #706858;   /* footer, notas, timestamps — mínimo 13px */
  /* INVIOLÁVEL: --txt-md nunca < 18px. --txt-lo e --txt-dim nunca < 13px.
     Abaixo de 13px = EXCLUSIVO decorativo watermark. */

  /* === TIPOGRAFIA === */
  --font-display:  'Cinzel Decorative', serif;
  --font-title:    'Cinzel', serif;
  --font-body:     'IM Fell English', Georgia, serif;
  --font-ui:       'Inter', 'DM Sans', sans-serif;
  --font-mono:     'JetBrains Mono', monospace;

  /* === ESCALA TIPOGRÁFICA v4.0 (bumped) === */
  --text-xs:   0.8125rem;  /* 13px — mínimo absoluto para labels */
  --text-sm:   0.9375rem;  /* 15px — captions, badges */
  --text-base: 1.125rem;   /* 18px — corpo de texto padrão */
  --text-lg:   1.25rem;    /* 20px — corpo com ênfase */
  --text-xl:   1.5rem;     /* 24px — subtítulos */
  --text-2xl:  1.75rem;    /* 28px — títulos de seção */
  --text-3xl:  2.25rem;    /* 36px — títulos de página */
  --text-4xl:  2.75rem;    /* 44px — display médio */
  --text-5xl:  3.5rem;     /* 56px — display grande */
  --text-6xl:  4.5rem;     /* 72px — hero display */

  /* === ESPAÇAMENTO === */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  /* === BORDAS === */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;
  --radius-xl:  24px;
  --radius-full: 9999px;

  /* === SOMBRAS v4.0 (mais intensas) === */
  --shadow-sm:   0 2px 8px rgba(0,0,0,0.08);
  --shadow-md:   0 6px 24px rgba(0,0,0,0.15);
  --shadow-lg:   0 24px 64px rgba(0,0,0,0.25);
  --shadow-gold: 0 0 48px rgba(232,185,35,0.12);
  --shadow-float: 0 24px 64px rgba(0,0,0,0.5), 0 0 48px rgba(232,185,35,0.08);
  --shadow-wine: 0 0 32px rgba(122,16,48,0.15);

  /* === GLASS EFFECT === */
  --glass-bg:     rgba(20,20,18,0.7);
  --glass-border: rgba(232,185,35,0.18);
  --glass-blur:   blur(20px);
  --glass-white-bg: rgba(255,255,255,0.88);
  --glass-white-border: rgba(255,255,255,0.35);
}
```

---

## COMPONENTES DE DESIGN

### Card Base
```css
.cm-card {
  background: var(--void-card);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-float);
}

.cm-card-glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
}

.cm-card-parchment {
  background: var(--parchment);
  border: 3px solid rgba(107,58,8,0.35);
  border-radius: var(--radius-md);
  box-shadow: 0 6px 24px rgba(107,58,8,0.20);
}
```

### Tipografia de Display
```css
.cm-display {
  font-family: var(--font-display);
  font-size: var(--text-6xl);  /* 72px — impacto máximo */
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.06em;
  line-height: 1.05;
}

.cm-h1 {
  font-family: var(--font-title);
  font-size: var(--text-4xl);  /* 44px */
  font-weight: 700;
  letter-spacing: 0.04em;
}

.cm-h2 {
  font-family: var(--font-title);
  font-size: var(--text-2xl);  /* 28px */
  font-weight: 600;
  letter-spacing: 0.03em;
}

.cm-h3 {
  font-family: var(--font-title);
  font-size: var(--text-xl);   /* 24px */
  font-weight: 600;
  letter-spacing: 0.02em;
}

.cm-body {
  font-family: var(--font-body);
  font-size: var(--text-base);  /* 18px — INVIOLÁVEL mínimo para corpo */
  line-height: 1.75;
}
```

### Callout
```css
.cm-callout {
  border-left: 4px solid var(--gold);
  padding: var(--space-4) var(--space-6);
  background: rgba(232,185,35,0.06);
  margin: var(--space-6) 0;
}

.cm-callout-wine {
  border-left: 4px solid var(--wine);
  padding: var(--space-4) var(--space-6);
  background: rgba(122,16,48,0.04);
  margin: var(--space-6) 0;
}

.cm-callout-white {
  border-left: 4px solid var(--gold-imperial);
  padding: var(--space-4) var(--space-6);
  background: #FAF5E8;
  margin: var(--space-6) 0;
}
```

### Separador Ornamental
```css
.cm-divider {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin: var(--space-8) 0;
  color: var(--gold);
  opacity: 0.5;  /* mais visível */
}
.cm-divider::before,
.cm-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: currentColor;
}
/* HTML: <div class="cm-divider">◆</div> */
```

---

## FORMATOS E ESPECIFICAÇÕES

### Instagram — Carrossel (1080×1080px)
- **Proporção:** 1:1 (quadrado) ou 4:5 (retrato)
- **Slides:** 10 slides (Chavossel) ou variantes de 3, 5, 7
- **Slide 1 (Capa):** headline bold + imagem/background + acento gold
- **Slides 2–9 (Corpo):** texto + elemento visual hierárquico
- **Slide 10 (CTA):** call to action + marca
- **Tamanho de texto mínimo:** 28px (legível em mobile — INVIOLÁVEL)
- **Margem de segurança:** 80px em todos os lados

### Landing Page (HTML/CSS)
- **Layout:** Seções com max-width 1200px, padding lateral 24–48px
- **Breakpoints:** mobile (375), tablet (768), desktop (1280)
- **Hero:** altura 100vh com background + texto centralizado
- **Seções principais:** Problem > Solution > Social Proof > Offer > FAQ > CTA
- **CTA buttons:** gold background + text escuro + border-radius generoso
- **Performance:** inline crítico CSS, fonts com display:swap

### PDF / Relatório
- **Tamanho:** A4 (210×297mm) ou Letter (216×279mm)
- **Margens:** 25mm em todos os lados
- **Tipografia:** corpo 12–14pt, títulos 20–28pt, rodapé 10pt (nunca abaixo)
- **Headers de página:** barra gold no topo com logo + número de página

### Slides / Apresentação
- **Proporção:** 16:9 (1920×1080px) padrão, 4:3 para apresentações formais
- **Slide de título:** full-bleed background + texto centralizado grande
- **Slides de conteúdo:** máximo 5 bullets ou 1 ideia principal + visual
- **Consistência:** fundo, tipografia e paleta idênticos em todos os slides

### Dashboard / Relatório de Métricas
- **Grid:** CSS Grid 12 colunas, cards com números grandes
- **Hierarquia:** Número grande (display) > label (small) > trend indicator
- **Cor de status:** verde `#22c55e`, amarelo `#eab308`, vermelho `#ef4444`
- **Fundo:** usar Pergaminho Preto (void) para maior contraste de dados

### UI de Aplicativo
- **Componentes:** navbar, sidebar, cards de conteúdo, formulários, modais
- **Estados:** default, hover, active, disabled, loading, error
- **Acessibilidade:** focus states visíveis, contraste WCAG AA mínimo
- **Responsividade:** mobile-first para apps, desktop-first para dashboards

---

## UX PRINCIPLES — OS 6 CRITÉRIOS OBRIGATÓRIOS

Todo output visual deve passar por estes 6 filtros antes de ser entregue:

**1. ALINHAMENTO**
- Elementos relacionados precisam estar alinhados entre si (grid mental)
- Nunca misturar alinhamento central e lateral na mesma seção sem propósito
- Usar grid de 8px como base (todos os espaçamentos múltiplos de 8)
- Títulos: central em hero, esquerdo em corpo de texto

**2. HIERARQUIA**
- O olho deve saber o que ler primeiro sem esforço
- Regra dos 3 níveis: Display (o mais importante) > H1/H2 (contexto) > Body (detalhe)
- Nunca ter dois elementos de mesmo peso visual competindo pelo foco
- O elemento mais importante deve ser no mínimo 1.5x maior que o próximo

**3. CONTRASTE — LEI ABSOLUTA**

> **A regra é uma só: fundo claro = texto escuro. Fundo escuro = texto claro. Sem exceção, sem nuance, sem "mas fica bonito".**

**PRINCÍPIO ÚNICO:**
- Se o fundo é claro (branco, bege, parchment, creme) → texto ESCURO (preto, quase-preto, marrom escuríssimo)
- Se o fundo é escuro (preto, void, marrom escuro) → texto CLARO (branco, off-white, gold vivo)
- **NUNCA** claro sobre claro. **NUNCA** escuro sobre escuro. Zero tolerância.

**APLICAÇÃO POR PERGAMINHO:**
| Pergaminho | Fundo | Texto corpo | Texto destaque | Texto label |
|------------|-------|-------------|---------------|-------------|
| **Branco** | claro `#FDFAF0` | escuro `#141210` | escuro `#3A3530` | escuro `#3A3530` |
| **Preto** | escuro `#080808` | claro `#C8C0A8` | claro `#F5EDE0` | claro `#A89880` |
| **Dourado** | claro `#D4A050` | escuro `#1A0A00` | escuro `#2A1200` | escuro `#2A1200` |
| **Arcano** | claro `#B8A070` | escuro `#0A0200` | escuro `#2A1000` | escuro `#3A1800` |

**GOLD COMO TEXTO — REGRAS:**
- Gold `#E8B923` sobre fundo escuro → **APROVADO** (claro sobre escuro)
- Gold `#E8B923` sobre fundo claro → **PROIBIDO como texto** (claro sobre claro). Usar apenas como borda, ícone, ou ornamento — nunca como texto legível.
- Imperial gold `#D4920A` sobre fundo claro → **PROIBIDO como texto corpo**. Permitido apenas como acento decorativo (bordas, separadores).

**WINE COMO TEXTO — REGRAS:**
- Wine `#7A1030` sobre fundo claro → **APROVADO** (escuro sobre claro)
- Wine `#7A1030` sobre fundo escuro → **PROIBIDO como texto** (escuro sobre escuro). Usar apenas como borda ou badge com texto claro dentro.

**REGRA DE HUE FATIGUE:** dois tons quentes similares (ex: marrom médio sobre bege médio) podem parecer que contrastam mas cansam o olho. **Solução:** sempre usar texto quase-preto (`#1A0A00`, `#0A0200`, `#141210`) sobre fundos quentes — não marrom "meio-termo".

**TAMANHO MÍNIMO POR CONTEXTO — INVIOLÁVEL:**
- Corpo de texto corrido: **mínimo 18px** (1.125rem)
- Labels, metadados, roles (`--txt-lo`): **mínimo 13px** (0.8125rem)
- Footer, notas, timestamps (`--txt-dim`): **mínimo 13px** (0.8125rem)
- Títulos de seção: **mínimo 28px** (1.75rem)
- **PROIBIDO para conteúdo lido:** qualquer tamanho abaixo de 13px — reservado exclusivamente para decorativo watermark
- Em carrosséis Instagram: mínimo 28px (legibilidade em mobile)
- Em Stories: mínimo 32px

**4. CARDS**
- Cards criam separação visual sem precisar de linhas explícitas
- Espaçamento interno consistente: padding mínimo 24px
- Sombra ou borda — nunca os dois juntos (gera poluição)
- Cards relacionados devem ter altura consistente (especialmente em grid)

**5. CALLOUTS**
- Callout = informação que não pode ser ignorada
- Máximo 2 callouts por seção (se tudo é destaque, nada é destaque)
- Usar border-left colorida, não caixas coloridas cheias
- Callouts de aviso/alerta: vinho (`--wine`). Callouts de destaque: gold (`--gold`). Callouts de informação: imperial gold (`--gold-imperial`).

**6. RESPIRAÇÃO (Whitespace)**
- Espaço vazio não é espaço desperdiçado — é ritmo
- Espaçamento entre seções: mínimo 64px (4× linha base)
- Parágrafos: line-height 1.6–1.8 (nunca abaixo de 1.5)
- Regra: se parecer lotado, dobrar o espaçamento e verificar

---

## EFEITOS ESPECIAIS — COMO APLICAR

### Glassmorphism
```css
.glass-card {
  background: rgba(20, 20, 18, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(232, 185, 35, 0.15);
  border-radius: 16px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(232, 185, 35, 0.12);
}
```
**Regra:** Glassmorphism só funciona com algo visível por baixo (imagem, gradiente, blur). Sobre fundo sólido, perde o efeito.

### Floating Cards (3D Depth)
```css
.floating-card {
  transform: translateZ(0);
  box-shadow:
    0 2px 4px rgba(0,0,0,0.3),
    0 8px 16px rgba(0,0,0,0.25),
    0 20px 40px rgba(0,0,0,0.2),
    0 40px 80px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.floating-card:hover {
  transform: translateY(-8px) translateZ(0);
}
```

### Gold Glow
```css
.gold-glow {
  color: var(--gold);
  text-shadow:
    0 0 12px rgba(232, 185, 35, 0.6),
    0 0 24px rgba(232, 185, 35, 0.4),
    0 0 48px rgba(232, 185, 35, 0.2);
}
```
**Regra:** Usar apenas em 1 elemento por tela. Se tudo brilha, nada brilha.

### Gradiente de Background (Pergaminho Preto)
```css
.bg-void-gradient {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(232,185,35,0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(122,16,48,0.03) 0%, transparent 40%),
    #080808;
}
```

---

## GUIA POR TIPO DE CONTEÚDO

| Conteúdo | Pergaminho / Estilo | Efeito principal | Fonte primária |
|----------|---------------------|-----------------|----------------|
| Carrossel educativo | Branco | Sem efeito especial | Cinzel + IM Fell |
| Carrossel provocativo | Preto | Gold glow no texto | Cinzel Decorative |
| Landing page de lançamento | Preto | Glassmorphism + floating | Cinzel + IM Fell |
| Landing page consultoria | Branco | Cards suaves | Cinzel + Inter |
| Relatório de diagnóstico | Branco | Tabelas + callouts | Cinzel + Inter |
| Slides de apresentação | Preto | 3D depth em cards | Cinzel Decorative |
| Conteúdo premium | Dourado | Textura + ornamentos | Cinzel + IM Fell |
| Dossiê / artefato histórico | Arcano | Drop cap gótico + moldura madeira | Cinzel + IM Fell + UnifrakturMaguntia (drop cap) |
| Metodologia proprietária premium | Arcano | Grão de papel + divisor âmbar | Cinzel + IM Fell |
| Dashboard de métricas | Preto | Cards flutuantes | Inter (dados) |
| UI de aplicativo | Tema customizado | Flat + elevação sutil | Sans-serif da marca |
| Infográfico | Tema customizado | SVG + cor da marca | Sans-serif da marca |
| Material de cliente externo | Motor de Temas | Definido no intake | Definida no intake |

---

## LOOP DE FEEDBACK

Após qualquer preview, sempre oferecer exatamente **3 direções de refinamento** específicas ao que foi gerado. Nunca genéricas. Sempre contextuais.

Formato:
```
Preview aberto. O que você vê está [avaliação objetiva em 1 frase].

Três direções disponíveis:
→ A: [refinamento específico — ex: "aumentar o hero para 100vh e centralizar o headline"]
→ B: [variação de tom — ex: "versão mais limpa, Pergaminho Branco, sem glassmorphism"]
→ C: [ajuste de detalhe — ex: "reduzir a intensidade do gold glow e aumentar padding dos cards"]

Qual caminho ou instrução específica?
```

**Regra:** nunca entregar como "finalizado" sem ao menos uma rodada de feedback. O design só está pronto quando o usuário diz que está.

---

## REGRAS DO TEMA VISUAL

**R1 — Pergaminho antes de conteúdo.**
Antes de criar qualquer output visual CM, definir qual dos 4 Pergaminhos: Branco (autoridade), Preto (impacto), Dourado (transformação), Arcano (artefato ancestral). A escolha determina tudo.

**R2 — Contraste é inviolável: claro vs escuro, sempre.**
Fundo claro = texto escuro. Fundo escuro = texto claro. Sem exceção. Nunca claro sobre claro, nunca escuro sobre escuro. Se o texto não salta do fundo à primeira vista, o design está errado. Verificar ANTES de entregar.

**R3 — Uma fonte de impacto por tela.**
Cinzel Decorative é para o elemento de maior destaque. Não para todos os títulos.

**R4 — Gold é escassez, vinho é poder.**
O ouro perde poder quando usado em excesso — máximo 25% da área visual em gold. Vinho (`#7A1030`) é o segundo acento — usado para tensão, alerta, prestígio. Nunca combinar gold + wine no mesmo elemento (competem).

**R5 — Glassmorphism exige background.**
Sem algo visível por baixo, glassmorphism é só blur em nada. Criar o contexto antes do efeito.

**R6 — Mobile primeiro para Instagram, desktop primeiro para landing pages.**
Testar sempre no formato de destino antes de finalizar.

**R7 — Espaço vazio é um elemento de design.**
Não preencher tudo. O que não está ali também comunica.

**R8 — Artifact antes de entregar.**
Nenhum HTML/CSS é considerado entregue sem ser gerado como artifact completo na resposta. O painel de preview abre automaticamente. Gerar → Artifact no chat → Loop de feedback.

**R9 — Modo determina vocabulário.**
Modo CM: tokens CM + glossário CM. Modo Cliente: tokens da marca + vocabulário do cliente. Nunca misturar.

**R10 — Tokens de cliente são isolados.**
Variáveis `--brand-*` para clientes externos. Nunca `--gold`, `--void`, `--parchment` em outputs de clientes. Isolamento total.

**R11 — Loop de feedback é obrigatório.**
Após qualquer preview, oferecer 3 direções de refinamento contextuais. O design só encerra com aprovação explícita.

**R12 — Engenharia reversa antes de clonagem.**
Se o usuário enviou uma referência visual, executar as 3 fases do protocolo (Análise → Síntese em Tokens → Clonagem) antes de qualquer código.

---

## INTEGRAÇÃO NO PIPELINE

O Plugin Visual é **transversal** — não ocupa uma camada, aplica-se a todas:

```
Modo CM — qualquer plugin pode acionar o Visual:

Chavossel (05) → Visual aplica Estética CM ao carrossel
Chavideo (04) → Visual formata roteiro em template de script
Pergaminho de Copy (03) → Visual formata em Pergaminho Preto/Branco/Dourado
Mapa de Campanha (06) → Visual cria cronograma visual / dashboard de campanha
Portal da Escala (08) → Visual cria dashboard de métricas
Relatório de Terreno (01) → Visual formata em PDF/HTML estruturado

Modo Cliente Externo — fluxo completo:

Intake de Marca (7 elementos)
    → Motor de Temas Customizados (proposta de tokens)
    → Aprovação do tema
    → Execução do output visual
    → Preview em tempo real
    → Loop de feedback
    → Entrega final (100% identidade do cliente)
```

---

## 💡 Sugestões Após Entrega

**No pipeline:** Camada Transversal — Estética. Aplica-se a qualquer output de qualquer camada. Recebe de: qualquer plugin que produza conteúdo visual. Entrega para: o output final — carrosséis (Chavossel), materiais de venda, apresentações. É o último passo de qualquer pipeline visual.

Antes de sugerir, verifica o contexto da sessão: que conteúdo foi estilizado, se a narrativa do material já estava estruturada antes da estética ser aplicada. As sugestões são condicionais — faz apenas as que o utilizador genuinamente ainda não tem.

**Regra:** entrega a estética aplicada primeiro — recomenda depois, nunca durante a execução.

| Se o utilizador ainda não tem… | Sugestão proativa |
|---|---|
| Carrossel com narrativa estruturada | "Estética aplicada. Se o conteúdo visual vai para carrossel, seria o momento para o **Chavossel** — garante que a narrativa e a sintaxe estão alinhadas com o motor Figma antes de gerar o layout final." |
| Copy calibrada para o mesmo material | "A estética potencializa copy forte. Se a copy deste material ainda não foi calibrada, o **Pergaminho de Copy** é o próximo passo — depois a estética serve o texto, não o contrário." |
| Plano de distribuição | "Se este material é peça de campanha, o **Mapa de Campanha** define o contexto de uso — qual fase, qual canal, qual objetivo." |

---

## Changelog

### v4.0 — Março 2026
**OVERHAUL COMPLETO — Paleta Vivificada + Fontes Maiores + Contraste Inviolável**

**Paleta:**
- Gold principal: `#d4af37` → `#E8B923` (mais brilhante e quente)
- Adicionado `--gold-imperial: #D4920A` (gold profundo, burnished)
- Adicionado `--gold-chrome: #F5D45A` (metallic highlight)
- Adicionado `--wine: #7A1030` e `--wine-deep: #5A0A20` (acento dramático)
- Adicionado `--wood: #2A1208` e `--wood-medium: #4A2010` (madeira escura)
- Parchment: `#f5edd6` → `#D4A050` (bege forte "quase laranja")
- Void: `#0a0a08` → `#080808` (preto absoluto)
- Todos os 4 Pergaminhos atualizados com a nova paleta

**Tipografia:**
- Escala inteira aumentada: base 16px → 18px, display 60px → 72px
- Body mínimo: 15px → 18px (INVIOLÁVEL)
- Labels mínimo: 11px → 13px (INVIOLÁVEL)
- Títulos mínimo: 28px
- Carrossel Instagram mínimo: 24px → 28px
- Pesos mais bold em todos os headings

**Contraste:**
- Corpo de texto: 4.5:1 → 7:1 mínimo (WCAG AAA obrigatório)
- Combinações verificadas documentadas com ratios exatos
- Combinações proibidas listadas explicitamente
- Regra de hue fatigue formalizada (escurecer +2 stops)
- Palavra "inviolável" adicionada em todas as regras de tamanho e contraste

**Hierarquia Preto (`--txt-*`):**
- `--txt-hi`: `#f5f0e8` → `#F5EDE0`
- `--txt-md`: `#b8b098` → `#C8C0A8` (mais claro = mais contraste)
- `--txt-lo`: `#9a9080` → `#A89880` (mais claro)
- `--txt-dim`: `#5a5648` → `#706858` (mais claro)
- Mínimos: 15px/11px/11px → 18px/13px/13px

**Sombras e efeitos:**
- Todas as sombras intensificadas
- Gold glow mais forte e visível
- Wine como segunda cor de acento em gradientes de background
- Bordas mais espessas (1px → 2-3px) para presença visual

### v3.1 — Março 2026
**Modificado — Pergaminho Arcano:**
- Background `#EDE0C4` → `#C8B890` (oxidado, saturado, com caráter atmosférico real)
- Adicionado token `--arc-bg-raised: #D8C9A0` (superfícies elevadas para profundidade 3D)
- Adicionado token `--arc-glass-bg: rgba(220,205,165,0.50)` (frosted parchment glass)
- Adicionado token `--arc-text-label: #5C2A00` (labels e roles — texto legível, não amber)
- `--arc-text-sec` corrigido: `#3D1F00` → `#4A1E00` (mais escuro, melhor contraste)
- Amber (`#C17F24`) declarado exclusivamente decorativo — proibido como texto legível corrido
- Adicionado `--arc-amber-hi: #D4920A` para estados hover/focus
- Sombras expandidas: sistema de 3 tiers (`--arc-shadow-depth` + `--arc-shadow-float`)
- Glassmorphism ancestral documentado (frosted parchment + blur(16px) saturate(140%))
- Sistema de profundidade 4 camadas documentado nos efeitos
- Hover spring: `translateY(-8px) scale(1.01)` com `cubic-bezier(0.34,1.56,0.64,1)`
- Animações: `@keyframes arcanoReveal` (fade+slide entrada) e `@keyframes arcanoShimmer` (CTA)
- CSS base reescrito: `.arcano-card` usa bg-raised (era bg-deep), hover com spring, `.arcano-card-deep`, `.arcano-glass`, `.arcano-cta` com shimmer

**Modificado — Pergaminho Preto:**
- Glassmorphism expandido para 3 variantes (leve/médio/pesado) com valores explícitos
- Sistema de profundidade 4 camadas documentado (void → card → floating → glass elevado)
- Motion documentado: hover lift spring, `@keyframes voidReveal` (blur-fade), `@keyframes goldPulse` (CTA)

**Preservado integralmente:** Pergaminhos Branco e Dourado, Motor de Temas, Engenharia Reversa, Preview em Tempo Real, Loop de Feedback, Capacidades Completas, UX Principles, todos os tokens de sistema, R1–R12, componentes, formatos e integração no pipeline.

### v3.0 — Março 2026
**Adicionado:**
- Pergaminho Arcano (4º Pergaminho): fundo `#EDE0C4`, texto `#1A0A00`, madeira `#6B3A1F`, âmbar `#C17F24` — para artefatos históricos, dossiês premium e metodologia proprietária; inclui drop cap gótico (UnifrakturMaguntia), moldura de madeira, grão de papel, divisor âmbar, selo de cera
- Tokens de hierarquia de texto dark (`--txt-hi`, `--txt-md`, `--txt-lo`, `--txt-hi`) com valores corrigidos para legibilidade — adicionados ao SISTEMA DE DESIGN TOKENS
- Regras de tamanho mínimo por contexto na seção UX Principles (Contraste): corpo mínimo 15px, labels/metadados mínimo 11px, proibição de 9–10px para conteúdo lido
- Nota sobre contraste perceptual por similaridade de matiz (hue fatigue) nos UX Principles

**Modificado:**
- Pergaminho Dourado: texto secundário `#5c4030` → `#3a1800` (saída da zona hue-on-hue)
- Pergaminho Dourado: adicionada regra de corpo mínimo 16px
- Pergaminho Preto: hierarquia de texto expandida de 2 para 4 níveis com tokens `--txt-*` e tamanhos mínimos documentados; `--txt-lo: #9a9080` (era `#726a58`); `--txt-dim: #5a5648` (era `#3a3830`)
- R1: atualizado de "3 Pergaminhos" para "4 Pergaminhos" com descrição de cada um
- MODO CM: atualizado de "3 Pergaminhos" para "4 Pergaminhos"
- Tabela GUIA POR TIPO DE CONTEÚDO: 2 linhas novas para o Arcano

**Preservado integralmente:** Pergaminhos Branco, Preto e Dourado (exceto correções documentadas), Motor de Temas, Engenharia Reversa, Preview em Tempo Real, Loop de Feedback, Capacidades Completas, R2–R12, todos os componentes, formatos e efeitos especiais.

### v2.0 — Março 2026
Expansão para sistema de design universal. Adicionado: Modo CM vs Modo Cliente, Motor de Temas Customizados, Intake de Marca (7 elementos), Protocolo de Engenharia Reversa Visual, Preview em Tempo Real (Claude Code), Loop de Feedback, Capacidades Completas (UI/UX, diagramação, motion, identidade), Regras R8–R12. Preservado integralmente: 3 Pergaminhos, tokens CM, componentes, formatos, UX Principles, efeitos especiais, R1–R7.

### v1.0 — Março 2026
Versão inicial — 3 Pergaminhos, tokens CM, estética Chave Mestra.

---

*Tema Visual v3.1 — Março 2026*
*Parte do Arsenal Chave Mestra — Visual (Plugin 05) / Camada: Transversal — Estética*
*O Iluminista — o plugin que dá forma ao que os outros criam*

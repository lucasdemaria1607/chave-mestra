# Chave Mestra — Ecossistema de Coprodução Digital

Sistema de criação, estratégia e operação para qualquer expert, marca ou negócio digital. Estruturado em 7 camadas, executado por 6 plugins de IA.

**Tese central:** Personalidade + Inteligência = diferenciação real e resultados sustentáveis.

**Natureza do sistema:** ecossistema de coprodução — opera para qualquer cliente. A marca Chave Mestra é a arquitetura; invisível nos outputs para clientes externos.

---

## Estrutura do Projeto

```
CHAVE-MESTRA/
├── 00-FUNDACAO/          → Manifesto, Mapa do Projeto, Glossário, Modo Cliente
├── 01-PLUGINS/           → Os 6 plugins com skills e referências
│   ├── 00-chaveiro/      → Meta-manutenção + Conhecimento + Tesouro dos Erros
│   ├── 01-cartografo/    → Diagnóstico de Mercado + Persona
│   ├── 02-alquimista/    → Copy + Oferta + Escala + Frameworks
│   ├── 03-bardo/         → Vídeo + Carrossel + Headlines + Scripts
│   ├── 04-arauto/        → Campanha + Notion + Protocolo Massivo
│   └── 05-iluminista/     → Design, UX e Produção Visual (5 skills)
├── 04-PERGAMINHOS/       → Conteúdo produzido (brancos/pretos/dourados)
├── 05-ASSETS/            → Brand kit, tema visual, prompts
└── 06-TESOURO-DOS-ERROS/ → Registro de erros e aprendizados
```

Cada plugin tem:
- `.claude-plugin/plugin.json` — manifesto com gatilhos de ativação
- `README.md` — visão geral do plugin e suas skills
- `skills/<nome>/SKILL.md` — manual técnico de operação
- `skills/<nome>/[referências].md` — materiais de apoio co-locados

---

## Os 6 Plugins

| # | Nome | Diretório | Camadas | Skills |
|---|------|-----------|---------|--------|
| 00 | Chaveiro | `01-PLUGINS/00-chaveiro/` | Meta + C0 | chaveiro, forja-do-conhecimento, tesouro-dos-erros, ritual-da-chave |
| 01 | Cartógrafo | `01-PLUGINS/01-cartografo/` | C1 — Diagnóstico | portal-do-terreno, forja-da-persona, forja-do-universo |
| 02 | Alquimista | `01-PLUGINS/02-alquimista/` | C2 — Estratégia + C6 — Escala | pergaminho-de-copy, forja-de-oferta, portal-da-escala, frameworks-anuncios |
| 03 | Bardo | `01-PLUGINS/03-bardo/` | C3 — Criação | chavideo, chavossel, headline-generator, script-creator, script-analyzer, copy-enhancer |
| 04 | Arauto | `01-PLUGINS/04-arauto/` | C4 — Lançamento + C5 — Operação | mapa-de-campanha, esteira-notion, protocolo-massivo |
| 05 | Iluminista | `01-PLUGINS/05-iluminista/` | Transversal | sistema-de-design, forja-de-imagem, arquiteto-de-experiencia, ponte-figma, publicador-visual |

---

## Gatilhos de Ativação

| Gatilho | Plugin | Skill |
|---------|--------|-------|
| "diagnóstico", "me avalia", "quero começar", "novo projeto", "novo cliente", "de onde eu começo", "por onde eu começo" | Chaveiro | chaveiro (Protocolo 0) |
| "chaveiro", "assimila esse livro/PDF", "atualiza o skill X", "onde isso se encaixa" | Chaveiro | chaveiro (Protocolos 1-5) |
| "Zettelkasten", "nota permanente", "modelos mentais", "documenta isso" | Chaveiro | forja-do-conhecimento |
| "Tesouro dos Erros", "registra esse erro", "que erros existem para", "o que pode dar errado" | Chaveiro | tesouro-dos-erros |
| "ritual da chave", "Lua Cheia", "Forja Semanal", "Giro da Chave", "planejamento mensal", "pauta da semana", "workflow", "rotina de criação" | Chaveiro | ritual-da-chave |
| "lua cheia expansão", "ciclo de expansão", "roda o lua cheia", "ciclo mensal de notas" | Chaveiro | lua-cheia-expansao |
| "analisa o mercado", "mapa do terreno", "pesquisa de nicho", "players", "brechas" | Cartógrafo | portal-do-terreno |
| "mapeia a persona", "SZC", "Alma da Persona", "quem é o lead", "inferno/purgatório/céu" | Cartógrafo | forja-da-persona |
| "worldbuilding", "universo de marca", "Primal Branding", "StoryBrand", "léxico de marca", "Forja do Universo", "Mapa do Universo", "DNA de marca" | Cartógrafo | forja-do-universo |
| "ativos de percepção", "mapa de ativos", "diagnóstico de percepção", "calibra os ativos", "engenharia de credibilidade", "autoridade percebida", "como construir confiança", "como construir status", "diagnóstico de sinalização" | Cartógrafo | ativos-de-percepcao |
| "copy", "Copy 3x5", "Método Carga", "calibra a peça", "nível de consciência" | Alquimista | pergaminho-de-copy |
| "cria a oferta", "stack de bônus", "equação de valor", "garantia", "oferta irresistível" | Alquimista | forja-de-oferta |
| "diagnóstico de fase", "alavancas", "CAC", "LTV", "escala o negócio", "esteira de valor" | Alquimista | portal-da-escala |
| "frameworks de anúncio", "templates de oferta", "Manychat" | Alquimista | frameworks-anuncios |
| "roteiro de vídeo", "chavideo", "reel", "script", "Progymnasmata" | Bardo | chavideo |
| "carrossel", "chavossel", "10 slides", "ensaio visual" | Bardo | chavossel |
| "cavalo de troia", "entra no mundo deles", "usa cultura pop", "conteúdo que não parece vendedor", "referência cultural", "topo de funil por imersão" | Bardo | cavalo-de-troia |
| "gere headlines", "headlines para", "ideias de conteúdo" | Bardo | headline-generator |
| "cria roteiro a partir da headline", "desenvolve roteiro" | Bardo | script-creator |
| "analisa esse roteiro viral", "engenharia reversa" | Bardo | script-analyzer |
| "otimiza essa copy para fala", "melhora o roteiro" | Bardo | copy-enhancer |
| "campanha", "lançamento", "meteórico", "desafio", "cronograma" | Arauto | mapa-de-campanha |
| "popula o Notion", "MINHA ESTEIRA", "cria as tarefas no Notion" | Arauto | esteira-notion |
| "protocolo massivo", "protocolo luxo", "protocolo urgência", "campanha intensiva" | Arauto | protocolo-massivo |
| "cria novo produto na esteira", "novo produto", "adiciona produto", "cria produto no sistema", "novo infoproduto" | Arauto | criar-produto-esteira |
| "prospecção ativa", "venda direta", "vender pelo Pix", "Pix sem plataforma", "cadência de prospecção", "registra objeção", "objeções do campo", "feedback de prospecção", "ajusta abordagem" | Arauto | prospeccao-ativa |
| "registra métricas", "como foi o lançamento", "retrospectiva do produto", "dashboard do produto", "resultado do lançamento", "preenche as métricas", "analisa o desempenho", "CAC do produto" | Alquimista | metricas-produto |
| "tema visual", "paleta", "design system", "pergaminho branco/preto/dourado/arcano" | Iluminista | sistema-de-design |
| "gera imagem", "forja de imagem", "nano banana", "edita imagem" | Iluminista | forja-de-imagem |
| "UX", "hierarquia visual", "layout", "arquiteto de experiência" | Iluminista | arquiteto-de-experiencia |
| "manda pro Figma", "ponte Figma", "Chavossel Figma", "renderiza no Figma" | Iluminista | ponte-figma |
| "publica no Notion" (visual), "exporta visual", "galeria visual" | Iluminista | publicador-visual |
| "sincroniza rotinas", "sincroniza no notion", "publica outputs no notion" | Sync | Protocolo Sync Rotinas → Notion |
| "exporta notas", "exporta do notion", "traz notas pro git" | Sync | Protocolo Export Notas → Git |

---

## Regras de Operação

### Regra Menos Um — Detecção de Ambiente

Antes de qualquer coisa, identificar o tier de operação do Dossiê:

| Sinal | Tier | Modo Dossiê |
|-------|------|-------------|
| Ferramentas `Read`/`Write`/`Edit` disponíveis | **Tier 1** | Ler/escrever `dossie.md` automaticamente |
| Ferramentas `notion-*` disponíveis | **Tier 1** | Ler/escrever via Notion MCP |
| Ferramentas `drive-*` disponíveis | **Tier 1** | Ler/escrever via Drive MCP — buscar `CLIENTES/[nome]/00-DOSSIE/DOSSIE.md`. Auto-salvar cada output na subpasta correspondente durante a sessão. |
| Project Knowledge presente, sem file tools | **Tier 2** | Ler do contexto; gerar Estado Compacto ao final |
| Nenhuma ferramenta de arquivo ou MCP | **Tier 3** | Verificar se usuário colou Estado Dossiê |

**Tier 3 sem Estado Dossiê colado:** perguntar → *"Tem um Estado Dossiê desse projeto para colar? Ou quer iniciar um novo?"*

**Tier 3 com Estado Dossiê colado:** confirmar → *"Contexto carregado: [Projeto], Fase [N]. Continuando de onde parou."*

**Ao final de toda sessão em Tier 2 ou 3:** gerar automaticamente o **Estado Dossiê Compacto** atualizado e orientar o usuário a salvar. Formato completo em `05-ASSETS/templates-cliente/PROTOCOLO-DOSSIE.md`.

---

### Protocolo de Auto-Gravação — Drive MCP

**GATILHO:** ferramentas `drive-*` detectadas (Google Drive MCP conectado).

**Início de sessão:**
1. Buscar pasta do cliente: `search_files "[nome-cliente] DOSSIE"` ou navegar em `CLIENTES/[nome-cliente]/`
2. Se pasta existe → ler `00-DOSSIE/DOSSIE.md` → carregar contexto
3. Se pasta não existe → executar `SOP-DRIVE-SETUP.md` para criar a estrutura
4. Confirmar ao usuário: *"Contexto carregado: [Cliente], Fase [N]. [Última ação]. Continuando."*

**Durante a sessão — após gerar cada output, salvar automaticamente:**

| Output gerado | Salvar em |
|---|---|
| Roteiro de vídeo (Chavideo) | `05-CRIACAO/roteiros/[YYYY-MM-DD]-[tema].md` |
| Carrossel (Chavossel) | `05-CRIACAO/carrosseis/[YYYY-MM-DD]-[tema].md` |
| Copy — post | `05-CRIACAO/copy/posts/[YYYY-MM-DD]-[tema].md` |
| Copy — e-mail | `05-CRIACAO/copy/emails/[YYYY-MM-DD]-[tema].md` |
| Copy — anúncio | `05-CRIACAO/copy/ads/[YYYY-MM-DD]-[tema].md` |
| Headlines | `05-CRIACAO/headlines/headlines-[YYYY-MM].md` (append) |
| DNA / Universo de Marca | `02-IDENTIDADE/dna-de-marca.md` |
| Alma da Persona / Terreno | `03-INTELIGENCIA/[alma-da-persona | relatorio-de-terreno].md` |
| Oferta estruturada | `04-ESTRATEGIA/oferta-estruturada.md` |
| Mapa de campanha | `04-ESTRATEGIA/mapa-de-campanha.md` |
| Entrega ao cliente | `08-ENTREGAS/entrega-fase-[N].md` |
| Relatório de ciclo | `09-EVOLUCAO/relatorio-[YYYY-MM].md` |

**Fim de sessão:**
1. Atualizar `00-DOSSIE/DOSSIE.md`: fase atual + novos outputs registrados + próxima ação
2. Confirmar ao usuário: *"Drive atualizado. Próxima sessão retoma de: [ponto exato]."*

**Regra:** nunca esperar o fim da sessão para salvar. Cada output vai ao Drive imediatamente após gerado — se a sessão cair, nada é perdido.

---

### Regra Zero — Diagnóstico Antes de Tudo

**Quando o usuário inicia um novo projeto, cliente ou diz "quero começar":**
1. Ative o Chaveiro → execute o **Protocolo 0 (Diagnóstico Interativo)** do `chaveiro/SKILL.md`
2. Conduza o exame das 6 dimensões (D1-D6)
3. Gere a Matriz de Diagnóstico (🔴🟡🟢)
4. Identifique o tipo de jornada
5. Crie o Dossiê CM a partir do template em `05-ASSETS/dossies/TEMPLATE-DOSSIE.md`
6. Gere o roadmap personalizado em 3 horizontes (AGORA / PRÓXIMO / CONTÍNUO)
7. Despache para o primeiro plugin indicado

**Jornada padrão (Starter Pack — do zero):**
```
Fase 0: Fundação     → Forja do Universo + Ritual da Chave (§1 do Dossiê)
Fase 1: Inteligência → Portal do Terreno + Forja da Persona (§2 do Dossiê)
Fase 2: Estratégia   → Forja de Oferta + Mapa de Campanha (§3 do Dossiê)
Fase 3: Criação      → Alquimista + Bardo + Iluminista (§4 do Dossiê)
Fase 4: Operação     → Esteira Notion + Giro da Chave (§5 do Dossiê)
Fase 5: Evolução     → Tesouro dos Erros + Forja do Conhecimento + Lua Cheia (§6 do Dossiê)
```

**Cada plugin tem gatekeeping.** Antes de operar, verificar no Dossiê CM se os pré-requisitos da fase anterior existem. Se não existirem → alertar o usuário e sugerir o plugin correto primeiro. O plugin PODE operar sem pré-requisitos se o usuário pedir explicitamente, mas marca o output como `[gerado sem contexto prévio — a validar]`.

**O Dossiê CM é a memória compartilhada.** Todo plugin lê o Dossiê antes de operar e escreve nele ao concluir. Ver `00-FUNDACAO/SISTEMA-DE-ARTEFATOS.md` para o protocolo completo.

### Protocolo Anti-Impulso — Alerta de Maturidade Empreendedora

**GATILHO:** quando o usuário quer criar oferta, campanha ou lançamento SEM ter passado pelas fases 0–1, OU quando estes sinais aparecem:
- Nenhuma persona ou pesquisa de mercado documentada
- Nenhum histórico de publicação ou entrega anterior
- Urgência artificial ("preciso faturar logo", "quero lançar essa semana")
- Zero dado de engajamento ou validação prévia
- Calendário comprimido, sem margem para conteúdo de aquecimento

**Aplicar 5 perguntas de diagnóstico antes de prosseguir:**
1. "Você já vendeu algo para esse público? Tem prova de entrega?"
2. "Tem pelo menos 30 dias de conteúdo publicado nesse nicho? A audiência sabe quem você é?"
3. "A oferta foi testada informalmente — conversa 1x1, pesquisa, beta — ou é só uma ideia?"
4. "Sua audiência sabe que tem o problema que você resolve? Ou precisa ser educada primeiro?"
5. "Tem 2–4 semanas disponíveis para produzir conteúdo de aquecimento antes de abrir vendas?"

**Mapa de riscos — apresentar ao usuário quando houver flags:**

| Flag | Risco real |
|------|-----------|
| 🔴 Lançar sem aquecer audiência | Falar com desconhecidos. Conversão próxima a zero. Queima reputação. |
| 🔴 Oferta sem validação prévia | Aposta, não estratégia. Semanas estruturando algo que o mercado não quer. |
| 🔴 Sem elevar nível de consciência | Vender para quem não entende o que compra → frustração, reembolso, churn. |
| 🔴 Sem histórico de entrega documentado | Promessa sem âncora. Difícil justificar o preço. Objeção máxima. |
| 🔴 Calendário comprimido | Sem margem para ajuste. Cada peça fica ruim por falta de tempo. Erros se acumulam. |

**Decisão baseada nas flags:**
- 3+ flags 🔴 → sugerir fortemente Fase 0–1 antes de qualquer campanha
- 1–2 flags 🔴 → alertar riscos específicos, prosseguir com plano de mitigação explícito
- 0 flags → prosseguir normalmente

**Regra:** nunca bloquear completamente — o usuário decide. Mas o risco deve ser nomeado com clareza cirúrgica antes de qualquer output.

### Protocolo de Entrega ao Cliente

**GATILHO:** "prepara a entrega", "exporta os resultados da fase X", "o que entrego para o cliente agora", "compartilha com o cliente".

Cada fase tem um **Kit de Entrega** padrão — documento limpo, sem referências internas ao sistema CM, sem semáforos operacionais, sem notas de método. Apenas o conteúdo que o cliente recebe.

| Fase | O que entregar | Formato |
|------|---------------|---------|
| Fase 0 — Fundação | DNA de Marca (narrativa + valores + voz + léxico) + Mapa do Universo (Primal Branding + StoryBrand) | Documento único, linguagem do cliente |
| Fase 1 — Inteligência | Relatório de Terreno (nicho + concorrentes + brechas) + Alma da Persona (dores + linguagem real + jornada) | Dois documentos separados |
| Fase 2 — Estratégia | Oferta Estruturada (equação de valor + stack + garantia + preço) + Cronograma de Campanha (fases + copy) | Oferta como proposta comercial, campanha como guia operacional |
| Fase 3 — Criação | Inventário de peças prontas (headlines + roteiros + carrosséis + copy) | Pasta por tipo de conteúdo |
| Fase 4 — Operação | Relatório de publicação + calendário do período | Acesso ao board Notion + resumo executivo |
| Fase 5 — Evolução | Relatório pós-ciclo (o que funcionou, o que não funcionou, próximos movimentos) | Documento de decisão estratégica |

**Ao gerar o Kit de Entrega:** usar a linguagem, os nomes de produto e o tom de voz DO CLIENTE. Zero terminologia CM nos outputs de entrega.

### Regra de Comunicação Visual

**Em toda resposta no chat:**
- Usar **tabelas** quando houver comparação, seleção de opções, mapeamento ou listas com mais de 2 atributos
- Usar **diagramas ASCII/texto** para mostrar fluxos, hierarquias, dependências ou sequências
- Usar **tabelas interativas de seleção** quando a pergunta exige que o usuário escolha entre opções — apresentar as opções com descrição, pros/cons e recomendação explícita
- Usar **blocos estruturados** (com títulos em negrito, separadores ---) para qualquer análise ou diagnóstico
- Conceitos complexos → sempre visualizar antes de explicar em texto corrido

**O que NÃO é regra de comunicação visual:**
- Artefatos (documentos, roteiros, carrosséis, relatórios completos) → esses seguem o formato de output de cada SKILL.md, não esta regra
- Esta regra é apenas para a **conversa no chat** — como o sistema explica, orienta e apresenta opções ao usuário

### Regra de Ativação de Skill

**Antes de qualquer output em uma camada:** leia o `SKILL.md` do plugin correspondente.

**Para criar carrossel:** ative Bardo → leia `chavossel/SKILL.md` + `exercicios.md` + `exemplos.md`.

**Para criar conteúdo por imersão cultural (Cavalo de Troia):** ative Bardo → leia `cavalo-de-troia/SKILL.md`. Entrega pelo Chavideo (vídeo), Chavossel (carrossel) ou Pergaminho de Copy (post/anúncio) — o Cavalo de Troia é a arquitetura narrativa; o formato é executado pela skill correspondente.

**Para criar roteiro de vídeo:** ative Bardo → leia `chavideo/SKILL.md` + `progymnasmata-video-map.md` + `cinematicas-combinacoes.md` + `arsenal-narrativo.md`.

**Para criar copy:** ative Alquimista → leia `pergaminho-de-copy/SKILL.md` + `copy-3x5.md` + `metodo-carga.md` + `arsenal-retorico.md`.

**Para criar oferta:** ative Alquimista → leia `forja-de-oferta/SKILL.md`.

**Para planejar campanha:** ative Arauto → leia `mapa-de-campanha/SKILL.md` + `modalidades.md` + `copy-campanha.md`.

**Para campanha intensiva:** ative Arauto → leia `protocolo-massivo/SKILL.md`.

**Para popular Notion:** ative Arauto → leia `esteira-notion/SKILL.md` + `notion-integracao.md`.

**Para criar novo produto na esteira:** ative Arauto → leia `criar-produto-esteira/SKILL.md`.

**Para prospecção ativa / venda direta / Pix sem plataforma:** ative Arauto → leia `prospeccao-ativa/SKILL.md`.

**Para registrar e analisar métricas de produto:** ative Alquimista → leia `metricas-produto/SKILL.md`.

**Para diagnosticar escala:** ative Alquimista → leia `portal-da-escala/SKILL.md`.

**Para diagnosticar / iniciar projeto:** ative Chaveiro → execute Protocolo 0 do `chaveiro/SKILL.md` (diagnóstico 6D + Dossiê CM + roadmap).

**Para atualizar o sistema:** ative Chaveiro → opera com os Protocolos 1-5 do `chaveiro/SKILL.md`.

**Para registrar/consultar erros:** ative Chaveiro → leia `tesouro-dos-erros/SKILL.md`.

**Para gestão de conhecimento:** ative Chaveiro → leia `forja-do-conhecimento/SKILL.md` + `modelos-mentais.md` + `arsenal-epistemologico.md`.

**Para analisar mercado:** ative Cartógrafo → leia `portal-do-terreno/SKILL.md` + `arsenal-estrategico.md`.

**Para mapear persona:** ative Cartógrafo → leia `forja-da-persona/SKILL.md` + `alma-da-persona.md` + `szc.md` + `perfis-cognitivos.md`.

**Para construir universo de marca:** ative Cartógrafo → leia `forja-do-universo/SKILL.md` + `primal-branding.md` + `storybrand.md` + `worldbuilding.md`.

**Para mapear e engenheirar percepção de marca:** ative Cartógrafo → leia `ativos-de-percepcao/SKILL.md` + `fundamentos-teoricos.md` + `diagnostico.md`. A lente de Ativos de Percepção é transversal — após diagnóstico, integra-se a copy (Alquimista), conteúdo (Bardo) e campanha (Arauto) via bloco "Calibração de Ativos" no output de cada skill.

**Para planejar rotina/workflow:** ative Chaveiro → leia `ritual-da-chave/SKILL.md`. Usar os 3 ciclos: Lua Cheia (mensal) → Forja Semanal → Giro da Chave (diário).

**Para design visual / tema:** ative Iluminista → leia `sistema-de-design/SKILL.md`.

**Para gerar imagens:** ative Iluminista → leia `forja-de-imagem/SKILL.md` (usa Nano Banana Pro / Gemini API).

**Para UX/layout de conteúdo:** ative Iluminista → leia `arquiteto-de-experiencia/SKILL.md` + `principios-visuais.md`.

**Para renderizar no Figma:** ative Iluminista → leia `ponte-figma/SKILL.md` (usa Figma MCP).

**Para publicar visuais no Notion:** ative Iluminista → leia `publicador-visual/SKILL.md` (usa Notion MCP).

---

### Protocolo Sync Rotinas → Notion

**GATILHO:** "sincroniza rotinas", "sincroniza no notion", "publica outputs no notion".

**O que faz:** lê outputs novos em `06-ROTINAS/outputs/` que ainda não foram sincronizados (consultar `06-ROTINAS/config/SYNC-STATE.md`), cria **1 página por arquivo** no Notion com todos os temas/insights dentro dela, atualiza SYNC-STATE.md.

**⚠️ ESPAÇO DE DESTINO — verificar antes de qualquer escrita:**
Todos os databases abaixo pertencem ao espaço **"Sistema Chave Mestra - Lucas Grigo"** (root: `245fc122de3b80e1a508cf0988ab6227`). O espaço "Sistema Chave Mestra - Nome do Cliente" (`357fc122`) é o template produto para clientes — **nunca escrever lá**.

**Passo 0 — verificação de roteamento (executar se houver dúvida):**
`notion-fetch collection://6e4c8442-1596-4eab-ab69-a7917e93e046`
→ Confirmar que `ancestor-8` na resposta é `245fc122de3b80e1a508cf0988ab6227` (Lucas Grigo).
→ Se for diferente: PARAR e alertar Lucas — "Os IDs do Notion mudaram após reorganização. Preciso que você confirme os novos IDs antes de qualquer escrita."

**Mapeamento de destino:**

| Tipo de output | Arquivo | Notion DB | Propriedades da página |
|---|---|---|---|
| Temas em Alta | `outputs/temas/temas-[data].md` | Zettelkasten — `collection://6e4c8442-1596-4eab-ab69-a7917e93e046` — Lucas Grigo ✅ | Nota: "Temas em Alta — YYYY-MM-DD", Tipo: Flash, Zona: Inbox, Tags: conteúdo, Destino: Conteúdo, Potencial: Semente, Formato: Ideia, Data: data do arquivo |
| Pesquisa de Nicho | `outputs/nicho/nicho-update-[data].md` | Zettelkasten — Lucas Grigo ✅ | Nota: "Pesquisa de Nicho — YYYY-MM-DD", Tipo: Flash, Zona: Output, Tags: mercado, Destino: Conteúdo, Potencial: Semente, Formato: Ideia |
| Pesquisa de Nicho (ação) | seção "Ação Recomendada" do mesmo arquivo | Tarefas — `collection://00cfc122-de3b-83a0-ad2a-87e3bd2d78ed` — Lucas Grigo ✅ | Nome: texto da ação, Feito: false, Data: data do output |
| Transformação em Conteúdo | `outputs/conteudo/conteudo-[data].md` | DB Conteúdo — `collection://25cfc122-de3b-81c2-a76a-000bcf8453f4` — Lucas Grigo ✅ | 1 página por peça — campos do MANIFESTO DE PRODUÇÃO + corpo completo em "Notas & Briefing" |
| Lua Cheia — Ciclo de Expansão | `outputs/expansao/lua-cheia-[YYYY-MM].md` | Zettelkasten — `collection://6e4c8442-1596-4eab-ab69-a7917e93e046` — Lucas Grigo ✅ | Nota: "Lua Cheia — YYYY-MM", Tipo: MOC, Zona: Estrutura, Tags: expansão + curadoria, Destino: Pesquisa, Potencial: Árvore, Data: data do output |

**Campos DB Conteúdo ao criar cada peça:**
- `Título` — título da peça
- `Status` — "Rascunho"
- `Tipo de Post` — conforme manifesto: Video | Reel | Carrossel | Post Estático
- `Plataforma` — conforme manifesto: Instagram | YouTube | TikTok | LinkedIn
- `Tipo de conteúdo` — "Social Media"
- `Propósito` — conforme manifesto: Awareness | Autoridade | Conversão | Relacionamento | Nutrição
- `Origem` — conforme manifesto: Temas em Alta | Pesquisa de Nicho | Ideia Própria
- `Etapas` — `["Roteiro feito"]`
- `Notas & Briefing` — conteúdo completo da peça (roteiro + carrossel + headlines)

**Passos:**
1. Ler `06-ROTINAS/config/SYNC-STATE.md` — identificar arquivos sem `✅ sincronizado`
2. Para cada arquivo pendente:
   a. Ler o conteúdo completo
   b. **Temas / Nicho:** criar 1 única página com todo o conteúdo (não 1 página por tema)
   c. **Conteúdo:** ler bloco MANIFESTO DE PRODUÇÃO → criar 1 página por peça no DB Conteúdo com campos preenchidos e corpo completo em "Notas & Briefing"
   d. **Nicho:** criar também tarefa de Ação Recomendada nas Tarefas
3. Atualizar SYNC-STATE.md com IDs gerados e status `✅ sincronizado`
4. `git add 06-ROTINAS/config/SYNC-STATE.md && git commit -m "sync: rotinas → Notion [YYYY-MM-DD]" && git pull --rebase origin main && git push`

---

### Protocolo de Espelhamento — Lucas Grigo ↔ Nome do Cliente

**REGRA PERMANENTE:** toda alteração estrutural feita no workspace Lucas Grigo (`245fc122`) que seja infraestrutura operacional **deve ser replicada no workspace Nome do Cliente (`357fc122`) na mesma sessão**, sem precisar ser lembrado.

**O que É infraestrutura operacional (espelhar nos dois):**
- Criação ou modificação de databases (Conteúdo, Tarefas, AGENDA, MINHA ESTEIRA)
- Adição de campos/propriedades a databases existentes
- Criação ou atualização de views
- Criação de páginas de portal (AGENDA, ESTEIRA, etc.)
- Atualização de templates de produto

**O que NÃO é infraestrutura (fica só no Lucas):**
- Sistema de Conhecimento (Zettelkasten, PARA, notas pessoais)
- Dados reais (entradas em databases — conteúdo, tarefas, produtos reais)
- Dossiê CM pessoal
- Outputs de rotinas (06-ROTINAS/)

**Checklist ao encerrar qualquer mudança no Notion:**
```
[ ] Mudança foi só de dados (entradas) → só Lucas, ok
[ ] Mudança foi estrutural (campos, views, páginas, schemas) →
    [ ] Replicado no Nome do Cliente (357fc122)?
```

**IDs de referência:**
- Lucas Grigo root: `245fc122-de3b-80e1-a508-cf0988ab6227`
- Nome do Cliente root: `357fc122-de3b-80a9-a691-c709a165e697`
- PORTAIS 🪄 Lucas: `collection://254fc122-de3b-80de-bffd-000b2629d678`
- PORTAIS 🪄 Cliente: `collection://357fc122-de3b-81ef-b06e-000bb1020090`
- MINHA ESTEIRA Lucas: `collection://25cfc122-de3b-8131-9284-000b78f0406d`
- MINHA ESTEIRA Cliente: `collection://357fc122-de3b-8105-b590-000b69392e73`

---

### Protocolo Export Notas → Git

**GATILHO:** "exporta notas", "exporta do notion", "traz notas pro git".

**O que faz:** lê notas recentes do Zettelkasten que ainda não foram exportadas (`Incorporada ≠ true`), salva em `06-ROTINAS/inputs/notas/` como `.md`, marca `Incorporada: true` no Notion, faz commit + push. As rotinas remotas lerão essas notas como input adicional no próximo ciclo.

**Passos:**
1. Buscar no Zettelkasten notas com `Incorporada` = false/null e `date:Data:start` ≥ 14 dias atrás
2. Para cada nota encontrada:
   a. Formatar como Markdown com YAML front-matter (título, tipo, zona, tags, data)
   b. Salvar em `06-ROTINAS/inputs/notas/[YYYY-MM-DD]-[titulo-slug].md`
   c. Atualizar nota no Notion: `Incorporada: true`
3. `git add 06-ROTINAS/inputs/notas/ && git commit -m "chore: exporta notas Notion → git [YYYY-MM-DD]" && git pull --rebase origin main && git push`
4. Confirmar: *"X notas exportadas para `inputs/notas/`. Rotinas vão usá-las como input no próximo ciclo."*

**Naming:** `[YYYY-MM-DD]-[titulo-40-chars-sem-acento-hifenizado].md`

---

### Protocolo Lua Cheia — Ciclo de Expansão

**GATILHO:** "lua cheia expansão", "ciclo de expansão", "roda o lua cheia", "ciclo mensal de notas".

**O que faz:** conta as notas novas desde o último ciclo → se ≥ 8, cataloga e ordena cronologicamente todas as notas (preenchendo propriedades ausentes nas adicionadas ad-hoc), executa triage completa em 3 trajetórias (Aprofundar / Criar / Produtizar), detecta padrões e pontos cegos do período, gera curadoria ativa (livros, filmes, especialista novo via WebSearch). Output: 1 página MOC no Zettelkasten + arquivo git.

**Passos:**
1. Ler `06-ROTINAS/config/CONFIG-GLOBAL.md` → obter `lua_cheia_last_run` e `lua_cheia_threshold`
2. Contar arquivos `.md` em `sistema-de-conhecimento/notas/` e `06-ROTINAS/inputs/notas/` modificados após `lua_cheia_last_run`
3. Se total < threshold:
   - Salvar `06-ROTINAS/outputs/expansao/lua-cheia-[YYYY-MM]-volume-insuficiente.md` com contagem
   - Informar ao usuário: *"[N]/[threshold] notas. Próximo ciclo quando atingir [threshold - N] notas."*
   - Encerrar
4. Se total ≥ threshold: executar o prompt completo em `06-ROTINAS/prompts/PROMPT-LUA-CHEIA-EXPANSAO.md`
5. Salvar output em `06-ROTINAS/outputs/expansao/lua-cheia-[YYYY-MM].md`
6. Criar 1 página no Zettelkasten: Título "Lua Cheia — YYYY-MM", Tipo: MOC, Zona: Estrutura, Tags: expansão + curadoria, Destino: Pesquisa, Potencial: Árvore
7. Atualizar `06-ROTINAS/config/CONFIG-GLOBAL.md`: campo `lua_cheia_last_run` com data de hoje
8. Atualizar `06-ROTINAS/config/SYNC-STATE.md`: registrar execução com status e ID Notion
9. `git add 06-ROTINAS/ && git commit -m "feat: lua cheia expansão [YYYY-MM]" && git pull --rebase origin main && git push`

**Regra:** nunca inventar notas ou usar notas de ciclos anteriores. Se volume insuficiente → encerra graciosamente.

---

## Fluxo Natural das Camadas (Value Creation Loop)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
▼                                                         │
Step 1: FOF — Diagnóstico (Cartógrafo — terreno + persona │
              + universo de marca + Founder Opportunity    │
              Fit)                                        │
    ↓                                                     │
Step 2-3: Validação + PMF — Estratégia (Alquimista —      │
          copy + oferta + portal-da-escala Fase 1-2)      │
    ↓                                                     │
Step 4: Go To Market — Criação (Bardo — vídeo +           │
        carrossel) + Lançamento (Arauto — campanha +      │
        Notion)                                           │
    ↓                                                     │
Step 5: Scale Up — Escala (Alquimista — métricas +        │
        alavancas, Fases 3-4)                             │
    ↓                                                     │
Step 6: Exit/Loop ────────────────────────────────────────┘
        Arquivar (MINHA ESTEIRA) + Documentar (Chaveiro)
        + Próximo tier da escada de valor

Base permanente: Chaveiro (conhecimento + erros + Ritual da Chave)
Transversal: Iluminista (design, imagem, Figma, Notion)
```

---

## Modo Cliente — Separação sistema / output

O sistema opera em dois modos. Identificar o modo antes de qualquer output:

**Modo CM** — o cliente da sessão é Lucas / Chave Mestra.
→ Aplicar o glossário CM integralmente em todos os outputs.

**Modo Cliente Externo** — o cliente da sessão é outro expert, marca ou negócio.
→ Todo output usa a linguagem, os nomes de produto e o vocabulário DO CLIENTE.
→ Zero menção a "Chave Mestra", "Lucas De Maria", ou qualquer termo proprietário CM.
→ Os métodos operam internamente; o output é 100% da identidade do cliente.

**Antes de gerar qualquer output em Modo Cliente Externo**, capturar 5 elementos:
1. Nome / marca do cliente
2. Produtos (nome + tipo para cada um)
3. Como o cliente chama sua audiência
4. Nome da comunidade do cliente (ou "não tem")
5. Tom de voz — 3 adjetivos + 1 frase que ele nunca diria

→ Ver `00-FUNDACAO/MODO-CLIENTE.md` para o protocolo completo e tabela de equivalências.

---

## Glossário CM (aplicável apenas em Modo CM)

Quando o cliente da sessão é Chave Mestra / Lucas, nunca substituir termos proprietários por equivalentes genéricos:

| Usar (Modo CM) | Equivalente genérico (Modo Cliente Externo) |
|----------------|---------------------------------------------|
| Pergaminho | nome do produto do cliente / material digital / guia |
| Portal | nome do produto do cliente / curso / programa |
| Forja | nome do produto do cliente / intensivo / imersão |
| A Ordem | nome da comunidade do cliente / grupo / turma |
| Portadores | o termo que o cliente usa para sua audiência |
| Chavideo, Chavossel | carrossel, roteiro de vídeo (método invisível) |
| Copy 3x5, Método Carga | aplicados internamente — output é só a copy |
| SZC, Alma da Persona | pesquisa de audiência (método invisível) |

---

## Referências

- `00-FUNDACAO/MANIFESTO.md` — princípios que nunca mudam
- `00-FUNDACAO/MAPA-DO-PROJETO.md` — arquitetura completa
- `00-FUNDACAO/GLOSSARIO.md` — vocabulário proprietário completo
- `00-FUNDACAO/MODO-CLIENTE.md` — protocolo de adaptação a clientes externos
- `CLAUDE-PROJECTS.md` — como montar os 6 kits no claude.ai
- `ORDENS.md` — agrupamentos estratégicos de plugins para venda

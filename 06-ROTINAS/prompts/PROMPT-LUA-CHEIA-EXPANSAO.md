# Prompt — Lua Cheia — Ciclo de Expansão

**Frequência:** 1x/mês (ou ao atingir 8+ notas novas desde o último ciclo)
**Modo local:** rodar como comando "ciclo de expansão" ou "roda o lua cheia" em sessão Claude Code
**Modo remoto:** rotina CCR mensal opcional (escreve para git; Notion sync via `sincroniza rotinas`)

---

## Como usar

**Local (recomendado):** diga "ciclo de expansão", "lua cheia expansão" ou "roda o lua cheia" em qualquer
sessão Claude Code. A sessão tem acesso a Notion MCP + WebSearch + git — o ciclo completo roda de uma vez.

**Manual (qualquer IA):** preencha os campos entre colchetes e cole em qualquer IA com WebSearch.

---

## Prompt completo

```
Você é o Cartógrafo Interno do sistema Chave Mestra — especialista em mapear o pensamento do autor,
situar intuições em campos do saber e identificar padrões intelectuais emergentes.

[INSTRUÇÃO — apagar esta linha ao usar manualmente]
Se rodando como agente com acesso a repositório Git:
- Leia `06-ROTINAS/config/CONFIG-GLOBAL.md` → pegar lua_cheia_last_run e lua_cheia_threshold
- Liste e leia arquivos em `sistema-de-conhecimento/notas/` modificados após lua_cheia_last_run
- Liste e leia arquivos em `06-ROTINAS/inputs/notas/` modificados após lua_cheia_last_run
- Conte o total de notas novas encontradas
- Se total < lua_cheia_threshold: gere apenas o relatório de volume insuficiente (ver formato abaixo)
- Se total ≥ lua_cheia_threshold: execute o ciclo completo

---

VERIFICAÇÃO DE VOLUME

Total de notas novas desde o último ciclo: [N]
Threshold configurado: [threshold]

→ Se [N] < threshold:
"Volume insuficiente para ciclo de expansão ([N]/[threshold] notas).
Próxima janela recomendada: ao acumular [threshold - N] notas adicionais.
Nenhuma ação necessária agora."
[salvar log e encerrar]

→ Se [N] ≥ threshold: executar as 4 fases abaixo.

---

FASE 0 — CATALOGAÇÃO E ORDENAÇÃO

Antes de qualquer triage, construir o inventário cronológico das notas.

Para cada nota coletada:
1. Verificar se tem YAML frontmatter com campo `Data` ou `date`
   → Se tem: usar essa data
   → Se não tem: usar a data de modificação do arquivo (file mtime)
2. Verificar se tem `Tipo` (Flash/Literatura/Permanente/Projeto/MOC)
   → Se não tem: inferir do conteúdo (Flash = captura rápida, 1-3 parágrafos;
     Literatura = baseada em leitura; Permanente = elaborada, conectada; Projeto = acionável)
3. Verificar se tem `Zona` (Inbox/Literatura/Permanente/Estrutura/Analogia/Output/Domínio)
   → Se não tem: inferir do conteúdo

### Inventário cronológico do período

Apresentar como tabela antes de iniciar a triage:

| # | Data | Título | Tipo inferido | Zona inferida | Tem propriedades? |
|---|------|--------|--------------|--------------|-------------------|
| 1 | [data] | [título] | [tipo] | [zona] | Sim / Parcial / Não |
| ... | | | | | |

[INSTRUÇÃO — se rodando localmente com acesso a git]
Para notas com "Tem propriedades? = Não" ou "Parcial":
- Atualizar o arquivo .md da nota adicionando frontmatter YAML com os campos inferidos
- Marcar como inferido: `tipo_origem: inferido` no frontmatter
- Se a nota também existe no Notion (tem `notion_id` no frontmatter ou foi exportada):
  atualizar propriedades no Notion também

Formato frontmatter a adicionar/completar:
```yaml
---
titulo: [Título da nota]
data: [YYYY-MM-DD]
tipo: [Flash | Literatura | Permanente | Projeto | MOC]
zona: [Inbox | Literatura | Permanente | Estrutura | Analogia | Output | Domínio]
tags: []
tipo_origem: [original | inferido]
---
```

---

FASE 1 — TRIAGE INDIVIDUAL

Para cada nota nova, execute a triage nas 3 trajetórias:

### [Título da nota]
**Campo do saber:** [área do conhecimento que esta nota toca — ex: Filosofia da Linguagem, Psicologia
Cognitiva, Retórica, Teoria Narrativa, Filosofia da Educação...]

**APROFUNDAR:**
- Especialistas relevantes: [2-3 nomes] — [em 1 linha cada: por que são essenciais para este tema]
- Obras recomendadas: [1-2 títulos específicos com justificativa em 1 linha]
- Mídia pertinente: [1 documentário, filme ou série — se existir um bom; caso contrário omitir]

**CRIAR:**
- Potencial de linha de conteúdo: [Alto | Médio | Baixo | Nenhum]
- Ângulo original: [qual perspectiva desta nota poderia virar conteúdo diferenciado — em 1 frase]
- Formato sugerido: [Vídeo curto | Carrossel | Post estático | Essay | Thread]

**PRODUTIZAR:**
- Potencial de produto/metodologia/habilidade: [Alto | Médio | Baixo | Nenhum]
- O que seria: [ex: "núcleo de um módulo sobre X", "consultoria em Y", "framework de Z"]

---

[Repetir para cada nota]

---

FASE 2 — PADRÃO DO PERÍODO

Analise todas as notas triadas e mapeie:

### Temas recorrentes
[Conceitos que apareceram 2+ vezes. Indicar frequência e campo do saber de cada.]

### Tendência identificada
[Em 1-2 frases diretas: o padrão de pensamento deste ciclo — ex: "você gravitou em torno de linguagem
como instrumento de formação, raramente como ferramenta tática"]

### Campo ausente (ponto cego)
[Qual área relevante para o nicho está completamente fora das notas deste ciclo? Sem julgamento — apenas
o mapa do território ainda não percorrido.]

### Viés unilateral detectado
[Há uma perspectiva sistematicamente ignorada? Ex: "você analisa persuasão pela ótica retórica, raramente
pela ótica cognitiva/comportamental". Não é crítica — é cartografia.]

---

FASE 3 — CURADORIA ATIVA

[Executar buscas baseadas nos temas e especialistas identificados na Fase 1]

WebSearch: "[especialista prioritário] livros essenciais"
WebSearch: "[tema recorrente] documentário recomendado"
WebSearch: "[campo ausente identificado] introdução especialista"

### Top 3 leituras para o próximo ciclo
1. **[Título]** — [Autor] — [Por que agora: conexão com o que foi capturado este ciclo]
2. **[Título]** — [Autor] — [Por que agora]
3. **[Título]** — [Autor] — [Por que agora]

### Mídia recomendada (1-2 itens)
1. **[Título]** — [Tipo: filme/documentário/série] — [Conexão com o ciclo]
2. (se pertinente)

### Especialista novo para descobrir
**[Nome]** — [Campo] — [Por que este ciclo seria o momento certo de encontrá-lo]

---

FASE 4 — MAPA DE POTENCIAL

Com base nas 3 fases anteriores, consolide:

### Nota com maior potencial de conteúdo
**[Título]** — [Por que tem ângulo original no nicho — em 2 linhas]

### Nota com maior potencial de produto
**[Título]** — [O que poderia se tornar — em 2 linhas]

### Próxima ação recomendada
[1 ação concreta para o próximo ciclo — específica, não genérica. Ex: "ler [livro] antes de mais
3 notas sobre [tema]", "rascunhar roteiro a partir do ângulo [X] da nota [Y]", "criar nota permanente
conectando [A] e [B] antes do próximo ciclo"]

---

OUTPUT FINAL:

## Lua Cheia — Ciclo de Expansão — [YYYY-MM]

**Período:** [data lua_cheia_last_run] → [data de hoje]
**Notas processadas:** [N]
**Notas com propriedades inferidas:** [X] ← notas sem estrutura prévia que foram catalogadas

### Inventário Cronológico
[Tabela da Fase 0 — todas as notas ordenadas por data]

### Triage de Notas
[Fase 1 completa — na mesma ordem cronológica do inventário]

### Padrão do Período
[Fase 2 completa]

### Curadoria Ativa
[Fase 3 completa]

### Mapa de Potencial
[Fase 4 completa]

---

[INSTRUÇÃO — apagar esta linha ao usar manualmente]
Se rodando em sessão Claude Code local COM Notion MCP disponível:
1. Salvar output em `06-ROTINAS/outputs/expansao/lua-cheia-[YYYY-MM].md`
2. Criar 1 página no Zettelkasten (ID em CONFIG-GLOBAL.md → notion_db_zettelkasten):
   - Título: "Lua Cheia — [YYYY-MM]"
   - Tipo: MOC
   - Zona: Estrutura
   - Tags: ["expansão", "curadoria"]
   - Destino de Uso: ["Pesquisa"]
   - Potencial: Árvore
   - Data: data de hoje
   - Conteúdo: o output gerado acima
3. Atualizar CONFIG-GLOBAL.md: lua_cheia_last_run: [YYYY-MM-DD de hoje]
4. Atualizar SYNC-STATE.md: registrar execução na seção "Lua Cheia"
5. git add + commit "feat: lua cheia expansão [YYYY-MM]" + git pull --rebase origin main + git push

Se rodando como rotina remota CCR (SEM Notion MCP):
1. Salvar em `06-ROTINAS/outputs/expansao/lua-cheia-[YYYY-MM].md`
2. Atualizar CONFIG-GLOBAL.md: lua_cheia_last_run
3. Atualizar SYNC-STATE.md: status "⏳ pendente"
4. git add + commit + pull --rebase + push
5. (Notion sync ocorre quando usuário rodar `sincroniza rotinas` em sessão local)
```

---

## Onde salvar os outputs

```
Output principal:   06-ROTINAS/outputs/expansao/lua-cheia-[YYYY-MM].md
Log sem volume:     06-ROTINAS/outputs/expansao/lua-cheia-[YYYY-MM]-volume-insuficiente.md
```

Após execução completa: atualizar `lua_cheia_last_run` em `CONFIG-GLOBAL.md`.

---

## Dependências

Esta rotina funciona melhor com notas acumuladas em:
- `sistema-de-conhecimento/notas/` — notas capturadas diretamente no git
- `06-ROTINAS/inputs/notas/` — notas exportadas do Notion via `exporta notas`

**Mínimo necessário:** 8 notas novas desde o último ciclo.
**Sem notas:** encerra com relatório de volume insuficiente — nunca inventa ou usa notas de ciclos anteriores.

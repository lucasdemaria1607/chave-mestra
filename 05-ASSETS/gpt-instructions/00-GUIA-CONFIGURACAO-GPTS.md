# Guia de Configuração — O Olimpo no ChatGPT
*Como montar, operar e entender cada agente*

---

## 1. Diferença crítica: ChatGPT vs Claude Code

| | Claude Code (local) | ChatGPT Custom GPT |
|---|---|---|
| **Arquivos locais** | Lê e escreve diretamente | ❌ Não tem acesso |
| **Notion** | Via MCP (automático) | Via **Actions** (mesma função, API REST) |
| **SKILL.md** | Lido automaticamente do disco | Carregado no **Knowledge** |
| **Figma** | Via Figma MCP (automático) | ❌ Sem acesso direto — Hefesto entrega specs |
| **Memory entre sessões** | Persistente em arquivo | Memory do ChatGPT (limitada) + Notion |
| **Geração de imagem** | Nano Banana Pro (Gemini) | DALL-E (Image generation capability) |

**O que não muda:** o agente opera o Notion diretamente, só que via Notion Action (API REST) em vez de MCP. Os IDs de banco de dados são os mesmos — só remove o prefixo `collection://`.

---

## 2. Como conectar Notion a um GPT (Notion Action)

Cada GPT que precisa ler/escrever no Notion precisa de uma **Action** configurada.

### 2.1 Criar a integração no Notion
1. Acesse: [notion.so/my-integrations](https://notion.so/my-integrations)
2. Clique em **New integration**
3. Nome: `Olimpo — [Nome do Agente]` (ex: `Olimpo — Ares`)
4. Workspace: selecione o seu workspace
5. Permissions: **Read content** + **Update content** + **Insert content**
6. Copie o **Internal Integration Token** (`secret_...`)
7. Nos databases que o agente vai acessar → abra o banco no Notion → **Share** → adicione a integração

### 2.2 Configurar a Action no ChatGPT
1. Edite o GPT → aba **Actions** → **Create new action**
2. **Authentication:** API Key → Bearer token → cole o `secret_...` da integração
3. **Schema:** cole o schema OpenAPI da Notion API (disponível em [developers.notion.com](https://developers.notion.com))
4. Endpoints mínimos necessários:
   - `POST /v1/databases/{database_id}/query` — buscar entradas
   - `POST /v1/pages` — criar página/entrada
   - `PATCH /v1/pages/{page_id}` — atualizar entrada
   - `PATCH /v1/blocks/{block_id}/children` — adicionar conteúdo a uma página

### 2.3 IDs dos databases

**Modo CM — workspace do Lucas (`245fc122`) — IDs fixos:**

| Database | ID (sem `collection://`) |
|---|---|
| Zettelkasten | `6e4c8442-1596-4eab-ab69-a7917e93e046` |
| Tarefas | `00cfc122-de3b-83a0-ad2a-87e3bd2d78ed` |
| DB Conteúdo | `25cfc122-de3b-81c2-a76a-000bcf8453f4` |
| MINHA ESTEIRA | `25cfc122-de3b-8131-9284-000b78f0406d` |
| PORTAIS | `254fc122-de3b-80de-bffd-000b2629d678` |

**Modo Cliente — IDs dinâmicos por workspace:**

> ⚠️ Cada cliente recebe uma **duplicata** do workspace template. Ao duplicar, o Notion gera novos IDs para todos os databases. Os IDs do template (`357fc122`) são válidos **somente no template** — nunca em workspaces reais de clientes.

Os IDs do cliente são descobertos pelo Zeus na primeira sessão (Workspace Discovery) e salvos no Memory:
- `NOTION_ESTEIRA` → ID da MINHA ESTEIRA deste cliente
- `NOTION_PORTAIS` → ID dos PORTAIS deste cliente

Zettelkasten, Tarefas e DB Conteúdo são exclusivos do Lucas — não existem no workspace do cliente.

**Roteamento:**
- Padrão = Modo Cliente → usar IDs do Memory (`NOTATION_ESTEIRA`, `NOTION_PORTAIS`)
- Exceção = Lucas diz "Modo CM" ou "Lucas Grigo" → usar IDs fixos da tabela acima
- Salvar no Memory: `WORKSPACE_ATIVO: Cliente-[NomeCliente]` ou `WORKSPACE_ATIVO: CM`

### 2.4 Quais agentes precisam de Notion Action

| Agente | Precisa de Notion Action? | O que escreve |
|---|---|---|
| Zeus | ✅ Sim | Dossiê, Zettelkasten, Tesouro dos Erros, Tarefas |
| Apolo | ⚠️ Opcional | Relatório de Terreno, Alma da Persona (pode salvar como página) |
| Atena | ⚠️ Opcional | Oferta Estruturada (pode salvar como página) |
| Hermes | ⚠️ Opcional | DB Conteúdo (roteiros, carrosséis criados) |
| Ares | ✅ Sim | MINHA ESTEIRA (cronograma dia a dia), Tarefas |
| Hefesto | ⚠️ Opcional | Publicador Visual (links de assets exportados) |

---

## 3. Como usar o Memory do ChatGPT

O Memory substitui parte da função do Dossiê local — guarda informações entre sessões.

**Ativar:** ChatGPT → Configurações → Personalização → Memória → Ativar

**O que o GPT salva via Memory (Memory Protocol de cada agente):**
- Zeus: cliente, fase, modo, último artefato, próximo movimento
- Apolo: nicho, posicionamento, top players, brechas, resumo da Alma da Persona
- Atena: especialista, ticket, fase, nível de consciência, plataforma, meta, oferta atual
- Hermes: especialista, tom de voz, plataforma, temas top, persona
- Ares: produto ativo, fase, canal principal, campanha ativa, resultado anterior
- Hefesto: pergaminho ativo, paleta, tipografia, formato padrão, plataforma

**Para forçar gravação:** ao final de uma sessão, diga *"Salva o estado atual do projeto na sua memória."*

**Limite:** Memory tem espaço limitado. Para projetos complexos, o Zeus pode manter um Dossiê atualizado no Notion que serve como fonte de verdade.

---

## 4. O que muda no Figma

O **Hefesto no Claude Code** usa o Figma MCP — renderiza carrosséis diretamente no Figma, automaticamente.

O **Hefesto no ChatGPT** não tem acesso ao Figma via Action. O fluxo é:
- Hefesto entrega as **specs técnicas completas** de cada frame (cores em HEX, tipografia, posição dos elementos, texto exato)
- Você aplica no Figma manualmente
- OU: usa o plugin Chavossel do Figma que o Hefesto descreve como usar

Para automação real de Figma, use o Claude Code.

---

## 5. Fluxo entre agentes — como passar contexto de um GPT para outro

Como cada GPT é uma sessão separada, o contexto não passa automaticamente. Você faz a ponte:

```
Apolo gera → Alma da Persona (salvo no Notion via Action)
    ↓ você referencia
Atena recebe → "use a Alma da Persona do projeto [X] no Notion"
             OU cole o texto diretamente: "Alma da Persona: [...]"

Atena gera → Oferta Forjada + Pergaminho de Copy (salvo no Notion)
    ↓ você referencia
Ares recebe → "a oferta está no Notion — use como base para o Plano de Batalha"

Hermes gera → Lâminas do Chavossel (salvo no DB Conteúdo via Action)
    ↓ você referencia
Hefesto recebe → "as lâminas do carrossel [título] estão no Notion — aplica Pergaminho Preto"
```

**Atalho prático:** ao final de qualquer sessão, peça: *"Resume o que produziu em formato de briefing para o próximo agente."* Cole esse briefing no próximo GPT.

---

## 6. Configuração de cada agente — passo a passo completo

### Como criar um Custom GPT
1. ChatGPT → canto superior esquerdo → Explorar GPTs → **Criar**
2. Aba **Configurar** (não use o criador guiado — use a aba de configuração direta)
3. Preencher: Nome, Descrição, Instruções (copiar do arquivo `.md`)
4. Adicionar os 4 Conversation Starters
5. Selecionar Modelo e ativar as Capabilities conforme indicado
6. Fazer upload dos Knowledge files (renomeados conforme Seção 9)
7. Configurar Actions (Notion) se o agente precisar
8. Salvar → **Apenas eu** (não publicar ainda)

---

## Agente 00 — Zeus (O Chaveiro)

**Modelo:** 5.5 → Thinking | **Notion Action:** ✅ Sim
**Capabilities:** todas OFF

**O que o Zeus opera no Notion:**
- Cria e atualiza o **Dossiê do cliente** (página no Notion)
- Cria **notas permanentes** no Zettelkasten (`6e4c8442`)
- Cria **registros** no Tesouro dos Erros (página ou database no Notion)
- Cria **tarefas** no banco de Tarefas (`00cfc122`)

**Knowledge — arquivos para upload:**

| Nome do arquivo (renomeado) | Origem no projeto |
|---|---|
| `SKILL-CHAVEIRO.md` | `01-PLUGINS/00-chaveiro/skills/chaveiro/SKILL.md` |
| `SKILL-FORJA-DO-CONHECIMENTO.md` | `01-PLUGINS/00-chaveiro/skills/forja-do-conhecimento/SKILL.md` |
| `MODELOS-MENTAIS.md` | `01-PLUGINS/00-chaveiro/skills/forja-do-conhecimento/modelos-mentais.md` |
| `ARSENAL-EPISTEMOLOGICO.md` | `01-PLUGINS/00-chaveiro/skills/forja-do-conhecimento/arsenal-epistemologico.md` |
| `SKILL-TESOURO-DOS-ERROS.md` | `01-PLUGINS/00-chaveiro/skills/tesouro-dos-erros/SKILL.md` |
| `SKILL-RITUAL-DA-CHAVE.md` | `01-PLUGINS/00-chaveiro/skills/ritual-da-chave/SKILL.md` |
| `GLOSSARIO.md` | `00-FUNDACAO/GLOSSARIO.md` |
| `PROTOCOLO-OLIMPO.md` | `05-ASSETS/gpt-instructions/PROTOCOLO-OLIMPO.md` |
| `NOTION-ARQUITETURA.md` | `05-ASSETS/gpt-instructions/NOTION-ARQUITETURA.md` |

**Total: 9 arquivos**

---

## Agente 01 — Apolo (O Cartógrafo)

**Modelo:** 5.5 → Instant | **Notion Action:** ⚠️ Opcional
**Capabilities:** Web search ✅ ON

**O que o Apolo opera no Notion (se Action configurada):**
- Salva o **Relatório de Terreno** como página no Notion
- Salva a **Alma da Persona** como página no Notion
- Salva o **Mapa de Ativos** como página no Notion

**Knowledge — arquivos para upload:**

| Nome do arquivo (renomeado) | Origem no projeto |
|---|---|
| `SKILL-PORTAL-DO-TERRENO.md` | `01-PLUGINS/01-cartografo/skills/portal-do-terreno/SKILL.md` |
| `ARSENAL-ESTRATEGICO.md` | `01-PLUGINS/01-cartografo/skills/portal-do-terreno/arsenal-estrategico.md` |
| `SKILL-FORJA-DA-PERSONA.md` | `01-PLUGINS/01-cartografo/skills/forja-da-persona/SKILL.md` |
| `ALMA-DA-PERSONA.md` | `01-PLUGINS/01-cartografo/skills/forja-da-persona/alma-da-persona.md` |
| `SZC.md` | `01-PLUGINS/01-cartografo/skills/forja-da-persona/szc.md` |
| `PERFIS-COGNITIVOS.md` | `01-PLUGINS/01-cartografo/skills/forja-da-persona/perfis-cognitivos.md` |
| `SKILL-FORJA-DO-UNIVERSO.md` | `01-PLUGINS/01-cartografo/skills/forja-do-universo/SKILL.md` |
| `PRIMAL-BRANDING.md` | `01-PLUGINS/01-cartografo/skills/forja-do-universo/primal-branding.md` |
| `STORYBRAND.md` | `01-PLUGINS/01-cartografo/skills/forja-do-universo/storybrand.md` |
| `SKILL-ATIVOS-DE-PERCEPCAO.md` | `01-PLUGINS/01-cartografo/skills/ativos-de-percepcao/SKILL.md` |
| `DIAGNOSTICO-ATIVOS.md` | `01-PLUGINS/01-cartografo/skills/ativos-de-percepcao/diagnostico.md` |
| `GLOSSARIO.md` | `00-FUNDACAO/GLOSSARIO.md` |
| `PROTOCOLO-OLIMPO.md` | `05-ASSETS/gpt-instructions/PROTOCOLO-OLIMPO.md` |

**Total: 13 arquivos**

---

## Agente 02 — Atena (A Alquimista)

**Modelo:** 5.5 → Instant | **Notion Action:** ⚠️ Opcional
**Capabilities:** Web search ✅ ON, Canvas ✅ ON

**O que a Atena opera no Notion (se Action configurada):**
- Salva a **Oferta Estruturada** como página no Notion
- Salva o **Pergaminho de Copy** no DB Conteúdo (`25cfc122` — base Conteúdo)

**Knowledge — arquivos para upload:**

| Nome do arquivo (renomeado) | Origem no projeto |
|---|---|
| `SKILL-PERGAMINHO-DE-COPY.md` | `01-PLUGINS/02-alquimista/skills/pergaminho-de-copy/SKILL.md` |
| `COPY-3X5.md` | `01-PLUGINS/02-alquimista/skills/pergaminho-de-copy/copy-3x5.md` |
| `METODO-CARGA.md` | `01-PLUGINS/02-alquimista/skills/pergaminho-de-copy/metodo-carga.md` |
| `ARSENAL-RETORICO.md` | `01-PLUGINS/02-alquimista/skills/pergaminho-de-copy/arsenal-retorico.md` |
| `SKILL-FORJA-DE-OFERTA.md` | `01-PLUGINS/02-alquimista/skills/forja-de-oferta/SKILL.md` |
| `SKILL-MAQUINA-DE-RECEITA.md` | `01-PLUGINS/02-alquimista/skills/maquina-de-receita/SKILL.md` |
| `SKILL-PORTAL-DA-ESCALA.md` | `01-PLUGINS/02-alquimista/skills/portal-da-escala/SKILL.md` |
| `SKILL-METRICAS-PRODUTO.md` | `01-PLUGINS/02-alquimista/skills/metricas-produto/SKILL.md` |
| `FRAMEWORKS-ANUNCIOS.md` | `01-PLUGINS/02-alquimista/skills/frameworks-anuncios/frameworks-anuncios.md` |
| `REFERENCIAS-PM-PMM.md` | `00-FUNDACAO/REFERENCIAS-PM-PMM.md` |
| `GLOSSARIO.md` | `00-FUNDACAO/GLOSSARIO.md` |
| `PROTOCOLO-OLIMPO.md` | `05-ASSETS/gpt-instructions/PROTOCOLO-OLIMPO.md` |

**Total: 12 arquivos**

---

## Agente 03 — Hermes (O Bardo)

**Modelo:** 5.5 → Instant | **Notion Action:** ⚠️ Opcional
**Capabilities:** Web search ✅ ON, Canvas ✅ ON

**O que o Hermes opera no Notion (se Action configurada):**
- Cria entradas no **DB Conteúdo** (`25cfc122`) — 1 entrada por peça criada
  - Campos: Título, Status (Rascunho), Tipo de Post, Plataforma, Propósito, corpo completo em "Notas & Briefing"

**Knowledge — arquivos para upload:**

| Nome do arquivo (renomeado) | Origem no projeto |
|---|---|
| `SKILL-CHAVIDEO.md` | `01-PLUGINS/03-bardo/skills/chavideo/SKILL.md` |
| `ARSENAL-NARRATIVO.md` | `01-PLUGINS/03-bardo/skills/chavideo/arsenal-narrativo.md` |
| `PROGYMNASMATA-VIDEO-MAP.md` | `01-PLUGINS/03-bardo/skills/chavideo/progymnasmata-video-map.md` |
| `CINEMATICAS-COMBINACOES.md` | `01-PLUGINS/03-bardo/skills/chavideo/cinematicas-combinacoes.md` |
| `SKILL-CHAVOSSEL.md` | `01-PLUGINS/03-bardo/skills/chavossel/SKILL.md` |
| `EXEMPLOS-CHAVOSSEL.md` | `01-PLUGINS/03-bardo/skills/chavossel/exemplos.md` |
| `SKILL-CAVALO-DE-TROIA.md` | `01-PLUGINS/03-bardo/skills/cavalo-de-troia/SKILL.md` |
| `SKILL-HEADLINE-GENERATOR.md` | `01-PLUGINS/03-bardo/skills/headline-generator/SKILL.md` |
| `SKILL-SCRIPT-CREATOR.md` | `01-PLUGINS/03-bardo/skills/script-creator/SKILL.md` |
| `SKILL-SCRIPT-ANALYZER.md` | `01-PLUGINS/03-bardo/skills/script-analyzer/SKILL.md` |
| `SKILL-COPY-ENHANCER.md` | `01-PLUGINS/03-bardo/skills/copy-enhancer/SKILL.md` |
| `GLOSSARIO.md` | `00-FUNDACAO/GLOSSARIO.md` |
| `PROTOCOLO-OLIMPO.md` | `05-ASSETS/gpt-instructions/PROTOCOLO-OLIMPO.md` |

**Total: 13 arquivos**

---

## Agente 04 — Ares (O Arauto)

**Modelo:** 5.5 → Instant | **Notion Action:** ✅ Sim (essencial)
**Capabilities:** Canvas ✅ ON

**O que o Ares opera no Notion:**
- Cria e popula o cronograma no **MINHA ESTEIRA** (`25cfc122-de3b-8131-9284-000b78f0406d`)
  - 1 linha por dia da campanha: Data | Status | Dia | Fase | Ação | Copy
- Cria **tarefas** no banco de Tarefas (`00cfc122`) para ações operacionais
- Cria o card do **novo produto** no MINHA ESTEIRA (Skill 5)
- Registra objeções de prospecção ativa como entradas no Tesouro dos Erros

**Knowledge — arquivos para upload:**

| Nome do arquivo (renomeado) | Origem no projeto |
|---|---|
| `SKILL-MAPA-DE-CAMPANHA.md` | `01-PLUGINS/04-arauto/skills/mapa-de-campanha/SKILL.md` |
| `MODALIDADES.md` | `01-PLUGINS/04-arauto/skills/mapa-de-campanha/modalidades.md` |
| `COPY-CAMPANHA.md` | `01-PLUGINS/04-arauto/skills/mapa-de-campanha/copy-campanha.md` |
| `SKILL-ESTEIRA-NOTION.md` | `01-PLUGINS/04-arauto/skills/esteira-notion/SKILL.md` |
| `NOTION-INTEGRACAO.md` | `01-PLUGINS/04-arauto/skills/esteira-notion/notion-integracao.md` |
| `SKILL-PROTOCOLO-MASSIVO.md` | `01-PLUGINS/04-arauto/skills/forja-de-caixa/SKILL.md` |
| `NEGOCIACAO-1X1.md` | `01-PLUGINS/04-arauto/skills/forja-de-caixa/negociacao-1x1.md` |
| `SKILL-PROSPECCAO-ATIVA.md` | `01-PLUGINS/04-arauto/skills/prospeccao-ativa/SKILL.md` |
| `SKILL-CRIAR-PRODUTO-ESTEIRA.md` | `01-PLUGINS/04-arauto/skills/criar-produto-esteira/SKILL.md` |
| `LEGAL-AUXILIAR.md` | `05-ASSETS/referencias/LEGAL-AUXILIAR.md` |
| `GLOSSARIO.md` | `00-FUNDACAO/GLOSSARIO.md` |
| `PROTOCOLO-OLIMPO.md` | `05-ASSETS/gpt-instructions/PROTOCOLO-OLIMPO.md` |
| `NOTION-ARQUITETURA.md` | `05-ASSETS/gpt-instructions/NOTION-ARQUITETURA.md` |

**Total: 13 arquivos**

---

## Agente 05 — Hefesto (O Iluminista)

**Modelo:** 5.5 → Instant | **Notion Action:** ⚠️ Opcional
**Capabilities:** Image generation ✅ ON

**O que o Hefesto opera no Notion (se Action configurada):**
- Publica links dos assets gerados no **DB Conteúdo** ou na **MINHA ESTEIRA**
- Registra o Tema Forjado como página de referência no Notion

**Figma:** sem acesso via Action no ChatGPT. O Hefesto entrega as specs técnicas completas (cores HEX, tipografia, grid, texto de cada frame) → você aplica no Figma. Para automação de Figma, use o Claude Code.

**Knowledge — arquivos para upload:**

| Nome do arquivo (renomeado) | Origem no projeto |
|---|---|
| `SKILL-SISTEMA-DE-DESIGN.md` | `01-PLUGINS/05-iluminista/skills/sistema-de-design/SKILL.md` |
| `SKILL-FORJA-DE-IMAGEM.md` | `01-PLUGINS/05-iluminista/skills/forja-de-imagem/SKILL.md` |
| `SKILL-ARQUITETO-DE-EXPERIENCIA.md` | `01-PLUGINS/05-iluminista/skills/arquiteto-de-experiencia/SKILL.md` |
| `PRINCIPIOS-VISUAIS.md` | `01-PLUGINS/05-iluminista/skills/arquiteto-de-experiencia/principios-visuais.md` |
| `SKILL-PONTE-FIGMA.md` | `01-PLUGINS/05-iluminista/skills/ponte-figma/SKILL.md` |
| `SKILL-PUBLICADOR-VISUAL.md` | `01-PLUGINS/05-iluminista/skills/publicador-visual/SKILL.md` |
| `GLOSSARIO.md` | `00-FUNDACAO/GLOSSARIO.md` |
| `PROTOCOLO-OLIMPO.md` | `05-ASSETS/gpt-instructions/PROTOCOLO-OLIMPO.md` |

**Total: 8 arquivos**

---

## 7. Resumo rápido — capabilities e Notion por agente

| Agente | Modelo | Web search | Canvas | Image gen | Notion Action |
|---|---|---|---|---|---|
| Zeus | 5.5 Thinking | ❌ | ❌ | ❌ | ✅ Essencial |
| Apolo | 5.5 Instant | ✅ | ❌ | ❌ | ⚠️ Opcional |
| Atena | 5.5 Instant | ✅ | ✅ | ❌ | ⚠️ Opcional |
| Hermes | 5.5 Instant | ✅ | ✅ | ❌ | ⚠️ Opcional |
| Ares | 5.5 Instant | ❌ | ✅ | ❌ | ✅ Essencial |
| Hefesto | 5.5 Instant | ❌ | ❌ | ✅ | ⚠️ Opcional |

---

## 8. Como renomear os arquivos antes do upload

Os arquivos no projeto têm todos o nome `SKILL.md` dentro de suas pastas. Para o ChatGPT, cada arquivo precisa ter um nome único. Renomeie conforme a coluna "Nome do arquivo (renomeado)" de cada agente acima.

**Script PowerShell para preparar os arquivos de upload — exemplo para o Ares:**

```powershell
$dest = "C:\Users\lucas\Desktop\upload-ares"
New-Item -ItemType Directory -Force $dest
$base = "C:\Users\lucas\Downloads\Chave Mestra\CHAVE-MESTRA\01-PLUGINS\04-arauto\skills"
$fund = "C:\Users\lucas\Downloads\Chave Mestra\CHAVE-MESTRA"

Copy-Item "$base\mapa-de-campanha\SKILL.md"        "$dest\SKILL-MAPA-DE-CAMPANHA.md"
Copy-Item "$base\mapa-de-campanha\modalidades.md"   "$dest\MODALIDADES.md"
Copy-Item "$base\mapa-de-campanha\copy-campanha.md" "$dest\COPY-CAMPANHA.md"
Copy-Item "$base\esteira-notion\SKILL.md"           "$dest\SKILL-ESTEIRA-NOTION.md"
Copy-Item "$base\esteira-notion\notion-integracao.md" "$dest\NOTION-INTEGRACAO.md"
Copy-Item "$base\forja-de-caixa\SKILL.md"        "$dest\SKILL-PROTOCOLO-MASSIVO.md"
Copy-Item "$base\forja-de-caixa\negociacao-1x1.md" "$dest\NEGOCIACAO-1X1.md"
Copy-Item "$base\prospeccao-ativa\SKILL.md"         "$dest\SKILL-PROSPECCAO-ATIVA.md"
Copy-Item "$base\criar-produto-esteira\SKILL.md"    "$dest\SKILL-CRIAR-PRODUTO-ESTEIRA.md"
Copy-Item "$fund\05-ASSETS\referencias\LEGAL-AUXILIAR.md" "$dest\LEGAL-AUXILIAR.md"
Copy-Item "$fund\00-FUNDACAO\GLOSSARIO.md"          "$dest\GLOSSARIO.md"

Write-Host "Arquivos prontos em $dest"
```

Adapte o `$base` e `$dest` para cada agente conforme as tabelas acima.

---

## 9. Ordem de configuração recomendada

1. **Zeus** — configure primeiro; teste o Diagnóstico 6D e o fluxo de escrita no Notion
2. **Ares** — segundo porque tem a Notion Action mais complexa (MINHA ESTEIRA)
3. **Apolo** — terceiro; teste a pesquisa de mercado com Web search
4. **Atena** — quarto; teste Copy 3×5 com Canvas
5. **Hermes** — quinto; teste roteiro de Reel com Canvas
6. **Hefesto** — sexto; teste geração de imagem com DALL-E

---

*Guia de Configuração O Olimpo — Maio 2026*
*Agentes: Zeus · Apolo · Atena · Hermes · Ares · Hefesto*

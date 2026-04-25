# Protocolo do Dossiê CM — Transporte de Contexto Multi-Ambiente

> O Dossiê é a memória viva do projeto. O princípio não muda entre ambientes — o que muda é o mecanismo de transporte. Este protocolo define os 3 tiers de operação e o formato portátil que funciona em qualquer IA.

---

## Princípio fundamental

**O Dossiê não vai ao plugin — o plugin vai ao Dossiê.**

Cada plugin tem seções pré-alocadas. Ao iniciar, lê as seções relevantes. Ao concluir, atualiza sua seção. O próximo plugin encontra tudo atualizado — independente de onde o Dossiê vive.

```
SEÇÕES POR RESPONSÁVEL

§0 — Diagnóstico         → Chaveiro (Protocolo 0)
§1 — Identidade          → Cartógrafo (Forja do Universo + Ritual da Chave)
§2 — Inteligência        → Cartógrafo (Portal do Terreno + Forja da Persona)
§3 — Estratégia          → Alquimista (Forja de Oferta) + Arauto (Mapa de Campanha)
§4 — Criação             → Alquimista + Bardo + Iluminista
§5 — Operação            → Arauto (Esteira Notion + Giro da Chave)
§6 — Evolução            → Chaveiro (Tesouro dos Erros + Forja do Conhecimento + Lua Cheia)
§7 — Entrega ao Cliente  → Qualquer plugin ao fechar fase
```

---

## O problema real: o modelo "arquivo local" não porta

O modelo onde o plugin lê/escreve diretamente em um `.md` funciona **apenas no Claude Code**. Em qualquer outro ambiente — claude.ai, ChatGPT, Gemini, APIs sem file tools — não há acesso a arquivos.

| Ambiente | Acesso a arquivos | Sem solução fica |
|----------|------------------|-----------------|
| Claude Code | ✅ Leitura + escrita | Funciona normalmente |
| Claude.ai + Notion MCP | ✅ Via API Notion | Funciona via notion-fetch / notion-update-page |
| Claude.ai Projects (sem MCP) | ⚠️ Só leitura | Dossiê fica desatualizado |
| Qualquer IA sem MCP | ❌ Nenhum | Contexto zerado a cada sessão |
| ChatGPT / Gemini / outros | ❌ Nenhum | Sem memória de projeto |

**Solução:** 3 tiers de transporte. O Dossiê é sempre o mesmo — só o mecanismo muda.

---

## Os 3 Tiers de Transporte

### Tier 1 — Automático (Claude Code ou Notion MCP ativo)

O plugin lê e escreve diretamente. Nenhuma ação manual do usuário.

**Claude Code:**
```
[CLIENTE-NOME]/00-DOSSIE/dossie.md
→ Plugin usa Read para ler, Edit/Write para atualizar
→ Versionado no Git — histórico automático
```

**Notion MCP:**
```
Página Notion do cliente → Dossiê CM
→ Plugin usa notion-fetch para ler
→ Plugin usa notion-update-page para escrever
→ Funciona em qualquer sessão que tenha o MCP ativo
```

**Comportamento ao final da sessão (Tier 1):**
Atualizar o arquivo/página e registrar nova versão no HISTÓRICO. Nenhum output especial para o usuário.

---

### Tier 2 — Semi-automático (Claude.ai Projects sem MCP)

O Dossiê vive no **Project Knowledge** (read-only). O plugin lê normalmente, mas não consegue salvar de volta.

**Comportamento:**
- Ao iniciar: ler o Dossiê do Project Knowledge normalmente
- Durante a sessão: trabalhar normalmente
- Ao encerrar: gerar o **Estado Dossiê Compacto** atualizado e instruir o usuário a substituir o arquivo no Project Knowledge

```
⚠️ Claude.ai Projects — ao final de cada sessão:
O sistema gera o Estado Dossiê atualizado.
O usuário: baixa o arquivo → substitui no Project Knowledge → próxima sessão começa atualizada.
```

---

### Tier 3 — Manual / Portátil (qualquer IA, qualquer chat)

Sem arquivo. Sem MCP. Apenas texto na janela de conversa.

**Comportamento:**
- Ao iniciar: o usuário cola o **Estado Dossiê Compacto** no início da mensagem
- O sistema lê o Estado e reconstrói o contexto do projeto
- Durante a sessão: opera normalmente com o contexto carregado
- Ao encerrar: gera o **Estado Dossiê Compacto** atualizado para o usuário salvar

```
Fluxo Tier 3:
[usuário cola Estado Dossiê] → [sessão com contexto completo] → [sistema gera Estado atualizado] → [usuário salva]
```

O Estado Dossiê é intencionalmente compacto (~30 linhas) para caber em qualquer janela de contexto de qualquer IA.

---

## Estado Dossiê Compacto — Formato Portátil Universal

Este é o formato que funciona em qualquer ambiente. Comprime as informações essenciais do Dossiê completo em um bloco estruturado de ~30 linhas.

### Formato

```
╔══════════════════════════════════════════════════════════╗
║  ESTADO DOSSIÊ — [PROJETO/CLIENTE]                       ║
║  v[N] · [YYYY-MM-DD] · Fase atual: [N — nome]            ║
╠══════════════════════════════════════════════════════════╣
║ CLIENTE                                                  ║
║  Marca: [nome da marca]                                  ║
║  Produtos: [nome (tipo)] · [nome (tipo)]                 ║
║  Audiência: [como chama]                                 ║
║  Tom: [adj1], [adj2], [adj3] · nunca diria: "[frase]"    ║
╠══════════════════════════════════════════════════════════╣
║ DIAGNÓSTICO 6D                                           ║
║  D1 Identidade   [🔴/🟡/🟢] [observação em 1 linha]      ║
║  D2 Inteligência [🔴/🟡/🟢] [observação em 1 linha]      ║
║  D3 Estratégia   [🔴/🟡/🟢] [observação em 1 linha]      ║
║  D4 Criação      [🔴/🟡/🟢] [observação em 1 linha]      ║
║  D5 Operação     [🔴/🟡/🟢] [observação em 1 linha]      ║
║  D6 Evolução     [🔴/🟡/🟢] [observação em 1 linha]      ║
║  Jornada: [Starter Pack / Já tem marca / etc.]           ║
╠══════════════════════════════════════════════════════════╣
║ CONTEXTO ATIVO                                           ║
║  DNA: [voz + posicionamento em 1 linha]                  ║
║  Persona: [quem é + dor principal em 1 linha]            ║
║  Oferta: [o que vende + promessa em 1 linha]             ║
║  Campanha: [o que está ativo ou "nenhuma"]               ║
╠══════════════════════════════════════════════════════════╣
║ PROGRESSO DAS FASES                                      ║
║  ✅ Fase 0 Fundação: [resumo em 1 linha ou "pendente"]   ║
║  ✅ Fase 1 Inteligência: [resumo ou "pendente"]          ║
║  🔄 Fase 2 Estratégia: em andamento — [onde parou]       ║
║  ⏳ Fase 3 Criação: pendente                             ║
║  ⏳ Fase 4 Operação: pendente                            ║
║  ⏳ Fase 5 Evolução: pendente                            ║
╠══════════════════════════════════════════════════════════╣
║ PRÓXIMA AÇÃO                                             ║
║  Plugin: [nome]  Skill: [nome]                           ║
║  Objetivo: [o que fazer nesta sessão]                    ║
║  Contexto crítico: [o que o plugin precisa saber]        ║
╚══════════════════════════════════════════════════════════╝
```

### Exemplo preenchido

```
╔══════════════════════════════════════════════════════════╗
║  ESTADO DOSSIÊ — STUDIO BEATRIZ LIMA                     ║
║  v1.2 · 2026-04-28 · Fase atual: 2 — Estratégia         ║
╠══════════════════════════════════════════════════════════╣
║ CLIENTE                                                  ║
║  Marca: Studio Beatriz Lima                              ║
║  Produtos: Dança Adulta Online (curso) · Aula Avulsa     ║
║  Audiência: suas bailarinas                              ║
║  Tom: acolhedora, precisa, vibrante · nunca diria:       ║
║       "não importa a técnica, o que vale é se divertir"  ║
╠══════════════════════════════════════════════════════════╣
║ DIAGNÓSTICO 6D                                           ║
║  D1 Identidade   🟡 Tem marca mas sem universo simbólico  ║
║  D2 Inteligência 🟢 Terreno e persona mapeados           ║
║  D3 Estratégia   🔴 Sem plano de campanha ou oferta      ║
║  D4 Criação      🟡 Produz no feeling, sem método        ║
║  D5 Operação     🔴 Tudo na cabeça, sem calendário       ║
║  D6 Evolução     🔴 Não documenta nada                   ║
║  Jornada: Já tem marca (pulou Fase 0, iniciou na Fase 1) ║
╠══════════════════════════════════════════════════════════╣
║ CONTEXTO ATIVO                                           ║
║  DNA: voz acolhedora + posição "dança para adultos       ║
║       que nunca dançaram"                                ║
║  Persona: Carla, 42 anos — quer dançar mas acha que      ║
║           é tarde demais, objeção "não tenho ritmo"      ║
║  Oferta: ainda não estruturada (próxima ação)            ║
║  Campanha: nenhuma ativa                                 ║
╠══════════════════════════════════════════════════════════╣
║ PROGRESSO DAS FASES                                      ║
║  ✅ Fase 0 Fundação: pulada — identidade já existia      ║
║  ✅ Fase 1 Inteligência: terreno + persona concluídos    ║
║  🔄 Fase 2 Estratégia: iniciando — oferta pendente       ║
║  ⏳ Fase 3 Criação: pendente                             ║
║  ⏳ Fase 4 Operação: pendente                            ║
║  ⏳ Fase 5 Evolução: pendente                            ║
╠══════════════════════════════════════════════════════════╣
║ PRÓXIMA AÇÃO                                             ║
║  Plugin: Alquimista  Skill: Forja de Oferta              ║
║  Objetivo: estruturar oferta do curso Dança Adulta Online ║
║  Contexto crítico: objeção "é tarde demais", ticket      ║
║  sugerido R$197-297, brecha é método progressivo         ║
╚══════════════════════════════════════════════════════════╝
```

---

## Detecção de ambiente pelo sistema

Ao iniciar qualquer sessão, identificar o tier:

| Sinal detectado | Tier | Ação imediata |
|----------------|------|---------------|
| Ferramentas Read/Write/Edit disponíveis | Tier 1 | Ler `dossie.md` automaticamente |
| Ferramentas `notion-*` disponíveis | Tier 1 | Ler Dossiê via `notion-fetch` |
| Nenhuma ferramenta de arquivo, mas há Project Knowledge | Tier 2 | Ler do contexto; gerar Estado ao final |
| Nenhuma ferramenta, nenhum Project Knowledge | Tier 3 | Verificar se usuário colou Estado Dossiê |

**Se Tier 3 e o usuário não colou Estado Dossiê:**
→ Perguntar: *"Tem um Estado Dossiê desse projeto para colar? Ou quer iniciar um novo?"*

**Se Tier 3 e o usuário colou Estado Dossiê:**
→ Confirmar: *"Contexto carregado: [Projeto], Fase [N]. Continuando de onde parou."*

**Ao final de toda sessão em Tier 2 ou 3:**
→ Gerar automaticamente o Estado Dossiê atualizado e orientar o usuário a salvar.

---

## Dossiê completo vs. Estado Compacto — quando usar cada um

| Formato | Quando usar | Onde vive |
|---------|------------|-----------|
| **Dossiê completo** (`dossie.md`) | Tier 1 — Claude Code ou Notion MCP. Referência completa do projeto. | Arquivo local ou Notion |
| **Estado Dossiê Compacto** | Tier 2 e 3 — pontes de sessão, ambientes sem arquivo. | Colado no chat, salvo em nota ou Google Docs |
| **Nota de Handoff** | Qualquer tier — troca de plugin dentro de uma mesma sessão. Descartável após uso. | Apenas no chat |

---

## Regra anti-duplicação

- **Nunca criar um "resumo do projeto" separado.** O Estado Dossiê já é o resumo.
- **O Estado Compacto substitui o Dossiê no chat — não é um documento adicional.**
- **A Nota de Handoff não é salva.** É temporária, existe só para pontes de sessão.
- **Se o Dossiê precisar de um campo novo**, atualizar o `TEMPLATE-DOSSIE.md` via Chaveiro (Protocolo 2).

---

## Protocolo de leitura por plugin

Ao iniciar qualquer skill, o plugin lê as seções do Dossiê (ou campos equivalentes no Estado Compacto):

| Plugin | Lê obrigatoriamente | Lê opcionalmente |
|--------|--------------------|--------------------|
| Cartógrafo — Portal do Terreno | §0 / Diagnóstico | §1 / DNA |
| Cartógrafo — Forja da Persona | §0, §2>Terreno / Diagnóstico + Terreno | §1 / DNA |
| Cartógrafo — Forja do Universo | §0 / Diagnóstico | §2 / Persona |
| Alquimista — Pergaminho de Copy | §1, §2 / DNA + Persona | §3>Oferta |
| Alquimista — Forja de Oferta | §0, §2 / Diagnóstico + Persona | §1 / DNA |
| Alquimista — Portal da Escala | §0, §3, §6 / Diagnóstico + Estratégia | §2 |
| Bardo — qualquer skill | §1, §2 / DNA + Persona | §3>Campanha |
| Arauto — Mapa de Campanha | §0, §2, §3>Oferta / Diagnóstico + Oferta | §1 / DNA |
| Arauto — Esteira Notion | §3>Campanha / Campanha | §4 |
| Arauto — Protocolo Massivo | §0, §2, §3 / Diagnóstico + Oferta | §1 |
| Iluminista — Sistema de Design | §1>estética / DNA | §3 |
| Chaveiro — qualquer skill | §0 sempre | todos os §§ relevantes |

*Em ambientes Tier 2/3, os §§ correspondem aos campos do Estado Dossiê Compacto.*

---

*Protocolo do Dossiê CM — Sistema Chave Mestra. O conteúdo é a memória. O mecanismo é o que muda.*

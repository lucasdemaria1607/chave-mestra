# Protocolo do Dossiê CM — Como o Contexto Viaja

> O Dossiê é o único documento que existe por projeto. Não é copiado, não é duplicado. Todo plugin lê dele e escreve nele. É a memória viva do projeto.

---

## Princípio fundamental

**O Dossiê não vai ao plugin — o plugin vai ao Dossiê.**

Cada plugin tem seções pré-alocadas. Ao iniciar, lê as seções relevantes. Ao concluir, escreve sua seção. O próximo plugin encontra tudo atualizado.

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

## Onde o Dossiê vive

### Modo local (Claude Code)

```
[CLIENTE-NOME]/
└── 00-DOSSIE/
    └── dossie.md          ← arquivo único, versionado no Git
```

O Claude Code lê e escreve diretamente neste arquivo. Nenhum plugin cria um arquivo separado de contexto.

### Modo Notion (claude.ai / MCP ativo)

O Dossiê vive como uma página Notion na seção do cliente. O MCP do Notion (`notion-update-page`, `notion-fetch`) é o mecanismo de leitura e escrita.

Estrutura Notion sugerida:
```
ESTEIRA DO CLIENTE
└── [NOME DO CLIENTE]
    ├── 🗂 Dossiê CM          ← página master com as seções §0–§7
    ├── 📁 Identidade
    ├── 📁 Inteligência
    ├── 📁 Estratégia
    ├── 📁 Criação
    ├── 📁 Entregas
    └── 📁 Evolução
```

### Modo híbrido (recomendado para trabalho real com clientes)

| Contexto | Onde o Dossiê vive | Mecanismo |
|---------|-------------------|-----------|
| Desenvolvimento / Claude Code | Local `.md` | Leitura/escrita direta de arquivo |
| Sessão claude.ai (sem Code) | Colado no chat | Handoff Note + paste manual |
| Operação com cliente | Notion | MCP Notion (leitura e escrita automática) |
| Entrega ao cliente | Google Drive | Export do §7 como documento limpo |

---

## Protocolo de leitura por plugin

Ao iniciar qualquer skill, o plugin lê:

| Plugin | Seções que lê obrigatoriamente | Seções que lê opcionalmente |
|--------|-------------------------------|----------------------------|
| Cartógrafo — Portal do Terreno | §0 (diagnóstico) | §1 (identidade se existir) |
| Cartógrafo — Forja da Persona | §0, §2 > Terreno | §1 |
| Cartógrafo — Forja do Universo | §0 | §2 |
| Alquimista — Pergaminho de Copy | §1, §2 | §3 > Oferta |
| Alquimista — Forja de Oferta | §0, §2 | §1, §3 > Campanha |
| Alquimista — Portal da Escala | §0, §3, §6 | §2 |
| Bardo — qualquer skill | §1 (voz), §2 (persona) | §3 (tema/campanha) |
| Arauto — Mapa de Campanha | §0, §2, §3 > Oferta | §1 |
| Arauto — Esteira Notion | §3 > Campanha | §4 |
| Arauto — Protocolo Massivo | §0, §2, §3 | §1 |
| Iluminista — Sistema de Design | §1 (DNA/estética) | §3 |
| Chaveiro — qualquer skill | §0 sempre | todos os §§ relevantes |

---

## Nota de Handoff — troca de sessão ou plugin

Quando uma sessão encerra (ou quando o usuário vai trocar de plugin em uma nova conversa), o plugin ativo gera uma **Nota de Handoff**. O usuário cola isso no início da próxima sessão.

### Formato padrão

```
═══════════════════════════════════════════════
HANDOFF — [Plugin/Skill saindo] → [Plugin/Skill entrando]
Cliente: [nome]
Fase concluída: [Fase X — nome]
Seções do Dossiê atualizadas: §X, §Y
─────────────────────────────────────────────
O que foi feito:
• [bullet 1]
• [bullet 2]
• [bullet 3]
─────────────────────────────────────────────
O próximo plugin precisa saber:
• [informação crítica específica]
• [decisão tomada que afeta o próximo passo]
─────────────────────────────────────────────
Arquivos gerados: [lista com caminhos]
Dossiê em: [caminho/notion-url]
Próxima ação recomendada: [específico]
═══════════════════════════════════════════════
```

### Exemplo real

```
═══════════════════════════════════════════════
HANDOFF — Cartógrafo (Forja da Persona) → Alquimista (Forja de Oferta)
Cliente: Studio Beatriz Lima
Fase concluída: Fase 1 — Inteligência
Seções do Dossiê atualizadas: §2 (Terreno + Persona)
─────────────────────────────────────────────
O que foi feito:
• Terreno mapeado: nicho de dança para adultos 35-55 anos, saturação média, brecha em método para iniciantes
• Persona: Carla, 42 anos, Purgatório (quer dançar mas acha que é tarde demais), linguagem "nunca fui coordenada"
• SZC: mercado tratando adultos como versão menor dos jovens → brecha na abordagem "seu ritmo, sua fase"
─────────────────────────────────────────────
O próximo plugin precisa saber:
• Objeção principal da persona: "já passei da idade pra aprender"
• A brecha principal é método de ensino progressivo para adultos — a oferta precisa atacar diretamente esse ponto
• Ticket sugerido baseado no terreno: R$197–R$297 para entrada
─────────────────────────────────────────────
Arquivos gerados: 00-DOSSIE/dossie.md (§2 atualizado), 03-INTELIGENCIA/alma-da-persona.md
Dossiê em: 00-DOSSIE/dossie.md
Próxima ação recomendada: Forja de Oferta com foco em "método para adultos começando do zero"
═══════════════════════════════════════════════
```

---

## Regra anti-duplicação

- **Nunca criar um "resumo do projeto" separado do Dossiê.** O Dossiê já é o resumo.
- **Nunca criar um "briefing do plugin" separado.** O plugin lê o Dossiê e extrai o que precisa.
- **A Nota de Handoff não é um novo documento.** É uma mensagem temporária para pontes de sessão — não se salva, não se arquiva.
- **Se o Dossiê precisar de um campo novo**, atualizar o `TEMPLATE-DOSSIE.md` via Chaveiro (Protocolo 2 — Atualização), não criar arquivo separado.

---

*Protocolo do Dossiê CM — Sistema Chave Mestra. Um arquivo. Uma verdade.*

# SOP — Onboarding de Cliente

**Tipo:** Complexo (alto impacto, primeira impressão, muitas variáveis)
**Quando:** ao iniciar qualquer novo projeto com cliente externo
**Tempo estimado:** 60–90 min de sessão + 30 min de preparação
**Plugin responsável:** Chaveiro (Protocolo 0)

---

## Pré-condições

- [ ] Cliente confirmou interesse e fit
- [ ] Escopo inicial foi discutido (nem que seja em conversa)
- [ ] Sessão agendada (síncrona ou assíncrona com formulário)

---

## Passo a passo

### Fase 1 — Preparação (antes da sessão)

**1.1 Criar a estrutura do projeto**
- Duplicar `05-ASSETS/templates-cliente/` para `[CLIENTE-NOME]/`
- Criar `00-DOSSIE/dossie.md` a partir do `TEMPLATE-DOSSIE.md`
- Criar página no Notion (se cliente usa Notion)

**1.2 Preparar o ambiente da sessão**
- Abrir o projeto no Claude Code (ou criar projeto no claude.ai)
- Carregar no contexto: `dossie.md` + `PROTOCOLO-DO-CHAVEIRO.md`
- Ter em mãos: briefing inicial, escopo combinado, qualquer material enviado

---

### Fase 2 — Captura dos 5 Elementos (Modo Cliente Externo)

Antes de qualquer análise ou diagnóstico, capturar obrigatoriamente:

| # | Elemento | Pergunta direta |
|---|----------|----------------|
| 1 | Nome / marca | "Como você nomeia sua marca?" |
| 2 | Produtos (nome + tipo) | "Quais seus produtos/serviços? Como cada um se chama?" |
| 3 | Como chama a audiência | "Como você chama as pessoas que você atende? Tem um nome especial?" |
| 4 | Nome da comunidade | "Tem uma comunidade, grupo ou turma? Como se chama?" |
| 5 | Tom de voz | "Me dê 3 adjetivos que descrevem sua comunicação. E uma frase que você NUNCA diria para sua audiência." |

Registrar em `01-BRIEFING/briefing-inicial.md`.

---

### Fase 3 — Diagnóstico das 6 Dimensões (Protocolo 0 do Chaveiro)

Executar o Protocolo 0 completo. Para cada dimensão, 3–4 perguntas:

**D1 — Identidade** (marca, voz, universo simbólico)
**D2 — Inteligência** (mercado, concorrentes, persona)
**D3 — Estratégia** (plano, campanha, metas, esteira de valor)
**D4 — Criação** (método de produção, frequência, frameworks)
**D5 — Operação** (organização, sistema, calendário)
**D6 — Evolução** (documentação, aprendizado, rotina de reflexão)

> Ver perguntas completas em `01-PLUGINS/00-chaveiro/skills/chaveiro/SKILL.md` → Protocolo 0, Fase 2.

---

### Fase 4 — Gerar Matriz de Diagnóstico

Após as respostas, construir a matriz e apresentar ao cliente:

```
D1 Identidade   → [🔴/🟡/🟢] — [observação em 1 linha]
D2 Inteligência → [🔴/🟡/🟢] — [observação em 1 linha]
D3 Estratégia   → [🔴/🟡/🟢] — [observação em 1 linha]
D4 Criação      → [🔴/🟡/🟢] — [observação em 1 linha]
D5 Operação     → [🔴/🟡/🟢] — [observação em 1 linha]
D6 Evolução     → [🔴/🟡/🟢] — [observação em 1 linha]
```

Salvar em `01-BRIEFING/diagnostico-6d.md` + preencher §0 do `dossie.md`.

---

### Fase 5 — Identificar Tipo de Jornada

| Tipo | Condição | Fluxo |
|------|---------|-------|
| Starter Pack | D1 🔴 ou D2 🔴 | Fase 0 → 1 → 2 → 3 → 4 → 5 |
| Já tem marca | D1 🟢, D2 🔴/🟡 | Pular Fase 0, ir direto à Fase 1 |
| Já produz, quer escalar | D4 🟢, D3 🔴/🟡 | Fase 5 → Portal da Escala → Fase 2 → 3 |
| Já produz, quer qualidade | D4 🟡, D3 🟢 | Fase 3 (instalar método) → Fase 5 |
| Cliente Externo completo | qualquer | Fluxo completo por fases |

---

### Fase 6 — Gerar Roadmap Personalizado

Apresentar ao cliente em 3 horizontes:

```
AGORA (próximos 7 dias)
→ [Plugin 1]: [o que será feito + output esperado]
→ [Plugin 2]: [o que será feito + output esperado]

PRÓXIMO (próximos 30 dias)
→ [Plugin 3]: [o que será feito + output esperado]
→ [Plugin 4]: [o que será feito + output esperado]

CONTÍNUO (permanente)
→ [Plugin 5 + 6]: [o que mantém o sistema funcionando]
```

Salvar em §0 > Roadmap Personalizado do `dossie.md`.

---

### Fase 7 — Alinhamento e Confirmação

- [ ] Apresentar diagnóstico + roadmap ao cliente
- [ ] Confirmar prioridades ("isso faz sentido para você?")
- [ ] Ajustar roadmap se necessário
- [ ] Definir cadência de sessões
- [ ] Confirmar acesso a materiais (drive, notion, social, analytics)

---

### Fase 8 — Documentar e Configurar

- [ ] Preencher `01-BRIEFING/escopo-contrato.md` com o que foi combinado
- [ ] Atualizar versão 0.1 do `dossie.md` no HISTÓRICO DE VERSÕES
- [ ] Criar/configurar workspace Notion do cliente (se aplicável)
- [ ] Commit inicial: `init: onboarding [cliente-nome] — diagnóstico 6D completo`

---

## Output do SOP

| Arquivo | Status esperado ao final |
|---------|------------------------|
| `00-DOSSIE/dossie.md` | §0 preenchido completamente |
| `01-BRIEFING/briefing-inicial.md` | 5 elementos capturados |
| `01-BRIEFING/diagnostico-6d.md` | Matriz + tipo de jornada + roadmap |
| `01-BRIEFING/escopo-contrato.md` | Escopo confirmado |
| Notion (se aplicável) | Estrutura criada, Dossiê espelhado |

---

## Erros comuns a evitar

| Erro | Consequência | Prevenção |
|------|-------------|-----------|
| Pular a captura dos 5 elementos | Outputs em linguagem CM, não do cliente | Sempre capturar ANTES do diagnóstico |
| Fazer diagnóstico sem escuta ativa | Diagnóstico superficial, mal calibrado | Deixar o cliente falar, não assumir |
| Propor roadmap muito longo | Overwhelm, cliente desiste | Máximo 3 itens no AGORA |
| Não confirmar com o cliente | Expectativa errada sobre escopo | Sempre fechar com alinhamento explícito |

---

*SOP Onboarding — Sistema Chave Mestra. A primeira sessão define o padrão.*

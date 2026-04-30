# Rotinas Chave Mestra — Guia Completo

> Sistema de automação inteligente para pesquisa, criação e manutenção de conhecimento.
> Funciona em 3 ambientes diferentes — escolha o seu abaixo.

---

## As 4 Rotinas

| Rotina | O que faz | Frequência | Precisa de internet |
|--------|-----------|-----------|-------------------|
| **Temas em Alta** | Pesquisa trending topics relevantes para o nicho e gera banco de temas prontos | 1x/semana (segunda) | Sim |
| **Pesquisa de Nicho** | Mapeia novos players, movimentos de concorrentes e brechas emergentes | Quinzenal | Sim |
| **Accountability de Notas** | Executa Ciclo da Forja — revisa notas, encontra conexões, alerta quando o sistema esfria | Semanal | Não |
| **Transformação em Conteúdo** | Pega insights e temas da semana e gera roteiros, carrosséis e headlines | Semanal | Não (usa inputs das outras) |
| **Lua Cheia — Ciclo de Expansão** | Tria notas acumuladas em 3 trajetórias (Aprofundar/Criar/Produtizar), detecta padrões intelectuais e gera curadoria ativa de leituras, filmes e especialistas | Mensal (ao atingir 8 notas) | Sim (WebSearch para curadoria) |

---

## Escolha seu ambiente

### 🤖 Ambiente 1 — Claude Code (automático)

Rotinas rodam sozinhas na nuvem da Anthropic. Você não precisa fazer nada — os resultados aparecem como commits no repositório.

**Configuração necessária:**
1. Ter Claude Code com conta ativa
2. As rotinas já estão criadas (ver seção "Rotinas remotas ativas")
3. Verificar outputs em `06-ROTINAS/outputs/` após cada execução

**Onde ver os resultados:**
- GitHub: cada rotina cria um commit com os outputs
- Localmente: `git pull` para baixar os arquivos mais recentes

---

### 🖥️ Ambiente 2 — Claude.ai Projects (semi-automático)

Rode manualmente quando quiser. Os prompts estão prontos para colar.

**Configuração necessária:**
1. Criar um projeto no claude.ai
2. Subir os arquivos da pasta `06-ROTINAS/prompts/` no Project Knowledge
3. Subir o `CONFIG-GLOBAL.md` também

**Como rodar:**
1. Abra o projeto no claude.ai
2. Digite: "execute a rotina de [nome]"
3. A IA lê o prompt do Project Knowledge e executa
4. Copie o output e salve em `06-ROTINAS/outputs/[pasta]/[data].md`
5. Commit no repositório

**Dica:** criar lembretes no Google Calendar para os dias de execução de cada rotina.

---

### 📋 Ambiente 3 — Qualquer IA (manual portátil)

Funciona com ChatGPT, Gemini, Mistral, Claude.ai sem Projects, ou qualquer IA com acesso à internet.

**Configuração necessária:**
Nenhuma. Só os arquivos de prompt desta pasta.

**Como rodar:**
1. Abra o arquivo de prompt da rotina desejada (`06-ROTINAS/prompts/PROMPT-[nome].md`)
2. Preencha os campos entre colchetes com o contexto do projeto
3. Cole o prompt completo na IA de sua escolha
4. Salve o output no caminho indicado no arquivo de prompt

---

## Fluxo semanal recomendado

```
DOMINGO (noite) — automático
  → Rotina de Accountability de Notas
  → Revisar o relatório em outputs/forja-semanal/

SEGUNDA (manhã) — automático
  → Rotina de Temas em Alta (09h Bahia)
  → Rotina de Transformação em Conteúdo (11h Bahia — usa temas do dia + notas exportadas)

SEGUNDA (a qualquer hora) — manual, Claude Code local
  → "sincroniza rotinas" → publica outputs novos no Notion
  → "exporta notas" → puxa notas recentes do Notion para git (alimenta próximo ciclo)

1º E 15 DE CADA MÊS — automático
  → Rotina de Pesquisa de Nicho

1x/MÊS (ou ao atingir 8 notas novas) — manual, Claude Code local
  → "ciclo de expansão" → Lua Cheia — Ciclo de Expansão
     Tria notas, situa em campos do saber, detecta padrões, gera curadoria ativa
     Output: página MOC no Zettelkasten + git commit
```

---

## Estrutura de outputs

```
06-ROTINAS/outputs/
│
├── temas/
│   └── temas-[YYYY-MM-DD].md       ← banco de temas de cada execução
│
├── nicho/
│   └── nicho-update-[YYYY-MM-DD].md ← update quinzenal de mercado
│
├── forja-semanal/
│   ├── forja-[YYYY-MM-DD].md        ← revisão semanal (Cenário A — tem notas)
│   ├── ALERTA-[YYYY-MM-DD].md       ← sem notas por 7+ dias
│   └── ALERTA-CRITICO-[YYYY-MM-DD].md ← sem notas por 21+ dias
│
├── conteudo/                         ← (índice dos conteúdos gerados)
│   └── conteudo-[YYYY-MM-DD].md     ← manifesto + roteiros + carrosséis + headlines
│
└── expansao/                         ← outputs da Lua Cheia — Ciclo de Expansão
    ├── lua-cheia-[YYYY-MM].md        ← triage + padrão + curadoria (ciclo completo)
    └── lua-cheia-[YYYY-MM]-volume-insuficiente.md ← log quando threshold não atingido
```

---

## Sistema de notas (Accountability funcionar)

A Rotina de Accountability verifica quando foi a última nota adicionada em:
```
sistema-de-conhecimento/notas/
```

**Para que funcione:**
- Salve suas notas como arquivos `.md` nesta pasta
- Commit e push a cada nova nota (ou em lote, uma vez por dia)
- Qualquer arquivo `.md` com conteúdo conta como nota

**Formato de nota sugerido:**
```markdown
# [Título da nota]

Data: YYYY-MM-DD
Tipo: insight / reflexão / observação / aprendizado / ideia
Fonte: [livro, conversa, filme, experiência, etc.]

## A nota

[Conteúdo — em suas palavras]

## Conexões

- [Outra nota ou ideia que se conecta]

## Potencial de uso

- [Conteúdo? Estratégia? Plugin?]
```

---

## Configuração por projeto/cliente

Para usar as rotinas em um projeto de cliente:

1. Copiar `06-ROTINAS/config/CONFIG-TEMPLATE.md`
2. Renomear para `CONFIG-[slug-cliente].md`
3. Preencher todos os campos
4. No `CONFIG-GLOBAL.md`, atualizar `cliente_ativo` para o slug do cliente

As rotinas lerão automaticamente o contexto do cliente ativo.

---

## Como vender para clientes

### O que entregar

| Pacote | O que inclui | Para quem |
|--------|-------------|-----------|
| **Kit Manual** | 4 arquivos de prompt + CONFIG-TEMPLATE + este README | Qualquer cliente |
| **Kit Claude.ai** | Kit Manual + instruções de setup do Project | Clientes com claude.ai |
| **Kit Automático** | Configuração das rotinas remotas na conta do cliente | Clientes com Claude Code |
| **Serviço gerenciado** | Você roda as rotinas, entrega os outputs toda semana | Clientes que querem só o resultado |

### Para clientes sem Claude pago
- Entregar o **Kit Manual** — funciona com ChatGPT gratuito
- Criar lembretes no Google Calendar para cada rotina
- Oferecer o **Serviço gerenciado** como upgrade (você roda, eles recebem)

### Para clientes com ChatGPT Plus / Gemini Advanced
- Subir os prompts como "Custom Instructions" ou no "My GPT"
- Configurar um GPT personalizado com os 4 prompts
- Funciona semi-automaticamente

---

## Rotinas remotas ativas (Claude Code)

| Rotina | Schedule | UTC | Bahia |
|--------|---------|-----|-------|
| Temas em Alta | Segunda | 12:00 | 09:00 |
| Accountability de Notas | Domingo | 23:00 | 20:00 |
| Transformação em Conteúdo | Segunda | 14:00 | 11:00 |
| Pesquisa de Nicho | Dia 1 e 15 | 11:00 | 08:00 |

Ver e gerenciar: https://claude.ai/code/routines

---

*Rotinas CM — automatizar o ritmo, preservar o diferencial.*

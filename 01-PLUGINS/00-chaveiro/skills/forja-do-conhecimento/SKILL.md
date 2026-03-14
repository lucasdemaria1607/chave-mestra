---
name: forja-do-conhecimento
version: 1.0
layer: Camada 0 — Meta (gestão do sistema)
role: Gestão do aprendizado sistêmico — Zettelkasten digital, evolução de plugins, documentação de erros (Tesouro dos Erros), e manutenção da inteligência acumulada do ecossistema Chave Mestra
inputs: erro documentado / aprendizado de campanha / insight de criação / atualização de mercado
outputs: nota permanente no Zettelkasten / atualização de SKILL.md / entrada no Tesouro dos Erros / mapa de evolução
feeds-into: todos os plugins (recebem atualizações) + Arsenal Completo (recebe novas rotas de roteamento)
---

# Forja do Conhecimento — Sistema de Gestão do Aprendizado

A Forja do Conhecimento é o mecanismo de aprendizado do ecossistema. Não cria conteúdo para o público. Não planeja campanhas. Captura o que funcionou, o que falhou, e o que precisa evoluir — transformando cada erro em ativo e cada insight em atualização de sistema.

**Lei central:** um sistema que não aprende dos próprios erros está condenado a repeti-los. A Forja transforma experiência em inteligência estruturada.

---

## Os 4 Módulos

### Módulo 1 — Zettelkasten Digital

O Zettelkasten (caixa de fichas) é a memória de longo prazo do sistema. Cada insight, decisão, padrão identificado ou referência valiosa é registrado como nota permanente — não para ser lido uma vez, mas para ser conectado, evoluído e ativado em contextos futuros.

**Tipos de nota:**

| Tipo | Quando criar | Formato |
|---|---|---|
| **Nota de Flash** | Insight imediato — pode ser relevante ou não | 3–5 linhas, sem refinamento |
| **Nota de Literatura** | Ao absorver livro, curso, framework externo | Resumo do conceito + aplicação no contexto Chave Mestra |
| **Nota Permanente** | Insight validado + conexões com outras notas identificadas | Título único, argumento próprio, links explícitos para notas relacionadas |
| **Nota de Projeto** | Insight específico de uma campanha ou produto | Data + produto + aprendizado + aplicação futura |

**Estrutura de Nota Permanente:**
```
TÍTULO: [formulado como tese ou pergunta — nunca como tópico]
DATA: YYYY-MM-DD
TAGS: [plugin relacionado] [nível] [tema]

ARGUMENTO:
[O insight em 2–5 parágrafos. Posição própria, não apenas descrição.]

EVIDÊNCIA:
[O que gerou este insight: campanha X / erro Y / resultado Z]

CONEXÕES:
- [Nota relacionada 1: como se conecta]
- [Nota relacionada 2: como se conecta]

IMPLICAÇÃO PARA O SISTEMA:
[O que precisa ser atualizado, criado ou removido em função deste insight]
```

---

### Módulo 2 — Tesouro dos Erros

O Tesouro dos Erros é o ativo mais subestimado do sistema. Cada campanha que não performou, cada copy que não converteu, cada roteamento errado é registrado como entrada — não para lamentar, mas para extrair o padrão que previne a repetição.

**Lei:** erros não documentados se tornam hábitos. Erros documentados se tornam sistemas.

**Estrutura de Entrada no Tesouro:**
```
ERRO: [nome descritivo — ex: "Meteórico com audiência fria"]
DATA: YYYY-MM-DD
PRODUTO/CAMPANHA: [contexto]

O QUE ACONTECEU:
[Descrição objetiva do que foi feito]

O QUE ERA ESPERADO:
[Resultado esperado]

O QUE ACONTECEU DE FATO:
[Resultado real — com números se disponíveis]

DIAGNÓSTICO (hipótese de causa):
[O que provavelmente causou o gap — sem auto-punição, apenas análise]

PADRÃO IDENTIFICADO:
[A regra geral que este erro revela — generalizável para outros contextos]

ATUALIZAÇÃO DE SISTEMA:
[O que precisa mudar: regra de roteamento / template de copy / critério de modalidade / etc.]

STATUS: [Registrado / Atualizado no sistema / Confirmado em teste futuro]
```

---

### Módulo 3 — Evolução de Plugins

Cada SKILL.md é um organismo vivo. À medida que o sistema aprende, os plugins precisam ser atualizados para refletir o conhecimento acumulado.

**Gatilhos para atualização de plugin:**
- Tesouro dos Erros revela padrão que contradiz regra atual do plugin
- Nova referência externa (livro, framework, metodologia) expande a base teórica
- Mudança de mercado invalida critério de seleção
- 3+ campanhas consecutivas revelam padrão que o plugin não prevê

**Protocolo de Atualização:**
1. Identificar o plugin a atualizar (número + nome)
2. Localizar a seção específica a modificar
3. Documentar: versão anterior + motivação da mudança + nova versão
4. Atualizar o arquivo SKILL.md correspondente no Google Drive (01-SKILLS/)
5. Registrar a atualização como Nota Permanente no Zettelkasten
6. Verificar se outros plugins dependem da seção alterada (referências cruzadas)

---

### Módulo 4 — Mapa de Evolução do Sistema

Registro cronológico das versões e evoluções do ecossistema completo.

```
EVOLUÇÃO: [versão — ex: v1.3]
DATA: YYYY-MM-DD

MUDANÇAS:
- SKILL-[XX] [nome]: [o que mudou]
- SKILL-[XX] [nome]: [o que mudou]

MOTIVAÇÃO:
[O que gerou estas mudanças: padrão de erro / novo mercado / novo framework]

IMPACTO ESPERADO:
[O que deve melhorar com estas atualizações]
```

---

## Processo de Captura — Após Toda Campanha

Ao encerrar qualquer campanha, executar o protocolo de captura:

1. **Métricas finais** — registrar números reais na página do produto na MINHA ESTEIRA
2. **Diagnóstico** — o que funcionou? o que não funcionou? por quê?
3. **Tesouro dos Erros** — criar entrada para cada elemento que não performou
4. **Nota Permanente** — criar nota para cada padrão confirmado (positivo ou negativo)
5. **Atualização de Plugin** — verificar se algum plugin precisa ser atualizado
6. **Mapa de Evolução** — registrar se houve atualização de sistema

---

## Formato de Output por Contexto

**Documentar erro:**
→ Estrutura completa do Tesouro dos Erros + Nota de Projeto vinculada

**Documentar aprendizado:**
→ Nota Permanente com argumento + evidência + conexões + implicação

**Atualizar plugin:**
→ Protocolo de Atualização completo + registro no Mapa de Evolução

**Criar nota a partir de referência externa:**
→ Nota de Literatura + Nota Permanente se o insight se confirmar aplicável

---

## Regras

1. **Nenhum erro sem registro** — se aconteceu e falhou, entra no Tesouro
2. **Notas permanentes em voz própria** — não é resumo de fonte; é posição do sistema
3. **Conexões obrigatórias** — toda nota permanente tem pelo menos 2 links para outras notas
4. **Atualização com evidência** — nenhum plugin é alterado por hipótese; apenas por padrão confirmado (2+ ocorrências)
5. **Versionar** — cada atualização de plugin ganha nova versão (v1.1, v1.2...)

---

## Referências Cruzadas

- `MANIFESTO.md` — os princípios do sistema que nunca mudam (mesmo quando os plugins evoluem)
- `MAPA-DO-PROJETO.md` — visão completa do ecossistema que orienta quais plugins existem e suas relações
- Todos os SKILL.md — são os artefatos que esta skill mantém e evolui
- `06-TESOURO-DOS-ERROS/` (Google Drive) — repositório físico das entradas do Tesouro

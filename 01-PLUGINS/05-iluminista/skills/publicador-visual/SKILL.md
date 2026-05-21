---
name: publicador-visual
version: 3.0
plugin: "05-iluminista"
layer: "Transversal — Publicação Visual"
description: >
  Publicação de conteúdo criativo na database Conteúdo (Agenda).
  Modelo: UMA PÁGINA POR DIA — cada entrada na Conteúdo DB representa um dia de publicação,
  com todas as peças do dia organizadas como seções dentro dessa página.
  Triggers: "publica no Notion", "exporta visual", "publicador visual",
  "envia imagens pro Notion", "popula visual", "salva no Notion", "joga no calendário".
---

# Publicador Visual — Publicação na Database Conteúdo

O Publicador Visual opera sobre um princípio único: **um dia = uma página**. Cada entrada na database Conteúdo representa um dia de publicação. Dentro dessa página estão todas as peças do dia — carrossel, reel, post, anúncio — organizadas como seções e prontas para copiar.

A visão de calendário na Agenda mostra uma entrada por dia. Ao clicar num dia, a página abre com todo o conteúdo pronto.

**Regra de ouro:** nunca criar mais de uma entrada por dia na database Conteúdo. Todo conteúdo de um mesmo dia entra como nova seção na página daquele dia.

---

## DESTINOS DE PUBLICAÇÃO

| Tipo de conteúdo | Destino |
|---|---|
| Orgânico (posts, reels, carrosséis regulares) | **Database Conteúdo** — uma entrada por dia — `collection://25cfc122-de3b-81c2-a76a-000bcf8453f4` |
| Conteúdo de campanha/lançamento | **MINHA ESTEIRA** — dentro do cronograma do produto (ver esteira-notion) |

---

## FLUXO PADRÃO — Adicionando conteúdo ao dia

Para qualquer peça gerada (Carrossel, Reel, Post, Anúncio):

```
1. Identificar a data de publicação planejada

2. Buscar na database Conteúdo:
   WHERE "date:Data de Publicação:start" = [data]

3. SE entrada existe:
   → Usar notion-update-page com update_content
   → Adicionar nova seção ## ao final da página existente

4. SE entrada não existe:
   → Criar nova página com notion-create-pages
   → Propriedades: Título = "📅 [DD/MM] — [tema/campanha]", Status = Rascunho,
     data:Data de Publicação:start = [data], Origem = [inferir], Campanha = [se aplicável]
   → Corpo = template de dia completo (ver seção TEMPLATE DA PÁGINA DIÁRIA abaixo)
   → Preencher a seção correspondente ao tipo de peça
```

---

## PROPRIEDADES DA ENTRADA DIÁRIA

| Propriedade | Instrução |
|---|---|
| `Título` | "📅 [DD/MM] — [tema ou campanha do dia]" |
| `Status` | Iniciar em **Rascunho** |
| `Data de Publicação` | Data do dia de publicação |
| `Origem` | Orgânico / Forja de Caixa / Temas em Alta / Manual |
| `Campanha` | Nome da campanha, se aplicável |
| `Produto` | Vincular ao produto da MINHA ESTEIRA, se aplicável |

*Propriedades como Tipo de Post, Propósito, Plataforma são irrelevantes na entrada diária — cada seção interna tem seu próprio diagnóstico.*

---

## TEMPLATE DA PÁGINA DIÁRIA

Usado quando a entrada do dia ainda não existe na database:

```
## 🗓️ Visão Geral

> **Rotina:** [Orgânico / Forja de Caixa / Lançamento]
> **Campanha:** —
> **Produto:** —
> **Objetivo do dia:** [Awareness / Autoridade / Conversão / Relacionamento / Nutrição]

---

## 🗂️ Carrossel

[seção preenchida pelo Chavossel]

---

## 🎬 Reel / Vídeo

[seção preenchida pelo Chavideo]

---

## ✍️ Post de Texto

[seção preenchida pelo Pergaminho de Copy]

---

## 📢 Anúncio

[seção preenchida pelo Pergaminho de Copy — apenas se aplicável]

---

## ✅ Checklist do Dia

- [ ] Carrossel publicado
- [ ] Reel publicado
- [ ] Post publicado
- [ ] Anúncio ativo
```

---

## ESTRUTURA DE CADA SEÇÃO

### 🗂️ Seção Carrossel (gerada pelo Chavossel)

```
## 🗂️ Carrossel

> **Exercício:** [exercício Progymnasmata]
> **N-level:** N[X] — **Proporção:** C1__% / C2__% / C3__% — **Objetivo:** [atenção / posicionamento / conversão]
> Sintaxe: # Título longo = Manchete · Texto >20 palavras sem título = Immersive Reader
>          # Título curto + slide vazio = O Grito · --- = Corte
> Lei do Ritmo: nunca 3 slides iguais seguidos

**Slide 1 — Abertura**
# [título]
[subtítulo]

---
**Slide 2 — A Ponte**
[immersive reader — texto puro, sem título, >20 palavras]

---
**Slides 3–9** [corpo do exercício]
[conteúdo dos beats com Lei do Ritmo]

---
**Slide 10 — Fechamento**
[conclusão + CTA único]

*Nota técnica — Exercício: [___] · Ritmo: [___] · Efeito retórico: [___]*
```

### 🎬 Seção Reel / Vídeo (gerada pelo Chavideo)

```
## 🎬 Reel / Vídeo

> **Exercício:** [exercício] — **Objetivo:** [objetivo]
> **Combinação:** [mecanismos cinematográficos usados] — **Formato:** vertical 60–90s
> **Carga:** Intelectual [___] · Emocional [___] · Visual [congruente/ruído] · Sinalização [___]

CHAVIDEO — [EXERCÍCIO] × [OBJETIVO] · N[X] · vertical 60–90s

**[00–03s] HOOK** [texto]
**[03–10s] AMPLIFICAÇÃO** [texto]
**[10–50s] CORPO** [beats do exercício]
**[50–70s] CLÍMAX** [texto]
**[70–90s] PAYOFF + CTA** [texto]

*Nota técnica — Exercício: [___] · Mecânica: [___] · Efeito retórico: [___]*
```

### ✍️ Seção Post de Texto (gerada pelo Pergaminho de Copy)

```
## ✍️ Post de Texto

> **N-level:** N[X] — **Proporção:** C1__% / C2__% / C3__% — **Objetivo:** [atenção / posicionamento / conversão]
> **Panksepp:** [sistema] · **Warren:** [ativador] · **Moeda:** [Insider / Virtude / Status]
> **Framework:** [framework escolhido]

**Abertura** *(Warren aqui — para o scroll)*
[...]

*C1 — Persona* · [conexão emocional — Show Don't Tell, Mirroring, JTBD]
*C2 — Marca* · [reframing simbólico — léxico proprietário]
*C3 — CTA* · [único próximo passo, se aplicável]
```

### 📢 Seção Anúncio (gerada pelo Pergaminho de Copy)

```
## 📢 Anúncio

> **N-level:** N[X] — **Proporção:** C1__% / C2__% / C3__% — **Framework:** [framework]
> **Panksepp:** [sistema] · **Warren:** [ativador] · **Moeda:** [Insider / Virtude / Status]
> **Campanha:** [nome — obrigatório] · **Produto:** [nome — obrigatório]

**Headline** *(Warren aqui — para o scroll)*
[...]

*C1 — Persona* · [...]
*C2 — Marca* · [...]
*C3 — Oferta* · [...]

**CTA** *(único próximo passo)*
[...]

*Cargas — Intelectual: [___] · Emocional: [___] · Visual: [___] · Sinalização: [___]*
*Resistência — [ ] Reatância · [ ] Desconfiança · [ ] Escrutínio · [ ] Inércia*
```

---

## REGRAS DE EXECUÇÃO

1. **Uma entrada por dia** — nunca criar duas páginas para o mesmo dia
2. **Buscar antes de criar** — sempre verificar se já existe entrada para a data antes de criar nova
3. **Status sempre em Rascunho** ao criar
4. **Seções são aditivas** — adicionar nova seção sem apagar as existentes
5. **Corpo sempre preenchido** — página sem conteúdo pronto é inútil

---

## INTER-PLUGIN

| Plugin | O que entrega ao Publicador Visual |
|---|---|
| **Bardo / Chavideo** | Roteiro completo → seção 🎬 Reel/Vídeo no dia |
| **Bardo / Chavossel** | Roteiro dos 10 slides → seção 🗂️ Carrossel no dia |
| **Alquimista / Pergaminho de Copy** | Copy calibrada → seção ✍️ Post ou 📢 Anúncio no dia |
| **Forja de Imagem** | Imagens e thumbnails → campo Arquivo na entrada do dia |
| **Arauto / Esteira Notion** | Campanhas de lançamento → MINHA ESTEIRA (não entra no Conteúdo DB) |

---

## MODO CLIENTE EXTERNO

Em Modo Cliente Externo, o Publicador Visual:
- Usa o workspace Notion do cliente
- Adapta nomes de databases à nomenclatura do cliente
- Não menciona "Pergaminho", "Chave Mestra" ou termos proprietários
- Mantém o modelo de uma entrada por dia

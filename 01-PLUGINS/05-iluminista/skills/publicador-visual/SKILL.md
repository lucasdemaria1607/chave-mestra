---
name: publicador-visual
version: 2.0
plugin: "05-iluminista"
layer: "Transversal — Publicação Visual"
description: >
  Publicação de conteúdo criativo na database Conteúdo do Notion.
  Aplica template estruturado por tipo (Carrossel, Reel, Post, Anúncio).
  Integra imagens geradas (Forja de Imagem) e frames renderizados (Ponte Figma).
  Triggers: "publica no Notion", "exporta visual", "publicador visual",
  "envia imagens pro Notion", "popula visual", "salva no Notion", "joga no calendário".
---

# Publicador Visual — Publicação na Database Conteúdo

O Publicador Visual é a última milha de qualquer pipeline criativo. Toda peça produzida
pelos plugins — roteiro do Bardo, copy do Alquimista, imagem do Iluminista — precisa
aterrissar no Notion como um documento completo, pronto para uso: propriedades preenchidas,
corpo com o conteúdo pronto para copiar, produção rastreável.

**Regra de ouro:** a página aberta no calendário deve ter tudo. Contexto, conteúdo, status.
Sem precisar ir a outro lugar.

---

## DESTINOS DE PUBLICAÇÃO

| Tipo de conteúdo | Destino no Notion |
|---|---|
| Orgânico (posts, reels, carrosséis regulares) | **Database Conteúdo** — `collection://25cfc122-de3b-81c2-a76a-000bcf8453f4` |
| Peças de apoio do Protocolo Massivo | **Database Conteúdo** — Origem: Protocolo Massivo |
| Conteúdo de campanha/lançamento (Meteórico, Desafio, Interno) | **MINHA ESTEIRA** — dentro do cronograma do produto (ver esteira-notion) |

---

## PROPRIEDADES OBRIGATÓRIAS — DATABASE CONTEÚDO

Ao criar qualquer página na database Conteúdo, preencher:

| Propriedade | Tipo | Instrução |
|---|---|---|
| `Título` | title | Nome descritivo da peça |
| `Status` | status | Sempre iniciar em **Rascunho** |
| `Data de Publicação` | date | Data planejada para publicar |
| `Plataforma` | select | Instagram / YouTube / TikTok / Substack / LinkedIn / etc. |
| `Tipo de Post` | select | Carrossel / Video / Reel / Post Estático / Anúncio / Story |
| `Tipo de conteúdo` | select | Social Media / Email / Blog Post / Podcast |
| `Propósito` | select | **Inferir do conteúdo:** Awareness / Autoridade / Conversão / Relacionamento / Nutrição |
| `Origem` | select | Orgânico / Protocolo Massivo / Temas em Alta / Pesquisa de Nicho / Manual / Ideia Própria |
| `Produto` | relation | Vincular ao produto da MINHA ESTEIRA se o conteúdo tiver produto |
| `Campanha` | text | Nome da campanha, se a peça pertence a uma |
| `Etapas` | multi-select | Iniciar com **["Ideia captada"]** — atualizar conforme produção avança |

---

## TEMPLATES DE PÁGINA — CORPO POR TIPO

### 🎠 Template: Carrossel

```markdown
## 📍 Contexto
> **Origem:** [fonte — Temas em Alta / Pesquisa de Nicho / Manual / etc.]
> **Propósito:** [Awareness / Autoridade / Conversão / Relacionamento / Nutrição]
> **Campanha:** [nome da campanha ou —]
> **Produto vinculado:** [nome do produto ou —]

---

## 📲 Slides

**Slide 1 — Capa**
[manchete de impacto — texto da capa]

**Slide 2**
[texto do slide]

**Slide 3**
[texto do slide]

**Slide 4**
[texto do slide]

**Slide 5**
[texto do slide]

**Slide 6**
[texto do slide]

**Slide 7**
[texto do slide]

**Slide 8**
[texto do slide]

**Slide 9**
[texto do slide]

**Slide 10 — CTA**
[chamada para ação — o que o leitor deve fazer agora]

---

## ✅ Produção
- [ ] Roteiro aprovado
- [ ] Diagramado no Figma
- [ ] Assets exportados
- [ ] Publicado

---

## 📝 Notas
[exercício Progymnasmata usado, ângulo escolhido, referências, observações]
```

---

### 🎬 Template: Reel / Vídeo

```markdown
## 📍 Contexto
> **Origem:** [fonte]
> **Propósito:** [Awareness / Autoridade / Conversão / Relacionamento / Nutrição]
> **Campanha:** [nome da campanha ou —]
> **Produto vinculado:** [nome do produto ou —]

---

## 🎬 Roteiro

**Hook (0–3s)**
[frase de abertura — captura ou enterra em 1 linha]

**Desenvolvimento**
[corpo do roteiro — linha a linha, com indicações de corte/cena quando necessário]

**Fechamento / CTA**
[chamada para ação — implícita ou explícita conforme objetivo]

---

## ✅ Produção
- [ ] Roteiro aprovado
- [ ] Gravado
- [ ] Editado
- [ ] Thumbnail feita (se YouTube/TikTok)
- [ ] Publicado

---

## 📝 Notas
[exercício Progymnasmata, combinação cinematográfica, nível de consciência do público, observações]
```

---

### ✍️ Template: Post de Texto / Legenda

```markdown
## 📍 Contexto
> **Origem:** [fonte]
> **Propósito:** [Awareness / Autoridade / Conversão / Relacionamento / Nutrição]
> **Campanha:** [nome da campanha ou —]
> **Produto vinculado:** [nome do produto ou —]

---

## ✍️ Copy

[texto completo do post — pronto para copiar e colar]

---

## ✅ Produção
- [ ] Copy aprovado
- [ ] Visual criado (se necessário)
- [ ] Publicado

---

## 📝 Notas
[nível de consciência, método de copy usado, gancho, observações]
```

---

### 📢 Template: Anúncio

```markdown
## 📍 Contexto
> **Origem:** [fonte]
> **Propósito:** Conversão
> **Campanha:** [nome da campanha]
> **Produto vinculado:** [nome do produto]
> **Objetivo do anúncio:** [conversão / tráfego / remarketing / reconhecimento]

---

## 📢 Copy do Anúncio

**Headline**
[linha principal — deve parar o scroll]

**Texto Principal**
[copy completo do anúncio — pronto para colar no gerenciador]

**CTA**
[texto do botão / chamada direta]

---

## ✅ Produção
- [ ] Copy aprovado
- [ ] Criativo feito
- [ ] Subido no gerenciador de anúncios
- [ ] Ativo

---

## 📝 Notas
[público-alvo, segmentação prevista, orçamento sugerido, variações testadas]
```

---

## FLUXOS DE PUBLICAÇÃO

### Fluxo 1 — Reel / Vídeo → Database Conteúdo

```
1. Chavideo gera roteiro completo
2. Publicador Visual cria página na database Conteúdo:
   - Propriedades: Título, Status: Rascunho, Data de Publicação, Plataforma,
     Tipo de Post: Video/Reel, Propósito (inferido), Origem: Orgânico/Temas em Alta,
     Produto (se aplicável), Campanha (se aplicável), Etapas: ["Ideia captada", "Roteiro feito"]
   - Corpo: Template Reel/Vídeo com roteiro completo no campo "Desenvolvimento"
3. Se a Forja de Imagem gerou thumbnail: adicionar ao campo Arquivo
```

### Fluxo 2 — Carrossel → Database Conteúdo

```
1. Chavossel gera roteiro dos 10 slides
2. Publicador Visual cria página na database Conteúdo:
   - Propriedades: Título, Status: Rascunho, Data de Publicação, Plataforma,
     Tipo de Post: Carrossel, Propósito (inferido), Origem, Produto, Campanha,
     Etapas: ["Ideia captada", "Roteiro feito"]
   - Corpo: Template Carrossel com texto de cada slide numerado
3. Se Ponte Figma renderizou: adicionar link Figma nas Notas
4. Quando Forja de Imagem gerar os slides: atualizar Etapas → + "Diagramado"
```

### Fluxo 3 — Post / Legenda → Database Conteúdo

```
1. Pergaminho de Copy (Alquimista) ou Bardo gera copy do post
2. Publicador Visual cria página na database Conteúdo:
   - Propriedades: Título, Status: Rascunho, Data de Publicação, Plataforma,
     Tipo de Post: Post Estático, Propósito (inferido), Origem, Produto, Campanha,
     Etapas: ["Ideia captada", "Roteiro feito"]
   - Corpo: Template Post com copy completo pronto para colar
```

### Fluxo 4 — Anúncio → Database Conteúdo

```
1. Pergaminho de Copy (Alquimista) gera copy do anúncio
2. Publicador Visual cria página na database Conteúdo:
   - Propriedades: Título, Status: Rascunho, Plataforma, Tipo de Post: Anúncio,
     Propósito: Conversão, Origem: Manual ou Protocolo Massivo, Produto: [obrigatório],
     Campanha: [obrigatório para anúncio], Etapas: ["Ideia captada", "Roteiro feito"]
   - Corpo: Template Anúncio com headline, texto e CTA separados
```

### Fluxo 5 — Assets de Campanha → MINHA ESTEIRA (não altera)

```
Conteúdo de lançamento (Meteórico, Desafio, Interno) continua indo para
o cronograma do produto dentro da MINHA ESTEIRA via esteira-notion.
O Publicador Visual enriquece cada linha com visuais se necessário.
```

---

## REGRAS DE EXECUÇÃO

1. **Status sempre em Rascunho** ao criar — nunca iniciar em outro status
2. **Propósito é obrigatório** — inferir do conteúdo se não for informado explicitamente
3. **Corpo sempre preenchido** — a página sem o conteúdo pronto é inútil. O objetivo é abrir e copiar.
4. **Sem databases embutidas** — não criar sub-databases ou blocos relacionados inline na página de conteúdo
5. **Nunca hardcode IDs** — buscar data-source-id dinamicamente se necessário
6. **Etapas refletem o estado real** — atualizar conforme a produção avança, não deixar como ["Ideia captada"] para sempre

---

## INTER-PLUGIN

| Plugin | O que entrega ao Publicador Visual |
|---|---|
| **Bardo / Chavideo** | Roteiro completo de reel/vídeo → Fluxo 1 |
| **Bardo / Chavossel** | Roteiro dos 10 slides → Fluxo 2 |
| **Alquimista / Pergaminho de Copy** | Copy de post ou anúncio → Fluxos 3 e 4 |
| **Forja de Imagem** | Imagens e thumbnails geradas → complementa qualquer fluxo |
| **Ponte Figma** | Links de frames renderizados → complementa Fluxo 2 |
| **Arauto / Esteira Notion** | Campanhas de lançamento → Fluxo 5 (MINHA ESTEIRA, não interfere) |

---

## MODO CLIENTE EXTERNO

Em Modo Cliente Externo, o Publicador Visual:
- Usa o workspace Notion do cliente
- Adapta nomes de databases à nomenclatura do cliente
- Não menciona "Pergaminho", "Chave Mestra" ou termos proprietários
- Os templates de página mantêm a estrutura mas com nomenclatura do cliente

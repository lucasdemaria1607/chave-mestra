# SISTEMA DE ARTEFATOS — Chave Mestra
*O protocolo de transporte de contexto entre plugins, fases e entregas.*

---

## POR QUE ISSO EXISTE

Cada plugin da Chave Mestra gera outputs. Mas sem um sistema padronizado:
- O Alquimista não sabe o que o Cartógrafo descobriu
- O Bardo escreve roteiro sem persona documentada
- O Arauto monta campanha sem saber qual oferta existe
- O cliente não tem nada concreto pra baixar, revisar ou compartilhar

O Sistema de Artefatos resolve isso com **3 camadas**:

```
┌─────────────────────────────────────────────────────┐
│  CAMADA 1 — DOSSIÊ CM                              │
│  Documento-mestre que acumula contexto fase a fase  │
│  (1 por cliente/projeto — nunca se perde)            │
├─────────────────────────────────────────────────────┤
│  CAMADA 2 — FICHAS DE SKILL                        │
│  Output padronizado de cada skill individual        │
│  (formato fixo — qualquer plugin consegue ler)       │
├─────────────────────────────────────────────────────┤
│  CAMADA 3 — ENTREGÁVEIS FINAIS                     │
│  O que o cliente vê, baixa e usa                    │
│  (roteiros, copy, visuais, PDFs, Notion)            │
└─────────────────────────────────────────────────────┘
```

---

## CAMADA 1 — O DOSSIÊ CM

### O que é
Um documento único por cliente/projeto que **viaja por todas as fases**. Começa vazio no diagnóstico e termina completo na evolução. É a "memória compartilhada" entre plugins.

### Estrutura

```markdown
# DOSSIÊ CM — [Nome do Projeto / Cliente]
Data de início: YYYY-MM-DD
Última atualização: YYYY-MM-DD
Nicho: [qualquer]
Fase atual: [0-5]

---

## 0. DIAGNÓSTICO (preenchido pelo Chaveiro)
- D1 Identidade:  [🔴/🟡/🟢] — [observações]
- D2 Inteligência: [🔴/🟡/🟢] — [observações]
- D3 Estratégia:  [🔴/🟡/🟢] — [observações]
- D4 Criação:     [🔴/🟡/🟢] — [observações]
- D5 Operação:    [🔴/🟡/🟢] — [observações]
- D6 Evolução:    [🔴/🟡/🟢] — [observações]
- Roadmap: [Agora / Próximo / Contínuo]
- Modo: [CM / Cliente Externo]

---

## 1. IDENTIDADE (preenchido pela Forja do Universo)
- Voz (3 adjetivos):
- Frase-guia:
- Léxico proprietário: [lista de termos]
- Estética: [cores, referências visuais]
- Narrativa fundacional: [resumo em 3 linhas]
- Validação Ritual da Chave: [✅ aprovado / ⚠️ ajustar]

---

## 2. INTELIGÊNCIA (preenchido pelo Cartógrafo)

### Terreno
- Nicho mapeado:
- Top 3 concorrentes: [nome + diferencial de cada]
- Brechas identificadas: [lista]
- Zeitgeist: [o que está mudando agora]
- Nível de saturação: [baixo/médio/alto]

### Persona
- Nome fictício:
- Idade/Perfil:
- Nível de consciência predominante: [1-5]
- Dores (top 3):
- Desejos (top 3):
- Linguagem (frases que usa):
- Onde está (plataformas):
- Inferno/Purgatório/Paraíso: [resumo]

---

## 3. ESTRATÉGIA (preenchido pelo Arauto + Alquimista)

### Oferta
- Nome do produto/serviço:
- Tipo: [curso/mentoria/serviço/produto/comunidade]
- Promessa central:
- Stack de valor: [o que está incluído]
- Garantia:
- Preço:
- Posicionamento: [frase única]

### Campanha
- Modalidade: [meteórico/desafio/orgânico/massivo]
- Duração: [X dias/semanas]
- Fases da campanha: [lista]
- Meta principal: [receita/audiência/conversão]
- Temas semanais: [lista]

---

## 4. CRIAÇÃO (preenchido por Alquimista + Bardo + Iluminista)
- Headlines produzidas: [quantidade + link/arquivo]
- Roteiros produzidos: [quantidade + link/arquivo]
- Copy produzida: [quantidade + tipos + link/arquivo]
- Visuais produzidos: [quantidade + link/arquivo]
- Revisão retórica: [✅ aplicada / pendente]

---

## 5. OPERAÇÃO (preenchido pelo Arauto)
- Esteira Notion: [✅ populada / pendente]
- Calendário: [período coberto]
- Tarefas ativas: [quantidade]
- Protocolo ativo: [massivo/luxo/urgência/padrão]

---

## 6. EVOLUÇÃO (preenchido pelo Chaveiro)
- Erros registrados: [quantidade + resumo]
- Notas Zettelkasten: [quantidade]
- Modelos mentais atualizados: [lista]
- Próxima revisão (Lua Cheia): [data]
- Recomendação pós-ciclo: [voltar pra Fase X / escalar / manter]
```

### Regras do Dossiê

1. **Todo plugin lê o Dossiê antes de operar.** Se a seção anterior está vazia, o plugin sabe que precisa pedir ou gerar aquela informação.
2. **Todo plugin escreve no Dossiê ao concluir.** A seção correspondente é preenchida com o resumo do output.
3. **O Dossiê nunca é apagado** — é versionado. Cada ciclo mensal (Lua Cheia) cria uma snapshot.
4. **Em Modo Cliente Externo**, o Dossiê usa a linguagem do cliente, não o glossário CM.
5. **Formato**: Markdown nativo (`.md`). Exportável como PDF via skill PDF.

### Onde vive

| Contexto | Local |
|----------|-------|
| No Claude Code | `05-ASSETS/dossies/[nome-projeto].md` |
| No Notion | Página filha de "MINHA ESTEIRA" ou "Projetos" |
| Para o cliente | Exportado como PDF (Camada 3) |

---

## CAMADA 2 — FICHAS DE SKILL

Cada skill produz um output com formato padronizado. Isso permite que qualquer plugin leia o output de qualquer outro sem ambiguidade.

### Catálogo de Fichas

---

#### FICHA: Diagnóstico Chaveiro
**Skill:** Chaveiro (diagnóstico)
**Formato:** `diagnostico-[nome].md`
**Conteúdo:**
```
# Diagnóstico — [Nome]
Data: YYYY-MM-DD

## Matriz
D1: [status] — [nota]
D2: [status] — [nota]
D3: [status] — [nota]
D4: [status] — [nota]
D5: [status] — [nota]
D6: [status] — [nota]

## Roadmap
### Agora (7 dias)
- [ ] ...
### Próximo (30 dias)
- [ ] ...
### Contínuo
- [ ] ...

## Recomendações Cruzadas
- [Plugin X] antes de [Plugin Y] porque [razão]
```
**Quem consome:** Todos os plugins (porta de entrada universal)

---

#### FICHA: DNA de Marca
**Skill:** Forja do Universo (Cartógrafo)
**Formato:** `dna-[nome].md`
**Conteúdo:**
```
# DNA de Marca — [Nome]
Data: YYYY-MM-DD

## Voz
- 3 adjetivos:
- Frase-guia:
- O que NUNCA diria:

## Léxico
| Termo proprietário | Significado |
|--------------------|-------------|
| ... | ... |

## Estética
- Cores:
- Referências visuais:
- Mood:

## Narrativa Fundacional
[história de origem em 1 parágrafo]

## 7 Pilares Primal Branding
1. Origem:
2. Credo:
3. Ícones:
4. Rituais:
5. Infiéis:
6. Palavras sagradas:
7. Líder:

## Validação
Ritual da Chave: [✅/⚠️] — [observação]
```
**Quem consome:** Bardo (tom de roteiros), Alquimista (tom de copy), Iluminista (estética), Arauto (linguagem de campanha)

---

#### FICHA: Mapa do Terreno
**Skill:** Portal do Terreno (Cartógrafo)
**Formato:** `terreno-[nicho].md`
**Conteúdo:**
```
# Mapa do Terreno — [Nicho]
Data: YYYY-MM-DD

## Players
| Nome | Posicionamento | Ponto forte | Ponto fraco |
|------|---------------|-------------|-------------|

## Brechas
1. [brecha] — [por que é oportunidade]

## Zeitgeist
- Tendência ascendente:
- Tendência descendente:
- O que ninguém está fazendo:

## Saturação: [baixo/médio/alto]
## Veredicto: [frase de posicionamento recomendado]
```
**Quem consome:** Forja da Persona (entender contexto), Alquimista (ângulos de copy), Arauto (posicionar campanha)

---

#### FICHA: Persona
**Skill:** Forja da Persona (Cartógrafo)
**Formato:** `persona-[nome-ficticio].md`
**Conteúdo:**
```
# Persona — [Nome Fictício]
Data: YYYY-MM-DD

## Perfil
- Idade:
- Ocupação:
- Nível de consciência: [1-5]
- Tipo cognitivo: [Passageiro/Corredor/Explorador]

## Dores (top 5)
1. [dor] — [como verbaliza]

## Desejos (top 5)
1. [desejo] — [como verbaliza]

## Linguagem
- Frases que usa: ["...", "..."]
- Jargão do universo: [...]
- Tom: [formal/casual/técnico/emocional]

## Jornada Emocional
- Inferno: [situação atual insuportável]
- Purgatório: [tentativas que não resolveram]
- Paraíso: [transformação desejada]

## Onde está
- Plataforma principal:
- Consumo de conteúdo: [formato preferido]
- Horários ativos:

## SZC
- Status Quo:
- Zeitgeist:
- Conclusão:
```
**Quem consome:** Alquimista (calibrar copy por nível), Bardo (linguagem dos roteiros), Arauto (plataformas e timing), Iluminista (estética que ressoa)

---

#### FICHA: Oferta
**Skill:** Forja de Oferta (Alquimista)
**Formato:** `oferta-[nome-produto].md`
**Conteúdo:**
```
# Oferta — [Nome do Produto]
Data: YYYY-MM-DD

## Promessa Central
[1 frase — resultado + prazo + mecanismo]

## Equação de Valor
- Resultado desejado:
- Probabilidade percebida: [o que aumenta confiança]
- Tempo até resultado:
- Esforço/Sacrifício: [o que reduz atrito]

## Stack de Valor
| Item | Valor percebido | Tipo |
|------|-----------------|------|
| [produto principal] | R$ X | Core |
| [bônus 1] | R$ X | Bônus |

## Garantia
- Tipo: [incondicional/condicional/reversa]
- Prazo:
- Condição:

## Preço
- De: R$ [âncora]
- Por: R$ [real]
- Parcelamento:

## Posicionamento
[1 frase que diferencia de tudo no mercado]
```
**Quem consome:** Alquimista/copy (argumentação), Bardo (roteiro de venda), Arauto (campanha), Iluminista (landing page)

---

#### FICHA: Mapa de Campanha
**Skill:** Mapa de Campanha (Arauto)
**Formato:** `campanha-[nome]-[data].md`
**Conteúdo:**
```
# Campanha — [Nome]
Data: YYYY-MM-DD
Modalidade: [meteórico/desafio/orgânico/massivo]
Duração: [X dias]

## Fases
| Fase | Duração | Objetivo | Conteúdos necessários |
|------|---------|----------|-----------------------|
| Aquecimento | X dias | [gerar expectativa] | [tipos de conteúdo] |
| Lançamento | X dias | [converter] | [tipos de conteúdo] |
| Sustentação | X dias | [manter] | [tipos de conteúdo] |

## Temas Semanais
- Sem 1: [tema] — [ângulo]
- Sem 2: ...

## Metas
- [ ] Meta 1: [receita/audiência/leads]

## Conteúdos Pendentes
- [ ] X headlines (Bardo)
- [ ] X roteiros (Bardo)
- [ ] X copies (Alquimista)
- [ ] X visuais (Iluminista)
```
**Quem consome:** Bardo (o que produzir), Alquimista (ângulos por fase), Iluminista (peças visuais), Arauto/esteira (popular Notion)

---

#### FICHA: Lote de Headlines
**Skill:** Headline Generator (Bardo)
**Formato:** `headlines-[tema]-[data].md`
**Conteúdo:**
```
# Headlines — [Tema]
Data: YYYY-MM-DD
Persona: [nome fictício]
Universo: [léxico aplicado]
Quantidade: 30

## Lote
1. [headline]
2. [headline]
...30. [headline]

## Selecionadas (pelo cliente)
- [ ] #X — para roteiro
- [ ] #X — para carrossel
- [ ] #X — para copy
```
**Quem consome:** Script Creator (roteiros a partir de headlines selecionadas), Chavossel (carrosseis), Alquimista (ângulos de copy)

---

#### FICHA: Roteiro
**Skill:** Script Creator / Chavideo (Bardo)
**Formato:** `roteiro-[titulo-curto]-[data].md`
**Conteúdo:**
```
# Roteiro — [Título]
Data: YYYY-MM-DD
Formato: [reel 60s / reel 90s / vídeo longo / story]
Headline de origem: [referência]

## Estrutura
### HOOK (0-3s)
[texto exato — o que falar]

### INTENSIFICADOR (3-10s)
[texto exato]

### CONTEÚDO NOTÁVEL (10-60s)
[texto exato — quebrado em blocos]

### APRESENTAÇÃO MAGNÉTICA (50-75s)
[texto exato]

### CTA (75-90s)
[texto exato]

## Direção Visual
[indicações de câmera, cortes, B-roll]

## Exercício Retórico Aplicado
[qual exercício do Progymnasmata foi usado e como]

## Status: [rascunho / otimizado / aprovado / publicado]
```
**Quem consome:** Copy Enhancer (otimizar pra fala), Iluminista (direção visual), Arauto (agendar)

---

#### FICHA: Copy Calibrada
**Skill:** Pergaminho de Copy (Alquimista)
**Formato:** `copy-[tipo]-[data].md`
**Conteúdo:**
```
# Copy — [Tipo: post/email/anúncio/landing/VSL]
Data: YYYY-MM-DD
Nível de consciência do lead: [1-5]
Camada Copy 3x5: [informar]
Método Carga aplicado: [sim/não — intensidade]

## Texto
[a copy em si]

## Calibragem
- Persona de destino: [nome fictício]
- Ângulo: [dor/desejo/prova/oferta/urgência]
- CTA: [ação esperada]
- Plataforma: [Instagram/email/YouTube/landing]

## Status: [rascunho / revisado / aprovado / publicado]
```
**Quem consome:** Arauto (publicar), Iluminista (diagramar), Bardo (se virar roteiro)

---

#### FICHA: Carrossel
**Skill:** Chavossel (Bardo)
**Formato:** `carrossel-[titulo]-[data].md`
**Conteúdo:**
```
# Carrossel — [Título]
Data: YYYY-MM-DD
Slides: 10
Headline de origem: [referência]

## Slides
### Slide 1 — CAPA
Texto: [...]
Visual: [indicação]

### Slide 2-9 — DESENVOLVIMENTO
[texto + visual para cada]

### Slide 10 — CTA
Texto: [...]
Visual: [indicação]

## Exercício Retórico: [qual e como]
## Status: [rascunho / design pendente / finalizado / publicado]
```
**Quem consome:** Iluminista (renderizar no Figma), Arauto (agendar)

---

#### FICHA: Erro (Tesouro)
**Skill:** Tesouro dos Erros (Chaveiro)
**Formato:** `erro-[titulo-curto]-[data].md`
**Conteúdo:**
```
# Erro — [Título]
Data: YYYY-MM-DD
Fase em que ocorreu: [0-5]
Gravidade: [🔴 crítico / 🟡 médio / 🟢 leve]

## O que aconteceu
[descrição factual]

## Causa-raiz
[por que aconteceu — não o sintoma, a causa]

## Prevenção
[o que fazer diferente da próxima vez]

## Produto do erro
[o que esse erro ensinou — modelo mental, regra, insight]
```
**Quem consome:** Ritual da Chave (Lua Cheia), Todos os plugins (consulta antes de repetir)

---

#### FICHA: Nota Zettelkasten
**Skill:** Forja do Conhecimento (Chaveiro)
**Formato:** `zk-[titulo-curto]-[data].md`
**Conteúdo:**
```
# [Título da Nota]
ID: ZK-YYYYMMDD-XX
Tipo: [inbox / literatura / permanente]
Ciência: [Psicologia/Linguagem/Filosofia/Artes/Economia/...]
Tags: [lista]

## Nota
[insight atômico — uma ideia por nota]

## Conexões
- Relaciona com: [ZK-ID ou Modelo Mental]
- Contradiz: [ZK-ID se aplicável]
- Expande: [ZK-ID se aplicável]

## Fonte
[livro/artigo/experiência/conversa — referência completa]
```
**Quem consome:** Modelos Mentais (destilação), Bardo (material de roteiro), Alquimista (argumentação de copy)

---

#### FICHA: Modelo Mental
**Skill:** Forja do Conhecimento (Chaveiro)
**Formato:** `mm-[nome-do-modelo].md`
**Conteúdo:**
```
# Modelo Mental — [Nome]
Domínio de origem: [Psicologia/Economia/Biologia/etc.]
Ciência CM: [qual ciência do sistema]

## Descrição
[O que é, em 2-3 frases claras]

## Como funciona
[Mecanismo — por que funciona]

## Quando usar
[Situações, decisões, contextos onde se aplica]

## Quando NÃO usar
[Limites, exceções, armadilhas]

## Conexões
- Complementa: [outro MM]
- Contradiz: [outro MM]
- Notas ZK relacionadas: [IDs]
```
**Quem consome:** Todo o sistema (lente de decisão universal)

---

## CAMADA 3 — ENTREGÁVEIS FINAIS

O que o cliente vê, baixa e usa. Gerados a partir das fichas (Camada 2) + Dossiê (Camada 1).

### Catálogo de Entregáveis

| Entregável | Gerado por | Formato | Quando |
|------------|-----------|---------|--------|
| **Relatório de Diagnóstico** | Chaveiro | PDF | Após diagnóstico inicial |
| **Brand Book** | Forja do Universo | PDF | Após Fase 0 completa |
| **Relatório de Mercado** | Portal do Terreno | PDF | Após Fase 1 |
| **Ficha de Persona** | Forja da Persona | PDF | Após Fase 1 |
| **Proposta de Oferta** | Forja de Oferta | PDF | Após Fase 2 |
| **Plano de Campanha** | Mapa de Campanha | PDF + Notion | Após Fase 2 |
| **Pauta Semanal** | Ritual da Chave | PDF + Notion | Semanal |
| **Pack de Headlines** | Headline Generator | MD / PDF | Por demanda |
| **Pack de Roteiros** | Script Creator | MD / PDF | Por demanda |
| **Pack de Copy** | Pergaminho de Copy | MD / PDF | Por demanda |
| **Carrosseis (design)** | Chavossel + Iluminista | Figma / PNG | Por demanda |
| **Imagens** | Forja de Imagem | PNG / JPG | Por demanda |
| **Relatório Lua Cheia** | Ritual da Chave | PDF | Mensal |
| **Dossiê Completo** | Todo o sistema | PDF | A qualquer momento |

### Regras de Entrega

1. **Todo PDF é gerado a partir do .md correspondente** — o markdown é a fonte de verdade.
2. **Em Modo Cliente Externo**, PDFs usam a identidade visual do CLIENTE (não da CM).
3. **Entregáveis ficam em** `05-ASSETS/entregas/[nome-projeto]/` no repositório.
4. **No Notion**, entregáveis são linkados como anexos na tarefa correspondente da Esteira.

---

## FLUXO DE DADOS — COMO TUDO SE CONECTA

```
FASE 0                    FASE 1                    FASE 2
┌──────────┐             ┌──────────┐              ┌──────────┐
│ Chaveiro │──diagnóst──▶│Cartógrafo│──terreno────▶│  Arauto   │
│          │  tico.md    │          │  persona.md  │ Alquimist│
│ Forja do │──dna.md───▶│ Portal   │              │          │
│ Universo │             │ Persona  │──────────────▶│ campanha │
└──────────┘             └──────────┘     ┌────────│ oferta   │
     │                        │           │        └────┬─────┘
     │                        │           │             │
     ▼                        ▼           │             ▼
  DOSSIÊ §0              DOSSIÊ §1-2     │        DOSSIÊ §3
  preenchido              preenchido      │        preenchido
                                          │
FASE 3                                    │        FASE 4
┌──────────┐                              │       ┌──────────┐
│  Bardo   │◀── persona + dna + oferta ───┘       │  Arauto  │
│Alquimista│                                      │ Esteira  │
│Iluminista│──roteiros.md────────────────────────▶│ Notion   │
│          │──copy.md────────────────────────────▶│          │
│          │──carrossel.md───────────────────────▶│ Calendár │
│          │──visuais/───────────────────────────▶│          │
└──────────┘                                      └────┬─────┘
                                                       │
                                                       ▼
                                                  FASE 5
                                                  ┌──────────┐
                                                  │ Chaveiro │
                                          dados──▶│ Erros    │
                                      de perf.   │ Zettel   │
                                                  │ Lua Cheia│
                                                  └────┬─────┘
                                                       │
                                              atualiza DOSSIÊ §6
                                              recomenda voltar a Fase X
```

### Tabela de Dependências

| Skill que PRODUZ | Artefato | Skills que CONSOMEM |
|------------------|----------|---------------------|
| Chaveiro | `diagnostico.md` | TODOS (porta de entrada) |
| Forja do Universo | `dna.md` | Bardo, Alquimista, Iluminista, Arauto |
| Portal do Terreno | `terreno.md` | Forja da Persona, Alquimista, Arauto |
| Forja da Persona | `persona.md` | Alquimista, Bardo, Iluminista, Arauto |
| Forja de Oferta | `oferta.md` | Alquimista/copy, Bardo, Arauto |
| Mapa de Campanha | `campanha.md` | Bardo, Alquimista, Iluminista, Esteira |
| Ritual da Chave | `pauta-semanal.md` | Bardo, Alquimista |
| Headline Generator | `headlines.md` | Script Creator, Chavossel, Copy |
| Script Creator | `roteiro.md` | Copy Enhancer, Iluminista, Esteira |
| Pergaminho de Copy | `copy.md` | Iluminista, Esteira |
| Chavossel | `carrossel.md` | Iluminista/Figma, Esteira |
| Tesouro dos Erros | `erro.md` | Ritual da Chave, Todos (consulta) |
| Forja do Conhecimento | `zk.md`, `mm.md` | Bardo, Alquimista, Todo o sistema |

---

## ADAPTAÇÃO POR NICHO

O sistema é **niche-agnostic** por design. A adaptação acontece em 3 pontos:

### 1. No Diagnóstico (Chaveiro)
As 6 dimensões se aplicam a qualquer profissional digital:
- Coach, terapeuta, nutricionista → ênfase em D1 (autenticidade) e D4 (conteúdo)
- Infoprodutor, course creator → ênfase em D3 (estratégia) e D2 (mercado)
- Agência, freelancer → ênfase em D5 (operação) e Modo Cliente Externo
- Artista, músico, criador → ênfase em D1 (voz) e D4 (método criativo)
- E-commerce, SaaS → ênfase em D2 (mercado) e D3 (funil)

### 2. Na Persona (Cartógrafo)
A Ficha de Persona captura a linguagem, dores e desejos de QUALQUER público. O formato padronizado garante que o Bardo e Alquimista ajustam tom automaticamente.

### 3. No DNA de Marca (Forja do Universo)
O léxico proprietário muda por nicho, mas o formato é o mesmo. Um coach terá termos diferentes de um SaaS, mas ambos passam pelo mesmo processo de worldbuilding.

**O que NÃO muda:** a sequência diagnóstico → inteligência → estratégia → criação → operação → evolução. Isso vale pra qualquer nicho.

---

## INÍCIO FRIO vs. INÍCIO QUENTE

### Início Frio (do zero)
```
Cliente não tem nada.
→ Chaveiro cria Dossiê vazio
→ Diagnóstico preenche §0
→ Sequência completa Fase 0 → 5
→ Dossiê vai sendo preenchido seção por seção
```

### Início Quente (já tem material)
```
Cliente já tem marca, conteúdo, audiência.
→ Chaveiro cria Dossiê e IMPORTA o que existe:
   - Tem logo/paleta? → preenche §1 (identidade)
   - Tem audiência? → preenche §2 parcial (persona a validar)
   - Tem produto? → preenche §3 parcial (oferta a estruturar)
→ Diagnóstico identifica lacunas
→ Começa na fase que precisa, não na 0
```

### Regra de importação
Quando o cliente traz material existente, o Chaveiro:
1. Lê o que existe
2. Traduz para o formato da ficha correspondente
3. Marca como `[importado — a validar]`
4. O plugin da fase correspondente valida e atualiza

---

## COMANDOS DE ARTEFATO

Shortcuts que podem ser usados no Claude Code:

| Comando | Ação |
|---------|------|
| `/dossie novo [nome]` | Cria Dossiê CM vazio |
| `/dossie ver` | Mostra Dossiê atual |
| `/dossie exportar` | Gera PDF do Dossiê completo |
| `/ficha [tipo] [nome]` | Cria ficha de skill (persona, terreno, oferta, etc.) |
| `/entregas listar` | Lista todos os entregáveis do projeto atual |
| `/entregas exportar [tipo]` | Exporta entregável como PDF |

---

## VERSIONAMENTO

Artefatos evoluem. O sistema rastreia isso:

- **v0.1** — Rascunho (gerado pelo plugin, não revisado)
- **v0.5** — Revisado (ajustado após feedback do cliente/Lucas)
- **v1.0** — Aprovado (pronto pra usar/publicar)
- **v1.x** — Iteração (ajuste após performance/evolução)

O Dossiê registra a versão atual de cada artefato vinculado.

---

## INTEGRAÇÃO COM O ECOSSISTEMA

| Ferramenta | Papel no sistema de artefatos |
|------------|-------------------------------|
| **Claude Code** | Motor de geração — cria, preenche e exporta fichas e dossiê |
| **Notion** | Operação — Esteira, calendário, tarefas vinculadas a artefatos |
| **Figma** | Renderização — carrosseis e visuais finalizados |
| **GitHub** | Versionamento — histórico de todos os .md |
| **Google Drive** | Backup + compartilhamento com clientes |
| **PDF** | Formato de entrega final ao cliente |

---

*Sistema de Artefatos — Chave Mestra. Arquitetado por Lucas Grigo, 2026.*

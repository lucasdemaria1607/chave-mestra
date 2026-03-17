# SISTEMA DE ARTEFATOS — Chave Mestra
*Protocolo de transporte de contexto entre plugins, fases e entregas.*

---

## POR QUE ISSO EXISTE

Cada skill já define seus próprios formatos de output (nos respectivos `SKILL.md`). O que faltava:

1. **Um documento-mestre** que acumula contexto fase a fase — pra nenhum plugin operar cego
2. **Um mapa de dependências** — quem produz o quê, quem precisa do quê antes de rodar
3. **Uma camada de entrega** — como os outputs nativos viram PDFs/compartilháveis pro cliente

```
┌─────────────────────────────────────────────────────┐
│  DOSSIÊ CM                                          │
│  Documento-mestre que acumula resumos fase a fase   │
│  (1 por cliente/projeto — nunca se perde)            │
├─────────────────────────────────────────────────────┤
│  OUTPUTS NATIVOS (definidos em cada SKILL.md)       │
│  Cada skill produz no formato que já tem             │
│  O Dossiê indexa e resume — não duplica              │
├─────────────────────────────────────────────────────┤
│  ENTREGÁVEIS                                        │
│  O que o cliente vê, baixa e usa                    │
│  (PDFs, Figma, Notion, packs .md)                   │
└─────────────────────────────────────────────────────┘
```

---

## O DOSSIÊ CM

### O que é
Documento único por cliente/projeto que **viaja por todas as fases**. Começa vazio no diagnóstico e acumula os resumos de cada output nativo. É a "memória compartilhada" entre plugins — nenhum plugin precisa adivinhar o que o outro já fez.

### O que NÃO é
- **Não substitui os outputs nativos.** Cada skill continua produzindo no seu formato próprio (Alma da Persona, Copy 3x5, Roteiro com timestamps, etc.).
- **Não é onde o trabalho acontece.** É onde o trabalho é indexado. O Dossiê aponta para os outputs, não os replica.

### Como funciona

1. **O Chaveiro cria o Dossiê** no início (diagnóstico) → preenche §0
2. **Cada plugin, ao concluir**, escreve um resumo executivo na seção correspondente + linka o output nativo completo
3. **O próximo plugin lê o Dossiê** antes de operar → sabe o que já existe, o que falta, o que veio antes
4. **Na Lua Cheia** (revisão mensal), o Dossiê é versionado como snapshot

### Template

Ver `05-ASSETS/dossies/TEMPLATE-DOSSIE.md` — template funcional pronto pra duplicar.

Seções:
- §0 Diagnóstico (6 dimensões + roadmap)
- §1 Identidade (resumo do DNA de marca)
- §2 Inteligência (resumo do terreno + persona)
- §3 Estratégia (resumo da oferta + campanha)
- §4 Criação (inventário de outputs + status)
- §5 Operação (estado da Esteira + calendário)
- §6 Evolução (erros + notas + próxima revisão)

### Regras

1. **Todo plugin lê o Dossiê antes de operar.** Seção anterior vazia = o plugin precisa pedir ou gerar aquela informação primeiro.
2. **Todo plugin escreve no Dossiê ao concluir.** Resumo executivo + link pro output completo.
3. **O Dossiê nunca é apagado** — versionado a cada Lua Cheia.
4. **Em Modo Cliente Externo**, o Dossiê usa a linguagem do cliente.
5. **Formato**: `.md` nativo. Exportável como PDF.

### Onde vive

| Contexto | Local |
|----------|-------|
| No Claude Code | `05-ASSETS/dossies/[nome-projeto].md` |
| No Notion | Página filha de "Projetos" ou "MINHA ESTEIRA" |
| Para o cliente | Exportado como PDF |

---

## MAPA DE DEPENDÊNCIAS

Cada skill já define seu output no `SKILL.md`. O que importa pro sistema é a **cadeia**: quem precisa do output de quem antes de poder operar.

### Tabela de Dependências

| Skill que PRODUZ | Output nativo (ver SKILL.md) | Skills que CONSOMEM |
|------------------|------------------------------|---------------------|
| **Chaveiro** (diagnóstico) | Matriz 6D + Roadmap + Mapa de Encaixe | TODOS — porta de entrada universal |
| **Forja do Universo** | Primal DNA (7 elem.) + StoryBrand + World Building + Bridge to C2 | Alquimista (C2), Bardo (tom/léxico), Iluminista (estética), Arauto (linguagem) |
| **Portal do Terreno** | Relatório 6 seções + Matriz de Brechas + Insumos SZC | Forja da Persona (SZC), Alquimista (ângulos), Arauto (posicionamento) |
| **Forja da Persona** | Alma da Persona + Matriz C1 3x5 + SZC + Narrativa de Conexão | Alquimista (C1 inteiro), Bardo (hook + emoção), Chavossel (âncora), Arauto (tom) |
| **Forja de Oferta** | Equação de Valor + Stack + Copy da Oferta + Objeções | Alquimista/copy (C3), Bardo (roteiro de venda), Arauto (campanha) |
| **Portal da Escala** | Diagnóstico de Fase + Alavanca + Esteira de Valor + Painel | Arauto (campanha adequada à fase), Ritual da Chave (próximo ciclo) |
| **Mapa de Campanha** | Cronograma dia-a-dia + Peças por fase + Métricas | Bardo (o que produzir), Alquimista (ângulos/fase), Iluminista (visuais), Esteira (popular) |
| **Ritual da Chave** | Lua Cheia + Forja Semanal + Giro da Chave | TODOS — orquestra ativação sequencial dos plugins |
| **Headline Generator** | 30 headlines em 5 grupos + Recomendação Estratégica | Script Creator, Chavideo, Chavossel (slide 1), Copy (ângulos) |
| **Script Creator** | Análise + Roteiro 5 blocos + Nota Técnica | Copy Enhancer, Iluminista (direção visual), Esteira (agendar) |
| **Chavideo** | Exercício Progym + Combinação Cinematográfica + Roteiro timestamped | Chavossel (versão slides), Arauto (agendar), Copy Enhancer |
| **Chavossel** | 10 slides Sintaxe v22 (manchete/corpo/grito/corte) | Iluminista/Figma (renderizar), Arauto (agendar) |
| **Pergaminho de Copy** | Diagnóstico Pré-Escrita + Copy Calibrada + Cargas + Checklist | Chavideo (hook), Chavossel (copy), Arauto (publicar) |
| **Copy Enhancer** | Script otimizado + Notas de Entrega | Chavideo (gravação), Chavossel, Arauto |
| **Script Analyzer** | 5 layers de análise + Template Replicável | Script Creator (padrões), Headline Generator (feedback) |
| **Esteira Notion** | Database populada + Status semafórico | Portal da Escala (KPIs), Giro da Chave (tarefas do dia) |
| **Sistema de Design** | Paleta + Tipografia + Pergaminhos visuais + Componentes | Forja de Imagem, Arquiteto, Ponte Figma, Publicador |
| **Tesouro dos Erros** | Entrada estruturada (erro + causa-raiz + prevenção + padrão) | Ritual da Chave (Lua Cheia), TODOS (consulta preventiva) |
| **Forja do Conhecimento** | Notas Permanentes + Modelos Mentais + Mapa de Evolução | Bardo (material), Alquimista (argumentação), Todo o sistema |

### Diagrama de Fluxo

```
FASE 0                    FASE 1                    FASE 2
┌──────────┐             ┌──────────┐              ┌──────────┐
│ Chaveiro │─diagnóst.──▶│Cartógrafo│──terreno───▶│  Arauto   │
│          │             │          │  persona    │ Alquimist │
│ Forja do │──dna─────▶│ Portal   │              │          │
│ Universo │             │ Persona  │─────────────▶│ campanha │
└──────────┘             └──────────┘     ┌────────│ oferta   │
     │                        │           │        └────┬─────┘
     ▼                        ▼           │             ▼
  DOSSIÊ §0              DOSSIÊ §1-2     │        DOSSIÊ §3

FASE 3                                    │        FASE 4
┌──────────┐                              │       ┌──────────┐
│  Bardo   │◀── persona + dna + oferta ───┘       │  Arauto  │
│Alquimista│                                      │ Esteira  │
│Iluminista│──outputs nativos───────────────────▶│ Notion   │
└──────────┘                                      └────┬─────┘
     │                                                  │
     ▼                                                  ▼
  DOSSIÊ §4                                        DOSSIÊ §5
                                                        │
                                                        ▼
                                                   FASE 5
                                                   ┌──────────┐
                                                   │ Chaveiro │
                                           dados──▶│ Erros    │
                                                   │ Zettel   │
                                                   │ Lua Cheia│
                                                   └────┬─────┘
                                                        │
                                               DOSSIÊ §6
                                               recomenda → Fase X
```

### Regra de Dependência Obrigatória

Antes de operar, cada plugin DEVE verificar no Dossiê:

| Plugin | PRECISA existir antes |
|--------|-----------------------|
| Forja do Universo | §0 Diagnóstico (ao menos D1) |
| Portal do Terreno | §0 Diagnóstico (ao menos D2) |
| Forja da Persona | §2 Terreno (ao menos Insumos SZC) |
| Forja de Oferta | §2 Persona + §1 DNA |
| Mapa de Campanha | §2 Persona + §3 Oferta (se existir) |
| Pergaminho de Copy | §2 Persona (C1) + §1 DNA (C2) |
| Headline Generator | §2 Persona + §1 DNA |
| Script Creator | Headlines selecionadas |
| Chavideo | §2 Persona + §1 DNA + headline ou tema |
| Chavossel | §2 Persona + §1 DNA + headline ou tema |
| Esteira Notion | §3 Campanha OU §ritual (pauta semanal) |
| Portal da Escala | §5 Métricas de operação |

**Se a dependência não existe:** o plugin informa e sugere qual skill rodar antes — ou roda com o que tem, marcando `[sem dependência — a validar]`.

---

## ENTREGÁVEIS

O que o cliente vê, baixa e usa. Gerados a partir dos outputs nativos + Dossiê.

### Catálogo

| Entregável | Gerado por | Formato | Quando |
|------------|-----------|---------|--------|
| **Relatório de Diagnóstico** | Chaveiro | PDF | Após diagnóstico |
| **Brand Book** | Forja do Universo | PDF | Após Fase 0 |
| **Relatório de Mercado** | Portal do Terreno | PDF | Após Fase 1 |
| **Ficha de Persona** | Forja da Persona | PDF | Após Fase 1 |
| **Proposta de Oferta** | Forja de Oferta | PDF | Após Fase 2 |
| **Plano de Campanha** | Mapa de Campanha | PDF + Notion | Após Fase 2 |
| **Pauta Semanal** | Ritual da Chave | PDF + Notion | Semanal |
| **Pack de Headlines** | Headline Generator | MD / PDF | Por demanda |
| **Pack de Roteiros** | Script Creator + Chavideo | MD / PDF | Por demanda |
| **Pack de Copy** | Pergaminho de Copy | MD / PDF | Por demanda |
| **Carrosseis** | Chavossel + Iluminista | Figma / PNG | Por demanda |
| **Imagens** | Forja de Imagem | PNG / JPG | Por demanda |
| **Relatório Lua Cheia** | Ritual da Chave | PDF | Mensal |
| **Dossiê Completo** | Todo o sistema | PDF | A qualquer momento |

### Regras de Entrega

1. **Cada output nativo (.md) é a fonte de verdade.** O PDF é derivado, nunca o contrário.
2. **Em Modo Cliente Externo**, identidade visual do CLIENTE (não CM).
3. **Entregáveis ficam em** `05-ASSETS/entregas/[nome-projeto]/`.
4. **No Notion**, linkados como anexos na tarefa correspondente da Esteira.

---

## ADAPTAÇÃO POR NICHO

O sistema é **niche-agnostic**. A adaptação acontece em 3 pontos — todos já dentro dos skills:

### 1. No Diagnóstico (Chaveiro)
As 6 dimensões se aplicam a qualquer profissional digital:
- Coach, terapeuta, nutricionista → ênfase em D1 + D4
- Infoprodutor, course creator → ênfase em D3 + D2
- Agência, freelancer → ênfase em D5 + Modo Cliente Externo
- Artista, músico, criador → ênfase em D1 + D4
- E-commerce, SaaS → ênfase em D2 + D3

### 2. Na Persona (Cartógrafo)
O SZC + Alma da Persona capturam linguagem, dores e desejos de QUALQUER público. O output nativo já garante que Bardo e Alquimista ajustam tom automaticamente.

### 3. No DNA de Marca (Forja do Universo)
O léxico muda por nicho, mas o Primal Branding + StoryBrand + World Building são universais.

**O que NÃO muda:** diagnóstico → inteligência → estratégia → criação → operação → evolução.

---

## INÍCIO FRIO vs. INÍCIO QUENTE

### Início Frio (do zero)
```
→ Chaveiro cria Dossiê vazio
→ Diagnóstico preenche §0
→ Sequência Fase 0 → 5
→ Dossiê preenchido seção por seção
```

### Início Quente (já tem material)
```
→ Chaveiro cria Dossiê e IMPORTA o que existe
→ Traduz pro formato nativo do skill correspondente
→ Marca como [importado — a validar]
→ Diagnóstico identifica lacunas
→ Começa na fase que precisa
```

---

## VERSIONAMENTO

Outputs evoluem. O Dossiê rastreia:

- **v0.1** — Rascunho (gerado pelo plugin)
- **v0.5** — Revisado (ajustado após feedback)
- **v1.0** — Aprovado (pronto pra usar/publicar)
- **v1.x** — Iteração (ajuste pós-performance)

---

## INTEGRAÇÃO COM O ECOSSISTEMA

| Ferramenta | Papel |
|------------|-------|
| **Claude Code** | Motor — cria outputs, preenche Dossiê, exporta entregáveis |
| **Notion** | Operação — Esteira, calendário, tarefas vinculadas |
| **Figma** | Renderização — carrosseis e visuais via Ponte Figma |
| **GitHub** | Versionamento — histórico de todos os .md |
| **Google Drive** | Backup + compartilhamento com clientes |
| **PDF** | Formato de entrega final |

---

*Sistema de Artefatos — Chave Mestra. Arquitetado por Lucas Grigo, 2026.*

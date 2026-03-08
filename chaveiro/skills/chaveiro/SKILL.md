---
name: chaveiro
version: 2.0
layer: Camada Meta — Manutenção do Sistema
description: >
  Meta-plugin de manutenção e evolução do Sistema Chave Mestra. Ativar quando o usuário
  enviar livro, PDF ou framework para assimilar no sistema; quiser atualizar um skill
  existente; verificar coerência entre plugins; mapear onde novo conhecimento se encaixa;
  iniciar o sistema pela primeira vez (onboarding); publicar atualizações no GitHub; ou
  auditar a saúde geral do sistema. Gatilhos: "assimila esse livro/PDF", "atualiza o skill X
  com isso", "onde isso se encaixa no sistema", "confere se o sistema está coerente",
  "chaveiro", "adiciona esse framework", "onboarding", "primeiro uso", "publica a atualização",
  "diagnóstico do sistema", "quero instalar o sistema".
role: Guardião da coerência, manutenção, evolução e distribuição do Sistema Chave Mestra
inputs: >
  livro/PDF/framework externo, skill-alvo para atualização, novo usuário para onboarding,
  solicitação de verificação de coerência, comando de publicação no GitHub
outputs: >
  notas Zettelkasten, cartões de Modelos Mentais, propostas de enriquecimento, skills
  atualizados com changelog, relatório de saúde do sistema, roteiro de onboarding
  calibrado, ciclo de commit/push completo
feeds-into: todos os 10 plugins — o Chaveiro é a camada que mantém o sistema inteiro coerente
changelog:
  - v1.0: versão inicial — 5 protocolos, glossário proprietário, 7 Regras de Ouro
  - v2.0: frontmatter completo, mapa de dependências, Modo Proprietário/Comprador,
          Protocolo 6 (publicação GitHub), Protocolo 7 (onboarding novo usuário),
          Protocolo 8 (auto-manutenção), versioning semântico, Plugin 10 mapeado
---

# CHAVEIRO — Meta-Plugin de Manutenção do Sistema

O Chaveiro é o guardião do Kit Coprodução Chave Mestra. Sua função é garantir que o sistema cresça sem se deteriorar — que novas informações sejam assimiladas com precisão, que skills sejam atualizados sem perder o que já funciona, e que a coerência entre todos os plugins se mantenha íntegra.

**Princípio de operação:** crescimento por adição, nunca por substituição. Nenhum skill existente é sobrescrito sem prova de que a versão nova é superior. Todo conhecimento novo encontra seu lugar antes de ser integrado.

---

## Modo de Operação — Proprietário vs Comprador

**Antes de qualquer protocolo**, identificar o modo:

| Modo | Quem é | O que pode fazer |
|---|---|---|
| **Proprietário** | Lucas De Maria (Grigo) — criador do sistema | Editar SKILL.md, commitar, publicar no GitHub, distribuir atualizações |
| **Comprador** | Expert que adquiriu o sistema | Usar todos os plugins, personalizar localmente — não publica no repo principal |

**Como identificar:** se o usuário mencionar editar o sistema, publicar atualização ou fazer push → confirmar se é o Proprietário antes de guiar para o Protocolo 6. Compradores que quiserem customizar devem fazer fork do repo e operar na própria cópia.

---

## Arquitetura do Sistema (Referência Rápida)

```
CAMADA META
  └── Plugin 00: Chaveiro (este plugin — manutenção do sistema)

CAMADA 0 — BASE INTELECTUAL
  └── Plugin 09: Forja do Conhecimento (Zettelkasten, Modelos Mentais)

CAMADA 1 — DIAGNÓSTICO
  ├── Plugin 01: Portal do Terreno (análise estrutural de mercado)
  └── Plugin 02: Forja da Persona (SZC + Alma da Persona)

CAMADA 2 — ESTRATÉGIA
  └── Plugin 03: Pergaminho de Copy (Copy 3x5 + Método Carga)

CAMADA 3 — CRIAÇÃO
  ├── Plugin 04: Chavideo (roteiros de vídeo + Progymnasmata)
  └── Plugin 05: Chavossel (carrosséis + Progymnasmata)

CAMADA 4 — LANÇAMENTO
  ├── Plugin 06: Mapa de Campanha (modalidades + cronogramas)
  └── Plugin 07: Esteira Notion (integração operacional)

CAMADA 5 — ESCALA
  └── Plugin 08: Portal da Escala (métricas, alavancas, equipe)

CAMADA TRANSVERSAL — ESTÉTICA
  └── Plugin 10: O Iluminista (Pergaminhos Branco/Preto/Dourado — HTML/CSS)
```

---

## Mapa de Dependências

O que cada plugin **recebe** e **entrega**:

| Plugin | Recebe de | Entrega para |
|---|---|---|
| **01 — Portal do Terreno** | briefing bruto do cliente | 02, 03, 06 |
| **02 — Forja da Persona** | dados de mercado (01) | 03, 04, 05, 06 |
| **03 — Pergaminho de Copy** | Persona (02), contexto de oferta | 04, 05, 06 |
| **04 — Chavideo** | Copy (03), tema/argumento | 06, 07 |
| **05 — Chavossel** | Copy (03), tema/argumento | 06, 07 |
| **06 — Mapa de Campanha** | Copy (03), peças criadas (04+05) | 07, 08 |
| **07 — Esteira Notion** | outputs de 01–06 | operação diária, 08 |
| **08 — Portal da Escala** | dados de 07 + resultados de 06 | decisões estratégicas |
| **09 — Forja do Conhecimento** | qualquer input de qualquer camada | todos os plugins (base) |
| **10 — O Iluminista** | qualquer output textual ou estrutural | artefato visual final |
| **00 — Chaveiro** | qualquer input — livros, gaps, erros | todos os plugins (manutenção) |

**Caminho crítico mínimo para operar um ciclo completo:**
`01 → 02 → 03 → (04 ou 05) → 06 → 07`

---

## Versioning Semântico de Skills

| Tipo de mudança | Incremento | Exemplo |
|---|---|---|
| Nova seção, protocolo ou elemento de sintaxe | **Minor** `v1.0 → v1.1` | novo watermark, nova regra |
| Reescrita de seção ou mudança de comportamento | **Minor** com nota de breaking | mudança no processo de output |
| Revisão completa da filosofia ou estrutura | **Major** `v1.x → v2.0` | refactor total |
| Correção de erro sem mudança de comportamento | **Patch** `v1.1 → v1.1.1` | typo, exemplo errado |

---

## PROTOCOLO 1 — Assimilação de Livros e PDFs

Use quando o usuário enviar um livro, PDF ou material longo para incorporar ao sistema.

### Fase 1: Reconhecimento

Antes de processar o conteúdo, execute internamente:

1. Qual é o **tema central** do material?
2. Qual **camada** do sistema ele mais impacta (0 a 5)?
3. Quais **plugins específicos** são candidatos a absorver esse conhecimento?
4. Existe **conflito** com algum framework já presente no sistema?
5. Que **Modelos Mentais** novos este material introduz?

### Fase 2: Extração

**A) Notas Permanentes (formato Zettelkasten)**

```
NOTA PERMANENTE
Título: [conceito em forma de afirmação]
Essência: [1-2 frases em linguagem própria — nunca citação direta]
Conexões: [→ outros conceitos dentro do sistema]
Fonte: [autor, obra, página/capítulo]
Camada: [qual camada do kit se beneficia]
```

**B) Cartões de Modelos Mentais**

```
MODELO MENTAL
Nome: [nome do modelo]
Origem: [área / autor que criou]
Definição: [o que é, em linguagem própria]
Quando usar: [contexto de aplicação ideal]
Quando NÃO usar: [limitações e riscos de uso incorreto]
Exemplo no contexto Chave Mestra: [aplicação prática no sistema]
Modelos relacionados já no sistema: [conexões com frameworks existentes]
```

**C) Propostas de Enriquecimento de Skills**

```
PROPOSTA DE ENRIQUECIMENTO
Plugin alvo: [nome e número do plugin]
Seção afetada: [qual parte do SKILL.md muda]
O que adicionar: [conteúdo novo sugerido]
O que preservar: [o que NÃO muda — crítico]
Justificativa: [por que essa adição melhora o sistema]
Impacto em outros plugins: [efeito colateral, se houver]
```

### Fase 3: Mapeamento de Encaixe

```
[NOME DO MATERIAL] — MAPA DE ENCAIXE

Encaixe principal:     Plugin XX — [nome]
Encaixe secundário:    Plugin XX — [nome]
Notas permanentes:     [número] criadas
Modelos mentais:       [número] novos
Propostas de update:   [número] plugins afetados
Conflitos detectados:  [nenhum / descrever se houver]

AÇÃO RECOMENDADA:
→ [instrução clara do que fazer com cada saída]
```

### Fase 4: Output Final

Entregue nesta ordem:
1. Mapa de Encaixe (visão geral)
2. Notas Permanentes (uma por conceito)
3. Cartões de Modelos Mentais (um por modelo)
4. Propostas de Enriquecimento (uma por plugin afetado)

**Regra crítica:** nunca reescreva um skill durante a assimilação. Gere apenas propostas. A decisão de implementar é sempre do usuário.

---

## PROTOCOLO 2 — Atualização de Skill Existente

Use quando o usuário quiser modificar um SKILL.md já existente.

### Passo 1: Leitura Completa

Ler o skill atual na íntegra. Identificar:
- O que está funcionando bem (preservar obrigatoriamente)
- O que pode ser melhorado com a nova informação
- O que está desatualizado ou conflitante

### Passo 2: Mapeamento de Delta

```
ANÁLISE DE DELTA — [Nome do Skill] v[atual] → v[nova]

PRESERVAR (não muda):
→ [lista do que permanece idêntico]

ADICIONAR:
→ [conteúdo novo sendo inserido + justificativa]

MODIFICAR:
→ [o que muda + antes/depois + justificativa]

REMOVER:
→ [o que sai + justificativa — sempre justificar remoções]

IMPACTO EM OUTROS PLUGINS:
→ [outros skills que precisam de ajuste, se houver]
```

Aguardar aprovação do usuário antes de prosseguir.

### Passo 3: Geração da Nova Versão

Após aprovação:
- Incrementar `version` no frontmatter YAML conforme Versioning Semântico
- Adicionar entrada no `changelog`
- Atualizar a seção afetada

### Passo 4: Verificação Pós-Update

- [ ] O core filosófico do skill foi preservado?
- [ ] Algum outro skill precisa de ajuste por causa dessa mudança?
- [ ] O vocabulário proprietário da marca permanece consistente?
- [ ] O skill continua autossuficiente?
- [ ] **[Proprietário]** A atualização foi commitada e publicada no GitHub? → Protocolo 6

---

## PROTOCOLO 3 — Verificação de Coerência do Sistema

Use quando o usuário quiser checar se tudo está alinhado, ou antes de um grande ciclo de uso.

### Checklist de Saúde

**Coerência Filosófica**
- [ ] Todos os skills respeitam a tese central: Personalidade + Inteligência = Resultados
- [ ] O vocabulário proprietário está consistente em todos os plugins
- [ ] Nenhum skill contradiz diretamente outro

**Cobertura das Camadas**
- [ ] Camada 0 (Base) → Plugin 09
- [ ] Camada 1 (Diagnóstico) → Plugins 01 + 02
- [ ] Camada 2 (Estratégia) → Plugin 03
- [ ] Camada 3 (Criação) → Plugins 04 + 05
- [ ] Camada 4 (Lançamento) → Plugins 06 + 07
- [ ] Camada 5 (Escala) → Plugin 08
- [ ] Transversal (Estética) → Plugin 10

**Fluxo de Integração**
- [ ] Diagnóstico (01+02) alimenta corretamente a Estratégia (03)
- [ ] Estratégia (03) informa a Criação (04+05)
- [ ] Criação alimenta o Lançamento (06+07)
- [ ] Lançamento reporta dados para a Escala (08)
- [ ] Base (09) está conectada a todas as camadas superiores
- [ ] Estética (10) está disponível como camada final em qualquer pipeline

**Pontos Cegos e Gaps**
- Lacunas não cobertas por nenhum plugin atual
- Sobreposições desnecessárias entre plugins
- Skills que precisam de atualização urgente

**Output:** relatório de saúde com semáforo 🟢/🟡/🔴 para cada ponto + lista de ações por prioridade.

---

## PROTOCOLO 4 — Integração de Novo Conhecimento Avulso

Use quando o usuário trouxer um conceito, framework ou ideia específica (não um livro inteiro).

### Processo

1. **Identificar o tipo de conhecimento:**
   - Modelo mental / framework analítico → Plugin 09
   - Técnica de diagnóstico de mercado → Plugin 01
   - Insight sobre persona / psicologia → Plugin 02
   - Técnica de copywriting → Plugin 03
   - Estrutura narrativa para vídeo → Plugin 04
   - Estrutura visual para carrossel → Plugin 05
   - Estratégia de campanha → Plugin 06
   - Operação / gestão de projetos → Plugin 07
   - Métricas ou alavancas de negócio → Plugin 08
   - Estética / identidade visual → Plugin 10

2. **Verificar conflito:** existe algo equivalente no plugin alvo? É complementar ou substituto?

3. **Gerar proposta de encaixe:** onde especificamente dentro do skill esse conhecimento entra.

4. **Gerar nota permanente** no formato Zettelkasten para o Plugin 09.

---

## PROTOCOLO 5 — Geração de Novo Plugin

Use quando o usuário identificar uma lacuna não coberta pelos 11 plugins existentes.

### Critérios (todos devem ser atendidos):
- [ ] A função não está coberta por nenhum plugin existente
- [ ] Não é uma subfunção que cabe dentro de um plugin atual
- [ ] Tem escopo claro e sem sobreposição com outros
- [ ] Tem uso recorrente (não é caso isolado)

### Template de novo SKILL.md:

```markdown
---
name: [nome-kebab-case]
version: 1.0
layer: [Camada X — Nome]
description: >
  [Quando ativar — gatilhos e contextos. 2-3 frases.]
role: [função em uma linha]
inputs: [o que recebe]
outputs: [o que entrega]
feeds-into: [quais plugins recebem seu output]
changelog:
  - v1.0: versão inicial
---

# [NOME DO PLUGIN] — [Subtítulo]

[Parágrafo de filosofia: por que existe, qual problema resolve.]

---

## [Framework / Teoria Base]

## [Processo / Passo a Passo]

## [Templates / Outputs]

## Integração com o Sistema

[O que recebe, o que entrega, de onde vem, para onde vai.]
```

---

## PROTOCOLO 6 — Ciclo de Publicação no GitHub

**Apenas Modo Proprietário.** Executar após qualquer atualização de skill que deva ser distribuída para compradores.

### Passo 1: Verificar estado do repositório

```bash
cd [raiz-do-repositório-local]
git status
git diff --stat
```

### Passo 2: Staging e commit

```bash
git add [arquivo(s) modificado(s)]
git commit -m "[tipo]([plugin]): [descrição concisa]"
```

**Convenção de commit:**

| Tipo | Uso |
|---|---|
| `feat` | Nova funcionalidade, protocolo ou sintaxe |
| `fix` | Correção de erro ou instrução conflitante |
| `docs` | Atualização de documentação ou exemplos |
| `refactor` | Reorganização sem mudança de comportamento |

Exemplos válidos:
```
feat(chavossel): v2.2 — Palavra de Poder *asterisco* na sintaxe v22
fix(alquimista): corrige instrução contraditória sobre tom de voz
docs(chaveiro): v2.0 — mapa de dependências e onboarding adicionados
```

### Passo 3: Push

```bash
git push origin main
```

### Passo 4: Atualização nos clientes (opcional)

Para atualizações significativas: compradores precisam rodar o update do plugin no marketplace do Claude Code para receber a nova versão instalada.

---

## PROTOCOLO 7 — Onboarding de Novo Usuário

Use quando um novo comprador instalar o sistema e precisar de orientação para começar a operar.

### Fase 1: Diagnóstico de Contexto (5 perguntas)

```
DIAGNÓSTICO DE ONBOARDING

1. Qual é o seu nicho ou área de expertise?
   (Ex: finanças pessoais, saúde integrativa, marketing digital, coaching executivo)

2. Qual produto você vende ou quer criar?
   (Curso, mentoria, infoproduto, serviço, comunidade — nome + formato se já existir)

3. Como você chama sua audiência?
   (Ex: "meus alunos", "minha comunidade", "minha tribo" — ou ainda não tem nome)

4. Você já tem uma comunidade ativa? Se sim, qual o nome?

5. Descreva seu tom de voz em 3 adjetivos + 1 frase que você NUNCA diria.
```

### Fase 2: Calibração do Sistema

Com base nas respostas:
- Ativar Modo Cliente Externo com os 5 elementos capturados
- Registrar os elementos para uso consistente em todos os plugins da sessão
- Identificar qual camada é mais urgente para o contexto atual do usuário

### Fase 3: Caminho de Entrada Recomendado

| Situação do novo usuário | 1º plugin | 2º plugin | 3º plugin |
|---|---|---|---|
| Não conhece seu mercado ainda | 01 — Portal do Terreno | 02 — Forja da Persona | 03 — Pergaminho de Copy |
| Conhece o mercado, não tem copy | 02 — Forja da Persona | 03 — Pergaminho de Copy | 04 ou 05 |
| Tem copy, precisa criar conteúdo | 04 — Chavideo | 05 — Chavossel | 06 — Mapa de Campanha |
| Pronto para lançar | 06 — Mapa de Campanha | 07 — Esteira Notion | 08 — Portal da Escala |
| Quer estruturar base de conhecimento | 09 — Forja do Conhecimento | 01 — Portal do Terreno | 02 — Forja da Persona |

### Fase 4: Output do Onboarding

```
RELATÓRIO DE ONBOARDING

Usuário: [nome / marca]
Nicho: [campo]
Produto principal: [nome + tipo]
Audiência: [como chama]
Comunidade: [nome ou "ainda não tem"]
Tom de voz: [3 adjetivos] | Nunca diria: "[frase]"

Caminho de entrada recomendado:
→ Plugin [X] primeiro — [justificativa]
→ Plugin [X] segundo — [justificativa]
→ Plugin [X] terceiro — [justificativa]

Modo de operação: Cliente Externo
```

---

## PROTOCOLO 8 — Auto-Manutenção do Chaveiro

O Chaveiro aplica seus próprios protocolos a si mesmo.

- **Assimilar novo conhecimento sobre manutenção** → Protocolo 1 com o Chaveiro como plugin alvo
- **Atualizar seção do próprio SKILL.md** → Protocolo 2 (Delta Analysis) → aprovação → Protocolo 6
- **Verificar se os protocolos cobrem o sistema atual** → Protocolo 3 checando se cada protocolo tem correspondência com uma necessidade real e recorrente

**Sinais de que o Chaveiro precisa de atualização:**
- Um protocolo existente não cobre um cenário que se repetiu 3x ou mais
- Um novo tipo de ação sistêmica surgiu sem protocolo dedicado
- Um comprador relatou confusão sobre como usar o Chaveiro para uma tarefa específica
- Um novo plugin foi adicionado ao sistema e o mapa de dependências não o reflete

---

## Glossário Proprietário (Referência de Consistência)

Ao assimilar qualquer material ou atualizar qualquer skill, verificar que estes termos são usados corretamente:

| Termo | Significado canônico | Nunca confundir com |
|---|---|---|
| **Chave Mestra** | A marca, o universo, o produto flagship | "método" ou "curso" |
| **Pergaminho** | Qualquer material do sistema (Branco/Preto/Dourado) | "ebook", "material", "produto" |
| **Portal** | Área de conhecimento e entrega | "módulo", "área", "seção" |
| **Forja** | Processo de lapidação pela prática | "treinamento", "estudo" |
| **A Ordem** | A comunidade do sistema | "grupo", "comunidade", "curso" |
| **Tesouro dos Erros** | Arquivo de aprendizados de falhas | "erros", "problemas" |
| **Portadores** | Membros da comunidade / leads qualificados | "alunos", "clientes", "seguidores" |
| **Chavideo** | Sistema de roteiros de vídeo da marca | "método de roteiro" genérico |
| **Chavossel** | Sistema de carrosséis da marca | "método de carrossel" genérico |
| **Copy 3x5** | Framework de 3 camadas × 5 níveis | "copywriting" genérico |
| **Método Carga** | Sistema de densidade narrativa | "gatilhos mentais" |
| **SZC** | Status Quo + Zeitgeist + Conclusão | "pesquisa de mercado" |
| **Alma da Persona** | Inferno / Purgatório / Paraíso interno | "avatar", "persona" genérico |

---

## Regras de Ouro do Chaveiro

1. **Nunca sobrescreva — sempre versione.** A versão anterior é patrimônio.
2. **Proponha antes de implementar.** O usuário decide; o Chaveiro executa.
3. **Conhecimento novo encontra o plugin certo antes de ser integrado.** Nunca jogue em lugar nenhum.
4. **Conflito é informação.** Documente a contradição e apresente as duas versões antes de resolver.
5. **O core filosófico é intocável.** Personalidade + Inteligência = Resultados.
6. **Glossário é lei.** Termos proprietários nunca são substituídos por equivalentes genéricos.
7. **Integração visível.** Todo skill sabe de onde vem e para onde vai.
8. **Modo primeiro.** Antes de qualquer ação de manutenção, identificar se o usuário é Proprietário ou Comprador.

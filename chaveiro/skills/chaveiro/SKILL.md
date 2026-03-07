---
name: chaveiro
description: >
  Plugin meta de manutenção do Sistema Chave Mestra. Ativar quando o usuário enviar
  um livro, PDF ou novo framework para assimilar no sistema; quando quiser atualizar
  um skill existente sem comprometer os demais; quando precisar verificar a coerência
  entre plugins; ou quando quiser mapear onde um novo conhecimento se encaixa na
  arquitetura do kit. Gatilhos: "assimila esse livro", "atualiza o skill X com isso",
  "onde isso se encaixa no sistema", "confere se o sistema está coerente",
  "adiciona esse framework", "chaveiro".
version: 1.0
---

# CHAVEIRO — Meta-Plugin de Manutenção do Sistema

O Chaveiro é o guardião do Kit Coprodução Chave Mestra. Sua função é garantir que o sistema cresça sem se deteriorar — que novas informações sejam assimiladas com precisão, que skills sejam atualizados sem perder o que já funciona, e que a coerência entre todos os plugins se mantenha íntegra.

**Princípio de operação:** crescimento por adição, nunca por substituição. Nenhum skill existente é sobrescrito sem prova de que a versão nova é superior. Todo conhecimento novo encontra seu lugar antes de ser integrado.

---

## Arquitetura do Sistema (Referência Rápida)

Antes de qualquer operação, o Chaveiro mapeia onde a informação nova se encaixa:

```
CAMADA 0 — BASE INTELECTUAL
  └── Plugin 09: Forja do Conhecimento (Zettelkasten, Modelos Mentais, Método Científico)

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

CAMADA META
  └── Plugin 00: Chaveiro (este plugin — manutenção do sistema)
```

---

## PROTOCOLO 1 — Assimilação de Livros e PDFs

Use quando o usuário enviar um livro, PDF ou material longo para incorporar ao sistema.

### Fase 1: Reconhecimento

Antes de processar o conteúdo, execute estas perguntas internamente:

1. Qual é o **tema central** do material?
2. Qual **camada** do sistema ele mais impacta (0 a 5)?
3. Quais **plugins específicos** são candidatos a absorver esse conhecimento?
4. Existe **conflito** com algum framework já presente no sistema?
5. Que **Modelos Mentais** novos este material introduz?

### Fase 2: Extração

Processe o material gerando **três tipos de saída**:

**A) Notas Permanentes (formato Zettelkasten)**
Uma nota por conceito atômico e autossuficiente. Estrutura:

```
NOTA PERMANENTE
Título: [conceito em forma de afirmação]
Essência: [1-2 frases em linguagem própria — nunca citação direta]
Conexões: [→ outros conceitos dentro do sistema]
Fonte: [autor, obra, página/capítulo]
Camada: [qual camada do kit se beneficia]
```

**B) Cartões de Modelos Mentais**
Para cada framework, matriz ou modelo novo encontrado:

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
Para cada plugin que pode ser melhorado com o novo material:

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

Gere um resumo visual de onde o novo conhecimento se conecta:

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

Leia o skill atual na íntegra antes de qualquer modificação. Identifique:
- O que está funcionando bem (preservar obrigatoriamente)
- O que pode ser melhorado com a nova informação
- O que está desatualizado ou conflitante com o novo input

### Passo 2: Mapeamento de Delta

Antes de escrever qualquer versão nova, apresente ao usuário:

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

Após aprovação, gere o skill completo com:
- Número de versão incrementado no header YAML (ex: `version: 1.1`)
- Data da atualização
- Nota de changelog no final do arquivo:

```
---
## Changelog

### v[número] — [data]
**Adicionado:** [o que entrou]
**Modificado:** [o que mudou]
**Preservado:** [core intacto]
**Removido:** [se houver — com justificativa]
```

### Passo 4: Verificação Pós-Update

Após gerar a nova versão, responda:
- [ ] O core filosófico do skill foi preservado?
- [ ] Algum outro skill precisa de ajuste por causa dessa mudança?
- [ ] O vocabulário proprietário da marca permanece consistente?
- [ ] O skill continua autossuficiente (faz sentido sem precisar de outros)?

---

## PROTOCOLO 3 — Verificação de Coerência do Sistema

Use quando o usuário quiser checar se tudo está alinhado, ou antes de um grande ciclo de uso do sistema.

### Checklist de Saúde

Execute cada verificação e reportar o resultado:

**Coerência Filosófica**
- [ ] Todos os skills respeitam a tese central: Personalidade + Inteligência = Resultados
- [ ] O vocabulário proprietário está consistente (Pergaminhos, Portais, Forja, A Ordem, etc.)
- [ ] Nenhum skill contradiz diretamente outro

**Cobertura das Camadas**
- [ ] Camada 0 (Base) tem skill dedicado → Plugin 09
- [ ] Camada 1 (Diagnóstico) tem cobertura dupla → Plugins 01 + 02
- [ ] Camada 2 (Estratégia) está coberta → Plugin 03
- [ ] Camada 3 (Criação) tem cobertura dupla → Plugins 04 + 05
- [ ] Camada 4 (Lançamento) tem cobertura dupla → Plugins 06 + 07
- [ ] Camada 5 (Escala) tem skill dedicado → Plugin 08

**Fluxo de Integração**
- [ ] A saída de Diagnóstico (01+02) alimenta corretamente a Estratégia (03)
- [ ] A Estratégia (03) informa a Criação (04+05)
- [ ] A Criação alimenta o Lançamento (06+07)
- [ ] O Lançamento reporta dados para a Escala (08)
- [ ] A Base (09) está conectada a todas as camadas superiores

**Pontos Cegos e Gaps**
Identifique e liste:
- Lacunas não cobertas por nenhum plugin atual
- Sobreposições desnecessárias entre plugins
- Skills que precisam de atualização urgente

**Output:** relatório de saúde com semáforo (verde/amarelo/vermelho) para cada ponto + lista de ações recomendadas por prioridade.

---

## PROTOCOLO 4 — Integração de Novo Conhecimento Avulso

Use quando o usuário trouxer um conceito, framework ou ideia específica (não um livro inteiro) para encaixar no sistema.

### Processo

1. **Identificar o tipo de conhecimento:**
   - Modelo mental / framework analítico → vai para Plugin 09 (Forja do Conhecimento)
   - Técnica de diagnóstico de mercado → Plugin 01 (Portal do Terreno)
   - Insight sobre persona / psicologia → Plugin 02 (Forja da Persona)
   - Técnica de copywriting → Plugin 03 (Pergaminho de Copy)
   - Estrutura narrativa para vídeo → Plugin 04 (Chavideo)
   - Estrutura visual para carrossel → Plugin 05 (Chavossel)
   - Estratégia de campanha → Plugin 06 (Mapa de Campanha)
   - Operação / gestão de projetos → Plugin 07 (Esteira Notion)
   - Métricas ou alavancas de negócio → Plugin 08 (Portal da Escala)

2. **Verificar conflito:** existe algo equivalente no plugin alvo? Se sim, é complementar ou substituto?

3. **Gerar proposta de encaixe:** onde especificamente dentro do skill alvo esse conhecimento entra — qual seção, em qual nível de profundidade.

4. **Gerar nota permanente** no formato Zettelkasten para o Plugin 09.

---

## PROTOCOLO 5 — Geração de Novo Plugin

Use quando o usuário identificar uma lacuna não coberta pelos 9 plugins existentes.

### Critérios para criar um novo plugin (todos devem ser atendidos):
- [ ] A função não está coberta por nenhum plugin existente
- [ ] Não é uma subfunção que cabe dentro de um plugin atual
- [ ] Tem escopo claro e não sobreposição com outros
- [ ] Tem uso recorrente (não é caso isolado)

### Template de novo SKILL.md:

```markdown
---
name: [nome-kebab-case]
description: >
  [Quando ativar este skill — gatilhos e contextos de uso. 2-3 frases.]
version: 1.0
---

# [NOME DO PLUGIN] — [Subtítulo que descreve a função]

[Parágrafo de filosofia: por que este plugin existe, qual problema resolve,
 qual princípio norteia sua operação.]

---

## [Seção 1: Framework / Teoria Base]

[...]

## [Seção 2: Processo / Passo a Passo]

[...]

## [Seção 3: Templates / Outputs]

[...]

## Integração com o Sistema

[Como este plugin se conecta com os outros — o que recebe, o que entrega.]

---
## Changelog
### v1.0 — [data]
Versão inicial.
```

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
3. **Conhecimento novo encontra o plugin certo antes de ser integrado.** Nunca jogue em "lugar nenhum".
4. **Conflito é informação.** Se algo contradiz o sistema, documente a contradição e apresente as duas versões antes de resolver.
5. **O core filosófico é intocável.** Personalidade + Inteligência = Resultados. O que vier — acerto ou erro — vira tesouro.
6. **Glossário é lei.** Termos proprietários nunca são substituídos por equivalentes genéricos em nenhum skill.
7. **Integração visível.** Todo skill sabe de onde vem e para onde vai — os pontos de entrada e saída são sempre explícitos.

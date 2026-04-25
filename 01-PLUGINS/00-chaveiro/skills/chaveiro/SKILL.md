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
CAMADA META + C0 — CHAVEIRO (Plugin 00)
  ├── chaveiro (este plugin — manutenção do sistema)
  ├── forja-do-conhecimento (Zettelkasten, Modelos Mentais)
  └── tesouro-dos-erros (registro e consulta de erros críticos)

CAMADA 1 — CARTÓGRAFO (Plugin 01)
  ├── portal-do-terreno (análise estrutural de mercado)
  └── forja-da-persona (SZC + Alma da Persona)

CAMADA 2 + C6 — ALQUIMISTA (Plugin 02)
  ├── pergaminho-de-copy (Copy 3x5 + Método Carga)
  ├── forja-de-oferta (Equação de Valor + Stack)
  ├── portal-da-escala (métricas, alavancas, equipe)
  └── frameworks-anuncios (templates + Manychat)

CAMADA 3 — BARDO (Plugin 03)
  ├── chavideo (roteiros de vídeo + Progymnasmata)
  ├── chavossel (carrosséis + Progymnasmata)
  ├── headline-generator, script-creator, script-analyzer, copy-enhancer

CAMADA 4 + C5 — ARAUTO (Plugin 04)
  ├── mapa-de-campanha (modalidades + cronogramas)
  ├── esteira-notion (integração operacional)
  └── protocolo-massivo (Luxo + Urgência)

TRANSVERSAL — VISUAL (Plugin 05)
  └── iluminista (sistema visual)
```

---

## PROTOCOLO 0 — Diagnóstico Interativo (Porta de Entrada Universal)

Use quando o usuário iniciar um novo projeto, quando disser "diagnóstico", "me avalia", "quero começar", "preciso de um plano", ou quando qualquer interação sugerir que é o primeiro contato com o sistema. **Este é o protocolo que antecede todos os outros.** Nenhum plugin opera sem que o Chaveiro tenha examinado primeiro — a menos que o usuário explicitamente peça uma skill isolada.

**Analogia:** um médico não receita sem examinar. O Chaveiro é a consulta antes do tratamento.

### Fase 1: Identificar Modo de Operação

Antes de tudo, determinar:

- **Modo CM** → Cliente é Lucas / Chave Mestra → vocabulário CM integral
- **Modo Cliente Externo** → Capturar os 5 elementos obrigatórios:
  1. Nome / marca do cliente
  2. Produtos (nome + tipo para cada um)
  3. Como chama sua audiência
  4. Nome da comunidade (ou "não tem")
  5. Tom de voz — 3 adjetivos + 1 frase que nunca diria

### Fase 2: Exame das 6 Dimensões

Conduzir uma conversa diagnóstica rápida. Cada dimensão = uma fase do workflow + plugin responsável.

```
DIMENSÃO         │ O QUE AVALIA                              │ PLUGIN
─────────────────┼───────────────────────────────────────────┼──────────────
D1 — Identidade  │ Voz, valores, universo simbólico, marca   │ Cartógrafo (Forja do Universo)
D2 — Inteligência│ Conhecimento do mercado e do público      │ Cartógrafo (Portal + Persona)
D3 — Estratégia  │ Plano, campanha, calendário, metas        │ Arauto + Alquimista
D4 — Criação     │ Método de produção, qualidade, frequência │ Alquimista + Bardo + Iluminista
D5 — Operação    │ Organização, tarefas, tracking, Notion    │ Arauto (Esteira Notion)
D6 — Evolução    │ Aprendizado, reflexão, documentação       │ Chaveiro (Forja + Tesouro + Ritual)
```

**Perguntas-chave por dimensão:**

**D1 — Identidade**
- Você tem uma marca ou está começando do zero?
- Consegue descrever sua voz em 3 adjetivos?
- Tem um universo simbólico (nomes, vocabulário, estética própria)?
- Já fez algum exercício de posicionamento ou worldbuilding?

**D2 — Inteligência**
- Sabe quem são seus 3 maiores concorrentes e o que os diferencia?
- Conhece as dores, desejos e linguagem do seu público?
- Já mapeou o zeitgeist do seu mercado (o que está mudando agora)?
- Tem uma persona documentada ou trabalha no instinto?

**D3 — Estratégia**
- Tem um plano de conteúdo para os próximos 30 dias?
- Sabe qual é a próxima campanha/lançamento?
- Tem metas definidas (receita, audiência, conversão)?
- Consegue explicar sua esteira de valor (do gratuito ao premium)?

**D4 — Criação**
- Produz conteúdo com algum método ou vai no feeling?
- Qual a sua frequência de publicação?
- Usa frameworks de copy ou escreve intuitivamente?
- Tem identidade visual definida (paleta, tipografia, estilo)?

**D5 — Operação**
- Suas tarefas e projetos estão organizados em algum sistema?
- Consegue ver de relance o que precisa fazer hoje/semana?
- Tem um calendário de conteúdo funcional?
- Seu processo é repetível ou muda toda semana?

**D6 — Evolução**
- Documenta o que aprende (notas, insights, conexões)?
- Registra erros e o que aprendeu com eles?
- Tem uma rotina de reflexão (semanal, mensal)?
- Estuda ativamente algo que alimenta seu trabalho?

### Fase 3: Gerar Matriz de Diagnóstico

Classificar cada dimensão:

| Status | Significado | Ação |
|--------|-------------|------|
| 🔴 Ausente | Não existe nada nessa dimensão | **Prioridade alta** — criar do zero |
| 🟡 Fraco | Existe algo, mas informal/inconsistente | **Prioridade média** — estruturar e fortalecer |
| 🟢 Sólido | Funciona bem, tem método | **Manutenção** — otimizar e conectar |

**Apresentar ao usuário no formato:**
```
D1 Identidade   → [🔴/🟡/🟢] — [observação]
D2 Inteligência → [🔴/🟡/🟢] — [observação]
D3 Estratégia   → [🔴/🟡/🟢] — [observação]
D4 Criação      → [🔴/🟡/🟢] — [observação]
D5 Operação     → [🔴/🟡/🟢] — [observação]
D6 Evolução     → [🔴/🟡/🟢] — [observação]
```

### Fase 4: Aplicar Regras de Prioridade (Motor de Recomendação)

Não recomendar tudo de uma vez. Seguir a lógica de dependências:

```
REGRA 1: Identidade antes de tudo
  Se D1 = 🔴 → Forja do Universo + Ritual da Chave PRIMEIRO
  Razão: sem voz definida, todo conteúdo será genérico

REGRA 2: Inteligência antes de Estratégia
  Se D2 = 🔴 → Cartógrafo (Portal + Persona) antes do Arauto/Alquimista
  Razão: sem conhecer o terreno, qualquer plano é chute

REGRA 3: Estratégia antes de Criação em volume
  Se D3 = 🔴 e D4 = 🟡/🟢 → Mapa de Campanha antes de mais conteúdo
  Razão: produzir sem rumo é gastar energia sem resultado

REGRA 4: Criação precisa de método, não só de vontade
  Se D4 = 🔴/🟡 → Alquimista (Copy 3x5) + Bardo (estruturas) como fundação
  Razão: método é o que separa conteúdo de barulho

REGRA 5: Operação é o que sustenta tudo
  Se D5 = 🔴 → Esteira Notion em paralelo com qualquer fase
  Razão: sem organização, o sistema não escala

REGRA 6: Evolução é o diferencial de longo prazo
  Se D6 = 🔴 → Forja do Conhecimento + Tesouro dos Erros como hábito
  Razão: quem não aprende com o que faz, repete os mesmos erros

REGRA 7: Sempre identificar combinações não-óbvias
  - Quer roteiro → mas não tem persona? Cartógrafo ANTES do Bardo
  - Quer copy → mas a voz é genérica? Ritual da Chave ANTES do Alquimista
  - Produz muito → mas nunca analisa? Tesouro dos Erros como UPGRADE
  - Quer escalar → mas não tem método? Alquimista ANTES do Portal da Escala
```

### Fase 5: Identificar Tipo de Jornada

Com base no diagnóstico, classificar a jornada:

- [ ] **Starter Pack** — do zero → Fase 0 → 1 → 2 → 3 → 4 → 5
- [ ] **Já tem marca** — pula Fase 0 se identidade sólida → Fase 1 → 2 → 3
- [ ] **Já produz, quer escalar** — Fase 5 (analisar) → Portal da Escala → Fase 2 → 3
- [ ] **Já produz, quer qualidade** — Fase 3 (instalar método) → Fase 5 (feedback loop)
- [ ] **Cliente Externo** — diagnóstico + captura 5 elementos → fluxo completo

### Fase 6: Gerar Roadmap Personalizado (3 Horizontes)

```
AGORA (próximos 7 dias)
  → O que precisa ser resolvido ANTES de qualquer produção
  → Geralmente: D1 (identidade) ou D2 (inteligência)
  → Plugins: Forja do Universo, Portal do Terreno, Forja da Persona

PRÓXIMO (próximos 30 dias)
  → Montar a estrutura que sustenta a operação
  → Geralmente: D3 (estratégia) + D5 (operação)
  → Plugins: Mapa de Campanha, Esteira Notion, Ritual da Chave

CONTÍNUO (permanente)
  → O que mantém o sistema vivo e evoluindo
  → Sempre: D4 (criação com método) + D6 (evolução)
  → Plugins: Alquimista + Bardo + Iluminista + Forja do Conhecimento
```

### Fase 7: Criar o Dossiê CM

1. Duplicar o template de `05-ASSETS/dossies/TEMPLATE-DOSSIE.md`
2. Nomear como `05-ASSETS/dossies/[nome-projeto].md`
3. Preencher §0 com: matriz de diagnóstico, tipo de jornada, roadmap personalizado, recomendações cruzadas
4. Salvar — este documento viajará por todas as fases subsequentes

### Fase 8: Despachar para o Primeiro Plugin

Com base nas regras de prioridade, indicar ao usuário:
- Qual plugin ativar primeiro
- Por que (justificativa baseada no diagnóstico)
- O que esperar como output
- O que vem depois

**Regra de ouro:** o diagnóstico nunca é feito uma vez e esquecido. Revisitar na Lua Cheia (mensal), pós-campanha, ou quando algo travar.

### Gatilhos de Revisão do Diagnóstico

| Gatilho | Quando | O que recalibra |
|---------|--------|-----------------|
| **Lua Cheia** | Todo mês (Ritual da Chave) | Reavalia todas as 6 dimensões |
| **Novo Cliente** | Ao iniciar trabalho com cliente externo | Diagnóstico completo do cliente |
| **Pós-Campanha** | Ao finalizar um lançamento | D3 + D4 + D6 |
| **Crise/Travou** | Quando algo não funciona | Identifica qual dimensão quebrou |
| **Escala** | Quando quer crescer além do atual | D3 + D5 + Portal da Escala |

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
- [ ] Meta + C0 (Base) tem cobertura → Chaveiro (Plugin 00)
- [ ] C1 (Diagnóstico) tem cobertura → Cartógrafo (Plugin 01)
- [ ] C2 (Estratégia) + C6 (Escala) estão cobertas → Alquimista (Plugin 02)
- [ ] C3 (Criação) tem cobertura completa → Bardo (Plugin 03)
- [ ] C4 (Lançamento) + C5 (Operação) estão cobertas → Arauto (Plugin 04)
- [ ] Transversal (Visual) tem cobertura → Visual (Plugin 05)

**Fluxo de Integração**
- [ ] A saída de Diagnóstico (Cartógrafo) alimenta corretamente a Estratégia (Alquimista)
- [ ] A Estratégia (Alquimista) informa a Criação (Bardo)
- [ ] A Criação (Bardo) alimenta o Lançamento (Arauto)
- [ ] O Lançamento (Arauto) reporta dados para a Escala (Alquimista)
- [ ] A Base (Chaveiro) está conectada a todas as camadas superiores

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
   - Modelo mental / framework analítico → Chaveiro (00) → forja-do-conhecimento
   - Técnica de diagnóstico de mercado → Cartógrafo (01) → portal-do-terreno
   - Insight sobre persona / psicologia → Cartógrafo (01) → forja-da-persona
   - Técnica de copywriting → Alquimista (02) → pergaminho-de-copy
   - Estrutura narrativa para vídeo → Bardo (03) → chavideo
   - Estrutura visual para carrossel → Bardo (03) → chavossel
   - Estratégia de campanha → Arauto (04) → mapa-de-campanha
   - Operação / gestão de projetos → Arauto (04) → esteira-notion
   - Métricas ou alavancas de negócio → Alquimista (02) → portal-da-escala
   - Oferta irresistível / stack → Alquimista (02) → forja-de-oferta

2. **Verificar conflito:** existe algo equivalente no plugin alvo? Se sim, é complementar ou substituto?

3. **Gerar proposta de encaixe:** onde especificamente dentro do skill alvo esse conhecimento entra — qual seção, em qual nível de profundidade.

4. **Gerar nota permanente** no formato Zettelkasten para o Chaveiro (00) → forja-do-conhecimento.

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

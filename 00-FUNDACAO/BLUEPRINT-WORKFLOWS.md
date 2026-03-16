# BLUEPRINT DE WORKFLOWS — Chave Mestra
*Fluxos operacionais completos: do diagnóstico à escala.*

---

## VISÃO GERAL

O sistema Chave Mestra opera em **6 fases sequenciais** com um **motor de diagnóstico** (Protocolo do Chaveiro) como porta de entrada universal. Cada fase tem plugins, skills, inputs/outputs e gatilhos automáticos para a próxima.

```
                    ┌──────────────────────┐
                    │  PROTOCOLO DO        │
                    │  CHAVEIRO            │
                    │  (diagnóstico)       │
                    └──────────┬───────────┘
                               │ roadmap personalizado
                    ┌──────────▼───────────┐
              ┌─────┤   FASE 0: FUNDAÇÃO   ├─────┐
              │     └──────────┬───────────┘     │
              │                │                  │
              │     ┌──────────▼───────────┐     │
              │     │  FASE 1: INTELIGÊNCIA│     │
              │     └──────────┬───────────┘     │
              │                │                  │
              │     ┌──────────▼───────────┐     │
              │     │  FASE 2: ESTRATÉGIA  │     │
              │     └──────────┬───────────┘     │
              │                │                  │
              │     ┌──────────▼───────────┐     │
              │     │  FASE 3: CRIAÇÃO     │     │
              │     └──────────┬───────────┘     │
              │                │                  │
              │     ┌──────────▼───────────┐     │
              │     │  FASE 4: OPERAÇÃO    │     │
              │     └──────────┬───────────┘     │
              │                │                  │
              │     ┌──────────▼───────────┐     │
              └────▶│  FASE 5: EVOLUÇÃO    ├─────┘
                    │  (alimenta tudo)     │
                    └──────────────────────┘
```

---

## FASE 0 — FUNDAÇÃO

> *"Quem sou eu e o que defendo?"*

### Objetivo
Definir identidade, voz, universo simbólico e validar autenticidade. Sem isso, tudo que vier depois é genérico.

### Plugins & Skills

| Skill | Plugin | O que faz |
|-------|--------|-----------|
| Forja do Universo | Cartógrafo | Worldbuilding: Primal Branding + StoryBrand + léxico + estética |
| Ritual da Chave | Chaveiro | Valida se a voz é autêntica (teste de verdade) |

### Workflow

```
1. Forja do Universo
   Input:  história pessoal, valores, referências, estilo
   Método: Primal Branding (7 pilares) + StoryBrand (7 elementos)
   Output: DNA de marca (voz, léxico, estética, narrativa fundacional)

2. Ritual da Chave — Teste de Autenticidade
   Input:  DNA de marca gerado
   Método: Ciclo "Giro da Chave" — confrontar com perguntas difíceis
   Output: DNA validado OU revisão (voz copiada detectada → refazer)
```

### Gatilho para próxima fase
✅ DNA de marca validado → **FASE 1**

### Artefatos gerados
- Mapa do Universo (léxico, estética, narrativa)
- Tom de voz documentado (3 adjetivos + frase-guia)
- Ritual da Chave completado

---

## FASE 1 — INTELIGÊNCIA

> *"Onde estou e pra quem falo?"*

### Objetivo
Mapear mercado, público e zeitgeist. Diagnóstico profundo antes de qualquer ação.

### Plugins & Skills

| Skill | Plugin | O que faz |
|-------|--------|-----------|
| Portal do Terreno | Cartógrafo | Mapa do mercado: players, brechas, tendências |
| Forja da Persona | Cartógrafo | SZC + Alma da Persona (Inferno/Purgatório/Paraíso) |

### Workflow

```
1. Portal do Terreno
   Input:  nicho, mercado, produto (ou ideia de produto)
   Método: Análise de concorrência + zeitgeist + brechas
   Output: Mapa do Terreno (oportunidades, riscos, posicionamento)

2. Forja da Persona
   Input:  Mapa do Terreno + DNA de marca (Fase 0)
   Método: SZC (macro) + Alma da Persona com 30 perguntas (micro)
   Output: Persona documentada (dores, desejos, linguagem, nível de consciência)
```

### Gatilho para próxima fase
✅ Persona documentada + Mapa do Terreno → **FASE 2**

### Recomendações cruzadas automáticas
- Se a persona revela que o público é sofisticado → flag para Alquimista usar Copy 3x5 em nível 4-5
- Se o terreno mostra mercado saturado → flag para Estrategista considerar Protocolo Massivo
- Se o terreno mostra brecha clara → flag para Alquimista montar oferta diferenciada

---

## FASE 2 — ESTRATÉGIA

> *"Qual é o plano de ataque?"*

### Objetivo
Definir campanha, calendário, metas e esteira de valor. Transformar inteligência em plano executável.

### Plugins & Skills

| Skill | Plugin | O que faz |
|-------|--------|-----------|
| Mapa de Campanha | Arauto | Plano de lançamento/cruzada com cronograma |
| Forja de Oferta | Alquimista | Stack de valor, garantia, preço, posicionamento |
| Portal da Escala | Alquimista | Diagnóstico de fase do negócio + alavancas |
| Ritual da Chave | Chaveiro | Lua Cheia (planejamento mensal) + Forja Semanal |

### Workflow

```
1. Ritual da Chave — Lua Cheia (mensal)
   Input:  diagnóstico do Chaveiro + Persona + Mapa do Terreno
   Método: Planejamento estratégico mensal
   Output: Prioridades do mês, temas, objetivos

2. Forja de Oferta (se necessário)
   Input:  Persona + Mapa do Terreno
   Método: Equação de valor + stack de bônus + garantia
   Output: Oferta estruturada

3. Mapa de Campanha
   Input:  Oferta + Prioridades + Calendário
   Método: Modalidade de campanha (meteórico, desafio, orgânico, massivo)
   Output: Cronograma com fases, conteúdos necessários, metas por etapa

4. Ritual da Chave — Forja Semanal
   Input:  Campanha ativa
   Método: Pauta da semana + persona + universo
   Output: 7 dias de ação definidos
```

### Gatilho para próxima fase
✅ Campanha mapeada + pauta semanal definida → **FASE 3**

### Recomendações cruzadas automáticas
- Se a campanha é de lançamento → flag para Bardo preparar roteiros de aquecimento
- Se a oferta é nova → flag para Alquimista calibrar copy por nível de consciência
- Se é reposicionamento → flag para voltar à Fase 0 (Forja do Universo)

---

## FASE 3 — CRIAÇÃO

> *"Executar com alma."*

### Objetivo
Produzir conteúdo, copy, roteiros e visuais com método. Aqui o diagnóstico e a estratégia viram output real.

### Plugins & Skills

| Skill | Plugin | O que faz |
|-------|--------|-----------|
| Pergaminho de Copy | Alquimista | Copy 3x5 + Método Carga (calibragem por nível) |
| Headline Generator | Bardo | 30 headlines por lote, variação a cada 5 |
| Script Creator | Bardo | Roteiros virais 60-90s com estrutura validada |
| Chavideo | Bardo | Roteiro de vídeo completo com Progymnasmata |
| Chavossel | Bardo | Carrossel em 10 slides (ensaio visual) |
| Copy Enhancer | Bardo | Otimização de copy para fala natural |
| Script Analyzer | Bardo | Engenharia reversa de virais |
| Sistema de Design | Iluminista | Paleta, tipografia, tema visual |
| Forja de Imagem | Iluminista | Geração de imagens (Gemini) |
| Ponte Figma | Iluminista | Renderização no Figma |
| Arquiteto de Experiência | Iluminista | UX e hierarquia visual |

### Workflow — Conteúdo para Campanha

```
1. Headlines (Bardo)
   Input:  Persona + tema da campanha + universo de marca
   Output: 30 headlines → Lucas seleciona as melhores

2. Roteiros (Bardo)
   Input:  Headlines selecionadas
   Método: Script Creator (estrutura Hook→Intensifier→Content→CTA)
   Output: 6 roteiros por lote → Copy Enhancer otimiza pra fala

3. Copy (Alquimista)
   Input:  Persona + Oferta + nível de consciência do lead
   Método: Copy 3x5 (3 camadas × 5 níveis) + Método Carga
   Output: Textos calibrados (posts, emails, anúncios, páginas)

4. Visual (Iluminista)
   Input:  Roteiros + Copy + DNA de marca
   Método: Sistema de Design → Chavossel (carrosseis) → Figma
   Output: Peças visuais finalizadas

5. Revisão Retórica (diferencial CM)
   Input:  Todo conteúdo produzido
   Método: Checklist Progymnasmata (exercício retórico clássico aplicado)
   Output: Conteúdo refinado — não é só "bonito", é retoricamente sólido
```

### Gatilho para próxima fase
✅ Conteúdo produzido e aprovado → **FASE 4**

---

## FASE 4 — OPERAÇÃO

> *"Máquina rodando."*

### Objetivo
Organizar, publicar, distribuir e trackear. O conteúdo entra no sistema e vira ação no mundo real.

### Plugins & Skills

| Skill | Plugin | O que faz |
|-------|--------|-----------|
| Esteira Notion | Arauto | Popula MINHA ESTEIRA, cria tarefas, organiza calendário |
| Protocolo Massivo | Arauto | Operação intensiva (luxo/urgência/massivo) |
| Publicador Visual | Iluminista | Exporta visuais pro Notion |
| Ritual da Chave | Chaveiro | Giro da Chave (execução diária) |

### Workflow

```
1. Esteira Notion
   Input:  Conteúdos + Cronograma da campanha
   Método: Popular MINHA ESTEIRA + Tarefas + Calendário
   Output: Tudo organizado no Notion com datas e status

2. Giro da Chave (diário)
   Input:  Tarefas do dia (puxadas do Notion)
   Método: Ritual da Chave — ciclo diário
   Output: Execução focada + registro do que foi feito

3. Publicação
   Input:  Conteúdo aprovado + calendário
   Método: Distribuição por plataforma (conforme Mapa de Campanha)
   Output: Conteúdo no ar

4. Monitoramento
   Input:  Métricas das plataformas
   Método: Tracking na Esteira
   Output: Dados de performance → gatilho pra Fase 5
```

### Gatilho para próxima fase
✅ Campanha finalizada OU ciclo mensal completo → **FASE 5**

---

## FASE 5 — EVOLUÇÃO

> *"O que aprendi? O que muda?"*

### Objetivo
Documentar, refletir, refinar. Transformar experiência em conhecimento permanente. **Esta fase alimenta TODAS as outras.**

### Plugins & Skills

| Skill | Plugin | O que faz |
|-------|--------|-----------|
| Forja do Conhecimento | Chaveiro | Zettelkasten + Modelos Mentais + notas permanentes |
| Tesouro dos Erros | Chaveiro | Registro de falhas com causa-raiz e prevenção |
| Ritual da Chave | Chaveiro | Lua Cheia = revisão mensal completa |

### Workflow

```
1. Tesouro dos Erros
   Input:  O que deu errado na campanha/operação
   Método: Registro estruturado (erro + causa-raiz + prevenção + produto)
   Output: Entrada no Tesouro → consulta obrigatória nas próximas execuções

2. Forja do Conhecimento
   Input:  Insights, aprendizados, conexões descobertas
   Método: Zettelkasten (Inbox → Literatura → Permanente → MOC)
   Output: Notas permanentes + Modelos Mentais atualizados

3. Ritual da Chave — Lua Cheia (revisão mensal)
   Input:  Resultados do mês + Tesouro + Zettelkasten
   Método: Reavaliação das 6 dimensões do Protocolo do Chaveiro
   Output: Novo roadmap → volta pra Fase 0, 1, 2 ou 3 conforme necessidade
```

### Gatilhos de retorno

| Descoberta na Fase 5 | Volta para |
|----------------------|------------|
| Voz/posicionamento precisa mudar | Fase 0 (Forja do Universo) |
| Público mudou ou não era quem pensávamos | Fase 1 (Cartógrafo) |
| Estratégia não funcionou | Fase 2 (Mapa de Campanha) |
| Conteúdo não converteu | Fase 3 (Alquimista recalibra) |
| Operação desorganizada | Fase 4 (Esteira Notion) |
| Tudo funcionou | Escalar → Portal da Escala |

---

## WORKFLOWS POR TIPO DE CLIENTE

### Starter Pack — Começando do Zero
```
Chaveiro (diagnóstico) → Fase 0 → Fase 1 → Fase 2 → Fase 3 → Fase 4 → Fase 5
Tempo estimado até primeira campanha: 2-4 semanas
```

### Já Tem Marca — Precisa de Método
```
Chaveiro (diagnóstico) → Ritual da Chave (validar voz) → Fase 1 → Fase 2 → Fase 3
Pula Fase 0 se identidade é sólida. Foco em inteligência + produção com método.
```

### Já Produz — Quer Escalar
```
Chaveiro (diagnóstico) → Fase 5 (analisar o que tem) → Portal da Escala → Fase 2 (nova campanha) → Fase 3
Entra pela análise. Primeiro entende o que funciona, depois escala.
```

### Já Produz — Quer Qualidade
```
Chaveiro (diagnóstico) → Fase 3 (instalar método: 3x5 + Progymnasmata) → Fase 5 (feedback loop)
Foco em elevar a qualidade do que já faz, sem mudar a estrutura.
```

### Cliente Externo (Modo Cliente)
```
Chaveiro (diagnóstico + captura dos 5 elementos do Modo Cliente)
→ Fase 0 (adaptar universo ao cliente)
→ Fase 1-4 (mesmo fluxo, linguagem do cliente)
→ Fase 5 (evolução com entrega de relatório ao cliente)
```

---

## AUTOMAÇÃO — O QUE PODE RODAR NO CLAUDE CODE

| Etapa | Automação possível | Gatilho |
|-------|-------------------|---------|
| Diagnóstico | Chaveiro como conversa guiada → gera roadmap | `/chaveiro diagnostico` |
| Forja do Universo | Worldbuilding assistido → gera DNA | `/cartografo universo` |
| Portal do Terreno | Pesquisa de mercado com web search | `/cartografo terreno` |
| Forja da Persona | SZC + Alma da Persona → gera persona | `/cartografo persona` |
| Headlines | 30 headlines em lote | `/bardo headlines` |
| Roteiros | 6 scripts por lote | `/bardo scripts` |
| Copy | Textos calibrados por nível de consciência | `/alquimista copy` |
| Carrossel | 10 slides estruturados | `/bardo chavossel` |
| Visual | Imagem gerada + Figma | `/iluminista imagem` |
| Notion | Popular esteira com conteúdo | `/arauto esteira` |
| Erros | Registrar no Tesouro | `/chaveiro erro` |
| Notas | Capturar no Zettelkasten | `/chaveiro nota` |

---

## O CICLO NUNCA PARA

```
SABER                              FAZER
┌──────────────┐                ┌──────────────┐
│ Zettelkasten │──── notas ────▶│  Conteúdo    │
│ Modelos      │── frameworks ─▶│  Produtos    │
│ Mentais      │── decisões ──▶│  Estratégia  │
│ Pergaminhos  │── templates ─▶│  Execução    │
│ Progymnasmata│── retórica ──▶│  Qualidade   │
└──────────────┘                └──────────────┘
      ▲                               │
      │     erros, feedback,           │
      └───── experiência prática ──────┘
```

**O que diferencia a Chave Mestra de qualquer outro sistema:**
- Não é assembly line — é **ciclo vivo** de experimentação e refinamento
- Cada erro é tesouro, cada acerto é modelo mental, cada conteúdo é exercício retórico
- O clássico e o inovador coexistem: Aristóteles + growth hack, Zettelkasten + viralização
- Autenticidade é pré-requisito, não feature — o Ritual da Chave garante isso
- O sistema cresce com quem o usa — as ciências expandem, os modelos se refinam, os pergaminhos se multiplicam

---

*Blueprint de Workflows — Sistema Chave Mestra. Arquitetado por Lucas Grigo, 2026.*

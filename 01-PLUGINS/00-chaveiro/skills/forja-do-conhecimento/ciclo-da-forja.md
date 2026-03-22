# Ciclo da Forja — Sistema de Assimilação Periódica

Documento de referência completo para o sistema de revisão, incorporação e rastreamento de conhecimento do Zettelkasten Chave Mestra.

**Princípio:** capturar é fácil. Assimilar é o trabalho real. Sem varredura periódica, o Zettelkasten vira cemitério de boas intenções.

---

## 1. Visão Geral

O Ciclo da Forja transforma notas capturadas em arsenal utilizável através de 3 camadas de revisão com frequências diferentes:

```
Captura (contínua)
    ↓
Camada 1 — Varredura Semanal [15-30min]
    Inbox → classificar → mover ou descartar
    ↓
Camada 2 — Destilação Quinzenal [45-60min]
    Em processamento → refinar → conectar → avaliar potencial
    ↓
Camada 3 — Incorporação Mensal [1-2h]
    Conectadas → usar em output real → marcar destino
    + Radar do Especialista (métricas + tendências)
```

---

## 2. Propriedades de Assimilação (Notion)

Estas propriedades foram adicionadas ao banco de dados Notas (`collection://6e4c8442-1596-4eab-ab69-a7917e93e046`):

| Propriedade | Tipo | Opções | Função |
|---|---|---|---|
| **Incorporada** | Checkbox | — | A nota já gerou output real? |
| **Destino de Uso** | Multi-select | Conteúdo, Copy, Oferta, Produto, Worldbuilding, Aula, Exercício, Insight Pessoal | Onde foi efetivamente usada |
| **Potencial** | Select | Semente, Broto, Árvore, Fruto, Esgotado | Maturidade percebida |
| **Última Revisão** | Date | — | Data da última revisão consciente |
| **Recorrência** | Number | — | Quantas vezes o tema apareceu |

### Metáfora do Potencial (escala botânica)

| Nível | Significado | Ação típica |
|---|---|---|
| **Semente** | Ideia bruta, pode virar algo | Aguardar mais contexto, conectar |
| **Broto** | Conexões identificadas, formato emergindo | Refinar argumento, testar aplicação |
| **Árvore** | Insight maduro, pronto para uso | Incorporar em output, marcar destino |
| **Fruto** | Já gerou múltiplos outputs | Manter como referência, pode virar MOC |
| **Esgotado** | Já extraiu tudo que podia | Arquivar ou consolidar em nota maior |

---

## 3. Views do Ciclo da Forja (Notion)

### Para Varredura Semanal

**📥 Inbox Pendente** (Table)
- Filtro: Status = Capturada
- Ordenação: Data DESC (mais recentes primeiro)
- Colunas: Nota, Formato, Ciência, Tags, Data, Autor
- Ação: classificar cada nota (Tipo, Zona, Formato, Ciência, Tags) e mover para "Em processamento"

### Para Destilação Quinzenal

**🔥 Em Maturação** (Board por Ciência)
- Filtro: Status = Em processamento
- Agrupado por: Ciência
- Colunas: Nota, Formato, Potencial, Tags, Data
- Ação: reescrever em voz própria, conectar, avaliar Potencial

### Para Incorporação Mensal

**💎 Prontas Não Usadas** (Table)
- Filtro: Status = Conectada + Incorporada = false
- Ordenação: Potencial ASC
- Colunas: Nota, Formato, Potencial, Ciência, Tags, Domínio, Última Revisão
- Ação: decidir destino de cada nota (conteúdo? copy? oferta? produto?)

**🌱 Sementes de Alto Potencial** (Gallery)
- Filtro: Potencial = Semente ou Broto + Incorporada = false
- Ordenação: Data DESC
- Colunas: Nota, Formato, Potencial, Ciência, Tags
- Ação: revisar se já amadureceram, reclassificar

**⏰ Revisão Vencida** (Table)
- Filtro: Status ≠ Capturada + Última Revisão vazia
- Ordenação: Data ASC (mais antigas primeiro)
- Colunas: Nota, Status, Formato, Potencial, Ciência, Data, Última Revisão
- Ação: revisar e atualizar Última Revisão

### Para Análise de Padrões

**✅ Já Incorporadas** (Board por Destino de Uso)
- Filtro: Incorporada = true
- Agrupado por: Destino de Uso
- Colunas: Nota, Formato, Produto, Ciência, Tags
- Uso: ver para onde o conhecimento está fluindo

**🔁 Temas Recorrentes** (Board por Tags)
- Sem filtro (todas as notas)
- Agrupado por: Tags
- Colunas: Nota, Formato, Status, Ciência, Recorrência
- Uso: identificar temas obsessivos e clusters

**🎯 Radar por Ciência** (Board por Ciência)
- Sem filtro (todas as notas)
- Agrupado por: Ciência
- Ordenação: Data DESC
- Colunas: Nota, Formato, Status, Potencial, Tags, Data
- Uso: ver distribuição do estudo e tendências

---

## 4. Protocolo de Cada Camada

### Camada 1 — Varredura Semanal

**Frequência:** toda semana (integrada à Forja Semanal do Ritual da Chave)
**Duração:** 15-30 minutos
**View:** 📥 Inbox Pendente

**Checklist:**
1. Abrir 📥 Inbox Pendente
2. Para cada nota:
   - [ ] Formato está correto?
   - [ ] Tipo atribuído (Flash/Literatura/Permanente)?
   - [ ] Zona atribuída?
   - [ ] Pelo menos 1 Ciência marcada?
   - [ ] Pelo menos 1 Tag marcada?
   - [ ] Merece processamento? → Status: Em processamento
   - [ ] Não merece? → Deletar ou mover para Arquivo
3. Notas em Inbox há mais de 7 dias → processar ou deletar (regra rígida)

**Via agente:** "varre minha inbox" → o agente lista as notas pendentes e sugere classificações.

### Camada 2 — Destilação Quinzenal

**Frequência:** a cada 2 semanas
**Duração:** 45-60 minutos
**View:** 🔥 Em Maturação

**Checklist:**
1. Abrir 🔥 Em Maturação
2. Para cada nota em processamento:
   - [ ] Reescrever o argumento em voz própria (não é resumo — é posição)
   - [ ] Identificar pelo menos 2 conexões com outras notas
   - [ ] Preencher campo Evidência
   - [ ] Atribuir Potencial (Semente/Broto/Árvore)
   - [ ] Verificar Recorrência (tema já apareceu? incrementar)
   - [ ] Se pronta → Status: Conectada
   - [ ] Atualizar Última Revisão com data de hoje

**Via agente:** "destila as notas" → o agente apresenta cada nota em maturação e sugere conexões com base no banco existente.

### Camada 3 — Incorporação Mensal

**Frequência:** 1x por mês (integrada à Lua Cheia do Ritual da Chave)
**Duração:** 1-2 horas
**Views:** 💎 Prontas Não Usadas + 🌱 Sementes + ⏰ Revisão Vencida

**Checklist:**
1. **Tesouro adormecido** — abrir 💎 Prontas Não Usadas:
   - [ ] Para cada nota Conectada não incorporada, decidir:
     - Vira conteúdo? → Destino: Conteúdo
     - Vira copy? → Destino: Copy
     - Vira oferta/produto? → Destino: Oferta/Produto
     - Vira aula? → Destino: Aula
     - Alimenta worldbuilding? → Destino: Worldbuilding
     - Exercício de Progymnasmata? → Destino: Exercício
     - Insight pessoal (não publicável)? → Destino: Insight Pessoal
   - [ ] Marcar Incorporada ✅ + Destino de Uso + linkar Produto se aplicável

2. **Sementes** — abrir 🌱 Sementes de Alto Potencial:
   - [ ] Alguma Semente virou Broto? Reclassificar
   - [ ] Algum Broto virou Árvore? Mover para Conectada
   - [ ] Sementes velhas sem evolução? → Esgotado ou deletar

3. **Revisão vencida** — abrir ⏰ Revisão Vencida:
   - [ ] Atualizar Última Revisão para todas as notas revisadas
   - [ ] Notas antigas sem revisão → reavaliar relevância

4. **Radar do Especialista** — abrir 🎯 Radar + 🔁 Temas:
   - [ ] Quais Ciências estão crescendo?
   - [ ] Quais Tags dominam? (temas obsessivos)
   - [ ] Há algum Domínio emergente?
   - [ ] Tendência de interesse → serve como input para próximo mês de conteúdo

**Via agente:** "incorporação mensal" ou "radar do especialista" → o agente executa a análise completa.

---

## 5. Métricas do Especialista

O agente pode calcular estas métricas sob demanda a partir do banco Notion:

### Métricas de Pipeline

| Métrica | Cálculo | Interpretação |
|---|---|---|
| **Taxa de Assimilação** | Notas Conectada÷Publicada / Total de notas | >40% = bom, <20% = capturando demais sem processar |
| **Taxa de Incorporação** | Incorporada=true / Total Conectada | >30% = bom, <10% = muito conhecimento parado |
| **Inbox Stale Rate** | Notas Capturada >7 dias / Total Capturada | >50% = varredura semanal falhando |
| **Velocidade da Forja** | Tempo médio Capturada → Publicada | Benchmark pessoal — melhorar ao longo do tempo |

### Métricas de Tendência

| Métrica | Cálculo | Interpretação |
|---|---|---|
| **Picos de Interesse** | Top 3 Ciências por volume (últimos 30d) | Onde a mente está gravitando |
| **Habilidades Emergentes** | Domínios com >5 notas novas no mês | Competências em formação |
| **Temas Obsessivos** | Tags com Recorrência média >3 | Padrões de pensamento dominantes |
| **Diversidade Cognitiva** | Número de Ciências ativas | <3 = afunilando demais, 5 = ideal |
| **Destinos Dominantes** | Top 3 Destino de Uso | Onde o conhecimento está sendo usado mais |

### Como Pedir ao Agente

```
"radar do especialista"
→ Calcula todas as métricas e apresenta dashboard textual

"minhas tendências dos últimos 30 dias"
→ Foca em picos de interesse e habilidades emergentes

"o que posso usar pra conteúdo essa semana?"
→ Lista notas com Potencial = Árvore/Broto + não incorporadas + Tags relevantes

"taxa de assimilação"
→ Calcula e compara com o mês anterior (se dados disponíveis)
```

---

## 6. Integração com o Ecossistema

### Com Rituais (Ritual da Chave)

| Ritual | Camada do Ciclo | Ação |
|---|---|---|
| **Giro da Chave** (diário) | — | Captura rápida, zero processamento obrigatório |
| **Forja Semanal** | Camada 1 | Varredura da Inbox como parte da pauta semanal |
| **Lua Cheia** (mensal) | Camada 2 + 3 | Destilação + Incorporação + Radar como parte do planejamento |

### Com Outros Módulos

| Módulo | Como o Ciclo da Forja alimenta |
|---|---|
| **Tesouro dos Erros** | Notas de Projeto com padrões negativos → entrada no Tesouro |
| **Modelos Mentais** | Nota Permanente confirmada em 3+ contextos → candidata a Modelo Mental |
| **Insumos Biográficos** | Notas Experiência/Biografia incorporadas → arsenal narrativo para Bardo/Copy |
| **Evolução de Plugins** | Notas que contradizem regras atuais → gatilho de atualização de SKILL.md |

### Com Plugins (como produto)

| Destino de Uso | Plugin que consome |
|---|---|
| Conteúdo | Bardo (roteiros, carrosséis, headlines) |
| Copy | Alquimista (Copy 3x5, Método Carga) |
| Oferta | Alquimista (Forja de Oferta) |
| Produto | Arauto (esteira, cronogramas) |
| Worldbuilding | Cartógrafo (Forja do Universo) |
| Aula | Produto direto (Pergaminhos, A Ordem) |
| Exercício | Progymnasmata (prática deliberada) |
| Insight Pessoal | Posicionamento, decisões estratégicas |

---

## 7. Automação via Agente Claude

O Ciclo da Forja foi desenhado para ser executado inteiramente via agente Claude + Notion MCP. Nenhuma ferramenta externa é necessária.

### O que o agente pode fazer

1. **Listar notas por view** — consultar qualquer view via Notion MCP
2. **Sugerir classificações** — analisar conteúdo da nota e propor Tipo, Zona, Ciência, Tags
3. **Identificar conexões** — buscar notas com Tags/Ciência/Domínio semelhantes
4. **Calcular métricas** — consultar banco e computar taxas, picos, tendências
5. **Atualizar propriedades** — marcar Incorporada, Destino, Potencial, Última Revisão
6. **Gerar relatório** — dashboard textual do Radar do Especialista

### Possibilidades futuras (não dependentes)

- **n8n / Make / Zapier** → automação de captura (RSS → Notion, email → nota, bookmark → nota)
- **NotebookLM** → processamento de notas longas, síntese de múltiplas fontes
- **Obsidian** → grafo visual de conexões, backlinks automáticos
- **API do Notion** → dashboard visual com gráficos de métricas

**Regra:** o sistema presume e recomenda essas ferramentas, mas NUNCA depende delas. Tudo funciona do zero com Claude + Notion.

---

## 8. Como Produto (Pergaminho do Conhecimento)

Este sistema é o coração do **Pergaminho do Conhecimento** — o produto que diferencia CM de qualquer curso de marketing.

**O que o cliente recebe:**
1. Banco Zettelkasten configurado (todas as propriedades + views)
2. Templates de captura para os 16 formatos
3. Protocolo do Ciclo da Forja (3 camadas documentadas)
4. Radar do Especialista como dashboard
5. Integração com Rituais (Giro da Chave, Forja Semanal, Lua Cheia)

**Pitch:**
> "Você não precisa de mais conteúdo. Precisa de um sistema que transforme tudo que você já consome em arsenal utilizável — conteúdo, copy, ofertas e posicionamento como subproduto natural do seu pensamento."

**Diferencial:** ninguém no mercado de infoprodutos oferece isso. Cursos ensinam a criar conteúdo. CM ensina a **processar a própria mente** e extrair resultados como consequência.

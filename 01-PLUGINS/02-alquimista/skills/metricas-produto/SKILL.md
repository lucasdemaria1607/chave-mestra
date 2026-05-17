---
name: metricas-produto
description: Usar quando o usuário pedir "registra métricas", "como foi o lançamento", "retrospectiva do produto", "dashboard do produto", "quanto converti", "CAC do produto", "resultado do lançamento", "preenche as métricas", "analisa o desempenho", ou qualquer análise de performance de produto pós-lançamento.
version: 1.0
layer: Camada 6 — Escala
role: Registro e interpretação de métricas por produto — performance de lançamentos, diagnóstico de vazamento no funil, retrospectiva estruturada, recomendações de ajuste
inputs: produto (nome), dados do lançamento (vendas, faturamento, leads alcançados, custo), período
outputs: métricas preenchidas na página do produto + diagnóstico de resultado + recomendações de ajuste para próximo ciclo
feeds-into: Portal da Escala (diagnóstico de fase), Tesouro dos Erros (aprendizados), Forja de Oferta (ajustes), Mapa de Campanha (o que funcionou)
---

# Métricas do Produto — Protocolo de Registro e Análise

Produto que não tem número não tem diagnóstico. Métricas não são só faturamento — são o mapa de onde o sistema está funcionando e onde está vazando. Cada campo preenchido é uma decisão mais precisa no próximo ciclo. O objetivo não é parecer bem nos números: é aprender o que funcionou e o que precisa mudar.

---

## Quando Usar

| Momento | Ação |
|---|---|
| Fim de um período de vendas | Registrar métricas do ciclo |
| Fim de um lançamento completo | Retrospectiva completa |
| Planejando próximo lançamento | Consultar métricas anteriores |
| Diagnóstico de fase (portal-da-escala) | Alimentar com dados reais |
| Conversão baixa percebida | Diagnóstico de vazamento no funil |

---

## As 8 Métricas Essenciais

| Métrica | Como calcular | Para que serve |
|---|---|---|
| **Leads alcançados** | Pessoas que tiveram contato com a oferta | Medir alcance real |
| **Leads qualificados** | Pessoas que responderam / demonstraram interesse | Qualidade da segmentação |
| **Vendas realizadas** | Compras confirmadas | Volume de conversão |
| **Faturamento bruto** | Vendas × ticket | Resultado financeiro bruto |
| **Taxa de conversão** | Vendas ÷ Leads alcançados × 100 | Eficiência da oferta |
| **CAC** | Custo total do lançamento ÷ Vendas | Custo por cliente |
| **Depoimentos coletados** | Número de depoimentos recebidos | Prova social gerada |
| **Reembolsos** | Número e % de reembolsos | Satisfação e fit do produto |

### Benchmarks de Referência

| Tipo de lançamento | Conversão esperada |
|---|---|
| Meteórico (base quente) | 3–8% |
| Desafio (base morna) | 1–4% |
| Lançamento Interno (lista qualificada) | 0,5–2% |
| Prospecção ativa (DM direto, de quem respondeu) | 5–15% |
| Orgânico sem aquecimento | 0,1–0,5% |

---

## Protocolo de Registro — 5 Etapas

### Etapa 1 — Localizar o Produto

```
notion-search: "[nome do produto]"
→ Abrir página do produto na MINHA ESTEIRA
→ Localizar seção 📊 MÉTRICAS DO PRODUTO
```

### Etapa 2 — Coletar os Dados

Perguntar ao usuário:

1. Quantas pessoas viram a oferta (posts, DMs enviados, tamanho da lista)?
2. Quantas responderam ou demonstraram interesse?
3. Quantas compraram?
4. Qual foi o faturamento total?
5. Qual foi o custo do lançamento (ads, ferramentas, tempo — estimativa)?
6. Quantos depoimentos recebeu?
7. Houve reembolsos? Quantos?

### Etapa 3 — Calcular Métricas Derivadas

```
Taxa de conversão = Vendas ÷ Leads alcançados × 100
CAC = Custo total ÷ Vendas  (se custo = 0 → registrar como "Orgânico")
LTV estimado = Ticket médio × compras futuras esperadas
Margem líquida = Faturamento bruto - Custo total ÷ Faturamento bruto × 100
```

### Etapa 4 — Atualizar a Tabela no Notion

Usar `notion-update-page` com `command: update_content` para preencher a tabela de métricas na seção 📊 do produto.

### Etapa 5 — Gerar Retrospectiva

Estruturar em 3 blocos obrigatórios:

**O que funcionou:**
- Qual fase da campanha teve mais resposta?
- Qual peça de conteúdo gerou mais cliques/respostas?
- Qual objeção foi mais fácil de tratar?
- Qual canal performou melhor?

**O que não funcionou:**
- Onde ocorreu o maior vazamento no funil?
- Qual objeção foi mais difícil de tratar?
- Qual fase do lançamento ficou mais fraca?
- O produto entregou o que prometeu?

**O que ajustar no próximo ciclo:**
- Oferta: preço, formato, promessa, stack de bônus?
- Copy: ângulo, N-level, ganchos?
- Canal: onde está a audiência mais quente?
- Produto: o que o cliente pediu que não estava incluso?

---

## Diagnóstico de Vazamento no Funil

```
FUNIL COMPLETO:
Impressões → Leads → Interessados → Compradores

ONDE ESTÁ QUEBRANDO?

Impressões → Leads (taxa < 5%):
→ Problema de alcance ou segmentação
→ Ação: revisar canal, aumentar volume ou mudar público

Leads → Interessados (taxa < 20%):
→ Problema na abertura ou na primeira mensagem
→ Ação: revisar template de abordagem e gancho

Interessados → Compradores (taxa < 10%):
→ Problema na oferta, preço ou prova social
→ Ação: revisar copy de oferta, adicionar prova, ajustar preço

Conversão baixa em todo o funil:
→ Problema de aquecimento insuficiente
→ Ação: mais conteúdo de aquecimento antes do próximo lançamento
```

---

## Projeções para o Próximo Ciclo

Com base nos dados registrados:

```
Meta de vendas próximo lançamento: [N] × [1 + crescimento desejado %]
Alcance necessário: Meta ÷ Taxa de conversão atual
Custo projetado: CAC atual × Meta de vendas

Cenários:
- Mantendo tudo igual: [faturamento projetado]
- Melhorando conversão em 1%: [faturamento projetado]
- Dobrando alcance: [faturamento projetado]
```

---

## Integração com o Portal da Escala

Após registrar as métricas, verificar com o `portal-da-escala` se houve mudança de fase:

| Fase atual | Indicadores |
|---|---|
| Fase 1 — Validação | Primeiras vendas, conversão irregular, sem sistema |
| Fase 2 — Estabilização | Vendas recorrentes, CAC definido, produto validado |
| Fase 3 — Escala | Lançamentos repetíveis, taxa estável, considera paid traffic |
| Fase 4 — Otimização | Funil estruturado, métricas previsíveis, alta alavancagem |

---

## Registro no Tesouro dos Erros

Para cada insight da retrospectiva — positivo ou negativo — registrar:

```
Ativar Chaveiro → Tesouro dos Erros
Tipo: Aprendizado de Lançamento
Produto: [nome]
Contexto: [o que aconteceu]
Aprendizado: [o que isso ensina sobre o sistema ou o mercado]
Próxima ação: [o que mudar ou manter no próximo ciclo]
```

**Regra:** retrospectiva em até 48h após o lançamento — enquanto os dados e a memória estão frescos.

---

## Regras

1. **Registrar sempre** — lançamento sem métrica é experiência sem aprendizado
2. **Dados reais** — não arredondar para cima; o benchmark serve para melhorar, não para parecer bem
3. **Granularidade por fase** — registrar conversão por fase quando possível (pré / lançamento / pós)
4. **Retrospectiva em 48h** — não deixar passar mais que 2 dias após o encerramento
5. **Vincular ao Tesouro** — cada retrospectiva gera pelo menos 1 registro
6. **Projetar antes de planejar** — sempre consultar as métricas do último ciclo antes de planejar o próximo

---

## Referências Cruzadas

- `criar-produto-esteira/SKILL.md` — cria a estrutura de métricas inicial (zerada) no produto
- `prospeccao-ativa/SKILL.md` — dados de conversão de prospecção alimentam esta skill
- `portal-da-escala/SKILL.md` — usa as métricas para diagnosticar fase e alavancas de escala
- `esteira-notion/SKILL.md` — cronogramas de lançamento são a fonte das métricas operacionais
- `tesouro-dos-erros/SKILL.md` — retrospectiva sempre gera registros aqui
- `mapa-de-campanha/SKILL.md` — próxima campanha é planejada com base nas métricas desta

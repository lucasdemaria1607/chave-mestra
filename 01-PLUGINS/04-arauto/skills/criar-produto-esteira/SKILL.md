---
name: criar-produto-esteira
description: Usar quando o usuário pedir "cria novo produto na esteira", "novo produto", "adiciona produto", "cria produto no sistema", "novo infoproduto", ou qualquer ação de criar um produto completo no sistema CM com todas as seções e vínculos.
version: 1.0
layer: Camada 4 — Lançamento (operacional)
role: Orquestra a criação completa de um novo produto na MINHA ESTEIRA — página, esquema, tarefas e vínculos com todos os setores do sistema
inputs: tipo de produto, nome, preço, data prevista de lançamento
outputs: produto completo no Notion com todas as seções preenchidas + tarefas criadas no DB Tarefas + vínculo ao Zettelkasten
feeds-into: Mapa de Campanha (cronograma), Prospecção Ativa (CRM de leads), Métricas do Produto (tracking pós-lançamento), Esteira Notion (população de cronogramas)
---

# Criar Produto na Esteira — Protocolo de Criação Completa

A criação de um produto no sistema CM não é só adicionar uma linha num banco de dados. É inaugurar um hub: a página do produto vira o ponto de convergência de todo conteúdo, campanha, entrega, prospecção e métrica relacionados a ele. Nenhuma peça fica solta — tudo está vinculado ao produto desde o dia zero.

---

## Arquitetura de Vínculos — O Produto Como Hub

```
                    PRODUTO (MINHA ESTEIRA)
                         hub central
                              │
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
  ANTES (insumo)        DURANTE (opera)        DEPOIS (resultado)
       │                      │                      │
  Zettelkasten           DB Conteúdo            Tesouro dos Erros
  ORIGEM do produto      orgânico vinculado     aprendizados
       │                      │
  Alma da Persona         DB Tarefas
  Terreno mapeado         checklist operac.
       │                      │
  Forja de Oferta         Cronogramas
  Brief preenchido        de lançamento
                               │
                          Criativos + Depoimentos
                          (Iluminista + pós-compra)
```

---

## Pré-Requisitos

Antes de criar o produto, verificar no **Dossiê CM**:

| Pré-requisito | Ideal ter | Se não existir |
|---|---|---|
| Persona mapeada | Forja da Persona | ⚠️ Criar com persona provisória — marcar como `[sem contexto de persona — a validar]` |
| Oferta esboçada | Forja de Oferta | ⚠️ Preencher OFERTA brief com promessa provisória |
| Posicionamento | Forja do Universo | Opcional — pode ser preenchido depois |

---

## Etapa 1 — Coletar Informações

Perguntar ao usuário:

1. **Tipo de produto:** Curso / Mentoria / Workshop / Comunidade / Consultoria / Low Ticket / Isca Digital
2. **Nome provisório** (pode mudar depois)
3. **Preço** (ou faixa: low ticket / mid / high)
4. **Data prevista de lançamento** (ou "a definir")
5. **Formato:** Individual / Grupo pequeno (<30) / Escala (30+)

---

## Etapa 2 — Criar a Página na MINHA ESTEIRA

```
Usar: notion-create-pages
Parent: data_source_id → ver tabela de workspace abaixo

Propriedades:
- NOME DO PRODUTO: [nome coletado]
- STATUS: "Rascunho"
- PREÇO ESCOLHIDO: [opção mais próxima do schema]
- date:DATA DE LANÇAMENTO:start: [data se informada | omitir se "a definir"]
```

### Workspace — Regra de Roteamento

| Modo | Workspace | data_source_id da MINHA ESTEIRA |
|---|---|---|
| Modo CM (Lucas) | Sistema Chave Mestra - Lucas Grigo | `25cfc122-de3b-8131-9284-000b78f0406d` |
| Modo Cliente Externo | Sistema do Cliente | Ler do Dossiê CM do cliente |

**⚠️ Verificação antes de criar:** confirmar o workspace correto. Em caso de dúvida, fazer `notion-fetch` no Zettelkasten e confirmar que `ancestor-8` = `245fc122de3b80e1a508cf0988ab6227`.

---

## Etapa 3 — Preencher as Seções do Produto

Após criar a página, ler o conteúdo atual com `notion-fetch` e usar `notion-update-page` com `command: update_content` para preencher cada seção.

### 3A — OFERTA Brief

Com o que foi coletado:
- **Mecanismo Único:** diferencial do produto
- **Promessa Central:** transformação em X tempo para Y pessoa
- **Inimigo Narrativo:** o culpado externo que tem impedido o resultado
- **N-level do Público:** N3 (consciente da solução) para produtos novos; N4–N5 para validados
- **Objeções Principais:** 3 objeções padrão do tipo de produto

### 3B — ESQUEMA DO PRODUTO (por tipo)

**Curso:**
```
Módulo 1 — [Nome] → [objetivo de aprendizado] → [duração]
Módulo 2 — [Nome] → [objetivo de aprendizado] → [duração]
Módulo 3 — [Nome] → [objetivo de aprendizado] → [duração]
[Bônus se houver]
Carga horária total: X horas
Formato: Gravado / Ao vivo / Híbrido
Canal de suporte: WhatsApp / Telegram / Plataforma
```

**Mentoria (Grupo ou Individual):**
```
Sessão 0 — Diagnóstico e alinhamento de expectativas
Sessão 1 — [tema] → [entregável]
Sessão 2 — [tema] → [entregável]
...
Check-ins entre sessões: [frequência + canal]
Materiais de apoio: [o que é entregue]
Duração total: X semanas / meses
```

**Workshop:**
```
Parte 1 — [nome] → [duração] → [entregável ao final]
Parte 2 — [nome] → [duração] → [entregável ao final]
Parte 3 — [nome] → [duração] → [entregável ao final]
Material de apoio: [templates, PDFs]
Formato: Ao vivo / Gravado
```

**Comunidade:**
```
Frequência de encontros: [semanal / quinzenal / mensal]
Formato dos encontros: [duração + estrutura]
Canal principal: [WhatsApp / Telegram / Discord / Circle]
Conteúdo recorrente: [o que é entregue todo ciclo]
Benefícios de acesso: [o que o membro tem disponível]
```

**Low Ticket / Isca:**
```
Formato: [PDF / Vídeo / Template / Checklist / Mini-curso]
Entregável principal: [o que o cliente recebe]
Tamanho: [páginas / minutos / módulos]
Resultado imediato: [o que o cliente consegue fazer logo após consumir]
```

### 3C — MÉTRICAS

Criar tabela de tracking zerada — preencher após cada lançamento:
- Leads alcançados / Vendas realizadas / Faturamento bruto
- Taxa de conversão / CAC / Depoimentos coletados / Reembolsos

### 3D — ENTREGA

Preencher com fluxo padrão para o tipo:

| Etapa | Ação | Prazo após compra |
|---|---|---|
| 1 | Mensagem de boas-vindas | Imediato |
| 2 | Acesso ao produto / grupo | Até 1h |
| 3 | Material de onboarding | Até 24h |
| 4 | Check-in de primeiro acesso | Dia 3 |
| 5 | Coleta de depoimento | Ao encerrar |

### 3E — PROSPECÇÃO ATIVA

Criar estrutura base:
- Canal e template de primeiro contato para este produto
- Tabela de objeções (vazia — pronta para o campo)
- Tabela de leads (vazia — pronta para uso)

---

## Etapa 4 — Criar Tarefas no DB Tarefas

```
DB Tarefas: collection://25cfc122-de3b-8134-9d97-000bafa8c6fc
```

Criar 12–15 tarefas padrão:

| Tarefa | Fase | Prazo relativo ao lançamento |
|---|---|---|
| Definir nome comercial definitivo | Fundação | D-30 |
| Preencher OFERTA brief completo (Alquimista) | Fundação | D-25 |
| Gravar / preparar o produto | Produção | D-20 |
| Definir mecanismo de pagamento (Pix / plataforma) | Comercial | D-15 |
| Criar material de vendas (copy / página) | Comercial | D-10 |
| Coletar 1–3 provas ou resultados próprios | Comercial | D-7 |
| Planejar campanha (Arauto → Mapa de Campanha) | Lançamento | D-7 |
| Popular cronograma no Notion (Arauto → Esteira Notion) | Lançamento | D-5 |
| Publicar conteúdo de pré-lançamento | Lançamento | D-3 a D-1 |
| Abrir vendas + iniciar prospecção ativa | Lançamento | D0 |
| Follow-up de leads que não compraram | Pós-lançamento | D+3 |
| Coletar depoimentos dos compradores | Pós-lançamento | D+14 |
| Registrar métricas na seção MÉTRICAS | Retrospectiva | D+21 |
| Registrar aprendizados no Tesouro dos Erros | Retrospectiva | D+21 |

---

## Etapa 5 — Vincular ao Zettelkasten (ORIGEM)

Buscar no Zettelkasten notas relevantes ao tema do produto:

```
notion-search: query = "[tema central do produto]"
data_source_url: collection://6e4c8442-1596-4eab-ab69-a7917e93e046
```

Registrar na seção ORIGEM da página do produto os títulos das notas que fundamentam este produto. Isso fecha o loop: **conhecimento acumulado → produto que monetiza esse conhecimento**.

---

## Etapa 6 — Confirmar ao Usuário

```
Produto criado: [nome]
Status: Rascunho
Workspace: [Lucas Grigo / Nome do cliente]

✅ Página na MINHA ESTEIRA com todas as seções
✅ Esquema do produto ([tipo]) preenchido
✅ OFERTA brief com dados coletados
✅ Tabela de métricas criada (vazia)
✅ Fluxo de entrega estruturado
✅ CRM de prospecção pronto
✅ [N] tarefas criadas no DB Tarefas (campo Produto vinculado)
✅ ORIGEM vinculada ao Zettelkasten

Próximos passos:
1. Preencher OFERTA brief completo → Alquimista → forja-de-oferta
2. Planejar campanha → Arauto → mapa-de-campanha
3. Iniciar prospecção ativa → Arauto → prospeccao-ativa
```

---

## Regras

1. **Nunca criar produto sem coletar as 5 informações da Etapa 1**
2. **Workspace certo antes de criar** — verificar Modo CM vs. Modo Cliente Externo
3. **Nunca hardcode IDs de data-source** — sempre ler do produto específico após criação
4. **Tarefas com prazo relativo** — usar D-30, D-20 etc.; o usuário ajusta para datas reais
5. **ORIGEM sempre preenchida** — produto sem raiz no Zettelkasten é produto sem argumento de autoridade

---

## Referências Cruzadas

- `esteira-notion/SKILL.md` — popula cronogramas de lançamento dentro do produto criado
- `mapa-de-campanha/SKILL.md` — planeja a campanha de lançamento
- `prospeccao-ativa/SKILL.md` — ativa o CRM de leads e venda direta
- `forja-de-oferta/SKILL.md` — estrutura a oferta que preenche o brief do produto
- `metricas-produto/SKILL.md` — registra e interpreta métricas pós-lançamento
- `portal-da-escala/SKILL.md` — diagnóstico de fase baseado nas métricas
- `tesouro-dos-erros/SKILL.md` — retrospectiva de cada lançamento vai aqui

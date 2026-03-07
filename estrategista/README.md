# Estrategista — Mapa de Campanha

Plugin 06 do Arsenal Chave Mestra. Planeja campanhas completas com diagnóstico de modalidade (Meteórico/Desafio/Interno/Protocolo Massivo), cronograma dia a dia e copy por fase.

## O que faz

O arco dramático completo do lançamento — da primeira mensagem ao fechamento do carrinho. Cada campanha é uma história com 4 atos. Diagnóstica a modalidade correta pelo cruzamento de temperatura da audiência, ticket, tempo disponível e objetivo, e gera o cronograma beat a beat com copy pronta por fase.

## Quando usar

- "Planeja uma campanha de lançamento"
- "Mapa de Campanha", "meteórico", "desafio 7 dias", "lançamento interno"
- "Cronograma de lançamento", "como vou lançar esse produto"
- "Que modalidade usar para esse produto?"

## Skill

- `mapa-de-campanha` — 4 modalidades + diagnóstico + cronograma + copy por fase

## Output

Modalidade indicada + cronograma completo (dia a dia) + copy por fase (pré-lançamento, aquecimento, abertura de carrinho, fechamento).

## Integração no Arsenal

```
Cartógrafo (01)         → [estado do mercado informa modalidade]
Oráculo (02)            → [Céu Particular informa promessa de cada fase]
Alquimista (03)         → [proporção C1/C2/C3 por fase da campanha]
                       ↓
            ESTRATEGISTA (06)
                       ↓
Arquiteto (07)          → [cronograma é populado no Notion]
Tesoureiro (08)         → [métricas pós-lançamento alimentam diagnóstico de escala]
```

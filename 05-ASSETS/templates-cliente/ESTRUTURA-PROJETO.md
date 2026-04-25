# Estrutura Padrão de Projeto — Cliente Chave Mestra

> Duplicar esta estrutura para cada novo cliente. Substituir `[CLIENTE-NOME]` pelo slug do cliente (ex: `beatriz-lima`, `studio-zen`, `pedro-coach`).

---

## Estrutura de Pastas

```
[CLIENTE-NOME]/
│
├── 00-DOSSIE/
│   └── dossie.md                    ← master doc — único arquivo de contexto do projeto
│
├── 01-BRIEFING/
│   ├── briefing-inicial.md          ← captura dos 5 elementos + contexto inicial
│   ├── diagnostico-6d.md            ← output do Protocolo 0 (matriz D1-D6)
│   └── escopo-contrato.md           ← o que foi combinado, entregas, prazo, valor
│
├── 02-IDENTIDADE/
│   ├── dna-de-marca.md              ← narrativa + valores + voz + frase proibida
│   ├── mapa-do-universo.md          ← Primal Branding + BrandScript
│   └── lexico-proprietario.md       ← glossário de termos da marca do cliente
│
├── 03-INTELIGENCIA/
│   ├── relatorio-de-terreno.md      ← nicho + saturação + zeitgeist + concorrentes + brechas
│   └── alma-da-persona.md           ← Inferno/Purgatório/Paraíso + SZC + linguagem real
│
├── 04-ESTRATEGIA/
│   ├── oferta-estruturada.md        ← equação de valor + stack + garantia + preço
│   ├── mapa-de-campanha.md          ← modalidade + cronograma + copy por fase
│   └── plano-de-escala.md           ← fase atual + alavanca + próximo tier (quando aplicável)
│
├── 05-CRIACAO/
│   ├── roteiros/                    ← um arquivo por roteiro (chavideo)
│   │   └── [YYYY-MM-DD]-[tema].md
│   ├── carrosseis/                  ← um arquivo por carrossel (chavossel)
│   │   └── [YYYY-MM-DD]-[tema].md
│   ├── copy/                        ← posts, e-mails, ads, legendas
│   │   ├── posts/
│   │   ├── emails/
│   │   └── ads/
│   └── headlines/                   ← bancos de headlines por período
│       └── headlines-[mes-ano].md
│
├── 06-OPERACAO/
│   ├── calendario-[mes-ano].md      ← programação do mês (o que publica quando)
│   ├── checklists/
│   │   ├── checklist-publicacao.md
│   │   └── checklist-campanha.md
│   └── sops/                        ← SOPs customizados para este cliente (se houver)
│
├── 07-ASSETS/
│   ├── brand-kit/                   ← paleta, tipografia, logo, guidelines
│   ├── templates/                   ← templates de carrossel, story, thumb por plataforma
│   └── imagens/                     ← fotos aprovadas, imagens de produto, icons
│
├── 08-ENTREGAS/
│   ├── entrega-fase-0.md            ← Kit de Entrega Fase 0 (DNA + Universo)
│   ├── entrega-fase-1.md            ← Kit de Entrega Fase 1 (Terreno + Persona)
│   ├── entrega-fase-2.md            ← Kit de Entrega Fase 2 (Oferta + Campanha)
│   ├── entrega-fase-3.md            ← Kit de Entrega Fase 3 (Peças produzidas)
│   ├── entrega-fase-4.md            ← Kit de Entrega Fase 4 (Operação)
│   └── entrega-fase-5.md            ← Kit de Entrega Fase 5 (Relatório pós-ciclo)
│
└── 09-EVOLUCAO/
    ├── relatorio-[mes-ano].md       ← o que funcionou, o que não funcionou, próximos movimentos
    ├── tesouro-dos-erros.md         ← erros registrados no projeto
    └── decisoes-estrategicas.md     ← decisões tomadas e por que
```

---

## Tipos de documento — definições

| Tipo | Propósito | Quem escreve | Frequência |
|------|-----------|-------------|------------|
| **dossie.md** | Memória viva do projeto — contexto completo para todos os plugins | Todos os plugins (cada um em sua §§) | Atualizado a cada fase |
| **briefing-inicial.md** | O que foi capturado no primeiro contato | Chaveiro (Protocolo 0) | 1x por projeto |
| **diagnostico-6d.md** | Matriz D1-D6 com semáforos e roadmap | Chaveiro (Protocolo 0) | 1x por projeto; revisado na Lua Cheia |
| **dna-de-marca.md** | Identidade do cliente — nunca muda sem revisão | Cartógrafo (Forja do Universo) | Por projeto; atualizado se identidade mudar |
| **oferta-estruturada.md** | A oferta como documento comercial | Alquimista (Forja de Oferta) | Por oferta; atualizado a cada ciclo |
| **mapa-de-campanha.md** | Cronograma + copy por fase | Arauto (Mapa de Campanha) | Por campanha |
| **alma-da-persona.md** | Quem é o lead — dores, linguagem, jornada | Cartógrafo (Forja da Persona) | Por projeto; revisado se público mudar |
| **calendario-[mes].md** | O que publica quando — organizado por dia | Arauto + operação | Todo mês |
| **entrega-fase-X.md** | Output limpo para o cliente — sem notas internas | Protocolo de Entrega (§7 Dossiê) | Ao fechar cada fase |
| **relatorio-[mes].md** | Análise pós-ciclo com decisão estratégica | Chaveiro (Lua Cheia) | Mensal |

---

## Convenção de nomenclatura

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Roteiro | `[YYYY-MM-DD]-[tema-slug].md` | `2026-04-28-medo-de-comecar.md` |
| Carrossel | `[YYYY-MM-DD]-[tema-slug].md` | `2026-04-30-3-erros-iniciantes.md` |
| Calendário | `calendario-[YYYY-MM].md` | `calendario-2026-05.md` |
| Relatório | `relatorio-[YYYY-MM].md` | `relatorio-2026-04.md` |
| Entrega | `entrega-fase-[N].md` | `entrega-fase-2.md` |

---

## Espelho no Notion

Cada pasta local tem uma seção correspondente na página do cliente no Notion:

| Pasta local | Página Notion |
|-------------|--------------|
| `00-DOSSIE/dossie.md` | Página "Dossiê CM" (master page do cliente) |
| `04-ESTRATEGIA/` | Sub-páginas dentro de "Estratégia" |
| `05-CRIACAO/` | Database "Conteúdo" (um item por peça) |
| `06-OPERACAO/calendario-*.md` | Database "Calendário" (MINHA ESTEIRA) |
| `08-ENTREGAS/` | Páginas compartilhadas com o cliente |

---

## Setup de um novo projeto

1. Duplicar esta pasta template para `[CLIENTE-NOME]/`
2. Criar `00-DOSSIE/dossie.md` a partir de `05-ASSETS/dossies/TEMPLATE-DOSSIE.md`
3. Executar SOP-ONBOARDING.md
4. Criar estrutura no Notion (se cliente usa Notion)
5. Commitar no Git com mensagem `init: novo projeto [cliente-nome]`

---

*Estrutura Padrão CM — duplicar, não improvisar.*

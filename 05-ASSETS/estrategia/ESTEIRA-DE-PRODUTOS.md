---
status: rascunho
criado: 2026-04-26
revisão: pendente
prioridade: alta
próximo-passo: finalizar Sistema Operacional (produto ①) + gravar onboarding
---

# Esteira de Produtos Chave Mestra

Arquitetura comercial de dois trilhos: produto digital de escala + serviço de alto ticket. Os dois se alimentam — o digital filtra e pré-qualifica; o serviço converte quem quer atalho.

---

## A lógica dos dois trilhos

```
TRILHO DIGITAL (volume, escala)          TRILHO SERVIÇO (profundidade, alto ticket)
─────────────────────────────────        ──────────────────────────────────────────
Muitos compradores                        Poucos clientes
Self-serve                                Acompanhamento direto
Resultado depende do comprador            Resultado depende de você
Receita previsível (recorrência)          Receita por projeto / ciclo
Constrói autoridade passivamente          Constrói casos + depoimentos ativos

        ↑                                           ↑
        └──────────── se alimentam ─────────────────┘
   O digital atrai → o serviço converte quem quer atalho
   O serviço gera cases → o digital vende mais fácil
```

---

## A esteira completa

```
                        ┌─────────────────────────────┐
                        │  CONTEÚDO (orgânico/pago)    │
                        │  Agenda + Plugins gerando    │
                        └────────────┬────────────────┘
                                     │
                        ┌────────────▼────────────────┐
                        │  ENTRADA GRATUITA           │
                        │  Mini-template ou aula      │
                        │  "Como organizo minha        │
                        │   produção de conteúdo"     │
                        └──────┬─────────────┬────────┘
                               │             │
               ┌───────────────▼──┐       ┌──▼────────────────────┐
               │  TRILHO DIGITAL  │       │  TRILHO SERVIÇO       │
               └──────────────────┘       └───────────────────────┘
                        │                           │
          ┌─────────────▼──────────────┐   ┌────────▼──────────────────┐
          │  ① SISTEMA OPERACIONAL     │   │  ④ IMPLEMENTAÇÃO           │
          │  Notion completo           │   │  Você configura o sistema  │
          │  R$297–497                 │   │  para o cliente            │
          │  (produto principal)       │   │  R$2.500–5.000             │
          └─────────────┬──────────────┘   └────────┬──────────────────┘
                        │                           │
          ┌─────────────▼──────────────┐   ┌────────▼──────────────────┐
          │  ② MOTOR DE IA             │   │  ⑤ MENTORIA / ACOMPANHA-  │
          │  Acesso aos 6 plugins       │   │  MENTO em grupo           │
          │  R$97–147/mês              │   │  Sistema + sessões         │
          │  (recorrência)             │   │  R$1.500–3.000/mês         │
          └─────────────┬──────────────┘   └────────┬──────────────────┘
                        │                           │
          ┌─────────────▼──────────────┐   ┌────────▼──────────────────┐
          │  ③ COMUNIDADE / PROGRAMA   │   │  ⑥ WHITE LABEL / AGÊNCIA  │
          │  Grupo + método            │   │  Licença do sistema        │
          │  R$197–297/mês             │   │  completo para revenda     │
          │  (retém + qualifica)        │   │  R$5.000–15.000            │
          └────────────────────────────┘   └───────────────────────────┘
```

---

## O que cada produto é, de verdade

| # | Produto | O que o cliente compra | Quem compra |
|---|---|---|---|
| ① | **Sistema Operacional** | Notion completo + aula de onboarding + método documentado | Criador/especialista que quer organização |
| ② | **Motor de IA** | Plugins ativos no claude.ai + updates + novos recursos | Quem já tem o sistema e quer velocidade |
| ③ | **Comunidade / Programa** | Grupo de produtores usando o sistema juntos + chamadas mensais | Quem quer consistência e não quer fazer sozinho |
| ④ | **Implementação** | Você configura e entrega funcionando | Quem tem dinheiro e não tem tempo/paciência |
| ⑤ | **Mentoria em grupo** | Sistema + acompanhamento de estratégia + sessões ao vivo | Quem quer resultado, não só ferramenta |
| ⑥ | **White Label** | Licença para revender ou usar com próprios clientes | Agências, consultores, outros experts |

---

## O que construir e em que ordem

### AGORA (30–60 dias)
- [ ] Finalizar o Sistema Operacional (① — Notion já está quase pronto)
- [ ] Gravar onboarding de 30–60min mostrando o sistema em uso
- [ ] Vender para 5–10 clientes beta (R$97–197) → coletar feedback + casos

### PRÓXIMO (60–120 dias)
- [ ] Lançar o Sistema Operacional no preço cheio (R$297–497)
- [ ] Criar oferta de Motor de IA como upsell (② recorrência)
- [ ] Oferecer Implementação para quem compra e pede ajuda (④ orgânico)

### CONTÍNUO (a partir de 4 meses)
- [ ] Montar o programa em grupo com os compradores mais engajados (③/⑤)
- [ ] Estruturar White Label quando tiver 3+ cases documentados (⑥)
- [ ] Escalar via conteúdo — o próprio sistema produz o conteúdo que vende o sistema

---

## O loop central

```
Você usa o sistema → produz conteúdo melhor e mais rápido
→ audiência vê a qualidade e a cadência
→ pergunta "como você faz isso?"
→ você vende o sistema
→ clientes usam e têm resultados
→ cases alimentam o serviço
```

---

## Replicabilidade técnica (Notion)

| O que duplica | O que NÃO duplica |
|---|---|
| Estrutura de databases (campos, tipos, fórmulas) | Relações apontando para páginas fora do escopo duplicado |
| Todas as views com filtros, agrupamentos e ordenações | Dados reais — o cliente começa vazio ✅ |
| Templates internos (Dia de Conteúdo, Produto, Tarefa) | Os plugins de IA (produto separado) |
| Instruções, callouts e contexto CM em cada seção | Integrações ativas (precisam ser reconfiguradas) |
| Checklist de Produção, CAMPANHA map, OFERTA brief, Jornada 6 estágios | — |

**Regra:** duplicar funciona. O cliente recebe o sistema operacional completo, vazio e pronto. As relações internas se mantêm desde que tudo seja duplicado junto como um bloco.

---

## Próximos passos imediatos

**O que falta para o Sistema Operacional (①) estar pronto para vender:**
- [ ] Definir nome comercial do produto (não precisa ser "Chave Mestra" na frente)
- [ ] Aula de onboarding gravada (30–60min)
- [ ] Página de vendas
- [ ] Definir o que entra no template free (isca) vs. pago (produto)
- [ ] Primeiro grupo beta de 5–10 compradores

---

*Rascunho gerado em sessão de 2026-04-26. Trabalhar nisso antes do próximo lançamento.*

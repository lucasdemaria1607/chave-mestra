---
name: tesouro-dos-erros
description: Usar quando o usuário pedir para "registrar erro", "Tesouro dos Erros", "o que deu errado", "documentar falha", "que erros existem para", "consultar erros", "o que pode dar errado", ou qualquer curadoria e prevenção de falhas do sistema.
version: 1.0
layer: Camada Meta — Chaveiro
role: Curadoria e consulta de erros críticos do sistema — registro, categorização, extração de padrões e prevenção ativa
inputs: erro documentado / resultado inesperado / falha de campanha / inconsistência de sistema
outputs: entrada no Tesouro / padrão identificado / atualização preventiva / consulta de erros por skill
feeds-into: todos os plugins (prevenção) + Forja do Conhecimento (aprendizado) + Chaveiro (atualização de sistema)
---

# Tesouro dos Erros — Sistema de Curadoria e Prevenção de Falhas

O Tesouro dos Erros é o ativo mais subestimado do sistema. Cada campanha que não performou, cada copy que não converteu, cada roteamento errado é registrado — não para lamentar, mas para extrair o padrão que previne a repetição.

**Lei central:** erros não documentados se tornam hábitos. Erros documentados se tornam sistemas de prevenção.

---

## Quando Registrar (Critérios de Entrada)

Um erro merece entrar no Tesouro quando atende a pelo menos 1 critério:

1. **Compromete funcionalidade do sistema** — uma skill produziu output incorreto ou incoerente
2. **Causou perda mensurável** — campanha não performou, copy não converteu, oferta rejeitada
3. **Revela padrão recorrente** — o mesmo tipo de falha apareceu 2+ vezes
4. **Pode se repetir** — a causa raiz não é circunstancial, é estrutural
5. **Afeta outros plugins** — o erro em um plugin propagou impacto em outro

## Quando NÃO Registrar

- Problemas de formatação menor
- Preferências subjetivas do usuário ("não gostei do tom")
- Erros únicos sem probabilidade de repetição
- Problemas técnicos de plataforma (Notion fora do ar, API com bug)

---

## Categorias de Erro

| Categoria | Escopo | Exemplo |
|-----------|--------|---------|
| **Copy** | Pergaminho de Copy, Método Carga | Copy N1 com CTA direto (nível errado) |
| **Campanha** | Mapa de Campanha, Protocolo Massivo | Meteórico com audiência fria (modalidade errada) |
| **Oferta** | Forja de Oferta, Portal da Escala | Oferta high ticket sem prova social (fase errada) |
| **Roteamento** | Chaveiro, Pipeline | Skill ativado fora de contexto (diagnóstico falhou) |
| **Conteúdo** | Chavideo, Chavossel | Roteiro sem exercício Progymnasmata definido |
| **Visual** | Iluminista | Tema incongruente com posicionamento narrativo |
| **Coerência** | Sistema inteiro | Glossário violado em output de cliente |

## Severidade

| Nível | Definição | Ação |
|-------|-----------|------|
| **Crítico** | Quebra funcionalidade ou causa perda direta | Correção imediata + atualização de SKILL.md |
| **Alto** | Degrada qualidade significativamente | Registro + proposta de atualização |
| **Médio** | Cria confusão ou inconsistência | Registro para monitoramento |

---

## Estrutura de Entrada no Tesouro

```
ERRO: [nome descritivo — ex: "Meteórico com audiência fria"]
DATA: YYYY-MM-DD
SEVERIDADE: [Crítico / Alto / Médio]
CATEGORIA: [Copy / Campanha / Oferta / Roteamento / Conteúdo / Visual / Coerência]
PLUGIN(S) AFETADO(S): [lista de plugins envolvidos]

O QUE ACONTECEU:
[Descrição objetiva do que foi feito — sem julgamento]

O QUE ERA ESPERADO:
[Resultado esperado com base nas regras do sistema]

O QUE ACONTECEU DE FATO:
[Resultado real — com números se disponíveis]

DIAGNÓSTICO (causa raiz):
[Análise objetiva — o que provavelmente causou o gap]

PADRÃO IDENTIFICADO:
[A regra geral que este erro revela — generalizável para outros contextos]

ATUALIZAÇÃO PREVENTIVA:
[O que precisa mudar no sistema para prevenir repetição]
Plugin: [qual SKILL.md precisa de ajuste]
Seção: [qual parte específica]
Mudança: [o que adicionar/modificar]

STATUS: [Registrado / Atualizado no sistema / Confirmado em teste futuro]
```

---

## Protocolo de Consulta — ANTES de Executar Qualquer Skill

Antes de gerar output em qualquer plugin, o sistema pode (e deve, quando disponível) consultar o Tesouro para verificar:

1. **Existem erros registrados para esta skill?** → Se sim, ler os padrões identificados
2. **O contexto atual é similar ao de algum erro passado?** → Se sim, aplicar a prevenção antes de executar
3. **A combinação de variáveis (nível de consciência + modalidade + ticket + audiência) já falhou antes?** → Se sim, alertar o usuário

### Formato de Consulta

```
CONSULTA AO TESOURO — [Plugin / Skill / Contexto]

Erros encontrados: [número]
Mais relevante: [nome do erro]
Padrão a evitar: [descrição em 1-2 linhas]
Prevenção aplicada: [o que foi ajustado no output atual]
```

---

## Processo de Registro — Após Toda Campanha

1. **Resultado vs. Expectativa** — comparar números reais com projeção
2. **Identificar gaps** — onde o resultado ficou abaixo do esperado
3. **Diagnosticar causa** — foi erro de copy? De modalidade? De timing? De oferta?
4. **Registrar no Tesouro** — entrada completa para cada falha significativa
5. **Extrair padrão** — generalizar a lição para outros contextos
6. **Propor atualização** — qual SKILL.md precisa de ajuste para prevenir repetição

---

## Regras

1. **Nenhum erro crítico sem registro** — se causou perda, entra no Tesouro
2. **Padrão > instância** — o valor está na generalização, não no caso isolado
3. **Sem auto-punição** — o Tesouro é analítico, não emocional
4. **Atualização com evidência** — nenhum plugin é alterado por hipótese
5. **Consulta antes de execução** — prevenção ativa, não apenas registro passivo

---

## Referências Cruzadas

- `chaveiro/SKILL.md` — protocolo de atualização de skills pós-erro
- `forja-do-conhecimento/SKILL.md` — nota permanente vinculada a cada erro com padrão confirmado
- Todos os SKILL.md — são os artefatos que o Tesouro protege e evolui

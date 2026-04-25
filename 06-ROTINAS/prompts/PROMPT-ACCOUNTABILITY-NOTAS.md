# Prompt — Accountability do Sistema de Conhecimento (Ciclo da Forja)

**Frequência:** Semanal (domingo)
**Modo automático:** rotina remota Claude Code
**Modo manual:** colar este prompt em qualquer IA + colar notas da semana

---

## O que é o Ciclo da Forja

O Ciclo da Forja tem 3 camadas de revisão do sistema de conhecimento:

| Camada | Frequência | O que faz |
|--------|-----------|-----------|
| **Camada 1 — Semanal** | Toda semana | Revisa notas dos últimos 7 dias, avalia qualidade, encontra conexões iniciais |
| **Camada 2 — Quinzenal** | A cada 15 dias | Cria clusters temáticos, extrai modelos mentais emergentes |
| **Camada 3 — Mensal** | Mensal (Lua Cheia) | Síntese, evolução de plugins, mega-padrões |

**Este prompt executa a Camada 1 + verifica se as outras camadas estão sendo feitas.**

---

## Como usar manualmente (qualquer IA)

1. Cole suas notas da semana no bloco `[NOTAS DA SEMANA]` abaixo
2. Se não tiver notas: cole "NENHUMA NOTA ESTA SEMANA"
3. Cole o prompt completo em qualquer IA
4. Salve o relatório em `06-ROTINAS/outputs/forja-semanal/forja-[YYYY-MM-DD].md`

---

## Prompt completo

```
Você é o Chaveiro do sistema Chave Mestra — responsável pela manutenção do sistema de conhecimento.

[INSTRUÇÃO — apagar esta linha ao usar manualmente]
Se rodando como agente com acesso a repositório Git:
- Execute: git log --oneline --since="8 days ago" -- sistema-de-conhecimento/notas/
- Se houver commits: leia os arquivos adicionados/modificados nesse período
- Se NÃO houver commits: registrar como CENÁRIO B (sem notas)
- Leia `06-ROTINAS/config/CONFIG-GLOBAL.md` para os thresholds de alerta

[NOTAS DA SEMANA]
[Colar aqui as notas criadas nos últimos 7 dias — ou escrever "NENHUMA NOTA ESTA SEMANA"]

---

AVALIAÇÃO:

CENÁRIO A — Há notas desta semana:

Execute a Camada 1 do Ciclo da Forja:

1. INVENTÁRIO
   Liste cada nota com: título, tema central, tipo (insight / reflexão / observação / aprendizado / ideia)

2. AVALIAÇÃO DE QUALIDADE
   Para cada nota, avalie (1-10):
   - Originalidade: é uma observação sua ou paráfrase do que já existe?
   - Profundidade: vai além da superfície ou é rasa?
   - Aplicabilidade: tem uso prático ou estratégico?

3. CONEXÕES NÃO ÓBVIAS
   Encontre 2-3 conexões entre notas desta semana que não são imediatamente evidentes.
   Para cada conexão: [Nota A] + [Nota B] → [insight da combinação]

4. MODELO MENTAL EMERGENTE
   Se houver padrão nas notas, nomeie 1 modelo mental emergente:
   Nome: [nome do modelo]
   Definição: [1-2 linhas]
   Aplicação: [onde usar]

5. NOTAS QUE MERECEM APROFUNDAMENTO
   Liste 1-2 notas que têm potencial para virar nota permanente ou conteúdo.

6. RECOMENDAÇÃO
   O que explorar na próxima semana para fortalecer os padrões identificados?

---

CENÁRIO B — Nenhuma nota esta semana:

ALERTA DE ACCOUNTABILITY:

Dias sem registro: [calcular ou pedir ao usuário]

O que se perde quando o registro para:
- Insights da vida real se evaporam em 24-48h
- O diferencial biográfico (suas experiências únicas) não é capturável depois
- A distância entre o que você pensa e o que você cria aumenta
- O sistema de conhecimento vira arquivo morto em vez de motor vivo

3 PROVOCAÇÕES PARA RETOMAR AGORA:
(Responda pelo menos uma para criar uma nota hoje)
1. O que aconteceu esta semana que te surpreendeu — positiva ou negativamente?
2. Que ideia você teve mas não anotou, achando que lembraria depois?
3. Qual conversa, filme, leitura ou situação mudou levemente como você pensa sobre algo?

COMPROMETIMENTO:
O sistema de conhecimento é o que separa criador de conteúdo de produtor de barulho.
O aporte biográfico — suas experiências, reflexões, perspectivas únicas — não pode ser comprado, copiado ou automatizado.
É o único diferencial que nenhuma IA vai replicar. Mas só existe se for capturado.

---

OUTPUT FINAL:
Gere um relatório estruturado com os resultados acima.
Título do relatório: "Forja Semanal [YYYY-MM-DD] — [Cenário A: X notas / Cenário B: ALERTA]"
```

---

## Onde salvar o output

```
Cenário A: 06-ROTINAS/outputs/forja-semanal/forja-[YYYY-MM-DD].md
Cenário B: 06-ROTINAS/outputs/forja-semanal/ALERTA-[YYYY-MM-DD].md
Cenário C (>21 dias): 06-ROTINAS/outputs/forja-semanal/ALERTA-CRITICO-[YYYY-MM-DD].md
```

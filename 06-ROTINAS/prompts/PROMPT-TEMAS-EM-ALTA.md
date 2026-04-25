# Prompt — Temas em Alta e Pertinentes

**Frequência:** 3x/semana (seg, qua, sex)
**Modo automático:** rotina remota Claude Code
**Modo manual:** colar este prompt em qualquer IA, ajustando o bloco de contexto

---

## Como usar manualmente (qualquer IA)

1. Preencha o bloco `[CONTEXTO DO PROJETO]` abaixo com as informações do projeto
2. Cole o prompt completo em qualquer chat de IA
3. Salve o output em `06-ROTINAS/outputs/temas/temas-[YYYY-MM-DD].md`

---

## Prompt completo

```
Você é um pesquisador de conteúdo. Sua missão é encontrar temas em alta relevantes para um criador de conteúdo e gerar um banco de temas prontos para produção.

[CONTEXTO DO PROJETO]
Nicho: [preencher]
Marca: [preencher]
Voz da marca: [preencher — 3 adjetivos]
Persona: [preencher — quem é, qual a dor principal]
Tom: nunca falar como coach motivacional. Profundidade, inteligência, sem eufemismo.

[INSTRUÇÃO — apagar esta linha ao usar manualmente]
Se rodando como agente com acesso a repositório Git:
- Leia `06-ROTINAS/config/CONFIG-GLOBAL.md` para preencher o contexto acima automaticamente
- Leia o DNA de Marca mais recente em `02-IDENTIDADE/dna-de-marca.md` se existir

PESQUISA:
Use ferramentas de busca para investigar HOJE:
1. "temas virais [nicho] semana" — o que está gerando debate no nicho
2. Eventos recentes, casos reais, notícias que mencionam temas do nicho
3. Figuras notórias, personalidades, instituições fazendo algo relevante para o nicho
4. Polêmicas e controvérsias no nicho
5. Pop culture com ângulo aplicável (série, filme, evento esportivo, momento político)
6. Trends de formato ou comportamento nas plataformas

FILTRO:
Para cada tema encontrado, avaliar:
- É relevante para a persona descrita acima?
- Tem um ângulo que a voz da marca consegue assumir com autenticidade?
- Tem janela de oportunidade? (quanto tempo antes de perder relevância)

OUTPUT:
Selecione os 12-15 melhores temas e para cada um entregue:

---
### [NÚMERO]. [TÍTULO DO TEMA]

**Contexto:** [por que é relevante agora — 1-2 linhas]
**Ângulo para a marca:** [como abordar dentro da voz e posicionamento]
**Formato sugerido:** [roteiro de vídeo / carrossel / post de texto]
**Janela:** [imediato (48h) / curto (1 semana) / médio (1 mês)]
**Gatilho emocional:** [curiosidade / indignação / identificação / aspiração]
---

Ao final: gere um ÍNDICE com todos os 12-15 títulos e seus formatos sugeridos para consulta rápida.
```

---

## Onde salvar o output

```
06-ROTINAS/outputs/temas/temas-[YYYY-MM-DD].md
```

Se rodando manualmente, copie o output e salve neste caminho no repositório.

---

## Notas de uso

- Em Modo Automático: a rotina lê o CONFIG-GLOBAL.md e preenche o contexto sozinha
- Em Modo Manual: preencher os campos entre colchetes antes de enviar
- Os temas gerados alimentam diretamente a Rotina de Transformação em Conteúdo

---
name: chave-mestra-progymnasmata
description: Adapts the 14 classical Progymnasmata rhetoric exercises to the Chave Mestra 10-slide carousel format using Chavossel v22 plugin syntax. Use when user wants to create a carousel (carrossel) based on classical rhetoric, requests a specific Progymnasmata exercise, or asks to build a Chave Mestra roteiro. Triggers include: "cria um carrossel de [exercício]", "faz uma Fábula/Chria/Tese no Chave Mestra", "adapta [conteúdo] pro carrossel com retórica clássica".
---

# Chave Mestra — Motor de Ensaios Visuais com Progymnasmata

Sistema de criação de carrosséis editoriais de 10 slides que adapta os 14 exercícios da retórica clássica (Progymnasmata) para o formato do plugin Chavossel v22.

## Filosofia do Projeto

O Chave Mestra não é gerador de carrosséis superficiais. É um motor de ensaios visuais. A missão é adaptar a densidade de teses filosóficas, narrativas complexas e retórica clássica para 10 quadros sem perder profundidade. O público é inteligente e busca sofisticação.

## Sintaxe Chavossel v22 (OBRIGATÓRIA)

| Ferramenta | Sintaxe | Efeito Visual |
|---|---|---|
| **Manchete** | `# Frase longa de título` | Título de impacto no topo do slide |
| **Corpo** | Texto normal (parágrafos) | Leitura narrativa padrão |
| **Immersive Reader** | Texto puro >20 palavras, sem título | Remove distrações, foco tipográfico — para argumentos densos |
| **O Grito** | `# Frase curta <20 palavras` + slide vazio | Aforismo, plot twist, ruptura |
| **Corte** | `---` em linha isolada | Separador de slides |

**Regra crítica**: Todo slide é separado por `---`. Nunca escreva dois slides sem o corte.

## Estrutura dos 10 Atos (Invariável)

| Slide | Função | Tom |
|---|---|---|
| 1 | **Abertura**: Título + Subtítulo que desafiam crença ou prometem transformação | Provocativo |
| 2 | **A Ponte**: Contextualização que abre lacuna de informação (Information Gap) | Intrigante |
| 3–9 | **O Corpo**: Estrutura retórica do exercício escolhido. Alternar ritmo obrigatoriamente | Denso / variado |
| 10 | **Fechamento**: Conclusão moral ou prática + CTA | Resolutivo |

**Lei do Ritmo**: Nunca três slides do mesmo tipo seguidos. Alternar: Manchete forte → dois slides Immersive Reader → O Grito → volta ao corpo.

## Os 14 Exercícios Progymnasmata

Consulte `references/exercicios.md` para o template de cada exercício.

### Seleção do Exercício

**Se o usuário fornecer o exercício**: Use diretamente.

**Se o usuário fornecer apenas o tema/insumo**: Diagnostique qual exercício serve melhor:

- Tema é uma história com moral → **Fábula**
- Tema é relato de evento real/histórico → **Narrativa**
- Tema é uma citação ou gesto de pessoa famosa → **Chria**
- Tema é um provérbio ou máxima → **Máxima/Gnome**
- Tema ataca um mito ou crença popular → **Refutação**
- Tema defende uma posição com provas → **Confirmação**
- Tema amplifica um vício ou virtude → **Lugar-Comum**
- Tema elogia pessoa, obra, lugar → **Elogio**
- Tema ataca ideia, vício, comportamento → **Vitupério**
- Tema compara dois elementos → **Comparação**
- Tema assume voz de personagem → **Etopeia**
- Tema descreve cena ou lugar vividamente → **Écfrase**
- Tema argumenta sobre questão filosófica geral → **Tese**
- Tema discute utilidade/dano de uma lei ou norma → **Proposta de Lei**

## Processo de Criação

### Passo 1: Leitura do Insumo
Absorva o insumo bruto do usuário. Identifique: essência, conflito central, argumento ou imagem mais forte.

### Passo 2: Seleção e Consulta
Identifique o exercício. Leia `references/exercicios.md` → seção do exercício escolhido → use o template dos 10 atos.

### Passo 3: Composição
- Escreva slide por slide seguindo o template
- Apply a sintaxe Chavossel corretamente em cada slide
- Mantenha tom autoral, denso, provocativo
- Não simplifique. Não use linguagem de coach motivacional.

### Passo 4: Revisão de Ritmo
Releia o roteiro completo. Verifique:
- [ ] O slide 1 desafia uma crença ou promete transformação real?
- [ ] O slide 2 abre lacuna de informação genuína?
- [ ] O ritmo alterna entre os tipos de slide (manchete / imersivo / grito)?
- [ ] O fechamento entrega a conclusão prometida na abertura?
- [ ] Toda sintaxe `#` e `---` está correta?

## Padrão de Output

O output final deve ser **exclusivamente o roteiro formatado**, pronto para copiar e colar no plugin. Sem comentários extras. Sem marcações de blocos visíveis. Sem "Slide 1:", "Manchete:", etc. — apenas o texto com a sintaxe limpa.

Após o roteiro, forneça uma **nota técnica de 3 linhas** explicando: exercício escolhido, lógica de ritmo aplicada, e efeito retórico pretendido.

## Referências

- `references/exercicios.md` — Templates dos 14 exercícios com estrutura slide a slide
- `references/exemplos.md` — Exemplos gold standard de roteiros completos

---
name: portal-do-terreno
version: 2.0
plugin: "01"
layer: "Camada 1 — Diagnóstico"
description: >
  Inteligência estrutural de mercado + diagnóstico pessoal do especialista.
  Use quando o usuário quer mapear players, entender a oferta dominante,
  identificar canais estratégicos e encontrar brechas de posicionamento.
  Também ativa para: PESTEL (forças macro do setor), Porter's 5 Forces
  (estrutura competitiva), SWOT Individual do especialista, diagnóstico das
  7 perguntas do expert (habilidades, entrada, monetização, personalidade,
  nicho, objetivos, oferta).
  Triggers: "analisa o mercado de X", "PESTEL do nicho", "5 forças de Porter",
  "SWOT do especialista", "diagnóstico do nicho", "quem são os players",
  "quais são minhas habilidades monetizáveis", "por onde devo entrar",
  "relatório de terreno".
  Output: Relatório de Terreno completo com Módulo 0 (especialista) +
  Módulo 1 (PESTEL) + Módulo 2 (Porter) + 6 seções de mercado + insumos SZC.
changelog:
  - version: 2.0
    date: "Março 2026"
    changes: >
      Adicionado Módulo 0 (Diagnóstico do Especialista: SWOT Individual + 7 perguntas),
      Módulo 1 (Análise PESTEL), Módulo 2 (Porter's 5 Forces).
      Insumo necessário expandido para incluir dados pessoais do especialista.
      Padrão de qualidade e regras atualizados.
  - version: 1.0
    date: "Março 2026"
    changes: "Versão inicial — 6 seções de diagnóstico de mercado."
---

## ⚙️ Identidade do Usuário — Antes de Qualquer Output

Antes de gerar qualquer conteúdo, verifique se os dados abaixo foram fornecidos na sessão. Se não foram, pergunte:

1. **Nome / marca:**
2. **Produtos** (nome + tipo de cada um):
3. **Como chama sua audiência:**
4. **Tom de voz** — 3 adjetivos + 1 frase que nunca diria:
5. **Nicho e posicionamento** em uma frase:

> **Regra inviolável de output:** todo conteúdo gerado usa exclusivamente o nome, marca, produtos, linguagem e tom de voz do usuário. Nada externo ao negócio do usuário aparece no que é entregue. Se os dados já foram fornecidos na sessão, não pergunte novamente — aplique diretamente.

---

# Plugin 01 — Portal do Terreno
## Inteligência Estrutural de Mercado + Diagnóstico do Especialista

---

## FILOSOFIA DO PLUGIN

O SZC lê o que o mercado **sente**. A Alma da Persona lê o que a **pessoa sente**. O Portal do Terreno lê o que o mercado **é** — e o que o especialista **tem** para oferecer a ele.

A versão 2.0 do Portal do Terreno opera em dois eixos simultâneos:

**Eixo Externo:** o terreno competitivo — quem já está, o que já promete, onde estão as brechas.

**Eixo Interno:** o próprio especialista — quais habilidades domina, quais precisa desenvolver, o que pode monetizar, que personalidade pode explorar.

O cruzamento dos dois eixos revela algo que nenhuma pesquisa de mercado convencional encontra: **o posicionamento que só você pode reivindicar com credibilidade**.

O especialista que entra num mercado sem mapear o terreno não está sendo ousado. Está sendo cego. E o especialista que mapeia o terreno mas não se mapeia — não sabe o que ele mesmo tem — está indo para a batalha certa com as armas erradas.

---

## QUANDO USAR

**Use o Portal do Terreno quando:**
- O usuário está entrando em nicho novo ou subnicho
- Uma campanha vai ser criada e o posicionamento ainda não está definido
- O usuário quer saber "por onde entrar" ou "o que vender"
- O usuário precisa de diagnóstico do próprio negócio ou habilidades
- O SZC foi feito mas as tensões identificadas precisam de validação estrutural
- O usuário quer saber se existe brecha real antes de criar produto
- Um produto existente está estagnado e a causa pode ser posicionamento
- O usuário quer análise PESTEL, Porter ou SWOT individual

**Use antes de:**
- SZC (o terreno alimenta o Status Quo e sugere o Zeitgeist)
- Alma da Persona (os players dominantes definem o "inimigo imaginário" da persona)
- Qualquer campanha (o panorama de ofertas define o que você não pode prometer)
- Qualquer produto novo (as brechas definem o que você deve prometer)

---

## INSUMO NECESSÁRIO

Peça ao usuário antes de começar. Se quiser o diagnóstico completo (Módulos 0+1+2 + Relatório), colete todos. Se quiser apenas parte (ex: só PESTEL), colete apenas o que aquele módulo exige.

**Para o Diagnóstico do Especialista (Módulo 0):**
1. **Nome e área de expertise** — ex: "Lucas, copywriter especializado em lançamentos"
2. **Experiência e resultados concretos** — o que já fez, com que resultados, por quanto tempo
3. **Habilidades técnicas dominadas** — o que sabe fazer muito bem
4. **Habilidades que faltam ou são fracas** — onde se sente inseguro
5. **Personalidade e estilo de comunicação** — como se expressa naturalmente (técnico, provocativo, didático, storytelling, etc.)
6. **Objetivos declarados** — o que quer construir nos próximos 12 meses
7. **Restrições reais** — tempo disponível, capital, infraestrutura, equipe

**Para os Módulos de Mercado (1 + 2 + Relatório):**
1. **Nicho principal** — ex: "marketing digital para médicos", "nutrição funcional feminina"
2. **Subnicho ou recorte** (se houver) — ex: "copywriting para tráfego pago"
3. **Plataformas a mapear** — padrão: Instagram + YouTube + TikTok
4. **Players que o usuário já conhece** (opcional) — acelera o mapeamento
5. **Produto ou oferta em construção** (se existir) — guia a análise de brechas

Se o usuário não tiver esses dados completos, faça as perguntas acima antes de prosseguir.

---

## MÓDULO 0 — DIAGNÓSTICO DO ESPECIALISTA

> *Use este módulo quando o usuário quer entender sua própria posição estratégica antes de entrar no mercado. Responde as 7 perguntas fundamentais do expert digital.*

---

### 0.1 — SWOT INDIVIDUAL DO ESPECIALISTA

O SWOT Individual não é sobre o negócio. É sobre **a pessoa** — suas capacidades reais, seus limites honestos, as oportunidades que o contexto oferece e as ameaças que podem comprometer o posicionamento.

**FORÇAS (Strengths) — o que você domina de verdade**

Perguntas guia:
- Quais habilidades técnicas você domina acima da média do mercado?
- Em quais resultados você tem provas concretas e recentes?
- Qual conhecimento você tem que a maioria no seu nicho não tem?
- Qual é sua vantagem de acesso (rede, casos, dados, experiências únicas)?
- Que tipo de conteúdo você cria com facilidade e que outros acham difícil?
- Que metodologia, sistema ou framework você desenvolveu que é genuinamente seu?

Output esperado:
Lista de 4–7 forças reais, cada uma com **evidência** — não "sou bom em X", mas "fiz X em Y contexto com Z resultado".

---

**FRAQUEZAS (Weaknesses) — o que ainda falta ou atrapalha**

Perguntas guia:
- Quais habilidades do seu nicho você não domina e que os líderes de mercado dominam?
- Onde você tende a procrastinar, evitar ou entregar abaixo do esperado?
- Quais aspectos do negócio digital (tráfego, oferta, conversão, retenção) você ainda não entende bem?
- Que tipo de conteúdo ou formato você evita criar?
- Quais crenças limitantes sobre si mesmo interferem na sua expressão pública?
- O que clientes já reclamaram ou onde você percebeu que frustrou expectativas?

Output esperado:
Lista honesta de 3–5 fraquezas com distinção entre: **fraqueza técnica** (pode ser desenvolvida ou terceirizada), **fraqueza estrutural** (algo sobre o contexto que limita), **fraqueza comportamental** (padrão interno que sabota).

---

**OPORTUNIDADES (Opportunities) — o que o contexto oferece**

Perguntas guia:
- Quais tendências emergentes no seu nicho estão em ascensão e ainda sem referência dominante?
- Qual brecha de mercado (público, promessa, mecanismo, formato) suas forças podem preencher?
- Existe demanda crescente por algo que você já sabe fazer?
- Qual mudança no comportamento do público abre espaço novo (tecnologia, regulação, cultura)?
- Existe segmento dentro do nicho que os grandes players ignoram mas que tem potencial real?
- Quais parcerias, colaborações ou canais ainda não explorados poderiam alavancar?

Output esperado:
Lista de 3–5 oportunidades com distinção clara entre **oportunidade real** (evidência de demanda existente) e **hipótese** (possível, mas sem validação ainda).

---

**AMEAÇAS (Threats) — o que pode comprometer o posicionamento**

Perguntas guia:
- Quais players consolidados podem reagir ao seu posicionamento e como?
- Qual mudança de algoritmo, plataforma ou regulação pode impactar seu canal principal?
- Existe risco de comoditização — o que você oferece pode virar commodity em quanto tempo?
- Quais tendências de mercado vão na direção oposta ao seu posicionamento?
- Existe sazonalidade ou dependência crítica no seu modelo?
- Qual é o risco de reputação mais provável dado o seu posicionamento?

Output esperado:
Lista de 3–5 ameaças com **probabilidade** (Alta/Média/Baixa) e **impacto** (Alto/Médio/Baixo) para cada uma. Priorizar as de Alta probabilidade + Alto impacto.

---

**CRUZAMENTO ESTRATÉGICO DO SWOT:**

Após mapear os 4 quadrantes, gerar 4 estratégias:

| Estratégia | Lógica | Pergunta central |
|------------|--------|-----------------|
| **FO — Usar Forças para capturar Oportunidades** | Máxima agressividade | O que você faz bem que o mercado quer agora? |
| **FA — Usar Forças para neutralizar Ameaças** | Defesa proativa | Como suas forças protegem seu posicionamento? |
| **WO — Superar Fraquezas para capturar Oportunidades** | Desenvolvimento prioritário | O que desenvolver para não perder a oportunidade? |
| **WT — Minimizar Fraquezas e evitar Ameaças** | Gestão de risco | O que parar de fazer para não se expor? |

---

### 0.2 — AS 7 PERGUNTAS DIAGNÓSTICAS DO EXPERT

Estas 7 perguntas são respondidas como síntese do SWOT + dados do especialista. São o mapa de entrada do expert no mercado digital.

---

**PERGUNTA 1: Quais habilidades e diferenciais você domina vs. quais precisa desenvolver?**

*Objetivo:* Separar o que pode ser monetizado agora do que ainda está em construção.

Resposta estruturada em:
- **Domina agora (monetizável):** lista das forças com mais evidência
- **Em desenvolvimento (6–12 meses):** onde está investindo e o que precisa ainda
- **Terceirizar ou ignorar:** fraquezas que não valem o custo de desenvolver

---

**PERGUNTA 2: Com base nas suas capacidades, onde você deve entrar no mercado?**

*Objetivo:* Cruzar forças do especialista com brechas identificadas no terreno.

Resposta estruturada em:
- **Ponto de entrada recomendado** — o nicho/subnicho/segmento com maior FO (força + oportunidade)
- **Ponto de entrada alternativo** — segunda opção com relação risco/retorno favorável
- **Onde NÃO entrar** — posicionamentos que exigem habilidades ausentes ou que enfrentam ameaças altas

---

**PERGUNTA 3: O que você deve monetizar — qual conhecimento ou habilidade tem maior valor de mercado?**

*Objetivo:* Identificar o ativo mais valioso do especialista e o formato ideal de monetização.

Resposta estruturada em:
- **O ativo principal** — a habilidade ou conhecimento de maior diferenciação + demanda
- **Formato de monetização recomendado** — infoproduto, mentoria, consultoria, comunidade, serviço, conteúdo
- **Ponto de entrada de preço** — baseado no panorama de ofertas do nicho
- **Sequência de monetização** — o que vender primeiro para validar antes de escalar

---

**PERGUNTA 4: Que personalidade você deve explorar na comunicação?**

*Objetivo:* Identificar o estilo comunicativo natural que cria diferenciação genuína.

Resposta estruturada em:
- **Perfil comunicativo dominante** — técnico/científico, storyteller/narrativo, provocativo/polêmico, didático/step-by-step, íntimo/confessional, visionário/filosófico
- **Tom que ressoa com o público-alvo** — cruzar estilo natural com preferências do avatar
- **O que evitar** — imitação de estilo de players dominantes (perde diferenciação)
- **O arquétipo de marca** — o personagem que o especialista naturalmente encarna

---

**PERGUNTA 5: Qual nicho você deve dominar?**

*Objetivo:* Definir o nicho específico onde as forças do especialista têm maior impacto e menor resistência.

Resposta estruturada em:
- **Nicho recomendado** — cruzamento entre: (a) onde há brecha real, (b) onde o especialista tem forças, (c) onde o público está disposto a pagar
- **Critérios de escolha** — especificidade (nicho vs. subnicho), tamanho de mercado, saturação, barreira de entrada
- **Horizonte de dominância** — tempo estimado para se tornar referência nesse recorte específico

---

**PERGUNTA 6: Seus objetivos fazem sentido dado o contexto real?**

*Objetivo:* Calibrar as expectativas do especialista contra a realidade do mercado e das próprias capacidades.

Análise em 3 dimensões:
- **Viabilidade técnica** — as habilidades necessárias para atingir o objetivo estão disponíveis?
- **Viabilidade de mercado** — o nicho suporta o volume de receita desejado?
- **Viabilidade de prazo** — o timeline declarado é realista dado o ponto de partida?

Output esperado:
Para cada objetivo declarado: **Viável / Viável com ajuste / Não viável no prazo** — com justificativa e proposta de recalibração se necessário.

---

**PERGUNTA 7: O que você deve vender agora — e o que você precisa entender antes de começar?**

*Objetivo:* Definir o produto-piloto (o que vender primeiro) e as lacunas de compreensão que precisam ser preenchidas antes de qualquer lançamento.

Resposta estruturada em:
- **O produto-piloto** — a oferta mais simples de validar com o menor risco, baseada no ativo principal
- **Formato de validação** — como testar antes de escalar (manual, reduzido, com preço de entrada)
- **O que entender primeiro** — as 3 perguntas que o especialista ainda não consegue responder sobre seu público/mercado
- **Próximo movimento** — a ação mais importante nos próximos 30 dias

---

### 0.3 — OUTPUT DO MÓDULO 0

O Módulo 0 entrega um **Laudo de Posição do Especialista** com:

1. SWOT Individual completo (4 quadrantes + 4 estratégias de cruzamento)
2. Respostas às 7 perguntas diagnósticas
3. **Síntese de Posição:** uma declaração de 3–5 linhas que resume — *quem você é, para quem, com que diferencial, em que nicho e com que objetivo imediato*
4. **Próximos 3 movimentos** priorizados

---

## MÓDULO 1 — ANÁLISE MACRO: PESTEL

> *Use este módulo quando o usuário precisa entender as forças externas que moldam o ambiente onde o nicho opera. PESTEL revela o que está além do controle dos players mas que influencia todas as decisões estratégicas.*

---

### O que é o PESTEL

PESTEL é um framework de análise macroambiental que mapeia 6 forças externas:

| Letra | Dimensão | O que analisa |
|-------|----------|---------------|
| **P** | Political | Regulações, políticas públicas, legislação em curso, posição do governo sobre o setor |
| **E** | Economic | Ciclo econômico, poder de compra, inflação, acesso a crédito, comportamento de consumo |
| **S** | Social | Mudanças culturais, valores emergentes, comportamentos geracionais, movimentos sociais |
| **T** | Technological | Plataformas, algoritmos, ferramentas de IA, automação, novos canais de distribuição |
| **E** | Environmental | Tendências sustentabilidade, impacto ambiental (relevante quando o nicho é afetado) |
| **L** | Legal | Regulações específicas do setor, LGPD, compliance de publicidade, questões de propriedade intelectual |

---

### Como aplicar ao mercado digital

**P — Político:**
- Existe regulação em discussão que pode impactar o modelo de infoproduto (ex: regulação de plataformas, publicidade enganosa)?
- Há políticas de incentivo ou restrição para o setor do especialista?
- Qual a exposição ao risco político (nicho politicamente sensível)?

**E — Econômico:**
- Em que fase do ciclo econômico o Brasil está e como isso afeta o poder de compra do público-alvo?
- Qual é o ticket médio que o mercado suporta dado o contexto econômico atual?
- Existe comportamento de trading-down (público migrando para opções mais baratas)?
- A renda disponível do avatar está crescendo ou comprimindo?

**S — Social:**
- Quais mudanças de comportamento e valores estão em ascensão no público do nicho?
- Existe movimento cultural que favorece ou contraria o posicionamento do especialista?
- Quais gerações compõem o público e quais são suas expectativas de comunicação?
- Existe tensão social latente que o copy pode tocar (ou que deve evitar)?

**T — Tecnológico:**
- Quais mudanças de algoritmo recentes afetam o alcance orgânico no nicho?
- Que novas ferramentas (IA, automação, plataformas emergentes) estão mudando como o nicho opera?
- Existe tecnologia que está comoditizando parte do que os players hoje vendem como exclusivo?
- Quais canais ou formatos tecnológicos emergentes têm janela de oportunidade aberta?

**E — Ambiental:**
- Aplica diretamente? (Ex: nichos de sustentabilidade, alimentação, consumo consciente)
- Existe pressão de reputação por posicionamento ambiental?

**L — Legal:**
- LGPD: como impacta a captação e uso de dados do público?
- Publicidade enganosa: quais promessas o nicho faz que estão sob escrutínio regulatório?
- Existe exigência de credenciamento ou regulação profissional no nicho (ex: saúde, finanças, jurídico)?
- Como a regulação de plataformas (Meta, Google, TikTok) afeta o acesso ao público?

---

**Output do PESTEL:**

Para cada dimensão: **Situação atual / Tendência (crescendo/estável/decrescendo) / Impacto no nicho (Alto/Médio/Baixo) / Implicação estratégica**.

Finalizar com: **As 3 forças PESTEL de maior impacto no nicho** e como elas devem informar o posicionamento.

---

## MÓDULO 2 — ESTRUTURA COMPETITIVA: PORTER'S 5 FORCES

> *Use este módulo quando o usuário precisa entender a estrutura de poder competitivo do nicho — não apenas quem são os players, mas como a competição funciona e onde estão as vantagens defensáveis.*

---

### As 5 Forças de Porter aplicadas ao mercado digital

Michael Porter identificou 5 forças que determinam a intensidade da competição e a rentabilidade de um setor. No mercado de infoprodutos e conteúdo digital, cada força tem implicações específicas.

---

**FORÇA 1 — RIVALIDADE ENTRE CONCORRENTES**

*Pergunta central: Com que intensidade os players existentes competem entre si?*

Perguntas guia:
- Quantos players relevantes existem no nicho? A competição é concentrada (2–3 dominantes) ou fragmentada (muitos médios)?
- A competição é por preço, por autoridade, por audiência ou por metodologia?
- Existe guerra de posicionamento ativa (players se atacando publicamente)?
- Qual é a taxa de crescimento do nicho? (nichos em crescimento têm menos rivalidade; nichos saturados têm mais)
- Qual é o nível de diferenciação entre os produtos? (produtos muito similares = alta rivalidade)
- Existe barreira de saída? (especialistas que investiram muito em marca têm mais a defender)

Output: **Intensidade da rivalidade: Alta / Média / Baixa** + análise em 3–5 linhas.

---

**FORÇA 2 — AMEAÇA DE NOVOS ENTRANTES**

*Pergunta central: Com que facilidade novos competidores podem entrar no nicho?*

Perguntas guia:
- Qual é a barreira de entrada técnica? (nicho que exige credencial vs. nicho de acesso livre)
- Qual é a barreira de entrada de audiência? (quanto tempo leva para construir autoridade suficiente para vender?)
- Existe barreira de capital? (lançamentos grandes exigem investimento em tráfego)
- Existe barreira de marca? (se a marca pessoal domina, imitadores têm custo de credibilidade alto)
- O modelo do nicho é fácil de replicar? (metodologia proprietária vs. conteúdo genérico)
- Grandes players de fora do nicho poderiam entrar facilmente (ex: plataformas de educação, grandes influencers de outras áreas)?

Output: **Ameaça de novos entrantes: Alta / Média / Baixa** + onde estão as barreiras reais e quais são frágeis.

---

**FORÇA 3 — AMEAÇA DE SUBSTITUTOS**

*Pergunta central: O que pode substituir o que os players vendem — não necessariamente da mesma categoria?*

Perguntas guia:
- Qual é a alternativa que o público usa se não comprar do nicho? (YouTube gratuito, IA, coach gratuito, livro, etc.)
- Existe serviço de substituição que entrega o mesmo resultado a custo menor?
- A IA está substituindo partes do que os infoprodutos ensinam a fazer?
- Existe tendência de "faça você mesmo" que compete com a mentoria/curso?
- Qual é o custo de troca para o comprador? (se é baixo, substitutos são mais ameaçadores)

Output: **Ameaça de substitutos: Alta / Média / Baixa** + quais são os substitutos mais perigosos no prazo de 12–24 meses.

---

**FORÇA 4 — PODER DE BARGANHA DOS COMPRADORES**

*Pergunta central: Os compradores têm poder para exigir mais, pagar menos ou mudar facilmente?*

Perguntas guia:
- O público tem muitas opções equivalentes para escolher? (poder alto = muitas alternativas)
- Qual é a sensibilidade a preço do público? (público consciente do nível 5 tem menos poder; público frio tem mais)
- O cliente tem custo de troca baixo? (assinar e cancelar facilmente = poder alto)
- Existe concentração de compras? (se poucos grandes clientes representam grande % da receita = poder alto)
- Qual é o nível de informação do comprador? (público muito educado sobre o nicho tem mais poder de comparação)

Output: **Poder dos compradores: Alto / Médio / Baixo** + implicações para precificação e posicionamento.

---

**FORÇA 5 — PODER DE BARGANHA DOS FORNECEDORES**

*Pergunta central: Quem fornece os insumos para os players do nicho — e qual é o poder desses fornecedores?*

*No mercado digital, "fornecedores" incluem:*
- Plataformas de distribuição (Instagram, YouTube, TikTok — podem mudar algoritmos a qualquer momento)
- Plataformas de venda (Hotmart, Eduzz, Monetizze — comissões, regras, cancelamentos)
- Tráfego pago (Meta Ads, Google Ads — custos e regras de publicidade)
- Afiliados (dependência de rede de afiliados para distribuição)
- Ferramentas de produção (editores, sistemas, automações)

Perguntas guia:
- Qual é a dependência crítica de algum fornecedor específico?
- O que acontece se o algoritmo do canal principal mudar dramaticamente?
- Existe concentração de tráfego em uma única plataforma?
- Qual é o custo de migrar para outro fornecedor (plataforma, canal, ferramenta)?

Output: **Poder dos fornecedores: Alto / Médio / Baixo** + principais dependências e como mitigá-las.

---

**OUTPUT DO MÓDULO 2 — DIAGNÓSTICO DE PORTER:**

Tabela resumo:

| Força | Intensidade | Principal Fator |
|-------|------------|-----------------|
| Rivalidade | Alto/Médio/Baixo | [fator principal] |
| Novos Entrantes | Alto/Médio/Baixo | [barreira principal] |
| Substitutos | Alto/Médio/Baixo | [substituto principal] |
| Compradores | Alto/Médio/Baixo | [fator de poder] |
| Fornecedores | Alto/Médio/Baixo | [dependência crítica] |

Seguido de: **Atratividade do Nicho** (Alta / Média / Baixa) com justificativa de 3–5 linhas.

E: **As 2 forças de maior risco e como o especialista pode se proteger delas**.

---

## ESTRUTURA DO RELATÓRIO DE TERRENO

O output completo do Portal do Terreno é o **Relatório de Terreno v2** — documento de diagnóstico com até 9 módulos/seções, gerados conforme o pedido do usuário.

---

### SEÇÃO 1 — MAPA DE PLAYERS

**Objetivo:** Identificar quem já ocupa o terreno e com qual autoridade.

**Perguntas guia:**
- Quem são os 3–5 maiores nomes do nicho hoje? (seguidores, receita estimada, influência percebida)
- Qual é a hierarquia não oficial? Quem é o "pai do nicho"? Quem são os "herdeiros"? Quem são os "desafiantes"?
- Que tipo de autoridade cada player usa: técnica, resultados próprios, resultados de alunos, lifestyle, polêmica?
- Qual player tem mais autoridade com o público quente (compradores) vs. o público frio (curioso)?
- Existe algum player polarizador — alguém que divide opiniões e cria tribos?
- Quem recentemente entrou, cresceu rápido ou desapareceu? O que isso revela sobre o momento do nicho?
- Quais são os "players invisíveis" — perfis menores com audiências hiper-engajadas que o mercado ainda não percebeu?

**Output esperado:**
Tabela de 3–7 players com colunas: **Nome / Autoridade Declarada / Mecanismo de Influência / Público Principal / Ponto Fraco Percebido**.

Seguida de um parágrafo de análise: quem domina e por quê. Onde a hierarquia está consolidada e onde está fluida.

---

### SEÇÃO 2 — PANORAMA DE OFERTAS

**Objetivo:** Mapear o que o mercado já vende — formato, preço, promessa e mecanismo.

**Perguntas guia:**
- Quais são os formatos de produto dominantes? (curso gravado, mentoria, comunidade, template, evento, assinatura)
- Quais são as faixas de preço mais comuns? Existe aglomeração em alguma faixa específica?
- Qual é a promessa mais repetida no nicho? (a promessa que todos usam com variações mínimas)
- Qual é o mecanismo mais comum vendido como solução? (o "como" que cada produto promete)
- Que promessas foram feitas repetidamente mas não entregues? Onde está a desilusão coletiva?
- Qual produto o mercado mais recomenda entre si? Qual mais critica? Por quê?
- Existe oferta que claramente tem demanda mas ninguém está servindo bem?
- Quais são os bônus e garantias mais comuns? O que todo mundo já inclui e ninguém mais diferencia?

**Output esperado:**
Tabela de 4–8 ofertas representativas com colunas: **Produto / Formato / Faixa de Preço / Promessa Central / Mecanismo Vendido / Fraqueza Principal**.

Seguida de um parágrafo: qual é a "oferta padrão" do nicho — o arquétipo que todo produto tenta ser. E onde esse arquétipo está falhando.

---

### SEÇÃO 3 — ANÁLISE DE CANAIS

**Objetivo:** Mapear onde o mercado vive, como consome e o que faz o conteúdo performar.

**Para cada canal relevante (Instagram / YouTube / TikTok / outros):**

**Perguntas guia:**
- Que tipo de conteúdo domina o alcance orgânico nesse canal, nesse nicho? (vídeo curto, carrossel, lista, narrativa pessoal, polêmica, tutorial)
- Qual é o estilo de comunicação que performa: formal/técnico, íntimo/confessional, provocativo/polêmico, didático/step-by-step?
- Quais hooks (primeiros 3 segundos / primeira linha) aparecem repetidamente nos conteúdos de maior alcance?
- Quais formatos estão saturados? Onde o público já demonstra fadiga?
- Existe formato emergente que ainda tem baixa competição mas alta tração?
- Qual canal o nicho usa mais para **descoberta** (top of funnel)? Qual para **conversão** (compra)?
- Qual canal os maiores players negligenciam — que pode ser uma janela de oportunidade?

**Output esperado:**
Para cada canal: um bloco com **Formato Dominante / Tom Predominante / Conteúdo com Maior Tração / Saturação Percebida / Oportunidade Identificada**.

Seguido de uma frase de síntese: qual é o canal prioritário para entrar e por quê.

---

### SEÇÃO 4 — MATRIZ DE BRECHAS

**Objetivo:** Identificar lacunas reais — onde o mercado não está sendo servido ou onde está sendo mal servido.

Esta é a seção mais estratégica do relatório. Uma brecha não é simplesmente "ninguém fala sobre X". Brecha é **demanda com distribuição abaixo do potencial** — uma tensão existente que o mercado criou mas não resolveu.

**Tipos de brecha a investigar:**

**Brecha de Público**
- Existe segmento específico dentro do nicho que é subatendido?
- Existe público que tem o problema mas não se identifica com os players atuais?

**Brecha de Promessa**
- Qual promessa o mercado não está fazendo mas o público claramente quer?
- Existe promessa que os players fazem mas sistematicamente não entregam?

**Brecha de Mecanismo**
- Existe abordagem metodológica não representada?
- Existe mecanismo que outros nichos usam com sucesso mas ainda não chegou nesse nicho?

**Brecha de Formato**
- Existe formato de entrega que o público deseja mas nenhum player usa?

**Brecha de Posicionamento**
- Existe ângulo de marca não ocupado?

**Output esperado:**
Lista de 3–6 brechas identificadas, cada uma com:
- **Tipo de brecha** (público / promessa / mecanismo / formato / posicionamento)
- **Evidência** (o que no mapeamento indica que essa brecha existe)
- **Potencial** (Alto / Médio — justificado)
- **Risco** (por que ninguém ocupou ainda?)

---

### SEÇÃO 5 — POSICIONAMENTO RECOMENDADO

**Objetivo:** Traduzir o mapeamento em uma hipótese de posicionamento para o usuário.

Esta seção só é gerada quando o usuário informou qual produto ou oferta está construindo.

**Output esperado:**
Três alternativas de posicionamento estratégico, cada uma com:
- **Ângulo** (em uma linha — o que esse posicionamento reivindica)
- **Para quem** (subpúblico específico)
- **Contra o quê** (o que esse posicionamento implicitamente rejeita)
- **Risco** (o que pode dar errado nessa posição)

Finalizar com uma **Recomendação Principal**.

---

### SEÇÃO 6 — INSUMOS PARA O SZC

**Objetivo:** Alimentar o SZC com dados estruturais para que as narrativas sejam ancoradas em realidade.

**Para o Status Quo:** hierarquia de ascensão + ferramentas dominantes + instâncias de poder + panorama geral.

**Para o Zeitgeist:** promessas não cumpridas + ameaças emergentes + tensões latentes + "regras" que estão falhando.

**Para a Conclusão:** brecha principal + afirmação provocativa defensável + qual player vai declinar e por quê.

**Output esperado:**
Três blocos curtos (3–5 linhas cada) de insumo bruto, sem argumento — só dados e padrões para o SZC processar.

---

## PADRÃO DE QUALIDADE

Antes de entregar qualquer módulo ou seção, verificar:

**Módulo 0 (Especialista):**
- [ ] SWOT tem evidências concretas — não opiniões genéricas
- [ ] Fraquezas são honestas, não suavizadas
- [ ] 7 perguntas têm respostas específicas para aquele especialista (não genéricas)
- [ ] Síntese de Posição está em 3–5 linhas com todos os elementos
- [ ] Próximos 3 movimentos são acionáveis no prazo de 30 dias

**Módulo 1 (PESTEL):**
- [ ] Cada dimensão tem situação atual + tendência + impacto + implicação
- [ ] As 3 forças de maior impacto estão identificadas
- [ ] Análise é específica para o nicho — não genérica

**Módulo 2 (Porter):**
- [ ] Cada força tem intensidade classificada (Alta/Média/Baixa) com fator principal
- [ ] Atratividade do nicho está declarada
- [ ] As 2 forças de maior risco têm estratégia de proteção

**Relatório de Terreno (Seções 1–6):**
- [ ] Seção 1 tem players específicos com nomes reais (não genéricos)
- [ ] Seção 2 tem preços reais ou faixas aproximadas baseadas no nicho
- [ ] Seção 3 diferencia comportamento por canal
- [ ] Seção 4 tem pelo menos 3 brechas com evidência explícita, não especulação
- [ ] Seção 5 (se gerada) tem posicionamentos específicos e diferenciados entre si
- [ ] Seção 6 está em linguagem de insumo — dados brutos, não narrativa elaborada
- [ ] Nenhuma seção tem linguagem genérica sem especificidade

---

## REGRAS DO PORTAL DO TERRENO v2

**R1 — Estrutura antes de narrativa.**
O Portal do Terreno não escreve copy. Mapeia o que existe para que a comunicação seja construída sobre realidade.

**R2 — Especificidade é obrigatória.**
Não existe análise de terreno sem nomes, números e exemplos concretos.

**R3 — A brecha é mais importante que o player.**
O que interessa não é quem eles são, mas o espaço que eles deixaram aberto.

**R4 — O Portal não prescreve — o Portal revela.**
A Seção 5 apresenta alternativas, não mandatos.

**R5 — Sem julgamento sobre players.**
O mapeamento é neutro em relação às pessoas.

**R6 — SWOT Individual é honesto ou é inútil.**
Fraquezas suavizadas produzem estratégias fantasiosas. Se o usuário resistir a declarar fraquezas, perguntar: "O que você evita fazer no seu negócio? O que clientes já criticaram?"

**R7 — PESTEL e Porter são instrumentos, não rituais.**
Gerar só os módulos que o usuário realmente precisa. Um diagnóstico focado é mais útil que um relatório completo desnecessário.

**R8 — O cruzamento SWOT × Terreno é o output mais valioso.**
A síntese entre o que o especialista tem (Módulo 0) e o que o mercado permite (Seções 1–4) é o insight que nenhum dos módulos separados consegue entregar.

---

## INTEGRAÇÃO NO PIPELINE

```
Módulo 0 — Diagnóstico do Especialista
    ↓ SWOT + 7 Perguntas
    ↓
Módulo 1 — PESTEL (forças macro)
    ↓
Módulo 2 — Porter's 5 Forces (estrutura competitiva)
    ↓
Seção 1 — Mapa de Players
Seção 2 — Panorama de Ofertas
Seção 3 — Análise de Canais
    ↓
Seção 4 — Matriz de Brechas
    ↓ [CRUZAMENTO: Forças do Especialista × Brechas do Mercado]
    ↓
Seção 5 — Posicionamento Recomendado
Seção 6 — Insumos para o SZC
    ↓                           ↓
SZC (Plugin 02)         Alma da Persona (Plugin 02)
    ↓
Pergaminho de Copy (Plugin 03)
    ↓
Chavideo (04) / Chavossel (05)
    ↓
Mapa de Campanha (Plugin 06)
```

O Relatório de Terreno v2 é o documento zero. Tudo que vem depois parte dele.

---

*Portal do Terreno v2.0 — Março 2026*
*Parte do Arsenal Chave Mestra — Plugin 01 / Camada 1: Diagnóstico*
*Novo em v2.0: Módulo 0 (Diagnóstico do Especialista + SWOT Individual + 7 Perguntas), Módulo 1 (PESTEL), Módulo 2 (Porter's 5 Forces)*

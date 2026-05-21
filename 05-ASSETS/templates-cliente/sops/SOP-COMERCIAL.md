# SOP — Arquitetura Comercial

**Tipo:** Estratégico (decisão antes da execução)
**Quando:** ao iniciar qualquer novo produto, ao planejar qualquer campanha, ao mudar ticket ou funil de produto existente
**Tempo estimado:** 30–60 min
**Plugin responsável:** Alquimista → `maquina-de-receita/SKILL.md` + `portal-da-escala/SKILL.md`
**Posição no fluxo:**

```
SOP-ONBOARDING → SOP-COMERCIAL → SOP-CAMPANHA
```

**Pré-requisito:** D3 (Estratégia) do diagnóstico 6D preenchido no Dossiê.

---

## Por que este SOP existe

O `SOP-CAMPANHA` começa na oferta — mas oferta sem arquitetura comercial definida é apostagem. Plataforma errada corrói margem. Ticket errado exige funil que o momento não suporta. Meta sem math real vira frustração.

Este SOP fecha o gap entre "saber o que o cliente quer vender" e "saber se faz sentido comercial e como executar".

---

## Pré-condições

- [ ] Produto ou ideia de produto definida (pode ser rascunho)
- [ ] Fase do negócio identificada (1 / 2 / 3 / 4)
- [ ] Meta de receita do ciclo definida (mesmo que aproximada)

---

## Fase 1 — Diagnóstico de Fase

**Ativar:** Alquimista → `portal-da-escala/SKILL.md` (Módulo 1 — Diagnóstico de Fase)

Aplicar as 5 perguntas de diagnóstico rápido:

| Pergunta | Opção 1 | Opção 2 | Opção 3 | Opção 4 |
|---|---|---|---|---|
| Clientes pagantes? | < 50 | 50–500 | 500+ | Múltiplos produtos |
| Receita previsível? | Não | Às vezes | Geralmente | Sim |
| Canal de aquisição? | Nenhum | 1 orgânico | 1 + pago testado | Múltiplos |
| Dependência do fundador? | 100% | Com apoio pontual | Delegação parcial | Equipe funcional |
| Documentação de entrega? | Nenhuma | Parcial | Razoável | Completa |

**Output:** Fase 1 / 2 / 3 / 4 → registrar no Dossiê §3 > Fase Atual.

**Regra crítica:** se o cliente afirmar Fase 3 ou 4 mas não tiver PMF confirmado (>40% responderia "muito desapontado" sem o produto) → tratar como Fase 2 até os sinais de PMF aparecerem.

---

## Fase 2 — Definição de Plataforma

**Ativar:** Alquimista → `maquina-de-receita/SKILL.md` (Módulo 1 — Matriz de Plataformas)

Coletar os dados necessários para a decisão:

```
Produto: [nome + formato]
Ticket: R$[X]
Estratégia de distribuição: [ ] Só orgânico  [ ] Tráfego pago  [ ] Afiliados  [ ] Co-produção
Área de membros necessária? [ ] Sim  [ ] Não
Co-produtor envolvido? [ ] Sim → split automático necessário  [ ] Não
Público tem preferência por PIX? [ ] Sim  [ ] Não  [ ] Misto
```

**Árvore de decisão:**

```
Ticket < R$500 E funil de impulso?
    └── SIM → Cakto (PIX zero = máxima margem)
    └── NÃO ↓

Depende de afiliados para distribuição?
    └── SIM → Hotmart (maior rede BR) ou Braip (ticket baixo, volume agressivo)
    └── NÃO ↓

Precisa de área de membros sem ferramenta extra?
    └── SIM → Hotmart Club
    └── NÃO ↓

Marca consolidada que não quer branding de plataforma?
    └── SIM → Perfect Pay (white-label)
    └── NÃO ↓

Produto em USD ou para público internacional?
    └── SIM → Stripe / Lemon Squeezy / Hotmart Internacional
    └── NÃO → Hotmart (default seguro para ticket médio/alto)
```

**Output:** plataforma escolhida + justificativa → registrar no Dossiê §3 > Plataforma.

---

## Fase 3 — Math de Receita (Calculadora Reversa)

**Ativar:** Alquimista → `maquina-de-receita/SKILL.md` (Módulo 2 — Mapa de Marcos de Receita)

Executar o cálculo para o ciclo planejado:

```
META MENSAL: R$[X]
TICKET: R$[Y]

VENDAS NECESSÁRIAS = META ÷ TICKET
  R$[X] ÷ R$[Y] = [Z] vendas/mês

TAXA DE CONVERSÃO ESTIMADA (usar referência):
  [ ] Lista de email nutrida: 1–5%
  [ ] WhatsApp aquecido: 3–15%
  [ ] Tráfego frio → oferta direta: 0,5–3%
  [ ] Audiência engajada + oferta alinhada: 2–8%
  [ ] Prospecção ativa 1:1: 10–30%

LEADS NECESSÁRIOS = VENDAS ÷ TAXA%
  [Z] ÷ [taxa] = [N] leads qualificados/ciclo

ORIGEM DOS LEADS:
  [ ] Orgânico (estimativa de alcance atual: ___)
  [ ] Tráfego pago (verba disponível: R$___ / CPL estimado: R$___)
  [ ] Afiliados (N afiliados × alcance médio: ___)
  [ ] Combinação: ___
```

**Verificação de realidade:**
- Os leads necessários são atingíveis com os canais disponíveis?
- Se NÃO → ajustar meta, ajustar ticket, ou planejar fase de crescimento de audiência antes da campanha

**Output:** math de receita completo → registrar no Dossiê §3 > Arquitetura Comercial.

---

## Fase 4 — Arquitetura de Funil

**Ativar:** Alquimista → `maquina-de-receita/SKILL.md` (Módulo 3 — Funis Curtos)

Escolher o funil adequado ao ticket e à fase:

| Funil | Ticket ideal | Fase | Complexidade |
|---|---|---|---|
| A — PIX Direto (ManyChat) | < R$197 | 1 ou 2 | Baixa — implementar em 1h |
| B — Sequência WhatsApp 3 msgs | R$197–R$997 | 2 | Baixa — escrever e configurar |
| C — Email de 5 dias | R$297–R$1.997 | 2 ou 3 | Média — sequência + copywriting |
| D — Venda Consultiva 1:1 | > R$1.997 | qualquer | Alta — processo manual |
| E — Lançamento Relâmpago 48–72h | R$197–R$997 | 2 | Média — cronograma comprimido |

**Regra:** se o cliente está na Fase 1 → NENHUM funil automatizado. Usar Funil D (manual 1:1) para validar antes de automatizar qualquer coisa.

**Output:** funil escolhido + ferramentas necessárias (ManyChat / ActiveCampaign / WhatsApp Business) → registrar no Dossiê §3 > Funil.

---

## Fase 5 — Verificação de Margem Real

Antes de fechar a arquitetura, calcular a margem real (não o faturamento bruto):

```
RECEITA BRUTA:                  R$[X]

(-) Taxa da plataforma:
    Cakto PIX: 0%  |  Cakto Cartão: ~5%  |  Hotmart: ~10%
    = R$[-]

(-) Tráfego pago (se aplicável):
    = R$[-]

(-) Comissão de afiliados (se aplicável):
    = R$[-]

(-) Impostos MEI (DAS fixo) / ME Simples (~6–11%):
    = R$[-]

(-) Ferramentas e operação (email, ManyChat, suporte):
    = R$[-]

MARGEM LÍQUIDA ESTIMADA:        R$[resultado]
MARGEM %:                       [%]
```

**Sinal de alerta:** margem < 30% → revisar plataforma, ticket ou custos antes de ir para campanha.

**Output:** margem real documentada → registrar no Dossiê §3 > Margem Estimada.

---

## Fase 6 — Verificação Legal (se aplicável)

- [ ] Envolve co-produtor? → consultar `05-ASSETS/referencias/LEGAL-AUXILIAR.md` § Contrato de Co-produção
- [ ] Produto coleta dados de usuários? → checklist LGPD do LEGAL-AUXILIAR
- [ ] Produto envolve split de receita com terceiro? → contrato antes do setup na plataforma

---

## Output do SOP

| Item | Onde registrar |
|---|---|
| Fase do negócio | Dossiê §3 > Fase Atual |
| Plataforma + justificativa | Dossiê §3 > Plataforma |
| Math de receita | Dossiê §3 > Arquitetura Comercial |
| Funil escolhido + ferramentas | Dossiê §3 > Funil |
| Margem estimada | Dossiê §3 > Margem Estimada |

**Handoff para SOP-CAMPANHA:** com a arquitetura comercial validada, o SOP-CAMPANHA pode ser executado sabendo exatamente: qual plataforma configurar, qual funil produzir, qual volume de leads precisa gerar.

---

## Erros comuns a evitar

| Erro | Consequência | Prevenção |
|---|---|---|
| Usar Hotmart para ticket baixo com funil de PIX | Taxa de 9,9% corrói toda a margem de ticket < R$197 | Cakto para qualquer funil que converte por PIX |
| Automatizar funil sem validação manual | Automação escala erro — gasto com ManyChat + tráfego sem retorno | Fase 1 sempre manual. Só automatizar após 10+ vendas confirmadas |
| Meta de receita sem math reverso | Frustração quando a meta não é atingível com a audiência atual | Calcular leads necessários ANTES de planejar a campanha |
| Margin squeeze oculto | Faturamento parece ótimo, caixa não fecha | Calcular margem real na Fase 5, antes de qualquer compromisso |
| Co-produção sem contrato | Conflito sobre split, direitos e responsabilidades | Ver SOP-COPROD + LEGAL-AUXILIAR antes de qualquer setup |

---

*SOP Comercial — Sistema Chave Mestra. Arquitetura comercial primeiro, campanha depois.*

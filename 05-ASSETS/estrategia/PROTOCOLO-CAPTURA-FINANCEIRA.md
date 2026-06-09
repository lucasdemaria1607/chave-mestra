---
status: blueprint
criado: 2026-06-07
autor: Lucas De Maria (Grigo)
uso: protocolo operacional detalhado — como cada tipo de dado financeiro nasce, entra, é classificado, armazenado e vira inteligência
depende-de: SISTEMA-FINANCEIRO-SOLO.md, INTEGRACAO-OPERACIONAL.md, GROWTH-LOOP.md
---

# Protocolo de Captura Financeira — Chave Mestra

O framework financeiro diz **o que** registrar.
Este protocolo diz **como exatamente** cada dado entra no sistema.

Princípio: dado financeiro que não tem caminho definido se perde. Dado que se perde vira buraco no DRE. Buraco no DRE vira decisão errada. Decisão errada vira prejuízo disfarçado de "fase difícil".

---

## REGRA ZERO — O CAMINHO DE TODO DADO FINANCEIRO

```
NASCIMENTO          CAPTURA            CLASSIFICAÇÃO       ARMAZENAMENTO       ANÁLISE
(onde o dado nasce) (como entra)       (o que ele é)       (onde a prova fica) (o que ele significa)
      │                  │                   │                    │                    │
      ▼                  ▼                   ▼                    ▼                    ▼
Plataforma/banco   Sheets (linha na    Categoria +          Drive (pasta           DRE / dashboard /
Pix / nota fiscal  aba Transações)     subcategoria do      do mês + tipo)         relatório mensal
Contrato / recibo                      plano fixo
```

Cada tipo de transação segue esse caminho. Sem exceção. Sem "depois eu registro". Sem "era pouca coisa". R$ 9,90 de assinatura esquecida durante 14 meses são R$ 138,60 de lixo invisível.

---

## PARTE 1 — FONTES DE DADO: ONDE O DINHEIRO NASCE

### 1.1 Mapa de fontes por tipo de transação

| Tipo | Fonte primária | Formato do dado | Frequência | Exemplo |
|---|---|---|---|---|
| **Venda digital** | Plataforma (Hotmart, Kiwify, Cakto, Stripe) | Dashboard + CSV exportável | Diária/semanal | Venda da Chave Mestra via Kiwify |
| **Venda direta (Pix)** | Banco (extrato) + comprovante | Extrato bancário + print/PDF | Por transação | Consultoria paga via Pix |
| **Recorrência** | Plataforma ou cobrança manual | Dashboard + CSV | Mensal | Assinatura da Comunidade |
| **Reembolso dado** | Plataforma | Dashboard + notificação | Por evento | Reembolso Hotmart 7 dias |
| **Reembolso recebido** | Fornecedor | E-mail + extrato | Por evento | Ferramenta cancelada devolveu crédito |
| **Assinatura/ferramenta** | Cartão de crédito / débito | Fatura do cartão | Mensal | Notion, Canva, domínio |
| **Tráfego pago** | Meta Ads, Google Ads | Dashboard da plataforma + CSV | Diária/semanal | Campanha Chave Mestra - Jun/26 |
| **Comissão paga** | Plataforma / manual | Relatório da plataforma | Por venda | Comissão afiliado 30% |
| **Imposto** | Guia DAS / contador | Boleto + comprovante | Mensal | Simples Nacional - Jun/26 |
| **Pró-labore** | Transferência própria | Extrato bancário | Mensal | Retirada PJ→PF |
| **Nota fiscal emitida** | Prefeitura / contador | PDF da NFS-e | Por serviço | NFS consultoria cliente X |
| **Nota fiscal recebida** | Fornecedor | PDF / XML | Por compra | Nota do domínio, hospedagem |
| **Contrato** | Assinatura digital / Word / PDF | Documento assinado | Por projeto | Contrato de mentoria |

---

## PARTE 2 — PROTOCOLO POR TIPO DE TRANSAÇÃO

### 2.1 VENDA EM PLATAFORMA (Hotmart, Kiwify, Cakto, Stripe, etc.)

A plataforma é a fonte mais limpa porque ela já registra tudo. O problema é que ela registra **do jeito dela**, não do seu.

**Protocolo:**

```
QUANDO: toda segunda-feira (Giro Financeiro Semanal)
        OU imediatamente se for venda high-ticket (>R$ 500)

PASSO 1 — Exportar
  → Acessar dashboard da plataforma
  → Exportar CSV do período (última semana)
  → Salvar CSV em: Drive > Financeiro > 2026 > [Mês] > Exportações/
  → Nomear: AAAA-MM-DD_export_[plataforma]_[período].csv
  → Ex: 2026-06-07_export_kiwify_semana-23.csv

PASSO 2 — Classificar com IA
  → Colar CSV na conversa
  → Prompt:
    "Classifique estas transações usando APENAS as categorias abaixo.
     ENTRADAS: [lista do plano de categorias]
     Campos obrigatórios: Data, Tipo (entrada), Descrição, Valor bruto,
     Valor líquido (bruto - taxa da plataforma), Categoria, Produto/oferta,
     Status (recebido/pendente/reembolsado), Forma de pagamento.
     Quando incerto, marque Categoria como 'REVISAR'.
     Retorne em formato tabela."

PASSO 3 — Revisar
  → Conferir: a IA acertou as categorias?
  → Conferir: valor líquido está correto? (plataforma já desconta taxa?)
  → Conferir: algum reembolso nesse período?
  → Marcar "Revisado por humano: SIM"

PASSO 4 — Registrar
  → Copiar dados classificados para aba "Transações" do Sheets
  → Preencher campos que a IA não preenche:
    - Campanha relacionada (qual campanha gerou essa venda?)
    - Competência (mês a que se refere, não data do recebimento)
    - Link do comprovante no Drive

PASSO 5 — Evidência
  → Screenshot do dashboard com resumo do período
  → Salvar em: Drive > Financeiro > 2026 > [Mês] > Plataformas/
  → Nomear: AAAA-MM-DD_dashboard_[plataforma].png
```

**O que a plataforma já resolve:**
- Valor bruto e líquido (com taxa descontada)
- Data da venda e do recebimento
- Produto vendido
- Forma de pagamento
- Status (aprovado, reembolsado, em disputa)

**O que a plataforma NÃO resolve (você precisa adicionar):**
- Categoria do seu plano de categorias
- Campanha que gerou a venda
- Competência contábil (importa no fechamento)
- Link do comprovante no Drive
- Se foi classificado/revisado

**Taxas típicas por plataforma (conferir periodicamente):**

```
Hotmart:     até 9.9% sobre venda + taxa fixa por transação
Kiwify:      ~8.99% sobre venda
Cakto:       variável, verificar contrato
Stripe:      2.9% + R$ 0.30 por transação (internacional)
PagSeguro:   ~3.99% cartão / ~1% boleto
Mercado Pago: ~4.99% cartão
```

Essas taxas mudam. Conferir a cada 3 meses na Auditoria Documental.

---

### 2.2 VENDA DIRETA VIA PIX

Pix é a fonte mais perigosa porque é a mais informal. Dinheiro entra, você vê o saldo subir, e o cérebro registra como "deu certo". Mas o sistema não registrou nada.

**Protocolo:**

```
QUANDO: imediatamente após receber o Pix
        (máximo: até o fim do dia)

PASSO 1 — Capturar comprovante
  → Abrir app do banco
  → Screenshot OU exportar PDF do comprovante
  → Informações obrigatórias no comprovante:
    - Data e hora
    - Nome do pagador
    - Valor
    - Chave Pix usada
    - ID da transação (código único)

PASSO 2 — Salvar evidência
  → Drive > Financeiro > 2026 > [Mês] > Comprovantes/
  → Nomear: AAAA-MM-DD_pix_[cliente-slug]_[valor].pdf
  → Ex: 2026-06-07_pix_joao-silva_497-00.pdf

PASSO 3 — Registrar na planilha
  → Aba "Transações" do Sheets
  → Preencher manualmente:

  Data:               2026-06-07
  Tipo:               entrada
  Descrição:          Venda Chave Mestra - João Silva
  Valor bruto:        497,00
  Valor líquido:      497,00 (Pix não tem taxa para recebedor PF/PJ*)
  Categoria:          Chave Mestra
  Subcategoria:       —
  Conta/banco:        Nubank PJ
  Forma de pagamento: Pix
  Cliente:            João Silva
  Produto/oferta:     Sistema Operacional
  Campanha:           Orgânico Instagram Jun/26
  Status:             recebido
  Competência:        junho/2026
  Comprovante:        [link do Drive]
  Classificado IA:    não
  Revisado humano:    sim

  *Nota: se usar intermediário (PagSeguro, Mercado Pago) para
  gerar link Pix, HAVERÁ taxa — registrar valor líquido corretamente.

PASSO 4 — Registrar no Contas a Receber
  → Se o Pix era de um valor previsto (parcela, combinado), atualizar
    status na aba "Contas a Receber": pendente → recebido
  → Se era venda nova, não precisa (já está nas Transações)
```

**Cenários especiais de Pix:**

```
PIX PARCELADO (combinado informal):
  → Registrar CADA parcela como transação separada
  → Na aba "Contas a Receber": registrar todas as parcelas previstas
  → Status: recebido / pendente / atrasado
  → Nunca registrar o valor total de uma vez se ainda não recebeu tudo

PIX COM DESCONTO:
  → Registrar o valor efetivamente recebido como "Valor bruto"
  → No campo "Observação": "Valor original: R$ 497. Desconto de R$ 100 (promoção X)"
  → Isso preserva o histórico de precificação real

PIX DE REEMBOLSO (você devolvendo):
  → Tipo: saída
  → Categoria: Reembolso dado
  → Comprovante do Pix de devolução obrigatório
  → Atualizar transação original: Status = reembolsado
```

---

### 2.3 NOTAS FISCAIS

Nota fiscal é documento legal. Não é opcional quando o negócio exige. Mas o registro no sistema financeiro é diferente do registro fiscal.

**Para notas que VOCÊ emite (NFS-e de serviço):**

```
QUANDO: a cada serviço prestado que exige nota
        (consultoria, mentoria, implementação, serviço avulso)

PASSO 1 — Emitir a nota
  → Via portal da prefeitura OU via contador
  → Dados obrigatórios:
    - CNPJ do tomador (cliente)
    - Descrição do serviço
    - Valor
    - Código de serviço (CNAE/ISS)
    - Alíquota de ISS

PASSO 2 — Salvar o PDF
  → Drive > Financeiro > 2026 > [Mês] > Notas_Fiscais_Emitidas/
  → Nomear: AAAA-MM-DD_NFS_[cliente-slug]_[valor].pdf
  → Ex: 2026-06-07_NFS_studio-zen_2500-00.pdf

PASSO 3 — Registrar na planilha
  → Na transação correspondente (que já existe na aba "Transações"):
    - Campo "Comprovante/link": adicionar link da NFS no Drive
    - Campo "Observação": "NFS emitida - nº [número]"
  → Se a transação ainda não existe (nota emitida antes do recebimento):
    - Criar transação com Status = "previsto"

PASSO 4 — Comunicar ao contador
  → Se tem contador: enviar a NFS por e-mail ou sistema do contador
  → Se não tem: guardar para declaração (trimestral ou anual)
```

**Para notas que VOCÊ recebe (de fornecedores):**

```
QUANDO: a cada compra com nota fiscal

PASSO 1 — Receber e verificar
  → Conferir: CNPJ correto? Valor correto? Descrição compatível?

PASSO 2 — Salvar
  → Drive > Financeiro > 2026 > [Mês] > Notas_Fiscais_Recebidas/
  → Nomear: AAAA-MM-DD_NF_[fornecedor-slug]_[valor].pdf
  → Ex: 2026-06-07_NF_notion_59-00.pdf

PASSO 3 — Vincular
  → Na transação correspondente no Sheets:
    - Campo "Comprovante/link": link da NF no Drive
```

---

### 2.4 ASSINATURAS E FERRAMENTAS (saídas recorrentes)

Assinaturas são as saídas mais traiçoeiras porque são invisíveis. Você assina, esquece, e 14 meses depois descobre que pagou R$ 800 numa ferramenta que usou 3 vezes.

**Protocolo de setup (uma vez):**

```
PASSO 1 — Inventário de assinaturas
  → Listar TODAS as ferramentas/serviços com pagamento recorrente
  → Para cada uma:

  Nome:           Notion
  Valor:          R$ 59/mês (ou US$ X + IOF)
  Vencimento:     dia 15
  Forma:          cartão de crédito
  Categoria:      Ferramentas
  Essencial?      sim
  Última revisão: 2026-06-07
  Alternativa:    —
  Status:         ativa

PASSO 2 — Registrar no Contas a Pagar
  → Aba "Contas a Pagar" do Sheets
  → Uma linha por assinatura, com Recorrente = SIM
  → Campo "Vencimento": dia fixo do mês
```

**Protocolo mensal (no Giro Financeiro ou Fechamento):**

```
PASSO 1 — Conferir fatura do cartão
  → Abrir fatura do cartão de crédito
  → Comparar com inventário de assinaturas:
    - Todas as assinaturas esperadas estão lá?
    - Alguma cobrança inesperada apareceu?
    - Alguma mudou de valor? (reajuste silencioso)

PASSO 2 — Registrar cada assinatura na aba "Transações"
  → Uma linha por assinatura cobrada no mês
  → Tipo: saída
  → Categoria: Ferramentas (ou a categoria específica)
  → Valor: valor da fatura (atenção ao câmbio se for em dólar)

PASSO 3 — Evidência
  → Fatura do cartão (PDF) → Drive > Financeiro > 2026 > [Mês] > Faturas/
  → Nomear: AAAA-MM_fatura_[banco-cartão].pdf
```

**Regra de ouro para assinaturas:**

```
A cada 3 meses (Auditoria Documental), perguntar para CADA assinatura:
  1. Usei essa ferramenta nos últimos 30 dias?
  2. Ela é substituível por algo gratuito ou mais barato?
  3. Se eu cancelasse hoje, o que quebraria?
  4. O plano atual é o mais adequado? (não estou pagando Pro quando Basic resolve?)
```

---

### 2.5 TRÁFEGO PAGO (Meta Ads, Google Ads, etc.)

Tráfego pago é dinheiro que sai para gerar dinheiro. Se não rastrear com precisão, você joga grana no escuro e chama de "investimento em marketing".

**Protocolo:**

```
QUANDO: toda segunda-feira (Giro Financeiro) + fechamento de campanha

PASSO 1 — Exportar dados da plataforma de ads
  → Meta Ads Manager → Relatórios → período da semana
  → Dados obrigatórios:
    - Campanha (nome)
    - Investimento (valor gasto)
    - Impressões
    - Cliques
    - CTR
    - CPC
    - Leads (se tiver conversão configurada)
    - CPL (custo por lead)

PASSO 2 — Registrar na aba "Campanhas" do Sheets
  → Atualizar a linha da campanha ativa:
    - Investimento acumulado
    - Leads acumulados
    - CPL atualizado
    - Vendas atribuídas (cruzar com aba Transações)

PASSO 3 — Registrar na aba "Transações"
  → Tipo: saída
  → Categoria: Tráfego pago
  → Descrição: "Meta Ads - [nome da campanha] - semana [N]"
  → Valor: gasto da semana
  → Campanha relacionada: [nome]

PASSO 4 — Evidência
  → Screenshot do relatório da semana
  → Drive > Financeiro > 2026 > [Mês] > Campanhas/
  → Nomear: AAAA-MM-DD_ads_[plataforma]_[campanha-slug].png

PASSO 5 — Calcular métricas derivadas (mensal)
  → No fechamento do mês, calcular:
    - CAC: investimento total / vendas atribuídas
    - ROAS: receita gerada / investimento
    - Payback: dias até o investimento retornar
    - Lucro líquido da campanha: receita - investimento - taxas - impostos
```

**Como atribuir venda a campanha:**

```
MÉTODO SIMPLES (sem ferramentas sofisticadas):
  → Pergunta no checkout ou formulário: "Como nos encontrou?"
  → UTM nos links (utm_campaign, utm_source, utm_medium)
  → Código de cupom por campanha
  → Perguntar ao cliente direto (no onboarding ou mensagem de boas-vindas)

MÉTODO COM PLATAFORMA:
  → Hotmart/Kiwify rastreiam UTM automaticamente
  → Configurar src= ou utm_source= em cada link de venda
  → Relatório da plataforma mostra vendas por origem

REGRA QUANDO NÃO DÁ PRA ATRIBUIR:
  → Campo "Campanha relacionada" = "Orgânico/Não rastreado"
  → Não inventar atribuição. Dado ausente é dado ausente, não dado estimado.
```

---

### 2.6 COMISSÕES

Comissão é saída que nasce de outra transação. Ela não existe sozinha — sempre está vinculada a uma venda.

**Protocolo:**

```
TIPO A — COMISSÃO AUTOMÁTICA (plataforma calcula e retém)
  → Hotmart, Kiwify, etc. já descontam comissão do afiliado
  → Nesse caso, o "Valor líquido" da venda JÁ veio com comissão descontada
  → Na transação de entrada: campo "Observação" = "Comissão de X% retida pela plataforma"
  → NÃO registrar como saída separada (já está embutida no líquido)

TIPO B — COMISSÃO MANUAL (você paga diretamente)
  → Registrar como transação separada:
    - Tipo: saída
    - Categoria: Comissões
    - Descrição: "Comissão [nome do parceiro] - venda [produto] - [data da venda]"
    - Valor: valor da comissão
    - Comprovante: Pix/transferência para o parceiro
  → Na transação de entrada original: campo "Observação" = "Comissão manual de R$ X paga a [nome]"

TIPO C — VOCÊ COMO AFILIADO (recebe comissão)
  → Registrar como entrada:
    - Categoria: Afiliados/parcerias
    - Descrição: "Comissão afiliado - [produto] - [produtor]"
    - Comprovante: extrato da plataforma ou Pix recebido
```

---

### 2.7 IMPOSTOS

Imposto é saída obrigatória. O valor exato vem do contador ou do cálculo do regime tributário. Não estimar — registrar o que foi efetivamente pago.

**Protocolo:**

```
QUANDO: mensal (Simples Nacional) ou por evento (ISS retido)

CENÁRIO 1 — SIMPLES NACIONAL (DAS mensal)
  → Contador gera a guia ou você gera no PGDAS-D
  → Valor = alíquota sobre faturamento do mês anterior
  → Registrar:
    - Tipo: saída
    - Categoria: Impostos
    - Descrição: "DAS - [mês/ano]"
    - Valor: valor da guia
    - Vencimento: dia 20 do mês seguinte
    - Status: pago / pendente
    - Comprovante: PDF da guia + comprovante de pagamento

CENÁRIO 2 — ISS RETIDO NA FONTE
  → Quando o tomador (cliente PJ) retém ISS da sua nota
  → O valor que você recebe JÁ veio com ISS descontado
  → Na transação de entrada: "Valor bruto" = valor cheio, "Valor líquido" = valor recebido
  → Campo "Observação": "ISS retido pelo tomador: R$ X"

CENÁRIO 3 — MEI (DAS fixo)
  → R$ fixo mensal (independente de faturamento)
  → Registrar como saída recorrente
  → Contas a Pagar com Recorrente = SIM

EVIDÊNCIA:
  → Guia DAS (PDF) → Drive > Financeiro > 2026 > [Mês] > Impostos/
  → Comprovante de pagamento → mesma pasta
  → Nomear: AAAA-MM_DAS_[valor].pdf
```

**Regra crítica:** não calcular imposto sozinho para decisões importantes. Contador existe por um motivo. Usar a planilha para estimar e o contador para confirmar.

---

### 2.8 PRÓ-LABORE (retirada pessoal)

Pró-labore é a fronteira entre PJ e PF. Se não controlar isso, a planilha do negócio vira a planilha da sua vida pessoal, e você nunca sabe se o negócio é lucrativo ou se você está subsidiando ele com a conta pessoal.

**Protocolo:**

```
REGRA: definir valor fixo mensal de retirada.
       Mesmo que o caixa permita mais, manter o valor.
       O excedente vai para Reserva.

PASSO 1 — Transferir PJ → PF
  → Valor fixo no mesmo dia todo mês (ex: dia 5)
  → Da conta PJ para conta PF

PASSO 2 — Registrar
  → Tipo: saída
  → Categoria: Pró-labore
  → Descrição: "Pró-labore - [mês/ano]"
  → Valor: valor fixo definido
  → Comprovante: extrato mostrando a transferência

PASSO 3 — Manter a disciplina
  → Se precisar de mais dinheiro pessoal:
    registrar como "Retirada extra" (categoria separada ou observação)
  → Se o negócio não tem caixa para o pró-labore:
    registrar mesmo assim como "devido" — e anotar a decisão
    em Decisões Financeiras: "Pró-labore suspenso/reduzido porque..."
```

---

## PARTE 3 — ESTRUTURA DE PASTAS NO DRIVE (FINANCEIRO)

```
Financeiro/
├── 2026/
│   ├── 01_Janeiro/
│   │   ├── Extratos/
│   │   │   ├── 2026-01_extrato_nubank-pj.pdf
│   │   │   └── 2026-01_extrato_itau-pf.pdf
│   │   ├── Comprovantes/
│   │   │   ├── 2026-01-05_pix_joao-silva_497-00.pdf
│   │   │   └── 2026-01-12_pix_maria-coach_297-00.pdf
│   │   ├── Notas_Fiscais_Emitidas/
│   │   │   └── 2026-01-05_NFS_joao-silva_497-00.pdf
│   │   ├── Notas_Fiscais_Recebidas/
│   │   │   └── 2026-01-15_NF_notion_59-00.pdf
│   │   ├── Impostos/
│   │   │   ├── 2026-01_DAS_67-00.pdf
│   │   │   └── 2026-01_DAS_comprovante.pdf
│   │   ├── Faturas/
│   │   │   └── 2026-01_fatura_nubank-credito.pdf
│   │   ├── Exportações/
│   │   │   ├── 2026-01-07_export_kiwify_semana-01.csv
│   │   │   └── 2026-01-14_export_kiwify_semana-02.csv
│   │   ├── Campanhas/
│   │   │   ├── 2026-01-07_ads_meta_chave-mestra-jan.png
│   │   │   └── 2026-01-14_ads_meta_chave-mestra-jan.png
│   │   ├── Plataformas/
│   │   │   └── 2026-01-31_dashboard_kiwify.png
│   │   └── Relatório_Mensal/
│   │       └── 2026-01_relatorio-gerencial.md
│   ├── 02_Fevereiro/
│   │   └── [mesma estrutura]
│   └── ...
├── Contratos/
│   ├── mentoria_joao-silva_2026-01.pdf
│   └── white-label_studio-zen_2026-03.pdf
├── Contabilidade/
│   ├── declaracoes/
│   └── correspondencia-contador/
├── Relatorios_Anuais/
│   └── 2025_resumo-anual.md
└── _Inventário_Assinaturas.md
```

### Convenção de nomenclatura

```
PADRÃO GERAL:
  AAAA-MM-DD_tipo_origem_valor.extensão

TIPOS:
  pix         → comprovante de Pix
  NFS         → nota fiscal de serviço emitida
  NF          → nota fiscal recebida
  extrato     → extrato bancário
  fatura      → fatura de cartão de crédito
  DAS         → guia de imposto
  export      → exportação CSV de plataforma
  ads         → relatório de anúncios
  dashboard   → screenshot de dashboard
  contrato    → contrato assinado
  recibo      → recibo avulso

SLUG:
  → Sempre minúsculo
  → Sem acentos
  → Hífens no lugar de espaços
  → Ex: joao-silva, studio-zen, chave-mestra

VALOR:
  → Usar hífen no lugar de vírgula
  → Ex: 497-00 (não 497,00)
  → Sem R$ no nome do arquivo
```

---

## PARTE 4 — A PLANILHA MESTRE: COMO PREENCHER

### 4.1 Aba "Transações" — regras de preenchimento

| Campo | Regra | Exemplo |
|---|---|---|
| **Data** | Data da transação (não da competência) | 2026-06-07 |
| **Tipo** | Sempre "entrada" ou "saída" — sem variação | entrada |
| **Descrição** | [O quê] - [Quem/De onde] | Venda Chave Mestra - João Silva |
| **Valor bruto** | Valor antes de qualquer desconto/taxa | 497,00 |
| **Valor líquido** | Valor que efetivamente entrou/saiu do caixa | 452,27 |
| **Categoria** | Exatamente do plano de categorias — nunca inventar | Chave Mestra |
| **Subcategoria** | Opcional — para detalhamento dentro da categoria | Sistema Operacional |
| **Conta/banco** | Qual conta bancária | Nubank PJ |
| **Forma** | Pix / Cartão crédito / Boleto / Transferência | Pix |
| **Cliente/fornecedor** | Nome padronizado (sempre igual) | João Silva |
| **Produto/oferta** | Nome do produto da ESTEIRA | Sistema Operacional |
| **Campanha** | Qual campanha atribuída (ou "Orgânico") | Meta - CM Jun/26 |
| **Status** | previsto / pago / recebido / atrasado / cancelado / reembolsado | recebido |
| **Competência** | Mês a que a transação pertence contabilmente | junho/2026 |
| **Observação** | Qualquer detalhe relevante (desconto, parcela, retenção) | Parcela 2/3 |
| **Comprovante** | Link do arquivo no Drive | [link] |
| **Classificado IA** | sim / não | não |
| **Revisado humano** | sim / não | sim |

### 4.2 Erros mais comuns (e como evitar)

```
ERRO: Registrar valor bruto como líquido
  → SEMPRE separar os dois. Valor bruto é o que o cliente pagou.
    Valor líquido é o que você recebeu. A diferença é taxa, comissão, imposto retido.

ERRO: Categoria inventada
  → SEMPRE usar dropdown com validação no Sheets.
    Se a transação não encaixa em nenhuma categoria, NÃO criar uma nova.
    Usar "Outros" e na próxima revisão mensal decidir se precisa de categoria nova.

ERRO: Competência = Data
  → NEM SEMPRE. Exemplo: venda em cartão dia 30/jan, parcela 1 recebida em fev,
    parcela 2 em mar. A venda é de janeiro. O recebimento é de fev e mar.
    Competência = janeiro. Data da transação = fev/mar.

ERRO: Reembolso apagado
  → NUNCA apagar a transação original. Criar uma nova transação de saída
    (Tipo: saída, Categoria: Reembolso dado) e mudar status da original para "reembolsado".

ERRO: Transação pessoal na planilha do negócio
  → NUNCA. Se pagou algo pessoal com a conta PJ por acidente:
    registrar como "Retirada extra" e estornar quando possível.

ERRO: "Depois eu registro"
  → A transação mais perigosa é a que "depois" nunca chega.
    Segunda-feira (Giro Financeiro): tudo da semana entra. Sem exceção.
```

---

## PARTE 5 — CICLO DE CAPTURA: QUANDO REGISTRAR O QUÊ

### 5.1 O calendário de captura

```
IMEDIATO (no ato)
  ├── Venda direta via Pix → registrar + comprovante no mesmo dia
  ├── Pagamento manual feito (fornecedor, comissão) → registrar + comprovante
  └── Contrato assinado → salvar no Drive imediatamente

SEGUNDA-FEIRA (Giro Financeiro Semanal — 20 min)
  ├── Exportar CSV das plataformas de venda (última semana)
  ├── Classificar com IA + revisar
  ├── Registrar na planilha
  ├── Verificar contas a pagar da semana
  ├── Verificar contas a receber atrasadas
  ├── Conferir gasto em tráfego pago
  └── Salvar evidências no Drive

ÚLTIMO DIA ÚTIL DO MÊS (Fechamento Mensal — 90 min)
  ├── Exportar extrato bancário completo do mês → Drive
  ├── Exportar fatura do cartão de crédito → Drive
  ├── Conferir: todas as transações do mês estão registradas?
  ├── Conciliar: saldo do Sheets = saldo do banco?
  ├── Conferir inventário de assinaturas vs fatura
  ├── Registrar DAS/imposto do mês
  ├── Registrar pró-labore
  ├── Fechar DRE do mês
  ├── Atualizar dashboard
  ├── Gerar relatório gerencial com IA
  ├── Registrar decisões no Notion (Decisões Financeiras)
  └── Salvar relatório no Drive

TRIMESTRAL (Auditoria Documental)
  ├── Revisar inventário de assinaturas (cancelar o que não usa)
  ├── Conferir taxas das plataformas (mudaram?)
  ├── Conferir se plano de categorias precisa de ajuste
  ├── Revisar precificação de cada oferta com margem real
  ├── Calcular LTV, payback, margem por produto (3 meses de dados)
  └── Verificar se estrutura de pastas do Drive está limpa
```

### 5.2 Checklist de conciliação mensal

A conciliação é o ato de garantir que o que está na planilha é real. Sem isso, a planilha é ficção contábil.

```
[ ] Saldo final do Sheets = saldo do extrato bancário
    Se diferente: encontrar a diferença. NÃO ajustar forçadamente.

[ ] Todas as entradas do extrato estão na aba Transações
    Se faltou: registrar agora. Descobrir como escapou do protocolo.

[ ] Todas as saídas do extrato estão na aba Transações
    Atenção especial a: débitos automáticos, tarifas bancárias, IOF.

[ ] Todas as vendas da plataforma batem com a aba Transações
    Se diferente: alguma venda não foi exportada? Algum reembolso não registrado?

[ ] Fatura do cartão conferida item por item
    Cobranças não reconhecidas = disputa imediata.

[ ] Nenhuma transação com categoria "Outros" sem justificativa
    Se tem "Outros": classificar agora ou criar nova categoria se for recorrente.

[ ] Nenhuma transação com status "pendente" vencida
    Se tem: é inadimplência? Esquecimento? Cobrar ou baixar.

[ ] DAS do mês registrado e pago
    Se não: verificar com contador.

[ ] Pró-labore registrado
    Mesmo se não tirou: registrar como "devido" ou "suspenso" com observação.
```

---

## PARTE 6 — O PAPEL DA IA EM CADA ETAPA

A IA não é dona do caixa. Ela é o estagiário genial que organiza, sugere e explica — mas nunca decide sozinha.

### 6.1 Mapa de uso da IA por etapa

| Etapa | O que a IA faz | O que a IA NÃO faz |
|---|---|---|
| **Captura** | — | Não captura dados. Você exporta, ela recebe. |
| **Classificação** | Sugere categoria para cada transação | Não define a categoria final sem revisão humana |
| **Análise** | Gera DRE, compara meses, detecta anomalias | Não inventa dados que não existem |
| **Relatório** | Gera relatório narrativo mensal | Não faz previsão como se fosse certeza |
| **Simulação** | Calcula cenários com os dados fornecidos | Não escolhe o cenário — você escolhe |
| **Decisão** | Sugere ação baseada em padrão | Não decide por você |

### 6.2 Os prompts padronizados (skill hq-financeiro)

Esses prompts serão parte da skill `hq-financeiro` do Arauto:

**Prompt 1 — Classificação semanal:**
```
Dados: [CSV exportado]

Classifique cada transação usando EXCLUSIVAMENTE estas categorias:
ENTRADAS: Chave Mestra | Consultoria | Mentoria | Copy 3x5 | Promo 365 |
  Serviços avulsos | Afiliados/parcerias | Recorrência | Reembolso recebido | Outros
SAÍDAS: Ferramentas | Tráfego pago | Produção/design | Plataforma de venda |
  Taxas de pagamento | Impostos | Contabilidade | Comissões | Suporte |
  Educação/livros/cursos | Operacional | Internet/equipamentos | Pró-labore | Reserva | Outros

Regras:
- Nunca invente categorias que não estão na lista acima.
- Quando incerto, marque como "REVISAR" na coluna Categoria.
- Separe valor bruto e valor líquido quando a informação estiver disponível.
- Retorne em formato de tabela com: Data | Tipo | Descrição | Valor bruto |
  Valor líquido | Categoria | Forma de pagamento | Status

Ao final, liste quantas transações classificou, quantas marcou como REVISAR,
e o total de entradas e saídas.
```

**Prompt 2 — Fechamento mensal:**
```
Dados do mês: [colar resumo das transações]
Dados do mês anterior: [colar resumo anterior]

Gere um relatório financeiro gerencial com:
1. Resumo: faturamento, receita líquida, lucro líquido, margem
2. Top 3 entradas e top 3 saídas
3. Variação vs mês anterior (% e absoluto)
4. Oferta mais lucrativa e oferta mais fraca
5. Alertas: anomalias, despesas crescentes, riscos de caixa
6. Oportunidades: cortes possíveis, ajustes de preço, canais eficientes
7. Decisões recomendadas (máximo 3, com justificativa baseada em dados)

Regras:
- Quando um dado não existir, diga "dado insuficiente" — não estime.
- Separe fato de opinião.
- Quando recomendar algo, cite o número que justifica.
```

**Prompt 3 — Detecção de anomalias:**
```
Dados: [transações dos últimos 3-6 meses]

Analise e aponte:
1. Categorias de despesa que cresceram mais de 20% vs trimestre anterior
2. Assinaturas/recorrências que parecem duplicadas ou desnecessárias
3. Transações em "Outros" que deveriam ter categoria específica
4. Meses com margem abaixo da média — por quê?
5. Padrões de sazonalidade (meses fortes vs fracos)

Para cada alerta, mostre: a transação ou categoria, o valor, a variação,
e uma sugestão de ação. Não faça recomendações genéricas — seja específico.
```

---

## PARTE 7 — CENÁRIOS ESPECIAIS

### 7.1 Venda parcelada (cartão ou combinado)

```
CENÁRIO: Cliente compra Chave Mestra por R$ 497 em 3x no cartão

REGISTRO NA PLANILHA:
  → Opção A (simplificado — recomendado para início):
    1 transação de entrada no dia da venda
    Valor bruto: 497,00
    Valor líquido: 452,27 (após taxa)
    Observação: "Parcelado 3x — recebimento em 30/60/90 dias"
    Status: recebido (a plataforma garante)

  → Opção B (detalhado — quando volume cresce):
    3 transações, uma por parcela
    Cada uma com data de recebimento prevista
    Status vai de "previsto" → "recebido" conforme entra

REGRA: A plataforma de venda já gerencia o parcelamento.
Você recebe o líquido conforme o repasse da plataforma.
O que importa é registrar: quanto entrou, quando, e quanto de taxa.
```

### 7.2 Moeda estrangeira (dólar, euro)

```
CENÁRIO: Assinatura de ferramenta US$ 20/mês, cobrada no cartão

REGISTRO:
  → Valor bruto: R$ XX,XX (valor convertido na fatura + IOF)
  → Observação: "US$ 20.00 + IOF. Câmbio: R$ X,XX. Fatura de [mês]."
  → NUNCA registrar em dólar na planilha. Sempre em reais, pelo valor da fatura.
  → O IOF é parte do custo — não separar.
```

### 7.3 Parceria / split de receita

```
CENÁRIO: Coprodução onde você recebe 60% e o parceiro 40%

REGISTRO:
  → Transação de entrada: seu valor (60%)
  → Valor bruto: valor total da venda
  → Valor líquido: seu valor após split + taxa
  → Observação: "Split 60/40 com [parceiro]. Total: R$ X. Minha parte: R$ Y."
  → O valor do parceiro NÃO é registrado como sua saída (a plataforma já separa)
  → Se VOCÊ paga o parceiro manualmente: aí sim é saída (Categoria: Comissões)
```

### 7.4 Venda com bônus/desconto

```
CENÁRIO: Produto de R$ 497 vendido por R$ 397 com cupom

REGISTRO:
  → Valor bruto: 397,00 (valor efetivamente cobrado)
  → Observação: "Preço original: R$ 497. Cupom: BETA100 (-R$ 100)"
  → NÃO registrar 497 como bruto e 100 como desconto separado
  → O que interessa para o financeiro é o que entrou. O desconto
    é informação estratégica, não contábil.
```

### 7.5 Chargeback / disputa

```
CENÁRIO: Cliente contesta a compra no cartão

REGISTRO:
  → Transação original: mudar status para "em disputa"
  → Observação: "Chargeback aberto em DD/MM. Motivo: [motivo]."
  → Se perder a disputa: criar transação de saída
    - Tipo: saída
    - Categoria: Reembolso dado
    - Descrição: "Chargeback - [cliente] - [produto]"
    - Valor: valor devolvido + taxa de chargeback (se houver)
  → Se ganhar: mudar status de volta para "recebido"
    - Observação: "Chargeback encerrado a nosso favor em DD/MM"
```

---

## PARTE 8 — GRAUS DE MATURIDADE DO SISTEMA

O sistema financeiro não precisa nascer completo. Ele cresce com o negócio.

### Grau 1 — MÍNIMO VIÁVEL (0-10 vendas/mês)

```
O QUE TER:
  [x] Planilha com aba Transações + Categorias
  [x] Pasta no Drive por mês (Comprovantes + Extratos)
  [x] Giro Financeiro Semanal (segunda, 15 min)
  [x] Fechamento Mensal básico (DRE simples)
  [x] Pró-labore definido

O QUE NÃO PRECISA AINDA:
  [ ] Controle de Campanhas detalhado
  [ ] Simulações
  [ ] Dashboard completo
  [ ] Conciliação sofisticada
```

### Grau 2 — OPERACIONAL (10-50 vendas/mês)

```
ADICIONAR:
  [x] Aba Contas a Pagar e Receber
  [x] Controle de Ofertas (margem por produto)
  [x] Controle de Campanhas (CAC, ROAS)
  [x] Dashboard mensal com indicadores-chave
  [x] Inventário de assinaturas
  [x] Classificação com IA + revisão humana
  [x] HQ Financeiro no Notion (decisões + relatórios)
  [x] Conciliação mensal completa
```

### Grau 3 — ESTRATÉGICO (50+ vendas/mês ou múltiplos produtos)

```
ADICIONAR:
  [x] Fluxo de caixa semanal projetado
  [x] Simulações de cenário (conservador/realista/agressivo)
  [x] LTV por produto e por canal
  [x] Pricing Review trimestral
  [x] Relatório narrativo com IA comparando 3+ meses
  [x] Auditoria de assinaturas trimestral
  [x] Considerar ERP financeiro para automação
```

### Grau 4 — ESCALA (equipe ou coprodução frequente)

```
ADICIONAR:
  [x] Controle de comissões por parceiro
  [x] DRE por unidade de negócio
  [x] Budget mensal com aprovação
  [x] ERP financeiro integrado
  [x] Contador com acesso ao sistema
  [x] Política financeira documentada (SOP)
```

A regra: montar o Grau 1 agora. Subir de grau conforme o volume exigir. Não montar Grau 3 com 3 vendas por mês — é burocracia sem dado.

---

## CONEXÃO COM O GROWTH LOOP

Este protocolo alimenta diretamente o **Movimento 4 (MEDIR)** do growth loop:

```
CAPTAR (conteúdo → lead)
    ↓
CONVERTER (lead → cliente → TRANSAÇÃO nasce aqui)
    ↓
ENTREGAR (cliente → resultado → dados de ativação)
    ↓
MEDIR ← ← ← ESTE PROTOCOLO GARANTE QUE OS DADOS CHEGAM LIMPOS
    ↓
APRENDER (dados → decisão)
    ↓
MELHORAR (decisão → ação)
    ↓
volta ao CAPTAR com mais inteligência
```

Sem dados limpos no Mov. 4, o Mov. 5 (Aprender) trabalha com lixo. Decisão baseada em dado sujo é pior que decisão no escuro — porque você acha que tem informação, mas o que tem é ilusão contábil.

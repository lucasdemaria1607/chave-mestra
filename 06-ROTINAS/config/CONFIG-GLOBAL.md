# Config Global — Rotinas Chave Mestra

> Este arquivo é lido por todas as rotinas para entender o contexto do projeto ativo.
> Atualizar quando mudar de projeto ou de cliente foco.

---

## Projeto ativo

```
projeto: chave-mestra
modo: CM
dossie_path: 05-ASSETS/dossies/
cliente_ativo: lucas-de-maria
```

---

## Nicho e mercado

```
nicho_principal: marketing digital para especialistas e criadores de conteúdo
sub_nichos: posicionamento de marca pessoal, sistemas de produção de conteúdo, copy persuasiva, lançamentos digitais
plataformas_foco: Instagram, YouTube, TikTok
mercado: Brasil
idioma: português brasileiro
```

---

## Marca e DNA

```
marca: Chave Mestra
autor: Lucas De Maria
voz_adjetivos: intelectual, visceral, precisa
nunca_diria: "é simples, basta fazer"
posicionamento: ecossistema de coprodução digital — onde personalidade encontra inteligência estratégica
tom: direto, sem eufemismo motivacional, profundidade que respeita a inteligência do leitor
```

---

## Persona principal

```
nome_ficticio: Felipe
perfil: especialista digital, 28-42 anos, produz conteúdo mas sem método sistematizado
dor_principal: sabe que tem material valioso mas não consegue converter esforço em resultado real
objecao: "já tentei tudo isso antes"
nivel_consciencia: 3-4 (sabe que precisa de método, ainda não sabe qual)
```

---

## Sistema de conhecimento

```
notas_path: sistema-de-conhecimento/notas/
alert_threshold_days: 7
critical_threshold_days: 21
formato_nota: markdown (.md)
```

---

## Rotinas ativas

```
rotina_temas: ativa           # Seg/Qua/Sex 09h Bahia
rotina_nicho: ativa           # Dia 1 e 15, 08h Bahia
rotina_accountability: pausada # Reativar em 25/05 — aguardando acúmulo de notas
rotina_conteudo: pausada      # Reativar em 25/05 — depende de accountability ativa
```

---

## Notion — IDs para sync de outputs

```
# HUB — Sistema de Conhecimento (onde os outputs das rotinas aparecem)
notion_hub_sistema_conhecimento: 11afc122-de3b-8259-ae9c-81c6c0b45688

# Zettelkasten — Temas em Alta e Pesquisa de Nicho viram notas aqui
# Visível na view "Notas" do hub
notion_db_zettelkasten: collection://6e4c8442-1596-4eab-ab69-a7917e93e046

# Tarefas — Ações recomendadas da Pesquisa de Nicho viram tarefas aqui
# Visível na view "Tarefas" do hub
notion_db_tarefas_hub: collection://00cfc122-de3b-83a0-ad2a-87e3bd2d78ed

# Conteúdo — Peças geradas pela Transformação em Conteúdo vão aqui (ESTEIRA)
notion_db_conteudo: collection://25cfc122-de3b-81c2-a76a-000bcf8453f4
```

## Mapeamento: rotina → base Notion

```
temas_em_alta      → zettelkasten (Tipo: Flash, Zona: Inbox, Tags: conteúdo, Destino: Conteúdo)
pesquisa_de_nicho  → zettelkasten (Tipo: Flash, Zona: Output, Tags: mercado, Destino: Conteúdo)
                   + tarefas_hub (Nome: Ação Recomendada, Feito: false, Data: data do output, Origem: "Pesquisa de Nicho")
accountability     → tarefas_hub (Nome: alerta de captura, Feito: false, Data: data do output, Origem: "Accountability")
transformacao      → conteudo (Status: Rascunho, Origem: Orgânico, Notas & Briefing: conteúdo gerado)
```

> Sync ocorre via comando "sincroniza rotinas no notion" em sessão direta Claude Code.
> Quando MCP estiver disponível nas rotinas remotas, o sync será automático.

---

## Concorrentes monitorados

```
concorrente_1: [nome] — [posicionamento em 1 linha]
concorrente_2: [nome] — [posicionamento em 1 linha]
concorrente_3: [nome] — [posicionamento em 1 linha]
```

> Preencher os concorrentes com os mapeados no Portal do Terreno.

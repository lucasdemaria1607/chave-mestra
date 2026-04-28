---
nome: SOP-DRIVE-SETUP
versão: 1.0
gatilho: "novo projeto", "novo cliente", "cria a pasta do cliente", quando Drive MCP está ativo e pasta do cliente não existe
---

# SOP — Criação de Projeto de Cliente no Google Drive

Executado automaticamente quando Drive MCP está disponível e o cliente não tem pasta em `CLIENTES/`. Também executado manualmente quando o usuário diz "cria a pasta do [cliente]" ou "inicializa o projeto no Drive".

---

## Pré-requisito

Drive MCP conectado (ferramentas `drive-*` disponíveis na sessão).

---

## Passo a Passo

### 1. Identificar o slug do cliente

Definir o slug: letras minúsculas, sem acentos, hífens no lugar de espaços.

```
Beatriz Lima → beatriz-lima
Studio Zen → studio-zen
Pedro Coach → pedro-coach
```

### 2. Verificar se pasta já existe

```
drive-search: "CLIENTES [slug-cliente]"
```

Se já existe → **não criar de novo**. Ir ao passo 5 (ler o DOSSIE existente).

### 3. Criar a estrutura de pastas

Criar na raiz do Drive (ou dentro de uma pasta `CLIENTES/` se já existir):

```
[slug-cliente]/
├── 00-DOSSIE/
├── 01-BRIEFING/
├── 02-IDENTIDADE/
├── 03-INTELIGENCIA/
├── 04-ESTRATEGIA/
├── 05-CRIACAO/
│   ├── roteiros/
│   ├── carrosseis/
│   ├── copy/
│   │   ├── posts/
│   │   ├── emails/
│   │   └── ads/
│   └── headlines/
├── 06-OPERACAO/
├── 07-ASSETS/
│   └── brand-kit/
├── 08-ENTREGAS/
└── 09-EVOLUCAO/
```

### 4. Criar o DOSSIE.md inicial

Criar `00-DOSSIE/DOSSIE.md` com o conteúdo do `TEMPLATE-DOSSIE.md`, substituindo os campos de cabeçalho:

```markdown
---
projeto: [Nome do Cliente]
slug: [slug-cliente]
fase-atual: 0 — Fundação
criado: [YYYY-MM-DD]
última-atualização: [YYYY-MM-DD]
drive-pasta-id: [ID da pasta raiz do cliente no Drive]
---
```

### 5. Confirmar ao usuário

```
✅ Projeto [Nome do Cliente] inicializado no Drive.
Pasta: CLIENTES/[slug-cliente]/
DOSSIE.md criado e pronto para o Protocolo 0.

Próximo passo: executar diagnóstico 6D via Chaveiro → Protocolo 0.
```

### 6. Executar o Protocolo 0

Ativar Chaveiro → Protocolo 0 (Diagnóstico Interativo).
Ao concluir, salvar o resultado em `01-BRIEFING/diagnostico-6d.md` e atualizar `00-DOSSIE/DOSSIE.md`.

---

## Mapeamento Output → Pasta (referência rápida)

| Skill | Output | Pasta no Drive |
|---|---|---|
| Chaveiro — Protocolo 0 | Diagnóstico 6D | `01-BRIEFING/diagnostico-6d.md` |
| Chaveiro — Protocolo 0 | Briefing inicial | `01-BRIEFING/briefing-inicial.md` |
| Cartógrafo — Forja do Universo | DNA de Marca | `02-IDENTIDADE/dna-de-marca.md` |
| Cartógrafo — Forja do Universo | Mapa do Universo | `02-IDENTIDADE/mapa-do-universo.md` |
| Cartógrafo — Forja do Universo | Léxico proprietário | `02-IDENTIDADE/lexico-proprietario.md` |
| Cartógrafo — Portal do Terreno | Relatório de Terreno | `03-INTELIGENCIA/relatorio-de-terreno.md` |
| Cartógrafo — Forja da Persona | Alma da Persona | `03-INTELIGENCIA/alma-da-persona.md` |
| Alquimista — Forja de Oferta | Oferta estruturada | `04-ESTRATEGIA/oferta-estruturada.md` |
| Arauto — Mapa de Campanha | Mapa de campanha | `04-ESTRATEGIA/mapa-de-campanha.md` |
| Bardo — Chavideo | Roteiro de vídeo | `05-CRIACAO/roteiros/[YYYY-MM-DD]-[tema].md` |
| Bardo — Chavossel | Carrossel | `05-CRIACAO/carrosseis/[YYYY-MM-DD]-[tema].md` |
| Alquimista — Pergaminho de Copy | Copy — post | `05-CRIACAO/copy/posts/[YYYY-MM-DD]-[tema].md` |
| Alquimista — Pergaminho de Copy | Copy — e-mail | `05-CRIACAO/copy/emails/[YYYY-MM-DD]-[tema].md` |
| Alquimista — Pergaminho de Copy | Copy — anúncio | `05-CRIACAO/copy/ads/[YYYY-MM-DD]-[tema].md` |
| Bardo — Headline Generator | Headlines | `05-CRIACAO/headlines/headlines-[YYYY-MM].md` |
| Qualquer plugin | Entrega ao cliente | `08-ENTREGAS/entrega-fase-[N].md` |
| Chaveiro — Lua Cheia | Relatório mensal | `09-EVOLUCAO/relatorio-[YYYY-MM].md` |

---

## Regras

1. **Nunca criar pasta duplicada** — sempre buscar antes de criar
2. **DOSSIE.md é o arquivo mestre** — atualizado ao fim de cada sessão
3. **Cada output salvo imediatamente** — não esperar fim de sessão
4. **Naming convention obrigatória** — `[YYYY-MM-DD]-[tema-slug].md` para outputs de criação
5. **Pasta 08-ENTREGAS** contém apenas documentos limpos para o cliente — sem notas internas CM

---

*SOP-DRIVE-SETUP v1.0 — Chave Mestra. Executar em todo novo projeto com Drive MCP ativo.*

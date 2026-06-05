# SYNC-STATE — Histórico de Sincronização Rotinas ↔ Notion

> Rastreia quais outputs de rotinas já foram sincronizados ao Notion e quais notas já foram exportadas do Notion para o Git.
> Atualizado pelos comandos `sincroniza rotinas` e `exporta notas`.
>
> **Padrão correto:** 1 página Notion por output de rotina (não 1 página por tema).
> Título da página = "Temas em Alta — YYYY-MM-DD" ou "Pesquisa de Nicho — YYYY-MM-DD".
> Todo o conteúdo do arquivo fica dentro dessa única página.

---

## Legenda

- `✅ sincronizado` — publicado no Notion com sucesso
- `⏳ pendente` — output existe no git, ainda não sincronizado
- `❌ falhou` — tentativa de sync com erro registrado

---

## Temas em Alta → Zettelkasten

| Arquivo | Data Output | Data Sync | Status | ID Notion |
|---------|-------------|-----------|--------|-----------|
| outputs/temas/temas-2026-04-27.md | 2026-04-27 | 2026-04-29 | ✅ sincronizado | `351fc122-de3b-818e-9b03-f1f2afb61b1b` |
| outputs/temas/temas-2026-05-04.md | 2026-05-04 | 2026-06-05 | ✅ sincronizado | `376fc122-de3b-8100-bcc5-f23cc6b2b379` |
| outputs/temas/temas-2026-05-11.md | 2026-05-11 | 2026-06-05 | ✅ sincronizado | `376fc122-de3b-8168-ad9d-e5c2055641af` |
| outputs/temas/temas-2026-05-18.md | 2026-05-18 | 2026-06-05 | ✅ sincronizado | `376fc122-de3b-8123-bb34-d8e6ece2e3c2` |

> ⚠️ Da sync de 2026-04-29 foram criadas 13 páginas individuais por engano — apagar manualmente no Notion (Flash notes datadas 2026-04-27 no Zettelkasten). IDs listados abaixo.

### Páginas stray para deletar (erros da primeira sync — 2026-04-27)

| Título | ID |
|--------|----|
| O algoritmo parou de contar likes | `351fc122-de3b-81cb-860f-e77aed5e171d` |
| 51% dos criadores pensaram em desistir | `351fc122-de3b-8158-b690-f77410329854` |
| Slow content não é tendência | `351fc122-de3b-81ce-a0e4-cde5919ad69e` |
| A creator economy entrou na era da performance | `351fc122-de3b-8193-a732-c6cb207d0fcb` |
| Zuckerberg está criando um clone digital | `351fc122-de3b-8129-9032-e9ecb7817ad2` |
| Você não cansou de produzir conteúdo | `351fc122-de3b-81e5-8d4d-daa689dd9f52` |
| Eleições 2026 revelam | `351fc122-de3b-8165-92be-da293ddea195` |
| O especialista que virou commodity | `351fc122-de3b-8179-a5fe-c7c02e383453` |
| Mini lançamento toda semana vs grande lançamento | `351fc122-de3b-81d4-8c4e-d1e0985cd81b` |
| A IA vai treinar no seu conteúdo | `351fc122-de3b-8161-8651-cb164c584ada` |
| Instagram virou TikTok | `351fc122-de3b-8178-b312-c3d28f35c02c` |
| O tipo de pessoa que ainda acredita | `351fc122-de3b-819b-bec3-d5689c9e308a` |
| Produto híbrido não é uma feature extra | `351fc122-de3b-8101-8a59-f79bde55bac8` |

---

## Pesquisa de Nicho → Zettelkasten + Tarefas

| Arquivo | Data Output | Data Sync | Status | IDs Notion |
|---------|-------------|-----------|--------|------------|
| outputs/nicho/nicho-update-2026-05-01.md | 2026-05-01 | 2026-06-05 | ✅ sincronizado | Zettelkasten: `376fc122-de3b-81fd-bbb2-d295a64cd4d4` · Tarefa: `376fc122-de3b-8120-9f69-ea1f798f9d60` |
| outputs/nicho/nicho-update-2026-05-15.md | 2026-05-15 | 2026-06-05 | ✅ sincronizado | Zettelkasten: `376fc122-de3b-81e8-9e4f-caebb8237ac4` · Tarefa: `376fc122-de3b-81b6-87f1-c12d90832183` |

---

## Transformação em Conteúdo → DB Conteúdo

| Arquivo | Data Output | Data Sync | Status | Páginas criadas |
|---------|-------------|-----------|--------|-----------------|
| *(nenhum output ainda)* | — | — | — | — |

---

## Lua Cheia — Ciclo de Expansão → Zettelkasten

| Arquivo | Período | Data Execução | Status | ID Notion |
|---------|---------|---------------|--------|-----------|
| *(nenhum ciclo ainda)* | — | — | — | — |

> Ciclo roda quando `lua_cheia_threshold` (padrão: 8) notas novas acumuladas.
> Cada execução cria 1 página MOC no Zettelkasten (Zona: Estrutura, Tipo: MOC).

---

## Notas Notion → Git (`exporta notas`)

| Data Export | Notas exportadas | Arquivos gerados |
|-------------|-----------------|------------------|
| *(nenhuma exportação ainda)* | — | — |

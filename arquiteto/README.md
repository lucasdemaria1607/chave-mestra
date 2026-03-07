# Arquiteto — Esteira Notion

Plugin 07 do Arsenal Chave Mestra. Executa a integração com o banco de dados MINHA ESTEIRA no Notion, criando uma linha por dia da campanha com copy completo no corpo de cada página.

## O que faz

Não cria campanhas — executa a operação de escrita no banco de dados. Transforma o cronograma gerado pelo Estrategista em registros acionáveis dentro do Notion, prontos para execução dia a dia. Cada linha é uma data real com objetivo, canais, copy completo e métrica de acompanhamento.

## Quando usar

- "Popula o Notion com essa campanha"
- "Esteira Notion", "MINHA ESTEIRA"
- "Cria as linhas do lançamento no Notion"
- "Registra a campanha no Notion"

## Skill

- `esteira-notion` — Protocolo de integração com MINHA ESTEIRA (5 etapas)

## Output

Sub-database de lançamento populada no Notion com uma linha por dia + copy completo no corpo de cada página.

## Integração no Arsenal

```
Estrategista (06)       → [cronograma + copy por fase]
                       ↓
            ARQUITETO (07)
                       ↓
Notion MINHA ESTEIRA    → [sub-database de lançamento populada]
Tesoureiro (08)         → [métricas registradas no produto alimentam diagnóstico de escala]
```

## Protocolo

1. Localizar o produto na MINHA ESTEIRA
2. Abrir página do produto e mapear data-source-id da sub-database correta
3. Criar uma linha por dia com propriedades + copy no corpo
4. Nunca hardcode IDs — sempre ler dinamicamente do produto específico

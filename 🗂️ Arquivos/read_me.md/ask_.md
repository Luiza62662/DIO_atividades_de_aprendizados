**ASK**

Resumo:
Sua API está funcional, mas é um MVP simples sem persistência e sem validação robusta.

Pontos de atenção:

dados somem ao reiniciar

sem validação de email

sem tratamento global de erro

sem logs estruturados

Como confirmar:

Rode POST /users

Reinicie servidor → dados somem

Opções:

Adicionar banco (Postgres + Prisma)

Adicionar validação (Zod)

Adicionar camada de erro global

Posso te dar o patch de qualquer um desses.

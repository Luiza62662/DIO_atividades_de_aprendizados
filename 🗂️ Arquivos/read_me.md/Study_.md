STUDY
Conceito: Arquitetura em Camadas (Layered Architecture)
 **Intuição**

Pense como um restaurante:

Route → garçom (recebe pedido)

Controller → gerente (organiza)

Service → cozinha (executa lógica)

💡 Por que isso importa?

evita código bagunçado

facilita testes

permite escalar

⚠️ Armadilha comum

Colocar regra de negócio no controller → vira “God file”

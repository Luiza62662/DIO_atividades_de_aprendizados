# 🏁 Mario Kart Simulator (Node.js)

## 📌 Descrição

Este projeto é um simulador de corridas inspirado no universo do Mario Kart, desenvolvido utilizando Node.js e executado diretamente no terminal.

A aplicação simula corridas entre personagens, levando em consideração atributos como velocidade, manobrabilidade e poder, além de eventos dinâmicos como tipos de pista e uso de itens especiais.

O foco principal do projeto está na construção da lógica de jogo no backend.

---

## 🚀 Funcionalidades

* 🏎️ Simulação de corridas por rodadas
* 🛣️ Tipos de pista:

  * Reta (velocidade)
  * Curva (manobrabilidade)
  * Confronto (poder)
* 🎲 Sistema de rolagem de dados
* 🎁 Sistema de itens:

  * 🐢 Casco (remove ponto do adversário)
  * 🍌 Banana (penaliza o jogador)
  * 🚀 Turbo (aumenta desempenho)
* 🏆 Sistema de pontuação
* 📊 Resultado final com vencedor

---

## 🧠 Tecnologias utilizadas

* Node.js
* JavaScript (ES Modules)

---

## 📁 Estrutura do projeto

```
src/
 ├── index.js        # Arquivo principal
 ├── race.js         # Motor da corrida
 ├── utils.js        # Funções auxiliares
 ├── items.js        # Sistema de itens
 └── players.js      # Definição dos jogadores
```

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/mario-kart-simulator.git
```

### 2. Acesse a pasta

```bash
cd mario-kart-simulator
```

### 3. Instale dependências (se necessário)

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

ou

```bash
npm start
```

---

## 🎮 Exemplo de execução

```
🏁 Corrida entre Mario e Luigi começando...

🏁 Rodada 1
📍 Tipo de pista: RETA
Mario 🎲 rolou velocidade: 4 + 4 = 8
Luigi 🎲 rolou velocidade: 3 + 3 = 6
Mario pegou: TURBO
Luigi pegou: BANANA
Mario usou TURBO! +2 🚀
Luigi escorregou na BANANA! 🍌
✅ Mario venceu a rodada!
```

---

## 🔥 Melhorias implementadas

* Estrutura modular (separação de arquivos)
* Sistema de itens dinâmico
* Melhor feedback visual no terminal
* Código mais organizado e reutilizável

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados:

* Organização de projetos Node.js
* Lógica de programação aplicada a jogos
* Modularização de código
* Simulação de eventos aleatórios
* Boas práticas de estruturação de código

---

## 📎 Referência

Projeto base da DIO:
https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart

---

## 👨‍💻 Autor

Seu Nome Aqui
[Seu LinkedIn]
[Seu GitHub]

---

## 💡 Considerações finais

Este projeto faz parte do meu processo de aprendizado em desenvolvimento backend, com foco em Node.js.

Sinta-se à vontade para contribuir, sugerir melhorias ou utilizar como base para novos projetos!

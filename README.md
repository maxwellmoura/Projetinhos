# 💼 Projetinhos

Repositório pessoal com **mini projetos em JavaScript e React**
desenvolvidos para praticar lógica de programação, hooks, componentes e
manipulação de estados.

Cada pasta neste repositório representa um **projeto independente**, com
seu próprio código, dependências e README individual.

------------------------------------------------------------------------

## 🚀 Tecnologias utilizadas

-   **React.js** ⚛️\
-   **JavaScript (ES6+)**\
-   **HTML5 / CSS3**\
-   **Node.js + NPM**

------------------------------------------------------------------------

## 📂 Estrutura do repositório Básicos

    Projetinhos/
    ├── contador/
    ├── caixa-eletronico/
    ├── relogio/
    ├── validador-formulario/
    ├── gerador-senhas/
    ├── darkmode-react/
    ├── ToDoList/
    ├── galeria-imagens/
    ├── likes/

## ## 📂 Estrutura do repositório intermediarios
    Projetinhos/
    ├── sistema-cep
    

------------------------------------------------------------------------

## 🧩 Projetos incluídos


### 🧮 [Contador](./contador)

Um contador simples com botões de **incrementar** e **resetar**, criado
em React.\
\> Conceitos: `useState`, eventos e renderização condicional.

------------------------------------------------------------------------

### 💰 [Caixa Eletrônico](./caixa-eletronico)

Simula um **caixa eletrônico**, validando o valor do saque e atualizando
o saldo automaticamente.\
\> Conceitos: `if / else`, validações numéricas e gerenciamento de
estados com `useState`.

------------------------------------------------------------------------

### ⏰ [Relógio Digital](./relogio)

Exibe a **hora atualizada em tempo real**, utilizando o hook `useEffect`
e `setInterval`.\
\> Conceitos: ciclo de vida de componentes e atualização contínua de
estado.

------------------------------------------------------------------------

### 🧠 [Validador de Formulário Simples](./validador-formulario)

Valida campos **Nome** e **E-mail** com Regex e lógica de validação.\
\> Conceitos: `useState`, Regex, feedback visual de erros.

------------------------------------------------------------------------

### 🔐 [Gerador de Senhas](./gerador-senhas)

Gera senhas fortes com letras, números e símbolos.\
\> Conceitos: Hooks, `Math.random()`, clipboard API.

------------------------------------------------------------------------

### 🌓 [Dark/Light Mode](./darkmode-react)

Tema claro/escuro com persistência em `localStorage`.\
\> Conceitos: `useState`, `useEffect`, CSS variables.

------------------------------------------------------------------------

### 📝 [ToDoList](./ToDoList)

Lista de tarefas completa com modal e edição.\
\> Conceitos: estado global por prop drilling e modais controlados.

------------------------------------------------------------------------

### 📸 [Galeria de Imagens com Modal](./galeria-imagens)

Um projeto completo em React com: - Modal com Zoom / Tela Cheia\
- Navegação entre imagens (prev/next)\
- Controles por teclado (ESC, ←, →)\
- Componente Modal reutilizável\
- Animações em CSS (`fadeIn`, `zoomIn`)

> Conceitos: `useState`, `useEffect`, `useCallback`, manipulação
> dinâmica de classes e acessibilidade.

### 🎭 [Sistema de Reações](./likes)
Este projeto é um sistema completo de reações desenvolvido em React.js, permitindo que cada post receba likes, dislikes e corações, com persistência automática no localStorage.
As reações permanecem salvas mesmo após recarregar a página.

> Conceitos:  `useState`, `useEffect` e `localStorage`

- Controle de múltiplas reações por post (like, dislike e coração)
- Estado complexo em objeto ({ post1, post2, post3 })
- Persistência de dados com localStorage (recarregou, manteve)
- Função genérica para incrementar reações sem repetir código
- Botão global para resetar todas as reações
- Uso de React Icons para ícones interativos e estilizados

### Projetos Intermediarios

# 📦 [Consulta de CEP](./sistema-cep) 
Este projeto é uma aplicação simples desenvolvida em **React.js** que permite consultar endereços através do **CEP** usando a API pública **ViaCEP**.  
Ao digitar um CEP e enviar o formulário, o sistema faz a requisição, valida o CEP, trata erros e exibe os dados recebidos.

> Conceitos: `useState` e `searchByCEP()` via API **ViaCEP**

✔️ Busca de endereço pelo CEP  
✔️ Validação automática do CEP (somente números e exatamente 8 dígitos)  
✔️ Tratamento de erros (CEP inválido ou inexistente)  
✔️ Exibição dos dados retornados pela API:  
- Logradouro  
- Bairro  
- Cidade  
- Estado  
- CEP formatado  
✔️ Feedback visual de carregamento (loading)  
✔️ Componentização simples e clara  
✔️ Função externa `searchByCEP()` para organização do código

### ☁️ Previsão do Tempo (React + OpenWeather API)

Este projeto é um **sistema de consulta do clima em tempo real**,
desenvolvido em **React** utilizando a API pública do **OpenWeather**.\
O usuário digita o nome de uma cidade e recebe informações
meteorológicas como temperatura, sensação térmica, umidade, vento e
ícone ilustrativo do clima.

>Conceitos aplicados

-   **React Hooks** (`useState`, `useEffect`)
-   Consumo de APIs com **fetch**
-   Uso de **async/await**
-   Tratamento de erros com `try/catch`
-   Desestruturação de objetos JavaScript
-   Renderização condicional no React
-   Debounce manual usando `setTimeout`
-   Modularização com componente `Script` responsável pela lógica de
    busca
    
## ⚙️ Como executar qualquer projeto

``` bash
# Clone o repositório
git clone https://github.com/maxwellmoura/Projetinhos.git

# Acesse o projeto desejado
cd Projetinhos/nome-do-projeto

# Instale as dependências
npm install

# Execute o projeto
npm start
```

------------------------------------------------------------------------

## 🧑‍💻 Autor

**Maxwell Moura**\
Desenvolvedor Front-end em formação 💻\
📍 GitHub: https://github.com/maxwellmoura\
🌐 Foco em: React.js \| Lógica de Programação \| Boas Práticas

------------------------------------------------------------------------

### 🌱 Objetivo final

> "Transformar pequenos projetos em grandes aprendizados."

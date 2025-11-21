# 📸 Galeria de Imagens com Modal --- React

Um projeto completo desenvolvido com **React**, que exibe uma galeria de
imagens e permite:

-   ➕ **Ampliar imagem em um modal**\
-   🔄 **Navegar entre as fotos (anterior/próximo)**\
-   ⌨️ **Usar teclas do teclado (ESC / ← / →)**\
-   🖼️ **Abrir a imagem em tela cheia**\
-   🧩 **Componente Modal reutilizável**

Esse projeto foi criado para treinar conceitos importantes como
**useState**, **useEffect**, **useCallback**, **componentização**,
**eventos de teclado** e **transições CSS com animações**.

------------------------------------------------------------------------

## 🚀 Tecnologias utilizadas

-   ⚛️ **React**
-   🧭 **React Router DOM**
-   🎨 **CSS3 com animações**
-   📦 **Node.js / npm**

------------------------------------------------------------------------

## 📂 Estrutura do projeto

    galeria-imagens/
    │
    ├── src/
    │   ├── components/
    │   │   └── Modal.jsx          # Componente de modal com navegação e tela cheia
    │   │
    │   ├── pages/
    │   │   └── Home.jsx           # Página principal com a galeria e lógica do modal
    │   │
    │   ├── img.js                 # Array com todas as imagens usadas no projeto
    │   ├── App.jsx                # Configuração de rotas
    │   ├── App.css                # Estilos da galeria e do modal
    │   ├── main.jsx               # Ponto de entrada da aplicação
    │   └── ...
    │
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## ⚙️ Como executar o projeto

### 1️⃣ Clone o repositório

``` bash
git clone https://github.com/maxwellmoura/Projetinhos.git
```

### 2️⃣ Acesse a pasta do projeto

``` bash
cd Projetinhos/galeria-imagens
```

### 3️⃣ Instale as dependências

``` bash
npm install
```

### 4️⃣ Inicie o servidor de desenvolvimento

``` bash
npm run dev
```

A aplicação estará disponível em:\
👉 **http://localhost:5173**

------------------------------------------------------------------------

## 🧠 Como funciona

### 🖼️ **Galeria**

-   Todas as imagens são carregadas a partir do arquivo `img.js`.
-   O usuário clica em uma miniatura para abrir o modal correspondente.

### 🔍 **Modal com recursos avançados**

-   **Fechar** ao clicar fora ou no botão "Fechar".
-   **Navegar** entre imagens usando setas:
    -   Botões `<` e `>`
    -   Teclas `ArrowLeft` e `ArrowRight`
-   **Tela cheia** usando um estado (`isExpanded`).
-   **Fechar com tecla ESC** usando `useEffect` + eventos de teclado.
-   **Animações** CSS (`fadeIn`, `zoomIn`) deixam a transição mais
    suave.

### ⚛️ **Hooks usados**

-   `useState` → controla imagem selecionada, índice e tela cheia\
-   `useEffect` → captura teclas do teclado e remove eventos\
-   `useCallback` → evita recriação desnecessária de funções\
-   `useEffect` com dependências → comportamento acionado somente quando
    modal está aberto

------------------------------------------------------------------------

## 🖥️ Demonstração das funcionalidades

-   ▶️ Abrir modal ao clicar na imagem\
-   ⬅️➡️ Navegar entre fotos\
-   ⌨️ Fechar com *ESC*\
-   🔳 Expandir para *tela cheia*\
-   🚫 Botões desabilitados no início e no fim da lista\
-   ✨ Animações suaves de zoom e fade

------------------------------------------------------------------------

## 👨‍💻 Autor

Desenvolvido por **[Maxwell Moura](https://github.com/maxwellmoura)**\
📅 Projeto: *Galeria de Imagens com Modal*\
💬 "Cada projeto é mais um degrau na jornada para a primeira vaga."

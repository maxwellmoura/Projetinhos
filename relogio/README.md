# Relógio Digital

Um aplicativo web simples construído com **React** que exibe o horário atual em tempo real, atualizando a cada segundo. O projeto utiliza os hooks `useState` e `useEffect` para gerenciar o estado do horário e estiliza a interface com CSS para uma apresentação centralizada e visualmente agradável.

## Funcionalidades

- Exibe o horário atual em formato local.
- Atualiza automaticamente a cada segundo.
- Interface minimalista com fundo em tom de bisque e texto estilizado.
- Roteamento básico com `react-router-dom` para suportar múltiplas páginas (atualmente apenas a página inicial).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas no aplicativo.
- **CSS**: Estilização da interface.
- **JavaScript (ES6+)**: Lógica para atualizar o horário em tempo real.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) como gerenciador de pacotes
- Um editor de código, como [VS Code](https://code.visualstudio.com/)

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd relogio
2. **Instale as dependências**:
   ```bash
   npm install
3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
4. **Abra o navegador em http://localhost:3000 para visualizar o aplicativo.**

##Estrutura do Projeto
relogio/
├── public/
│   ├── index.html        # Arquivo HTML principal
│   └── ...
├── src/
│   ├── components/
│   │   └── Home.jsx      # Componente principal do relógio
│   ├── App.jsx           # Configuração de rotas e entrada do app
│   ├── Home.css          # Estilos do componente Home
│   └── index.js          # Ponto de entrada do React
├── .gitignore            # Arquivos e pastas ignorados pelo Git
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto

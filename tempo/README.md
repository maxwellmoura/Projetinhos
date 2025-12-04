# ☁️ Previsão do Tempo (React + OpenWeather API)

Este projeto é um **sistema de consulta do clima em tempo real**,
desenvolvido em **React** utilizando a API pública do **OpenWeather**.\
O usuário digita o nome de uma cidade e recebe informações
meteorológicas como temperatura, sensação térmica, umidade, vento e
ícone ilustrativo do clima.

------------------------------------------------------------------------

## 🚀 Funcionalidades

-   Buscar o clima de qualquer cidade digitada.
-   Exibir:
    -   Temperatura atual
    -   Sensação térmica
    -   Umidade
    -   Velocidade do vento
    -   Descrição textual do clima
    -   Ícone correspondente
-   Suporte a múltiplos idiomas da API (fallback de `pt_br` para `pt`).
-   Sistema de carregamento (`Carregando...`)
-   Tratamento inteligente de erros:
    -   Cidade não encontrada
    -   API Key inválida
    -   Problemas de idioma na API
-   Debounce automático de 400ms para evitar requisições excessivas
    enquanto o usuário digita.

------------------------------------------------------------------------

## 🧠 Conceitos aplicados

-   **React Hooks** (`useState`, `useEffect`)
-   Consumo de APIs com **fetch**
-   Uso de **async/await**
-   Tratamento de erros com `try/catch`
-   Desestruturação de objetos JavaScript
-   Renderização condicional no React
-   Debounce manual usando `setTimeout`
-   Modularização com componente `Script` responsável pela lógica de
    busca

------------------------------------------------------------------------

## 📂 Estrutura do projeto

    src/
     ├── lib/
     │    └── script.jsx      # Lógica completa da busca e tratamento dos dados meteorológicos
     ├── pages/
     │    └── Home.jsx        # Interface principal com o campo de busca
     ├── App.jsx
     ├── main.jsx

------------------------------------------------------------------------

## ⚙️ Como executar o projeto

1.  Clone o repositório:

    ``` bash
    git clone https://github.com/seuusuario/previsao-tempo.git
    ```

2.  Acesse a pasta do projeto:

    ``` bash
    cd previsao-tempo
    ```

3.  Instale as dependências:

    ``` bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:

    ``` bash
    npm run dev
    ```

5.  Acesse no navegador:

        http://localhost:5173

------------------------------------------------------------------------

## 🧩 Arquivo `script.jsx`

Este componente contém toda a lógica de busca:

-   **Estados controlados**:
    -   `dados` → informações do clima
    -   `erro` → mensagens de erro
    -   `carregando` → indica quando a busca está em andamento
-   **Função `buscarClima`**:
    -   Faz a requisição à API
    -   Tenta idioma alternativo se necessário
    -   Trata erros comuns da OpenWeather
    -   Atualiza os estados corretamente
-   **Hook `useEffect`**:
    -   Observa mudanças na cidade digitada
    -   Aplica um **debounce** de 400ms
    -   Dispara a busca apenas após o usuário parar de digitar

------------------------------------------------------------------------

## 💡 Ideias de melhorias futuras

-   Adicionar previsão para 5 dias usando o endpoint `/forecast`.
-   Mudar o fundo conforme a temperatura (azul para frio, vermelho para
    calor).
-   Mostrar horário do nascer e pôr do sol.
-   Adicionar modo dark/light.
-   Salvar última cidade pesquisada no `localStorage`.
-   Criar componentes reutilizáveis para o card de clima.

------------------------------------------------------------------------

## 🧑‍💻 Autor

Projeto desenvolvido por **Maxwell Moura**, como parte de sua evolução
em **React, APIs REST e manipulação assíncrona de dados**.

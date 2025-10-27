# React Daily Tools

Bem-vindo ao **React Daily Tools**, um repositório que reúne uma coleção de 30 projetos práticos construídos com **React** para resolver problemas do dia a dia e aprimorar habilidades de desenvolvimento. Cada projeto é independente, com sua própria documentação, e foi projetado para ensinar conceitos de React em diferentes níveis de complexidade: Básico, Intermediário e Avançado.

## 📋 Sobre o Repositório

Este repositório contém ferramentas e aplicações úteis desenvolvidas em React, desde projetos simples para iniciantes até sistemas mais complexos que simulam aplicações reais. Os projetos abordam manipulação do DOM, integração com APIs, gerenciamento de estado, e até arquiteturas modernas como Progressive Web Apps (PWAs).

### Características
- **Modular**: Cada projeto tem sua própria pasta com instruções específicas.
- **Níveis de Dificuldade**: Projetos divididos em Básico (1–10), Intermediário (11–20) e Avançado (21–30).
- **Código Aberto**: Contribuições são bem-vindas! Veja como contribuir abaixo.
- **Boas Práticas**: Uso de React Hooks, JavaScript (quando aplicável), e integração com ferramentas modernas.

## 🛠️ Projetos Disponíveis

Abaixo está a lista completa dos projetos, organizados por nível de dificuldade. Cada projeto tem sua própria pasta com um `README.md` detalhando como executar e os conceitos abordados.

### 🟢 Nível Básico (1–10) — Fundamentos Aplicados

Projetos simples que trabalham lógica, manipulação do DOM e eventos.

1. **[Relógio Digital em Tempo Real](./relogio-digital)**  
   Exibe a hora atual, atualizando a cada segundo.  
   *🧠 Conceitos*: `setInterval`, `Date`, manipulação do DOM.

2. **[Contador de Cliques com Reset](./contador-cliques)**  
   Conta cliques em um botão com opção de zerar.  
   *🧠 Conceitos*: Eventos, DOM, variáveis.

3. **[Validador de Formulário Simples](./validador-formulario)**  
   Valida campos de nome e e-mail com feedback ao usuário.  
   *🧠 Conceitos*: Regex, DOM, validação de formulários.

4. **[Conversor de Temperatura (°C ↔ °F)](./conversor-temperatura)**  
   Converte valores entre Celsius e Fahrenheit.  
   *🧠 Conceitos*: Funções, eventos, cálculos matemáticos.

5. **[To-Do List Simples (LocalStorage)](./todo-list)**  
   Adiciona, remove e armazena tarefas no navegador.  
   *🧠 Conceitos*: Arrays, `localStorage`, eventos.

6. **[Gerador de Senhas Aleatórias](./gerador-senhas)**  
   Gera senhas seguras com letras, números e símbolos.  
   *🧠 Conceitos*: Strings, `Math.random`, funções puras.

7. **[Calculadora Simples](./calculadora)**  
   Realiza operações básicas com interface de botões.  
   *🧠 Conceitos*: Eventos, lógica condicional.

8. **[Mudar Tema Claro/Escuro (Dark Mode)](./tema-claro-escuro)**  
   Alterna entre temas e salva preferência no `localStorage`.  
   *🧠 Conceitos*: Manipulação de classes, armazenamento local.

9. **[Galeria de Imagens com Modal](./galeria-imagens)**  
   Abre imagens em modal ao clicar.  
   *🧠 Conceitos*: Eventos, DOM, manipulação de CSS.

10. **[Sistema de Likes (Contador + Persistência)](./sistema-likes)**  
    Conta curtidas e armazena no `localStorage`.  
    *🧠 Conceitos*: Eventos, persistência, manipulação de estado.

### 🟡 Nível Intermediário (11–20) — Aplicações Interativas

Projetos com maior complexidade, incluindo APIs e interações dinâmicas.

11. **[Consulta de CEP (API ViaCEP)](./consulta-cep)**  
    Preenche endereço automaticamente a partir de um CEP.  
    *🧠 Conceitos*: `fetch`, JSON, integração com APIs.

12. **[Previsão do Tempo (API OpenWeather)](./previsao-tempo)**  
    Exibe dados meteorológicos de uma cidade.  
    *🧠 Conceitos*: `fetch`, `async/await`, manipulação de objetos.

13. **[Calculadora de IMC com Feedback Visual](./calculadora-imc)**  
    Calcula IMC e exibe feedback (baixo, ideal, alto).  
    *🧠 Conceitos*: Lógica condicional, DOM, feedback visual.

14. **[Carrossel Automático de Imagens](./carrossel-imagens)**  
    Troca automática e manual de slides.  
    *🧠 Conceitos*: `setInterval`, manipulação de classes.

15. **[Cronômetro com Start, Pause e Reset](./cronometro)**  
    Cronômetro com precisão em milissegundos.  
    *🧠 Conceitos*: Timers, controle de estado.

16. **[Lista de Produtos com Filtro de Busca](./lista-produtos)**  
    Filtra itens em tempo real com base no input.  
    *🧠 Conceitos*: Eventos de input, `filter()`, `includes()`.

17. **[Conversor de Moedas (API ExchangeRate)](./conversor-moedas)**  
    Converte valores entre moedas usando API.  
    *🧠 Conceitos*: `fetch`, tratamento de erros, formatação.

18. **[Gerador de QR Code](./gerador-qrcode)**  
    Gera QR Code a partir de texto ou URL.  
    *🧠 Conceitos*: Bibliotecas externas, integração JS.

19. **[Notas Persistentes (Mini Bloco de Notas)](./notas-persistentes)**  
    Salva e recupera textos localmente.  
    *🧠 Conceitos*: `localStorage`, `JSON.parse/stringify`.

20. **[Validação de CPF ou CNPJ](./validacao-cpf-cnpj)**  
    Verifica se CPF/CNPJ é válido com algoritmo.  
    *🧠 Conceitos*: Regex, algoritmos, funções puras.

### 🔴 Nível Avançado (21–30) — Projetos Reais Completos

Projetos que simulam sistemas reais, com arquiteturas robustas.

21. **[Sistema de Login Simples (com LocalStorage)](./sistema-login)**  
    Simula cadastro, login e logout com autenticação.  
    *🧠 Conceitos*: Criptografia básica, `localStorage`, controle de sessão.

22. **[Carrinho de Compras](./carrinho-compras)**  
    Adiciona/remover itens e calcula total em tempo real.  
    *🧠 Conceitos*: Arrays, eventos, atualização reativa.

23. **[Dashboard de Vendas](./dashboard-vendas)**  
    Gráficos de faturamento e ranking com Chart.js.  
    *🧠 Conceitos*: Bibliotecas, visualização de dados.

24. **[Chat em Tempo Real](./chat-tempo-real)**  
    Comunicação em tempo real com WebSocket ou Firebase.  
    *🧠 Conceitos*: WebSocket/Firebase, eventos assíncronos.

25. **[Sistema de Agendamento](./sistema-agendamento)**  
    Escolha de dia/horário com bloqueio de horários ocupados.  
    *🧠 Conceitos*: Controle de estado, manipulação de datas.

26. **[Gerenciador de Usuários (CRUD)](./gerenciador-usuarios)**  
    CRUD completo com JSON Server.  
    *🧠 Conceitos*: REST API, `async/await`, CRUD.

27. **[App de Anotações com Markdown](./anotacoes-markdown)**  
    Escreve e visualiza anotações em Markdown.  
    *🧠 Conceitos*: Bibliotecas externas, parse de texto.

28. **[Aplicativo de Tarefas com Drag & Drop](./tarefas-drag-drop)**  
    Arrasta tarefas entre colunas (To Do, Doing, Done).  
    *🧠 Conceitos*: Eventos de drag/drop, manipulação avançada.

29. **[Sistema de Autenticação com Firebase](./autenticacao-firebase)**  
    Login com e-mail/Google e rotas protegidas.  
    *🧠 Conceitos*: Firebase Auth, autenticação, rotas.

30. **[PWA de Lista de Compras](./pwa-lista-compras)**  
    Lista de compras offline, instalável como app.  
    *🧠 Conceitos*: Service Workers, `manifest.json`, cache.

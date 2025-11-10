# 🧠 Validador de Formulário Simples

Este é um projeto React que valida os campos **Nome** e **E-mail** de um formulário utilizando **Regex** e **manipulação de estado**.

---

## 🚀 Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- Regex (expressões regulares)
- CSS3

---

## 📋 Funcionalidades

- Validação de **nome** (mínimo 3 letras, apenas caracteres alfabéticos)
- Validação de **e-mail** (formato padrão, ex: nome@dominio.com)
- Exibição de mensagens de erro específicas abaixo dos campos
- Feedback visual de sucesso e falha
- Reset automático após envio bem-sucedido

---

## ⚙️ Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/validador-formulario.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd validador-formulario
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Acesse em seu navegador:
   ```bash
   http://localhost:3000
   ```

---

## 🧩 Estrutura de Arquivos

```
validador-formulario/
├── src/
│   ├── components/
│   │   └── Home.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 💡 Lógica da Validação

A função `validarCampos()` utiliza expressões regulares para verificar se os valores de entrada atendem aos critérios definidos:

```javascript
if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/.test(nome)) {
  erros.nome = "Digite um nome válido (mínimo 3 letras)";
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  erros.email = "Digite um e-mail válido";
}
```

Se todos os campos estiverem corretos, o formulário é enviado e os dados são limpos do estado.

---

## 🧠 Aprendizados

Esse projeto é ideal para quem está estudando React e quer entender melhor:
- Controle de inputs com `useState`
- Funções de validação com Regex
- Eventos `onSubmit` e `preventDefault()`
- Renderização condicional para mensagens de erro

---

## 🧑‍💻 Autor

Desenvolvido por **Maxwell Moura** — como parte do repositório **Projetinhos** 🚀


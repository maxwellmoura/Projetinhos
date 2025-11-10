# 🔐 Gerador de Senhas Aleatórias

Este projeto é um **Gerador de Senhas** desenvolvido em **React**. Ele permite criar senhas seguras e personalizadas com letras maiúsculas, minúsculas, números e símbolos.

## 🚀 Funcionalidades

- Definir o tamanho da senha (de 4 até 64 caracteres).
- Escolher quais tipos de caracteres incluir:
  - Letras minúsculas
  - Letras maiúsculas
  - Números
  - Símbolos
- Gerar senhas aleatórias usando funções puras.
- Copiar a senha gerada para a área de transferência.
- Exibir o nível de força da senha (fraca, média ou forte).

---

## 🧠 Conceitos aplicados

- **React Hooks** (`useState`)
- **Funções puras** em JavaScript
- **Modularização** com separação da lógica em `lib/password.js`
- Uso de **Math.random()** para geração aleatória
- Manipulação de **Clipboard API** (`navigator.clipboard.writeText`)

---

## 📂 Estrutura do projeto

```
src/
 ├── lib/
 │    └── password.js   # Funções puras responsáveis pela lógica de geração e avaliação das senhas
 ├── components/
 │    └── Home.jsx      # Interface principal com os controles e exibição da senha
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/gerador-senhas.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd gerador-senhas
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço indicado (geralmente `http://localhost:5173`).

---

## 🧩 Arquivo `password.js`

Este arquivo contém toda a lógica funcional do gerador:
- **`buildAlphabet`**: constrói o conjunto de caracteres com base nas opções escolhidas.
- **`randomIndex`**: gera um índice aleatório.
- **`generatePassword`**: monta a senha usando os caracteres disponíveis.
- **`estimateStrength`**: avalia a força da senha.

---

## 💡 Ideias de melhoria

- Adicionar botão para regenerar automaticamente senhas.
- Mostrar indicador visual (barras coloridas) da força da senha.
- Adicionar opção para excluir caracteres ambíguos (`0`, `O`, `l`, `1`).
- Implementar uso da **API Crypto** para gerar senhas mais seguras.

---

## 🧑‍💻 Autor

Projeto desenvolvido por **Maxwell Moura** como parte de sua evolução prática em **React e JavaScript**.

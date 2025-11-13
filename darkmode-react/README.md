
# 🌓 Projeto Dark/Light Mode — Tema Claro e Escuro em React

Este projeto é um **alternador de tema** (Dark Mode / Light Mode) desenvolvido em **React**.  
Ele permite alternar entre os modos **claro** e **escuro**, aplicando dinamicamente classes no `<body>` e **salvando a preferência do usuário** no `localStorage`.

---

## 🚀 Funcionalidades

- Alternar entre **tema claro** e **tema escuro** com apenas um clique.
- Salvar automaticamente a preferência no **localStorage**.
- Detectar o tema padrão do sistema (Windows/macOS).
- Aplicar estilos usando **variáveis CSS**, permitindo expansão futura.
- Transição suave entre temas.

---

## 🧠 Conceitos aplicados

- **React Hooks**:
  - `useState` (gerenciar estado do tema)
  - `useEffect` (sincronizar tema no DOM)
- Uso do **localStorage** para persistência.
- Manipulação direta do **document.body.classList**.
- CSS com:
  - Variáveis (`--bg-color`, `--text-color`)
  - Classes condicionais (`body.dark`, `body.light`)
  - Transições (`transition: background, color`)
- Leitura do tema do sistema com:
  - `window.matchMedia('(prefers-color-scheme: dark)')`

---

## 📂 Estrutura do projeto

```
src/
 ├── components/
 │    └── Home.jsx        # Tela principal com botão de alternância
 ├── App.jsx              # Rotas e estrutura base
 ├── App.css              # Estilos globais e temas
 ├── main.jsx
```

---

## ⚙️ Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/darkmode-react.git
   ```

2. Acesse a pasta:
   ```bash
   cd darkmode-react
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço indicado (geralmente `http://localhost:5173`).

---

## 🧩 Lógica do Dark Mode

A lógica do tema está totalmente dentro de **Home.jsx**, seguindo passos:

- Ler o tema salvo no localStorage.
- Caso não exista, detectar o tema do sistema.
- Usar `isDarkMode` como estado central.
- Aplicar/remover classes do body:
  - `.dark`
  - `.light`
- Persistir a preferência sempre que o estado muda.

Isso garante que:

✔ Ao atualizar a página → o tema permanece  
✔ Ao clicar → o tema alterna imediatamente  
✔ O CSS aplica a paleta de cores correta usando variáveis  

---

## 💡 Ideias de melhoria

- Criar um **ThemeContext** para permitir alternância global em vários componentes.
- Adicionar animações mais suaves entre temas.
- Introduzir um ícone de lua/sol (usando `react-icons`).
- Transformar a lógica em um hook customizado:  
  `useTheme()`
- Criar um botão com estilo de "switch" deslizante.

---

## 🧑‍💻 Autor

Projeto desenvolvido por **Maxwell Moura**, como parte da sua trilha de estudos em **React e JavaScript**, aplicando conceitos fundamentais na construção de interfaces modernas e interativas.

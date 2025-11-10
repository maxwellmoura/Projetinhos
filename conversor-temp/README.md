# 🔥 Conversor de Temperatura (°C ↔ °F)

Aplicação simples em **React** que converte temperaturas entre **Celsius** e **Fahrenheit** de forma instantânea.  
Desenvolvido para praticar conceitos fundamentais de **funções puras**, **estados**, **eventos** e **renderização reativa** no React.

---

## 🚀 Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- CSS puro

---

## 🧠 Objetivo do projeto

Este projeto foi criado para exercitar:

- Manipulação de **estados com `useState`**
- Criação e uso de **funções puras** (`cToF`, `fToC`)
- Uso de **inputs controlados**
- Organização de **componentes e containers independentes**
- Aplicação de **estilo CSS básico e responsivo**

---

## ⚙️ Como executar o projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2️⃣ Acessar a pasta do projeto
```bash
cd nome-do-repositorio
```

### 3️⃣ Instalar as dependências
```bash
npm install
```

### 4️⃣ Executar o servidor de desenvolvimento
```bash
npm run dev
```

Depois abra o navegador e acesse:
```
http://localhost:5173
```

---

## 🧩 Estrutura do projeto

```
📂 src
 ┣ 📜 App.jsx
 ┣ 📜 Home.jsx
 ┣ 📜 Home.css
 ┗ 📜 main.jsx
```

### 🔹 App.jsx
Responsável pelas rotas do sistema usando **React Router**.

```jsx
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
export default App
```

---

### 🔹 Home.jsx
Componente principal da aplicação.  
Possui dois conversores independentes:
1. **Container 1:** converte de Celsius para Fahrenheit  
2. **Container 3:** converte de Fahrenheit para Celsius

Cada container tem seu próprio estado:

```jsx
const [container1, setContainer1] = useState({ c: "", f: "" })
const [container3, setContainer3] = useState({ c: "", f: "" })
```

#### Funções de conversão:
```jsx
function cToF(c) {
  return (c * 9 / 5) + 32
}

function fToC(f) {
  return (f - 32) * 5 / 9
}
```

Essas funções são **puras** — ou seja, não alteram estado diretamente, apenas retornam um valor.

#### Inputs controlados:
Cada `input` possui um `value` vinculado ao estado e um `onChange` que atualiza os dois campos (C e F) simultaneamente.

Exemplo:
```jsx
<input
  type="number"
  value={container1.c}
  onChange={(e) => {
    const novoC = e.target.value
    const novoF = cToF(novoC)
    setContainer1({ c: novoC, f: novoF })
  }}
/>
```

---

### 🔹 Home.css
Define o layout, espaçamento e estilo visual dos containers:

- `.home` centraliza o conteúdo.
- `.containerUm` e `.containerTres` possuem inputs e labels.
- `.containerDois` e `.containerQuadro` exibem o resultado da conversão.

```css
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.containerDois, .containerQuadro {
  margin-top: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  background-color: #f9f9f9;
}
```

---

## 🧮 Funcionamento do sistema

1. O usuário digita um valor em **Celsius** ou **Fahrenheit**.  
2. O evento `onChange` captura esse valor e chama a função de conversão (`cToF` ou `fToC`).  
3. O resultado é armazenado no **estado React (`useState`)**.  
4. O JSX exibe automaticamente o resultado atualizado.  
5. Como cada container tem seu próprio estado, eles funcionam **de forma independente**.

---

## 📘 Exemplo de uso

**Container 1**
```
Digite: 0°C → Resultado: 32°F
Digite: 100°C → Resultado: 212°F
```

**Container 3**
```
Digite: 32°F → Resultado: 0°C
Digite: 212°F → Resultado: 100°C
```

---

## 🖌️ Estilo aplicado

- Layout centralizado com espaçamento equilibrado
- Campos numéricos estreitos e centralizados
- Resultados destacados em caixas separadas
- Cores suaves e visual limpo para estudo

---

## 📚 Aprendizados reforçados

- Diferença entre **estado global e local**
- Controle de inputs com React
- Organização lógica em **funções puras**
- Estrutura e clareza de componentes

---

## 👨‍💻 Autor

Desenvolvido por **[Maxwell Moura]**  
📧 Contato: [maxwellcmoura@gmail.com]  


---

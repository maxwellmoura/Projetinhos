# 🎭 Sistema de Reações (Likes, Dislikes e Corações) – React + LocalStorage

Este projeto é um **sistema completo de reações** desenvolvido em **React.js**, permitindo que cada post receba **likes**, **dislikes** e **corações**, com **persistência automática no localStorage**.  
As reações permanecem salvas mesmo após recarregar a página.

---

## 🚀 Tecnologias Utilizadas
- **React.js**
- **JavaScript (ES6+)**
- **Vite**
- **React Icons**
- **LocalStorage**
- **HTML5 / CSS3**

---

## 🧠 Funcionalidades
✅ Cada post possui seus próprios contadores independentes  
✅ Reações separadas: **Like 👍**, **Dislike 👎**, **Heart ❤️**  
✅ Persistência total via **localStorage**  
✅ Botão para **resetar todas as reações**  
✅ Código limpo, organizado e reutilizável  
✅ Função genérica para adicionar reações (evita repetição)  

---

## 🧩 Estrutura da Lógica
### 🔹 `loadReactions()`
Carrega os valores salvos no localStorage e retorna um objeto consistente.

### 🔹 Estados separados
Cada tipo de reação é salvo separadamente:
```
likes { post1, post2, post3 }
hate  { post1, post2, post3 }
heart { post1, post2, post3 }
```

### 🔹 `addReaction()`
Função genérica que incrementa o contador correto, evitando duplicação de código.

### 🔹 `resetAll()`
Zera todas as reações e limpa o localStorage.

---

## 🖥️ Exemplo visual
```
Post 1:
👍 12   👎 3   ❤️ 5

Post 2:
👍 7    👎 1   ❤️ 2

Post 3:
👍 4    👎 0   ❤️ 9
```

Botão:
```
[ Resetar Reações ]
```

---

## 📁 Estrutura do Projeto
```
src/
 ├── Home.jsx
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 └── assets/
```

---

## ⚙️ Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/maxwellmoura/Projetinhos.git

# Acesse a pasta do projeto
cd Projetinhos/sistema-de-reacoes

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## 🧑‍💻 Autor
**Maxwell Moura**  
Desenvolvedor Front-end em formação 🚀  
📍 GitHub: https://github.com/maxwellmoura

---

## 🎯 Objetivo do Projeto
Este projeto foi criado para praticar:

- Controle de estado no React  
- Persistência com localStorage  
- Manipulação de múltiplas reações  
- Uso de funções reutilizáveis  
- Interação com ícones e eventos  
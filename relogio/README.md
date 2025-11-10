# ⏰ Relógio Digital (React)

Este projeto é um **relógio digital em tempo real** desenvolvido com **React.js**, utilizando hooks (`useState` e `useEffect`) para atualização contínua da hora exibida na tela.

---

## 🚀 Tecnologias utilizadas
- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

---

## 🧠 Funcionalidades
✅ Mostra a hora atual do sistema (HH:MM:SS)  
✅ Atualiza automaticamente a cada segundo  
✅ Exemplo prático de uso do **useEffect** e **setInterval**  
✅ Código simples, limpo e didático para iniciantes em React  

---

## 🧩 Estrutura principal
O componente `Home.jsx` contém toda a lógica do relógio:
- `horario` → guarda a hora atual em estado
- `atualizandoHorario()` → obtém a hora do sistema com `toLocaleTimeString()`
- `useEffect()` → inicializa o relógio e mantém a atualização ativa com `setInterval`

---

## 🖼️ Exemplo visual
```
Relógio
Horário Atual: 14:35:42
```
(O valor é atualizado automaticamente a cada segundo)

---

## ⚙️ Como rodar o projeto
```bash
# Clone o repositório
git clone https://github.com/maxwellmoura/Projetinhos.git

# Acesse a pasta do projeto
cd Projetinhos/relogio

# Instale as dependências
npm install

# Execute o projeto
npm start
```

---

## 🧑‍💻 Autor
**Maxwell Moura**  
Desenvolvedor Front-end em formação 💻  
📍 [GitHub](https://github.com/maxwellmoura)

---

### 🎯 Objetivo do projeto
Este projeto foi criado para praticar **hooks e ciclo de vida no React**, com foco em entender o comportamento do **useEffect** e o uso do **setInterval** de forma controlada e limpa.

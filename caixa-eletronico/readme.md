# 💰 Caixa Eletrônico (React)

Este projeto simula um **caixa eletrônico** simples utilizando **React.js**, com foco em praticar o uso de estruturas condicionais (`if`, `else if`, `else`) e manipulação de estados com `useState`.

---

## 🚀 Tecnologias utilizadas
- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

---

## 🧠 Funcionalidades
✅ Exibe o saldo atual do usuário  
✅ Permite realizar saques digitando um valor  
✅ Validações com mensagens de erro coloridas:
- Valor inválido (vermelho)
- Saldo insuficiente (amarelo)
- Valor não múltiplo de 10 (laranja)  
✅ Atualiza o saldo automaticamente após cada saque  
✅ Limpa o campo de input após o saque  

---

## 🧩 Estrutura principal
O componente `Home.jsx` contém toda a lógica:
- `valorInput` → armazena o valor digitado
- `mensagem` → exibe o status do saque
- `corMensagem` → altera dinamicamente a cor do texto
- `saldo` → controla o saldo atual

A função `handleSaque()` realiza as validações e atualiza os estados conforme o caso.

---

## 🖼️ Exemplo visual
```
Caixa Eletrônico
Saldo Atual: R$ 1000
[ Digite o valor do saque ]
[ Sacar ]
Mensagem: Saque de R$100 realizado com sucesso!
```

---

## ⚙️ Como rodar o projeto
```bash
# Clone o repositório
git clone https://github.com/maxwellmoura/Projetinhos.git

# Acesse a pasta do projeto
cd Projetinhos/caixa-eletronico

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

### 📚 Objetivo do projeto
Este projeto foi criado para praticar o uso de **estruturas condicionais no React** de forma visual e interativa — um exercício intermediário para consolidar a transição de lógica JavaScript pura para componentes reativos.

# 📦 Consulta de CEP 

Este projeto é uma aplicação simples desenvolvida em **React.js** que permite consultar endereços através do **CEP** usando a API pública **ViaCEP**.  
Ao digitar um CEP e enviar o formulário, o sistema faz a requisição, valida o CEP, trata erros e exibe os dados recebidos.

---

## 🚀 Tecnologias Utilizadas

- **React.js**
- **React Router DOM**
- **JavaScript (ES6+)**
- **Fetch API**
- **ViaCEP API**
- **CSS**

---

## 🧠 Funcionalidades

✔️ Busca de endereço pelo CEP  
✔️ Validação automática do CEP (somente números e exatamente 8 dígitos)  
✔️ Tratamento de erros (CEP inválido ou inexistente)  
✔️ Exibição dos dados retornados pela API:  
- Logradouro  
- Bairro  
- Cidade  
- Estado  
- CEP formatado  
✔️ Feedback visual de carregamento (loading)  
✔️ Componentização simples e clara  
✔️ Função externa `searchByCEP()` para organização do código

---

## 📁 Estrutura de Arquivos

```
src/
│── App.jsx
│── App.css
│── pages/
│     └── Home.jsx
│── lib/
│     └── api.js
```

---

## 🔧 Como executar o projeto

```sh
npm install
npm run dev
```

Abra no navegador:

```
http://localhost:5173
```

---

## 🔗 API Utilizada

Este projeto usa a API pública **ViaCEP**, que NÃO requer autenticação.

Exemplo de requisição:

```
https://viacep.com.br/ws/01001000/json/
```

---

## 📜 Trecho principal do código (`Home.jsx`)

```jsx
const handdleSubmit = async (e) => {
  e.preventDefault()
  setErro('')
  setLoading(true)
  try {
    const data = await searchByCEP(cep)
    setEndereco(data)
  } catch (err) {
    setEndereco(null)
    setErro(err.message)
  } finally {
    setLoading(false)
  }
}
```

---

## 📡 Função de consulta (`api.js`)

```jsx
export async function fetchCEP(cep) {
  const cleanCEP = cep.replace(/\D/g, '');

  if (cleanCEP.length !== 8) {
    throw new Error('CEP deve conter 8 dígitos');
  }

  const response = await fetch(`${API_URL}/${cleanCEP}/json`);

  if (!response.ok) {
    throw new Error('Erro ao buscar CEP');
  }

  const data = await response.json();

  if (data.erro) {
    throw new Error('CEP não encontrado');
  }

  return data;
}
```

---

## 📝 Licença

Este projeto é livre para estudos e modificações.  
Sinta-se à vontade para usar no seu portfólio! 🚀

---

## ✨ Autor

**Maxwell Moura**  
Projetinho criado para prática de integração com APIs públicas e manipulação de dados no React.

import React, { useState } from "react"


function Home() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [erros, setErros] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Nome:", nome)
        console.log("Email:", email)
        if(validarCampos()){
            console.log("Formulário Válido!")
            alert("Formulário enviado com sucesso")
            setNome("")
            setEmail("")
            setErros({})
        }else{
            console.log("Há erros no formulário.")
        }
    }

    function validarCampos() {
        const erros = {}
    
    if (!nome.trim()) {
        erros.nome = "O nome é obrigatório"
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/.test(nome)) {
        erros.nome = "Digite um nome válido (Minimo 3 letras)"
    }
    if (!email.trim()) {
        erros.email = "O email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erros.email = "Digite um e-mail válido"
    }
    setErros(erros)
    return Object.keys(erros).length === 0

}

return (
    <div className="container">
        <h1>Validador de Formulário</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input value={nome}
                    type="text"
                    onChange={(e) => setNome(e.target.value)} />
                    {erros.nome && <p style={{color: "red"}}>{erros.nome}</p>}
            </div>
            <div>
                <label>E-mail:</label>
                <input value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" />
                    {erros.email && <p style={{color: "red"}}>{erros.email}</p>}
            </div>
            <button
                type="submit">Enviar</button>
        </form>

    </div>
);
}

export default Home;

import React, { useState } from "react";

function Home() {
  const [valorInput, setValorInput] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [corMensagem, setCorMensagem] = useState("");
  const [saldo, setSaldo] = useState(1000);

  const handleSaque = () => {
    const valor = Number.parseFloat(valorInput);

    if (Number.isNaN(valor) || valor <= 0) {
      setMensagem("Valor inválido! Digite um valor maior que zero.");
      setCorMensagem("red");
    } else if (valor > saldo) {
      setMensagem("Saldo insuficiente!");
      setCorMensagem("yellow");
    } else if (valor % 10 !== 0) {
      setMensagem("O valor deve ser múltiplo de 10.");
      setCorMensagem("orange");
    } else {
      setSaldo((prevSaldo) => prevSaldo - valor);
      setMensagem(`Saque de R$${valor} realizado com sucesso!`);
      setCorMensagem("green");
    }

    setValorInput("");
  };

  return (
    <div className="caixa" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Caixa Eletrônico</h1>

      <p>
        Saldo Atual: <strong>R$ {saldo}</strong>
      </p>

      <input
        type="number"
        placeholder="Digite o valor do saque"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleSaque}
        style={{
          padding: "8px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Sacar
      </button>

      <p style={{ color: corMensagem, fontWeight: "bold", marginTop: "20px" }}>
        {mensagem}
      </p>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(contador + 1);
  };
  const resetar = () => {
    setContador(0);
  };
  return (
    <div className="container">
      <h1 className="titulo">Contador</h1>
      <h2 className="subTitulo">Clicks </h2>
      <h3 className="contador">{contador}</h3>
      <button onClick={incrementar} className="button">
        Click
      </button>
      <button onClick={resetar} className="reset">
        Resetar
      </button>
    </div>
  );
};

export default Home;

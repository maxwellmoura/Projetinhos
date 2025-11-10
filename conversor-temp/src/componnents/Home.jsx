import React, { useState } from 'react'

const Home = () => {
  const [container1, setContainer1] = useState({ c: "", f: "" })
  const [container3, setContainer3] = useState({ c: "", f: "" })
  function cToF(c) {
    return (c * 9 / 5) + 32
  }

  function fToC(f) {
    return (f - 32) * 5 / 9
  }

  return (
    <div className="home">
      <h1>Conversor de Temperatura</h1>
      <div className='containerUm'>
        <label>Digite os centrígrados:</label>
        <input
          type="number"
          value={container1.c}
          onChange={(e) => {
            const novoC = e.target.value
            const novoF = cToF(novoC)
            setContainer1({ c: novoC, f: novoF })
          }}
        />
        <span>ºC </span>

        <label>Em fahrenheit:</label>
        <input
          type="number"
          value={container1.f}
          onChange={(e) => {
            const novoF = e.target.value
            const novoC = fToC(novoF)
            setContainer1({ c: novoC, f: novoF })
          }}
        />
        <span>ºF </span>
      </div>
      <div className="containerDois">
        <h2>Resultado:</h2>
        <p>{container1.c} ºC é igual a {container1.f} ºF</p>
      </div>
      <div className='containerTres'>
        <label>Digite em fahrenheit</label>
        <input type="number"
          value={container3.f}
          onChange={(e) => {
            const novoF = e.target.value
            const novoC = fToC(novoF)
            setContainer3({ f: novoF, c: novoC })
          }} />
        <span>ºF </span>
        <label>Em centrígrados:</label>
        <input type="number"
          value={container3.c}
          onChange={(e) => {
            const novoC = e.target.value
            const novoF = cToF(novoC)
            setContainer3({ c: novoC, f: novoF })
          }} />
        <span>ºC</span>
        <div className="containerQuadro">
          <h2>Resultado:</h2>
          <p>{container3.f} ºF é igual a {container3.c} ºC</p>
        </div>
      </div>
    </div>
  )
}

export default Home
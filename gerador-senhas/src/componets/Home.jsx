import { useState } from 'react'
import * as passwordUtils from '../lib/password'


const Home = () => {
  const [length, setLength] = useState(12);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState("");

  function handleGeneratePassword() {
    try {
      const pwd = passwordUtils.generatePassword(length, {
        useLower,
        useUpper,
        useNumbers,
        useSymbols
      });
      setPassword(pwd);
    } catch (error) {
      alert(error.message);
    }
  }
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(password);
  }
  function getStrength() {
    return passwordUtils.estimateStrength(password, {
      useLower, useUpper, useNumbers, useSymbols
    });
  }
  function handleLengthChange(e) {
    const value = Number(e.target.value);
    setLength(value);
  }

  return (
    <div>
      <h1>Gerador de senhas</h1>
       <button onClick={handleGeneratePassword}>Gerar Senha</button>
      <div>
        <label>
          <input
            type="checkbox"
            checked={useLower}
            onChange={e => setUseLower(e.target.checked)}
          />
          Letras minúsculas
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={useUpper}
            onChange={e => setUseUpper(e.target.checked)}
          />
          Letras maiúsculas
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={e => setUseNumbers(e.target.checked)} 
          />
          Números
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={e => setUseSymbols(e.target.checked)}
          /> 
          Símbolos
        </label>
        <div>
          <label>
            Tamanho da senha:
            <input
              type="number"
              min="4"
              max="64"
              value={length}
              onChange={handleLengthChange}
            />
          </label>
        </div>
      </div>
      <h2>Senha gerada:</h2>
      <p>{password}</p>
      <button onClick={handleCopyToClipboard}>Copiar para área de transferência</button>
      <h3>Força da senha: {getStrength()}</h3>
    </div>
  )
}

export default Home
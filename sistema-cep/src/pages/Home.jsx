import React, {useState} from 'react'
import { searchByCEP } from '../lib/api'

export const Home = () => {
 const [cep, setCep] = useState('');
 const [endereco, setEndereco] = useState(null)
 const [erro, setErro] = useState(null)
 const [loading, setLoading] = useState(false)

 const handdleSubmit = async (e) => {
  e.preventDefault()
  setErro('')
  setLoading(true)
  try{
    const data = await searchByCEP(cep)
    setEndereco(data)
  }catch(err){
    setEndereco(null)
    setErro(err.message)
  }finally{
    setLoading(false)
  }
 }

  return (
    <main>
      <h1>Consulta de CEP</h1>
      <form onSubmit={handdleSubmit}>
        <label>
          CEP 
          <input
            type='text'
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder='Somente Números'
            maxLength={9}
            />
        </label>
        {erro && <p style={{color: 'red'}}>{erro}</p>}
        {endereco &&(
          <section>
            <p><strong>Rua:</strong> {endereco.logradouro}</p>
            <p><strong>Bairro:</strong> {endereco.bairro}</p>
            <p><strong>Cidade:</strong> {endereco.localidade}</p>
            <p><strong>Estado:</strong> {endereco.uf}</p>
            <p><strong>CEP:</strong> {endereco.cep}</p>
          </section>
        )}
      </form>

    </main>
    
  )
}


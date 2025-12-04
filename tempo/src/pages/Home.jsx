import {useState} from 'react'
import Script from '../lib/script.jsx'

export default function Home() {
  const [cidade, setCidade] = useState("")
 
  return  <div className='container'>
    <h1>Tempo Agora</h1>
    <p className='p'>em</p>
    <div className='form'>
      <input 
      type="text"
      placeholder='Digite a cidade'
      value={cidade}
      onChange={(e) => setCidade(e.target.value)}
      />
    </div>
    {cidade && <Script cidade={cidade} />}
  </div>
}

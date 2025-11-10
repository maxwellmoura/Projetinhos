
import {useState, useEffect} from 'react'
import './Home.css'

const Home = () => {
    const [horario, setHorario] = useState('')
    function atualizandoHorario() {
        let hora = new Date().toLocaleTimeString()
        setHorario(hora)
    }
    useEffect(() => {
        atualizandoHorario()
        const intervalId = setInterval(atualizandoHorario, 1000)
        return () => clearInterval(intervalId)

    }, [])
    return (
        <div>
            <h1>Relógio</h1>
            <p>Horário Atual: {horario}</p>
        </div>
    )
}
export default Home
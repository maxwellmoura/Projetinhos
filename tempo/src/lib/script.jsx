
import { useState, useEffect } from 'react'

export default function Script({ cidade }) {
    const apiKey = "5dbfb790bf1603dfc486413f522e732f"
    const idiomas = ["pt_br", "pt"]

    const [dados, setDados] = useState(null)
    const [erro, setErro] = useState("")
    const [carregando, setCarregando] = useState(false)

    async function buscarClima(cidadeNormalizada) {
        try {
            setCarregando(true)
            setErro("")
            if (!cidadeNormalizada) {
                setDados(null)
                return
            }

            const requisicao = async (lang) => {
                const params = new URLSearchParams({
                    q: cidadeNormalizada,
                    appid: apiKey,
                    units: "metric",
                    lang,
                })
                const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?${params.toString()}`)
                const corpo = await resposta.json()
                return { resposta, corpo }
            }

            let tentativa = await requisicao(idiomas[0])
            const erroDeIdioma = tentativa.resposta.status === 400 && (tentativa.corpo?.message || "").toLowerCase().includes("lang")
            if (!tentativa.resposta.ok && erroDeIdioma && idiomas[1]) {
                tentativa = await requisicao(idiomas[1])
            }

            if (!tentativa.resposta.ok) {
                const mensagem = (tentativa.corpo?.message || "").toLowerCase()

                if (tentativa.resposta.status === 404 || mensagem.includes("city not found")) {
                    throw new Error("Cidade nao encontrada.")
                }
                if (tentativa.resposta.status === 401) {
                    throw new Error("API key rejeitada.")
                }
                throw new Error("Erro ao buscar clima.")
            }
            setDados(tentativa.corpo)
        } catch (err) {
            setErro(err.message)
            setDados(null)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        const cidadeNormalizada = cidade.trim()
        if (!cidadeNormalizada) {
            setDados(null)
            return
        }
        const timer = setTimeout(() => {
            buscarClima(cidadeNormalizada)
        }, 400)
        return () => clearTimeout(timer)
    }, [cidade])

    if (carregando) return <p>Carregando...</p>
    if (erro) return <p>Erro: {erro}</p>
    if (!dados) return null

    const {
        name,
        sys: { country },
        main: { temp, feels_like, humidity },
        wind: { speed },
        weather,
    } = dados

    const descricao = weather[0].description
    const icone = weather[0].icon ? `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png` : null

    return (
        <div className='card'>
            <h2>{name} ({country})</h2>
            {icone && <img src={icone} alt="Clima" />}
            <p><strong>{Math.round(temp)}</strong></p>
            <p>{descricao.charAt(0).toUpperCase() + descricao.slice(1)}</p>
            <hr />
            <p>Sensacao termica: {Math.round(feels_like)}</p>
            <p>Humidade: {humidity}</p>
            <p>Vento: {speed}</p>
        </div>
    )
}

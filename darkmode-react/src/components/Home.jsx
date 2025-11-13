import React from 'react'
import { useState, useEffect } from 'react'

export const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark")
            return true
        if (savedTheme === "light")
            return false
        const prefersDark = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark
    })

    useEffect(() => {
        if (isDarkMode){
            document.body.classList.remove("light")
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            document.body.classList.remove("dark")
            document.body.classList.add("light")
            localStorage.setItem("theme", "light")
        }
        }, [isDarkMode])

        function toggleDarkMode(){
            setIsDarkMode(prevMode => !prevMode)
        }


    return (
        <div className="home-container">
            <h1>Projeto Dark e Light Mode</h1>
            <h5>Clique no botão abaixo pra mudar o modo</h5>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>
        </div>
    )
}

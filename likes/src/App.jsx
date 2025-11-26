import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

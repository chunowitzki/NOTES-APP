import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import CreateCard from '../components/CreateCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<App />} />
        <Route path='/create' element={<CreateCard />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)

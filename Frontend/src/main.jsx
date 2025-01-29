import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/AuthContext.jsx'
import { ContactProvider } from './context/ContactContext.jsx'
import { SocketContextProvidor } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <ContactProvider>
    <SocketContextProvidor>
    <App />
    </SocketContextProvidor>
    </ContactProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

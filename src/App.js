import React from 'react'
/* router */
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
/* styles */
import './App.css'
/* layout */
import { Layout } from './layout/Layout/Layout'
/* pages */
import { Home } from './pages/Home/Home'
import { Account } from './pages/Account/Account'
import { Login } from './pages/Login/Login'
/* componenents */
import { Authentification } from './components/Authentification/Authentification'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/account"
              element={<Authentification Child={Account} />}
            />
            <Route path="/login" element={<Authentification Child={Login} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App

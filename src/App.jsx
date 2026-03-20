import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Contato from './components/Contato'
import NotFound from './components/NotFound'
import Produtos from './components/Produtos'
import Produto from './components/Produto'
import Head from './components/Head'


function App() {


  return (
    <>
      <HashRouter>
        <Head />
        <Header />
        <Routes>

          <Route path='contato' element={<Contato />} />
          <Route path='/' element={<Produtos />} />
          <Route path='produtos' element={<Produtos />} />
          <Route path='produtos/:id' element={<Produto />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App

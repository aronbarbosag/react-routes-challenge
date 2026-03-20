import React from 'react'
import contatoImg from '../imgs/contato.jpg'
import './contato.css'

const Contato = () => {
  return (
    <section className='contato animeleft' >
      <img src={contatoImg} alt="máquina de escrever" />
      <div className='contato-info'>
        <h3>Entre em contato</h3>
        <p>Telefone: 99999-99</p>
        <p>aronbarbosag@gmail.com</p>
        <p>Rua de tal, numero 00</p>
      </div>
    </section >
  )
}

export default Contato

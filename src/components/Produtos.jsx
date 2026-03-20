import React from 'react'
import './produtos.css'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Produtos = () => {


  const [produtos, setProdutos] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {

    async function fetchData(url) {
      try {


        setLoading(true)
        const response = await fetch(url)
        const responseJson = await response.json()

        setProdutos(responseJson)

      }
      catch (err) {
        setLoading(false)
        setError({
          msg: "Ocorreu um erro na requisição",
          error: err
        })


      }
      finally {
        setLoading(false)
      }

    }
    fetchData("https://ranekapi.origamid.dev/json/api/produto/")

  }, [])


  if (loading || produtos === null) return (<Loading />)
  if (error) return <div>{error.msg}</div>

  return (
    <section className='produtos animeleft'>
      {produtos.map(produto =>
        <Link to={produto.id} key={produto.id} end >
          <img src={produto.fotos[0].src} alt={produto.id} />
          <h3>{produto.fotos[0].titulo}</h3>
        </Link>)}

    </section>
  )
}

export default Produtos

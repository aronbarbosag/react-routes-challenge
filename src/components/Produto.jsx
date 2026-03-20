import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import './produto.css'

const Produto = () => {
  const [produto, setProduto] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
  const [error, setError] = React.useState(null)

  const params = useParams()

  React.useEffect(() => {
    async function fetchData(url) {
      try {


        setLoading(true)
        const response = await fetch(url)
        const responseJson = await response.json()

        setProduto(responseJson)
        setLoading(false)
      }
      catch (err) {
        setLoading(false)
        setError({
          msg: "Ocorreu um erro na requisição",
          error: err
        })
      }

    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)

  }, [params])

  if (error) return <div><p>{error.msg}</p></div>
  if (loading || produto === null) return (<Loading />)
  if (error) return <div>{error.msg}</div>
  return (
    <section className='produto'>

      <div>
        {produto.fotos.map(item => <img key={item.src} src={item.src} alt={item.titulo} />)}
      </div>
      <div className='produto-info'>
        <h3>{produto.nome}</h3>
        <p className='preco' >{produto.preco}</p>
        <p>{produto.descricao}</p>
      </div>


    </section>
  )
}

export default Produto

import React from 'react'
import { useLocation } from 'react-router-dom'

const Head = () => {
  const [title, setTitle] = React.useState(null)

  const location = useLocation()

  React.useEffect(() => {

    const locationArray = location.pathname.split('/')

    if (locationArray.length < 2) setTitle("Home")
    if (locationArray[locationArray.length - 1] === "produtos") setTitle("Site | Produtos")
    else setTitle(`Site | ${locationArray[locationArray.length - 1]}`)

  }, [location])

  document.querySelector('title').innerText = title


  return (
    <></>
  )
}

export default Head

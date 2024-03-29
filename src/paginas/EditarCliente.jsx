import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import Formulario from "../components/Formulario"

const EditarCliente = () => {

  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      setCargando(true)
      try {
        const url = `http://localhost:5000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
      } catch (error) {
        
      }
      finally{
        setCargando(false)
      }
    }
    obtenerClienteAPI()
  }, [])

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar cliente</h1>
      <p className='mt-3'>Utiliza este formulario para editar datos de un cliente</p>

      {cliente?.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      ): <p>Cliente ID no válido</p>}

    </>
  )
}

export default EditarCliente
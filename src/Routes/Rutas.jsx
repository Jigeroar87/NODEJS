import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from '../Pages/Inicio'
import Productos from '../Pages/Productos'
import Sobrenosotros from '../Pages/Sobrenosotros'
import Zonasdereparto from '../Pages/Zonasdereparto'
import Contactanos from '../Pages/Contactanos'
import Detalleproductos from '../Pages/Detalleproductos'
import Navbar from '../Components/Navbar/Navbar'

const Rutas = () => {
    const navbar_items = [
        {
            path:"/",
            name:"Inicio"
        },
        {
            path:"/Productos",
            name:"Productos"
        },
        {
            path:"/Sobrenosotros",
            name:"Sobre nosotros"
        },
        {
            path:"/Zonasdereparto",
            name:"Zonas de reparto"
        },
        {
            path:"/Contactanos",
            name:"Contáctanos"
        },
    ]


  return (
    <BrowserRouter>
        <Navbar navbar_items={navbar_items}/>
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/Productos' element={<Productos/>} />
            <Route path='/Sobrenosotros' element={<Sobrenosotros/>} />
            <Route path='/Zonasdereparto' element={<Zonasdereparto/>} />
            <Route path='/Contactanos' element={<Contactanos/>} />
            <Route path='/item/:id' element={<Detalleproductos/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas
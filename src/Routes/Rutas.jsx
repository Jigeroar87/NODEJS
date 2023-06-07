import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from '../Pages/Inicio'
import Productos from '../Pages/Productos'
import Sobrenosotros from '../Pages/Sobrenosotros'
import Zonasdereparto from '../Pages/Zonasdereparto'
import Contactanos from '../Pages/Contactanos'
import Detalleproductos from '../Pages/Detalleproductos'
import Categorias  from '../Pages/Categorias'
import Footer from '../Components/Footer/Footer'

import Navbar from '../Components/Navbar/Navbar'

const Rutas = () => {
    
    const navbar_brand = [
        {
            path:"/",
            name:"FunnyBox"
        }
    ]
    
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
            path:"/Categorias/1",
            name:"Alcancias"
        },
        {
            path:"/Categorias/2",
            name:"Lienzos"
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
        <Navbar navbar_brand={navbar_brand}/>
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/Productos' element={<Productos/>} />
            <Route path='/Sobrenosotros' element={<Sobrenosotros/>} />
            <Route path='/Zonasdereparto' element={<Zonasdereparto/>} />
            <Route path='/Contactanos' element={<Contactanos/>} />
            <Route path='/Productos/:id' element={<Detalleproductos/>} />
            <Route path='/Categorias/:idcategoria' element={<Categorias/>} />        
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  )
}

export default Rutas
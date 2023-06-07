import React, { Fragment } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Item from '../Components/Item/Item'
import Darkvader from '../../src/Assets/Alcancia_Darkvader.JPG'
import Hulk from '../../src/Assets/Alcancia_Hulk.JPG'
import Nopoygonta from '../../src/Assets/Lienzo_Nopoygonta.JPG'
import Payasito from '../../src/Assets/Lienzo_Payasito.JPG'

const Productos = () => {

    const items = [
        {
            id:"1",
            idcategoria:"1",
            titulo:"Alcancia Darkvader",
            descripcion:"$10",
            imagen: Darkvader
          },
        {
          id:"2",
          idcategoria:"1",
          titulo:"Alcancia Hulk",
          descripcion:"$10",
          imagen: Hulk
        },
        {
            id:"3",
            idcategoria:"2",
            titulo:"Lienzo Nopo y Gonta",
            descripcion:"$8",
            imagen: Nopoygonta
          },
        {
          id:"4",
          idcategoria:"2",
          titulo:"Lienzo Payasito",
          descripcion:"$8",
          imagen: Payasito
        }
    ]
  
  
  
    return (

    <Fragment>
    <section class="pt-5 section__color min-vh-100 fondo__pagina">
    <h1>Productos</h1>
  
    <div className='d-flex my-5'>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
    </section>
    </Fragment>
  )
}

export default Productos
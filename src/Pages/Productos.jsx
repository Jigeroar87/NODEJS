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
            descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic.",
            imagen: Darkvader
          },
        {
          id:"2",
          idcategoria:"1",
          titulo:"Alcancia Hulk",
          descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic.",
          imagen: Hulk
        },
        {
            id:"3",
            idcategoria:"2",
            titulo:"Lienzo Nopo y Gonta",
            descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic.",
            imagen: Nopoygonta
          },
        {
          id:"4",
          idcategoria:"2",
          titulo:"Lienzo Payasito",
          descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic.",
          imagen: Payasito
        }
    ]
  
  
  
    return (

    <Fragment>
    <h1>Producto</h1>
  
    <div className='d-flex my-5'>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
    </Fragment>
  )
}

export default Productos
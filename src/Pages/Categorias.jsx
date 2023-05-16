import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import Item from '../Components/Item/Item'
import Darkvader from '../../src/Assets/Alcancia_Darkvader.JPG'
import Hulk from '../../src/Assets/Alcancia_Hulk.JPG'
import Nopoygonta from '../../src/Assets/Lienzo_Nopoygonta.JPG'
import Payasito from '../../src/Assets/Lienzo_Payasito.JPG'

const Categorias = () => {
  
    const { idcategoria } = useParams(); 
  
console.log("idcat "+idcategoria);

    // o 1 o 2
  
    const [item] = useState({});

  
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
  
    
        const filter = items.filter((item) => item.idcategoria === idcategoria);
        console.log("filter");
        console.log(filter);
                
        console.log("item");
        console.log(item); 
  
  return (
    <Fragment>
    <h1>Producto</h1>
  
    <div className='d-flex my-5'>
      {
      
      filter.map((item) => (
        <Item key={item.id} {...item} />
        
      ))
      
      }
      
    </div>
    </Fragment>
  )
}

export default Categorias
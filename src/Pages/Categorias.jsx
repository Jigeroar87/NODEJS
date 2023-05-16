import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import Item from '../Components/Item/Item'

const Categorias = () => {
  
    const { idcategoria } = useParams(); 
  
console.log("idcat "+idcategoria);

    // o 1 o 2
  
    const [item] = useState({});

  
    const items = [
      {
          id:"1",
          idcategoria:"1",
          titulo:"Alcancias 1",
          descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic."
      },
      {
        id:"2",
        idcategoria:"1",
        titulo:"Alcancias 2",
        descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic."
    },
      {
          id:"3",
          idcategoria:"2",
          titulo:"Lienzos 1",
          descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic."
      },
      {
        id:"4",
        idcategoria:"2",
        titulo:"Lienzos 2",
        descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic."
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
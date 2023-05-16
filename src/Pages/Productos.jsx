import React, { Fragment } from 'react'
import Item from '../Components/Item/Item'

const Productos = () => {
  
    const items = [
        {
            id:"1",
            titulo:"Item 1",
            descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic."
        },
        {
            id:"2",
            titulo:"Item 2",
            descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magnam esse quia perspiciatis quam iure debitis. Dolorum soluta, esse in aliquam maiores enim dolor officia perspiciatis quo? Veniam, quidem hic."
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
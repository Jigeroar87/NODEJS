import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div>
        <li className="text-dark">
            {props.greeting}
        </li>

    </div>
  )
}

export default ItemListContainer
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Item = (props) => {
  const {id,titulo,descripcion,imagen} = props;
  const navigate = useNavigate()
  return (
    <div className='d-flex flex-column w-25 h-25 border border-dark mx-2'>
        <h3 className='fs-5'>{titulo}</h3>
        <img src={imagen} className="card-img-top" alt="..."/>
        <p className='fs-6'>{descripcion}</p>
        {/* <Link to={`/item/${id}`} className='btn btn-warning' >Ver Mas</Link> */}
        <button onClick={()=>navigate(`/Productos/${id}`)}>Ver mas</button>
    </div>
  )
}

export default Item



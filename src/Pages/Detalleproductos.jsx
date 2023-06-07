import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Darkvader from '../../src/Assets/Alcancia_Darkvader.JPG'
import Hulk from '../../src/Assets/Alcancia_Hulk.JPG'
import Nopoygonta from '../../src/Assets/Lienzo_Nopoygonta.JPG'
import Payasito from '../../src/Assets/Lienzo_Payasito.JPG'

const Detalleproductos = () => {
  
    const navigate = useNavigate();
    const { id } = useParams(); 
  
    // o 1 o 2
  
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
  
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
  
    useEffect(() => {
  
      setTimeout(() => {
        const filter = items.find((item) => item.id === id);
        setItem(filter)
        setLoading(false)
      }, 2000);
  
  
  
    }, []);
  
    const agregarAlCarrito = () => {
        // agarrar el item y guardar en el state del carrito 
        navigate('/')
      }

    return (
        <Fragment>
        <section class="pt-5 section__color min-vh-100 fondo__pagina">
        <button className="btn btn-dark" onClick={() => navigate(-1)}>
          Volver
        </button>
        <hr />
        {loading && <h1>Cargando..</h1>}
        {item && !loading && (
          <div>
            <h1>{item.titulo}</h1>
            <img src={item.imagen} alt="..."/>
            <p>{item.descripcion}</p>
            <button onClick={agregarAlCarrito} >Agregar al carrito</button>
          </div>
        )}
        </section>
      </Fragment>
  );
};

export default Detalleproductos;
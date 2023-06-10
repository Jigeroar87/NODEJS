import React, { Fragment } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Item from '../Components/Item/Item';

import {useContext, useState, useEffect } from "react";
import axios from "axios";
import { dataContext } from "../Components/Context/DataContext";

const Productos = () => {

  
    
    const [data, setData] = useState([]);
    const { buyProducts } = useContext(dataContext);

    useEffect(() => {
      axios("data.json").then((res) => setData(res.data));
    }, []);

  
  
    return (

    <Fragment>
    <section className="pt-5 section__color min-vh-100 fondo__pagina">
    <h1>Productos</h1>
  
    <div className='card-group fondo__pagina'>
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
    </section>
    </Fragment>
  )
}

export default Productos
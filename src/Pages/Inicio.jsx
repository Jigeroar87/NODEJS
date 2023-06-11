import React from 'react'
import Campanames from '../Assets/Campana_mes.JPG'
import Clientesatisfecho from '../Assets/Cliente_Satisfecho.JPG'

const Inicio = () => {
  return (
    <section clasName="pt-5 fondo__section min-vh-100 fondo__pagina" >
        
        <div clasName="container-fluid">
            <div clasName="container">
                <div clasName="row py-5">
                    <div clasName="col-md-12 text-center color_fondo">
                        <h1>FunnyBox regalo divertido para niños</h1>
                    </div>
                </div>
                <div clasName="row">
                    <div clasName="col-8 offset-2 col-md-6 offset-md-0">
                        <h3 clasName="text-center">Campaña del mes Patrio</h3>
                        <img src={Campanames} clasName="img-fluid img-thumbnail"/>
                        <p>¡Para celebrar la independencia del Perú tenemos muchas ofertas!</p>
                    </div>
                    <div clasName="text-center col-8 offset-2 col-md-6 offset-md-0">
                        <h3>Nuestros Clientes Satisfechos</h3>
                        <img src={Clientesatisfecho} clasName="img-fluid img-thumbnail"/>
                        <p>¡Llena de felicidad a tu niñ@ con un FunnyBox!</p>
                    </div>
                </div>
                
                
            </div>
        </div>

    </section>
  )
}

export default Inicio
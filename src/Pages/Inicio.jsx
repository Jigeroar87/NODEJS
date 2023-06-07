import React from 'react'
import Campanames from '../Assets/Campana_mes.JPG'
import Clientesatisfecho from '../Assets/Cliente_Satisfecho.JPG'

const Inicio = () => {
  return (
    <section class="pt-5 fondo__section min-vh-100 fondo__pagina" >
        
        <div class="container-fluid">
            <div class="container">
                <div class="row py-5">
                    <div class="col-md-12 text-center color_fondo">
                        <h1>FunnyBox regalo divertido para niños</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8 offset-2 col-md-6 offset-md-0">
                        <h3 class="text-center">Campaña del mes Patrio</h3>
                        <img src={Campanames} class="img-fluid img-thumbnail"/>
                        <p>¡Para celebrar la independencia del Perú tenemos muchas ofertas!</p>
                    </div>
                    <div class="text-center col-8 offset-2 col-md-6 offset-md-0">
                        <h3>Nuestros Clientes Satisfechos</h3>
                        <img src={Clientesatisfecho} class="img-fluid img-thumbnail"/>
                        <p>¡Llena de felicidad a tu niñ@ con un FunnyBox!</p>
                    </div>
                </div>
                
                
            </div>
        </div>

    </section>
  )
}

export default Inicio
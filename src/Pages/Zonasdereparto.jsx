import React from 'react'
import ImgZonasdereparto from '../Assets/Zonas_Reparto.JPG'

const Zonasdereparto = () => {
  return (
    <section clasName="pt-5 section__color min-vh-100 fondo__pagina">
            <div clasName="container-fluid">
                <div clasName="container">
                    <div clasName="row">
                        <div clasName="col-8 offset-2 col-md-12 offset-md-0 pt-5">
                            <h3 clasName="text-center">Zonas de Reparto</h3>
                            <img src={ImgZonasdereparto} clasName="img-fluid img-thumbnail rounded mx-auto d-block"/>
                            <p>Zonas disponibles de Lima</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>   


        </section>
  )
}

export default Zonasdereparto
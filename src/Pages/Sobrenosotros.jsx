import React from 'react'
import ImgSobrenosotros from '../Assets/SobreNosotros.JPG'

const Sobrenosotros = () => {
  return (
    <section class="pt-5 section__color min-vh-100 fondo__pagina">

        <div class="container-fluid">
            <div class="container">
 
                <div class="row">
                    <div class="col-8 offset-2 col-md-6 offset-md-0 pt-5">
                        <h3 class="text-center">Sobre FunnyBox</h3>
                        <img src={ImgSobrenosotros} class="img-fluid img-thumbnail"/>
                        <p>Somos una empresa enfocada en la diversión a tráves del arte en los niñ@s. Fundada en 2020 por Maricarmen Flores. 
                            Esperamos que disfrutes nuestros productos,  los realizamos con amor.</p>
                    </div>
                    <div class="text-center col-8 offset-2  col-md-6 offset-md-0 pt-5">
                        <h3>Entrevista en PYME TV</h3>
                        <iframe width="100%" height="50%" src="https://www.youtube.com/embed/kL2BEZ-BMwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Brindaron una entrevista a la fundadora en el canal de Facebook PYME TV</p>
                    </div>
                </div>
                
                
            </div>
        </div>

    </section>
  )
}

export default Sobrenosotros
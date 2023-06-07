import React from 'react'

const Contacto = () => {
  return (
    <section class="pt-5 section__color min-vh-100 fondo__pagina">
            <div class="row">
                <div class="container-fluid  pt-5">
                    <div class="col-8 offset-2 col-md-6 offset-md-3">
                            <form>
                                <h1>Contacta a Funny Box</h1>
                            
                                <div class="mb-3">
                                    <label for="fnombre" class="form-label">Nombre:</label>
                                    <input type="text" id="fnombre" class="form-control" required placeholder="Nombre"/>
                                </div>

                                <div class="mb-3">
                                    <label for="femail" class="form-label">Email:</label>
                                    <input type="email" id="femail" class="form-control" required placeholder="coderhouse@gmail.com"/>
                                </div>
                                    
                                <div class="mb-3">
                                    <label for="ftelefono" class="form-label">Teléfono:</label> 
                                    <input type="text" id="ftelefono" class="form-control" required placeholder="999999999"/>
                                </div>    
                                    
                                <div class="mb-3">
                                    <label for="fMensaje " class="form-label">Mensaje:</label>
                                    <textarea class="form-control" id="MensajeLargo"></textarea>
                                </div>

                                <div class="mb-3">
                                    <label for="fMensaje " class="form-label" id="msjRecomendation"></label>
                                </div>

                                <div><input type="submit" class="btn btn-primary"/></div>

                            </form>
                    </div>
                </div>    
            </div>
        </section>
  )
}

export default Contacto
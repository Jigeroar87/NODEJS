import React from 'react'

const Contacto = () => {
  return (
    <section clasName="pt-5 section__color min-vh-100 fondo__pagina">
            <div clasName="row">
                <div clasName="container-fluid  pt-5">
                    <div clasName="col-8 offset-2 col-md-6 offset-md-3">
                            <form>
                                <h1>Contacta a Funny Box</h1>
                            
                                <div clasName="mb-3">
                                    <label for="fnombre" clasName="form-label">Nombre:</label>
                                    <input type="text" id="fnombre" clasName="form-control" required placeholder="Nombre"/>
                                </div>

                                <div clasName="mb-3">
                                    <label for="femail" clasName="form-label">Email:</label>
                                    <input type="email" id="femail" clasName="form-control" required placeholder="coderhouse@gmail.com"/>
                                </div>
                                    
                                <div clasName="mb-3">
                                    <label for="ftelefono" clasName="form-label">Teléfono:</label> 
                                    <input type="text" id="ftelefono" clasName="form-control" required placeholder="999999999"/>
                                </div>    
                                    
                                <div clasName="mb-3">
                                    <label for="fMensaje " clasName="form-label">Mensaje:</label>
                                    <textarea clasName="form-control" id="MensajeLargo"></textarea>
                                </div>

                                <div clasName="mb-3">
                                    <label for="fMensaje " clasName="form-label" id="msjRecomendation"></label>
                                </div>

                                <div><input type="submit" clasName="btn btn-primary"/></div>

                            </form>
                    </div>
                </div>    
            </div>
        </section>
  )
}

export default Contacto
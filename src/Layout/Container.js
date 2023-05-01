import React, { Fragment } from 'react'
import Footer from '../Components/Footer/Footer'

const Container = (props) => {
    return (
        <Fragment>
            <Navbar items={['Inicio', 'Productos', 'Sobre Nosotros', 'Zonas de Reparto', 'Contáctanos']}
                    NavbarLogoCss={'white'} 
                    NavbarLogo={'Funnybox'} 
            />
            /*Acá va el contenido dinámico */
            {props.children}
            <Footer/>
        </Fragment>
    )
}

export default Container
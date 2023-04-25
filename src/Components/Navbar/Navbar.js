import React from 'react'
import NavbarItem from './NavbarItem'
import './Navbar.css'
import CartWidget from './CartWidget'

const Navbar = (props) => {
console.log("🚀 ~ file: Navbar.js:5 ~ Navbar ~ props:", props)
 //const NavbarLogo= "CODER HOUSE"
 
 return (
    <nav className= {
          props.className || "navbar navbar-expand-lg navbar-dark bg-primary"
          }  
    >
  <div className="container-fluid">
    <p className= { props.NavbarLogoCss || "navbar-brand"} >
      {props.NavbarLogo}
    </p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          {props.items?.map((texto,index)=> (
              <NavbarItem key={index} texto={texto}/>
          ))}

      </ul>
    </div>
    <CartWidget/>
  </div>
</nav>
  )
}

export default Navbar
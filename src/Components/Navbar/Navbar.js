import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = (props) => {
console.log("🚀 ~ file: Navbar.js:5 ~ Navbar ~ props:", props)

 //const NavbarLogo= "CODER HOUSE"

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <p className="navbar-brand" >
      {props.NavbarLogo}
    </p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavbarItem/>
        <NavbarItem/>
        <NavbarItem/>
        <NavbarItem/>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
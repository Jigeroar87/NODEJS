import React from 'react'
import './Navbar.css'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
  const {navbar_items,navbar_brand} = props
return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <p className="navbar-brand" href="#">
          {
              navbar_brand.map(({path,name},index) => (
                  <p key={index} className="navbar-brand">
                      <NavLink className={'nav-link'} to={path}>{name}</NavLink>
                  </p>
              ))
          }
      
    </p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          {
              navbar_items.map(({path,name},index) => (
                  <li key={index} className="nav-item">
                      <NavLink className={'nav-link'} to={path}>{name}</NavLink>
                  </li>
              ))
          }
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav>
)
}


export default Navbar
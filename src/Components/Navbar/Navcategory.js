import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

const Navcategory = (props) => {
  const {navcategory_items} = props
return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <p className="navbar-brand" href="#">Categorias</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          {
              navcategory_items.map(({path,name},index) => (
                  <li key={index} className="nav-item">
                      <NavLink className={'nav-link'} to={path}>{name}</NavLink>
                  </li>
              ))
          }
      </ul>
    </div>

  </div>
</nav>
)
}


export default Navcategory
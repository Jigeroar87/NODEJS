import React from 'react'
import {NavLink} from 'react-router-dom'

const NavbarItem = (props) => {

  const {navbar_items} = props

  return (
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
  )
}

export default NavbarItem
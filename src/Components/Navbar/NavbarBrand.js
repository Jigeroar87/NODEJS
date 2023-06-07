import React from 'react'
import {NavLink} from 'react-router-dom'

const NavbarBrand = (props) => {
    const {navbar_brand} = props
  return (
    <p className="navbar-brand" href="#">
                  {
                      navbar_brand.map(({path,name},index) => (
                          <p key={index} className="navbar-brand">
                              <NavLink className={'nav-link'} to={path}>{name}</NavLink>
                          </p>
                      ))
                  }
              
    </p>
  )
}

export default NavbarBrand
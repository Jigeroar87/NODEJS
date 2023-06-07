import React from 'react'

const NavbarDropdown = () => {
  return (
    <li key={index} className="nav-item dropdown">
                              <NavLink className={'nav-link dropdown-toggle'} to={path} role={'button'} data-bs-toggle={'dropdown'}>{name}</NavLink>
                              <ul className='dropdown-menu'>
                                  <li><a className='dropdown-item'></a></li>
                                  <li><a className='dropdown-item'></a></li>
                              </ul>
    </li>
  )
}

export default NavbarDropdown

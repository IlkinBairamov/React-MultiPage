import React from 'react'
import {Navbar,NavbarToggler,Collapse,Nav,NavItem} from 'reactstrap'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
    <Navbar
      color="light"
      expand="md"
      light
    >
      <NavbarToggler />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink style={{textDecoration: 'none',marginRight:'10px'}} to={"/"}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{textDecoration: 'none'}}  to={"/users"} >
              User
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  )
}
export default Header



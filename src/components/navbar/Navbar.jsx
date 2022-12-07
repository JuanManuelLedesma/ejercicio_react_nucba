import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LinkContainerStyled, LogoStyled, NavbarContainerStyled, TitleStyled } from './NavbarStyles'

const Navbar = () => {
    const navigate = useNavigate('/')

  return (
    <>
        <NavbarContainerStyled>
            <LogoStyled onClick={() => navigate('/')}>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
                alt="logo"
                />
                <TitleStyled>Entrega 2</TitleStyled>
            </LogoStyled>
            <LinkContainerStyled>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/toDoList'>ToDoList</NavLink>
              <NavLink to='/pokeApi'>PokeApi</NavLink>
            </LinkContainerStyled>
        </NavbarContainerStyled>
    </>
  )
}

export default Navbar
import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { dbStore } from '../firebase/appConfig'
import Sidebar from './Sidebar'
import FormLogin from './FormLogin'
import FormRegister from './FormRegister'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchBar = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #121212;
  color: white;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
`;

const NavItem = styled.li`
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonLogin = styled.button`
  padding: 0.5rem 1.2rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;



export default function Menu() { 
  return (
    <BrowserRouter>
    <Header>
      <LeftSection>
        <Link to="/"><FaSpotify style={{fontSize: "32px"}} alt="Logo" /></Link>
        <SearchBar placeholder="¿Qué quieres reproducir?" />
      </LeftSection>

      <NavLinks>
        <NavItem>Premium</NavItem>
        <NavItem>Ayuda</NavItem>
        <NavItem>Descargar</NavItem>
        <NavItem>Instalar aplicación</NavItem>
        <NavItem><Link to="/Register">Regístrate</Link></NavItem>
        <ButtonLogin><Link to="/Login" style={{textDecoration:"none", color:"black"}}>Iniciar sesión</Link></ButtonLogin>
      </NavLinks>
    </Header>

    <Routes>
        <Route path='/' element={<Sidebar/>} />
        <Route path='/Login' element={<FormLogin/>} />
        <Route path='/Register' element={<FormRegister/>}/>
    </Routes>
  </BrowserRouter>

  );
};

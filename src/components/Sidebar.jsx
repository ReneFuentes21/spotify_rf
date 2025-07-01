import React from 'react'
import styled from 'styled-components';
import { FaHome, FaSearch, FaBook, FaPlusSquare } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 240px;
  height: 100vh;
  background-color: #000;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
`;

const Logo = styled.img`
  width: 131px;
  margin-bottom: 2rem;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  color: #b3b3b3;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

const Divider = styled.hr`
  margin: 1.5rem 0;
  border: none;
  border-top: 1px solid #282828;
`;

const PlaylistSection = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const PlaylistItem = styled.p`
  margin: 0.3rem 0;
  font-size: 16px;
  cursor: pointer;
  color: #b3b3b3;

  &:hover {
    color: #fff;
  }
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <NavSection>
        <NavItem><FaHome /> Inicio</NavItem>
        <NavItem><FaSearch /> Buscar</NavItem>
        <NavItem><FaBook /> Tu biblioteca</NavItem>
      </NavSection>

      <Divider />

      <NavSection>
        <NavItem><FaPlusSquare /> Crear playlist</NavItem>
      </NavSection>

      <Divider />

      <PlaylistSection>
        <PlaylistItem>Reggaetón 2024</PlaylistItem>
        <PlaylistItem>Lo-fi para estudiar</PlaylistItem>
        <PlaylistItem>Favoritas</PlaylistItem>
        <PlaylistItem>Workout</PlaylistItem>
      </PlaylistSection>
    </SidebarContainer>
  );
};


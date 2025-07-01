import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterBox = styled.div`
  background-color: #000;
  padding: 3rem 4rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #242424;
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #1db954;
  border: none;
  border-radius: 25px;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #1ed760;
  }
`;

export const ErrorText = styled.p`
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: left;
`;


export default function FormRegister() {

  
  return (
    <RegisterWrapper>
      <RegisterBox>
        <Title>Regístrate en Spotify</Title>
        <form>
          <Input type="text" placeholder="Nombre de usuario"/>
          <Input type="email" placeholder="Correo electrónico"/>
          <Input type="password" placeholder="Contraseña"/>
          <Button type="submit">Registrarse</Button>
        </form>
      </RegisterBox>
    </RegisterWrapper>
  );
};

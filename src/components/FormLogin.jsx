import React from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../firebase/appConfig'; // 👈 tu ruta real
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const LoginWrapper = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
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

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #242424;
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #1db954;
  border: none;
  border-radius: 25px;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #1ed760;
  }
`;

const ForgotPassword = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
  color: #b3b3b3;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: white;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export default function FormLogin() {
  const navigate = useNavigate();
  
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log('Usuario:', user);
      navigate("/")
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error('Error:', errorCode, errorMessage);
      alert('Error al iniciar sesión con Google');
    }
  };

  return (
    <LoginWrapper>
      <LoginBox>
        <Title>Iniciar sesión en Spotify</Title>
        <GoogleButton onClick={handleGoogleLogin} >
        <FcGoogle size={20} />
        Iniciar sesión con Google
        </GoogleButton>

        <form>
          <Input type="email" placeholder="Correo electrónico o nombre de usuario" />
          <Input type="password" placeholder="Contraseña" />
          <Button type="submit">Iniciar sesión</Button>
        </form>
        <ForgotPassword>¿Olvidaste tu contraseña?</ForgotPassword>
      </LoginBox>
    </LoginWrapper>
  )

};

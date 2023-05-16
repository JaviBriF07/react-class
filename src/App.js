import React, { useContext } from 'react';
import './style.css';

import { AuthContext, AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  //const { isAuth } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

//Paginas
const LandingPage = () => {
  return <h1>Hola </h1>;
};

//Paginas
const Home = () => {
  return <h1>Home </h1>;
};

//Paginas
const Login = () => {
  const { signIn } = useContext(AuthContext);
  return <button onClick={signIn}>Iniciar sesion</button>;
};

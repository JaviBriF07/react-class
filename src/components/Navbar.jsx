import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <nav></nav>
      <Link to={isAuth ? '/' : '/login'}>
        {isAuth ? 'cerrar sesion' : 'Inicar sesion'}
      </Link>
    </header>
  );
};

export default Navbar;

import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//creamos un context ->> un useStateGrandote o global

// tiene 2 partes un provider y un consumer
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const signIn = () => {
    //podriamos recibir credenciales y hacer una petion post
    // nos puede mandar a otra pagina
    setIsAuth(true);
    navigate('/home');
  };

  const signOut = () => {
    // podemos settear en falso o limpiar
    setIsAuth(false);
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

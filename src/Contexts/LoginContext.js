import React, { useContext, useState } from 'react';

export const LoginContext = React.createContext({ login: undefined, setLogin: () => undefined });

export const LoginContextProvider = ({ children }) => {
    const [login, setLogin] = useState();
    return <LoginContext.Provider value={{ login, setLogin }}>{children}</LoginContext.Provider>;
};

export const useLoginContext = () => useContext(LoginContext);

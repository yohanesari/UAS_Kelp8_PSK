import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const LoginContext = createContext();

export const useAuth = () => {
    return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const adminUser = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return adminUser;
    }, [auth]);

    return (
        <LoginContext.Provider value={{ user }}>
            {children}
        </LoginContext.Provider>
    );
};

import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const UserContext = React.createContext({
    userDetails: null,
});

const AuthProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState();


    useEffect(() => {

        const data = localStorage.getItem("userDetails");

        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                user: parseData.user,
                token: parseData.token,
            });
        }
    }, []);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
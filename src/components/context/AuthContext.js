import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import styled from "styled-components";
export const AuthContext = createContext();

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Loader>Loading..</Loader>;
    }

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};
const Loader = styled.div`
    color: red;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    height: 100vh;
`;
export default Authprovider;

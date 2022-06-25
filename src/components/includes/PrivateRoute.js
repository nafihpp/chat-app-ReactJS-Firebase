import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Home from "../screens/Home";

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return user ? <Home /> : <Navigate to="/" />;
};

export default PrivateRoute;

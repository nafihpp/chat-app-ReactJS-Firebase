import { React, useContext, useEffect } from "react";
import Navbar from "../includes/Navbar";
import Chatting from "../includes/Chatting";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar />
            <Chatting />
        </>
    );
}

export default Home;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
    RiHomeSmile2Line,
    RiHomeSmile2Fill,
    RiUser5Fill,
    RiSearchEyeFill,
} from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiUser5Line } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { BsChatRightDotsFill } from "react-icons/bs";
import { FaRegGrinStars } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import Login from "../screens/Login";

const BottomNavBar = () => {
    const navigate = useNavigate();
    const [isModal, setModal] = useState(false);
    const [activeTabs, setActiveTabs] = useState("account");
    useEffect(() => {
        switch (activeTabs) {
            case "home":
                navigate("/");
                break;
            case "search":
                navigate("/home");
                break;
            case "favourites":
                setModal(true);
                break;
            case "account":
                navigate("/");
                break;
            default:
                navigate("/");
                break;
        }
    }, [activeTabs, navigate]);

    return (
        <Main className="bottom-nav">
            <Botton className="bn-tab">
                {activeTabs === "home" ? (
                    <FaGrinStars
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("home")}
                    />
                ) : (
                    <FaRegGrinStars
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("home")}
                    />
                )}
            </Botton>
            <Botton className="bn-tab">
                {activeTabs === "home" ? (
                    <RiHomeSmile2Fill
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("home")}
                    />
                ) : (
                    <RiHomeSmile2Line
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("home")}
                    />
                )}
            </Botton>
            <Botton className="bn-tab">
                {activeTabs === "search" ? (
                    <BsChatRightDotsFill
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("search")}
                    />
                ) : (
                    <BiMessageRounded
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("search")}
                    />
                )}
            </Botton>

            <Botton className="bn-tab">
                {activeTabs === "account" ? (
                    <CgProfile
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("account")}
                    />
                ) : (
                    <CgProfile
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("account")}
                    />
                )}
            </Botton>
        </Main>
    );
};
const Main = styled.div`
    &.bottom-nav {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        border-top: 1px solid rgb(230, 230, 230);
        background-color: white;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
`;
const Botton = styled.a`
    &.bn-tab {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;
export default BottomNavBar;

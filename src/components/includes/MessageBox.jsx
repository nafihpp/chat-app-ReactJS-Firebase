import React from "react";
import styled from "styled-components";
import Dummy from "../../assets/dummy.jpg";

function MessageBox({ chat, setChat }) {
    return chat.name ? (
        <MainDiv>
            <Wrapper>
                <Headline>
                    You're now Chatting with {chat.name}
                    {chat.isOnline ? <p>(Online)</p> : <p>(Offline)</p>}
                    <ProfileContainer>
                        <Profileimg src={Dummy} alt="" />
                    </ProfileContainer>
                </Headline>
            </Wrapper>
        </MainDiv>
    ) : (
        <MainDiv>
            <WrapperFinal>
                <Headline>Select a User to start Chatting</Headline>
            </WrapperFinal>
        </MainDiv>
    );
}
const OfflineBar = styled.div`
    width: 4%;
    height: 10px;
    background: red;
    display: inline-block;
    border-radius: 6px;
`;
const OnlineBar = styled.div`
    width: 4%;
    height: 10px;
    background: green;
    display: inline-block;
    border-radius: 6px;
`;
const Profileimg = styled.img`
    display: block;
    width: 100%;
`;
const ProfileContainer = styled.div`
    width: 5%;
    height: 43px;
    margin-right: 25px;
    border-radius: 50%;
    overflow: hidden;
`;
const WrapperFinal = styled.div`
    width: 95%;
    margin: 0 auto;
    background-color: red;
    color: white;
    padding: 10px;
`;
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    background-color: green;
    color: white;
    padding: 5px;
`;
const Headline = styled.div`
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const MainDiv = styled.div`
    margin-top: 6px;
`;
export default MessageBox;

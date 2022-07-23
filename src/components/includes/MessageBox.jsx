import React from "react";
import styled from "styled-components";
import Dummy from "../../assets/dummy.jpg";
function MessageBox({ chat, setChat }) {
    return chat.name ? (
        <MainDiv>
            <Wrapper>
                <Headline>
                    You're now Chatting with {chat.name}{" "}
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
const Profileimg = styled.img`
    display: block;
    width: 100%;
`;
const ProfileContainer = styled.div`
    width: 30%;
    margin-right: 25px;
    border-radius: 5%;
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
const Headline = styled.p`
    font-weight: 600;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
`;
const MainDiv = styled.div`
    margin-top: 6px;
`;
export default MessageBox;

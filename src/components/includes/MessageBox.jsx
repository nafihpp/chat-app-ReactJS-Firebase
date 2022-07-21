import React from "react";
import styled from "styled-components";
function MessageBox({ chat, setChat }) {
    return chat.name ? (
        <MainDiv>
            <Headline>You're Chatting with {chat.name}</Headline>
        </MainDiv>
    ) : (
        <MainDiv>
            <Headline>Select a User to start Chatting</Headline>
        </MainDiv>
    );
}
const Headline = styled.p``;
const MainDiv = styled.div``;
export default MessageBox;

import React from "react";
import styled from "styled-components";
function MessageBox({ chat, setChat }) {
    return chat.name ? (
        <MainDiv>
            <Headline>You're Chatting with {chat.name}</Headline>
        </MainDiv>
    ) : (
        <h1>Select a user to Start Chatting</h1>
    );
}
const Headline = styled.div``;
const MainDiv = styled.div``;
export default MessageBox;

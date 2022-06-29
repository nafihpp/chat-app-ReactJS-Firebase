import { React, useState } from "react";
import styled from "styled-components";
import MessageBox from "./MessageBox";
function MessageForm({ chat, setChat }) {
    const [message, setMessage] = useState([]);
    return (
        <>
            <MessageBox chat={chat} setChat={setChat} />
            {chat.name ? (
                <Foot>
                    <WrapperBottom>
                        <DivRight>
                            <ChatType
                                type="text"
                                placeholder="start chatting now"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <ButtonSend>Send</ButtonSend>
                        </DivRight>
                    </WrapperBottom>
                </Foot>
            ) : null}
        </>
    );
}

const WrapperBottom = styled.div``;
const DivRight = styled.div`
    display: flex;
`;
const ChatType = styled.input`
    border-radius: 4px;
    padding: 5px;
    height: 42px;
    width: 70%;
`;
const ButtonSend = styled.a`
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4285f4;
`;

const Foot = styled.section`
    position: absolute;
    bottom: 0;
`;

export default MessageForm;

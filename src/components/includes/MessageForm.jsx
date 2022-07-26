import { doc, getDoc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { React, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase";
import MessageBox from "./MessageBox";

function MessageForm({ chat, setChat }) {
    const [message, setMessage] = useState([]);
    const Sending = async (e) => {
        console.log(message);
        e.preventDefault();
        const user1 = auth.currentUser.uid;
        const user2 = chat.uid;
        const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
        const createdAt = Timestamp.fromDate(new Date());
        const id2 = user1 + createdAt;
        if (message) {
            await setDoc(doc(db, `messages/${id}`, "chat", id2), {
                message,
                from: user1,
                to: user2,
                createdAt,
                loading: true,
            });
            setMessage("");
            const snapDoc = await getDoc(
                doc(db, `messages/${id}`, "chat", id2)
            );
            if (snapDoc) {
                await updateDoc(doc(db, `messages/${id}`, "chat", id2), {
                    loading: false,
                });
            }
            await setDoc(doc(db, "lastMsg", id), {
                message,
                from: user1,
                to: user2,
                createdAt,
            });
        }
    };
    return (
        <>
            <MessageBox chat={chat} setChat={setChat} />
            {chat.name ? (
                <Foot>
                    <WrapperBottom>
                        <DivRight>
                            <ChatType
                                type="text"
                                placeholder="Start Typing now"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <ButtonSend onClick={Sending}>Send</ButtonSend>
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
    width: 179px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4285f4;
`;

const Foot = styled.section`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

export default MessageForm;

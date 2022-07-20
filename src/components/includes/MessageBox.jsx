import React from "react";

function MessageBox({ chat, setChat }) {
    return chat.name ? (
        <h1>You're Chatting with {chat.name}</h1>
    ) : (
        <h1>Select a user to Start Chatting</h1>
    );
}
export default MessageBox;

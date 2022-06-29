import React from "react";

function MessageBox({ chat, setChat }) {
    return chat.name ? null : <h1>Select user to Start Chatting</h1>;
}
export default MessageBox;

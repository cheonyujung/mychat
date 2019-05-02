import React from 'react';
import JoinChatContainer from "../containers/JoinChatContainer";
import ChatContainer from "../containers/ChatContainer";
import NavbarContainer from "../containers/NavbarContainer";

export default ({isDrawerOpened}) => (
    <div style={{marginLeft: isDrawerOpened? '20%' : '0%'}}>
        <NavbarContainer/>
        <JoinChatContainer/>
        <ChatContainer/>
    </div>
);
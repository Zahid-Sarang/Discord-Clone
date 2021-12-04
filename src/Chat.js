import { AddCircle, CardGiftcard, EmojiEmotions,Gif } from '@material-ui/icons';
import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message'

const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">
                    <Message />
            </div>
            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form>
                    <input placeholder={`Message #TESTCHANNEL`} />
                    <button type="submit" className="chat__inputButton">Send Message</button>
                </form>
                <div className="chat__inputIcons">
                <CardGiftcard fontSize="large" />
                <Gif fontSize="large"/>
                <EmojiEmotions fontSize="large"/>

                </div>
            </div>
        </div>
    )
}

export default Chat

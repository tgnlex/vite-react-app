import {useState} from 'react';
import Message from './message'
import style from "~/chat.module.css";

function ChatWindow(props: {
  messages: any[]
}) {

  return (
    <div id="chat-window" className={style.window}>
      <ul id="chat-messages" className={style.messages}>
        {props.messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </ul>
    </div> 
  )
}
export default ChatWindow;

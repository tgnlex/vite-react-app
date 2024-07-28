import {useRef, useEffect, useState} from 'react';
import {useSocketIO, ReadyState} from 'react-use-websocket'
import Layout from '../layout.tsx';
import MessageForm from './form.tsx';
import ChatWindow from './window.tsx';
import style from '~/chat.module.css';

export const socketUrl = `ws://localhost:4000`

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState("");
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4000');
    socket.onopen = () => {
      console.log('Websocket connection established')
    }
    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages([...messages, receivedMessage]);
    };
    return () => { socket.close(); }
  }, [messages])


  const sendMessage = () => {
    if (messageInput.trim() == '') {
      text: messageInput;
      timestamp: new Date().toISOString();
    };
    socket.send(JSON.stringify(message));
    setMessageInput('')
  }
  return (
    <Layout title={"chat"}>
      <main id="chat" className={style.main}>
        <h1 id="chat-heading" className={style.heading}>Chatroom</h1>
        <div id="chatroom" className={style.chatroom}>    
          <ChatWindow messages={messages}/>
          <MessageForm handle={sendMessage} />
        </div>
      </main>
    </Layout>
  )
}
export default Chat;

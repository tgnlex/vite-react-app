import {useRef, useEffect, useState} from 'react';
import Layout from '../layout.tsx';
import MessageForm from './components/form.tsx';
import ChatWindow from './components/window.tsx';
import {connect, close, handleMessage} from './sockets.ts';
export const messages = [];
export const scroll = useRef();
const Chat = (): React.FC => {
  const [isConnected, setIsConnected] = useState(socket.connect)
  useEffect(() => {
    socket.on('connect', connect);
    socket.on('disconnect', close);
    socket.on('new_message', handleMessage);
    return () => {
        socket.off('connect', connect);
        socket.off('disconnect', close);
        socket.off('new_message', handleMessage)
    }
  })
  return (
    <Layout title={"chat"}>
      <main id="chat" className="chat">
        <h1 class="chat-heading">Chatroom</h1>
        <div id="chatroom">
          <ChatWindow />       
          <MessageForm />
        </div>
      </main>
    </Layout>
  )
}
export default Chat;

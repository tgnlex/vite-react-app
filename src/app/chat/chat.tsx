import {useRef, useEffect, useState} from 'react';
import useWebSocket, {ReadyState} from 'react-use-websocket'
import Layout from '../layout.tsx';
import MessageForm from './components/form.tsx';
import ChatWindow from './components/window.tsx';
export const messages = [];
export const scroll = useRef();
const Chat = (): React.FC => {
  const [socketUrl, setSocketUrl] = useState()
  const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>()
  const { sendMEssage, lastMessage, readyState} = useWebSocket(socketUrl)
useEffect(() => {
  if (lastMessage !== null) {
    setMessageHistory((prev) => prev.concat(lastMessage))
  }
}, [lastMessage])
const handleClickChangeSocketUrl = useCallbacl(
  () => setSocketUrl('ws://localhost:4000'),
  []
)
  return (
    <Layout title={"chat"}>
      <main id="chat" className="chat">
        <h1 class="chat-heading">Chatroom</h1>
        <div id="chatroom">
        </div>
      </main>
    </Layout>
  )
}
export default Chat;

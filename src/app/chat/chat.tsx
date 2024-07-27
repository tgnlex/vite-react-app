import Layout from '../layout.tsx';
import MessageForm from './components/form.tsx';

export const messages = [];

const Chat = () => {
  const [isConnected, setIsConnected] = useState(socket.connect)
  useEffect(() => {
    socket.on('connect', connect);
    socket.on('disconnect', cleanup);
    socket.on('new_message', handleMessage);
    return () => {
        socket.off('connect', connect);
        socket.off('disconnect', cleanup)
        socket.off('new_message', handleMessage)
    }
  })
  return (
    <Layout title={"chat"}>
      <main id="chat" className="chat">
        <h1 class="chat-heading">Chatroom</h1>
        <div id="chatroom">
       
          <MessageForm>
        </div>
      </main>
    </Layout>
  )
}
export default Chat;

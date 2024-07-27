import {messages} from '../chat.tsx';

const SOCKET_TIMEOUT = 5000;  
function MessageForm() {
  const [value, setValue] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);

  function sendMessage(event) {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message")
      return;
    }
    setIsLoading(true);

    socket.timeout(SOCKET_TIMEOUT)
      .emit('chat_message', message, () => {
        setIsLoading(false);
        console.info('Message sent!')
    })
  }
  return (
    <form onSubmit={sendMessage} id="message-form">
       <input 
         id="chat_message" 
         name="chat_message" 
         className="form-control" 
         type="text"
         onChange={ e => setMessage(e.target.value)}
       />  
       <button 
         id="message-btn" 
         className="submit-btn"
         type="submit">
         Send</button>
    </form>
  )
}


export default MessageForm;

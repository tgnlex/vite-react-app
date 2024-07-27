

function ChatWindow() {
  return (
    <div className="chat-window">
      <ul className="chat-messages">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </ul>
    </div> 
  )
}
export default ChatWindow;

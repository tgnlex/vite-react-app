
interface MessageModel {
  id: number,
  content: string
}

function Message(message: MessageModel) {
  return (
    <li key={message.id} className={`chat-bubble`}>
      <p className="message-text">
        {message.text}>
      </p>
    </li>
  )
}

export default Message;

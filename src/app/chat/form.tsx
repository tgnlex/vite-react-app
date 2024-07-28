import {useState, useCallback} from 'react';
import {sendMessage} from '../socket.tsx';
import {connectionStatus} from '../status.ts';
interface Props {
  handle: () => void;
}

function MessageForm(props: Props) {

  return (
    <form id="message-form">
       <input 
         id="chat_message" 
         name="chat_message" 
         className="form-control" 
         type="text"
       />  
       <button 
         id="message-btn" 
         className="submit-btn"
         type="submit"
         onClick={props.handler}
        >
          Send
        </button>
    </form>
  )
}


export default MessageForm;

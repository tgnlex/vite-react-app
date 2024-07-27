import {messages} from './chat.tsx';

function connect() {
  console.info('User connected')
}
function handleMessage(data) {
  console.log(data);
  messages.push(data);
}

function close() {
  console.info('closed connnection')
}

export {connect, close, handleMessage};

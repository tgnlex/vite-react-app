import {Server} from 'socket.io';

const io = new Server();
const hits = 0
io.on("connection", (socket) => {
  hits = hits + 1;
  console.info(`${hits} clients connected!`);
  socket.on('chat message', message())
  socket.on('disconnect', close());
  
});

export {io};

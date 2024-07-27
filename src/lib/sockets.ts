

function connect(setIsConnected = setIsConnected) {
  setIsConnected(true);
  console.info('[CLIENT]: connected to chat server')
}

function disconnect(setIsConnected = setIsConnected) {
  setIsConnected(false);
  console.info(`[CLIENT]: disconnected from chat`)
}

function handleMessage(value) {
        
}

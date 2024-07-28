interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: buffer) => void;
  withAck: (d: string, callback: (e: number) => void ) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}
interface InterServerEvents {
  ping: () => void;
}
interface SocketData {
  message: string
}

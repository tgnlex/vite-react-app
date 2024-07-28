import {server} from './app/api.js';
import io from './app/ws.js';


io.attach(server);

function main() {
  server.listen(PORT)
  console.info(`[MAIN]: Server running on ${HOST}:${PORT}`)
}
main();

// Communication through channels
import { server } from "yare-module-lib";
server.channels.send("Example module", "Hello from the server!");
console.log(server.channels.read("Example module"));

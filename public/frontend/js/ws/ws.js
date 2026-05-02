import eventHandler from "../eventHandler/eventHandler.js";
const ws = new WebSocket("ws://127.0.0.1:7000");

ws.addEventListener("error", e => alert("something wrong!"));


ws.addEventListener("close", e => {

    alert("Connection closed!");

});

ws.addEventListener("message", e => {

    eventHandler(JSON.parse(e.data));

});

export default ws;

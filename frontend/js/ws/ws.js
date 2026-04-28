const ws = new WebSocket("ws://127.0.0.1:7000");

ws.addEventListener("error", e => alert("something wrong!"));

ws.addEventListener("open", e => alert("connected!"));

ws.addEventListener("message", e => {

    alert("server says: ", e.data);

});

export default ws;

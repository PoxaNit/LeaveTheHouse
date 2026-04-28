const ws = require("ws");

const wsc = new ws.WebSocket("ws://127.0.0.1:7000");

wsc.on("error", console.error);

wsc.on("open", () => {

    console.log("opened connection");

    wsc.send(JSON.stringify({
      event: "test",
      payload: {test: 124}
    }));

});

wsc.on("message", data => {

    console.log(`message: ${data}`);

});



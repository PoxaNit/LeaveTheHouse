const ws = require("ws");

const wsc = new ws.WebSocket("ws://127.0.0.1:7000");

wsc.on("error", console.error);

wsc.on("open", () => {

    console.log("opened connection 2");

    wsc.send(JSON.stringify({
      event: "spawnEntity",
      payload: {entity_id: 15, x: 8, y: 40}
    }));

/*
    wsc.send(JSON.stringify({
      event: "moveEntity",
      payload: {entity_id: 12, x: 20, y: 50}
    }));
*/
});

wsc.on("message", data => {

    console.log(`message: ${data}`);

});

wsc.on("close", () => {

    wsc.send({
      event: "despawnEntity",
      payload: {
	entity_id: 15
      }
    });

});

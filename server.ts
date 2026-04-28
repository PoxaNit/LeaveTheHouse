require("dotenv").config();
const express = require("express");
const app = express();
const ws = require("ws");
const fs = require("fs");
const eventHandler = require("./eventHandler.ts").default;

app.get("/", (req, res) => {

    fs.readFile("public/index.html", "utf8", (error, data) => {

        if (error) throw error;

        res.send(data);

    });

});

const wss = new ws.WebSocketServer({
  port: process.env.ws_port,
  concurrencyLimit: process.env.ws_concurrency_limit
});

wss.on("connection", ws => {

    ws.on("error", console.error);

    ws.on("message", data => {

        console.log('message: ', "" + data);

	const response = eventHandler(JSON.parse(data));
console.log("response to client: ", response)
	wss.clients.forEach(client => {

	    client.send(JSON.stringify(response));

        });

    });

});

app.listen(process.env.http_port, () => console.log(`Server running on port ${process.env.http_port}`));

export {wss};

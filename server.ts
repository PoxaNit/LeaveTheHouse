require("dotenv").config();
const express = require("express");
const app = express();
const ws = require("ws");
const fs = require("fs");
const eventHandler = require("./eventHandler.ts").default;

app.use(express.static("./public"));


/*
app.get("/", (req, res) => {

    fs.readFile("public/static/index.html", "utf8", (error, data) => {

        if (error) throw error;

        res.send(data);

    });

});
app.get("/index.js", (req, res) => {

    fs.readFile("public/index.js", "utf8", (error, data) => {

        if (error) throw error;

        res.send(data);

    });

});

app.get("/index.css", (req, res) => {

    fs.readFile("public/index.css", "utf8", (error, data) => {

        if (error) throw error;

        res.send(data);

    });

});
*/

const wss = new ws.WebSocketServer({
  port: process.env.ws_port,
  concurrencyLimit: process.env.ws_concurrency_limit
});

wss.on("connection", ws => {

    ws.on("error", console.error);

    ws.on("message", data => {

        console.log("message: " + data);

	const messages = eventHandler(JSON.parse(data));

	for (const message of messages) {

	    if (message.scope === "private") {

	        ws.send(JSON.stringify(message.data));

	    }

	     if (message.scope === "public") {
console.log("public message: ", JSON.stringify(message.data))
	         wss.clients.forEach(client => {

	            client.send(JSON.stringify(message.data));

                 });
	    }

	}

    });

});

app.listen(process.env.http_port, () => console.log(`Server running on port ${process.env.http_port}`));

export {wss};

import ws from "../frontend/js/ws/ws.js";

const gameArea = {
  canvas: document.createElement("canvas"),
  start: async function () {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
};

async function startGameArea () {
    await gameArea.start();

    const ctx = gameArea.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(25, 25, 20, 20);

}

startGameArea();


let event = "spawnEntity"
alert(event)
ws.send(JSON.stringify({
  event: event,
  payload: {
    entity_id: 12,
    x: 10,
    y: 50
  }
}));

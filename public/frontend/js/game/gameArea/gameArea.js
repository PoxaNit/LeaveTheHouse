
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

    gameArea.canvas.style.backgroundColor = "blue";

}

export {gameArea, startGameArea}

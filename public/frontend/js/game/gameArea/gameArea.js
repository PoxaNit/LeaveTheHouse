import gameState from "../state/gameState/gameState.js";

const gameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 500/*(gameState?.mapData?.width * gameState?.mapData?.tileSize) ?? 0;*/;
    this.canvas.height = 500/*(gameState?.mapData?.height * gameState?.mapData?.tileSize) ?? 0;*/;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
};

async function startGameArea () {

    gameArea.start();

    gameArea.canvas.style.backgroundColor = "blue";

}

export {gameArea, startGameArea};

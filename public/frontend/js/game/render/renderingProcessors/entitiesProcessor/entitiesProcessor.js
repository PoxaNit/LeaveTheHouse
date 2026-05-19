import gameState from "../../../state/gameState/gameState.js";
import {gameArea} from "../../../gameArea/gameArea.js";

function entitiesProcessor() {

    const ctx = gameArea.context;

const canvas = gameArea.canvas;
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
console.log("imageData.data: ", imageData.data)
    for (const id in gameState.entities) {

	const entity = gameState.entities[id];

	ctx.fillStyle = "green";

	ctx.fillRect(entity.x, entity.y, 70, 50);

    }

}

export default entitiesProcessor;

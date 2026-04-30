import gameState from "../../../state/gameState/gameState.js";
import gameArea from "../../../gameArea/gameArea.js";

function entitiesProcessor() {

    for (const entity in gameState.entities) {

	const ctx = gameArea.canvas.context;

	ctx.fillRect(entity.x, entity.y, 40, 20);

	ctx.fillStyle = "red";

    }

}

export default entitiesProcessor;

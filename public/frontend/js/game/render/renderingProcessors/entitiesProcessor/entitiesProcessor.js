import gameState from "../../../state/gameState/gameState.js";
import {gameArea} from "../../../gameArea/gameArea.js";

function entitiesProcessor() {

    const ctx = gameArea.context;

    for (const id in gameState.entities) {

	const entity = gameState.entities[id];

	ctx.fillStyle = "red";

	ctx.fillRect(entity.x, entity.y, 70, 50);

    }

}

export default entitiesProcessor;

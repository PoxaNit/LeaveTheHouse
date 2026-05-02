import gameState from "../../../state/gameState/gameState.js";
import {gameArea} from "../../../gameArea/gameArea.js";

function entitiesProcessor() {

    const ctx = gameArea.context;
alert("executing entitiesProcessor... gameState.entities: " + JSON.stringify(gameState.entities))
    for (const id in gameState.entities) {
alert("entitiesProcessor, inside loop... id: " + id)

	const entity = gameState.entities[id];
alert(`entity[${id}] x y: ${entity.x} ${entity.y}`)

	ctx.fillStyle = "red";

	ctx.fillRect(entity.x, entity.y, 70, 50);

    }
alert("entitiesProcessor: end")
}

export default entitiesProcessor;

const {CollisionSystem} = require("../systems/collisionSystem/collisionSystem.ts");
const gameState = require("../state/gameState/gameState.ts").default;

interface MoveEntity {
    entity_id: number;
    direction: string;
}

function moveEntity (payload: MoveEntity) {

    let nextX, nextY;

    switch (payload.direction) {

	case "up":

	    nextY = gameState.entities[payload.entity_id].y - gameState.entities[payload.entity_id].speed;
	    break;

	case "right":
	    nextX = gameState.entities[payload.entity_id].x + gameState.entities[payload.entity_id].speed;
	    break;

	case "down":
	    nextY = gameState.entities[payload.entity_id].y + gameState.entities[payload.entity_id].speed;
	    break;

	case "left":
	    nextX = gameState.entities[payload.entity_id].x - gameState.entities[payload.entity_id].speed;
	    break;

	default:
	    return [{scope: "private", data: {event: "event_error", payload: null}}];

    }


    CollisionSystem.update(payload.entity_id, nextX, nextY);

    return [
      {
	scope: "public",
	data: {
	  event: "updatedGameState",
	  payload: gameState
	}
      }
    ];

}

export default moveEntity;

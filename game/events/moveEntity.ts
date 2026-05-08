const {CollisionSystem} = require("../systems/collisionSystem/collisionSystem.ts");
const {gameState} = require("../state/gameState/gameState.ts");

interface MoveEntity {
    entity_id: number;
    direction: string;
}

function update (entity_id: number, x: number, y: number) {


}

function moveEntity (payload: MoveEntity) {

    const nextX = gameState.entities[entity_id].x + gameState.entities[entity_id].speed;

    const nextY = gameState.entities[entity_id].y + gameState.entities[entity_id].speed;

    CollisionSystem.update(entity_id, nextX, nextY);

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

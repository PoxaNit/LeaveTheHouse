const gameState = require("../state/gameState/gameState.ts").default;

interface SpawnEntity {
  x: number;
  y: number;
}

function spawnEntity (payload: SpawnEntity) {

    const entity_id = Math.floor(Math.random() * (55000 - 1 + 1)) + 1;

    gameState.entities["" + payload.entity_id] = {
      entity_id: entity_id,
      x: payload.x,
      y: payload.y
    };

    return [
      {
	scope: "private",
	data: {
	  event: "entity_id",
	  payload: {entity_id: entity_id}
	}
      },
      {
	scope: "public",
	data: {
          event: "updatedGameState",
	  payload: gameState
        }
      }
    ];

}

export default spawnEntity;

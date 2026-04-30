const gameState = require("../state/gameState/gameState.ts").default;

interface SpawnEntity {
  entity_id: number;
  x: number;
  y: number;
}

function spawnEntity (payload: SpawnEntity) {

    gameState.entities["" + payload.entity_id] = payload;

    return {event: "updatedGameState", payload: gameState};

}

export default spawnEntity;

let gameState = require("../state/gameState/gameState.ts").default;

interface TouchStart {
  entity_id: number,
  x: number,
  y: number
};

function touchStart (payload: TouchStart) {

    gameState.entities["" + payload.entity_id] = payload;

    return {event: "updatedGameState", payload: gameState};

}

export default touchStart;

let gameState = require("../state/gameState/gameState.ts").default;
const {CollisionSystem} = require("../systems/collisionSystem/collisionSystem.ts");

interface TouchStart {
  entity_id: number,
  x: number,
  y: number
};

function touchStart (payload: TouchStart) {

    CollisionSystem.update(payload.entity_id, payload.x, payload.y);

    return [
      {
	scope: "public",
	data: {event: "updatedGameState", payload: gameState}
      }
    ];

}

export default touchStart;

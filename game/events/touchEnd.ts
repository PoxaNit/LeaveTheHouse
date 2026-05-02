let gameState = require("../state/gameState/gameState.ts").default;
const {CollisionSystem} = require("../systems/collisionSystem/collisionSystem.ts");

interface TouchEnd {
  entity_id: number;
};

function touchEnd (payload: TouchEnd) {
/*
    let futureGameState = gameState.entities;

    futureGameState.entities["" + payload.entity_id] = payload;

    CollisionSystem.update(futureGameState);
*/
    return [
      {
	scope: "public",
	data: {event: "updatedGameState", payload: gameState}
      }
    ];

}

export default touchEnd;

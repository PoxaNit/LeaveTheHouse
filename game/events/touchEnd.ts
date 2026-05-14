let gameState = require("../state/gameState/gameState.ts").default;
const {CollisionSystem} = require("../systems/collisionSystem/collisionSystem.ts");

interface TouchEnd {
  entity_id: number;
};

function touchEnd (payload: TouchEnd) {

    return [
      {
	scope: "public",
	data: {event: "updatedGameState", payload: gameState}
      }
    ];

}

export default touchEnd;

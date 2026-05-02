let gameState = require("../state/gameState/gameState.ts").default;
const {CollisionSystem} = require("../systems/collisionSystem/collisionSystem.ts");

interface TouchMove {
  entity_id: number,
  x: number,
  y: number
};

function touchMove (payload: TouchMove) {

    let futureEntitiesState = structuredClone(gameState.entities);

    futureEntitiesState["" + payload.entity_id] = {
      entity_id: payload.entity_id,
      x: payload.x,
      y: payload.y,
      width: gameState.entities["" + payload.entity_id].width,
      height: gameState.entities["" + payload.entity_id].height
    };
console.log("gameState entities: ", JSON.stringify(gameState.entities))
console.log("futureEntitiesState entities: ", JSON.stringify(futureEntitiesState))
    CollisionSystem.update(futureEntitiesState);

    return [
      {
	scope: "public",
	data: {event: "updatedGameState", payload: gameState}
      }
    ];

}

export default touchMove;

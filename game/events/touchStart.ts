let gameState = require("../state/gameState/gameState.ts").default;
const {CollisionSystem} = require("../systems/collisionSystem/collisionSystem.ts");

interface TouchStart {
  entity_id: number,
  x: number,
  y: number
};

function touchStart (payload: TouchStart) {

    let futureEntitiesState = structuredClone(gameState.entities);
console.log("gameState.entities before modifying futureEntitiesState: ", gameState.entities)
    futureEntitiesState["" + payload.entity_id] = {
      entity_id: payload.entity_id,
      x: payload.x,
      y: payload.y,
      width: gameState.entities["" + payload.entity_id].width,
      height: gameState.entities["" + payload.entity_id].height
    };

console.log("before collision system, gameState entites: ", gameState.entities)
console.log("before collision system, futureEntitiesState: ", futureEntitiesState)

    CollisionSystem.update(futureEntitiesState);
console.log("after collision system, gameState entites: ", gameState.entities)
console.log("after collision system, futureEntitiesState: ", futureEntitiesState)
    return [
      {
	scope: "public",
	data: {event: "updatedGameState", payload: gameState}
      }
    ];

}

export default touchStart;

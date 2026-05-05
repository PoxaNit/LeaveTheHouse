const gameState = require("../../state/gameState/gameState.ts").default;
const {DynamicEntity} = require("../../entities/dynamicEntity/dynamicEntity.ts");
const ws = require("../../../server.ts");

export interface ColSys {
  detectCollisions: object;
  update: object;
}

type Entities = DynamicEntity[];

export class CollisionSystem {

    static detectCollisions (entities: DynamicEntity[]) {
console.log("executing collision detection... entities: ", entities)
	for (let i = 0; i < entities.length; i++) {
console.log("executing loop i...")
	    for (let j = 0; j < entities.length; j++) {
console.log("executing loop j...")
console.log("entities: ", entities)
console.log("entities[i] x y: ", entities[i][1].x, entities[i][1].y)
console.log("entities[j] x y: ", entities[j][1].x, entities[j][1].y)

console.log("i.x > j.x: ", entities[i][1].x > entities[j][1].x)
console.log("i.x < j.x + j.width: ", entities[i][1].x < entities[j][1].x + entities[j][1].width)
console.log("i.y > j.y: ", entities[i][1].y > entities[j][1].y)
console.log("i.y < j.y + j.width: ", entities[i][1].y < entities[j][1].y + entities[j][1].width)
		if (
		    entities[i][1].x > entities[j][1].x &&
		    entities[i][1].x < entities[j][1].x + entities[j][1].width &&
		    entities[i][1].y > entities[j][1].y &&
		    entities[i][1].y < entities[j][1].y + entities[j][1].height
		) {
console.log("collision detected!")
		    return true; // Collision

		}

	    }

	}

    }

    static update (entity_id: number, x: number, y: number) {

	let stop = false;

	while (!stop) {

	    let futureEntitiesState = structuredClone(gameState.entities);
console.log("update, futureEntitiesState: ", futureEntitiesState)
if(isNaN(futureEntitiesState[entity_id].x)) stop = true;
	    if (x > futureEntitiesState[entity_id].x) {
console.log("x > futureEntitiesState[entity_id].x: ", x, futureEntitiesState[entity_id].x)
	        futureEntitiesState[entity_id].x += futureEntitiesState[entity_id].speed;

	    }

	    if (x < futureEntitiesState[entity_id].x) {
console.log("x < futureEntitiesState[entity_id].x: ", x, futureEntitiesState[entity_id].x)

	        futureEntitiesState[entity_id].x -= futureEntitiesState[entity_id].speed;

	    }

	    if (y > futureEntitiesState[entity_id].y) {
console.log("y > futureEntitiesState[entity_id].y: ", y, futureEntitiesState[entity_id].y)
	        futureEntitiesState[entity_id].y += futureEntitiesState[entity_id].speed;

	    }

	    if (y < futureEntitiesState[entity_id].y) {
console.log("y < futureEntitiesState[entity_id].y: ", y, futureEntitiesState[entity_id].y)

	        futureEntitiesState[entity_id].y -= futureEntitiesState[entity_id].speed;

	    }

console.log("futureEntitiesState after if statements: ", futureEntitiesState)
	    const collision = this.detectCollisions(futureEntitiesState);

	    if (!collision) {
console.log("collision not detected!")

		gameState.entities[entity_id] = futureEntitiesState[entity_id];

	        ws.send(JSON.stringify({
		  event: "updatedGameState",
		  payload: gameState
		}));

	    }

	    if (collision || (gameState.entities[entity_id].x === x && (gameState.entities[entity_id].x === x && gameState.entities[entity_id].y === y))) {

		stop = true;

	    }

	}

    }

}

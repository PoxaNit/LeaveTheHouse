const gameState = require("../../state/gameState/gameState.ts").default;
const {DynamicEntity} = require("../../entities/dynamicEntity/dynamicEntity.ts");

export interface ColSys {
  detectCollisions: object;
  update: object;
}

type Entities = DynamicEntity[];

export class CollisionSystem {

    static detectCollisions (thisEntity, entities: DynamicEntity[]) {

	for (let i = 0; i < entities.length; i++) {

	    for (let j = 0; j < entities.length; j++) {

		if (
		    (entities[i][1].x > entities[j][1].x &&
		    entities[i][1].x < entities[j][1].x + entities[j][1].width &&
		    entities[i][1].y > entities[j][1].y &&
		    entities[i][1].y < entities[j][1].y + entities[j][1].height) ||
		    (entities[i][0].x >= 0 ||
		    entities[i][0].y >= 0 ||
		    entities[i][0].x + entities[i][0].width <= gameState.mapData.width ||
		    entities[i][0].y + entities[i][0].height <= gameState.mapData.height
		    )
		) {

		    return true; // Collision

		}

	    }

	}

    }

    static update (entity_id: number, x: number, y: number) {

	let stop = false;

	while (!stop) {

	    let futureEntitiesState = structuredClone(gameState.entities);

	    if (x > futureEntitiesState[entity_id].x) {

	        futureEntitiesState[entity_id].x += futureEntitiesState[entity_id].speed;

	    }

	    if (x < futureEntitiesState[entity_id].x) {

	        futureEntitiesState[entity_id].x -= futureEntitiesState[entity_id].speed;

	    }

	    if (y > futureEntitiesState[entity_id].y) {

	        futureEntitiesState[entity_id].y += futureEntitiesState[entity_id].speed;

	    }

	    if (y < futureEntitiesState[entity_id].y) {

	        futureEntitiesState[entity_id].y -= futureEntitiesState[entity_id].speed;

	    }

	    const thisEntity = futureEntitiesState[entity_id];

	    const collision = this.detectCollisions(thisEntity, futureEntitiesState);

	    if (!collision) {

		gameState.entities[entity_id] = futureEntitiesState[entity_id];

		stop = true;

	    }

	    if (collision || (gameState.entities[entity_id].x === x && (gameState.entities[entity_id].x === x && gameState.entities[entity_id].y === y))) {

		stop = true;

	    }

	}

    }

}

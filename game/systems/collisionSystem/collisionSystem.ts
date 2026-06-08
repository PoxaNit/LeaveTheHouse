const gameState = require("../../state/gameState/gameState.ts").default;
const {DynamicEntity} = require("../../entities/dynamicEntity/dynamicEntity.ts");

export interface ColSys {
  detectCollisions: object;
  update: object;
}

type Entities = DynamicEntity[];

export class CollisionSystem {

    static detectCollisions (thisEntity: DynamicEntity, entities: DynamicEntity[]) {

	for (let i = 0; i < entities.length; i++) {

	    if (
		(thisEntity.x > entities[i].x &&
		thisEntity.x < entities[i].x + entities[i].width &&
		thisEntity.y > entities[i].y &&
		thisEntity.y < entities[i].y + entities[i].height) ||
		(thisEntity.x <= 0 ||
		thisEntity.y <= 0 ||
		thisEntity.x + entities[i].width >= gameState.mapData.width ||
		thisEntity.y + entities[i].height >= gameState.mapData.height
		)
	    ) {

		return true; // Collision

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

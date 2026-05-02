const gameState = require("../../state/gameState/gameState.ts").default;
const Entity = require("../../entities/entity/entity.ts").EntityInterface;

export interface ColSys {
  detectCollisions: object;
  update: object;
}

type Entities = Entity[];

export class CollisionSystem {

    static detectCollisions (entities: Entity[]) {
console.log("executing collision detection... entities: ", entities)
	for (let i = 0; i < entities.length; i++) {
console.log("executing loop i...")
	    for (let j = 0; j < entities.length; j++) {
console.log("executing loop j...")
console.log("entities: , entities")
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

    static update (entities: object) {

	const entitiesArr = Object.entries(entities);

	const collision = this.detectCollisions(entitiesArr)

	if (!collision) {
console.log("collision not detected!")
	    gameState.entities = entities;

	}

    }

}

const {EntityInterface, Entity} = require("../entity/entity.ts");

interface DynamicEntityInterface extends EntityInterface {
  speed: number;
}

class DynamicEntity extends Entity {

    constructor (speed: number) {

	this.speed = speed;

    }

}

export {DynamicEntity, DynamicEntityInterface};

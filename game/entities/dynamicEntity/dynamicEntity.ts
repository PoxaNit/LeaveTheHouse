const {EntityInterface, Entity} = require("../entity/entity.ts");

interface DynamicEntityInterface extends EntityInterface {
  speed: number;
}

class DynamicEntity extends Entity {

    isMoving = false;

    direction = null;

    life = 1;

    speed = 1;

    x = 0;

    y = 0;

    width = 0;

    height = 0;

    constructor (
      speed: number,
      life: number,
      isMoving: bool,
      direction: string,
      width: number,
      height: number,
      x: number,
      y: number
    ) {

	this.speed = speed;

	this.life = life;

	this.isMoving = isMoving;

	this.direction = direction;

    }

}

export {DynamicEntity, DynamicEntityInterface};

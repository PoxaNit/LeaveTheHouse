interface EntityInterface {
  x: number;
  y: number;
  width: number;
  height: number;
}

class Entity {

    constructor (x: number, y: number, width: number, height: number) {

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

    }

}

export {EntityInterface, Entity};

interface MapInterface {
  width: number;
  height: number;
  tileSize: number;
  name: string;
  id: number;
}

class Map {

    width: number = 256;

    height: number = 256;

    tileSize: number = 16;

    name: string = "No name";

    id: number =  Math.floor(Math.random() * 50000) + 1;

    constructor (width: number, height: number, tileSize: number, name: string) {

	this.width = width;

	this.height = height;

	this.tileSize = tileSize;

	this.name = name;

    }
q
}

export {MapInterface, Map};

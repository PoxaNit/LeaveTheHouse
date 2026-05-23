interface MapInterface {
  width: number;
  height: number;
  tileSize: number;
  name: string;
  id: number;
  data: []; // pixels
}

class Map {

    width: number = 256;

    height: number = 256;

    tileSize: number = 16;

    name: string = "No name";

    id: number =  Math.floor(Math.random() * 50000) + 1;

    data: MapRowInterface[] = [];

    constructor (width: number, height: number, tileSize: number, name: string, data: object) {

	this.width = width;

	this.height = height;

	this.tileSize = tileSize;

	this.name = name;

	this.data = data;

    }

}

export {MapInterface, Map};

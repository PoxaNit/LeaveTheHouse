const {MapRowInterface} = require("./mapRow.ts");

interface MapInterface {
  width: number;
  height: number;
  tileSize: number;
  name: string;
  id: number;
  rows: MapRowInterface[] | [];
}

class Map {

    width: number = 256;

    height: number = 256;

    tileSize: number = 16;

    name: string = "No name";

    id: number =  Math.floor(Math.random() * 50000) + 1;

    rows: MapRowInterface[] = [];

    constructor (width: number, height: number, tileSize: number, name: string, rows: MapRowInterface[]) {

	this.width = width;

	this.height = height;

	this.tileSize = tileSize;

	this.name = name;

	this.rows = rows;

    }

}

export {MapInterface, Map};

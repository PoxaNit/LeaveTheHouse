const {TileRowInterface} = require("./tileRow.ts");

interface TileInterface {
  id: number;
  mapRowId: number;
  size: number;
  rows: TileRowInterface[] | [];
  walkable: boolean;
}

class Tile {

    id: number = Math.floor(Math.random() * 50000) + 1;

    mapRowId: number = -1;

    mapId: number = -1;

    size: number = 16; // 16x16

    rows: TileRowInterface[] = [];

    walkable: boolean = true;

    constructor (mapRowId: number, size: number, rows: TileRowInterface[], walkable: boolean) {

	this.mapRowId = mapRowId;

	this.size = size;

	this.rows = rows;

	this.walkable = walkable;

    }

}

export {TileInterface, Tile};

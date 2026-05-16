const {TileInterface} = require("./tile.ts");

interface MapRowInterface {
  id: number;
  mapId: number;
  tiles: TileInterface[];
}

class MapRow {

    id: number = Math.floor(Math.random() * 50000) + 1;

    mapId: number = -1;

    tiles: TileInterface[] = [];

    constructor (mapId: number, tiles: TileInterface[]) {

	this.mapId = mapId;

	this.tiles = tiles;

    }

}

export {MapRowInterface, MapRow};

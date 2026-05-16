interface TileInterface {
  id: number;
  mapId: number;
  size: number;
  pixels: number[];
}

class Tile {

    id: number = Math.floor(Math.random() * 50000) + 1;

    mapId: number = -1;

    size: number = 16;

    pixels: number[] = [];

    constructor (mapId: number, size: number) {

	this.mapId = mapId;

	this.size = size;

    }

}

export {TileInterface, Tile};

const {TileColumnInterface} = require("./tileColumn.ts");

interface TileRowInterface {
  id: number;
  tileId: number;
  columns: TileColumnInterface[] | [];
}

class TileRow {

    id: number = Math.floor(Math.random() * 50000) + 1;

    tileId: number = -1;

    columns: TileColumnInterface[] = [];

    constructor (tileId: number, columns: TileColumnInterface[]) {

	this.tileId = tileId;

	this.columns = columns;

    }

}

export {TileRowInterface, TileRow};

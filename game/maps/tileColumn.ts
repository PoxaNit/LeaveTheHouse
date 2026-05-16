interface TileColumnInterface {
  id: number;
  rowId: number;
  color: string;
}

class TileColumn {

    id: number = Math.floor(Math.random() * 50000) + 1;

    rowId: number = -1;

    color: string = "";

    constructor (rowId: number, color: string) {

	this.rowId = rowId;

	this.color = color;

    }

}

export {TileColumnInterface, TileColumn};

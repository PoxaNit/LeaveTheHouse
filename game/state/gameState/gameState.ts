const {MapInterface} = require("../../maps/map.ts");

interface GameState {
  entities: object;
  mapData: MapInterface[] | [];
}

let gameState: GameState = {
  entities: {},
  mapData: [] // array of rows (rows of tiles)
};

export default gameState;

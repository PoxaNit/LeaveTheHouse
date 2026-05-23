const {MapInterface} = require("../../maps/map.ts");

interface GameState {
  entities: object;
  mapData: MapInterface;
}

let gameState: GameState = {
  entities: {},
  mapData: {}
};

export default gameState;

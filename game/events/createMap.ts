const gameState = require("../state/gameState/gameState.ts");

function createMap () {

    require("../maps/test.ts");

    return [
      {
        scope: "public",
        data: {event: "updatedGameState", payload: gameState}
      }
    ];

}

export default createMap;

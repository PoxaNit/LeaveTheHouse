const gameState = require("../state/gameState/gameState.ts").default;

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

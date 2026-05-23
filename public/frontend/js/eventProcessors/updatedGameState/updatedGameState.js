import gameState from "../../game/state/gameState/gameState.js";

function updatedGameState (payload) {
console.log("updateGameState, payload: " + JSON.stringify(payload))
    gameState.entities = payload.entities;

    gameState.mapData = payload.mapData;

}

export default updatedGameState;

import gameState from "../../game/state/gameState/gameState.js";

function updatedGameState (payload) {
setTimeout(() => console.log("updateGameState, payload: " + JSON.stringify(payload)), 5000)

    gameState.mapData = payload.mapData;
    gameState.entities = payload.entities;

setTimeout(() => console.log("payloadnow: ", gameState), 5000)
}

export default updatedGameState;

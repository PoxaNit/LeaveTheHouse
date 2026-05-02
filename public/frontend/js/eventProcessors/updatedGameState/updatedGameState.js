import gameState from "../../game/state/gameState/gameState.js";
import render from "../../game/render/render.js";

function updatedGameState (payload) {
console.log("updateGameState, payload: " + JSON.stringify(payload))
    gameState.entities = payload.entities;
//alert("updateGameState, gameStates.entities now:  " + JSON.stringify(gameState.entities))

}

export default updatedGameState;

import gameState from "../../game/state/gameState/gameState.js";

function updatedGameState (payload) {

    gameState.entities = payload.entities;

}

export default updatedGameState;

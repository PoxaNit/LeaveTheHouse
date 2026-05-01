import gameState from "../../game/state/gameState/gameState.js";

function entity_id (payload) {
alert("entity_id executing...")
    gameState.thisPlayerId = payload.entity_id;

}

export default entity_id;

import updatedGameState from "../eventProcessors/updatedGameState/updatedGameState.js";
import entity_id from "../eventProcessors/entity_id/entity_id.js";

function eventHandler (message) {

    switch (message.event) {

	case "updatedGameState":
	    updatedGameState(message.payload);
	    break;

	case "entity_id":
	    entity_id(message.payload);
	    break;

        default: break;

    }

}

export default eventHandler;

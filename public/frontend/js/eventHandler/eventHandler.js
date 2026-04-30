import updatedGameState from "../eventProcessors/updatedGameState/updatedGameState.js";

function eventHandler (message) {

    switch (message.event) {

	case "updatedGameState":
	    updatedGameState(message.payload);
	    break;

        default: break;

    }

}

export default eventHandler;

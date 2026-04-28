const moveEntity = require("./events/moveEntity.ts").default;
const spawnEntity = require("./events/spawnEntity.ts").default;
const despawnEntity = require("./events/despawnEntity.ts").default;

interface Message {
    event: string;
    payload: object
}

function eventHandler (message: Message) {

    console.log(`event: ${message.event}`);
    console.log('payload: ', message.payload);

    const payload = message.payload;

    switch (message.event) {

	case "spawnEntity":
	    return spawnEntity(payload);
	    break;

	case "despawnEntity":
	    return despawnEntity(payload);
	    break;

	case "moveEntity":
	    return moveEntity(payload);
	    break;

	defaut: return {event: "event_error", payload: null};
	    break;
    }

}

export default eventHandler;

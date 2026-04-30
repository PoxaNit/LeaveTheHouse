const moveEntity = require("./game/events/moveEntity.ts").default;
const spawnEntity = require("./game/events/spawnEntity.ts").default;
const despawnEntity = require("./game/events/despawnEntity.ts").default;
const touchStart = require("./game/events/touchStart.ts").default;

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

	case "touchstart":
	    return touchStart(payload);
	    break;

	default: return {event: "event_error", payload: null};
	    break;
    }

}

export default eventHandler;

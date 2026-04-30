import inputState from "../../inputState.js";
import gameState from "../../../gameState/gameState.js";
import ws from "../../../../../ws/ws.js";

function sendData (event) {

    ws.send(JSON.stringify({
      event: event,
      payload: {
	entity_id: gameState.thisPlayerId,
	x: inputState.touch.x,
	y: inputState.touch.y
      }
    }));

}

function processTouch () {

    if (inputState.touch.start) {

	sendData("touchstart");

	inputState.touch.start = false;

    }

    if (inputState.touch.move) {

	sendData("touchmove");

	inputState.touch.move = false;

    }

    if (inputState.touch.end) {

	sendData("touchend");

	inputState.touch.end = false;

    }

}

export default processTouch;

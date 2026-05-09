import inputState from "../../inputState/inputState.js";
import ws from "../../../../ws/ws.js";
import gameState from "../../gameState/gameState.js";

function sendData (direction) {

    ws.send(JSON.stringify({
      event: "moveEntity",
      payload: {
	entity_id: gameState.thisPlayerId,
	direction: direction
      }
    }));

}

function processWalking () {

    if (inputState.walking.up) {

	sendData("up");

	inputState.walking.up = false;

    }

    if (inputState.walking.right) {

	sendData("right");

	inputState.walking.right = false;

    }

    if (inputState.walking.down) {

	sendData("down");

	inputState.walking.down = false;

    }

    if (inputState.walking.left) {

	sendData("left");

	inputState.walking.left = false;

    }

}

export default processWalking;

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
alert("processWalking...")
    if (inputState.walking.up) {
alert("walking.up is active")
	sendData("up");

	inputState.walking.up = false;

    }

    if (inputState.walking.right) {
alert("walking.right is active")

	sendData("right");

	inputState.walking.right = false;

    }

    if (inputState.walking.down) {
alert("walking.down is active")

	sendData("down");

	inputState.walking.down = false;

    }

    if (inputState.walking.left) {
alert("walking.left is active")

	sendData("left");

	inputState.walking.left = false;

    }

}

export default processWalking;

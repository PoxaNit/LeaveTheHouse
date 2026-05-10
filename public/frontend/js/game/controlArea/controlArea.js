import ws from "../../ws/ws.js";
import gameState from "../../game/state/gameState/gameState.js";
import inputState from "../state/inputState/inputState.js";

function bindEvent (b, direction) {

    b.ontouchstart = () => {

	inputState.walking.activeEvent = true;
	inputState.walking[direction] = true;
    }

    b.ontouchend = () => {

	inputState.walking.activeEvent = false;

	inputState.walking.up = false;

	inputState.walking.right = false;

	inputState.walking.down = false;

	inputState.walking.left = false;

    }
}

function controlArea () {

    const div      = document.createElement("div");

    const b1       = document.createElement("button");
    const b2       = document.createElement("button");
    const b3       = document.createElement("button");
    const b4       = document.createElement("button");

    b1.textContent = "Up";
    b2.textContent = "Right";
    b3.textContent = "Down";
    b4.textContent = "Left";


    bindEvent(b1, "up");
    bindEvent(b2, "right");
    bindEvent(b3, "down");
    bindEvent(b4, "left");


    div.appendChild(b1);
    div.appendChild(b2);
    div.appendChild(b3);
    div.appendChild(b4);


    document.body.appendChild(div);

}

export default controlArea;

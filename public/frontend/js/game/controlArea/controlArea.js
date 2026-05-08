import ws from "../../ws/ws.js";
import gameState from "../../game/state/gameState/gameState.js";
import inputState from "../state/inputState/inputState.js";

function bindEvent (b, eventName) {

    b.ontouchstart = () => {

	inputState.walking.activeEvent = true;

	if (eventName === "up") inputState.walking.up = true;

	if (eventName === "right") inputState.walking.right = true;

	if (eventName === "down") inputState.walking.down = true;

	if (eventName === "left") inputState.walking.left = true;

    }

    b.ontouchend = () => {

	inputState.walking.activeEvent = false;

	if (eventName === "up") inputState.walking.up = false;

	if (eventName === "right") inputState.walking.right = false;

	if (eventName === "down") inputState.walking.down = false;

	if (eventName === "left") inputState.walking.left = false;

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


    bindEvent(b1, "goUp");
    bindEvent(b2, "goRight");
    bindEvent(b3, "goDown");
    bindEvent(b4, "goLeft");


    div.appendChild(b1);
    div.appendChild(b2);
    div.appendChild(b3);
    div.appendChild(b4);

    document.body.appendChild(div);

}

export default controlArea;

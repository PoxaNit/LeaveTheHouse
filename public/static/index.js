import ws from "../frontend/js/ws/ws.js";
import {gameArea, startGameArea} from "../frontend/js/game/gameArea/gameArea.js";
import gameLoop from "../frontend/js/game/gameLoop/gameLoop.js";
import inputState from "../frontend/js/game/state/inputState/inputState.js";

ws.addEventListener("open", () => {

    startGameArea();

    gameArea.canvas.addEventListener("touchstart", e => {

	const clientX = e.touches[0].clientX;
	const clientY = e.touches[0].clientY;

	inputState.touch.activeEvent = true;
	inputState.touch.start = true;
	inputState.touch.x = clientX;
	inputState.touch.y = clientY;
console.log(`index.js, x y: ${clientX} ${clientY}`)
    });

    gameArea.canvas.addEventListener("touchmove", e => {

	const clientX = e.touches[0].clientX;
	const clientY = e.touches[0].clientY;

	inputState.touch.activeEvent = true;
	inputState.touch.move = true;
	inputState.touch.x = clientX;
	inputState.touch.y = clientY;

    });

    gameArea.canvas.addEventListener("touchend", e => {

	inputState.touch.activeEvent = false;

    });


    ws.send(JSON.stringify({
      event: "spawnEntity",
       payload: {
        x: 50,
        y: 50,
	width: 30,
	height: 40,
	speed: 5
      }
    }));

    requestAnimationFrame(gameLoop);

});


import render from "../render/render.js";
import update from "../update/update.js";

function gameLoop () {
console.log("gameLoop...")
    render();

    update();

    requestAnimationFrame(gameLoop);

}

export default gameLoop;

import render from "../render/render.js";
import update from "../update/update.js";

function gameLoop () {

    render();

    update();

    requestAnimationFrame(gameLoop);

}

export default gameLoop;

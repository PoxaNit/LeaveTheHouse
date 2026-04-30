import render from "../render/render.js";
//import update from "../update/update.js";

function gameLoop () {

console.log("executing game loop...")

console.log("rendering...")
    render();
console.log("updating game state...")
    update();

    requestAnimationFrame(gameLoop);

}

export default gameLoop;

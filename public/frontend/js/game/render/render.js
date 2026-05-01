import entitiesProcessor from "./renderingProcessors/entitiesProcessor/entitiesProcessor.js";
import {gameArea} from "../gameArea/gameArea.js";

function render() {

    let ctx = gameArea.context;

    ctx.clearRect(0, 0, gameArea.canvas.width, gameArea.canvas.height);

    let a = entitiesProcessor();

}

export default render;

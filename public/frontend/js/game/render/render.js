import entitiesProcessor from "./renderingProcessors/entitiesProcessor/entitiesProcessor.js";
import mapProcessor from "./renderingProcessors/mapProcessor/mapProcessor.js";
import {gameArea} from "../gameArea/gameArea.js";

function render() {

    let ctx = gameArea.context;

    ctx.clearRect(0, 0, gameArea.canvas.width, gameArea.canvas.height);

    mapProcessor();

    entitiesProcessor();

}

export default render;

import entitiesProcessor from "./renderingProcessors/entitiesProcessor/entitiesProcessor.js";
//import gameArea from "../gameArea/gameArea.js";

function render() {

    const ctx = gameArea.context;

    ctx.clearReact(0, 0, gameArea.canvas.width, gameArea.canvas.height);

    entitiesProcessor();

}

export default render;

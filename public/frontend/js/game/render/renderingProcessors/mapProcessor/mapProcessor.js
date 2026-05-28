import gameState from "../../../state/gameState/gameState.js";
import {gameArea} from "../../../gameArea/gameArea.js";

function mapProcessor () {
const gs = gameState;
    const canvas = gameArea.canvas;

    const ctx = gameArea.context;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let data = imageData.data;

    let n = 0; // imageData data index

    const mapData = {...gs};

setTimeout(() => {
  console.log("gs: ", gs)
  console.log("gs.mapData: ", gs.mapData)
  console.log("gs.mapData.data: ", gs.mapData.data)
  console.log("mapData: ", mapData)
}, 5000)


    for (let i = 0; i < mapData.length; i++) {

	for (let j = 0; j < mapData[i].length; j += 4) {
setTimeout(() => console.log("mapData[i][j]: ", mapData[i][j]), 5000)
	    data[n] = mapData[i][j];
	    data[n + 1] = mapData[i][j + 1];
	    data[n + 2] = mapData[i][j + 2];
	    data[n + 3] = mapData[i][j + 3];

	    n += 4;

	}

    }

    context.putImageData(imageData, 0, 0);

}

export default mapProcessor;

import gameState from "../../../state/gameState/gameState.js";
import {gameArea} from "../../../gameArea/gameArea.js";
import ws from "../../../../ws/ws.js";

function mapProcessor () {

    const canvas = gameArea.canvas;

    const ctx = gameArea.context;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let data = [];

    let n = 0; // imageData data index

    if (!gameState.mapData?.data?.length) return;

    const mapData = [...gameState.mapData.data];

    for (let i = 0; i < mapData.length; i++) {

	for (let j = 0; j < mapData[i].length / 4; j += 4) {

	    data[n] = mapData[i][j];
	    data[n + 1] = mapData[i][j + 1];
	    data[n + 2] = mapData[i][j + 2];
	    data[n + 3] = mapData[i][j + 3];

	    n += 4;

	}

    }


    imageData.data.set(data);

    ctx.putImageData(imageData, 0, 0);

}

export default mapProcessor;

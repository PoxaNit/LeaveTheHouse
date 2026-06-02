import gameState from "../../../state/gameState/gameState.js";
import {gameArea} from "../../../gameArea/gameArea.js";
import ws from "../../../../ws/ws.js";

function mapProcessor () {
const gs = gameState;
    const canvas = gameArea.canvas;

    const ctx = gameArea.context;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let data = [];

    let n = 0; // imageData data index
//console.log("before return")

    if (!gs.mapData?.data?.length) return;
//console.log("after return")
    const mapData = [...gs.mapData.data];
/*
setTimeout(() => {
  console.log("gs: ", gs)
  console.log("gs.mapData: ", gs.mapData)
  console.log("gs.mapData.data: ", gs.mapData.data)
  console.log("mapData: ", mapData)
}, 5000)
*/

    for (let i = 0; i < mapData.length; i++) {

	for (let j = 0; j < mapData[i].length; j += 4) {
//setTimeout(() => console.log("mapData[i][j]: ", mapData[i][j]), 5000)
	    data[n] = mapData[i][j];
	    data[n + 1] = mapData[i][j + 1];
	    data[n + 2] = mapData[i][j + 2];
	    data[n + 3] = mapData[i][j + 3];

	    n += 4;
//setTimeout(() => console.log("data[n]: ", data[n]), 5000)

	}

    }


    imageData.data.set(data);
//setTimeout(() => console.log("data after imageData.data.set: ", data), 10000)
/*    ws.send(JSON.stringify({
      event: "showLog",
      payload: {
        playerId: gameState.thisPlayerId,
	data: imageData.data
      }
    }));
*/

//    console.log("imageData.data: ", JSON.stringify(imageData.data))
    ctx.putImageData(imageData, 0, 0);

}

export default mapProcessor;

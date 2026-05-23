import gameState from "../../../state/gameState/gameState.js";
import {gameArea} from "../../../gameArea/gameArea.js";

function hexToRgb(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function mapProcessor () {

    const canvas = gameArea.canvas;

    const imageData = gameArea.canvas.getImageData(0, 0, canvas.width, canvas.height);

    let data = imageData.data;

    let n = 0; // imageData data index

    const mapData = gameState.mapData.data;

    for (let i = 0; i < mapData.length; i++) {

	for (let j = 0; j < mapData[i].length; j++) {

	    data[n] = mapData[i][j];
	    data[n + 1] = mapData[i][j + 1];
	    data[n + 2] = mapData[i][j + 2];
	    data[n + 3] = mapData[i][j + 3];

	    n += 4;

	}

    }

    canvas.getContext("2d").putImageData(data);

}

export default mapProcessor;

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

    const data = imageData.data;

    let n = 0; // imageData data index

    const rows = gameState.mapData.rows;

    for (let i = 0; i < rows.length; i++) {

	for (let j = 0; j < rows[i].tiles.length; j++) {

	    for (let k = 0; k < rows[i].tiles[j].rows.length) {

		for (let z = 0; z < rows[i].tiles[j].rows[k].columns) {

		    const column = rows[i].tiles[j].rows[k].columns[z]

		    const rgb = hexToRgb(column.color);

		    data[n] = rgb[0];

		    data[n + 1] = rgb[1];

		    data[n + 2] = rgb[2];

		    n += 4;

		}

	    }

	}

    }

}

export default mapProcessor;

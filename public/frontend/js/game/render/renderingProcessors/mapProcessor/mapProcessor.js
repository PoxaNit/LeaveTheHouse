import gameState from "../../../state/gameState/gameState.js";
import {gameArea} from "../../../gameArea/gameArea.js";

function setPixel(x, y, r, g, b, a) {
    const index = (y * canvas.width + x) * 4;
    data[index]     = r; // Red
    data[index + 1] = g; // Green
    data[index + 2] = b; // Blue
    data[index + 3] = a; // Alpha (0-255)
}

function mapProcessor () {

    const canvas = gameArea.canvas;

    const imageData = gameArea.canvas.getImageData(0, 0, canvas.width, canvas.height);

    const data = imageData.data;

    

}

export default mapProcessor;

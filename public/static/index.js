import ws from "../frontend/js/ws/ws.js";
import {startGameArea} from "../frontend/js/game/gameArea/gameArea.js";
import gameLoop from "../frontend/js/game/gameLoop/gameLoop.js";

ws.addEventListener("open", () => {

    startGameArea();

    ws.send(JSON.stringify({
      event: "spawnEntity",
       payload: {
        entity_id: Math.floor(Math.random() * 55000),
        x: 0,
        y: 0
      }
    }));

    requestAnimationFrame(gameLoop);

});


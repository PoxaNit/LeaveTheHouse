const gameState = require("../state/gameState/gameState.ts").default;
const {mapData} = require("./mapData.ts");

gameState.mapData = mapData;
console.log("mapData: ", mapData)

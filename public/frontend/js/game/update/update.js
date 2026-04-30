import inputState from "../state/inputState/inputState.js";
import processTouch from "../state/stateEventProcessors/processTouch/processTouch.js";

function update () {

    if (inputState.touch.activeEvent) processTouch();

}

export default update;

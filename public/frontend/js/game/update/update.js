import inputState from "../state/inputState/inputState.js";
import processTouch from "../state/stateEventProcessors/processTouch/processTouch.js";
import processWalking from "../state/stateEventProcessors/processWalking/processWalking.js";

function update () {

    if (inputState.touch.activeEvent) processTouch();

    if (inputState.walking.activeEvent) processWalking();

}

export default update;

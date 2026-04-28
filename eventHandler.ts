interface Message {
    event: string;
    payload: object
}

function eventHandler (message: Message) {

    console.log(`event: ${message.event}`);
    console.log(`payload: ${message.payload}`);

}

export default eventHandler;

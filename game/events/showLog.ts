interface Payload {
  playerId: number;
  data: string
}

function showLog (payload: Payload) {

    console.log(`Player ${payload.playerId} sent log`);

    console.log(`Type of data: ${typeof payload.data}`);

    console.log(`data[400]: ${payload.data[400]}`)

    for (let i = 0; i < 5; i++) {

        console.log(`data[i]: ${payload.data[4]}`);

    }

    return [];

}

export default showLog;

interface Payload {
  playerId: number;
  data: string
}

function showLog (payload: Payload) {

    console.log(`Player ${payload.playerId} sent log`);

    console.log(`Type of data: ${typeof payload.data}`);

    console.log(`data.[136]: ${payload.data[136]}`)

    for (let i = 0; i < 5; i++) {

        console.log(`data[i]: ${payload.data[i]}`);

    }

    return [];

}

export default showLog;

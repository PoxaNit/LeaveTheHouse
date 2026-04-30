interface MoveEntity {
    entity_id: number;
    x: number;
    y: number;
}

function moveEntity (payload: MoveEntity) {

    const data: MoveEntity =
    {
      event: "entityMoved",
      payload: {
        entity_id: payload.entity_id,
	x: payload.x,
	y: payload.y
      }
    };

    return data;

}

export default moveEntity;

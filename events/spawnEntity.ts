interface SpawnEntity {
  entity_id: number;
  x: number;
  y: number;
}

function spawnEntity (payload: SpawnEntity) {

    return {event: "spawnedEntity", payload: payload};

}

export default spawnEntity;

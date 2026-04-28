interface DespawnEntity {
  entity_id: number;
}

function despawnEntity (payload: DespawnEntity) {

    return {event: "despawnedEntity", payload: payload};

}

export default despawnEntity;

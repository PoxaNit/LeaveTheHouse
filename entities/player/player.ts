interface PlayerInterface {
    life: number;
}

class Player {

    life = 0;

    constructor (life) {

	this.life = life;

    }

}

export {PlayerInterface, Player};

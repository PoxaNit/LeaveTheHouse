interface PlayerInterface {
    life: number;
    speed: number;
}

class Player {

    life = 0;

    speed = 0;

    constructor (life: number, speed: number) {

	this.life = life;

	this.speed = speed;

    }

}

export {PlayerInterface, Player};

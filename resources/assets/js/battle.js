import Level from './level';

class Battle extends Level {
    constructor(player, enemy, possibleChoices, stage, images, music) {
        super(player, possibleChoices, stage, images, music);

        this.enemy = enemy;
    }

    // Methods
}

export default Battle;
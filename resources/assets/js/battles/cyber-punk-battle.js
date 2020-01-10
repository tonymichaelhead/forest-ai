import cyberPunkBattleChoices from '../choices/cyber-punk-battle-choices';
import Battle from '../battle';
import player from '../characters/player';

const cyberPunkBattle = new Battle(
    player,
    'cyberPunk',
    cyberPunkBattleChoices,

);

cyberPunkBattle.drewGun = false;
    
// Decision to drink the nasty alcohol puts you at a disadvantage

// Punk starts at 15 health

// You get first hit

cyberPunkBattle.initialize = async function () {
    $dialogue.empty();

    await displayDialogue(`You swing at his face, but he swiftly dodges it with a smug grin
        and pulls out a knife. 
        This is gonna be harder than you thought.`
    );
    
    this.setStage('turn-1');
    this.showChoices();
}

cyberPunkBattle.enemyAttacksOne = async function() {
    var hit = attackDidHit(0.8);
        
    if (hit) {
        
        var damage = randomizeDamage(3, 6);
        
        await displayDialogueConfirm([
            `You see him start to move towards you with his knife.
            you try to dodge it but a quick slice of the blade knicks your cheek. 
            That's gonna leave a scar.
            You took -${damage}.`
        ]);
        
        player.removeHealth(damage);
        player.updateStats();
    } else {
        await displayDialogueConfirm([
            `You see him lunge in and take a swipe at your face with his knife,
            but your able to jump to the side and barely dodge it
            in the knick of time.`
        ]);
        console.log('enemy missed');
    }

    this.setStage('turn-2');
    this.showChoices();
}

cyberPunkBattle.enemyAttacksTwo = async function() {
    var hit = attackDidHit(0.8);
        
    if (hit) {
        
        var damage = randomizeDamage(5, 7);
        
        await displayDialogueConfirm([
            `The hall is dimly lit, and full of trash.
            It's hard to make solid shapes as your eyes have yet to fully adjust
            to the pale-lit flourescent lights of the hall.`,
            `You do however notice the glimmer of light off the enemies shiny blade
            as he steps in to take another swipe at you. You quickly step back, but he takes a swipe
            at your lower body and cuts your knee pretty good.`,
            `You took -${damage}.`
        ]);
        
        player.removeHealth(damage);
        player.updateStats();
        // Check if alive, if not, game over
    } else {
        await displayDialogueConfirm([
            `The hall is quite dimly lit, and full of trash.
            It's hard to make solid shapes as your eyes have yet to fully adjust
            to the pale-lit flourescent lights of the hall.`,
            `You do however notice the glimmer of light off the enemies shiny blade
            as he steps in to take another swipe at you. You quickly step back, and nimbly
            avoid his aggressive attack.`,
            `You are quite satisfied with yourself, but you play it cool 
            and hide the triumphant grin that starts to form on your face.`
        ]);
    }

    if ( !player.isAlive() ) {
        gameOver(); 
    } 

    this.setStage('turn-3');
    this.showChoices();
}

cyberPunkBattle.enemyAttacksThree = async function() {
    var hit = attackDidHit(0.8);
        
    if (hit) {
        
        var damage = randomizeDamage(5, 7);
        
        await displayDialogueConfirm([
            `Brick, or whatever his face is, takes a stab at you, missing you by just inches.
            You feel a sense of relief as you managed to dodge another potentially painful attack.`,
            `However, you are caught off gaurd in your moment of celebration as he lands a solid punch with his
            other hand right on your face. Looks like homie can use his fists too. 
            You took -${damage}.`
        ]);
        
        player.removeHealth(damage);
        player.updateStats();
    } else {
        await displayDialogueConfirm([
            `Brick, or whatever his face is, takes a stab at you, missing you by just inches.
            You feel a sense of relief as you managed to dodge another potentially painful attack.`
        ]);
    }
    if ( !player.isAlive() ) {
        gameOver(); 
    }
    this.setStage('turn-4');
    this.showChoices();
}

cyberPunkBattle.enemyAttacksFour = async function() {
        
    await displayDialogueConfirm([
        `The dude steps in with his knife, 
        looking aggressive as fuck.
        You step to the side to try to dodge,
        but its dim and you didn't realize how close to
        the window you were.`,
        `With a menacing sneer, he gives you a hard shove and you go flying out the window.`,
        `You plummet to your death.
        - 10,000 damage`
    ]);
    gameOver();
}

cyberPunkBattle.defeatedEnemy = async function() {

        // $charImg.hide("slide", { direction: "up" }, 1000);
        // $charImg.slideUp('slow');

    setTimeout( ()=> {
        $('#cyber-fight').animate({volume: 0}, 3000);
        setTimeout(() => {
            $('#background_cyberpunk').animate({volume: 1}, 3000);
        }, 3000);
        // Set choices to go back to room or leave building
        room.hideAllChoices();
    }, 5000);

    await displayDialogueConfirm([
        `That hit seemed to have been the last straw, as the enemy
        drops lifelessly on the floor. You notice he is carrying a knapsack, which contains
        some cash and a small ionized energy drink.`, 
        `You pry the knife, a small, compact switchblade, from his dead fingers. 
        You briefly wipe it off with the corner of your t-shirt and stick it in your pocket.
        Could be useful.`,
    ]);

    // Display fight winnings summary
    await displayBattleWinnings(
        ['switchblade knife', 'ionized energy drink', 'knapsack'],
        125,
        50
    );

    room.setStage('after-fight');
    room.showChoices();

    // Recieved Items: switchblade knife, ionized energy drink, knapsack
    // Found cash: $125
    // Exp. Earned: 50xp. 
}

    // physical attack, gun, run

    // physical attack: 8/10 likely to hit, weak to moderate damage
    // gun 5/10 likely to hit, moderate to high damage
    // run - you can't run, and it could cost you the battle

    // you get 3 choices

    // First Choice
    // Clock him in the jaw
    // Draw your gun (Damage dealt has to be worth not dealing damage a turn, but also, chance of missing)
    // Run like hell -- finds a health potion

    // Cyberdude attacks - cuts you with a knife - 5 points
    
    // Second Choice
    // Run up behind him and choke him
    // Draw your gun/Duck behind the door frame and shoot (if you hit does moderate)
    // Run

    // Cyberdude attacks - cuts you with a knife - 5 points (you will likely be killed second hit if you drank the not-beer and didn't try to run and didn't find the potion)
    
    // Third Choice
    // Throw another punch
    // Draw your gun/Shoot (shoot him in the head and do tremendous damage, but lower accuracy)
    // try to run... does nothing

    // However he dies, or you die, build a dynamic story around it. be descriptive with the language
    // "You cap him right in the head, he falls onto the floor like a limp doll, blood slowly oozing out of the wound and 
    // drenching the floor. You reflect on the gratitude you feel "
// }

export default cyberPunkBattle;
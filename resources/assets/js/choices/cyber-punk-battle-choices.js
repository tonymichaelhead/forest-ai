
const cyberPunkBattleChoices = {
            
    throwAPunch: { 
        ele: `<div class="col button-choice" id="choice-throw-a-punch"><button>Throw another punch</button></div>`, 
        id: '#choice-throw-a-punch',
        listener: throwAPunch,
        stage: ['turn-1'],
        isShowing: false,
    },
    drawYourGun: { 
        ele: `<div class="col button-choice" id="choice-draw-your-gun"><button>Draw your gun</button></div>`, 
        id: '#choice-draw-your-gun',
        listener: drawYourGun,
        stage: ['turn-1'],
        isShowing: false,
    },
    runLikeHell: { 
        ele: `<div class="col button-choice" id="choice-run-like-hell"><button>Run like hell</button></div>`, 
        id: '#choice-run-like-hell',
        listener: runLikeHell,
        stage: ['turn-1'],
        isShowing: false,
    },
    hitWithBeam: { 
        ele: `<div class="col button-choice" id="choice-hit-with-beam"><button>Smack him with that beam laying on the floor</button></div>`, 
        id: '#choice-hit-with-beam',
        listener: hitWithBeam,
        stage: ['turn-2'],
        isShowing: false,
    },
    drawYourGunTwo: { 
        ele: `<div class="col button-choice" id="choice-draw-your-gun-two"><button>Draw your gun</button></div>`, 
        id: '#choice-draw-your-gun-two',
        listener: drawYourGunTwo,
        stage: ['turn-2'],
        isShowing: false,
    },
    blastHim: { 
        ele: `<div class="col button-choice" id="choice-blast-him"><button>Blast him with your pistol</button></div>`, 
        id: '#choice-blast-him',
        listener: blastHim,
        stage: [],
        isShowing: false,
    },
    tryRunning: { 
        ele: `<div class="col button-choice" id="choice-try-running"><button>Try running</button></div>`, 
        id: '#choice-try-running',
        listener: tryRunning,
        stage: ['turn-2'],
        isShowing: false,
    },
    throwHim: { 
        ele: `<div class="col button-choice" id="choice-throw-him"><button>Grab him and throw him</button></div>`, 
        id: '#choice-throw-him',
        listener: throwHim,
        stage: ['turn-3'],
        isShowing: false,
    },
    drawYourGunThree: { 
        ele: `<div class="col button-choice" id="choice-draw-your-gun-three"><button>Draw your gun</button></div>`, 
        id: '#choice-draw-your-gun-three',
        listener: drawYourGunThree,
        stage: ['turn-3'],
        isShowing: false,
    },
    popACap: { 
        ele: `<div class="col button-choice" id="choice-pop-a-cap"><button>Pop a cap in his ass</button></div>`, 
        id: '#choice-pop-a-cap',
        listener: popACap,
        stage: [],
        isShowing: false,
    },
    swingAtHim: { 
        ele: `<div class="col button-choice" id="choice-swing-at-him"><button>Swing at him</button></div>`, 
        id: '#choice-swing-at-him',
        listener: swingAtHim,
        stage: ['turn-4'],
        isShowing: false,
    },
    takeAShot: { 
        ele: `<div class="col button-choice" id="choice-take-a-shot"><button>Take a shot</button></div>`, 
        id: '#choice-take-a-shot',
        listener: takeAShot,
        stage: [],
        isShowing: false,
    },
 
};

async function throwAPunch() {
    
    this.hideAllChoices();
    // determine hit or miss based on random number
    var damage;
    var hit = attackDidHit(0.8); // 80% probability

    if (hit) {
        
        damage = randomizeDamage(5, 7);
        $dialogue.empty();
        // this.enemy.removeHealth($damage);
        
        // display dialogue
        await displayDialogueConfirm([
            `Seeing the shiny tip of his blade glimmer
            in the dimly florescent lit halls,
            you nimbly dodge to the side and land a punch directly on the side of his head.
            You dealt -${damage}. `
        ]);
        cyberPunk.removeHealth(damage);
        this.enemyAttacksOne();
    } else {
        // display dissapointing message
        $dialogue.empty();
        await displayDialogueConfirm([
            `Third time's a charm, but second's gotta count for something right?
            You wait for the opportune moment,
            lunge in and try to uppercut the prick. 
            He gracefully steps aside with that stupid grin and you miss again.
            God. 
            Hate this guy.`
        ]);
        this.enemyAttacksOne();
    }
}

async function drawYourGun() {
    
    this.hideAllChoices();
    cyberPunkBattleChoices.blastHim.stage.push('turn-2');
    cyberPunkBattleChoices.popACap.stage.push('turn-3');
    cyberPunkBattleChoices.popACap.stage.push('turn-4');
    cyberPunkBattleChoices.drawYourGunTwo.stage.pop();
    cyberPunkBattleChoices.drawYourGunThree.stage.pop();

    $dialogue.empty();
            
    // display dialogue
    await displayDialogueConfirm([
        `You remember you picked up a gun earlier and decide to bust it out.
        It takes a second to figure out how to cock it.`,
        `After a bit of fumbling you get it cocked and ready to shoot.
        You take aim and wait for the opportune moment to blast this idiot.`
    ]);
        
    this.enemyAttacksOne();
}

async function runLikeHell() {
    this.hideAllChoices();
    
    $dialogue.empty();
    
    // display dialogue
    await displayDialogueConfirm([
        `All this shit talking and flexing is really a pain in the ass.`, 
        `You look around the hallway for a way out but it's too narrow to get past this clown.`,
        `Guess there are some things in life you can't run from.`
    ]);
    
    this.enemyAttacksOne();
}

async function hitWithBeam() {
    
    this.hideAllChoices();

    var damage;
    var hit = attackDidHit(0.8); // 80% probability

    if (hit) {
        
        damage = randomizeDamage(5, 9);
        $dialogue.empty();
        // this.enemy.removeHealth($damage);
        
        // display dialogue
        await displayDialogueConfirm([
            `This hallway is a trashy wreck. You grab that delapitated
            wooden beam near you and manage to smack him in the head with it.
            You dealt -${damage}. `
        ]);
        
        cyberPunk.removeHealth(damage);
        
        if ( !cyberPunk.isAlive() ) {
            this.defeatedEnemy();
        } else {
            this.enemyAttacksTwo();
        }
    } else {
        $dialogue.empty();
        // display dissapointing message
        await displayDialogueConfirm([
            `This hallway is a trashy wreck. You grab that delapitated
            wooden beam near you and and swing it at his head. However, the floor is a bit
            damp and you slip a bit, missing by a hair.`
        ]);
        this.enemyAttacksTwo();
    }
}

async function drawYourGunTwo() {
    
    this.hideAllChoices();
    cyberPunkBattleChoices.popACap.stage.push('turn-3');
    cyberPunkBattleChoices.popACap.stage.push('turn-4');
    cyberPunkBattleChoices.drawYourGunThree.stage.pop();

    $dialogue.empty();
            
    // display dialogue
    await displayDialogueConfirm([
        `You remember you picked up a gun earlier and decide to bust it out.
        It takes a second to figure out how to cock it.`,
        `After a bit of fumbling you get it cocked and ready to shoot.
        You take aim and wait for the opportune moment to blast this idiot.`
    ]);
    this.enemyAttacksTwo();
}
async function blastHim() {
    
    var damage;
    var hit = attackDidHit(0.8); // 80% probability
    // Add logic for randomizing

    this.hideAllChoices();
    if (hit) {
        
        damage = randomizeDamage(10, 15);
        $dialogue.empty();
        // this.enemy.removeHealth($damage);
        
        // display dialogue
        await displayDialogueConfirm([
            `This dude is pretty quick, and is moving around quite a lot.
            You manage to take aim at his body and fire off a couple rounds.`,
            `You land a shot right on his shoulder. You see the blood spatter out the back of his
            shoulder as he cringes in pain. 
            You dealt -${damage}. `
        ]);

        cyberPunk.removeHealth(damage);

        if ( !cyberPunk.isAlive() ) {
            this.defeatedEnemy();
        } else {
            this.enemyAttacksTwo();
        }
    } else {
        $dialogue.empty();
        // display dissapointing message
        await displayDialogueConfirm([
            `This dude is pretty quick, and is moving around quite a lot.
            You manage to take aim at his body and fire off a couple rounds.`,
            `You miss, and hear the sound of breaking glass as you blast a window out
            in the back of the hall.`
        ]);
        this.enemyAttacksTwo();
    }
}
async function tryRunning() {
    this.hideAllChoices();
    await displayDialogueConfirm([
        `Now looks like a good time to run.`, 
        `You notice a little space between the enemy and the wall.
        "Now's my chance", you think, as you sprint towards the crevice and
        attempt to scoot through.`,
        `You run passed the enemy. It looks like you're about to get away safely,
        but you slip on a loose board on the floor and fall on your ass.`
        `As you get up and brush your butt off, you see the enemy has caught up to
        you while wielding his knife and a jackass grin on his face.`,
        `You took -2 damage.`
    ]);
    this.enemyAttacksTwo();
}
async function throwHim() {
    
    this.hideAllChoices();
    
    var damage;
    var hit = attackDidHit(0.8); // 80% probability

    if (hit) {
        
        damage = randomizeDamage(5, 7);
        $dialogue.empty();
        // this.enemy.removeHealth($damage);
        
        // display dialogue
        await displayDialogueConfirm([
            `With his last attack he left himself within perfect
            grappling distance.`, 
            `You manage to grab his shirt with one hand and the back of his neck with the other. 
            You ram him head first into the wall.
            You dealt -${damage}. `
        ]);
        cyberPunk.removeHealth(damage);
        
        if ( !cyberPunk.isAlive() ) {
            this.defeatedEnemy();
        } else {
            this.enemyAttacksThree();
        }
    } else {
        $dialogue.empty();
        // display dissapointing message
        await displayDialogueConfirm([
            `With his last attack he left himself within perfect
            grappling distance.  
            You manage to grab his shirt with one hand, but as you try to grab him by the neck
            with your other hand, your hand slips right off of his most neck and he breaks free. 
            His shirt rips slightly.
            You dealt -0. `
        ]);
        this.enemyAttacksThree();
    }
}

async function drawYourGunThree() {
    this.hideAllChoices();
    cyberPunkBattleChoices.takeAShot.stage.push('turn-4');

    $dialogue.empty();
            
    // display dialogue
    await displayDialogueConfirm([
        `You remember you picked up a gun earlier and decide to bust it out.
        It takes a second to figure out how to cock it.`,
        `After a bit of fumbling you get it cocked and ready to shoot.
        You take aim and wait for the opportune moment to blast this idiot.`
    ]);

    this.enemyAttacksThree(); 
}

async function popACap() {
    
    this.hideAllChoices();
   
    var damage;
    var hit = attackDidHit(0.8); // 80% probability
    
    if (hit) {
        
        damage = randomizeDamage(10, 15);
        $dialogue.empty();
        // this.enemy.removeHealth($damage);
        
        // display dialogue
        await displayDialogueConfirm([
            `With your gun drawn, the dude lunges in at you and
            tries to stab you in the gut. You step back in the knick of time.
            All though he's extremely close and it catches you off gaurd, you frantically
            pull the trigger and blast him in the chest, nearly missing his heart by a few inches.
            Blood is spurting out.
            You dealt -${damage}. `
        ]);
        cyberPunk.removeHealth(damage);

        if ( !cyberPunk.isAlive() ) {
            this.defeatedEnemy();
        } else {
            this.enemyAttacksThree();
        }
    } else {
        $dialogue.empty();
        // display dissapointing message
        await displayDialogueConfirm([
            `With your gun drawn, the dude lunges in at you and
            tries to stab you in the gut. You step back in the knick of time.`,
            `All though he's extremely close and it catches you off gaurd, you frantically
            pull the trigger while aiming at his upper torso. `, 
            `You're still a bit disoriented from
            whatever you were drugged with and you fire the gun up at the ceiling, missing him completely.
            Dust and rubble fall to the floor.`
        ]);
        this.enemyAttacksThree();
    }
}

async function swingAtHim() {
    this.hideAllChoices();
    
    var damage;
    var hit = attackDidHit(0.8); // 80% probability

    if (hit) {
        
        damage = randomizeDamage(5, 7);
        $dialogue.empty();
        // this.enemy.removeHealth($damage);
        
        // display dialogue
        await displayDialogueConfirm([
            `The last little tussle left him in perfect range of your fists.
            You wind up a little.`,
            `He steps in and gets his free left hand on the collar of your shirt
            but before he's able to do anything you unleash a heavy haymaker and punch
            him in the side of the head.`,
            `The enemy moans in pain.
            You dealt -${damage}.`
        ]);
        cyberPunk.removeHealth(damage);
        
        if ( !cyberPunk.isAlive() ) {
            this.defeatedEnemy();
        } else {
            this.enemyAttacksFour();
        }
    } else {
        $dialogue.empty();
        // display dissapointing message
        await displayDialogueConfirm([
            `The last little tussle left him in perfect range of your fists.
            He steps in and gets his free left hand on the collar of your shirt.`,
            `You skillfully twist to the side, winding up to punch while breaking free of his loose grasp.`,
            `You unleash the fury with a heavy swing at his face but you miss.`
        ]);
        this.enemyAttacksFour();
    }
}

async function takeAShot() {
    
    this.hideAllChoices();
   
    var damage;
    var hit = attackDidHit(0.8); // 80% probability
    
    if (hit) {
        
        damage = randomizeDamage(10, 15);
        $dialogue.empty();
        // this.enemy.removeHealth($damage);
        
        // display dialogue
        await displayDialogueConfirm([
            `You decide taking a shot with your handgun is probably the best option.`,
            `The enemy ducks behind a vertical wooden beam, covering his head and vital organs,
            but you see his legs sticking out a bit so you take aim and blast away.
            You dealt -${damage}. `
        ]);
        cyberPunk.removeHealth(damage);

        if ( !cyberPunk.isAlive() ) {
            this.defeatedEnemy();
        } else {
            this.enemyAttacksFour();
        }
    } else {
        $dialogue.empty();
        // display dissapointing message
        await displayDialogueConfirm([
            `You decide taking a shot with your handgun is probably the best option.
            The enemy ducks behind a vertical wooden beam, covering his head and vital organs,
            but you see his legs sticking out a bit so you take aim and blast away.`,
            `Unfortunately, you miss, and hear a hollow thud as the bullet 
            hits the wall somewhere in the back of the gloomy, delapidated hallway.`,
            `You sense the weight of this small, yet heavy blunder.`
            
        ]);
        this.enemyAttacksFour();
    }
}



export default cyberPunkBattleChoices;
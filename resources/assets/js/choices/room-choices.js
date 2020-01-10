import dialoguePunkOne from '../dialogue/dialogue-punk-one';

const roomChoices = {
            
    drinkBeer: { 
        ele: `<div class="col button-choice" id="choice-drink-beer"><button>Drink that beer on the table</button></div>`, 
        id: '#choice-drink-beer',
        listener: drinkBeer,
        stage: ['room-1', 'room-2', 'room-3'],
        isShowing: false,
    },
    takeNap: {
        ele: `<div class="col button-choice" id="choice-take-nap"><button>Take a nap</button></div>`,
        id: '#choice-take-nap',
        listener: takeNap,
        stage: ['room-3'],
        isShowing: false,
    },
    checkDoor: {
        ele: `<div class="col button-choice" id="choice-check-door"><button>Check the door</button></div>`,
        id: '#choice-check-door',
        listener: checkDoor,
        stage: ['room-1', 'room-2'],
        isShowing: false,
    },
    hackDoor: {
        ele: `<div class="col button-choice" id="choice-hack-door"><button>Try to hack the door</button></div>`,
        id: '#choice-hack-door',
        listener: hackDoor,
        stage: ['room-4'],
        isShowing: false,
    },
    lookOutWindow: {
        ele: `<div class="col button-choice" id="choice-look-window"><button>Look out the window again</button></div>`,
        id: '#choice-look-window',
        listener: lookOutWindow,
        stage: ['room-1'], // Allow user to check window later
        isShowing: false,
    },
    pickupGun: {
        ele: `<div class="col button-choice" id="choice-pickup-gun"><button>Pick up that gun on the bed</button></div>`,
        id: '#choice-pickup-gun',
        listener: pickupGun,
        stage: ['room-2'],
        isShowing: false,
    },
    // Choices to be made at the Window 
    jumpFromWindow: {
        ele: `<div class="col button-choice" id="choice-jump"><button>Try jumping</button></div>`,
        id: '#choice-jump',
        listener: jump,
        stage: ['window-1'],
        isShowing: false,
    },
    goBackToRoom: {
        ele: `<div class="col button-choice" id="choice-back-to-room"><button>There must be another way out...</button></div>`,
        id: '#choice-back-to-room',
        listener: goBackToRoom,
        stage: ['window-1'],
        isShowing: false,
    },
    answerPhone: {
        ele: `<div class="col button-choice" id="choice-pick-up-phone"><button><i class="fas fa-mobile-alt" id="button-phone"></i></button></div>`,
        id: '#choice-pick-up-phone',
        listener: answerPhone,
        stage: ['phone-call'],
        isShowing: false,
    },
    exitDoor: {
        ele: `<div class="col button-choice" id="exit-door"><button>Let's get outta here</button></div>`,
        id: '#exit-door',
        listener: exitDoor,
        stage: ['hacked-door'],
        isShowing: false,
    },
    // Phone Call
    weCantMeet: {
        ele: `<div class="col button-choice" id="we-cant-meet"><button>We really can’t be meeting anymore.</button></div>`,
        id: '#we-cant-meet',
        listener: weCantMeet,
        stage: ['phone-1'],
        isShowing: false,
    },
    swallowBattery: {
        ele: `<div class="col button-choice" id="swallow-battery"><button>I rather swallow a battery</button></div>`,
        id: '#swallow-battery',
        listener: swallowBattery,
        stage: ['phone-1'],
        isShowing: false,
    },
    iGuess: {
        ele: `<div class="col button-choice" id="i-guess"><button>I guess...</button></div>`,
        id: '#i-guess',
        listener: iGuess,
        stage: ['phone-1'],
        isShowing: false,
    },
    // Fight Choices
    // punchGuy: {
    //     ele: `<div class="col button-choice" id="punch-guy"><button>Clock him in the jaw</button></div>`,
    //     id: '#punch-guy',
    //     listener: punchGuy,
    //     stage: ['fight-guy'],
    //     isShowing: false,
    // },
    // After fight 
    stayInRoom: {
        ele: `<div class="col button-choice" id="stay-in-room"><button>Check out room a little more</button></div>`,
        id: '#stay-in-room',
        listener: stayInRoom,
        stage: [], // Allow user to travel back to room after fight
        isShowing: false,
    },
    goOutside: {
        ele: `<div class="col button-choice" id="go-outside"><button>Let's get outta here.</button></div>`,
        id: '#go-outside',
        listener: goOutside,
        stage: ['after-fight'],
        isShowing: false,
    }
};

// Room event handlers
function drinkBeer() {
    // Display message
    $dialogue.show(); //Check to see if hidden first?
    $dialogue.empty(); 
    displayDialogue('You take a swig. Ughh. That wasn\'t beer. What were you thinking. -5 health.');
    // Reduce health
    this.player.removeHealth(5);
    this.player.updateStats();
    // Remove drink beer from possible choices on room object
    $('#choice-drink-beer').remove();
    this.removeChoice('drinkBeer');
    // Show room again
}

function checkDoor() {
    $dialogue.show(); //Check to see if hidden first?
    $dialogue.empty(); 
    if (this.foundLaptop) {
       

    } else {
        displayDialogue('You check the door but it seems to be be locked by some kind of primitive computer.');
    }
}

function hackDoor() {
    this.hideAllChoices();
    displayDialogue(
        `The computerized locks on this door are at least a hundred years old. 
        Should be cake for a cyber security engineer like yourself.
        ...`
    );
    setTimeout(() => { playSoundEffect('sound-modem', 0.4, 500)}, 3000);
    setTimeout(() => { $('#background_cyberpunk').animate({volume: 0}, 8000); });
    setTimeout(() => {
        $('#sound-modem').animate({volume: 0}, 8000);
        displayDialogue(
            `The door opened!`
        );
        this.setStage('hacked-door');
        this.showChoices();
        
    }, 8000);
}

function exitDoor() {
    
    playMusic('cyber-fight', 0.3, 20000);
    $room.hide();
    $dialogue.empty();
    this.hideAllChoices();
    this.displayBackground('room-hallway');

    dialoguePunkOne.call(this);
}

function stayInRoom() {

}

function goOutside() {
    $('#background_cyberpunk').animate({volume: 0}, 1500);
    this.hideAllChoices();
    this.leave();

    homeCity.initialize();
}

function pickupGun() {
    const gun = {
        name: 'gun',
        ele: '<img class="item" id="item-gun" src="../css/img/gun.svg">'
    }
    
    $dialogue.show(); //Check to see if hidden first?
    $dialogue.empty(); 
    displayDialogue('Good idea. You never know what could be waiting outside this room. +Added gun to inventory+');
    this.player.addToItems(gun);
    this.player.updateStats();
    $('#choice-pickup-gun').remove();
    this.removeChoice('pickupGun');
    this.hideAllChoices();
    this.setStage('room-3');
    this.showChoices();
}

async function takeNap() {
    $dialogue.empty();
    this.hideAllChoices();
    await displayDialogueConfirm([
        `Pretty tore up with whatever you were drugged with.
        Maybe a nap will help revive your spirits a little.`,
        `...
        So tired...
        ...`,
        `...
        Asha, 
        that girl's been trying to butt in to your life from the beginning...`,
        `She seemed pretty amped to talk though. Wonder if it's important? 
        What could be the harm in meeting just for a minute...`,
        `...
        Hey, is that an old laptop sitting on the floor over there?
        Could maybe use it to hack the locks on the door.`,
        `Let's cut this nap short and get out of here ASAP.`
    ]);

    this.foundLaptop = true;
    this.setStage('room-4');
    this.showChoices();
}

// Window event handlers
function jump() {
    $dialogue.show(); //Check to see if hidden first?
    $dialogue.empty();
    displayDialogue(
        `You try jumping out the window, but you are about 400 stories up and you plummet to your death.
        You scream for your life but in the vast, dark city, no one even hears you. That was a very stupid choice.`
    );
    this.hideAllChoices();
    setTimeout(gameOver, 10000);
}

function lookOutWindow() {
    $dialogue.show(); //Check to see if hidden first?
    $dialogue.empty();
    this.hideAllChoices();
    this.setStage('window-1');
    
    this.displayWindow(async function() {
        // await displayDialogueConfirm([
        //     `Breathtaking.

        //     With the recent turn of the century, and all the technological advancesments
        //     and the dehumanization of the planet, year 2100 is still beautiful in it's own subtle way...`,
        //     `Hmmm... you are very high up, and it doesn't look like theres any way down. There must be another way out?`
        // ]);
        await displayDialogueConfirm([
            `Good ol' K-town.
            
            Way up here, far from the cries of suffering, 
            far from the pollution, the violence, and the shambles that was once a peaceful city,
            one can really notice the traquility of this warm, rainy summer night. 
            I could get used to this.`, 
            `Hmmm... you are very high up, and it doesn't look like there's any way down.`
        ]);
        this.showChoices();
    }.bind(this));
}

async function goBackToRoom() {
    $dialogue.show(); //Check to see if hidden first?
    $dialogue.empty();
    this.displayRoom();
    this.hideAllChoices();
    this.setStage('phone-call');
    this.showChoices();
    // Play phone ringing sound effect
    playSoundEffectLoop('audio-phone', 0.5, 0);
}

async function answerPhone() {
    $('#audio-phone').remove();
    this.hideAllChoices();
    // starts phone-dialogue
    await displayCharacterDialogueConfirm([
        `Asha?`
    ], playerImg);

    $charImg.empty();

    await displayCharacterDialogueConfirm([
        `Zek! Where have you been? 
        I’ve been so worried ever since you disappeared from The Cell last night.`
    ], girl);
        
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([
        `Uhh... I don’t remember. 
        I walked out back for a smoke and last I know
        I felt a hot sting in the back of my neck and woke up in some strange room...`,
        `What is this anyway? You shouldn't be calling me...`
    ], playerImg);
                
    $charImg.empty();

    await displayCharacterDialogueConfirm([
        `A room? I don't know what you're doing, but you need to come meet me at The Bar.`, 
        `I have something I want to give you.`
    ], girl);
                       
    this.setStage('phone-1'); 
    this.showChoices();    
}

async function swallowBattery() {
    this.hideAllChoices();
    $charImg.empty();

    await displayCharacterDialogueConfirm([
        `Well that's rude. Is that how you talk to the person who saved your life? 
        Anyway, I’ll see you at The Bar asap.`,
        `And keep your wits about you. You are wanted by many people ever since that day...`
    ], girl);

    $charImg.empty();
    this.setStage('room-2');
    this.showChoices();
}

async function weCantMeet() {
    this.hideAllChoices();
    $charImg.empty();
        
    await displayCharacterDialogueConfirm([
        `I understand how you feel 
        but I just need to see you this last time
        then I promise I’ll stay out of your life for good. 
        I’ll be waiting at The Bar for you.`,
        `And keep your wits about you. You are wanted by many people ever since that day...`
    ], girl);

    $charImg.empty();
    this.setStage('room-2');
    this.showChoices();
}

async function iGuess() {
    this.hideAllChoices();
    $charImg.empty();

    await displayCharacterDialogueConfirm([
        `Good! You'll be estatic about what I have to give you.
        See you at The Bar then.`,
        `And keep your wits about you. You are wanted by many people ever since that day...`
    ], girl);

    $charImg.empty();
    this.setStage('room-2');
    this.showChoices();
}

export default roomChoices;

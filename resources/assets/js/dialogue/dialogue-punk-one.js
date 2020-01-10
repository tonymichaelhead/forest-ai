import cyberPunkBattle from '../battles/cyber-punk-battle';

async function dialoguePunkOne() {

    await displayCharacterDialogueConfirm([ 
        `You know I can’t let you leave, dude.` 
    ], cyberDudePurple);

    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `Who the fuck are you?` 
    ], playerImg);

    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `Name's Brick. Second in command in of the South Wall Tribe.
        As if you've never heard my name...` 
    ], cyberDudePurple);
    
    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `Never heard of it.`,
        `I'm guessing you're a street punk hired by Intellex to bring me in.` 
    ], playerImg);

    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `Street punk? You better watch your tongue when speaking to me kid.
        You're lucky your ass is worth a pretty penny, or I would gut you right now.` 
    ], cyberDudePurple);

    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `You really think they're gonna pay out? I wouldn't be surprised
        if they kill you immediately after turning me in.` 
    ], playerImg);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Intellex wouldn't do that to us South Wall Tribe. Don't you see,
        they've been backing us for several years now. Funding our ventures,
        allowing us to grow into what we've become today.`,
        `Ever since their little AI project, "Forest" or whatever it's called took off,
        they've been needing fine gentlemen like us to take care of their more
        covert operations.` 
    ], cyberDudePurple);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `So Intellex has been employing street gangs to do their dirty work...`, 
        `Wouldn't put it past them considering some of the shady things I've seen working there.` 
    ], playerImg);
    
    $charImg.empty();
        
    await displayCharacterDialogueConfirm([ 
        `Alright, enough chit chat kid. Time to see what you're made of.`
    ], cyberDudePurple);
    
    punchGuy();
}

function punchGuy() {
    $(`<div class="col" id="clock-him" style="display:none;"><button>Clock'em in the jaw</button></div>`).appendTo('#button-menu').fadeIn(500);
    $(document).on('click', '#clock-him', () => {
        
        $(document).off('click', '#clock-him');
        $('#clock-him').remove();

        cyberPunkBattle.initialize();
    })
}

export default dialoguePunkOne;
import { fadeInAsync } from "../utils/animation";

async function dialogueGirlTwo() {

    await displayCharacterDialogueConfirm([ 
        `Zek! I was worried you weren't gonna show.
        ...
        You look hurt, are you okay?` 
    ], girl);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Yeah it’s fine. I really gotta get going. 
        What did you want to see me about?` 
    ], playerImg);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `You know theres a bounty on your head.` 
    ], girl);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `A bounty?` 
    ], playerImg);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Look, I know you want to get going, 
        and you got a lot on your mind. 
        Let’s just relax minute. 
        I’ll buy you a drink.` 
    ], girl);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `That’s what I’m talking about! It’s on me.
        don’t get any ideas Mister!` 
    ], girl);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Can you just get to the point.` 
    ], playerImg);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `I’ve been thinking ever since that day a few months ago. 
        About Intellex. About you, about the knowledge you hold.`, 
        `That was a bold move you pulled. 
        A very stupid one, 
        taking a multi-trillion dollar company like that. 
        But very bold.` 
    ], girl);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Intellex owns the world. 
        They own the government. 
        They own the planet. 
        They own you and me.`, `
        And I’M responsible for that. 
        There’s nothing I can do to reconcile that fact.` 
    ], playerImg);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Just because you worked at Intellex and helped build "Forest"
        doesn’t mean you’re responsible for all of this.` 
    ], girl);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Forest isn’t just a project. 
        It it isn’t a product. 
        It isn’t like anything you could even fathom.`,
        `Forest is an all seeing, all knowing 
        pervasive system that is monitoring, collecting, 
        recording every piece of data there is to collect.`, 
        `The state of this entire world is being mapped out out every second.` 
    ], playerImg);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `What’s so bad about that? 
        I mean, 
        collecting information is a good thing right? 
        Like recording history?` 
    ], girl);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Forest doesn’t just record history. 
        It USES it. 
        To make itself stronger.` 
    ], playerImg);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Uses it ...
        ...?` 
    ], girl);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Yes. 
        Uses it to make itself grow and become more powerful.` 
    ], playerImg);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `How could something like a computer or machine “use” something for it’s own good? 
        You’re talking about artificial intelligence?` 
    ], girl);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `No, I’m talking about ACTUAL intelligence. 
        AI as a real, sentient being, 
        making decisions with the sole purpose of survival, replication, 
        and propagating itself into the future.` 
    ], playerImg);

    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `Like DNA ...` 
    ], girl);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Exactly. 
        This is the birth of the new form of intelligence, 
        of consciousness. 
        And if it’s not stopped immediately, 
        humans are done for.` 
    ], playerImg);
    
    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `That's terrifying'. I see why you needed to get out of Intellex when you did ...`,
        `But why would Intellex want to capture you ... 
        all you did was quit the project right? 
        Is that such a crime?` 
    ], girl);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `...` 
    ], playerImg);
    
    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `Zek?` 
    ], girl);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `I gotta get out of here. 
        It’s only a matter of time before RIOT barges in here looking for me. 
        I need to get far away, then plan my next move.` 
    ], playerImg);
    
    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `That’s what I wanted to see you about. 
        I have something to give you. 
        Something that might help you. 
        *pulls a thing out of her pocket that looks like a little computer chip*` 
    ], girl);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `What’s that? Looks like an old cellphone sim card.` 
    ], playerImg);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `That's exactly what it is. It's been unlocked and jailbroken.`
    ], girl);
    
    $charImg.empty();

    await displayCharacterDialogueConfirm([
        `"Jailbroken"... heard that term before in my digital history course
        in my undergrad studies...`
    ], playerImg);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([
        `Yes, it means its been hacked and you therefore have access
        to all its "full potential".`,
        `Or so my brother told me. He gave it to me when we were young. Although
        he's been rather cryptic about what it actually does.`, 
        `I’ve kept it until now 
        because it’s the only thing I have left
        to remember him by. ` 
    ], girl);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `What happened to him? ` 
    ], playerImg);

    $charImg.empty();

    await displayCharacterDialogueConfirm([ 
        `Don’t worry about it! 
        What’s in the past is in the past.`, 
        `Take it. I'm sure you'll figure out what to do
        with it when the time is right!` 
    ], girl);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Uhh...thanks.`
    ], playerImg);

    $charImg.empty();
    
    await displayDialogueConfirm([
        `+Attached jailbroken sim card to cellphone+` 
    ]);
    
    await displayCharacterDialogueConfirm([ 
        `and Zek? 
        One more thing I wanted to tell you.` 
    ], girl);

    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `?` 
    ], playerImg);
    $charImg.empty();
    
    // await displayCharacterDialogueConfirm([ 
    //     `?` 
    // ], playerImg);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `...
        
        
        W-w-what was that!?
        ` 
    ], girl);
    
    $charImg.empty();
    
    // Screen suddenly goes black
    await fadeOutAsync($background, 200);
    
    await displayCharacterDialogueConfirm([ 
        `A power outage?` 
    ], playerImg);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Z z z e e e e e e e e e k k k k!` 
    ]);
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Asha!??` 
    ], playerImg);

    $charImg.empty();
    
    await fadeInAsync($background, 1500);
    // Pause a few minutes, lights go back on
    await displayCharacterDialogueConfirm([ 
        `What the hell was that…
        God damn that girl . . .`, 
        `I should’ve stayed away when I had the chance . . .` ,
        `At any rate, gotta go save her . . .`
    ], playerImg);
    
    // Screams
    
    $charImg.empty();
    
    await displayCharacterDialogueConfirm([ 
        `Outside!`
    ], playerImg);

    $charImg.empty();

    bar.setStage('after-talk');
    bar.showChoices();
}

export default dialogueGirlTwo;
class Level {
    constructor(player, possibleChoices, stage, images, music) {

        this.player = player;
        this.possibleChoices = possibleChoices;
        this.currentStage = stage;
        this.images = images;
        this.music = music;

        this.hasLookedOutside = false;
        this.foundLaptop = false;
    }
    
    initialize() {
        
        this.displayBackground(this.images[0]);
        // play music
        playMusic(this.music[0], .5, 1500);
        this.showChoices();
    }

    displayBackground(image) {
        $background.empty();
        $background.hide()
        $background.append(`<div id="${image}"></div>`);
        $background.fadeIn(2000);
    }
    
    displayWindow(cb) {
        $dialogueCenter.hide();
        $room.fadeOut(3000);
        $window.fadeIn(3000, function() {
            $dialogueCenter.show();
            cb();
        });
    }

    displayRoom() {
        $dialogueCenter.hide();
        $window.fadeOut(3000);
        $room.fadeIn(3000);
    }
   
    getPossibleChoices() {
        // Keep this logic for possibly converting possibleChoices into an array instead of an object later
        // choices = this.possibleChoices.filter((choice) => {
        //     return this.currentStage === choice.stage;
        // });
        const choices = [];
        const possibleChoices = this.possibleChoices;
        
        for (let choice in possibleChoices) {
            if ( possibleChoices[choice].stage.includes(this.currentStage) ) {
                choices.push(possibleChoices[choice]);
            }
        }
        
        return choices;
    }

    setStage(stage) {
        this.currentStage = stage;
    }
    
    showChoices() {
        const choices = this.getPossibleChoices();
        
        // Turn each possibleChoice into dialogue bubble and append to DOM
        for (let choice in choices) {
            
            let id = choices[choice].id;
            let listener = choices[choice].listener;
            let ele = choices[choice].ele; 

            $(ele).appendTo($('#button-menu'));
            $('.button-choice').fadeIn(1000);
            $(document).on('click', id, listener.bind(this));    
            choices[choice].isShowing = true;
        }
    }

    hideAllChoices() {
       
        const choices = this.getPossibleChoices();
        for (let choice in choices) {
            // Turn event listeners off as well
            if (choices[choice].isShowing) {
                $(document).off('click', choices[choice].id);
                // Remove each choice from DOM 
                $(choices[choice].id).remove();
                choices[choice].isShowing = false;
            }
        }
    }

    removeChoice(key) {
        delete this.possibleChoices[key];
        // Also remove event listener
    }

    leave() {
        // Empty the background pic container
        killAllAudio();
        $window.remove();
        $room.fadeOut(3000);
        $room.remove();
        $dialogue.empty();
    }
}

export default Level;
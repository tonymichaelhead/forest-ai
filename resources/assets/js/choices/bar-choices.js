import dialogueGirlTwo from '../dialogue/dialogue-girl-two';

const barChoices = {
            
    // grabADrink: { 
    //     ele: `<div class="col button-choice" id="choice-grab-drink"><button>Grab a drink</button></div>`, 
    //     id: '#choice-grab-drink',
    //     listener: grabADrink,
    //     stage: ['bar-1'],
    //     isShowing: false,
    // },

    // causeTrouble: { 
    //     ele: `<div class="col button-choice" id="choice-cause-trouble"><button>Cause some trouble</button></div>`, 
    //     id: '#choice-cause-trouble',
    //     listener: causeTrouble,
    //     stage: ['bar-1'],
    //     isShowing: false,
    // },

    lookForGirl: { 
        ele: `<div class="col button-choice" id="choice-look-girl"><button>Look for Asha</button></div>`, 
        id: '#choice-look-girl',
        listener: lookForGirl,
        stage: ['bar-1'],
        isShowing: false,
    },

    goOutside: { 
        ele: `<div class="col button-choice" id="choice-go-outside"><button>Go outside</button></div>`, 
        id: '#choice-go-outside',
        listener: goOutside,
        stage: ['after-talk'],
        isShowing: false,
    },
};

function grabADrink() {
    this.setStage('bartender');
    this.displayBackground('bartender');
}

function causeTrouble() {

}

function lookForGirl() {
    this.hideAllChoices();
    dialogueGirlTwo();
}

function goOutside() {
    this.hideAllChoices();
    $background.fadeOut(2000, function() {
        $charImg.empty();
        $dialogueCenter.append(`<div class="title-screen">Thanks for playing!</div>`);
        
    });
    killAllAudio();
}


export default barChoices;
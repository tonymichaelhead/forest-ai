// Logic for typewriter animation

function typeWriter(txt) {
   
    if (i < txt.length) {
        document.getElementById("dialogue").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter.bind(this, txt), speed);
    } else if (i === txt.length) {
        i = 0;
    }
}

function centeredTypeWriter(txt) {
   
    if (i < txt.length) {
        document.getElementById("centered-dialogue").innerHTML += txt.charAt(i);
        i++;
        setTimeout(centeredTypeWriter.bind(this, txt), speed);
    } else if (i === txt.length) {
        i = 0;
    }
}

function displayDialogue(text) {
    // Make this function accept a callback and fire it when the text is done displaying.
    // Alternatively, make a confirmation button. Or do that in a seperate function.
    return new Promise(resolve => {
        let interval = speed * text.length + 1000;
        
        $('#button-menu').hide();
        
        $dialogueCenter.show();
        $dialogue.empty();
        $charImg.empty();
        typeWriter(text);
        setTimeout(() => {
            
            $('#button-menu').show();
            resolve();
        }, interval);    
    })
};

function displayCenteredDialogue(text) {
    // Make this function accept a callback and fire it when the text is done displaying.
    // Alternatively, make a confirmation button. Or do that in a seperate function.
    return new Promise(resolve => {
        let interval = speed * text.length + 1000;
        
        $('#button-menu').hide();
        
        $dialogueCenter.show();
        $centeredDialogue.empty();
        $charImg.empty();
        centeredTypeWriter(text);
        setTimeout(() => {
            
            $('#button-menu').show();
            resolve();
        }, interval);    
    })
};

function displayDialogueConfirm(textArray) {
    
    return new Promise(resolve => {

        function recurseDialogue(textArray) {
            
            var buttonContinue = '<div class="col" id="button-continue" style="display:none;"><button>Continue</button></div>';
            $dialogueCenter.show();

            if (textArray.length > 0) {
                let interval = speed * textArray[0].length + 1000;

                setTimeout(() => {
                    $(buttonContinue).appendTo('#button-menu').fadeIn(500);
                    
                    $(document).on('click', '#button-continue', function() {
                        $(document).off('click', '#button-continue');
                        $(document).off('keypress'); 
                        continueDialogue();
                    });
                    $(document).keypress(function() {
                        if (event.which == 13) {
                            $(document).off('click', '#button-continue');
                            $(document).off('keypress'); 
                            continueDialogue();
                        }
                    });

                }, interval);
                i = 0;
                typeWriter(textArray[0]);
            } else {
                i = 0;
                resolve();
            }
        }

        function continueDialogue() {
            
            $dialogue.empty();
            $('#button-continue').remove();
            
            textArray.shift();
            recurseDialogue(textArray);
        }
        recurseDialogue(textArray);
    });
};

function displayCharacterDialogue(img, text) {
    
    $dialogueCenter.show();
    $charImg.append(img);
    
    typeWriter(text);
};

function displayCharacterDialogueConfirm(textArray, img) {

    return new Promise(resolve => {
        
        $charImg.append(img);
        $charImg.show();

        function recurseDialogue(textArray) {
            
            var buttonContinue = '<div class="col" id="button-continue" style="display:none;"><button>Continue</button></div>';
            $dialogueCenter.show();

            if (textArray.length > 0) {
                let interval = speed * textArray[0].length + 1000;

                setTimeout(() => {
                    $(buttonContinue).appendTo('#button-menu').fadeIn(500);
                    
                    $(document).on('click', '#button-continue', function() {
                        
                        $(document).off('click', '#button-continue');
                        $(document).off('keypress'); 
                        continueDialogue();
                    });
                    $(document).keypress(function() {
                        if (event.which == 13) {
                            
                            $(document).off('click', '#button-continue');
                            $(document).off('keypress');  
                            continueDialogue();
                        }
                    });

                }, interval);
                i = 0;
                typeWriter(textArray[0]);
            } else {
                i = 0;
                resolve();
            }
        }

        function continueDialogue() {
            $dialogue.empty();
            $(document).off('click', '#button-continue');
            $('#button-continue').remove();
            
            textArray.shift();
            recurseDialogue(textArray);
        }
        recurseDialogue(textArray);
    });
};

function displayBattleWinnings(items, money, exp) {
    return new Promise(resolve => {

        var buttonContinue = '<div class="col" id="button-continue" style="display:none;"><button>Continue</button></div>';
        
        $dialogueCenter.show();

        $dialogueCenter.append(
            `<div class="battle-earnings">
                <h3>Battle Earnings</h4>    
                <h4>Items Received:</h4>
                <div>
                    <p>${items}</p>
                </div>
                <h4>Money Received:</h4>
                <div>
                    <p>$${money}</p>
                </div>
                <h4>Experience Earned:</h4>
                <div>
                    <p>${exp}xp</p>
                </div>
            </div>`
        );
        setTimeout(() => {
            $(buttonContinue).appendTo('#button-menu').fadeIn(500);
            
            $(document).on('click', '#button-continue', function() {
                $(document).off('click', '#button-continue');
                $(document).off('keypress');

                $('#button-continue').remove(); 
                $('.battle-earnings').remove(); 
                
                resolve();
            });
            $(document).keypress(function() {
                if (event.which == 13) {
                    $(document).off('click', '#button-continue');
                    $(document).off('keypress'); 
                
                    $('#button-continue').remove();
                    $('.battle-earnings').remove();
                
                    resolve();
                }
            });

        }, 2000);
        
    });
}

export { 
    typeWriter, 
    centeredTypeWriter, 
    displayCenteredDialogue, 
    displayDialogue, 
    displayDialogueConfirm, 
    displayCharacterDialogue, 
    displayCharacterDialogueConfirm,
    displayBattleWinnings, 
};
@extends('layouts.app')

@section('title', 'Room')


@section('content')
    
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="text-center center-dialogue" id="dialogue-center">
                    <div id="welcome-message" class="title-screen">Press any key to start</div>
                    <div id="char-img"></div>
                    <div id="dialogue"></div>
                    <div id="centered-dialogue"></div>
                    <button id="button-window"  style="display:none">Let's turn the light on</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>    
    <script>
    
    var i = 0;
    var one = 'It\'s dark in here.';
    var two = '...';
    var speed = 30;        
    var oneD = 'You wake up in a room alone.';
    var twoD = 'Your vision is hazy, but as your eyes come into focus you begin to look around.';
    var threeD = 'You notice a window and hear the pattering raindrops outside.';
    
    // Grab session data
    let playerName = sessionStorage.getItem('playerName');
    
    // Define background images
    let $room = $('#room-inner');
    let $window = $('#window');
    let $background = $('#background');
    
    // Define background music
    let $audioContainer = $('#audio-container');
    let cyberFight = "{{ asset('css/audio/cyber-fight.mp3') }}"
    
    // Character images
    let girl = `<img src="{{asset('css/img/girl.png')}}" height="100" width="100" alt="">`;
    let cyberDudePurple = `<img src="{{asset('css/img/cyber-dude.jpg')}}" height="100" width="100">` 
    let playerImg = `<img src="{{asset('css/img/hero.jpg')}}" height="100" width="100">` 
    
    let $menuBar = $('.menu-bar');
    let $dialogue = $('#dialogue');
    let $centeredDialogue = $('#centered-dialogue');
    let $charImg = $('#char-img');
    let $dialogueCenter = $('#dialogue-center');
    let $buttonMenu = $('#button-menu');
    // $formWrapper = $('#form-wrapper');
    let $inputName = $('#input-name');
    let $formName = $('#form-name');

    // $buttonMenu = $('#button-menu');

    // Stats variables
    let $statsHealth = $('#stats-health');
    let $statsItems = $('#stats-items');
    let $statsMoney = $('#stats-money');
    let $playerName = $('#player-name');
    
    function initializeGame() {
    
        startGame();

    }
        // } else {
        //     // Unhide name entry and open listener
        //     $formName.show();  
        //     $('#form-name').submit((e) => {
        //         e.preventDefault();

        //         playerName = $('#input-name').val();

        //         sessionStorage.setItem('playerName', playerName);

        //         $formName.hide();

        //         startGame();
        //     });
        // }

    function startGame() {
        
        typeWriter(oneD);

        setTimeout(() => {

            $dialogue.append('<br>');
            typeWriter(twoD);

            setTimeout(() => {
               
                $dialogue.append('<br>');
                typeWriter(threeD);   
                
                setTimeout(() => {
                    
                    $dialogue.append('<br>');
                    $button = $('<button>Look outside the window</button>').hide();
                    $dialogue.append($button);
                    $button.fadeIn(1000);

                    $button.on('click', () => {
                        $(this).remove(); // Possibly remove event listener for $button if any issues arise
                        $dialogueCenter.hide();
                        $dialogue.empty();
                        initializeWindow();
                    });

                }, 4000);

            }, 4000); 

        }, 4000);
    }

    function gameOver() {
    
        $dialogue.show(); //Check to see if hidden first?
        $dialogue.empty();
        $window.fadeOut(3000);
        displayDialogue('GAMEOVER...');
        setTimeout(typeWriter.bind(null, 'Our future depends on you. Try again?'), 2000);
        
        setTimeout(() => {
            $dialogueCenter.append('<button id="try-again">Try again</button>');
            $(document).on('click', '#try-again', () => {
                window.location.href = '/';
            });
        }, 6000);
    }

    function playMusic(id, volume, fadeTime) {
        
        document.getElementById(id).play();

        
        $(`#${id}`)[0].volume = 0;
        $(`#${id}`).animate({volume: volume}, fadeTime);
    }

    function playSoundEffect(id, volume, fadeTime) {
        
        document.getElementById(id).play();

        $(`#${id}`)[0].volume = 0;
        $(`#${id}`).animate({volume: volume}, fadeTime);
    }

    function playSoundEffectLoop(id, volume, fadeTime) {
        
        document.getElementById(id).play();

        $(`#${id}`)[0].volume = 0;
        $(`#${id}`).animate({volume: volume}, fadeTime);
    }
    
    function killAllAudio() {
        // TODO: Probably instead of removing the audio tags
        // just muting them would be the better option
        $('#audio-container > audio').each(function() { 
            $(this).animate({volume: 0}, 1000
            // function() {
            //     $(this).remove();
            // }
            );
        });
    }

    function navigateToDarkRoom() {
        
        $buttonLights = $('#button-window');
        $dialogue.show();
        $dialogue.empty();
        displayCenteredDialogue(one); // Instead of setTimeout below, make displayDialogue accept a callback
        
        setTimeout(() => {
            // Start cyberpunk ambient
            // $audioContainer.append('<audio id="background_cyberpunk" src="{{asset('css/audio/cyberpunk-ambient.mp3')}}" autoplay="autoplay" loop></audio>');         
            // $('#background_cyberpunk')[0].volume = 0;
            // $('#background_cyberpunk').animate({volume: 1}, 5000);

            playMusic('background_cyberpunk', 0.75, 5000);
            $($buttonLights).fadeIn(4000);
            
        }, 2000);   
    }

    function initializeWindow() {
        
        $audioContainer.append('<audio id="background_audio" src="{{asset('css/audio/rain.mp3')}}" autoplay="autoplay"></audio>');
        $window.fadeIn(5000);
       
        $('#background_audio')[0].volume = 0;
        $('#background_audio').animate({volume: 1}, 5000);
        
        setTimeout(() =>{
            displayDialogue(`Koreatown, Los Angeles
            2100 a.d.`);
            setTimeout(() =>{
                $window.fadeOut(5000);
                $('#background_audio').animate({volume: 0}, 5000);
                setTimeout(() => {
                    $dialogue.fadeOut(200, () => {
                        setTimeout(() => {
                            navigateToDarkRoom();
                        }, 2000);
                    });
                }, 5000);
            }, 5000);
        }, 3000)
    }

    function initializeRoom() {
        $('#button-window').remove();
        $menuBar.show();
        
        // const player = new Player(playerName);
        
        $playerName.text(player.playerName);
        player.updateStats();
        
        $buttonLights.fadeOut(1000);
        // Don't fade out of the dialogue box, fade out the text only?
        $dialogueCenter.fadeOut(2000);
        
        $room.fadeIn(3000, () => {
            // More dialogue?
            // Prompt Choices
            // event hook or set time out for after fade in?
            $centeredDialogue.empty();
            displayDialogue('My head really hurts... what is this place?');
            setTimeout(room.showChoices.bind(room), 3000);
        });
    }

    function dev() {
        // Clear dom 
        // initialize level and stage of choice
    }

    $(document).on('click', '#button-window', initializeRoom);

    // Pre load audio
    // var myAudio = document.getElementById('background_cyberpunk')
    // myAudio.oncanplaythrough = function () {alert('loaded');}
    
    $(document).ready(() => {
        
        $(document).keypress(()=>{
            $('#welcome-message').remove();
            $(document).off('keypress');
            initializeGame();
        });

    });
    </script>
   
  @endsection

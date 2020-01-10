import Level from './level';

class City extends Level {
    constructor(player, possibleChoices, stage, images, music, destinations) {
        super(player, possibleChoices, stage, images, music);
        this.destinations = destinations;
    }

    initialize() {
        this.displayBackground(this.images[0]);
        $dialogue.empty();
        // play music
        playMusic(this.music[0], .5, 1500);
        this.displayDestinations();
    }

    displayDestinations() {
        this.destinations.forEach((destination) => {
            $('body').append(
                `<div class="destination" id="destination-${destination.id}">
                <div class="destination-display" id="destination-display-${destination.id}" style="display:none;">${destination.id}</div>
                <div class="marker"><i class="fa fa-map-marker"></i></div>
                </div>`
            );

            $(`#destination-${destination.id}`).hover(function() {
                $(`#destination-display-${destination.id}`).slideToggle('fast', function(){
                    $(`#destination-${destination.id}`).find('.marker').toggle();
                });
            });

            $(document).on('click', `#destination-${destination.id}`, function(e) {
                // Call leave, running the initialize function of the destination clicked
                if (destination.id === 'bar') {
                    $dialogue.empty();
                    this.leave(destination.handler);
                    // destination.handler();
                } else {
                    
                    displayDialogue(
                        `Better make your way to The Bar. Asha is waiting there.`
                    );
                }
            }.bind(this));
        });
    }

    removeDestinations() {
        this.destinations.forEach((destination) => {
            $('#destination-' + destination.id).fadeOut(300);
            $('#destination-' + destination.id).remove();
            // Remove associated handlers from DOM
            $(document).off('click', '#' + destination.id, destination.handler);
        });

    }
    
    leave(cb) {
        
        // Fade out of the audio
        killAllAudio();
        // Remove destinations
        this.removeDestinations();
        // Fade out background image
        $background.fadeOut(1000, cb);
        // Remove any choices from the screen
        // Remove map marker destinations from the screen
        // Run callback for the next place to go
    }
}

export default City;
import City from '../city';
import barChoices from '../choices/bar-choices';

const homeCity = new City(
    this.player, 
    barChoices, 
    'room-1', 
    ['city'], 
    ['audio-city'], 
    [
        {
            id: 'bar',
            handler: function() {
                bar.initialize();
            }
        }, 
        {
            id: 'cafe',
            handler: function() {
                displayMessage(); 
            }
        }, 
        {
            id: 'store',
            handler: function() {
                displayMessage();
            }
        },    
        {
            id: 'hotel',
            handler: function() {
                displayMessage();
            }
        }, 
        {
            id: 'home',
            handler: function() {
                displayMessage();
            }
        }, 
        {
            id: 'the-cell',
            handler: function() {
                displayMessage(); 
            }
        }
    ]
);  

export default homeCity;

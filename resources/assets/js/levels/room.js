import Level from '../level';
import roomChoices from '../choices/room-choices';
import player from '../characters/player';

const room = new Level(
    player,
    roomChoices, 
    'room-1',
    ['window', 'room-inner', 'room-hallway']
);

export default room;
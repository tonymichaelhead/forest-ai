import Level from '../level';
import player from '../characters/player';
import barChoices from '../choices/bar-choices';

const bar = new Level(
    player,
    barChoices,
    'bar-1',
    ['bar', 'bartender'],
    ['audio-bar'],
);

export default bar;
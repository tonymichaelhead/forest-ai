
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Level from './level';
import City from './city';
import Battle from './battle';
import Character from './character';
import Dialogue from './dialogue';

import room from './levels/room';
import bar from './levels/bar';

import homeCity from './cities/home-city';

import cyberPunkBattle from './battles/cyber-punk-battle';

import player from './characters/player';
import cyberPunk from './characters/cyber-punk';





// import roomChoices from './choices/room-choices';
import barChoices from './choices/bar-choices';

import { typeWriter,
         centeredTypeWriter, 
         displayCenteredDialogue, 
         displayDialogue, 
         displayDialogueConfirm, 
         displayCharacterDialogue, 
         displayCharacterDialogueConfirm,
         displayBattleWinnings            } from './utils/text';

import { fadeInAsync,
         fadeOutAsync } from './utils/animation';
                                    
import { attackDidHit } from './utils/probability';
import { randomizeDamage } from './utils/probability';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Classes
global.Level = Level;
global.City = City;
global.Battle = Battle;
global.Character = Character;
global.Dialogue = Dialogue;

// Characters
global.player = player;
global.cyberPunk = cyberPunk;

// Cities
global.homeCity = homeCity;

// Levels
global.room = room;
global.bar = bar;

global.cyberPunkBattle = cyberPunkBattle;

// Choices
// global.roomChoices = roomChoices;
global.barchoices = barChoices;

// Utilities
global.typeWriter = typeWriter;
global.displayDialogue = displayDialogue;
global.centeredTypeWriter = centeredTypeWriter;
global.displayCenteredDialogue = displayCenteredDialogue;
global.displayDialogueConfirm = displayDialogueConfirm;
global.displayCharacterDialogue = displayCharacterDialogue;
global.displayCharacterDialogueConfirm = displayCharacterDialogueConfirm;
global.displayBattleWinnings = displayBattleWinnings;

global.fadeInAsync = fadeInAsync;
global.fadeOutAsync = fadeOutAsync;

global.attackDidHit = attackDidHit;
global.randomizeDamage = randomizeDamage;


// For dev purposes

import dialoguePunkOne from './dialogue/dialogue-punk-one';
global.dialoguePunkOne = dialoguePunkOne;



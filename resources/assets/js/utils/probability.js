function attackDidHit(chance) { // Takes a number between 0 and 1
    return !!chance && Math.random() <= chance;
}

function randomizeDamage(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

export { 
    attackDidHit, 
    randomizeDamage,
};
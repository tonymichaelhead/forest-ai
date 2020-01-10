function fadeInAsync(el, interval) {
    
    return new Promise(resolve => {
        el.fadeIn(interval, function() {
            resolve();
        });
    });
}

function fadeOutAsync(el, interval) {
    console.log('fadeout async invoked');
    return new Promise(resolve => {
        el.fadeOut(interval, function() {
            resolve();
        });
    });
}

export { 
    fadeInAsync,
    fadeOutAsync    
};

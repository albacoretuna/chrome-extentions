console.log('inline script is loaded');

setTimeout(function() {
    /* Example: Send data to your Chrome extension*/
    document.dispatchEvent(new CustomEvent('isFrosmoDevOn', {
            devel: frosmo.easy.DEVEL // Some variable from Gmail.
        }));
}, 0);

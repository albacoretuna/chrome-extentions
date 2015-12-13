
// this is the reporter function, sending globals from current page to our content script
setTimeout(function() {
    // Example: Send data to your Chrome extension
    document.dispatchEvent(new CustomEvent('myCustomEvent', {
            detail: frosmo.easy.DEVEL 
        }));
        
}, 0);



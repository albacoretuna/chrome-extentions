
// this is the reporter function, sending globals from current page to our content script
setTimeout(function() {
console.log('inline script is loaded and frosmo.easy is: '+ frosmo.easy.DEVEL);
    // Example: Send data to your Chrome extension
    document.dispatchEvent(new CustomEvent('myCustomEvent', {
            detail: frosmo.easy.DEVEL 
        }));
        
}, 0);



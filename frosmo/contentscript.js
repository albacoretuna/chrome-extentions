// create an script tag and attach it to the page, it runs in the scope of the current page
var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

// Event listener, to recieve global vars from current page (the webpage we have opened now) see SO http://bit.ly/1mixVDw
document.addEventListener('myCustomEvent', function(e) {
    // e.detail contains the transferred data (can be anything, ranging
    // from JavaScript objects to strings).
    // Do something, for example:
    console.log('e.detail is' + e.detail);
});


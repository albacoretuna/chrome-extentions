var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

// Event listener see SO http://bit.ly/1mixVDw
document.addEventListener('isFrosmoDevOn', function(e) {
    // e.detail contains the transferred data (can be anything, ranging
    // from JavaScript objects to strings).
    // Do something, for example:
    console.log(e.devel);
});

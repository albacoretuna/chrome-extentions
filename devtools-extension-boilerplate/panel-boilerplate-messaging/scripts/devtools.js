// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create("Frosmo Inspector", "toast.png", "panel.html", function(panel) {});

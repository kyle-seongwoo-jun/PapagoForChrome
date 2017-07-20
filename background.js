// A generic onclick callback function.
function genericOnClick(info, tab) {
    var selectedString = info.selectionText;
    console.log("Text Selected : " + selectedString);
}


var id = chrome.contextMenus.create({ 
    "title": "Translate using Papago", 
    "contexts": ["selection"], 
    "onclick": genericOnClick 
});

// chrome.browserAction.onClicked.addListener(function() {
//     chrome.browserAction.setPopup({
//         popup: 'popup.html'
//     }); 
// });

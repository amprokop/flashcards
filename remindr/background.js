chrome.contextMenus.create({"title": "Flsh selected text", "contexts":"selection"});

function onClickHandler(info, tab){
  var postUrl = 'http://localhost:8080/chrome/card?text='+encodeURIComponent('"'+info.selectionText+'"')+'&url='+info.pageUrl;
  debugger;
  chrome.windows.create({"url":postUrl, "type":"popup", "height":300,"width":600, "top": 100, "left":100});
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.browserAction.onClicked.addListener(function(tab) {
  var postUrl = "http://localhost:8080/chrome/";
  chrome.windows.create({"url":postUrl, "type":"popup", "height":300,"width":600, "top": 100, "left":100});
});
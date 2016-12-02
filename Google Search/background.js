
function onRequest(info, tab) {
	var selection = info.selectionText;
//do something with the selection
  var serviceCall = 'https://www.google.com/#q=' + selection;
  chrome.tabs.create({url: serviceCall});
};

chrome.contextMenus.create({
	id: "bing_search",
	title: "Search with Google",
	"contexts":["selection"],
	"onclick" : onRequest
});
// Archive Page extension for Mozilla Firefox for use with archive.today
// Written by John Navas
// 1. Toolbar icon to send current tab to archive.today in new tab
// 2. Page context menu to search archive.today for the page URL
// 3. Link context menu items to Archive or Search with archive.today

// Archive page URL
function doArchivePage(url) {
  chrome.tabs.create({
    url: 'https://archive.today/?run=1&url=' + encodeURIComponent(url)
  });
}

// Listen for toolbar button click
chrome.browserAction.onClicked.addListener(function(tab) {
  doArchivePage(tab.url);
});

// Page context menu: Search for page URL
chrome.contextMenus.create({
  "title": "Search archive.today for page",
  "contexts": ["page"],
  "onclick": mySearch
});

// Link context menu: Archive or Search link
var parentId = chrome.contextMenus.create({
    "title": "Archive",
    "contexts": ["link"]
  },
  function() {
    chrome.contextMenus.create({
      "parentId": parentId,
      "title": "Archive link",
      "contexts": ["link"],
      "onclick": myArchive
    });
    chrome.contextMenus.create({
      "parentId": parentId,
      "title": "Search link",
      "contexts": ["link"],
      "onclick": mySearch
    });
  }
);

// Archive link
function myArchive(info, tab) {
  doArchivePage(info.linkUrl);
}

// Search link
function mySearch(info, tab) {
  var url = info.linkUrl || tab.url;
  chrome.tabs.create({
    url: "https://archive.today/" + url
  });
}

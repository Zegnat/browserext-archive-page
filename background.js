// Archive Page extension for Mozilla Firefox for use with archive.today
// Written by John Navas
// 1. Toolbar icon to send current tab to archive.today in new tab
// 2. Page context menu to search archive.today for the page URL
// 3. Link context menu items to Archive or Search with archive.today
// Options to control activation of new archive.today tabs (SAVED IN LOCAL, NOT SYNC)

// Archive page URL
function doArchivePage(url, act) {
  console.log('doArchivePage act: ' + act); // DEBUG
  chrome.tabs.create({
    url: 'https://archive.today/?run=1&url=' + encodeURIComponent(url),
    active: act
  });
}

// Listen for toolbar button click
chrome.browserAction.onClicked.addListener(function(tab) {
  // get activate option
  chrome.storage.local.get({activateButtonNew: true}, function(result) {
    console.log('activateButtonNew: ' + result.activateButtonNew); // DEBUG
    doArchivePage(tab.url, result.activateButtonNew);
  });
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
  // get activate option
  chrome.storage.local.get({activateArchiveNew: true}, function(result) {
    console.log('activateArchiveNew: ' + result.activateArchiveNew); // DEBUG
    doArchivePage(info.linkUrl, result.activateArchiveNew);
  });
}

// Search link
function mySearch(info, tab) {
  console.log('info.linkUrl: ' + info.linkUrl); // DEBUG
  console.log('tab.url: ' + tab.url); // DEBUG
  if (info.linkUrl) {
    // get activate option
    chrome.storage.local.get({activateSearchNew: true}, function(result) {
      console.log('activateSearchNew: ' + result.activateSearchNew); // DEBUG
      chrome.tabs.create({
        url: "https://archive.today/" + info.linkUrl,
        active: result.activateSearchNew
      });
    });
  } else {
    // get activate option
    chrome.storage.local.get({activatePageNew: true}, function(result) {
      console.log('activatePageNew: ' + result.activatePageNew); // DEBUG
      chrome.tabs.create({
        url: "https://archive.today/" + tab.url,
        active: result.activatePageNew
      });
    });
  }
}

// END

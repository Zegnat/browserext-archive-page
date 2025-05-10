// Saves options to firefox.storage (LOCAL, NOT SYNC)
function save_options() {
  var bButtonNew = document.getElementById('cbButtonNew').checked;
  var bPageNew = document.getElementById('cbPageNew').checked;
  var bArchiveNew = document.getElementById('cbArchiveNew').checked;
  var bSearchNew = document.getElementById('cbSearchNew').checked;
  chrome.storage.local.set({
    activateButtonNew: bButtonNew,
    activatePageNew: bPageNew,
    activateArchiveNew: bArchiveNew,
    activateSearchNew: bSearchNew
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in firefox.storage (LOCAL, NOT SYNC)
function restore_options() {
  // Use default value true for all activate options.
  chrome.storage.local.get({
    activateButtonNew: true,
    activatePageNew: true,
    activateArchiveNew: true,
    activateSearchNew: true
  }, function(items) {
    document.getElementById('cbButtonNew').checked = items.activateButtonNew;
    document.getElementById('cbPageNew').checked = items.activatePageNew;
    document.getElementById('cbArchiveNew').checked = items.activateArchiveNew;
    document.getElementById('cbSearchNew').checked = items.activateSearchNew;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('bSave').addEventListener('click', save_options);
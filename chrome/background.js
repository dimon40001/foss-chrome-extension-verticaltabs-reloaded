init()

function init() {
  initCounter();
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'initCounter') {
      initCounter();
    }
  });
}

function initCounter() {
  chrome.storage.sync.get({ counter: 'off' }, function (result) {
    var counter = result['counter'];
    if (counter == 'on') {
      setTabsCounter();
      updateCounter();
    } else if (counter = 'off') {
      removeTabsCounter();
    }
  });
}

function setTabsCounter() {
  chrome.tabs.onAttached.addListener(updateCounter);
  chrome.tabs.onCreated.addListener(updateCounter);
  chrome.tabs.onDetached.addListener(updateCounter);
  chrome.tabs.onRemoved.addListener(updateCounter);
  chrome.windows.onFocusChanged.addListener(updateCounter);
}
function removeTabsCounter() {
  setBadgeText('');
  chrome.tabs.onAttached.removeListener(updateCounter);
  chrome.tabs.onCreated.removeListener(updateCounter);
  chrome.tabs.onDetached.removeListener(updateCounter);
  chrome.tabs.onRemoved.removeListener(updateCounter);
  chrome.windows.onFocusChanged.removeListener(updateCounter);
}
function updateCounter() {
  chrome.storage.sync.get({ counter: 'off' }, function (result) {
    if (result['counter'] != 'on')
      return;
  });

chrome.tabs.query({ currentWindow: true }, function(tabs) {
  let badgeColor = { color: [104, 137, 203, 255] };
  if (tabs.length > 50) {
    badgeColor = { color: [255, 137, 103, 255] };
  } else if (tabs.length > 20) {
    badgeColor = { color: [255, 255, 103, 255] };
  }
  chrome.action.setBadgeBackgroundColor(badgeColor);
  setBadgeText(String(tabs.length));
});

}
function setBadgeText(text) {
  chrome.action.setBadgeText({ text: text });
}

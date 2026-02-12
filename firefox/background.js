init()

function init() {
  initCounter();
  browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'initCounter') {
      initCounter();
    }
  });
}

function initCounter() {
  browser.storage.sync.get({ counter: 'off' }, function (result) {
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
  browser.tabs.onAttached.addListener(updateCounter);
  browser.tabs.onCreated.addListener(updateCounter);
  browser.tabs.onDetached.addListener(updateCounter);
  browser.tabs.onRemoved.addListener(updateCounter);
  browser.windows.onFocusChanged.addListener(updateCounter);
}
function removeTabsCounter() {
  setBadgeText('');
  browser.tabs.onAttached.removeListener(updateCounter);
  browser.tabs.onCreated.removeListener(updateCounter);
  browser.tabs.onDetached.removeListener(updateCounter);
  browser.tabs.onRemoved.removeListener(updateCounter);
  browser.windows.onFocusChanged.removeListener(updateCounter);
}
function updateCounter() {
  chrome.storage.sync.get({ counter: 'off' }, function (result) {
    if (result['counter'] != 'on')
      return;
    }
    browser.tabs.query( {currentWindow: true}, function (tabs) {
      let badgeColor = { color: [104, 137, 203, 255] };
      if (tabs.length > 50) {
        badgeColor = { color: [255, 137, 103, 255] };
      } else if (tabs.length > 20) {
        badgeColor = { color: [255, 255, 103, 255] };
      }
      browser.action.setBadgeBackgroundColor(badgeColor);
      setBadgeText(String(tabs.length));
    }
    );
  });
}

function setBadgeText(text) {
  browser.action.setBadgeText({ text: text });
}

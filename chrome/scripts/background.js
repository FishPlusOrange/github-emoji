chrome.tabs.onUpdated.addListener((tabId, change) => {
  change.status === 'complete' && chrome.pageAction.show(tabId)
})

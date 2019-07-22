chrome.tabs.onUpdated.addListener((tabId, change) => {
  change.status === 'complete' && chrome.pageAction.show(tabId)
})

const hidePopup = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const curTab = tabs[0],
      tabId = curTab.id
    console.log(tabId)
  })
}

let currentTabId: number;

const checkForPRPage = (tabId: number) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].url?.includes("github.com")) {
      const jsFiles = chrome.runtime.getManifest()?.content_scripts?.[0].js;
      console.log("jsFiles : ", jsFiles);
      jsFiles &&
        chrome.scripting
          .executeScript({
            target: { tabId },
            files: jsFiles,
          })
          .then(() => {
            console.log("injected from checkForPRPage");
          });
    }
  });
};

chrome.tabs.onActivated.addListener(function (activeInfo) {
  console.log("tabs.onActivated");
  currentTabId = activeInfo.tabId;
  checkForPRPage(currentTabId);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log("tabs.onUpdated");
  if (tabId === currentTabId && changeInfo.status === "complete") {
    checkForPRPage(tabId);
  }
});

chrome.webNavigation.onCommitted.addListener(function (details) {
  console.log("webNavigation.onCommitted");
  if (details.tabId === currentTabId && details.url.includes("github.com")) {
    checkForPRPage(details.tabId);
  }
});

chrome.webRequest.onCompleted.addListener(
  (details) => {
    console.log("webRequest.onCompleted");
    currentTabId = details.tabId;
    checkForPRPage(details.tabId);
  },
  {
    urls: ["*://*.github.com/*"],
  }
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message : ", message);
  if (message.type === "elementRemoved") {
    console.log("elementRemoved");
    checkForPRPage(currentTabId);
  }
});

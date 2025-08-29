// Background service worker
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

// Example: handle messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_DATA") {
    // Handle the message
    sendResponse({ data: "Hello from background!" });
  }
});

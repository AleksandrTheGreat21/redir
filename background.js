chrome.action.onClicked.addListener((tab) => {
  const currentUrl = tab.url;
  const chatGPTUrl = `https://chatgpt.com?url=${encodeURIComponent(currentUrl)}`;
  chrome.tabs.create({ url: chatGPTUrl });
});

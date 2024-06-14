document.getElementById('transferUrl').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentUrl = tabs[0].url;
    const chatGPTUrl = `https://chatgpt.com?url=${encodeURIComponent(currentUrl)}`;
    chrome.tabs.create({ url: chatGPTUrl });
  });
});

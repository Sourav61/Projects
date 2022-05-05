// alert("Hi!");

function MyGenerClick(info, tab){
    console.log("Clicked on page:", info, tab);
};

function MyImageClick(info, tab){
    console.log("Clicked on image", info, tab);
    chrome.windows.create({
      "url": "https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
      "type": "popup"
    });
};

function MyQuoteClick(info, tab){
  console.log("Clicked on Quote", info, tab);
  chrome.windows.create({
    "url": "https://facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
    "type": "popup"
  });
}

// chrome.contextMenus.create({
//     "title": "Share",
//     "contexts": ["page"],
//     "onclick": MyGenerClick
// });

chrome.contextMenus.create({
    "title": "Share Image",
    "contexts": ["image"],
    "onclick": MyImageClick
});

chrome.contextMenus.create({
    "title": "Share Quotes",
    "contexts": ["selection"],
    "onclick": MyQuoteClick
});

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
  console.log("message", msg);
  sendResponse({"text": "Received the Links"});


})

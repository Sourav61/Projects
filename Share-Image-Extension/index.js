console.log("My extension");
// alert("Loaded");

// var dom = document.getElementById("rso");
// console.log("The dom is", dom.innerHTML);
var links = document.getElementsByTagName("a");

var formatted_links = [];

for(let i=0;i<links.length;i++){
  let title = links[i].text;
  let href = links[i].href;

  // console.log("Link is: ",title);

  if(title !== "" && href !== ""){
    formatted_links.push({title: title, href: href});
  }
}

chrome.runtime.sendMessage({
  "action": "print_messages",
  "data": formatted_links
}, res => {
  console.log(res);
})

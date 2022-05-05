function downloadVideo() {
  console.log("download this video");
  var dl = document.getElementbyId("videoDownloadDropdown");
  if (dl.className.indexOf("shown") > -1{
    dl.className = dl.className.replace("shown", "");
  }else {
  dl.className += "shown"
  }

  // var data = {"type": "download clicked"};
  // windows.postMessage(data, "*")
}

function downloadURI(event) {
  event.preventDefault();
  event.stopPropagation();

  var url = event.currentTarget.getAttribute("href");
  var name = document.getElementsbyTagName("title")[0].innerText;
  var datatype = event.currentTarget.getAttribute("data-type");
  var data = {url: url, name: name, sender: "YTDL", type: "datatype"};

  window.postMessage(data, "*");

  var dl = document.getElementbyId("videoDownloadDropdown");
  if (dl.className.indexOf("shown") > -1{
    dl.className = dl.className.replace("shown", "");
  }else {
  dl.className += "shown"
  }

  return false;
}

  // var videoUrl = window.ytplayer.config.args.video_id;
  // var videoUrls = "https://www.youtube.com/watch?v=" + videoUrl;
  // console.log(videoUrls);
  var videoUrls = window.ytplayer.config.args.url_encoded_fmt_stream_map.split(',').map(function(item){
    return item.split("&").reduce(function(pre, cur){
      // console.log(pre, cur);
      cur = cur.split("=");

      return Object.assign(pre, {[cur[0]]: decodeURIComponent(cur[1])}),
    }, {});
  });

  console.log("Our extension has loaded");

  var container = document.getElementbyId("menu-container");
  var btn = document.createElement("button");
  btn.className = "style-scope ytd-menu-renderer style-default size-default";
  btn.setAttribute("role", "button");
  btn.id = "downloadVideo"
  btn.innerText = "Download";

  var dropdown = documemnt.createElement("div");
  dropdown.id = "videoDownloadDropdown";
  container.appendChild("dropdown")

  var dropList = document.createElement("ul");
  dropdown.appendChild(dropList);

  container.appendChild(btn);

  for(i in videoUrls){

    var item = document.createElement("a");
    var ext = videoUrls[i]["type"].split("/")[1].split(";")[0];
    item.innerText = videoUrls[i]["quality"] + "(" + ext + ")";

    item.setAttribute("href", videoUrls[i]["url"]);
    item.setAttribute("target", "_blank");
    item.setAttribute("data-type", videoUrls[i]["type"]);
    item.addEventListener("click", downloadURI);
    dropList.appendChild(item);
  }

  btn.addEventListener("click", downloadVideo)

const deluxe_homepageList = [
    {
    url: "https://inviewdev.cafe24.com/skin-skin11/",
    img: "skin11",
    ver: "DELUXE",
    name: "템플릿04",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin13/",
    img: "skin13",
    ver: "DELUXE",
    name: "템플릿05",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin14/",
    img: "skin14",
    ver: "DELUXE",
    name: "템플릿06",
    }
];

function deluxe_setList(deluxe_pfFrame) {
  for (let i = 0; i < deluxe_homepageList.length; i++) {
    deluxe_pfFrame.innerHTML +=
      "<li><a href=" +
      deluxe_homepageList[i].url +' target="_blank"><img src="./img/web_portpolio/' +
      deluxe_homepageList[i].img +'.png" alt="' +
      deluxe_homepageList[i].name +' 섬네일" /></a>' +
      '<a href="' +
      deluxe_homepageList[i].url +
      '" target="_blank" class="portpolio_info"><h4>' +
      deluxe_homepageList[i].ver +
      "</h4><span>" +
      deluxe_homepageList[i].name +
      "</span></li>";
    +"</a>";
  }
}

const deluxe_pfFrames = document.querySelectorAll(".deluxe_box");
deluxe_pfFrames.forEach(deluxe_pfFrame => deluxe_setList(deluxe_pfFrame));

$(function () {
  $(".deluxe_box li").slice(0, 20).show(); // 초기갯수
});
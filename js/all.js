const homepageList = [
    {
    url: "https://inviewdev.cafe24.com/skin-skin7/",
    img: "skin7",
    ver: "STANDARD",
    name: "템플릿01",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin9/",
    img: "skin9",
    ver: "STANDARD",
    name: "템플릿02",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin10/",
    img: "skin10",
    ver: "STANDARD",
    name: "템플릿03",
    },
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
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin5/",
    img: "skin5",
    ver: "PREMIUM",
    name: "템플릿07",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin15/",
    img: "skin15",
    ver: "PREMIUM",
    name: "템플릿08",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin16/",
    img: "skin16",
    ver: "DELUXE",
    name: "템플릿09",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin17/",
    img: "skin17",
    ver: "DELUXE + SHOP",
    name: "템플릿10",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin19/",
    img: "skin19",
    ver: "DELUXE",
    name: "템플릿11",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin20/",
    img: "skin20",
    ver: "STANDARD",
    name: "템플릿12",
    },
    {
    url: "https://inviewdev.cafe24.com/skin-skin21/",
    img: "skin21",
    ver: "DELUXE",
    name: "템플릿13",
    },
];

function setList(pfFrame) {
  for (let i = 0; i < homepageList.length; i++) {
    pfFrame.innerHTML +=
      "<li><a href=" +
      homepageList[i].url +' target="_blank"><img src="./img/web_portpolio/' +
      homepageList[i].img +'.png" alt="' +
      homepageList[i].name +' 섬네일" /></a>' +
      '<a href="' +
      homepageList[i].url +
      '" target="_blank" class="portpolio_info"><h4>' +
      homepageList[i].ver +
      "</h4><span>" +
      homepageList[i].name +
      "</span></li>";
    +"</a>";
  }
}

const pfFrames = document.querySelectorAll(".all");
pfFrames.forEach(pfFrame => setList(pfFrame));

$(function () {
  $(".all li").slice(0, 20).show(); // 초기갯수
});
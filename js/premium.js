const prem_homepageList = [
    {
    url: "https://inviewdev.cafe24.com/skin-skin5/",
    img: "skin5",
    ver: "PREMIUM",
    name: "템플릿07",
    }
];

function prem_setList(prem_pfFrame) {
  for (let i = 0; i < prem_homepageList.length; i++) {
    prem_pfFrame.innerHTML +=
      "<li><a href=" +
      prem_homepageList[i].url +' target="_blank"><img src="./img/web_portpolio/' +
      prem_homepageList[i].img +'.png" alt="' +
      prem_homepageList[i].name +' 섬네일" /></a>' +
      '<a href="' +
      prem_homepageList[i].url +
      '" target="_blank" class="portpolio_info"><h4>' +
      prem_homepageList[i].ver +
      "</h4><span>" +
      prem_homepageList[i].name +
      "</span></li>";
    +"</a>";
  }
}

const prem_pfFrames = document.querySelectorAll(".premium_box");
prem_pfFrames.forEach(prem_pfFrame => prem_setList(prem_pfFrame));

$(function () {
  $(".premium_box li").slice(0, 20).show(); // 초기갯수
});
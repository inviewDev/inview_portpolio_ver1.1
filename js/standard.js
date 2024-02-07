const stan_homepageList = [
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
];

function stan_setList(stan_pfFrame) {
  for (let i = 0; i < stan_homepageList.length; i++) {
    stan_pfFrame.innerHTML +=
      "<li><a href=" +
      stan_homepageList[i].url +' target="_blank"><img src="./img/web_portpolio/' +
      stan_homepageList[i].img +'.png" alt="' +
      stan_homepageList[i].name +' 섬네일" /></a>' +
      '<a href="' +
      stan_homepageList[i].url +
      '" target="_blank" class="portpolio_info"><h4>' +
      stan_homepageList[i].ver +
      "</h4><span>" +
      stan_homepageList[i].name +
      "</span></li>";
    +"</a>";
  }
}

const stan_pfFrames = document.querySelectorAll(".standard_box");
stan_pfFrames.forEach(stan_pfFrame => stan_setList(stan_pfFrame));

$(function () {
  $(".standard_box li").slice(0, 20).show(); // 초기갯수
});
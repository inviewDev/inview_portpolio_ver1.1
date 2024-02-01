// ScrollMagic
let controller = new ScrollMagic.Controller();
// GSAP
let galley = gsap.timeline();
let xPos = 0;

galley.set('.ring_box', { rotationY: 280, cursor: 'grab' }) //set initial rotationY so the parallax jump happens off screen
  .set('.cont_box', { // apply transform rotations to each image
    rotateY: (i) => i * -24,
    transformOrigin: '50% 50% 1200px',
    z: -1200,
    backgroundPosition: (i) => getBgPos(i),
    backfaceVisibility: 'hidden'
  })
  .from('.cont_box', {
    duration: 1,
    y: 200,
    opacity: 0,
    stagger: 0.1,
    ease: 'expo'
  })
  .add(() => {
    $('.cont_box').on('mouseenter', (e) => {
      let current = e.currentTarget;
      gsap.to('.cont_box', { opacity: (i, t) => (t == current) ? 1 : 0.5, ease: 'power3' })
    })
    $('.cont_box').on('mouseleave', (e) => {
      gsap.to('.cont_box', { opacity: 1, ease: 'power2.inOut' })
    })
  }, '-=0.5')

function dragStart(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set('.ring_box', { cursor: 'grabbing' })
  $(window).on('mousemove touchmove', drag);
}
function drag(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;
  gsap.to('.ring_box', {
    rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
    onUpdate: () => { gsap.set('.cont_box', { backgroundPosition: (i) => getBgPos(i) }) }
  });
  xPos = Math.round(e.clientX);
}
function dragEnd(e) {
  $(window).off('mousemove touchmove', drag);
  gsap.set('.ring_box', { cursor: 'grab' });
}
function getBgPos(i) { //returns the background-position string_box to create parallax movement in each image
  return (100 - gsap.utils.wrap(0, 360, gsap.getProperty('.ring_box', 'rotationY') - 180 - i * 36) / 360 * 500) + 'px 0px';
}
$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);

new ScrollMagic.Scene({
  triggerElement: '.ring_cont_slide_box', // 애니메이션을 트리거할 요소를 지정합니다.
  offset: 10, // 트리거 지점을 조정합니다. 필요에 따라 값 변경이 가능합니다.
  reverse: false // 스크롤이 다시 올라갈 때 애니메이션을 반복하지 않습니다.
})
  .setTween(galley) // GSAP 타임라인을 씬에 연결합니다.
  .addTo(controller); // 씬을 컨트롤러에 추가합니다.

// button event
$('.button--bubble').each(function () {
  var $circlesTopLeft = $(this).parent().find('.circle.top-left');
  var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

  var tl = new TimelineLite();
  var tl2 = new TimelineLite();

  var btTl = new TimelineLite({ paused: true });

  tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
  tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
  tl.to($circlesTopLeft.eq(1), 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
  tl.to($circlesTopLeft.eq(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
  tl.to($circlesTopLeft.eq(0), 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
  tl.to($circlesTopLeft.eq(1), 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
  tl.to($circlesTopLeft.eq(2), 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

  var tlBt1 = new TimelineLite();
  var tlBt2 = new TimelineLite();

  tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
  tlBt1.add(tl);

  tl2.set($circlesBottomRight, { x: 0, y: 0 });
  tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) });
  tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
  tl2.to($circlesBottomRight.eq(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
  tl2.to($circlesBottomRight.eq(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
  tl2.to($circlesBottomRight.eq(0), 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
  tl2.to($circlesBottomRight.eq(1), 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
  tl2.to($circlesBottomRight.eq(2), 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');

  tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
  tlBt2.add(tl2);

  btTl.add(tlBt1);
  btTl.to($(this).parent().find('.button.effect-button'), 0.8, { scaleY: 1.1 }, 0.1);
  btTl.add(tlBt2, 0.2);
  btTl.to($(this).parent().find('.button.effect-button'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);

  btTl.timeScale(2.6);

  $(this).on('mouseover', function () {
    btTl.restart();
  });
});

$(document).ready(function () {
  // aos load event
  AOS.init({
    easing: 'ease-in-out',
    duration: 600
  });
  // top vis
  var top_card = $(".c_card");
  $(".c_cont").on("mousemove", function (t) {
      var e = -($(window).innerWidth() / 2 - t.pageX) / 30,
          n = ($(window).innerHeight() / 2 - t.pageY) / 10;
      top_card.attr("style", "transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-webkit-transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-moz-transform: rotateY(" + e + "deg) rotateX(" + n + "deg)")
  })
})
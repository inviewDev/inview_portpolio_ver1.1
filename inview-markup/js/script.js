const n = 10;

gsap.timeline()
for (let i=0; i<n; i++){ 
  
  let b = document.createElement('div');

  gsap.set(b, {
    left:'50%',
  	top:'50%',
    x:'-50%',
    y:'-50%',
    z:1000,
  	width:460,
	  height:700,
  });
  
  gsap.fromTo(b, {
    scaleY:0,
    // opacity:0.7,
    zIndex:()=>(i<n/2)?-i:i,
    rotationY:90+i/n*220,
    transformOrigin:String("50% 50% -1260%")
  },{
    scaleY:1,
    duration:1,
    delay:1-0.5*(i/n),
    ease:'elastic'
  })
  
  b.onmouseenter = (e)=>{ gsap.to(b, {duration:0.3, rotationX:-14, y:'-130%', ease:'back.out(6)'}); }  
  b.onmouseleave = (e)=>{ gsap.to(b, {duration:0.4, rotationX:0, y:'-50%'}); }
}

window.onmousemove = (e)=>{
  gsap.to('.box', {duration:0.6, rotationY:(i)=>45+i/n*220+90*(e.clientX/window.innerWidth) });
}
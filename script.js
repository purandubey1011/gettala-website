let overlay = document.querySelector('#full-scr-overlay')
let menu = document.querySelector('.ri-menu-2-line')

let flag = 0;
menu.addEventListener('click',()=>{
    if(flag==0){
        overlay.style.top="0%"
        document.querySelector('#nav').style.color="#222"
        document.querySelector('#nav').style.transition="all .4s ease-in-out;"
        flag = 1
    }else if(flag==1){
        overlay.style.top="-100%"
        document.querySelector('#nav').style.color="#dadada"
        document.querySelector('#nav').style.transition="all .4s ease-in-out;"
        flag=0
    }
})
    
let slide1 = document.querySelectorAll('#page6 .slide1-of-h1 h1')
slide1.forEach((elem)=>{
    gsap.to(elem,{
        transform:"translateX(-93%)",
        ease: 'linear',
        scrollTrigger:{
            trigger:"#page6",
            scrub:4,
        }
    })
})
let slide2 = document.querySelectorAll('#page6 .slide2-of-h1 h1')
slide2.forEach((elem)=>{
    gsap.to(elem,{
        transform:"translateX(0%)",
        ease: 'linear',
        scrollTrigger:{
            trigger:"#page6",
            scrub:4,
        }
    })
})

yes.addEventListener("mouseenter",()=>{
    imgyes.style.opacity=1
    console.log('hey')
})
yes.addEventListener("mouseleave",()=>{
    imgyes.style.opacity=0
    console.log('hey')
})
yes.addEventListener("mousemove",(dets)=>{
    imgyes.style.left=`${dets.x-300}px`
    imgyes.style.top=`${dets.y-450}px`
})

let no = document.querySelector('#no')
let imgno = document.querySelector("#imgno")
no.addEventListener("mouseenter",()=>{
    imgno.style.opacity=1
    console.log('hey')
})
no.addEventListener("mouseleave",()=>{
    imgno.style.opacity=0
    console.log('hey')
})
no.addEventListener("mousemove",(dets)=>{
    imgno.style.left=`${dets.x-1050}px`
    imgno.style.top=`${dets.y-450}px`
})



// gsap start here

let tl = gsap.timeline()

tl.from("#nav",{
    y:-20,
    duration:.8,
    opacity:0,
    delay:.2,
    ease: "expo.inOut"
})
.from("#heading-tala",{
    y:30,
    opacity:0,
    delay:-.5   ,
    duration:1.3,
    ease: "expo.inOut"
})
.from("#page1-text b",{
    y:30,
    opacity:0,
    delay:-1.2,
    duration:1.4,
    ease: "expo.inOut"
})
.from("#page1-r-txt p",{
    y:30,
    // opacity:0
    stagger: .1,
    delay:-.7,
    opacity:0
})

let tl2 = gsap.timeline()

tl2.to("#page2 img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page2 img",
        scrub:3,
        start:"top 70%",
        end:"top 15%"
    }
})

let tl3 = gsap.timeline()

tl3.from("#page3 p",{
    opacity:0,
    y:10,
    duration:3,
    rotateX:90,
    scrollTrigger:{
        trigger:"#page3 p",
        scroller:"body",
        // markers:true,
        start:"top 80%",        
        end:"top 70%",
        stagger:.6,  
        scrub:4
    },
})

gsap.to('#page4-top-prt', {
    scrollTrigger: {
      trigger: '#page4-top-prt',
      scroller: 'body',
    //   markers: true,
      start: 'top 48%',
    },
    opacity: 1,
    duration:1,
    onStart: function () {
      $(document).ready(function () {
        $('#page4-top-prt h1').textillate({ in: { effect: 'fadeInUp' } });
      })
    },
  })


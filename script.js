var tl = gsap.timeline();

tl
.from("#top-banner", {
    opacity:0,
    y:-150,
    duration:2
})

// .from("#nav", {
//     opacity:0,
//     y:-100,
//     duration:4
// })

.from("#nav", {
    opacity:0,
    x:-400,
    duration:1,
    // stagger:0.5,
})

.from("#nav-logo", {
    opacity:0,
    x:-100,
    duration:.5
})

.from("#menu-section h4 ", {
    opacity:0,
    y:200,
    duration:1,
    stagger:0.3
})

.from("#menu-section i ", {
  opacity:0,
  y:200,
  duration: 1,
  stagger:0.3
})


.from("#box1-center", {
    opacity:0,
    // x:-400,
    duration:1,
   scale:0
})

.from("#center-section h1", {
    opacity:0,
    y: -100,
    scale:3,
    duration:1.2
})



.from("#center-section video", {
    opacity:0,
    y:200,
    duration:1.2
})

.from(["#box2-left","#cs-img1"], {
    opacity:0,
    // x:-400,
    duration:1.2,
    scale:0
})


.from(["#box3-right","#cs-img2"], {
    opacity:0,
    // x:400,
    duration:1.2,
    scale:0,
})

gsap.from("#page-2",{
  // scale:0,
  opacity:0,
  duration:2,
  // delay:1,
  // rotate:360,
  //  x:-500,
 
  scrollTrigger:{
      trigger:"#page-2",
      scroller:"body",
      // markers:true,p2-left
      start:"top 45%",
      end:"top 15%",
      scrub:3
  }
})

gsap.from("#page-2 #p2-left",{
    // scale:0,
    opacity:0,
    duration:2,
    // delay:1,
    // rotate:360,
     x:-500,
    
    scrollTrigger:{
        trigger:"#page-2 #p2-left",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 15%",
        scrub:3
    }
  })

  gsap.from("#page-2 #p2-right",{
    // scale:0,
    opacity:0,
    duration:2,
    // delay:1,
    // rotate:360,
     x:500,
     
    scrollTrigger:{
        trigger:"#page-2 #p2-right",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 15%",
        scrub:3
    }
  })

  gsap.from("#page-3",{
    // scale:0,
    opacity:0,
    duration:2,
    // delay:1,
    // rotate:360,
     x:500,
    
    scrollTrigger:{
        trigger:"#page-3",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 15%",
        scrub:3
    }
  })

  gsap.from("#page-4",{
    scale:0,
    opacity:0,
    duration:3,
    // delay:1,
    // rotate:360,
    //  x:500,
    
    scrollTrigger:{
        trigger:"#page-4",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 50%",
        scrub:3
    }
  })

  gsap.from(" #p5-left",{
    // scale:0,
    opacity:0,
    duration:3,
    // delay:1,
    // rotate:360,
     y:500,
    
    scrollTrigger:{
        trigger:"#p5-left",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 55%",
        scrub:3
    }
  })

  gsap.from(" #p5-right",{
    // scale:0,
    opacity:0,
    duration:3,
    // delay:1,
    // rotate:360,
     y:500,
    
    scrollTrigger:{
        trigger:" #p5-right",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 55%",
        scrub:3
    }
  })

  gsap.from(" #page-6",{
    // scale:0,
    opacity:0,
    duration:3,
    // delay:1,
    // rotate:360,
    //  y:500,
    
    scrollTrigger:{
        trigger:" #page-6",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
  })

  gsap.from(" #page-7",{
    scale:0,
    opacity:0,
    duration:3,
    // delay:1,
    // rotate:360,
    //  y:500,
    
    scrollTrigger:{
        trigger:" #page-7",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:3,
    }
  })

  gsap.from(" #page-8",{
    // scale:0,
    opacity:0,
    duration:3,
    // delay:1,
    // rotate:360,
    //  y:-500,
    
    scrollTrigger:{
        trigger:" #page-8",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:3,
    }
  })

  gsap.from(" #page-9",{
    scale:0,
    opacity:0,
    duration:1,
    // delay:1,
    // rotate:360,
    //  y:-500,
    
    scrollTrigger:{
        trigger:" #page-9",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
  })

  gsap.from(" #page-12",{
    // scale:0,
    opacity:0,
    duration:1,
    // delay:1,
    // rotate:360,
    //  x:500,
    
    scrollTrigger:{
        trigger:" #page-12",
        scroller:"body",
        // markers:true,
        start:"top 96%",
        end:"top 75%",
        scrub:3
    }
  })

  gsap.from("#page-11",{
    scale:0,
    opacity:0,
    duration:2,
    delay:3,
    // rotate:360,
   
    
    scrollTrigger:{
        trigger:"#page-11",
        scroller:"body",
        // markers:true,
        start:"top 110%",
        end:"top 80%",
        scrub:3
    }
  })


 
var p2 = gsap.timeline({
    repeat: -1,
});
p2
.to(".p2-l-imgcontainer",{
    width: "100%",
    ease: Expo.easeInOut,
    stagger:1,
    delay:1
   
})
.to(".p2-l-imgcontainer",{
    delay:.1,
    width: "100%",
    ease: Expo.easeInOut,
    stagger:1
})

var p5 = gsap.timeline({
    repeat: -1,
});
p5
.to(".p5-r-imgcontainer",{
    width: "100%",
    ease: Expo.easeInOut,
    stagger:1
})
.to(".p5-r-imgcontainer",{
    delay:.1,
    width: "100%",
    ease: Expo.easeInOut,
    stagger:1
})



// .to(".text h1",{
//     ease: Expo.easeInOut,
//     stagger:2,
//     top:0
// },'b')

// .to(".text h1",{
//     delay:2,
//     ease: Expo.easeInOut,
//     stagger:2,
//     top: "-100%"
// },'b')

// var p3 = gsap.timeline({
//     repeat: -1
// });
// p3
// .to(".imagecontainer",{
//     width: "100%",
//     ease: Expo.easeInOut,
//     stagger:2
// },'a')

// .to(".text h1",{
//     ease: Expo.easeInOut,
//     stagger:2,
//     top:0
// },'a')

// .to(".text h1",{
//     delay:2,
//     ease: Expo.easeInOut,
//     stagger:2,
//     top: "-100%"
// },'a')
    


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    // repeat:-1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  var swiper1 = new Swiper(".mySwipe", {
    spaceBetween: 30,
    centeredSlides: true,
    // repeat:-1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

//   let elems = document.querySelectorAll("img");
//   let current = 1
//   let zIndex = 9;
//   function reset (elem) {
//     setTimeout(function(){
//         elem.style.transform = 'rotate(-85deg)';
//         elem.style.transformOrigin = '100% 0%';
//         elem.style.top = '100%';

//     },800);
//   }
//  let btn = document.querySelector("#btn");
//  btn.addEventListener("click", function(){
//     reset(elems[current - 1]);
//     if(current === elems.length) current = 0;

//     elems[current].style.transform = 'rotate(0deg)';
//     elems[current].style.transformOrigin = '50% 50%';
//     elems[current].style.top = '0';
//     elems[current].style.zIndex= zIndex++;
//     current++;
//  });

// gsap.from("#page1 #box",{
//   scale:0,
//   opacity:0,
//   duration:1,
//   delay:1,
//   rotate:360
// })

// gsap.from("#page2 #box",{
//   scale:0,
//   opacity:0,
//   duration:1,
//   // delay:1,
//   rotate:360,
//   scrollTrigger:{
//       trigger:"#page2 #box",
//       scroller:"body",
//       markers:true,
//       start:"top 80%",
//       end:"top 60%",
//       scrub:true
//   }
// })

document.addEventListener("DOMContentLoaded",(function(e){gsap.utils.toArray(".marquee").forEach((e=>{if(e.parentElement.scrollHeight>e.parentElement.clientHeight){const t=gsap.timeline({repeat:-1});t.to(e,{y:"-100%",duration:8,ease:"linear"}).set(e,{y:"100%"}),e.addEventListener("mouseenter",(()=>{t.pause()})),e.addEventListener("mouseleave",(()=>{t.play()}))}}))}));
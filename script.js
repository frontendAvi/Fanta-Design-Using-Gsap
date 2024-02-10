

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
}})
tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')

tl.to("#orange2",{
    top:"160%",
    left: "23%"
}, 'orange')

tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')

tl.to("#leaf",{
    top:"100%",
    rotate: "130deg",
    left: "70%"
}, 'orange')

tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "80%",
    top: "110%"
}, 'ca')

tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange2",{
    width:"18%",
    left: "42%",
    top: "203%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "215%",
    left: "33%",
}, 'ca')

var content1 = document.getElementById("content1")
var content2 = document.getElementById("content2")
var content3 = document.getElementById("content3")

var btn1= document.getElementById("btn1")
var btn2= document.getElementById("btn2")
var btn3= document.getElementById("btn3")

function OpenHome(){
    content1.style.transform= "translateX(0px)"
    content2.style.transform= "translateX(100%)"
    content3.style.transform= "translateX(100%)"

    content1.style.transitionDelay =".5s"
    content2.style.transitionDelay ="0s"
    content3.style.transitionDelay ="0s"

    btn1.style.color ="orange"
    btn2.style.color ="black"
    btn3.style.color ="black"
}

function OpenAbout(){
    content1.style.transform="translateX(100%)"
    content2.style.transform="translateX(0px)"
    content3.style.transform="translateX(100%)"

    content1.style.transitionDelay ="0s"
    content2.style.transitionDelay =".5s"
    content3.style.transitionDelay ="0s"

    btn1.style.color ="black"
    btn2.style.color ="orange"
    btn3.style.color ="black"
}
function OpenLinks(){
    content1.style.transform="translateX(100%)"
    content2.style.transform="translateX(100%)"
    content3.style.transform="translateX(0px)"

    content1.style.transitionDelay ="0s"
    content2.style.transitionDelay ="0s"
    content3.style.transitionDelay =".5s"

    btn1.style.color ="black"
    btn2.style.color ="black"
    btn3.style.color ="orange"


}
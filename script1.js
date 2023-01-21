function click(){
    document.getElementsByClassName("cont-to")[0].classList.toggle("text-light")
    document.getElementsByClassName("cont-to")[0].classList.toggle("text-dark")
}
let butt = document.getElementsByTagName("button")[0]
butt.addEventListener('click',click)
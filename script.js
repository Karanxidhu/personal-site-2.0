function click(){
    document.getElementsByClassName("ul")[0].classList.toggle("text-light")
    document.getElementsByClassName("ul")[0].classList.toggle("text-dark")
    document.getElementsByClassName("ul")[1].classList.toggle("text-light")
    document.getElementsByClassName("ul")[1].classList.toggle("text-dark")
    document.getElementsByClassName("name-etc")[0].classList.toggle("text-light")
    document.getElementsByClassName("name-etc")[0].classList.toggle("text-dark")
    document.getElementsByClassName("skills")[0].classList.toggle("text-light")
    document.getElementsByClassName("skills")[0].classList.toggle("text-dark")
    document.getElementsByClassName("js")[0].classList.toggle("text-light")
    document.getElementsByClassName("js")[0].classList.toggle("text-dark")
    document.getElementsByClassName("linkt")[0].classList.toggle("text-light")
    document.getElementsByClassName("linkt")[0].classList.toggle("text-dark")
    document.getElementsByClassName("linkt")[1].classList.toggle("text-light")
    document.getElementsByClassName("linkt")[1].classList.toggle("text-dark")
    document.getElementsByClassName("linkt")[2].classList.toggle("text-light")
    document.getElementsByClassName("linkt")[2].classList.toggle("text-dark")


    document.getElementsByClassName("box")[0].classList.toggle("back-light")
    document.getElementsByClassName("box")[0].classList.toggle("back-dark")

    document.body.classList.toggle("back-dark")
    document.body.classList.toggle("back-light")
}
let butt = document.getElementsByTagName("button")[0]
butt.addEventListener('click',click)
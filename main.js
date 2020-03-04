// // Dökümandaki hello-world id'li elemanı bul, değerini şöyle değiştir://
// document.getElementById("hello-world").innerHTML = "to-do-list!";

// //tagname, class

// // ilk itemi bulur, tag ile çalışır
// //document.querySelector()

// //o tag'deki tüm elemanları bulur
// //document.querySelectorAll()

// // getAttribute = class'ın değerini al, setAttribute= (class, istediğimiz değer)//

// document.querySelector("li").style.background = "red";

// // classList.add - clasList.remove - classList.toggle
// document.querySelector("li").classList;

// document.querySelector("h1").parentElement;

// // selector'ları cache'lemeyi unutma! //

// //let button = document.getElementsByTagName("button")[0];

// //button.addEventListener("mouseenter", function() {
// //    console.log("BASILDI!!!");
// //})

let button = document.getElementById("enter");
let userInput = document.getElementById("userInput");
let ul = document.querySelector("ul");
let delButton = document.getElementsByClassName("sil-buton");

function inputLength() {
    return userInput.value.length;
}

function getEventTarget(e){
    e = e || window.event;
    return e.target || e.srcElement;
}   

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";
    
}


function delEv() {
    let target = getEventTarget();
    target.classList.add("delete");
}



function setToDone() {
    // console.log("çalışıyo mu aq");
    // let ulChild = ul.children
    // ulChild.classList.add("done");

    let target = getEventTarget();
    target.classList.toggle("done");
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
}}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.charCode === 13) {
        createListElement();
}}

button.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", setToDone);
delButton.addEventListener("click",delEv);
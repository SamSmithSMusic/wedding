const nav = document.querySelector('nav');
let expand = document.querySelector('header button');

expand.addEventListener('click',() => {
    if (expand.innerHTML == '☰') {
        nav.setAttribute('style','display:flex;');
        expand.innerHTML = '×';
    }
    else if (expand.innerHTML == '×') {
        nav.setAttribute('style','display:none;');
        expand.innerHTML = '☰';
    }
});

const mailing = document.querySelector(".mailing");
let mailElements = document.querySelectorAll(".mailing input");
const mailBox = document.querySelector("#physical");

window.addEventListener("load", () => {
    mailBox.checked = false;
  });

mailBox.addEventListener('change',(event) => {
    let isChecked = event.target.checked;
    if(isChecked) {
        mailing.setAttribute("style","display:block");
        mailElements.forEach(element => {
            element.setAttribute("required","true");
        });
    }
    else if(!isChecked){
        mailing.setAttribute("style","display:none");
        mailElements.forEach(element => {
            element.setAttribute("required","false");
        });
    }
})

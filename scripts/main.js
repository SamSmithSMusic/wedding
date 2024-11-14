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
let add2 = document.querySelector("#add2");
const mailBox = document.querySelector("#physical");
const galleryCard = document.querySelector("#gallery");

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
        add2.setAttribute("required","false");
        add2.value = "n/a";
        galleryCard.setAttribute("style","display: grid");
    }
    else if(!isChecked){
        mailing.setAttribute("style","display:none");
        mailElements.forEach(element => {
            element.setAttribute("required","false");
        });
        galleryCard.setAttribute("style","display: none");
    }
})

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.contact form');
    var url = form.action;
    var page = document.querySelector('.contact');
    var loading = document.querySelector('.loading');

    form.addEventListener("submit", function(event) {
        
        loading.style.display = "block";

        event.preventDefault();

        // Honeypot check
        var honeypot = form.querySelector("input[name='honeypot']").value;
        if (honeypot) {
            return; // Stop if honeypot is filled
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                form.reset();
                form.style.display = "none"; // Hide form
                page.setAttribute('style','flex-direction:column;');
                var thankYouMessage = document.querySelector(".thankyou_message");
                thankYouMessage.style.display = "block";

                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        // Collect and encode form data
        var formData = new FormData(form);
        var encoded = new URLSearchParams(formData).toString();
        xhr.send(encoded);
    });
});

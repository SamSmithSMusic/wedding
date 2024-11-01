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
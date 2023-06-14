let login = document.querySelector('.login');
let create = document.querySelector('.create');
let ctContainer = document.querySelector('.contact-container')

login.onclick = function(){
    ctContainer.classList.add('signinForm')
} 

create.onclick = function(){
    ctContainer.classList.remove('signinForm')
} 
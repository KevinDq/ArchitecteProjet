//Mise en place slide d'image en page d'acceuil

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";    
  setTimeout(showSlides, 8000);
}

// page loader

window.setTimeout(loading, 4000)

function loading() {
const loader = document.querySelector(".loader")  
loader.style.display="none";
}

//form swap

let login = document.querySelector('.login');
let create = document.querySelector('.create');
let ctContainer = document.querySelector('.contact-container')

login.onclick = function(){
    ctContainer.classList.add('signinForm')
} 

create.onclick = function(){
    ctContainer.classList.remove('signinForm')
} 

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const form = this;
  const formData = new FormData(form);
  const confirmationMessage = document.getElementById("confirmation-message");

  fetch("https://formspree.io/f/mwpvgkow", {
      method: "POST",
      body: formData,
      headers: {
          "Accept": "application/json"
      }
  })
  .then(response => {
      if (response.ok) {
          confirmationMessage.style.display = "block"; // Affiche le message de confirmation
          form.reset(); // Réinitialise le formulaire après l'envoi
      } else {
          alert("Une erreur s'est produite, veuillez réessayer.");
      }
  })
  .catch(error => console.error("Erreur :", error));
});

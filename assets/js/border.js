
/* Selecting the body and the principal image. */
let cuerpo = document.querySelector('body')
let principal = document.querySelector('#img-principal');

/* Adding an event listener to the body of the page. When the body is clicked, it toggles the class
img-starwars on the principal image. */
cuerpo.addEventListener('click', () => {
  principal.classList.toggle('img-starwars')
})


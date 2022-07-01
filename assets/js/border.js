
let cuerpo = document.querySelector('body')
let principal = document.querySelector('#img-principal');

cuerpo.addEventListener('click', () => {
  principal.classList.toggle('img-starwars')
})


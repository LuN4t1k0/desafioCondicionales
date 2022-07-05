const password = () => {
  let pass1 = document.querySelector('#pass1').value
  let pass2 = document.querySelector('#pass2').value
  let pass3 = document.querySelector('#pass3').value
  let lock = document.querySelector('#lock')
  let result = document.querySelector('.result')

  let passwordIngresada = `${pass1}${pass2}${pass3}`
  // TODO: Remove password console.log (security problem).
  console.log(passwordIngresada);

  const password1 = 911;
  const password2 = 714;

  if (passwordIngresada == password1 || passwordIngresada == password2) {
    if (passwordIngresada == password1) {
      result.innerHTML = "La password1 es correcta"
      lock.classList.add('lock-box1')
    } else {
      lock.classList.add('lock-box1')
      result.innerHTML = "La password2 es correcta"
    }
  } else {
    console.log("la password es incorrecta");
    lock.classList.remove('lock-box1')
    result.innerHTML = "La password ingresada no es correcta"
  }
}

const lockBox = (isLock, lockElemId = '#lock', lockClassName = 'lock-box1') => {
  const lock = document.querySelector(lockElemId)
  return isLock
    ? lock.classList.add(lockClassName)
    : lock.classList.remove(lockClassName)
}

const obtenerPasswordIngresada = () => {
  const pass1 = document.querySelector('#pass1').value
  const pass2 = document.querySelector('#pass2').value
  const pass3 = document.querySelector('#pass3').value
  return `${pass1}${pass2}${pass3}`
}

const mostrarMensaje = mensaje =>
  (document.querySelector('.result').innerHTML = mensaje)

const validarPassword = () => {
  const password1 = '911'
  const password2 = '714'
  const passwordIngresada = obtenerPasswordIngresada()
  let mensajeRespuesta = ''

  if (passwordIngresada === password1) {
    lockBox(true)
    mensajeRespuesta = 'La password1 es correcta'
  } else if (passwordIngresada === password2) {
    lockBox(true)
    mensajeRespuesta = 'La password2 es correcta'
  } else {
    lockBox(false)
    mensajeRespuesta = 'La password ingresada no es correcta'
  }

  mostrarMensaje(mensajeRespuesta)
}

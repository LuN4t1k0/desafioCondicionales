const password = () => {
  let pass1 = document.querySelector('#pass1').value
  let pass2 = document.querySelector('#pass2').value
  let pass3 = document.querySelector('#pass3').value
  let lock = document.querySelector('#lock')

  let passwordIngresada = `${pass1}${pass2}${pass3}`
  console.log(passwordIngresada);

  const password1 = 911;
  const password2 = 714;


  if(passwordIngresada == password1 || passwordIngresada == password2){
    if(passwordIngresada == password1){
      console.log("La password1 es correcta");
    }else{
      console.log("la password 2 es correcta");
    }
  }else{
    console.log("la password es incorrecta");
  }
  
}






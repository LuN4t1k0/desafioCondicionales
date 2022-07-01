/**
 * It takes the values of three input fields, adds them together, and displays a message based on the
 * total
 */
const calcularStikers = () => {
  let sticker1 = document.querySelector("#stk1").value;
  let sticker2 = document.querySelector("#stk2").value;
  let sticker3 = document.querySelector("#stk3").value;
  let feedback = document.querySelector(".result");
  let total = +sticker1 + +sticker2 + +sticker3;

  if (total < 10) {
    let resto = 10 - total;
    feedback.innerHTML = `Faltan ${resto} stickers para completar el maximo`;
  } else if (total == 10) {
    feedback.innerHTML = `Alcanzaste el maximo de stickers`;
  } else {
    let superado = total - 10;
    feedback.innerHTML = `Ups ! superaste el maximo de 10 stickers debes eliminar ${superado}`;
  }
};

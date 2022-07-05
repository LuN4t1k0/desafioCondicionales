/**
 * esUnNumero valida que el valor ingresado sea de tipo númerico
 * @param {number} num Numero por validar
 * @returns {boolean} Validación si in valor ingresado es un número o no.
 */
const esUnNumero = (num) => !isNaN(num);

/**
 * mostrarFeedback muestra el mensaje en la pantalla del usuario
 * @param {string} mensaje Mensaje a mostrar
 */
const mostrarFeedback = (mensaje) => document.querySelector(".result").innerHTML = mensaje

/**
 * It takes the values of three input fields, adds them together, and displays a message based on the
 * total
 */
const calcularStikers = () => {
  let sticker1 = document.querySelector("#stk1").value;
  let sticker2 = document.querySelector("#stk2").value;
  let sticker3 = document.querySelector("#stk3").value;

  if (!esUnNumero(sticker1) || !esUnNumero(sticker2) || !esUnNumero(sticker3)) {
    // Notificar al usuario sobre la validación
    alert("La cantidad de sticker debe ser un número!")
    // Detener funcion dado que no paso la validación
    return;
  }

  const cantidadMaximaStickers = 10;
  const total = +sticker1 + +sticker2 + +sticker3;
  let mensajeFeedback = "";

  if (total < cantidadMaximaStickers) {
    const totalStickersFaltantes = cantidadMaximaStickers - total;
    mensajeFeedback = `Faltan ${totalStickersFaltantes} stickers para completar el maximo`;
  } else if (total === cantidadMaximaStickers) {
    mensajeFeedback = `Alcanzaste el maximo de stickers`;
  } else {
    const totalStickersPorEliminar = total - cantidadMaximaStickers;
    mensajeFeedback = `Ups ! superaste el maximo de 10 stickers debes eliminar ${totalStickersPorEliminar}`;
  }

  mostrarFeedback(mensajeFeedback);
};

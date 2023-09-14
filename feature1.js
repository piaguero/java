function simularTiradas() {
  const minVueltas = 5;
  const maxVueltas = 10;
  const numerosPosibles = 37; // 0 al 36

  for (let i = 1; i <= 10; i++) {
    const vueltas = Math.floor(Math.random() * (maxVueltas - minVueltas + 1)) + minVueltas;
    const numeroInicial = 0;
    let posicionFinal = numeroInicial;

    for (j = 1; j <= vueltas; j++) {
      const movimiento = Math.floor(Math.random() * numerosPosibles);
      posicionFinal = (posicionFinal + movimiento) % numerosPosibles;
    }

    console.log("Número de juego:", i);
    console.log("Valor aleatorio generado:", vueltas);
    console.log("Número que cayó en la ruleta:", posicionFinal);
    console.log("-----------------------");
  }
}
simularTiradas();
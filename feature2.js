function simularMovimiento() {
    const posicionInicial = Math.floor(Math.random() * 360); 
    const minVueltas = 5;
    const maxVueltas = 10;
    const vueltas = Math.floor(Math.random() * (maxVueltas - minVueltas + 1)) + minVueltas; 
    const anguloFinal = (posicionInicial + (360 * vueltas)) % 360; 
  
    console.log("Posición o ángulo Inicial G.A.:", posicionInicial);
    console.log("Valor Aleatorio Generado en Grados:", vueltas * 360);
    console.log("Ángulo Final:", anguloFinal);
  }
  simularMovimiento();
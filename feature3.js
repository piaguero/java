const horaActual = new Date();

const valorAleatorio = Math.floor(Math.random() * (600 - 300 + 1)) + 300;

const horaFinal = new Date(horaActual.getTime() + valorAleatorio * 60000);

// Formatear las horas en formato HH:mm
const horaActualFormateada = horaActual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const horaFinalFormateada = horaFinal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

console.log("Hora Actual:", horaActualFormateada);
console.log("Valor Aleatorio Generado de Minutos:", valorAleatorio);
console.log("Hora Final:", horaFinalFormateada);
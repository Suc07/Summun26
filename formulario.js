var formulario = document.getElementById("booking-form");
var mensaje = document.getElementById("form-status");
var fecha = document.getElementById("booking-date");


// COLOCAR LA FECHA MÍNIMA
var hoy = new Date();

var año = hoy.getFullYear();
var mes = hoy.getMonth() + 1;
var dia = hoy.getDate();

if (mes < 10) {
    mes = "0" + mes;
}

if (dia < 10) {
    dia = "0" + dia;
}

fecha.min = año + "-" + mes + "-" + dia;


// ENVIAR FORMULARIO
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    mensaje.textContent =
        "¡Solicitud enviada! Nos pondremos en contacto contigo para confirmar tu reserva.";

    formulario.reset();

});
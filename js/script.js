
// Mensaje de bienvenida
window.addEventListener("load", function() {
    alert("¡Bienvenido a España para descubrir!");
});

// Contador de visitas
let visitas = localStorage.getItem("visitas");

if (visitas === null) {
    visitas = 1;
} else {
    visitas = Number(visitas) + 1;
}

localStorage.setItem("visitas", visitas);

let contador = document.getElementById("contadorVisitas");

if (contador) {
    contador.textContent = "Cantidad de visitas: " + visitas;
}

// Calculadora de presupuesto
function calcularPresupuesto() {
    let dias = Number(document.getElementById("dias").value);
    let gastoDiario = Number(document.getElementById("gasto").value);

    if (dias <= 0 || gastoDiario <= 0) {
        alert("Ingresá valores mayores a cero.");
        return;
    }

    let total = dias * gastoDiario;

    document.getElementById("resultado").textContent =
        "El presupuesto aproximado es: $" + total;
}

// Formulario de contacto
let formulario = document.getElementById("formularioContacto");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;

        document.getElementById("respuesta").textContent =
            "¡Gracias " + nombre + "! Tu mensaje fue enviado correctamente.";

        formulario.reset();
    });
}



// Unidad es la cantidad de notebooks
let unidad = document.querySelector('.cantidad');
// respresenta al boton de sumar
let suma = document.getElementById('sumar');
// respresenta al boton de restar
let resta = document.getElementById('restar');
//definiendo el valor inicial de la cantidad de notebook
let calculo = 0
unidad.innerText = calculo

//precio de la notebook 
precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
// precio total
let precioTotal = document.querySelector(".valor-total");

function adicionar() {
    calculo = calculo + 1;
    unidad.innerText = calculo;
    precioTotal.innerText = calculo * precio;
}

function sustraer() {
    if (calculo > 0) {
    calculo = calculo - 1;
    unidad.innerText = calculo;
    precioTotal.innerText = calculo * precio;
}
}
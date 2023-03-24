const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#calculo3');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


document.getElementById("btnCalcular").addEventListener("click", function() {
    this.style.backgroundColor = "red";
    });

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
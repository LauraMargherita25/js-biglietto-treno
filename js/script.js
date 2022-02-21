/*document.getElementById("my_output").innerHTML = "Hi everyone!"


let supercalifragilistichespiralidoso = 10;
let salagadulamegicabula = supercalifragilistichespiralidoso * 1500 - 30;

console.log(salagadulamegicabula)*/


const pricePerKm = 0.21;
let userKm = prompt("Quanti Km devi percorrere?");
let userAge = prompt("Quanti anni hai?");

if (userAge < 18){
    document.getElementById("my_output").innerHTML = (pricePerKm * userKm * 0.8);
}
elseif
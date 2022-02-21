/*document.getElementById("my_output").innerHTML = "Hi everyone!"


let supercalifragilistichespiralidoso = 10;
let salagadulamegicabula = supercalifragilistichespiralidoso * 1500 - 30;

console.log(salagadulamegicabula)*/


const pricePerKm = 0.21;
let userKm = prompt("Quanti Km devi percorrere?");
let userAge = prompt("Quanti anni hai?");

let finalPrice = (userKm * pricePerKm);

let discountUnder18 = (finalPrice * 0.8);

let discountOver65 = (finalPrice * 0.6);

if (userAge < 18){
    document.getElementById("my_output").innerHTML = `Il tuo biglietto costa: ${discountUnder18}`;
} else if(userAge > 65){
    document.getElementById("my_output").innerHTML = `Il tuo biglietto costa: ${discountOver65}`;
} else{
    document.getElementById("my_output").innerHTML = `Il tuo biglietto costa: ${finalPrice}`;
}

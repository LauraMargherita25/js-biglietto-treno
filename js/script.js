/*document.getElementById("my_output").innerHTML = "Hi everyone!"


let supercalifragilistichespiralidoso = 10;
let salagadulamegicabula = supercalifragilistichespiralidoso * 1500 - 30;

console.log(salagadulamegicabula)*/


/*const pricePerKm = 0.21;
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
}*/



/* ### RIPASSO ### */
// linko l'input età inserito dallo user all'elemnto eleUserAge
let eleUserAge = parseInt(document.getElementById("user_age").value);
console.log(eleUserAge);

// linko l'input km inserito dallo user all'elemnto eleKm
let eleUserKm = parseInt(document.getElementById("user_km").value);
console.log(eleUserKm);

// calcolo il prerzzo finale senza sconti
const pricePerKm = 0.21;

let eleFinalPrice = eleUserKm * pricePerKm;
console.log("Sono il prezzo finale senza sconti" + " " + eleFinalPrice)

// calcolo lo sconto per gli under 18
const discount20 = eleFinalPrice * 20 /100;
console.log("Sono lo sconto del 20%" + " " + discount20);

// calcolo lo sconto per gli over 65
const discount40 = eleFinalPrice * 40 /100;
console.log("Sono lo sconto del 40%" + " " + discount40);

// condizione per calcolo prezzo finale in caso di sconto
if (eleUserAge <= 18) {
    eleFinalPrice -= discount20;
    console.log("Sono il prezzo finale scontato del 20%" + " " + eleFinalPrice);
} else if (eleUserAge >= 65) {
    eleFinalPrice -= discount40;
    console.log("Sono il prezzo finale scontato del 40%" + " " + eleFinalPrice);
}

document.getElementById("final_price").innerHTML = `Il tuo biglietto costa: ${parseFloat(eleFinalPrice.toFixed(2))}£`;    
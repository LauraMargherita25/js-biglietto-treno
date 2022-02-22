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

let inputName = document.querySelector("#name");
let inputKm = document.querySelector("#counnt_km"); 
let inputAge = document.querySelector("#select_age"); 
let outputArea = document.getElementById("output");
let btnGenerate = document.querySelector("#generate"); 
let btnClear = document.querySelector("#clear"); 


const pricePerKm = 0.21;
const discountUnder18 = 20;
const discountOver65 = 40;


btnGenerate.addEventListener("click", function(){
    
    let userName = inputName.value;
    let userKm = parseFloat(inputKm.value);
    let userAge = inputAge.value;
    
    if (isNaN(userKm)){
        alert("Devi inserire un numero");
    }else{
    
        let discount = 0;
        if (userAge == "minorenne"){
            discount = discountUnder18;
        }else if(userAge == "senior"){
            discount = discountOver65;
        }else{
            discount = 0;
        }
        
        let finalPrice = pricePerKm * userKm;
        let discountValue = finalPrice * discount / 100;
        
        finalPrice = (finalPrice - discountValue).toFixed(2);
        
        outputArea.innerHTML = `Ciao ${userName}, il tuo biglietto costa: ${finalPrice}`;
    }

})

btnClear.addEventListener("click", function(){
    inputName.value = " ";
    inputKm.value = " ";
    inputAge.value = " ";
    outputArea.innerHTML = " ";
})

// Input Km da percorrere
const kmTrip = parseInt(prompt("Chilometri da percorrere: "));
//Input età del passeggero
const userAge = parseInt(prompt("Età del passeggero: "));

//UI elements
const kmTripUI = document.getElementById("kmTrip");
const userAgeUI = document.getElementById("userAge");
const ticketPriceUI = document.getElementById("ticketPrice");

//Prezzo biglietto
let price = kmTrip * 0.21;
let ticketPrice = price.toFixed(2);

//Prezzi scontati
let priceUnder18 = ticketPrice - ticketPrice * 0.2;
let priceOver65 = ticketPrice - ticketPrice * 0.4;

//Mostra nella UI
kmTripUI.innerText = kmTrip;
userAgeUI.innerText = userAge;
ticketPriceUI.innerText = ticketPrice + " €";


//Logica sconto biglietto
//Under 18
if (userAge < 18) {

  ticketPriceUI.innerHTML =
   `<del>${ticketPrice} €</del>
   <br> 
   <span id="discount-text">Applicato sconto under 18</span>
   <br>
   Totale ${priceUnder18.toFixed(2)} €`;

//Over 65
} else if (userAge > 65) {

  ticketPriceUI.innerHTML = `<del>${ticketPrice} €</del>
   <br> 
   <span id="discount-text">Applicato sconto over 65</span>
   <br> 
   Totale ${priceOver65.toFixed(2)} €`;
}

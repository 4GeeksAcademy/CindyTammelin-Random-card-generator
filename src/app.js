import "bootstrap";
import "./style.css";

window.onload = function() {
  generateRandomCard();
};

function generateRandomCard() {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['heart', 'spade', 'club', 'diamond'];
  
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  
  let suitSymbol;
  if (randomSuit === 'heart') suitSymbol = '♥';
  if (randomSuit === 'diamond') suitSymbol = '♦';
  if (randomSuit === 'spade') suitSymbol = '♠';
  if (randomSuit === 'club') suitSymbol = '♣';
  
  document.querySelector("#app").innerHTML = `
    <div class="card ${randomSuit}">
      <div class="top-left">${suitSymbol}</div>
      <div class="center">${randomValue}</div>
      <div class="bottom-right">${suitSymbol}</div>
    </div>
  `;
}
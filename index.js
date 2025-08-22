// ----- State -----
const state = {
  bank: [],
  odds: [],
  evens: [],
};

// ----- Render Function -----
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  // Example layout - to be updated ... just skeleton
  const form = document.createElement("form");
  const bankSection = document.createElement("div");
  const oddSection = document.createElement("div");
  const evenSection = document.createElement("div");

  form.textContent = "Form goes here";
  bankSection.textContent = "Bank: " + state.bank.join(", ");
  oddSection.textContent = "Odds: " + state.odds.join(", ");
  evenSection.textContent = "Evens: " + state.evens.join(", ");

  app.appendChild(form);
  app.appendChild(bankSection);
  app.appendChild(oddSection);
  app.appendChild(evenSection);
}

// ----- Event Handlers -----
function addNumber(num) {
  state.bank.push(num);
  render();
}

function sortOne() {
  // move one number from bank to odds/evens
}

function sortAll() {
  // move all numbers from bank to odds/evens
}

// ----- Init -----
render();

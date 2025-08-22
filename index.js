// ----- State -----
const state = {
  bank: [],
  odds: [],
  evens: [],
};

// ----- Functioins -----
function addNumber(n) {
  state.bank.push(n); // put the number in the bank
  render(); // update the screen
}

function sortOne() {
  if (state.bank.length === 0) return; // if the bank is empty, do nothing
  const n = state.bank.shift(); // remove the first number in the bank
  if (Math.abs(n % 2) === 1)
    // check if odd
    state.odds.push(n); // put into odds
  else state.evens.push(n); // otherwise into evens
  render(); // redraw the page
}

function sortAll() {
  while (state.bank.length > 0) {
    sortOne();
  }
}

// ----- Render -----
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  // --- Head / Title of Form page
  const title = document.createElement("h1");
  title.textContent = "Odds and Events";
  app.appendChild(title);

  // --- Form and form Controls row
  const row = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = "Add a number to the bank";
  label.className = "form-label";

  const form = document.createElement("form");
  form.className = "inline-form";

  const input = document.createElement("input");
  input.type = "number";

  const addBtn = document.createElement("button");
  addBtn.type = "submit";
  addBtn.textContent = "Add number";

  form.appendChild(input);
  form.appendChild(addBtn);

  const sort1Btn = document.createElement("button");
  sort1Btn.textContent = "Sort 1";
  sort1Btn.className = "sort-btn";

  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.className = "sort-btn";

  row.appendChild(label);
  row.appendChild(form);
  row.appendChild(sort1Btn);
  row.appendChild(sortAllBtn);
  app.appendChild(row);

  // --- Sections (Bank Odds Evens) --- needed a lot of help
  function section(titleText, numbers) {
    const wrap = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = titleText;
    wrap.appendChild(h2);

    const box = document.createElement("div");
    box.className = "box";

    const ul = document.createElement("ul");
    numbers.forEach((n) => {
      const li = document.createElement("li");
      li.textContent = String(n);
      ul.appendChild(li);
    });

    box.appendChild(ul);
    wrap.appendChild(box);
    return wrap;
  }

  app.appendChild(section(`Bank`, state.bank));
  app.appendChild(section(`Odds`, state.odds));
  app.appendChild(section(`Evens`, state.evens));

  // --- Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addNumber(Number(input.value));
  });

  sort1Btn.addEventListener("click", (e) => {
    e.preventDefault();
    sortOne();
  });

  sortAllBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sortAll();
  });

  // Disable sort buttons when bank is empty
  const empty = state.bank.length === 0;
  sort1Btn.disabled = empty;
  sortAllBtn.disabled = empty;
}

// ----- Init -----
render();

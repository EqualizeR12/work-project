import axios from"axios";

console.log(axios);

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = document.querySelectorAll("input");
  var valuesInput = {};

  fields.forEach((field) => {
    const { name, value } = field;

    valuesInput[name] = value;
  });

  let elem = valuesInput.map(el => el);
});
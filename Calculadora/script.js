const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const seasonButtons = document.querySelectorAll(".season-btn");

let output = "";
const specialChars = ["%", "*", "/", "-", "+", "="];

// Función para manejar cálculos
const calcular = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    try {
      output = eval(output.replace("%", "/100"));
    } catch {
      output = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Asignar eventos a botones de la calculadora
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnValue = e.target.dataset.value;
    if (btnValue) calcular(btnValue);
  });
});

// Cambiar temas sin interferir con el display
seasonButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const season = e.target.dataset.season;
    const body = document.body;

    if (season) {
      body.className = ""; 
      if (season !== "default") body.classList.add(`${season}-theme`);
    }
  });
});

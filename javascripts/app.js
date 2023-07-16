const numberKeys = Array.from(document.querySelectorAll(".js-key"));
const specialKeys = Array.from(document.querySelectorAll(".js-special-key"));

// const keys = [].concat(numberKeys, specialKeys, sideKeys);

const equationDisplay = document.querySelector(".js-equation-display");
const outputDisplay = document.querySelector(".js-output-display");
let equation = "";
let EQoutput = "";

numberKeys.forEach((key) => {
  key.addEventListener("click", () => {
    equationDisplay.innerHTML += key.dataset.value;
    equation += key.dataset.value;
    console.log(equation);
  });
});

specialKeys.forEach((key) => {
  key.addEventListener("click", () => {
    switch (key.dataset.value) {
      case "+":
        if (endsWithInvalid(equation)) {
          console.error(`ERROR: Something went wrong`);
        } else {
          equationDisplay.innerHTML += "+";
          equation += "+";
        }
        break;

      case "-":
        if (endsWithInvalid(equation)) {
          console.error(`ERROR: Something went wrong`);
        } else {
          equationDisplay.innerHTML += "-";
          equation += "-";
        }
        break;

      case "*":
        if (endsWithInvalid(equation)) {
          console.error(`ERROR: Something went wrong`);
        } else {
          equationDisplay.innerHTML += "&times";
          equation += "*";
        }
        break;

      case "/":
        if (endsWithInvalid(equation)) {
          console.error(`ERROR: Something went wrong`);
        } else {
          equationDisplay.innerHTML += "&divide";
          equation += "/";
        }
        break;

      case ".":
        if (endsWithInvalid(equation)) {
          console.error(`ERROR: Something went wrong`);
        } else {
          equationDisplay.innerHTML += ".";
          equation += ".";
        }
        break;

      case "%":
        if (endsWithInvalid(equation)) {
          console.error(`ERROR: Something went wrong`);
        } else {
          equationDisplay.innerHTML += "%";
          equation += "%";
        }
        break;

      case "clear":
        equationDisplay.innerHTML = "";
        outputDisplay.innerHTML = "";
        equation = "";
        break;

      case "back":
        equationDisplay.innerHTML = equationDisplay.innerHTML.slice(0, -1);
        equation = equation.slice(0, -1);
        break;

      case "calculate":
        try {
          if (equation != "") {
            EQoutput = eval(equation);
            outputDisplay.innerHTML = EQoutput;
          }
        } catch {
          outputDisplay.innerHTML = "Invalid";
          equationDisplay.innerHTML = "";
          equation = "";
        }
        break;
    }
  });
});

function endsWithInvalid(str) {
  if (
    str === "" ||
    str.endsWith("+") ||
    str.endsWith("-") ||
    str.endsWith("*") ||
    str.endsWith("/") ||
    str.endsWith(".") ||
    str.endsWith("%")
  ) {
    return true;
  } else {
    return false;
  }
}

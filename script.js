let display = document.getElementById("display");

// Add value
function append(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Backspace
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support (BONUS)
document.addEventListener("keydown", function(event) {
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    display.value += event.key;
  }

  if (event.key === "Enter") {
    calculate();
  }

  if (event.key === "Backspace") {
    backspace();
  }

  if (event.key === "Escape") {
    clearDisplay();
  }
});
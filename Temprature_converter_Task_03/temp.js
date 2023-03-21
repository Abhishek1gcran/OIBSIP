function convertTemp() {
  // Get input temperature value
  const inputTemp = document.getElementById("inputTemp").value;
  if (!inputTemp) {
    return;
  }

  // Get input temperature scale
  const inputScale = document.getElementById("inputScale").value;

  // Convert input temperature to Celsius
  let celsius;
  if (inputScale === "celsius") {
    celsius = parseFloat(inputTemp);
  } else if (inputScale === "fahrenheit") {
    celsius = (parseFloat(inputTemp) - 32) * (5 / 9);
  } else if (inputScale === "kelvin") {
    celsius = parseFloat(inputTemp) - 273.15;
  }

  // Convert Celsius to Fahrenheit
  const fahrenheit = (celsius * (9 / 5)) + 32;

  // Convert Celsius to Kelvin
  const kelvin = celsius + 273.15;

  // Display converted temperatures
  const output = document.getElementById("output");
  output.innerHTML = `${celsius.toFixed(2)} Celsius<br>${fahrenheit.toFixed(2)} Fahrenheit<br>${kelvin.toFixed(2)} Kelvin`;
}

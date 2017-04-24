var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
};

var multiply = function(number1, number2){
	return number1 * number2;
};

var divide = function(number1, number2){
	return number1 / number2;
};

// var number1 = parseInt(prompt("Enter a Number:"));
//
// var number2 = parseInt(prompt("Enter another Number:"));

// alert(add(number1,number2));

var BMI = function(height, weight) {
  return weight / height;
};

var result = function() {
  height = prompt("Enter your height");
  weight = prompt("Enter your weight");
  alert(BMI(height, weight));
};

//result();

var temperature = function(celsius) {
  celsius = prompt("Temperature in celsius to convert to fahrenheit.");
  alert("Temp in fahrenheit: " + (celsius * 9 / 5 + 32) + ".");
};

temperature();

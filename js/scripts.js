
//var calculatorBmi=function (num1,num2,num3){
//  num3=num2*num2
  //return num1/num3;
//}
//var num1=parseFloat(prompt("Enter body weight in kg: "));
//var num2=parseFloat(prompt("Enter body height in metres: "));
//var result=calculatorBmi(num1,num2);
//alert(result.toFixed(1));

//var tempConv= function (num1){
  //return num1*1.8+32;
//};
//var num1=parseFloat(prompt("Enter temperature in degrees:"));
//var temperature=tempConv(num1);
//alert("The temperature is "+ temperature+" Fahreinheit")
//Addition
var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);
//Subtraction
var sub = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = sub(number1, number2);
alert(result);
//Multiplication
var multi = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multi(number1, number2);
alert(result);
//Division
var divi = function(number1, number2) {
  return number1/number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divi(number1, number2);
alert(result);

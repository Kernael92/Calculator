var add = function(number1, number2) {
return number1 + number2;
};
$(document).ready(function() {
   $("form#add").submit(function(event){
      event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      var result = add(number1, number2);
   $("#output").text(result);
   });
});

//var subtract = function(number1, number2) {
//return number1 - number2;
//};
//var number1 = parseInt(prompt("Enter a number:"));
//var number2 = parseInt(prompt("Enter another number:"));
//alert(subtract(number1, number2));
//var multiply = function(number1, number2) {
//return number1 * number2;
//};
//var number1 = parseInt(prompt("Enter a number:"));
//var number2 = parseInt(prompt("Enter another number:"));
//alert(multiply(number1, number2));
//var divide = function(number1, number2) {
//return number1 / number2;
//};
//var number1 = parseInt(prompt("Enter a number:"));
//var number2 = parseInt(prompt("Enter another number:"));
//alert(divide(number1, number2));

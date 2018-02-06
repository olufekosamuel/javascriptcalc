const num1 = document.getElementById('num1');
const num2 = document.getElementById('2');
const num3 = document.getElementById('3');
const num4 = document.getElementById('4');
const num5 = document.getElementById('5');
const num6 = document.getElementById('6');
const num7 = document.getElementById('7');
const num8 = document.getElementById('8');
const num9 = document.getElementById('9');
const num0 = document.getElementById('0');
const addi = document.getElementById('add');
const sub = document.getElementById('sub');
const divi = document.getElementById('div');
const mult = document.getElementById('mult');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

const displaybox = document.getElementById('displaybox');
const clearbox = document.getElementById('equal');


var num = "";
var number1 = 0;
var number2= 0;


num1.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "1";
	    displaybox.value = 1;

});
num2.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "2";
	    displaybox.value = 2;
});
num3.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "3";
	    displaybox.value = 3;
});
num4.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "4";
	    displaybox.value = 4;
});
num5.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "5"
	    displaybox.value = 5;
});
num6.addEventListener('click', () => {
	    displaybox.value = "";
      num += "6"
	    displaybox.value = 6;
});
num7.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "7"
	    displaybox.value = 7;
});
num8.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "8"
	    displaybox.value = 8;
});
num9.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "9"
	    displaybox.value = 9;
});
num0.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "0"
	    displaybox.value = 0;
});
addi.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "+"
	    displaybox.value = "+";
});
sub.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "-"
	    displaybox.value = "-";
	});
divi.addEventListener('click', () => {
	    displaybox.value = "";
	    num += "/"
	    displaybox.value = "/";
});
equal.addEventListener('click', () => { 
	    displaybox.value = eval(num) 
	    num="";
});
clear.addEventListener('click', () =>{
      displaybox.value="";
      num="";
});



function add(number1, number2){
	var sum= number1 + number2;
	return sum = diplaybox.value;
}

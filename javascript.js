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
	    num += "1";
	    displaybox.value = num;

});
num2.addEventListener('click', () => {
	    num += "2";
	    displaybox.value = num;
});
num3.addEventListener('click', () => {
	    num += "3";
	    displaybox.value = num;
});
num4.addEventListener('click', () => {
	    num += "4";
	    displaybox.value = num;
});
num5.addEventListener('click', () => {
	    num += "5"
	    displaybox.value = num;
});
num6.addEventListener('click', () => {
        num += "6"
	    displaybox.value = num;
});
num7.addEventListener('click', () => {
	    num += "7"
	    displaybox.value = num;
});
num8.addEventListener('click', () => {
	    num += "8"
	    displaybox.value = num;
});
num9.addEventListener('click', () => {
	    num += "9"
	    displaybox.value = num;
});
num0.addEventListener('click', () => {
	     num += "0"
	    displaybox.value = num;
});
addi.addEventListener('click', () => {
	    number1 = parseInt(displaybox.value);
	     num += "+"
	    displaybox.value = num;
	    displaybox.value = 0;
	    alert(number1);
});
sub.addEventListener('click', () => {
	    number2 = parseInt(displaybox.value);
	     num += "-"
	    displaybox.value = num;
	    alert();
	});
divi.addEventListener('click', () => {
	     num += "/"
	    displaybox.value = num;
});
equal.addEventListener('click', () => { 
	   
});
clearbox.addEventListener('click', () =>{
    displaybox.value="";
});
      


function add(number1, number2){
	var sum= number1 + number2;
	return sum = diplaybox.value;
}
let men1 = "Inserte el numero 1";
let num1 = prompt(men1);
num1 = parseInt(num1);
let men2 = "Inserte el numero 2";
let num2 = prompt(men2);
num2 = parseInt(num2);

res = num2+num1;
if(num1 == num2){
res = res*3;
document.write("La :"+ res)
}
else{
    document.write(res)
}
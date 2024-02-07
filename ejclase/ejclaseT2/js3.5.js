var array = new  Array(10);

for(let i=0;i<=9;i++){
    array[i] = Math.floor(Math.random()*20)*5;
}

document.write(array);
document.write("<br>");


while(array[0]<50){
    array.shift();
    array.unshift(Math.floor(Math.random()*20)*5);
}

document.write(array);
document.write("<br>");

while(array[9]>50){
    array.pop();
    array.push(Math.floor(Math.random()*20)*5);
}

document.write(array);
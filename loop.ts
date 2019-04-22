var num:number = 5; 
var i:number; 
var factorial = 1; 

for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial)



var num = 5;
var factorial = 1;
while (num >= 1) {
   factorial = factorial * num;
   num--;
}
console.log("The factorial  is " + factorial);
var nums:number[] = [1,2,3,3] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);



//Array Object
var arr_names:number[] = new Array(4)  

for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}



var names:string[] = new Array("Mary","Tom","Jack","Jill") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}



var alpha = ["a", "b", "c"]; 
var Numeric = ["1", "2", "3"];

var alphaNumeric = alpha.concat(Numeric); 
console.log("alphaNumeric : " + alphaNumeric );


function isBigEnough(element, index, array) { 
    return (element >= 10); 
 } 
           
 var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
 console.log("Test Value : " + passed );
var foo = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
 } 
 foo(100)


 //donot specify datatype
 var func = (x)=> { 
    if(typeof x=="number") { 
       console.log(x+" is numeric") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 func(12) 
 func("Tom")

//Optional parentheses for a single parameter
var display = x=> { 
   console.log("The function got "+x) 
} 
display(12)
 
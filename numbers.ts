var month = 0 
if( month<=0 || month >12) { 
   month = Number.NaN 
   console.log("Month is "+ month) 
} else { 
   console.log("Value Accepted..") 
}


//prototype
function employee(id:number,name:string) { 
    this.id = id 
    this.name = name 
 } 
 
 var emp = new employee(123,"Smith") 
 employee.prototype.email = "smith@abc.com" 
 
 console.log("Employee 's Id: "+emp.id) 
 console.log("Employee's name: "+emp.name) 
 console.log("Employee's Email ID: "+emp.email)



 var str = new String( "This is string" ); 
console.log("str.constructor is:" + str.constructor)
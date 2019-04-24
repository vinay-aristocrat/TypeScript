interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());



console.log("------------------Interface and Unions------------------------------");

interface RunOptions{
    program:string;
    commandline:string[]|string|(()=>string);
}

var options:RunOptions = {program: "test1", commandline: "Hello"};
console.log(options.commandline);


options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  

options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 

var fn:any = options.commandline; 
console.log(fn());


console.log("------------------Interface and Arrays------------------------------");

interface namelist { 
   [index:number]:string 
} 

//var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
interface ages { 
   [index:string]:number 
} 

var agelist:ages; 
//agelist["John"] = 15
//agelist[2] = "nine"   //key should be string and value should be number


console.log("------------------Interfaces and Inheritance------------------------------");

interface Person { 
   age:number 
} 

interface Musician extends Person { 
   instrument:string 
} 

var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age);
console.log("Instrument:  "+drummer.instrument);



console.log("------------------Multiple Inheritance------------------------------");

interface IParent1{
   v1:number;
}

interface IParent2{
   v2:number;
}


interface Child extends IParent1, IParent2{}

var obj:Child = {v1:4, v2:8}

console.log("v1 = "+obj.v1+"... v2 = "+obj.v2);




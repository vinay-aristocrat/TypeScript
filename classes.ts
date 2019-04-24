class Car { 
   engine:string; 

   constructor(engine:string) { 
      this.engine = engine 
   }  

   disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } 
}

var obj = new Car("Engine 1")

console.log("Attribute value: "+obj.engine)

obj.disp()


console.log("---------------------------class Inheritance--------------------------------")


class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 var obj1 = new Circle(223); 
 obj1.disp()



 console.log("---------------------------Multilevel Inheritance--------------------------------")

 class Root { 
    str:string; 
 } 
 
 class Child extends Root {} 
 class Leaf extends Child {}
 
 var obj2 = new Leaf(); 
 obj2.str ="hello" 
 console.log(obj2.str)


 console.log("---------------------------Method Overrding--------------------------------")

 class PrinterClass { 
    doPrint():void {
       console.log("doPrint() from Parent called…") 
    } 
 } 
 
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() 
       console.log("doPrint() is printing a string…")
    } 
 } 
 
 var obj3 = new StringPrinter() 
 obj3.doPrint()



 console.log("---------------------------instanceof--------------------------------")

 class Person{ } 
var obj4 = new Person() 
var isPerson = obj4 instanceof Person; 
console.log(" obj is an instance of Person " + isPerson);



console.log("---------------------------Classes and Interfaces--------------------------------")


interface ILoan { 
    interest:number 
 } 
 
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var obj5 = new AgriLoan(3,30) 
 console.log("Interest is : "+obj5.interest+" Rebate is : "+obj5.rebate )
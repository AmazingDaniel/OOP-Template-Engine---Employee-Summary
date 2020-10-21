// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
    this.name = name;
    this.email = email;
    this.id = id;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee"
    }
}

module.exports = Employee;


// var dog={
//     name:"wolfy",
//     haircolor:"brown"
// }

// var cat={
//     name:"meow",
//     haircolor:"black"
// }

// //es5 Contructor 
//  function Animal(name, haircolor){
//       this.name=name
//       this.haircolor=haircolor
//  }

//  class Food{
//      constructor(type,cost){
//        this.type=type
//         this.cost=cost
              
//      }
//      getType(){
//          return this.type
//      }
//      getCost(){
//          return this.cost
//      }
//  }

// //es6 constrcutor
// class Animal extends Food{
//    constructor(name, haircolor,type,cost){
//        super(type, cost)
//        this.name = name;
//        this.haircolor =haircolor;
//    }
//    getName(){
//        return this.name
       
//    }
//    getHaircolor(){
//        return this.haircolor
//    }
// }

//  var dog= new Animal("wolfy","brown","purina",40)
//  var cat = new Animal("meow","black","iams",50)
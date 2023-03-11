// 1. Same keys and values ES5:
// function createInstructor(firstName, lastName){
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }

// Same keys and values ES 2015:
const createInstructor = (firstName, lastName) => ({
    firstName,
    lastName
  });

// 2. Computed Property names ES5:
// var favoriteNumber = 42;

// var instructor = {
//     firstname: "Colt"
// }
 
// instructor[favoriteNumber] = "That is my favorite!"

// Computed Property names ES2015:
const favoriteNumber = 42;

const instructor1 = {
  firstname: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

// 3. Object Methods ES5:
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//         return "Hi!";
//     },
//     sayBye: function(){
//         return this.firstname + "says bye!";
//     }
// }

// Object Methods ES2015:
const instructor2 = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`;
    }
  };

// 4. createAnimal function 
const createAnimal = (species, verb, noise) => ({
    species,
    [verb]() {
      console.log(noise);
    }
  });
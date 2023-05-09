// Load environment variables from .env file
require("dotenv").config();

// Connect to MongoDB using Mongoose
require("./database/connection");

// Import the Person model
const Person = require("./models/Person");

// Create a new Person document and save it to the database
const Person1 = new Person({
  name: "Mohammed",
  age: 23,
  favoriteFoods: ["Pizza", "Rfissa"],
});
Person1.save()
  .then((data) => console.log(data))
  .catch((e) => console.log(e.message));

// // Create multiple Person documents and save them to the database
// const arrayOfPeople = [
//   { name: "Hamid", age: 40, favoriteFoods: ["pasta", "lkhobz"] },
//   { name: "Yassine", age: 35, favoriteFoods: ["Water of life", "ice cream"] },
//   { name: "Ilyass", age: 20, favoriteFoods: ["steak", "Candy"] },
//   { name: "Ilyass", age: 20, favoriteFoods: ["Candy", "steak"] },
//   { name: "Ilyass", age: 20, favoriteFoods: ["Coffee", "Dinde"] },
//   { name: "Ilyass", age: 20, favoriteFoods: ["Milk", "Tea"] },
// ];
// Person.create(arrayOfPeople)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e.message));

// // find all person(documents) with name "Ilyass"
// Person.find({ name: "Ilyass" }).then((find) => console.log("find",find));

// //find first person(document) with name Ilyass
// Person.findOne({ name: "Ilyass" }).then((find) => console.log("findOne",find));

// //find document by here id
// Person.findById("645a3405b18b29453d0a1656").then((find) => console.log("findById",find)).catch(e=>console.log(e.message));

// //find by id and update with adding "humberger" in favorites foods
// Person.findById("645a3405b18b29453d0a1656")
//   .then((person) => {
//     person.favoriteFoods.push("hamburger");
//     return person.save();
//   })
//   .then((updatedPerson) => console.log(updatedPerson))
//   .catch((e) => console.log(e.message));

////update age of persone name soufiane
// updatePersonAge("Soufiane")
// async function updatePersonAge(personName) {
//       const updatedPerson = await Person.findOneAndUpdate(
//         { name: 'Ilyass' }, // search criteria
//         { age: 99 }, // update age to 20
//         { new: true } // return the updated document
//       );
//       console.log(updatedPerson)
//       return updatedPerson;
//     }

// //delete person by id
// deletePersonById("645a32fa8b79402979e7e28a")
// async function deletePersonById(personId) {
//       const deletedPerson = await Person.findByIdAndRemove(personId);
//       return deletedPerson;
//     }

// //remove didnt work because of version
// deleteName()
// async function deleteName() {
//       const result = await Person.remove({ name: "ilayss" });
//       return result;
//     }

////delete many person with name Ilyass
// deleteName()
// async function deleteName() {
//       const result = await Person.deleteMany({ name: "Ilyass" });
//       return result;
//     }

////Find people who like Rfissa. Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select()
// findRfissaLovers();
// async function findRfissaLovers() {
//   const result = await Person.find({ favoriteFoods: "Rfissa" })
//     .sort({ name: 1 })
//     .limit(2)
//     .select("-age")
//     .exec();
//     console.log(result)
//   return result;
// }

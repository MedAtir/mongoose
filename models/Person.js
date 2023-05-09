const { Schema,model } = require("mongoose");

// creation de schema du model
const personSchema = new Schema({
  name:{
    type:String,
    required:true, 
    lowercase:true
  }, 
  age: {
    type:Number,
    required:true,
    min:10,
    max:80,
  },
  favoriteFoods:[String]
});
//creation du model Person en ralation avec schema
const Person= model("Person",personSchema)

//exporter le model sous forme de module
module.exports = Person
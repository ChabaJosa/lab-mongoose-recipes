const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data.js'); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// Iteration 2

// Recipe.create({
//   title: "Pizza",
//   level: "Easy",
//   Ingredients: ["Cheese","Salsa","More Salsa"],
//   cuisine: "Italian",
//   dishType: "Snack",
//   image: "pizza.url",
//   duration: 40,
//   creator: "Chaba De la Nonna Di Pasta Ciao",
// })

// Iteration 3

// Recipe.insertMany(data).then(res =>{
//   Recipe.find().then(res=>{
//     console.log(res)
//   })
// })

// Iteration 4

// Recipe.update({title:"Rigatoni alla Genovese"}, {duration: 100}).then(res => console.log("Iteration 4 ",res))

// Iteration 5

// Recipe.deleteOne({_id:"5e601b9863e8fd2ab43e6485"}).then(res => console.log(res))

// Iteration 6

// mongoose.connection.close();




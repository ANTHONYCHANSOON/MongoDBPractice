//npm i mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

//schema

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Hey need a name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "yum"
})

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Awesome"
})

const orange = new Fruit({
    name: "Orange",
    rating: 5,
    review: "Too Sour"
})

const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "Cool"
})

const avocado = new Fruit({
    name : "Avocado",
    rating : 2,
    review : "GREEN!"
})

//avocado.save();
//save 1
//fruit.save();

//save many
// Fruit.insertMany([kiwi,orange,banana], function(err)
// {
//     if (err)
//     {
//         console.log(err);
//     } else {
//         console.log("success")
//     }
// })


// find all
let myArrayofFruits = [];
Fruit.find(function (err, data) {
    if (err) {
        console.log(err)
    } else {

        // for(let i = 0; i < data.length; i++) {
        //     myArrayofFruits.push(data[i].name);
        // }
        // console.log(myArrayofFruits);

        data.forEach(function (pickme) {
            console.log(pickme.name)
        })
        //close db connection
        mongoose.connection.close();
    }
})


// Fruit.updateOne({ _id: "5ed4a33582f261512817d371" }, { name: "Kiwi" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("success");

//     }
// })

// Fruit.deleteOne({ _id: "5ed4a0a090e2b62f807622f8" }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("deleted");

//     }
// })


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit : fruitSchema
});

const Person = mongoose.model("personcollection", personSchema);

const person = new Person({
    name: "Ant",
    age: 32,
    favoriteFruit : avocado
})

person.save();
// Person.deleteMany({ name: "Ant" }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("succss");
//     }
// })
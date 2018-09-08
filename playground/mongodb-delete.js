//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name: 'andrew', age:25};
var {name} = user;

console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (error, DataB) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');

    } 
    console.log('Connected to MongoDB server');

    //deleteMany

    // DataB.db('TodoApp').collection('Todos').deleteMany({text: 'Eat lunch'}).then((results)=>{
    //     console.log(results);
    // });

    //deleteOne

    // DataB.db('TodoApp').collection('Todos').deleteOne({text: 'Eat lunch'}).then((results)=>{
    //     console.log(results);
    // });

    //findOneAndDelete

    // DataB.db('TodoApp').collection('Todos').findOneAndDelete({completed:false}).then((results)=>{
    //     console.log(results);
    // });

    //DataB.close();


    //TAREA:

    // DataB.db('TodoApp').collection('Users').deleteMany({name: 'Miguel Plaza'}).then((results)=>{
    //     console.log(results);
    // });

    const code = "5b92d26392b88b0390719968";

    DataB.db('TodoApp').collection('Users').findOneAndDelete({
        _id: new ObjectID(code)
    }).then((results)=>{
        console.log(results);
    });


});
 
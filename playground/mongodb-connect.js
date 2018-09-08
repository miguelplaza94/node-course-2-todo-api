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

    //const db = client.db('TodoApp');

    // DataB.db('TodoApp').collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false,

    // }, (error, result)=> {
    //     if(error){
    //         return console.log('Unable to insert todo', error);
    
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    
    // DataB.db('TodoApp').collection('Users').insertOne({
        
    //     name: 'Miguel Plaza',
    //     age: 24,
    //     location: 'asdfasdfsdfasdf',

    // }, (error, result)=> {
    //     if(error){

    //         return console.log('Unable to insert users', error);
    
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    DataB.close();

});
 
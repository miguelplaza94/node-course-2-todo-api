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

    // DataB.db('TodoApp').collection('Todos').find({
    //     _id: new ObjectID('5b92c691b9115b0454b9a206')
    // }).toArray().then((docs)=>{

    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (error) => {
    //     console.log('Unable to fetch todos'. err);
    // });

    // DataB.db('TodoApp').collection('Todos').find().count().then((counts)=>{

    //     console.log(`Todos counts: ${counts}`);

    // }, (error) => {
    //     console.log('Unable to fetch todos'. err);
    // });


    //Para hacer un query a los usuarios:

    DataB.db('TodoApp').collection('Users').find({name:"Miguel Plaza"}).toArray().then((docs)=>{

        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (error) => {
        console.log('Unable to fetch users'. err);
    });

    //DataB.close();

});
 
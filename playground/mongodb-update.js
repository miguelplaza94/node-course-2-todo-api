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

    

    // DataB.db('TodoApp').collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b92c90e73e8d020c8d0756f')
    // }, {
    //     $set : {
    //         completed:true,
    //     }
    // }, {
    //     returnOriginal:false,
    // }).then((result) => {
    //     console.log(result);
    // });
   
    DataB.db('TodoApp').collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b9341634de56f1f958b87e2')
    }, {

        $set : {
            name:'Miguel',
        },
        $inc: {
            age:1
        }

    }, {

        returnOriginal:false,
        
    }).then((result) => {
        console.log(result);
    });
   

    //DataB.close();





});
 
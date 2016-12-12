//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Deivis', age: '25'};
// var {name} = user;
// console.log(name);

//first arg is a string url where database lives, second arg a callback function after con succeeded of failed
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if(err){
           return console.log('Unable to connect to MongoDB server')
        }
        console.log('Connected to MongoDB server');

    //adding data

        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     completed: false
        //
        // }, (err,result) => {
        //     if(err){
        //         return console.log('unable to insert todo', err)
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

    // db.collection('Users').insertOne({
    //             name: 'Deividas',
    //             age: 24,
    //             location: 'London'
    //     }, (err,result) => {
    //             if(err){
    //                return console.log('Unable insert users to Todoapp', err);
    //             }
    //             console.log(JSON.stringify(result.ops, undefined, 2));
    //             console.log(result.ops[0]._id.getTimestamp());
    //     });

        db.close();
});
const {MongoClient, ObjectID} = require('mongodb');

//first arg is a string url where database lives, second arg a callback function after con succeeded of failed
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    //fetching data

    // db.collection('Todos').find({
    //     _id: new ObjectID('584e9f107fd739c4fb408547')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unbale to fetch todos', err)
    // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unbale to fetch todos', err)
    // });


    db.collection('Users')
        .find({name: 'Jen'})
        .toArray()
        .then((docs) => {

        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
           console.log('unbale to fetch todos', err)
         });


  //  db.close();
});
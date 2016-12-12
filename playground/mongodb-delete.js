const {MongoClient, ObjectID} = require('mongodb');

//first arg is a string url where database lives, second arg a callback function after con succeeded of failed
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    //deleting data methods
    //deleteMany , deleteOne, findOneAndDelete

    //deleteMany

    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    //
    // });

    // findOneAndDelete

    //
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    //challange

    // db.collection('Users').deleteMany({name: 'Deividas'}).then((result)=>{
    //     console.log(result);
    //
    // });


    db.collection('Users').findOneAndDelete(
        {_id: new ObjectID("584e9bdd22e70f0af45f9990")}
    ).then((result) => {

        console.log(result);
    });


  //  db.close();
});
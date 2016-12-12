const {MongoClient, ObjectID} = require('mongodb');

//first arg is a string url where database lives, second arg a callback function after con succeeded of failed
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    //update data methods
    //

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("584eaa4e7fd739c4fb4087ce"),
    // },{
    //     $set: {
    //        completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //
    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("584e9a3d5fd10324a09b80ff")
    },{
        $set:{name: 'Deividas' },
        $inc:{age: 1}
    },{
        returnOriginal: false
        }
    ).then((result) => {

        console.log(result);
    });

  //  db.close();
});
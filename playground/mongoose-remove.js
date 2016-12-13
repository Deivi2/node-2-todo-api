const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//     console.log(result)
// });

//Todo.findOneAndRemove

//Todo.findByIdAndRemove

Todo.findByIdAndRemove({_id: '5850605239e1ed4f5babdcf6'}).then((todo) => {
    console.log(todo);

});


Todo.findByIdAndRemove('5850605239e1ed4f5babdcf6').then((todo) => {
    console.log(todo);
});
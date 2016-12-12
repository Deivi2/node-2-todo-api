const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '584f031afdc983542a1a31df';
//
// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }
//


// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('todos:', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('todo:', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('id not found')
//     }
//     console.log('todo By id:', todo);
// }).catch((e) => console.log(e));



var id = '584ee4b12adfdfc025c28922';


    User.find({
        _id: id
    }).then((user)=>{
     console.log('user by fund:', user);
 });

    User.findById(id).then((user)=>{
        if(!user){
          return  console.log('User not found');
        }
       console.log(`User found by id ${user}`)
    }).catch((e) => console.log(e));





const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo.js');
const {User} = require('./../../models/user.js');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();


const todos = [{
    _id: new ObjectID(),
    text: 'First text todo',
    _creator_id: userOneId
}, {
    _id: new ObjectID(),
    text: 'Second text todo',
    completed: true,
    completedAt: 333,
    _creator_id: userTwoId
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};



const users = [{
    _id: userOneId,
    email: 'Puzeras@gmail.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]

}, {
    _id: userTwoId,
    email: 'mors@gmail.com',
    password: 'userTwoPass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId, access: 'auth'}, 'abc123').toString()
    }]
}];


const populateUsers = (done) => {
    User.remove({}).then(() => {
       var userOne = new User(users[0]).save();
       var userTwo = new User(users[1]).save();

       return Promise.all([userOne, userTwo])
    }).then(() => done());
};


module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
}
var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();
//middleware
app.use(bodyParser.json());

app.post('/todos', (req,res) => {
      var todo = new Todo({
          text: req.body.text,
      });
        var todo2 = new Todo({
            text: req.body.text,
            completed: req.body.completed,
            completedAt: req.body.completedAt
        });

    // todo.save().then((doc) => {
    //     res.send(doc);
    // }, (e) => {
    //     res.status(404).send(e);
    // })

    todo2.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(404).send(e);
    })


});


app.listen(3000, ()=> {
   console.log('Started on port 3000');
});
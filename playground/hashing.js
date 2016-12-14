const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = ' 123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//    bcrypt.hash(password, salt, (err, hash) => {
//            console.log(hash);
//    });
// });

var hashedpassword = '$2a$10$RsK5ZsH7UQCuRRadCyV1lu5/NZr5Ytof0n1AWzN2FoGiRcsB9Djzq';

bcrypt.compare(password, hashedpassword, (err,res) => {
    console.log(res);
});






// var data = {
//     id: 10
// };
//
//
// var token = jwt.sign(data, '123abc');
//
// console.log(token);
//
//
// var decoded = jwt.verify(token, '123abc');
//
// console.log('decoded token' , decoded);

// var message = 'I am user number 3';
//
// var hash = SHA256(message).toString();
//
// console.log(`massage var : ${message} \n
//             the hash : ${hash}`);
//
//
// // var data = {
// //     id: 4
// // };
// //
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+ 'somesecret').toString()
// };
//
// var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString();
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// if(resultHash === token.hash){
//
//     console.log('data was not changed' , resultHash + "       " + token.hash);
// }  else {
//     console.log('data was changed dont trust', resultHash + "       " + token.hash);
// }



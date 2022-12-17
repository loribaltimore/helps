let mongoose = require('mongoose');
let User = mongoose.model('user');
let generateUser = require('../../models/generateUser');
const CustomError = require('../../util/CustomError');


module.exports.signupPost = async (req, res, next) => {
    let {firstName, lastName, age, streetNumber, streetName, city, state,
        phone, email, username, billStreetName, password,
        billStreetNumber, billCity, billState, interests } = req.body;
    let genUser = generateUser(firstName, lastName, age, streetNumber,
        streetName, city, state, phone, email, username,
        billStreetName, billStreetNumber, billCity, billState);
    let newUser = await new User(genUser);
    interests.forEach(function (element, index) {
        newUser.charities.interests.set(element, {score: 1, tags: {}})
    });
    // console.log(newUser);
    // await User.register(newUser, auth.password);
    // await newUser.save();
    // req.login(newUser, (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
   return res.send(newUser);
};
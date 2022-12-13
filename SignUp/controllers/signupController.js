let mongoose = require('mongoose');
let User = mongoose.model('user');
let generateUser = require('../../models/generateUser');


module.exports.signupPost = async (req, res, next) => {
    
    let { bio, shipping, billing, contact, auth, interests } = req.body;
    console.log('THIS IS HAPPENING AFTER THE VALIDATOR');
    let genUser = generateUser(bio, shipping, billing, contact, auth);
    let newUser = await new User(genUser);
    interests.forEach(function (element, index) {
        newUser.charities.interests.set(element, {score: 1, tags: {}})
    });
    // await User.register(newUser, auth.password);
    // await newUser.save();
    // req.login(newUser, (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
    res.send(newUser);
};
let mongoose = require('mongoose');
let User = mongoose.model('user');
let generateUser = require('../models/generateUser');


module.exports.signupPost = async (req, res, next) => {
    let { bio, shipping, billing, contact, auth, interests } = req.body;
    let genUser = generateUser(bio, shipping, billing, contact, auth, interests);
    let newUser = await new User(genUser);
    res.send(newUser);
};
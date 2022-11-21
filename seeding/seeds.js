let mongoose = require('mongoose');
const User = require('../models/userSchema');
mongoose.connect('mongodb://localhost:27017/helps')
    .then(console.log('Database is Live')).catch(err => console.log(err));

let seedUser = async () => {
    let newUser = await new User({
        username: 'dev',
        bio: {
            firstName: 'Dakota',
            lastName: 'Boing',
            age: 29
        },
        address: {
            shipping: {
                number: '1',
                street: '1st',
                city: 'town',
                state: 'Alabama',
            },
            billing: {
                number: '1',
                street: '1st',
                city: 'town',
                state: 'Alabama',
            }
        },
        contact: {
            phone: '1234567890',
            email: 'dev@dev.com'
        }
    }).save();
    console.log(newUser);
};

// seedUser();

let cleanUsers = async () => {
    await User.deleteMany({});
    console.log('Users Deleted!')
};

// cleanUsers();
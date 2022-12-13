let mongoose = require('mongoose');
const User = require('../models/userSchema');
let Product = require('../models/productSchema');
mongoose.connect('mongodb://localhost:27017/helps')
    .then(console.log('Database is Live')).catch(err => console.log(err));

let seedUser = async () => {
    await User.deleteMany({});
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
    });
    let password = 'dev';
    await User.register(newUser, password);
    await newUser.save();
    console.log(newUser);
};

// seedUser();

// let cleanUsers = async () => {
//     await User.deleteMany({});
//     console.log('Users Deleted!')
// };

// cleanUsers();

let seedInterests = async () => {
    let currentUser = await User.findOne({ username: 'dev' });
        let newMap = new Map();
        let interests = [
            'animals',
            'climate',
            'conservation',
            'coronavirus',
            'culture'];
        interests.forEach(function (element, index) {
            newMap.set(element, { score: 1, tags: {} });
        });
    currentUser.charities.interests = newMap;
    // currentUser.charities.liked.tags.set('research', 1);
    // currentUser.charities.liked.tags.set('humans', 1);
    await currentUser.save();
    
console.log(currentUser);
console.log('finished!')
};

seedInterests();

let seedProducts = async () => {
    await Product.deleteMany({});
    let shirt = await new Product({
        name: 'shirt',
        price: 30
    }).save();

    let hat = await new Product({
        name: 'hat',
        price: 20,
    }).save();

    let hoodie = await new Product({
        name: 'hoodie',
        price: 50
    }).save();

    let stickers = await new Product({
        name: 'stickers',
        price: 10
    }).save();
};

// seedProducts();

let seedTags = async () => {
    let currentUser = await User.findOne({ username: 'dev' });
    // let allKeys = [...currentUser.charities.interests.keys()];
    // allKeys.forEach(function (element, index) {
    //     console.log(currentUser.charities.interests.get(element).tags);
    // });
    await currentUser.save();
};

// seedTags();
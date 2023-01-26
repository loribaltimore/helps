let mongoose = require('mongoose');
const User = require('../models/userSchema');
let Product = require('../models/productSchema');
let Donation = require('../models/donationSchema');
let DonationQueue = require('../models/donationQueueSchema');
let casual = require('casual');
const { OutdoorGrillTwoTone } = require('@mui/icons-material');

mongoose.connect('mongodb://localhost:27017/helps')
    .then(console.log('Database is Live')).catch(err => console.log(err));

let seedUser = async () => {
    await User.deleteMany({});
    for (let i = 0; i < 1000; i++) {
        let newUser = await new User({
            username: `dev${i}`,
            bio: {
                firstName: casual.first_name,
                lastName: casual.last_name,
                age: casual.integer(from = 18, to = 64)
            },
            address: {
                shipping: {
                    number: casual.integer(from = 1, to = 400),
                    street: casual.street,
                    city: casual.city,
                    state: casual.state,
                },
                billing: {
                    number: casual.integer(from = 1, to = 400),
                    street: casual.street,
                    city: casual.city,
                    state: casual.state,
                }
            },
            contact: {
                phone: casual.phone,
                email: `dev${i}@dev.com`
            }
        });
        let password = 'dev';
        await User.register(newUser, password);
        await newUser.save();
        console.log(newUser);
    };
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

// seedInterests();

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

let allProducts = async () => {
    // await Product.deleteMany({});
    let allProducts = await Product.find({});
    await Product.deleteOne({ name: 'sdf' });
};
// allProducts();

let seedDonations = async () => {
    let currentUser = await User.findOne({ username: 'dev' });
    currentUser.charities.liked.orgs = [];

    // console.log(currentUser.charities.liked.orgs.slice(0, 5))
    // currentUser.charities.liked.orgs = currentUser.charities.liked.orgs.slice(0, 3);
    await currentUser.save();
    // currentUser.charities.liked.orgs = currentUser.charities.liked.orgs.map(function (element, index) {
    //     if (element === undefined || element === null) {
    //         return {sort: 1}
    //     } else {
    //         console.log(element)
    //         element.sort = 0;
    //         return element;
    //     }
        
    // });
    // console.log(currentUser.charities.liked.orgs);

};

// seedDonations();

let seedPermissions = async () => {
    let currentUser = await User.findOne({ username: 'dev' });
    currentUser.admin.permissions.push('admin');
    await currentUser.save();
console.log('Permissions Seeded!')
};

// seedPermissions();

let getProducts = async () => {
    // let allProducts = await Product.find({});
    let stickers = await Product.findOne({ name: 'Coin' })
    stickers.code = 'price_1MRIq1JdX2WdfgCJLpJ9fD61';
    stickers.price = 5;
    await stickers.save();
    console.log(stickers);

    // await Product.deleteOne({ name: 'Coin' });
    // allProducts.forEach(async (element, index) => {
    //     element.price += 0.01;
    //     await element.save();
    // })
};
// getProducts();

let seedDonationQueue = async () => {
    // let allDonations = await Donation.find({});
    // console.log(allDonations);
    // let newQueue = await new DonationQueue({}).save();
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    // queue.pool = new Map();
    console.log(queue.queue.length);
    // await queue.save();
    // allDonations = allDonations.map(x => x.id);
    // await DonationQueue.deleteMany({});
    // newQueue.queue = [...allDonations];
    // console.log(newQueue);
};

// seedDonationQueue();

let seedDonation = async () => {

    let allUsers = await User.find({});
    console.log(allUsers);
    let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' });
    officialQueue.queue = [];
    await Donation.deleteMany({});
    let org = { name: 'TEST', ein: "1234567" };
    let amt = { total: 1000, final: 950 };
    allUsers.forEach(async (element, index) => {
        let newDonation = await new Donation({
            user: {
                user_id: element.id,
                firstName: element.bio.firstName,
                lastName: element.bio.lastName,
                email: element.contact.email,
            },
            org: {
                name: org.name + index,
                ein: org.ein,
            },
            transaction: {
                amount: {
                    total: amt.total,
                    final: amt.final,
                    // stripe_id: stripeId
                }
            }
        }).save();
       await officialQueue.addToQueue(newDonation.id);
    });
    console.log('ALL DONATIONS');
    console.log(officialQueue.queue.length);
};

seedDonation();

let test = async () => {
    let currentUser = await User.findOne({ username: 'dev' });
    console.log(currentUser.charities);
};

// test();



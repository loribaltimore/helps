let mongoose = require('mongoose');
const User = require('../models/userSchema');
let Product = require('../models/productSchema');
let Donation = require('../models/donationSchema');
let DonationQueue = require('../models/donationQueueSchema');
let casual = require('casual');
let axios = require('axios');

mongoose.connect('mongodb://localhost:27017/helps')
    .then(console.log('Database is Live')).catch(err => console.log(err));

let seedUser = async () => {
    await User.deleteMany({});
    for (let i = 0; i < 100; i++) {
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
    let allUsers = await User.find({});
    allUsers[0].username = 'dev';
    await allUsers[0].save();
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
    let cause = 'climate';
    let response = await axios({
        method: 'get',
        url: `https://partners.every.org/v0.2/browse/${cause}?apiKey=5650c89629828b8990f49fa4aeb665fd`,
        params: {
            take: '100',
        }
    }).then(data => { return data.data.nonprofits }).catch(err => console.log(err));

    let allUsers = await User.find({});
    let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' });
    officialQueue.queue = [];
    
    await officialQueue.save();
    // await Donation.deleteMany({});
    let amt = { total: 1000, final: 950 };
    // allUsers.forEach(async (element, index) => {
    //     let rand = Math.floor(Math.random() * 100);
    //     // console.log(rand);
    //     // console.log(response[rand]);
    //     let org = response[rand];
    //     let newDonation = await new Donation({
    //         user: {
    //             user_id: element.id,
    //             firstName: element.bio.firstName,
    //             lastName: element.bio.lastName,
    //             email: element.contact.email,
    //         },
    //         org: {
    //             name: org.name,
    //             ein: org.ein,
    //             img: org.logoUrl
    //         },
    //         transaction: {
    //             amount: {
    //                 total: amt.total,
    //                 final: amt.final,
    //                 // stripe_id: stripeId
    //             }
    //         }
    //     }).save();
    //     await officialQueue.addToQueue(newDonation.id);
    //     element.charities.donations.push(newDonation);
    //     element.membership.totalDonations += amt.final;
    //     await element.save();
        
    // });
    console.log('ALL DONATIONS');
    console.log(officialQueue.history);
};

// seedDonation();

let test = async () => {
    let currentUser = await User.findOne({ username: 'dev' });
    currentUser.charities.donations = [];
    currentUser.membership.totalDonations = 0;
    console.log(currentUser.charities.donations);
    // currentUser.charities.liked.orgs.shift();
//    currentUser.charities.liked.orgs.unshift({
//     description: "the helps Pool will take all user donations and make on large donation to an organization voted on by each user.",
//     name: "helps Pool",
//     profileUrl: 'https://www.every.org/lilbubsbigfund',
//     logoUrl: 'https://res.cloudinary.com/demgmfow6/image/upload/c_lfill,w_25,h_25,dpr_2/c_crop,ar_25:25/q_auto,f_auto,fl_progressive/v1671644999/helps/vggmorzngbqcniaejrrt.jpg',
//     coverImageUrl: 'https://res.cloudinary.com/demgmfow6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1671562550/helps/ftbgr37eg2nqtv0ydbej.jpg',
//     matchedTerms: [],
//     slug: 'helpspool',
//     location: 'BELLEVUE, WA',
//     tags: [],
//     sort: 0,
//   })
    // currentUser.admin.permissions.push('admin');
    await currentUser.save();
};

test();



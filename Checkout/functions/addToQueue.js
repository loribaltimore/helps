let DonationQueue = require('../../models/donationQueueSchema');
let Donation = require('../../models/donationSchema');
let User = require('../../models/userSchema');

let addToQueue = async (cart) => {
    let { toDonate, currentUser, items } = cart;
    console.log('THIS IS ITEMS');
    console.log(items);
    let user = await User.findById(currentUser._id);
    let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' })
        .then(data => { return data }).catch(err => console.log(err));
    toDonate.forEach(async (element, index) => {
        let { ein, slug } = element;
        user.charities.donations.push(element);
        
        user.addDonation(element.coinTotal, currentUser._id);
        
        let newDonation = await new Donation({
            user: {
                user_id: currentUser.id,
                firstName: currentUser.bio.firstName,
                lastName: currentUser.bio.lastName,
                email: currentUser.contact.email,
            },
            org: {
                name: element.name,
                ein:
                    ein !== undefined ?
                        ein : '',
                slug: 
                    slug !== undefined ?
                        slug : '',
                img: element.logoUrl
            },
            transaction: {
                amount: {
                    total: element.coinTotal,
                    final: element.coinTotal,
                   
                },
                items: items,
                shipTo: currentUser.address.shipping
            }
        }).save();
        console.log('THIS IS THE DONATION');
        console.log(newDonation);
        user.charities.donations.push(newDonation);
        await officialQueue.addToQueue(newDonation.id);
    });
    await user.save();
    return officialQueue;
};

module.exports = addToQueue;



// program ability to donate more than one coin per charityByCause;
// program pool => prompt to submit remainder of funds to pool;
// pool selects random charity => new donation added to queue;
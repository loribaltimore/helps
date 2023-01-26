let DonationQueue = require('../../models/donationQueueSchema');
let Donation = require('../../models/donationSchema');

let addToQueue = async (cart) => {
    let { toDonate, currentUser } = cart;
    let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' })
        .then(data => { return data }).catch(err => console.log(err));
    toDonate.forEach(async (element, index) => {
        let newDonation = await new Donation({
            user: {
                user_id: currentUser.id,
                firstName: currentUser.bio.firstName,
                lastName: currentUser.bio.lastName,
                email: currentUser.contact.email,
            },
            org: {
                name: element.name,
                ein: element.ein,
            },
            transaction: {
                amount: {
                    total: amt,
                    final: amt,
                    // stripe_id: stripeId
                }
            }
        }).save();
        console.log(newDonation);
        await officialQueue.addToQueue(newDonation.id);
    });
    return officialQueue;
};

module.exports = addToQueue;



// program ability to donate more than one coin per charityByCause;
// program pool => prompt to submit remainder of funds to pool;
// pool selects random charity => new donation added to queue;
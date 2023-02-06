let DonationQueue = require('../../models/donationQueueSchema');
// let Donation = require('../../models/donationSchema');

let addToHistory = async (currentDonation) => {
    console.log('ADD TO HISTORY IS WORKING');
    console.log(currentDonation);
    let { org, transaction } = currentDonation;
    let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' });
    let queue = await officialQueue.addToHistory(org.name, transaction.amount.final);
    let updatedQueue = await officialQueue.removeFromQueue(currentDonation._id)
        .then(data => { return data }).catch(err => console.log(err));
};

module.exports = addToHistory;
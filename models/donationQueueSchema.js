let mongoose = require('mongoose');
let { Schema, model } = mongoose;
let { donationSchema } = mongoose;
let Donation = model('donation', donationSchema);

let donationQueueSchema = new Schema({
    name: {
        type: String,
        default: 'officialQueue'
    },
    queue: [
        {
            type: Schema.Types.ObjectId,
            ref: 'donation',
        }
    ],
    pool: {
        type: Map,
        of: Object,
        default: new Map()
    }
});


donationQueueSchema.method('removeFromQueue', async (donationId) => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    let popQueue = queue.populate('queue')
        .then(data => { return data.queue }).catch(err => console.log(err));
        console.log(popQueue.length);
    let index = popQueue.indexOf(donationId);
    popQueue[index].sort = 1;
    popQueue.sort((a, b) => {
        return a.sort - b.sort;
    });
    popQueue.pop();
    console.log(popQueue.length);
    queue.queue = popQueue;
    await queue.save();
})

donationQueueSchema.method('addToQueue', async (donationId) => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    console.log(queue.queue.length);
    queue.queue.push(donationId);
    await queue.save();
    console.log(queue.queue.length);
});

donationQueueSchema.method('addToPool', async (amt, name, id) => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    let currentDonator = queue.pool.get(id);
    currentDonator === undefined ?
        queue.pool.set(id, { amt, name }) : queue.pool.set(id, {amt: currentDonator.amt + amt, name});
    // queue.pool.amount += amt;
    // queue.pool.donators.push(name);
    await queue.save();
});

donationQueueSchema.method('populateQueue', async () => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    let popQueue = await queue.populate('queue')
        .then(data => { return data.queue.slice(0, 150) })
        .catch(err => console.log(err));
    return popQueue;
});



let DonationQueue = model('donationqueue', donationQueueSchema);

module.exports = DonationQueue;




// create donation queue and donation data model;
// finish creating donation queue to store donation data model.
// that way after user chooses charities to donate to i can store it and work through
// them to pay each charity

// hopefully i can pool money into stripe and pay them off myself one by one;


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
    },
    history: {
        type: Map,
        of: Object,
        default: new Map()
    }
});


donationQueueSchema.method('removeFromQueue', async (donationId) => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    console.log('QUEUE length')
    console.log(queue.queue.length);
    let index = queue.queue.indexOf(donationId);
    console.log(donationId);
    console.log(index);
    console.log(queue.queue[index]);

    
        
    let popQueue = await queue.populate('queue')
        .then(data => { return data.queue }).catch(err => console.log(err));    
    popQueue[index].sort = 1;
    popQueue.sort((a, b) => {
        return b.sort - a.sort;
    });
    popQueue.shift();
    queue.queue = popQueue;
    await queue.save();
    console.log("QUEUE SHOULD BE");
    return queue;
})

donationQueueSchema.method('addToQueue', async (donationId) => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    queue.queue.push(donationId);
    await queue.save();
});

donationQueueSchema.method('addToPool', async (amount, name, id) => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    let currentDonator = queue.pool.get(id);
    currentDonator === undefined ?
        queue.pool.set(id, { amount, name }) : queue.pool.set(id, {amt: currentDonator.amt + amount, name});
    await queue.save();
});

donationQueueSchema.method('removeFromPool', async (amount, name, id) => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    queue.pool.delete(id) 
    await queue.save();
})

donationQueueSchema.method('populateQueue', async () => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });
    let popQueue = await queue.populate('queue')
        .then(data => { return data.queue.slice(0, 150) })
        .catch(err => console.log(err));
    return popQueue;
});

donationQueueSchema.method('addToHistory', async (org, amt) => {
    let queue = await DonationQueue.findOne({ name: 'officialQueue' });

    if (queue.history.get(org) === undefined) {
        console.log("SHOULD EXIST")
        queue.history.set(org, amt);
    } else {
        let getAmt = queue.history.get(org);
        console.log(getAmt);
        let newAmt = getAmt += amt;
        console.log('ADD OT HISTORY WORKING, NEW AMT SHOULD BE');
        console.log(newAmt);
        queue.history.set(org, newAmt);
    }; 

    await queue.save();

    return queue;
});



let DonationQueue = model('donationqueue', donationQueueSchema);

module.exports = DonationQueue;




// create donation queue and donation data model;
// finish creating donation queue to store donation data model.
// that way after user chooses charities to donate to i can store it and work through
// them to pay each charity

// hopefully i can pool money into stripe and pay them off myself one by one;


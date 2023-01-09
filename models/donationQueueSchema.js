let mongoose = require('mongoose');
let { Schema, model } = mongoose;
let Donation = require('./donationSchema');

let donationQueueSchema = new Schema({
    name: {
        type: String,
        default: 'officialQueue'
    },
    queue: [
        {
        type: Schema.Types.ObjectId,
            ref: 'Donation',
        }
    ],
    pool: {
        amount: {
            type: Number,
            default: 0
        },
        donators: [
            {
                type: String
            }
        ]
    }
});

let DonationQueue = model('donationQueue', donationQueueSchema)

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
    let queue = await DonationQueue.findOne({name: 'officialQueue'});
    console.log(queue.queue.length);
    queue.queue.push(donationId);
    await queue.save();
    console.log(queue.queue.length);

})


module.exports = DonationQueue;



// create donation queue and donation data model;
// finish creating donation queue to store donation data model.
// that way after user chooses charities to donate to i can store it and work through
// them to pay each charity

// hopefully i can pool money into stripe and pay them off myself one by one;


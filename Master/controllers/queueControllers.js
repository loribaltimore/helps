let mongoose = require('mongoose');
let { Schema, model } = mongoose;
let { donationQueueSchema, donationSchema } = mongoose;
let DonationQueue = model('donationqueue', donationQueueSchema);
let Donation = model('donation', donationSchema);


module.exports.queueGet = async (req, res, next) => {
    let { offset, limit } = req.query;
    let queuePop = [];
    let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' })
        .then(data => { return data }).catch(err => console.log(err));
    let { queue } = officialQueue;
    let slicedQueue = queue.slice(parseInt(offset), parseInt(limit));
    
    for (let i = 0; i < slicedQueue.length; i++){
        await Donation.findById(slicedQueue[i].toString())
            .then(data => {queuePop.push(data) }
            ).catch(err => console.log(err));
    };
        res.send(queuePop);
};

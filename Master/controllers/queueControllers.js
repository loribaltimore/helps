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

module.exports.queuePost = async (req, res, next) => {
    let { receiptNo, orderedFrom, donationId, itemId, type } = req.body;
    let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' });
    let response = undefined;

    switch (type) {
        case 'purchase':
            console.log('IN PURCHASE')
            response = await officialQueue.fulfillOrder(donationId, receiptNo, orderedFrom, itemId).then(data => { console.log(data);  return data}).catch(err => console.log(err));
            break;
        case 'received':
            console.log('IN RECIECED')

           response = await officialQueue.received(donationId, itemId).then(data => { console.log(data);  return data}).catch(err => console.log(err));;
            break;
        case 'shipped':
            console.log('IN SHIPPED')
           response = await officialQueue.shipped(donationId, itemId).then(data => { console.log(data);  return data}).catch(err => console.log(err));;
            break;
    };

    res.send(response);
};

let mongoose = require('mongoose');
let { Schema, model } = mongoose;

let donationSchema = new Schema([{
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    org: {
        type: String,
    },
    amount: {
        type: Number,
       
    },
    donation_id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId()
    },
    sort: {
        type: Number,
        defualt: 0
    }
}]);

let Donation = model('donation', donationSchema);

module.exports = Donation;
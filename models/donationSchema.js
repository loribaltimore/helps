let mongoose = require('mongoose');
let { Schema, model } = mongoose;

let donationSchema = new Schema([{
    user: {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    },
    org: {
       name: {
            type: String,
           required: true
        },
        ein: {
            type: String,
        },
        slug: {
            type: String,
        },
        img: {
            type: String
        }
    },
    transaction: {
        amount: {
            total: {
                type: Number,
                required: true
            },
            final: {
                type: Number,
                required: true
            },
            currency: {
                type: String,
                default: 'USD'
            }
        },
        date: {
            type: Date,
            default: new Date().toISOString()
        },
        stripe_id: {
            type: String,
        }
    },
    donation_id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId()
    },
    
    sort: {
        type: Number,
        default: 0
    },
    
}]);

let Donation = model('donation', donationSchema);

module.exports = Donation;
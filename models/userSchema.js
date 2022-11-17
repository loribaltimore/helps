let mongoose = require('mongoose');
let { Schema, model } = mongoose;
let PassportLocalMongoose = require('passport-local-mongoose');

let userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    bio: {
        firstName: {
            type: String,
            required: true,
            min: 1,
            max: 10
        },
        lastName: {
            type: String,
            required: true,
            min: 1,
            max: 10
        },
        age: {
            type: Number,
            required: true,
            min: 18
        },
    },
    address: {
        shipping: {
            num: {
                type: String
            },
            street: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String,
                enum: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
            },
            country: {
                type: String,
                default: 'USA'
            }
        },
        billing: {
            sameAsShipping: {
                type: Boolean,
                required: true,
                default: false
            },
            num: {
                type: String
            },
            street: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String,
                enum: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
            },
            country: {
                type: String,
                default: 'USA'
            }
        },
    },
    contact: {
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    membership: {
        tier: {
            type: String,
            required: true,
            enum: ['low', 'middle', 'top'],
            default: 'low'
        },
        totalDonations: {
            type: Number,
            required: true,
            default: 0
        }
    }
});

//Connect User with Passport for Authentication
userSchema.plugin(PassportLocalMongoose);

let User = model('user', userSchema);

//User Virtuals -----------
userSchema.virtual('shipping').get(function () {
    Object.keys(this.address.shipping).map(function (element, index) {
        return Object.keys(this.address.shipping)[element];
    }).join('')
}, this);
userSchema.virtual('billing').get(function () {
    Object.keys(this.address.billing).map(function (element, index) {
        return Object.keys(this.address.shipping)[element];
    }).join('')
}, this);
userSchema.virtual('name').get(function () {
    return this.bio.firstName + ' ' + this.bio.lastName;
}, this);

//User Methods ------------------
userSchema.method('addDonation').get(async (val) => {
    this.membership.totalDonations += val;
    await this.save();
}, this);

userSchema.method('changeTier').get(async () => {
    let { tier } = this.membership;
    switch (tier) {
        case 'low':
            this.membership.tier = 'middle';
            break;
        case 'middle':
            this.membership.tier = 'top';
            break;
        case 'top':
            this.membership.tier = 'top';
            break;
    };
    await this.save();
}, this);

//Edit Profile Methods
userSchema.method('changePhone').get(async (val) => {
    this.contact.phone = val;
    await this.save();
}, this);
userSchema.method('changeEmail').get(async (val) => {
    this.contact.email = val;
    await this.save();
}, this);
userSchema.method('changeFirstName').get(async (val) => {
    this.bio.firstName = val;
    await this.save();
}, this);
userSchema.method('changeLastName').get(async (val) => {
    this.bio.lastName = val;
    await this.save();
}, this);

userSchema.method('changeShipping').get(async (arr) => {
    let address = Object.keys(this.address.shipping);
    for (let i = 0; i < arr.length -1; i++){
        this.address.shipping[address[i]] = arr[i];
    };
    await this.save
}, this);

userSchema.method('changeBilling').get(async (arr = [], sameAsShipping) => {
    if (sameAsShipping === true) {
        this.address.billing = this.address.shipping
    } else {
        let address = Object.keys(this.address.billing);
        for (let i = 0; i < arr.length -1; i++){
            this.address.billing[address[i]] = arr[i];
        };
    };
    await this.save();
}, this);

module.exports = User;









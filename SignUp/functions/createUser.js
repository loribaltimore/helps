let axios = require('axios');

let createUser = async (bio, shipping, billing, contact, auth, interests) => {
    let { firstName, lastName, age } = bio;
    let { streetName, streetNumber, city, state } = shipping;
    let billStreetName = billing.streetName;
    let billStreetNumber = billing.streetNumber;
    let billCity = billing.city;
    let billState = billing.state;
    let billSAS = billing.sameAsShipping;
    let { phone, email } = contact;
    let { username, password } = auth;
    let response = await axios({
        method: 'post',
       url: 'http://localhost:3000/signup',
        data: {
            firstName,
            lastName,
            age,
            streetNumber,
            streetName,
            city,
            state,
            phone,
            email,
            username,
            password,
            billStreetName,
            billStreetNumber,
            billCity,
            billState,
            billSAS,
            interests
        }
    }).then(data => { console.log(data); return data }).catch(err => console.log(err));
    let { data } = response;
    return data;
};

module.exports = createUser;


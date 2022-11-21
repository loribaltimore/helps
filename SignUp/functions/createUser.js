let axios = require('axios');

let createUser = async (bio, shipping, billing, contact, auth, interests) => {
    let response = await axios.post(
        'http://localhost:3000/signup',
        {
            bio: bio,
            shipping: shipping,
            billing: billing,
            contact: contact,
            auth: auth,
            interests: interests
        }).then(data => { console.log(data); return data }).catch(err => console.log(err));
    
    let { data } = response;
    return data;
};

module.exports = createUser;


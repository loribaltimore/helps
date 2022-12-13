let axios = require('axios');

let likeCharity = async (id, org, cause) => {
     await axios({
        method: 'post',
        url: 'http://localhost:3000/explore/charities/like',
         data: {
            id,
             org,
            cause
        }
    }).then(data => { console.log(data); return data }).catch(err => console.log(err));

};

module.exports = likeCharity;
let axios = require('axios');

let updateSession = async (value, item) => {
    let response = await axios({
        method: 'post',
        url: 'http://localhost:3000/session',
        data: {
            value,
            item
        }
    }).then(data => { console.log(data); return data }).catch(err => console.log(err));
    return response;
};

module.exports = updateSession;
let axios = require('axios');

let getSession = async (req, res, next) => {
    let response = await axios({
        method: 'get',
        url: 'http://localhost:3000/session'
    }).then(data => { console.log('THIS IS THE RESPONSE FROM THE CLIENT'); console.log(data); return data }).catch(err => console.log(err));
    let { data } = response;
    return data;
};

module.exports = getSession;
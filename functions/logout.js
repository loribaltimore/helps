let axios = require('axios');

let logout = async (req, res, next) => {
    let response = await axios({
        method: 'get',
        url: 'http://localhost:3000/logout',
    }).then(data => { console.log(data); return data }).catch(err => console.log(err));
    let { data } = response;
    return data;
};

module.exports = logout;
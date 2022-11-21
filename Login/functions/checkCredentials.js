let axios = require('axios');

let checkCredentials = async (username, password) => {
    let response = await axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
            username,
            password
        }
    }).then(data => { console.log(data); return data }).catch(err => console.log(err));
    let { data } = response;
    return data;
};

module.exports = checkCredentials;
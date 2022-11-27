let axios =  require('axios');


let loginGet = async() => {
    let response = await axios({
        method: 'get',
        url: 'http://localhost:3000/login'
    }).then(data => { return data }).catch(err => console.log(err));
    let { data } = response;
    return data;
};

module.exports = loginGet;
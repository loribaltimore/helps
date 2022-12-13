
let axios = require('axios');

let fetchTrivia = async () => {
    let response = await axios({
        method: 'get',
        url: 'https://the-trivia-api.com/api/questions?limit=5&difficulty=easy',
    }).then(data => { console.log(data); return data.data[0] }).catch(err => console.log(err));
    return response;
};

module.exports = fetchTrivia;
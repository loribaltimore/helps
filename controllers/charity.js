let axios = require('axios');
module.exports.getCharities = async (req, res, next) => {
    let { cause } = req.params;
    let response = await axios({
        method: 'get',
        url: `https://partners.every.org/v0.2/browse/${cause}`,
        query: {
            apiKey: process.env.CHARITY_API_KEY
        }
    }).then(data => { console.log(data); return data }).catch(err => console.log(err));
    let { data } = response;
    return res.send(data);
};


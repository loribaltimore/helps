let axios = require('axios');

module.exports.charityByCause = async (req, res, next) => {
    let { cause } = req.params;
    let response = await axios({
        method: 'get',
        url: `https://partners.every.org/v0.2/browse/${cause}?apiKey=${process.env.CHARITY_API_KEY}`,
        params: {
            take: '100'
        }
    }).then(data => {  return data }).catch(err => console.log(err));
    let { data } = response;
    res.send(data);
};


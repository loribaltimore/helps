let axios = require('axios');

module.exports.getCharitiesByCause = async (req, res, next) => {
    let { cause } = req.params;
    console.log(process.env.CHARITY_API_KEY)
    console.log('getting into here bud');
    let response = await axios({
        method: 'get',
        url: `https://partners.every.org/v0.2/browse/${cause}?apiKey=${process.env.CHARITY_API_KEY}`,
    }).then(data => { console.log(data.data); return data }).catch(err => console.log(err));
    let { data } = response;
    return res.send(data);
};



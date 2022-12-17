let axios = require('axios');
let mongoose = require('mongoose');
let User = mongoose.model('user');

module.exports.charityByCause = async (req, res, next) => {
    let { cause } = req.params;
    let { currentPage } = req.query;
    let response = await axios({
        method: 'get',
        url: `https://partners.every.org/v0.2/browse/${cause}?apiKey=${process.env.CHARITY_API_KEY}`,
        params: {
            take: '100',
        }
    }).then(data => {  return data }).catch(err => console.log(err));
    let { data } = response;
    res.send(data);
};

module.exports.likeCharity = async (req, res, next) => {
    console.log('into like charity');
    let { org, id, cause } = req.body;
    let currentUser = await User.findById(id);
   let updatedInterests = await currentUser.likeCharity(currentUser._id, org, cause).then(data => { return data }).catch(err => console.log(err));
    currentUser.charities.interests = updatedInterests;
    console.log(currentUser.charities.interests);
    await currentUser.save();
};

module.exports.charityByTag = async (req, res, next) => {
    console.log('cahrity by tag');
    console.log(req.session)
    console.log(req.query);
    res.send('yaay')
};


module.exports.charityRecommended = async (req, res, next) => {
    let currentUser = await User.findById(req.user._id);
    let topInterests = currentUser.sortedInterests.slice(0, 3);
    let allRecs = [];
    let apiKey = process.env.CHARITY_API_KEY;
    for (let i = 0; i < topInterests.length; i++){
        let tags = Object.keys(topInterests[i][1].tags).slice(0, 3).join(',');
        console.log(tags);
        let response = await axios({
            method: 'get',
            url: `https://partners.every.org/v0.2/search/${topInterests[i][0]}?apiKey=${apiKey}&take=10&causes=${tags}`
       }).then(data => { return data.data.nonprofits }).catch(err => console.log(err));
        allRecs.push(...response);
    };
    let interestsByName = topInterests.map(x => x[0]);
    res.send({ allRecs, interestsByName });
};



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
    console.log(org, id, cause);
    org.sort = 0;
    org.mongo_id = mongoose.Types.ObjectId();
    let currentUser = await User.findById(id);
   let updatedInterests = await currentUser.likeCharity(currentUser._id, org, cause).then(data => { return data }).catch(err => console.log(err));
    currentUser.charities.interests = updatedInterests;
    currentUser.charities.liked.orgs.push(org);
    await currentUser.save();
    let allLiked = currentUser.charities.liked.orgs.map(x => x.name);
   return res.send({allLiked})
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


module.exports.unlikeCharity = async (req, res, next) => {
    let { org, cause } = req.body;
    let currentUser = await User.findById(req.user._id);
    console.log(currentUser.charities.liked.orgs.length)
    let updatedLiked = await currentUser.unlikeCharity(req.user._id, org, cause)
        .then(data => { return data }).catch(err => console.log(err));
    console.log(updatedLiked.length)
    let allLiked = updatedLiked;
    return res.send({ allLiked });
};

module.exports.charitySearch = async (req, res, next) => {
    let { searchTerm } = req.query;
    console.log(searchTerm);
    let response = await axios({
        method: 'get',
        url: `https://partners.every.org/v0.2/search/${searchTerm}?apiKey=${process.env.CHARITY_API_KEY}`
    }).then(data => {  return data.data.nonprofits }).catch(err => console.log(err))
    
    return res.send({ searchResults: response });
};

// just have to update MasterPage to show searched charity results;f 


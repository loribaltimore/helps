module.exports.sessionPost = async (req, res, next) => {
    let { value, item } = req.body;
    req.session[value] = item;
    res.send(req.session);
};

module.exports.sessionGet = async (req, res, next) => {
        res.send({ flash: req.session.flash, user: req.user });
    };
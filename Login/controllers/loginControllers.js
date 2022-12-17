

module.exports.loginPost = async (req, res, next) => {
    res.send(req.user);
};

module.exports.logout = async (req, res, next) => {
       await req.logout(function (err) {
            if (err) {
                return next(err)
           };
       });
    if (req.session.user === undefined) {
        res.redirect('/login')
    }
};

///why isn't flash working correctly?
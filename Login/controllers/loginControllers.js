

module.exports.loginPost = async (req, res, next) => {
    req.flash('success', 'Successfully Logged In!');
    res.send(req.user);
}
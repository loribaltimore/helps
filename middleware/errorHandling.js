let errHandler = async (err, req, res, next) => {
    let { msg, status } = err;
    if (msg) {
        return res.send(msg)
    };
    return res.send(err);
};

module.exports = errHandler;
let errHandler = async (err, req, res, next) => {
    console.log('IN ERROR');
    console.log(err);
    let { msg, status } = err;
    if (msg !== undefined) {
        return res.send({err})
    };
    return res.send({ err });

};

module.exports = errHandler;
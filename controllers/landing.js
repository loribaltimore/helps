module.exports.getLanding = async (req, res, next) => {
    return app.render(req, res, '/landing', {});
};
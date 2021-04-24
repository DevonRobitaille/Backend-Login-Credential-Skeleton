module.exports = (req, res, next) => {
    // The user has logged into the website
    if (req.user_permission === null || req.user_permission === undefined) {
        return res.status(403).json({error: 'Forbidden'})
    }
    next();
}

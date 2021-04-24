module.exports = (req, res, next) => {
    console.log("PERMISSION ID: " + req.user_permission)
    // Check to see if the permission of the user is greater that 1, which means based on the database permission table they can't be an admin.
    if (req.user_permission > 1 || req.user_permission === null || req.user_permission === undefined) {
        return res.status(403).json({error: 'Forbidden'})
    }
    next();
}

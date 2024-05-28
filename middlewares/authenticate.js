module.exports = (req, res, next) => {
    const authToken = req.headers['authorization'];

    if (authToken === 'valid_token') {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

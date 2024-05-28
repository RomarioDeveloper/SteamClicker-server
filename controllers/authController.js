exports.authenticate = (req, res) => {
    const { steamId, authToken } = req.body;

    // Простая проверка токена
    if (authToken === 'valid_token') {
        res.json({ success: true, data: { userId: steamId, username: 'Player' } });
    } else {
        res.status(401).json({ error: 'Authentication failed' });
    }

    const { logActivity } = require('../utils/logger');

    exports.authenticate = (req, res) => {
        const { steamId, authToken } = req.body;

        // Простая проверка токена
        if (authToken === 'valid_token') {
            logActivity(`Authentication successful for steamId: ${steamId}`);
            res.json({ success: true, data: { userId: steamId, username: 'Player' } });
        } else {
            logActivity(`Authentication failed for steamId: ${steamId}`);
            res.status(401).json({ error: 'Authentication failed' });
        }
    };

};

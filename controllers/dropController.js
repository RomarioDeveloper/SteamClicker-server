exports.dropItem = (req, res) => {
    const { steamId, playTime } = req.body;
    const dropRate = 0.01; // 1% шанс на дроп каждую минуту

    if (Math.random() < dropRate * playTime) {
        const itemId = Math.floor(Math.random() * 1000); // Рандомный ID предмета
        res.json({ success: true, message: 'Item dropped successfully', itemId: itemId });
    } else {
        res.json({ success: false, message: 'No item dropped' });
    }

    const { logActivity } = require('../utils/logger');

    exports.dropItem = (req, res) => {
        const { steamId, playTime } = req.body;
        const dropRate = 0.01; // 1% шанс на дроп каждую минуту

        if (Math.random() < dropRate * playTime) {
            const itemId = Math.floor(Math.random() * 1000); // Рандомный ID предмета
            logActivity(`Item dropped for steamId: ${steamId}, itemId: ${itemId}`);
            res.json({ success: true, message: 'Item dropped successfully', itemId: itemId });
        } else {
            logActivity(`No item dropped for steamId: ${steamId}`);
            res.json({ success: false, message: 'No item dropped' });
        }
    };

};

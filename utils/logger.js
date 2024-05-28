const fs = require('fs');
const path = require('path');

// Определите путь к файлу логов
const logFilePath = path.join(__dirname, '../logs/activity.log');

// Функция для записи логов
const logActivity = (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Failed to write log:', err);
        }
    });
};

module.exports = {
    logActivity
};

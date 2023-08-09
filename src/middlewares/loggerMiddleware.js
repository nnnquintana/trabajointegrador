const fs = require ('fs');
const path = require ('path');

const logFilePath = path.resolve (__dirname,'../logs/log.txt');

const loggerMiddleware = (req, res, next) => {
const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
fs.appendFileSync(logFilePath, log, {encoding: 'utf-8'});
next ();
};

module.exports = loggerMiddleware;



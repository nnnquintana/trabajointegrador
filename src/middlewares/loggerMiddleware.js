const fs = require ('fs');
const path = require ('path');

const logFilePath = path.resolve (__dirname,'../logs/log.txt');

const loggerMiddleware = (req, res, next) => {
res.on ('finish', ()=> {
    if (req.method === 'PUT') {
    const log = `[${new Date().toISOString()}] Se ha actualizado el producto con id: ${req.params.id}\n`;
    fs.appendFileSync(logFilePath, log, { encoding: 'utf-8' });
    }
});

next ();

};


module.exports = loggerMiddleware;



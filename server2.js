const connect = require('connect');
const app = connect();

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}
function hello(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end('hello');
}
function hello(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end('hello');
}
app.use('/hello', hello);
app.use(logger);
app.listen(4000);

const jwt = require('jsonwebtoken');
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
module.exports = (req, res, next) => {
    try {
        const token = localStorage.getItem('token');
        const decoded = jwt.verify(token, 'secret');
        req.userData = decoded;
        console.log(decoded);
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const authConfig = require('../../config/auth');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader){
        return res.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secrect);

        req.userId = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }
};

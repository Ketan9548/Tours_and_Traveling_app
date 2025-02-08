import jwt from 'jsonwebtoken'

const authentiMiddelware = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.security_key);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized. Please log in again.' });
    }
}

export default authentiMiddelware;
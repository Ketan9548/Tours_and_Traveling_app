import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.cookies?.token || req.headers['authorization']?.split(' ')[1]; // Extract token correctly
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure the correct env variable name
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized. Please log in again.' });
    }
};

export default authMiddleware;

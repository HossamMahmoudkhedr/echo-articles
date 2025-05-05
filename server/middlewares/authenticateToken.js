const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (!token)
		return res
			.status(401)
			.json({ message: 'Access denied. No token provided.' });

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) return res.status(403).json({ message: 'Invalid token' });
		req.user = decoded; // Store payload in req.user
		next();
	});
}

module.exports = authenticateToken;

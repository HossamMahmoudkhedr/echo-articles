const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
	const allCookies = req.headers['cookie'];
	const cookies = allCookies && allCookies.split(' ');
	let token = '';
	if (cookies) {
		cookies.forEach((cookie) => {
			if (cookie.indexOf('token') != -1) {
				token = cookie.split('=')[1];
				if (token[token.length - 1] == ';') {
					token = token.slice(0, token.length - 1);
				}
			}
		});
	}

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

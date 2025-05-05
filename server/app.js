const express = require('express');
const connectToDatabase = require('./config/db');
const authorsRouter = require('./routes/authorsRoutes');
const articlesRouter = require('./routes/articlesRoutes');
const cors = require('cors');
const app = express();

app.use(
	cors({
		origin: 'http://localhost:5173', // your frontend origin
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true, // if you're using cookies or auth headers
	})
);

app.use(express.urlencoded());
app.use(express.json());
app.use('/api/authors', authorsRouter);
app.use('/api/articles', articlesRouter);

connectToDatabase();

app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});

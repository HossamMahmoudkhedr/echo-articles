const express = require('express');
const connectToDatabase = require('./config/db');
const app = express();

app.use(express.urlencoded());
app.use(express.json());

connectToDatabase();

app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});

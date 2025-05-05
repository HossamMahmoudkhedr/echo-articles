require('dotenv').config();
const { default: mongoose } = require('mongoose');

function connectToDatabase() {
	mongoose.connect(
		`mongodb+srv://hossam:${process.env.MONGO_SECRET}@cluster0.wxo29fj.mongodb.net/echoArticles?retryWrites=true&w=majority&appName=Cluster0`
	);
}

module.exports = connectToDatabase;

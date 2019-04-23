const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/facebook2';

class Database {
	constructor() {
		this._connect();
	}

	_connect() {
		mongoose.connect(url, { useNewUrlParser: true })
			.then(db => this.db = db)
			.catch(err => console.error(`Failed to connect to database: ${err}`));
	}
}

module.exports = new Database();

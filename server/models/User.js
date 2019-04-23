const mongoose = require('mongoose');
const hasher = require('../bcrypt');
const jwt = require('jsonwebtoken');

const UsersSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	age: Number,
	email: String,
	sex: String,
	salt: String,
	hash: String,
});

UsersSchema.methods.updatePassword = function (password) {
	return new Promise((resolve, reject) => {
		hasher.genSalt().then(salt => {
			hasher.genHash(password, salt).then(hash => {
				this.salt = salt;
				this.hash = hash;
				resolve();
			}).catch(() => {
				reject({ message: 'Failed to update password' });
			});
		}).catch(() => {
			reject({ message: 'Failed to update password' });
		});
	});
};

UsersSchema.methods.validatePassword = function (password) {
	const hash = this.hash;
	return hasher.comparePassword(password, hash);
};

UsersSchema.methods.generateJWT = function() {
	const today = new Date();
	const expirationDate = new Date(today);
	expirationDate.setDate(today.getDate() + 60);

	return jwt.sign({
		name: `${this.firstName} ${this.lastName}`,
		email: this.email,
		id: this._id,
		exp: parseInt(expirationDate.getTime() / 1000, 10),
	}, 'secret');
}

module.exports = mongoose.model('Users', UsersSchema);
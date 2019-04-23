const mongoose = require('mongoose');
const hasher = require('../bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	sex: String,
	salt: String,
	hash: String,
});

UserSchema.path('email').validate(email => {
	const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailRegex.test(email);
}, 'Invalid email address.');

UserSchema.methods.updatePassword = function (password) {
	return new Promise((resolve, reject) => {
		hasher.genSalt().then(salt => {
			hasher.genHash(password, salt).then(hash => {
				this.salt = salt;
				this.hash = hash;
				this.save();
				resolve();
			}).catch(() => {
				reject({ message: 'Failed to update password' });
			});
		}).catch(() => {
			reject({ message: 'Failed to update password' });
		});
	});
};

UserSchema.methods.validatePassword = function (password) {
	const hash = this.hash;
	return hasher.comparePassword(password, hash);
};

UserSchema.methods.generateJWT = function() {
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

module.exports = mongoose.model('Users', UserSchema);
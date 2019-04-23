const bcrypt = require('bcrypt');
const saltRounds = 8;

const genSalt = function() {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(saltRounds, (err, salt) => {
			if (err) {
				return reject(err);
			}

			resolve(salt);
		});
	});
};

const genHash = function(password, salt) {
	return new Promise((resolve, reject) => {
		bcrypt.hash(password, salt, (err, hash) => {
			if (err) {
				return reject(err);
			}

			resolve(hash);
		});
	});
};

const hashPassword = function(password) {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(saltRounds, (err, salt) => {
			if (err) {
				return reject(err);
			}

			bcrypt.hash(password, salt, (e, hash) => {
				if (e) {
					return reject(e);
				}

				resolve(hash);
			});
		});
	});
};

const comparePassword = function(password, hash) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, hash, (err, res) => {
			if (err) {
				return reject(err);
			}

			resolve(!!res);
		});
	});
};

module.exports = {
	hashPassword,
	comparePassword,
	genSalt,
	genHash,
};
const User = require('../models/User');
const { Observable } = require('rxjs');
const hasher = require('../bcrypt');

class UserService {

	findByEmailAndPassword(email, password) {
		return new Observable(observer => {
			User.findOne({
				email: email.toLowerCase(),
			}, (err, user) => {
				if (err) return observer.error(err);
				if (!user) {
					return observer.error({
						message: `User with email: ${email} does not exist`,
					});
				}

				this.isPasswordValid(password, user).subscribe({
					next: () => observer.next({ ...user.toObject(), salt: undefined, hash: undefined }),
					error: e => observer.error(e),
					complete: () => observer.complete(),
				});
			});
		});
	}

	createUser(user, password) {
		return new Observable(observer => {
			User.findOne({
				email: user.email.toLowerCase(),
			}, (err, u) => {
				if (u !== null) {
					return observer.error({
						message: `User with email ${user.email} already exists.`,
					});
				}

				user.email = user.email.toLowerCase();

				User.create(user).then((result) => {
					result.updatePassword(password).then(() => {
						observer.next();
						observer.complete();
					}).catch(() => {
						User.deleteOne({ email: email.toLowerCase() });
						observer.error({
							message: 'Failed to create user.',
						});
					});
				}).catch(err => {
					return observer.error({
						message: 'Failed to create user.',
					});
				});
			});
		});
	}

	isPasswordValid(plainText, user) {
		return new Observable(observer => {
			if (!plainText) {
				return observer.error({
					message: 'Password missing',
				});
			}

			hasher.comparePassword(plainText, user.hash)
				.then(response => {
					if (!!response) {
						observer.next();
						return observer.complete();
					}

					return observer.error({
						message: 'Invalid password',
					});
				}).catch(err => {
					return observer.error({
						message: 'Failed to compare passwords',
					});
				});
		});
	}

}

const _singleton = new UserService();

module.exports = _singleton;
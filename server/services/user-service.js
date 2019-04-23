const User = require('../models/User');
const { Observable } = require('rxjs');
const hasher = require('../bcrypt');

class UserService {

	findByEmailAndPassword(email, password) {
		return new Observable(observer => {
			User.findOne({
				email: { $regex: new RegExp(email, 'i') }
			}, (err, user) => {
				if (err) return observer.error(err);
				if (!user) {
					return observer.error({
						message: `User with email: ${email} does not exist`,
					});
				}

				this.isPasswordValid(password, user).subscribe({
					next: () => observer.next({ ...user.toObject(), password: undefined }),
					error: e => observer.error(e),
					complete: () => observer.complete(),
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

			hasher.comparePassword(plainText, user.password)
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
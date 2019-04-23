const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./db');
const hasher = require('./bcrypt');
const UserService = require('./services/user-service');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
	UserService.findByEmailAndPassword(
		req.body.email,
		req.body.password
	).subscribe({
		next: (user) => res.json(user),
		error: err => res.status(500).json(err),
	});
});

require('./models/User').findOne({ firstName: 'Brandon' }, (err, user) => {
	user.updatePassword('root').then(() => user.save()).catch(console.log);
});

app.listen(9000, () => console.log('Server listening on port 9000'));
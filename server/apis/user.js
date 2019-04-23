const router = require('express').Router();
const UserService = require('../services/user-service');

router.post('/signup', (req, res) => {
  UserService.createUser(req.body, req.body.password).subscribe({
    next: () => res.json({ message: 'success' }),
    error: err => res.status(401).json(err),
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserService.findByEmailAndPassword(email, password).subscribe({
    next: user => res.json(user),
    error: err => res.status(401).json(err),
  });
});

router.put('/logout', (req, res) => {
  res.json({ message: 'API not ready' });
});

module.exports = router;
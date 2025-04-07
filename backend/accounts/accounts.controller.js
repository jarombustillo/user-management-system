const express = require('express');
const router = express.Router();
const accountService = require('./account.service');

// Register route
router.post('/register', registerSchema, register);

function register(req, res, next) {
  accountService.register(req.body)
    .then(() => res.json({ message: 'Registration successful' }))
    .catch(next);
}

module.exports = router;

router.post('/verify-email', verifyEmailSchema, verifyEmail);

function verifyEmail(req, res, next) {
  accountService.verifyEmail(req.body)
    .then(() => res.json({ message: 'Verification successful' }))
    .catch(next);
}

router.post('/authenticate', authenticateSchema, authenticate);

function authenticate(req, res, next) {
  accountService.authenticate(req.body)
    .then(({ ...account, token }) => {
      setTokenCookie(res, account.refreshToken);
      res.json({ ...account, token });
    })
    .catch(next);
}
const express = require('express');
const AuthService = require('../services/AuthService');
const router = express.Router();

// Rutas relacionadas con la autenticación
router.post('/login', async (req, res) => {
  const result = await AuthService.login(req.body);
  res.status(result.success ? 200 : 401).json(result);
});

router.post('/login-google', async (req, res) => {
  const result = await AuthService.loginWithGoogle(req.body._googleIdToken);
  res.status(result.success ? 200 : 500).json(result);
});

router.post('/register', async (req, res) => {
  const result = await AuthService.register(req.body);
  res.status(result.success ? 201 : 500).json(result);
});

router.post('/register-google', async (req, res) => {
  const result = await AuthService.registerWithGoogle(req.body._googleIdToken);
  res.status(result.success ? 201 : 500).json(result);
});

router.post('/reset-password', async (req, res) => {
  const result = await AuthService.resetPassword(req.body._identifier);
  res.status(result.success ? 200 : 404).json(result);
});

router.post('/reset-password/:token', async (req, res) => {
  const result = await AuthService.resetPasswordWithToken(req.params.token, req.body.newPassword);
  res.status(result.success ? 200 : 401).json(result);
});

module.exports = router;

// routes/auth.js
const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

// Route pour l'inscription
router.post('/signup', signup);

// Route pour la connexion
router.post('/login', login);

module.exports = router;

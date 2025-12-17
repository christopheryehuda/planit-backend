const express = require('express');
const { register, login } = require('../controllers/Auth'); 
// Pastikan nama di sini 'createTask' (sesuai isi TaskController.js)
const { getTasks, createTask } = require('../controllers/TaskController');

const router = express.Router();

// --- Jalur Auth ---
router.post('/register', register);
router.post('/login', login);

// --- Jalur Tasks ---
router.get('/tasks', getTasks);
router.post('/tasks', createTask); // Pastikan di sini juga 'createTask'

module.exports = router;
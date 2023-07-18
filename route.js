const express = require('express');
const router = express.Router();
const { getQuestions, createUser, getUser } = require('./controllers/controller');

// GET endpoint to retrieve all the questions
router.get('/questions', getQuestions);
router.get('/users/:userId', getUser);
// POST endpoint to handle user input
router.post('/users', createUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const questionController= require('../controllers/questionController')

router.get('/getQuestions',  questionController.getQuestionsByType);
// router.post('/postAnswer', authMiddleware, questionController);

module.exports = router;
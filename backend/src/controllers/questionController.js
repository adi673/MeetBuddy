// controllers/questionController.js
const Question = require('../models/questionModel');

// Fetch questions by question_type
exports.getQuestionsByType = async (req, res) => {
    try {
        // Extract question_type from query parameters
        const { question_type } = req.query;
        // console.log(req.query);   Log the query params to verify

        // Validate input
        if (!question_type) {
            console.log("Sent question type required");
            return res.status(400).json({ message: 'Question type is required.' });
        }

        // Fetch questions with the specified question_type
        const questions = await Question.find({ question_type });
        
        // Check if any questions were found
        if (questions.length === 0) {
            console.log("Length 0")
            return res.status(404).json({ message: `No questions found for type: ${question_type}` });
        }

        // Send successful response
        return res.status(200).json({ success: true, data: questions });
    } catch (error) {
        console.error('Error fetching questions:', error);
        return res.status(500).json({ message: 'Server error while fetching questions.' });
    }
};


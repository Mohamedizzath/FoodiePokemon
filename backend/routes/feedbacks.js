// Contains routes for feedbacks
const express = require('express');
const Feedback = require("../models/feedback");

const router = express.Router();

router.get('/:userId',async (req, res) => {
    // Getting all the feedbacks of a user
    const userId = req.params.userId;
    try {
        const allFeedbacks = await Feedback.find({ UserId: userId});
        return res.json(allFeedbacks);
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

router.post('/:userId',async (req, res) => {
    // Creating new feedback
    const userId = req.params.userId;
    const feedback = new Feedback({
        UserId: userId,
        Rating: req.body.rating,
        Date: new Date()
    });

    try{
        const savedData = feedback.save();
        res.status(200).json(savedData);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:feedbackid', async (req, res) => {
    try{
        const feedbackid = req.params.feedbackid;
        const data = await Feedback.findByIdAndDelete(feedbackid);
        res.send(`Feedback with id ${feedbackid} has been deleted...`);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;
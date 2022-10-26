// Schema which represents feedbacks
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
    Rating: {
        type: Number,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
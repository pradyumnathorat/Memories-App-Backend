const mongoose = require('mongoose');

const schema = mongoose.Schema;

const postSchema = schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postMessage = mongoose.model("PostMessage", postSchema);

module.exports = postMessage;
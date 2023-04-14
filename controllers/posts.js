const PostMessage = require("../models/postMessage")

const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage)
        // console.log(postMessage);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const createPost = async (req, res) => {
    const post = req.body;
    // console.log(post);
    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    // console.log(id);
    // console.log(post);
    try {
        const updatePost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
        console.log(updatePost);
        res.status(200).json(updatePost)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const deletePost = await PostMessage.findByIdAndRemove(_id)
        res.status(200).json({ message: "Delete post successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const likePost = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const post = await PostMessage.findById(_id);
        const updatePost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 } , { new : true });
        res.status(200).json(updatePost);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getPosts, createPost, updatePost, deletePost, likePost }

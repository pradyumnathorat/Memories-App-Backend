const express = require('express');

const router = express.Router();

const APIs = require("../controllers/posts.js")
// const createPost = require("../controllers/posts.js")

router.get('/', APIs.getPosts)
router.post('/', APIs.createPost)
router.patch('/:id', APIs.updatePost)
router.delete('/:id', APIs.deletePost)
router.patch('/:id/likePost', APIs.likePost)

module.exports = router;
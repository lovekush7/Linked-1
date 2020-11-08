const express = require('express');
const router = express.Router();
const Post = require('../model/schema');

//Routes
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async(req, res) => {
    const post = new Post({
        Request_id: req.body.Request_id,
        People: req.body.People,
        Start_date: req.body.Start_date,
        Tourist_name: req.body.Tourist_name,
        End_date: req.body.End_date,
        Destination: req.body.Destination,
        list: req.body.list
    });
    const savedPost = await post.save();
    res.json(savedPost);
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }

});

module.exports = router;
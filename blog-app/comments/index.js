const express = require('express');
const { randomBytes } = require('crypto');

const app = express();

app.use(express.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    // Create uniqe id for comment
    const commentId = randomBytes(4).toString('hex');
    // Get the content of the comment
    const { content } = req.body;
    // Get the id of the post from req params
    const postId = req.params.id;

    const comments = commentsByPostId[postId] || [];
    comments.push({ id: commentId, content });

    // Update the comments on the post
    commentsByPostId[postId] = comments;
    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});

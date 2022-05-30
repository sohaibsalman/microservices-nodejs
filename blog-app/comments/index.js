const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
    // Create uniqe id for comment
    const commentId = randomBytes(4).toString('hex');
    // Get the content of the comment
    const { content } = req.body;
    // Get the id of the post from req params
    const postId = req.params.id;

    const comments = commentsByPostId[postId] || [];
    comments.push({ id: commentId, content, status: 'pending' });

    // Update the comments on the post
    commentsByPostId[postId] = comments;

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            postId,
            status: 'pending',
        },
    });

    res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
    console.log('Received Event', req.body.type);

    const { type, data } = req.body;

    if (type === 'CommentModerated') {
        const { id, postId, status, content } = data;
        const comments = commentsByPostId[postId];

        const comment = comments.find((comment) => {
            return comment.id === id;
        });
        comment.status = status;

        await axios.post('http://event-bus-srv:4005/events', {
            type: 'CommentUpdated',
            data: {
                id,
                content,
                postId,
                status,
            },
        });
    }

    res.send({});
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});

const express = require('express');
const { randomBytes } = require('crypto');

const app = express();

app.use(express.json());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    // Generate a unique id for the post
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    // Create a post
    posts[id] = {
        id,
        title,
    };

    // Return the newly created post data
    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});

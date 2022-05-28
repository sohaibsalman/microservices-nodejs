const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    // Generate a unique id for the post
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    // Create a post
    posts[id] = {
        id,
        title,
    };

    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id,
            title,
        },
    });

    // Return the newly created post data
    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
    res.send({});
});

app.listen(4000, () => {
    console.log('v41');
    console.log('Listening on 4000');
});

const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const handleEvent = async (type, data) => {
    if (type === 'CommentCreated') {
        const status = data.content.includes('orange')
            ? 'rejected'
            : 'approved';

        await axios.post('http://event-bus-srv:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content,
            },
        });
    }
};

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    handleEvent(type, data);

    res.send({});
});

app.listen(4003, async () => {
    console.log('Listening on 4003');

    // Fetch all events occured during the downtime of this service
    try {
        const res = await axios.get('http://event-bus-srv:4005/events');

        for (let event of res.data) {
            console.log('Processing event:', event.type);

            handleEvent(event.type, event.data);
        }
    } catch (error) {}
});

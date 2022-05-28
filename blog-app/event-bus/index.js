const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    // Push an event into array
    events.push(event);

    axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
        console.log(err.message);
    });
    // axios.post('http://localhost:4001/events', event).catch((err) => {
    //     console.log(err.message);
    // });
    // axios.post('http://localhost:4002/events', event).catch((err) => {
    //     console.log(err.message);
    // });
    // axios.post('http://localhost:4003/events', event).catch((err) => {
    //     console.log(err.message);
    // });

    res.send({ status: 'OK' });
});

/**
 * Endpoint to get all the events
 */
app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('Listening on 4005');
});

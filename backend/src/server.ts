import express, { request, response } from 'express';

const app = express();
app.get('/test', (request, response) => {
    return response.json({ message: 'test'});
})

app.listen(3333, () => {
    console.log("server started");
})
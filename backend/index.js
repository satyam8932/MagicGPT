const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('ChatGPT Backend!');
})

app.post('/chat', (req, res) => {
    const prompt = req.body['text'];
    console.log(prompt);
    res.json({"text": prompt});
});


app.listen(3000, () => {
    console.log('Backend at http://localhost:3000');
})
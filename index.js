const express = require('express');
const app = express();
const port = process.env.PORT || 5432;

app.use(express.json());
app.post('/echo', (req, res) => {
    res.json({
        message: "Received the following data:",
        data: req.body
    });
});
// GET endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

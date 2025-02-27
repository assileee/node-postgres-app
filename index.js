const express = require('express');
const app = express();
const port = process.env.PORT || 5432;

app.use(express.json());

// POST endpoint 
app.post('/echo', (req, res) => {
    res.json({
        message: "Received the following data:",
        data: req.body
    });
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

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

app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    if (dataStore[id]) {
        dataStore[id] = req.body; // Update the data
        res.json({
            message: "Data updated successfully",
            id: id,
            newData: dataStore[id]
        });
    } else {
        res.status(404).send('Data not found');
    }
});
// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

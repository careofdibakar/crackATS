const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9000; // any port you prefer

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
    // Render the index.ejs file
    res.render('index', { title: 'ATS' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

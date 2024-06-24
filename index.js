const express = require('express');
const bodyParser = require('body-parser');
const DBC = require('dbc.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the contract
const postContract = DBC.require({
    body: {
        name: DBC.string(),
        email: DBC.string().email(),
        password: DBC.string().minLength(8),
    },
});

// Define the route
app.post('/register', postContract((req, res) => {
    const { name, email, password } = req.body;

    // Save user to database

    res.status(200).send('User registered successfully');
}));

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));

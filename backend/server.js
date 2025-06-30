const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle 'Get A Quote' form submission
app.post('/submit-quote', (req, res) => {
    const { name, email, project, budget, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const newQuote = {
        id: Date.now(),
        name,
        email,
        project,
        budget,
        message,
        submittedAt: new Date().toISOString()
    };

    const filePath = path.join(__dirname, 'quotes.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        let quotes = [];
        if (!err && data) {
            try {
                quotes = JSON.parse(data);
            } catch (parseErr) {
                return res.status(500).json({ success: false, message: 'JSON parse error' });
            }
        }

        quotes.push(newQuote);

        fs.writeFile(filePath, JSON.stringify(quotes, null, 2), (err) => {
            if (err) {
                console.error('Write error:', err);
                return res.status(500).json({ success: false });
            }
            return res.json({ success: true });
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

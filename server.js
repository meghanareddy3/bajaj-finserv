const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        if (!data) {
            return res.status(400).json({ "is_success": false, "error": "No data provided" });
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const highest_alphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => b.localeCompare(a))[0]] : [];

        const response = {
            "is_success": true,
            "user_id": "john_doe_17091999",
            "email": "john@xyz.com",
            "roll_number": "ABCD123",
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet": highest_alphabet
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ "is_success": false, "error": error.message });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

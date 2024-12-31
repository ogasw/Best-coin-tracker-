const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static('public'));

// API route for Bitcoin price
app.get('/api/price', async (req, res) => {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    const price = response.data.bpi.USD.rate_float.toFixed(2);
    res.json({ price });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching Bitcoin price' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

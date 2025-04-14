const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { esClient, initIndex } = require('./config/elasticsearch');
const searchRoutes = require('./routes/searchRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Elasticsearch
initIndex().then(() => {
  console.log('Elasticsearch ready');
});

// Routes
app.use('/api/search', searchRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Search API running on port ${PORT}`);
});

module.exports = app;
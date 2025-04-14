const express = require('express');
const { search } = require('../controllers/searchController');
const { searchLimiter } = require('../middlewares/rateLimiter');

const router = express.Router();

router.get('/', searchLimiter, search);

module.exports = router;
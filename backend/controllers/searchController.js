const { searchItems } = require('../services/searchService');

const search = async (req, res, next) => {
  try {
    const { q, page = 1, limit = 10 } = req.query;
    
    if (!q || q.trim().length < 2) {
      return res.status(400).json({
        error: 'Search query must be at least 2 characters long'
      });
    }
    
    const results = await searchItems(q, parseInt(page), parseInt(limit));
    
    res.json({
      success: true,
      ...results
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { search };
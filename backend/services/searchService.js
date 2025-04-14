const { esClient } = require('../config/elasticsearch');

const searchItems = async (query, page = 1, limit = 10) => {
  try {
    const from = (page - 1) * limit;
    
    const { body } = await esClient.search({
      index: 'search_items',
      body: {
        query: {
          multi_match: {
            query: query,
            fields: ['title^3', 'content', 'tags^2'],
            fuzziness: 'AUTO'
          }
        },
        highlight: {
          fields: {
            title: {},
            content: {}
          }
        },
        from,
        size: limit
      }
    });
    
    return {
      total: body.hits.total.value,
      results: body.hits.hits.map(hit => ({
        id: hit._id,
        ...hit._source,
        highlight: hit.highlight
      }))
    };
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};

const indexItem = async (item) => {
  try {
    await esClient.index({
      index: 'search_items',
      body: {
        ...item,
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Indexing error:', error);
    throw error;
  }
};

const bulkIndexItems = async (items) => {
  try {
    const body = items.flatMap(item => [
      { index: { _index: 'search_items' } },
      { ...item, createdAt: new Date().toISOString() }
    ]);
    
    await esClient.bulk({ body });
  } catch (error) {
    console.error('Bulk indexing error:', error);
    throw error;
  }
};

module.exports = { searchItems, indexItem, bulkIndexItems };
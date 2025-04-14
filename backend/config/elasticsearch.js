const { Client } = require('@elastic/elasticsearch');

const esClient = new Client({
  node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
  auth: {
    username: process.env.ELASTIC_USER || 'elastic',
    password: process.env.ELASTIC_PASSWORD || 'changeme'
  }
});

// Create index if it doesn't exist
const initIndex = async () => {
  try {
    const indexExists = await esClient.indices.exists({ index: 'search_items' });
    if (!indexExists) {
      await esClient.indices.create({
        index: 'search_items',
        body: {
          mappings: {
            properties: {
              title: { type: 'text' },
              content: { type: 'text' },
              tags: { type: 'keyword' },
              createdAt: { type: 'date' }
            }
          }
        }
      });
      console.log('Created Elasticsearch index');
    }
  } catch (error) {
    console.error('Error initializing Elasticsearch:', error);
  }
};

module.exports = { esClient, initIndex };
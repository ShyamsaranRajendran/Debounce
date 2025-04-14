import React from 'react';

const SearchResults = ({ results, isLoading }) => {
  if (isLoading) {
    return <div className="loading">Loading results...</div>;
  }

  if (!results || results.length === 0) {
    return <div className="no-results">No results found</div>;
  }

  return (
    <div className="search-results">
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
import React, { useState, useEffect } from 'react';
import useDebounce from './hooks/useDebounce';
import { searchAPI } from './services/api';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Debounce the query with 300ms delay
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      setIsLoading(true);
      searchAPI(debouncedQuery).then(data => {
        setResults(data);
        setIsLoading(false);
      });
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div className="app">
      <h1>Optimized Search with Debounce</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} isLoading={isLoading} />
    </div>
  );
};

export default App;
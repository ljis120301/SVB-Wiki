'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [pages, setPages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/pages')
      .then(response => response.json())
      .then(data => setPages(data))
      .catch(error => console.error('Error fetching pages:', error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const queryLower = query.toLowerCase();
    
    const results = pages.filter(page => 
      page.title.toLowerCase().includes(queryLower) ||
      page.content.toLowerCase().includes(queryLower)
    );

    setSearchResults(results);
  };

  const handleResultClick = (path) => {
    router.push(path);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search wiki..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span className="absolute right-4 top-4 text-gray-400">
          🔍
        </span>
      </div>

      {searchResults.length > 0 && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
          <ul className="space-y-2">
            {searchResults.map((result, index) => (
              <li 
                key={index} 
                className="p-2 hover:bg-gray-50 rounded cursor-pointer"
                onClick={() => handleResultClick(result.path)}
              >
                <h4 className="font-medium">{result.title}</h4>
                <p className="text-sm text-gray-600">{result.content.substring(0, 150)}...</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 
'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [pages, setPages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/pages')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPages(data))
      .catch(error => {
        console.error('Error fetching pages:', error);
        setPages([]); // Set empty array as fallback
      });
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
          className="w-full p-4 rounded-lg bg-secondary dark:bg-secondary-dark 
            text-foreground dark:text-foreground-dark placeholder:text-muted-foreground 
            dark:placeholder:text-foreground-dark border-none 
            focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark 
            focus:ring-offset-2 focus:ring-offset-background 
            dark:focus:ring-offset-background-dark transition-colors"
        />
        <div className="absolute right-4 top-4 text-muted-foreground dark:text-muted-foreground-dark">
          <SearchIcon className="h-5 w-5" />
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="mt-4 p-4 bg-background dark:bg-background-dark rounded-lg 
          shadow-lg max-h-96 overflow-y-auto border border-border dark:border-border-dark">
          <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-foreground-dark">
            Search Results:
          </h3>
          <ul className="space-y-2">
            {searchResults.map((result, index) => (
              <li 
                key={index} 
                className="p-2 hover:bg-secondary dark:hover:bg-secondary-dark 
                  rounded-md cursor-pointer transition-colors"
                onClick={() => handleResultClick(result.path)}
              >
                <h4 className="font-medium text-foreground dark:text-foreground-dark">
                  {result.title}
                </h4>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                  {result.content.substring(0, 150)}...
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 
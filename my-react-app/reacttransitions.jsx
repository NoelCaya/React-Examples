import React, { useState, useTransition } from 'react';
import { createRoot } from 'react-dom/client';

function SearchResults({ query }) {
  const items = [];
  if (query) {
    for (let i = 0; i < 10000; i++) {
      items.push(<li key={i}>Result for {query} - {i}</li>);
    }
  }
  return <ul>{items}</ul>;
}

function SearchBar() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      {isPending && <p>Loading results...</p>}
      <SearchResults query={query} />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<SearchBar />);
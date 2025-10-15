import React, { useState } from 'react';
import type {ChangeEvent, FormEvent } from 'react';
import { CiSearch } from "react-icons/ci";
import './SearchBox.css';

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (query.trim()) {
      window.open(
      `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
      "_blank" // 🔹 在新标签页中打开
    );
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="搜索"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          <CiSearch className='searchicon' size={30} />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

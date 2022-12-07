'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function SearchBox() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-14 placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent border-b border-gray-500 dark:text-red-500"
        type="text"
        placeholder="Search for anything"
      />
      <button
        disabled={!input}
        className="text-red-700 disabled:text-gray-600 cursor-pointer"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;

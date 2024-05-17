"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePosts } from '../context/postContext';

export default function SearchBar() {
  const { searchPosts } = usePosts();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchPosts(query);
  };

  return (
    <div className="flex items-center w-full max-w-md bg-white rounded-md shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <Input
        className="flex-1 px-4 py-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:ring-0 dark:text-gray-100 dark:placeholder-gray-400"
        placeholder="Search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        className="p-2 text-gray-500 hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:text-gray-100"
        type="submit"
        variant="ghost"
        onClick={handleSearch}
      >
        <SearchIcon className="w-5 h-5" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

import React from "react";

export default function TextInput({ placeholder, className, onSearch, query }) {
  return (
    <input
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      placeholder={placeholder}
      className={`border-2 rounded-md text-right p-1 ${className}`}
    />
  );
}

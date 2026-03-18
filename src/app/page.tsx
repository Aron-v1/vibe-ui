"use client";

import { useState } from "react";
import ComponentCard from "@/components/ComponentCard";
import SearchHeader from "@/components/SearchHeader";
import AISummary from "@/components/AISummary";
import Filters from "@/components/Filters";
import { searchComponents } from "@/lib/api";
import type { Component } from "@/types/api";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState(
    "I want to help users find something in the service"
  );
  const [submittedQuery, setSubmittedQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const [components, setComponents] = useState<Component[]>([]);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Feature flag for filters
  const filtersEnabled =
    process.env.NEXT_PUBLIC_ENABLE_FILTERS === "true";

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setError("");
    setSubmittedQuery(searchQuery);

    try {
      const response = await searchComponents(searchQuery);
      setComponents(response.components);
      setMessage(response.message);
    } catch (err) {
      setError("Failed to search components. Please try again.");
      console.error("Search error:", err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleApplyFilters = (filters: {
    department: string;
    contentType: string;
    profession: string;
  }) => {
    console.log("Applying filters:", filters);
    // TODO: Implement filter logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
        isSearching={isSearching}
      />

      <main className="max-w-5xl mx-auto px-6 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {isSearching && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <p className="mt-4 text-gray-600">Searching components...</p>
          </div>
        )}

        {!isSearching && components.length > 0 && submittedQuery && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Showing results for '{submittedQuery}'
            </h2>

            {message && <AISummary summary={message} />}

            {filtersEnabled && <Filters onApplyFilters={handleApplyFilters} />}

            <h3 className="text-xl font-bold text-gray-900 mb-4">Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {components.map((component, index) => (
                <ComponentCard
                  key={`${component.url}-${index}`}
                  component={component}
                />
              ))}
            </div>
          </>
        )}

        {!isSearching && components.length === 0 && !submittedQuery && (
          <div className="text-center py-12 text-gray-500">
            <p>Enter a search query to discover building blocks</p>
          </div>
        )}
      </main>
    </div>
  );
}

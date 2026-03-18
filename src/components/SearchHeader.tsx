interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
  isSearching: boolean;
}

export default function SearchHeader({
  searchQuery,
  setSearchQuery,
  onSearch,
  isSearching,
}: SearchHeaderProps) {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-4 right-20 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center font-bold text-xl border-4 border-blue-300">
        S
      </div>
      <div className="absolute top-32 right-12 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center font-bold text-xl border-4 border-blue-300">
        S
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 relative">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Describe a user need.
            <br />
            Discover the right building block.
          </h2>
          <p className="text-purple-100 text-base">
            Write what your users are trying to do — in plain English.
            <br />
            AI maps it to reusable building blocks across Government.
          </p>
        </div>

        <div className="bg-white rounded-md p-1 flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search for a building block
            </label>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch()}
              placeholder="I want to help users find something in the service"
              className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none rounded"
            />
          </div>
          <button
            onClick={onSearch}
            disabled={isSearching}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition-colors disabled:opacity-50"
          >
            {isSearching ? "Searching..." : "Search design systems"}
          </button>
        </div>
      </div>
    </header>
  );
}

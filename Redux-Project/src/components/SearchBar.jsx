import { Search } from "lucide-react";

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search anything ..."
          className="w-full border border-gray-300 rounded-lg px-3 py-1 pr-9 pt-0outline-none"
        />

        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
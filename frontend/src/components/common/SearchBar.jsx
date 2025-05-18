const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por modelo..."
      onChange={(e) => onSearch(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;

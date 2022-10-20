const Search = () => {
  const [search, setSearch] = useState(null);

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange
    />
  );
};

export default Search;

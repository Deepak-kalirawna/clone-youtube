import React from "react";

const SearchContext = React.createContext({
  searchText: "",
  filterdPosts: [],
  searchResult: true,
  activeItem: "Home",
  setActive: () => {},
  setSearchText: () => {},
  setfilterdPosts: () => {},
  setSearchResult: () => {},
});

export default SearchContext;

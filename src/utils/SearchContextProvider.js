import SearchContext from "./search-context";
import { useState } from "react";

const SearchContextProvider = (props) => {
  const [searchText, setSearchText] = useState("");
  const [filterdPosts, setfilterdPosts] = useState([]);
  const [searchResult, setSearchResult] = useState(true);
  const [activeItem, setActiveItem] = useState("Home");

  const setActive = (item) => {
    setActiveItem(item);
  };

  const updateSeachText = (text) => {
    setSearchText(text);
  };
  const updatefilterdPosts = (array) => {
    setfilterdPosts(array);
  };
  const updateSeachResults = (boolean) => {
    setSearchResult(boolean);
  };
  const searchContext = {
    searchText: searchText,
    filterdPosts: filterdPosts,
    searchResult: searchResult,
    setSearchText: updateSeachText,
    setfilterdPosts: updatefilterdPosts,
    setSearchResult: updateSeachResults,
    activeItem,
    setActive,
  };
  return (
    <SearchContext.Provider value={searchContext}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

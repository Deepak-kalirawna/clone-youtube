import React, { useEffect } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import profilePic from "../../Assests/Profile_Pic.jpeg";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SearchContext from "../../utils/search-context";
import { Button } from "@mui/material";
import { filterData } from "../../utils/helper";
import myImage from "../../Assests/myImage.jpg";
import riverImage from "../../Assests/river_image.png";
import shipImage from "../../Assests/ship_image.png";
import beachImage from "../../Assests/beach_image.png";
import cityImage from "../../Assests/city_image.png";
import pirateImage from "../../Assests/pirate_image.png";
const DUMMY_DATA = [
  {
    title: "Black Pearl",
    views: "5.8 M views",
    timestamp: "2 days ago",
    channelImage: myImage,
    channel: "Deepak kalirawna",
    image: shipImage,
    id: "1",
  },
  {
    title: "For Education Purpose",
    views: "4.8 M views",
    timestamp: "6 days ago",
    channelImage: cityImage,
    channel: "Parvesh Bansal",
    image: riverImage,
    id: "2",
  },
  {
    title: "All about the beach",
    views: "8.5 M views",
    timestamp: "8 days ago",
    channelImage: pirateImage,
    channel: "Maji Manish",
    image: beachImage,
    id: "3",
  },
  {
    title: "A beautiful city in India",
    views: "6.4 M views",
    timestamp: "5 days ago",
    channelImage: riverImage,
    channel: "Ashish Grover",
    image: cityImage,
    id: "4",
  },
  {
    title: "Pirates Of the Caribbean",
    views: "19.7 M views",
    timestamp: "10 days ago",
    channelImage: beachImage,
    channel: "Johnny Depp",
    image: pirateImage,
    id: "5",
  },
  {
    title: "Black Pearl",
    views: "5.8 M views",
    timestamp: "2 days ago",
    channelImage: myImage,
    channel: "Deepak kalirawna",
    image: shipImage,
    id: "6",
  },
  {
    title: "For Education Purpose",
    views: "4.8 M views",
    timestamp: "6 days ago",
    channelImage: cityImage,
    channel: "Parvesh Bansal",
    image: riverImage,
    id: "7",
  },
  {
    title: "All about the beach",
    views: "8.5 M views",
    timestamp: "8 days ago",
    channelImage: pirateImage,
    channel: "Maji Manish",
    image: beachImage,
    id: "8",
  },
  {
    title: "A beautiful city in India",
    views: "6.4 M views",
    timestamp: "5 days ago",
    channelImage: riverImage,
    channel: "Ashish Grover",
    image: cityImage,
    id: "9",
  },
  {
    title: "Pirates Of the Caribbean",
    views: "19.7 M views",
    timestamp: "10 days ago",
    channelImage: beachImage,
    channel: "Johnny Depp",
    image: pirateImage,
    id: "10",
  },
  {
    title: "Black Pearl",
    views: "5.8 M views",
    timestamp: "2 days ago",
    channelImage: myImage,
    channel: "Deepak kalirawna",
    image: shipImage,
    id: "11",
  },
  {
    title: "For Education Purpose",
    views: "4.8 M views",
    timestamp: "6 days ago",
    channelImage: cityImage,
    channel: "Parvesh Bansal",
    image: riverImage,
    id: "12",
  },
  {
    title: "All about the beach",
    views: "8.5 M views",
    timestamp: "8 days ago",
    channelImage: pirateImage,
    channel: "Maji Manish",
    image: beachImage,
    id: "13",
  },
  {
    title: "A beautiful city in India",
    views: "6.4 M views",
    timestamp: "5 days ago",
    channelImage: riverImage,
    channel: "Ashish Grover",
    image: cityImage,
    id: "14",
  },
  {
    title: "Pirates Of the Caribbean",
    views: "19.7 M views",
    timestamp: "10 days ago",
    channelImage: beachImage,
    channel: "Johnny Depp",
    image: pirateImage,
    id: "15",
  },
];
function Header() {
  // const [inputSearch, setInputSearch] = useState("");
  const searchContext = useContext(SearchContext);
  useEffect(() => {
    if (searchContext.searchText.trim() === "") {
      searchContext.setfilterdPosts(DUMMY_DATA);
    }
  }, []);
  const handleSearch = () => {
    if (searchContext.searchText.trim() === "") {
      searchContext.setfilterdPosts(DUMMY_DATA);
    }
    const data = filterData(searchContext.searchText, DUMMY_DATA);
    if (data.length) {
      searchContext.setfilterdPosts(data);
      searchContext.setSearchResult(true);
    } else searchContext.setSearchResult(false);
    searchContext.setSearchText("");
  };
  const handleKeyDown = (e) => {
    // console.log(e.keyCode === 13);
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="youtubelogo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={searchContext.searchText ? searchContext.searchText : ""}
          onChange={(e) => searchContext.setSearchText(e.target.value)}
          placeholder="Search"
          type="text"
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSearch}>
          <SearchIcon className="header__inputButton" />
        </Button>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar alt="Deepak" src={profilePic} sx={{ width: 30, height: 30 }} />
      </div>
    </div>
  );
}
export default Header;

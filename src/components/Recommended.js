import "./Recommended.css";
import VideoCard from "./VideoCard";
import SearchContext from "../utils/search-context";
import { useContext } from "react";
import { Button } from "@mui/material";
import myImage from "../Assests/myImage.jpg";
import riverImage from "../Assests/river_image.png";
import shipImage from "../Assests/ship_image.png";
import beachImage from "../Assests/beach_image.png";
import cityImage from "../Assests/city_image.png";
import pirateImage from "../Assests/pirate_image.png";
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
function Recommended() {
  const searchContext = useContext(SearchContext);

  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {searchContext.searchResult ? (
          searchContext.filterdPosts.map((post) => {
            return (
              <VideoCard
                title={post.title}
                views={post.views}
                timestamp={post.timestamp}
                channelImage={post.channelImage}
                channel={post.channel}
                image={post.image}
                key={post.id}
              />
            );
          })
        ) : (
          <div className="resultNotFound">
            <h2>Result Not Found !!! Please Try Again...</h2>
            <Button
              sx={{
                margin: 10,
              }}
              variant="contained"
              color="success"
              onClick={() => {
                searchContext.setSearchText("");
                searchContext.setSearchResult(true);
                searchContext.setfilterdPosts(DUMMY_DATA);
              }}
            >
              Go Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Recommended;

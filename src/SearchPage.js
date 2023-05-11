import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import myImage from "./Assests/myImage.jpg";
import VideoRow from "./VideoRow";
import riverImage from "./Assests/river_image.png";
import shipImage from "./Assests/ship_image.png";
import beachImage from "./Assests/beach_image.png";
import cityImage from "./Assests/city_image.png";
import pirateImage from "./Assests/pirate_image.png";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={myImage}
        channel="Deepak Kalirawna"
        verified
        subs="780k"
        noOfVideos="456"
        description="You can find awesome programming lessons here! Also expect programming tips & trics that will take your coding skills to the..."
      />
      <hr />
      <VideoRow
        title="The History of the Black Pearl 🛳️"
        views="5.8 M views"
        timestamp="2 days ago"
        channelImage={myImage}
        channel="Deepak kalirawna"
        image={shipImage}
        subs="18 M"
        description="Do you want a FREE one hour training...check this one out"
      />
      <VideoRow
        title="🎯 Delta Formation in river For Education Purpose "
        views="4.8 M views"
        timestamp="6 days ago"
        channelImage={cityImage}
        channel="Parvesh Bansal"
        image={riverImage}
        subs="135 k"
        description="Do you want a FREE one hour training...check this one out"
      />
      <VideoRow
        title="All about the beach"
        views="8.5 M views"
        timestamp="8 days ago"
        channelImage={pirateImage}
        channel="Maji Manish"
        image={beachImage}
        subs="9 M"
        description="Do you want a FREE one hour training...check this one out"
      />
      <VideoRow
        title="A beautiful city in India "
        views="6.4 M views"
        timestamp="5 days ago"
        channelImage={riverImage}
        channel="Ashish Grover"
        image={cityImage}
        subs="256 k"
        description="Do you want a FREE one hour training...check this one out"
      />
      <VideoRow
        title="Pirates Of the Caribbean"
        views="19.7 M views"
        timestamp="10 days ago"
        channelImage={beachImage}
        channel="Johnny Depp"
        image={pirateImage}
        subs="365 k"
        description="Do you want a FREE one hour training...check this one out"
      />
    </div>
  );
}

export default SearchPage;

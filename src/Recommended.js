import "./Recommended.css";
import VideoCard from "./VideoCard";
import myImage from "./Assests/myImage.jpg";
import riverImage from "./Assests/river_image.png";
import shipImage from "./Assests/ship_image.png";
import beachImage from "./Assests/beach_image.png";
import cityImage from "./Assests/city_image.png";
import pirateImage from "./Assests/pirate_image.png";

function Recommended() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Black Pearl"
          views="5.8 M views"
          timestamp="2 days ago"
          channelImage={myImage}
          channel="Deepak kalirawna"
          image={shipImage}
        />
        <VideoCard
          title="For Education Purpose"
          views="4.8 M views"
          timestamp="6 days ago"
          channelImage={cityImage}
          channel="Parvesh Bansal"
          image={riverImage}
        />
        <VideoCard
          title="All about the beach"
          views="8.5 M views"
          timestamp="8 days ago"
          channelImage={pirateImage}
          channel="Maji Manish"
          image={beachImage}
        />
        <VideoCard
          title="A beautiful city in India"
          views="6.4 M views"
          timestamp="5 days ago"
          channelImage={riverImage}
          channel="Ashish Grover"
          image={cityImage}
        />
        <VideoCard
          title="Pirates Of the Caribbean"
          views="19.7 M views"
          timestamp="10 days ago"
          channelImage={beachImage}
          channel="Johnny Depp"
          image={pirateImage}
        />
        <VideoCard
          title="Black Pearl"
          views="5.8 M views"
          timestamp="2 days ago"
          channelImage={myImage}
          channel="Deepak kalirawna"
          image={shipImage}
        />
        <VideoCard
          title="For Education Purpose"
          views="4.8 M views"
          timestamp="6 days ago"
          channelImage={cityImage}
          channel="Parvesh Bansal"
          image={riverImage}
        />
        <VideoCard
          title="All about the beach"
          views="8.5 M views"
          timestamp="8 days ago"
          channelImage={pirateImage}
          channel="Maji Manish"
          image={beachImage}
        />
        <VideoCard
          title="A beautiful city in India"
          views="6.4 M views"
          timestamp="5 days ago"
          channelImage={riverImage}
          channel="Ashish Grover"
          image={cityImage}
        />
        <VideoCard
          title="Pirates Of the Caribbean"
          views="19.7 M views"
          timestamp="10 days ago"
          channelImage={beachImage}
          channel="Johnny Depp"
          image={pirateImage}
        />
        <VideoCard
          title="Black Pearl"
          views="5.8 M views"
          timestamp="2 days ago"
          channelImage={myImage}
          channel="Deepak kalirawna"
          image={shipImage}
        />
        <VideoCard
          title="For Education Purpose"
          views="4.8 M views"
          timestamp="6 days ago"
          channelImage={cityImage}
          channel="Parvesh Bansal"
          image={riverImage}
        />
        <VideoCard
          title="All about the beach"
          views="8.5 M views"
          timestamp="8 days ago"
          channelImage={pirateImage}
          channel="Maji Manish"
          image={beachImage}
        />
        <VideoCard
          title="A beautiful city in India"
          views="6.4 M views"
          timestamp="5 days ago"
          channelImage={riverImage}
          channel="Ashish Grover"
          image={cityImage}
        />
        <VideoCard
          title="Pirates Of the Caribbean"
          views="19.7 M views"
          timestamp="10 days ago"
          channelImage={beachImage}
          channel="Johnny Depp"
          image={pirateImage}
        />
        <VideoCard
          title="Black Pearl"
          views="5.8 M views"
          timestamp="2 days ago"
          channelImage={myImage}
          channel="Deepak kalirawna"
          image={shipImage}
        />
        <VideoCard
          title="For Education Purpose"
          views="4.8 M views"
          timestamp="6 days ago"
          channelImage={cityImage}
          channel="Parvesh Bansal"
          image={riverImage}
        />
        <VideoCard
          title="All about the beach"
          views="8.5 M views"
          timestamp="8 days ago"
          channelImage={pirateImage}
          channel="Maji Manish"
          image={beachImage}
        />
        <VideoCard
          title="A beautiful city in India"
          views="6.4 M views"
          timestamp="5 days ago"
          channelImage={riverImage}
          channel="Ashish Grover"
          image={cityImage}
        />
        <VideoCard
          title="Pirates Of the Caribbean"
          views="19.7 M views"
          timestamp="10 days ago"
          channelImage={beachImage}
          channel="Johnny Depp"
          image={pirateImage}
        />
      </div>
    </div>
  );
}
export default Recommended;

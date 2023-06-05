import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <Link style={{ color: "black", textDecoration: "none" }} to="/">
        <SidebarRow Icon={HomeIcon} title="Home" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={WhatshotIcon} title="Trending" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      </Link>
      <hr />
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={HistoryIcon} title="History" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
      </Link>
      <hr />
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={SettingsIcon} title="Setting" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={FlagIcon} title="Report history" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={HelpOutlineIcon} title="Help" />
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/search/post`}
      >
        <SidebarRow Icon={AnnouncementOutlinedIcon} title="Send feedback" />
      </Link>
      <hr />

      <footer className="sidebar__footer">
        <p>©️Terms Privacy Policy & Safety </p>
        <p>Test new features.</p>
      </footer>
    </div>
  );
}
export default Sidebar;

{
  /* <Link to={`/search/${inputSearch}`}>
          <SidebarRow Icon={HelpOutlineIcon} title="Help" />
        </Link> */
}

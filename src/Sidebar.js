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
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
      <hr />
      <SidebarRow Icon={SettingsIcon} title="Setting" />
      <SidebarRow Icon={FlagIcon} title="Report history" />
      <SidebarRow Icon={HelpOutlineIcon} title="Help" />
      <SidebarRow Icon={AnnouncementOutlinedIcon} title="Send feedback" />
      <hr />

      <footer className="sidebar__footer">
        <p>©️Terms Privacy Policy & Safety </p>
        <p>Test new features.</p>
      </footer>
    </div>
  );
}
export default Sidebar;

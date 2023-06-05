import "./SidebarRow.css";
import { useContext } from "react";
import SearchContext from "../../utils/search-context";
import { useLocation } from "react-router-dom";
function SidebarRow({ title, Icon }) {
  const location = useLocation();
  const { activeItem, setActive } = useContext(SearchContext);

  const handleClick = () => {
    setActive(title);
  };
  // Check if the current path is "/"
  const isHomeActive = location.pathname === "/";

  // Set the active item to "Home" if the current path is "/"
  if (isHomeActive) {
    setActive("Home");
  }
  return (
    <div
      className={`sidebarRow ${
        activeItem === title ? "sidebar__row--active" : ""
      }`}
      onClick={handleClick}
    >
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
}
export default SidebarRow;

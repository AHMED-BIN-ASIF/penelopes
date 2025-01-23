import React from "react";
import PropTypes from "prop-types";
import "../css/DropdownMenu.css"; // Using the same CSS for consistent styles
import { Link } from "react-router-dom";

const DropdownMenu = ({
  icon, // Update to accept a React Icon component instead of an icon class
  menuItems,
  selectText = "Select an option", // default parameter
  className = "", // default parameter
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const dropdownRef = useRef(null);

  // const handleMouseEnter = () => setIsOpen(true);
  // const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className={`dropdown ${className}`}
      // ref={dropdownRef}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* Icon that shows the dropdown */}
      <div className="dropdown-icon">
        <span className="dropdown-text">{selectText}</span>
        {icon} {/* Render the icon component passed as a prop */}
      </div>

      {/* Dropdown menu with links */}
      {/* {isOpen && ( */}
        <ul className="dropdown-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link className="dropdown-link-item" to={item.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      {/* )} */}
    </div>
  );
};

DropdownMenu.propTypes = {
  icon: PropTypes.element.isRequired, // Icon component passed as a prop
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired, // link for dropdown with links
    })
  ).isRequired,
  selectText: PropTypes.string, // Default text for unselected state
  className: PropTypes.string, // Additional class names for styling
};

export default DropdownMenu;

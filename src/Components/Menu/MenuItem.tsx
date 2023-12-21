import "./MenuItem.css";
import { Link } from "react-router-dom";

type MenuItemProps = {
  title: string;
  url: string;
  isSelected?: boolean;
};
const MenuItem = ({ title, url, isSelected }: MenuItemProps) => {
  let cssClasses = "menu-item";
  if (isSelected) {
    cssClasses += " selected";
  }
  return (
    <Link to={url} className={cssClasses}>
      {title}
    </Link>
  );
};

export default MenuItem;

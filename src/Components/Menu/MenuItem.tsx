import "./MenuItem.css";
import { Link } from "react-router-dom";

type MenuItemProps = {
  title: string;
  url: string;
};
const MenuItem = ({ title, url }: MenuItemProps) => {
  return <Link to={url}>{title}</Link>;
};

export default MenuItem;

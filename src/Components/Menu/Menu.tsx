import "./Menu.css";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";

const MENU_ITEMS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const Menu = () => {
  const selectedMenu = { name: "Home", to: "/" };
  const location = useLocation();

  return (
    <div className="menu">
      {MENU_ITEMS.map((item) => (
        <MenuItem
          title={item.name}
          url={item.to}
          isSelected={item.to === location.pathname}
        />
      ))}
    </div>
  );
};

export default Menu;

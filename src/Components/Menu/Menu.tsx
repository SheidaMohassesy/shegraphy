import "./Menu.css";
import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const Menu = () => {
  return (
    <div className="menu">
      {MENU_ITEMS.map((item) => (
        <MenuItem title={item.name} url={item.to} />
      ))}
    </div>
  );
};

export default Menu;

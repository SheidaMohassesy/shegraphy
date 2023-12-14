import "./Menu.css";
import MenuItem from "./MenuItem";

const menuItems = ["Home", "About me", "Contact", "Project Page"];

const Menu = () => {
  const selectedMenu = "Home";
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <MenuItem key={index} title={item} isSelected={item === selectedMenu} />
      ))}
    </div>
  );
};

export default Menu;

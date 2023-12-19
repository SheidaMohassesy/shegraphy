import Logo from "../../Components/Logo/Logo";
import Menu from "../../Components/Menu/Menu";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu />
    </div>
  );
};
export default Header;

import Logo from "../../Components/Logo/Logo";
import Menu from "../../Components/Menu/Menu";
import Photo from "../../Components/Photo/Photo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Photo />
      <Logo />
      <Menu />
    </div>
  );
};
export default Header;

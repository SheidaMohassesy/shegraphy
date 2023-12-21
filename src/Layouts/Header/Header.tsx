import Logo from "../../Components/Logo/Logo";
import Menu from "../../Components/Menu/Menu";
import Photo from "../../Components/Photo/Photo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <Photo />
    </div>
  );
};
export default Header;

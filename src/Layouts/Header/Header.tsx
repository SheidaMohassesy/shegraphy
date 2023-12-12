import Logo from "../../Components/Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <a>Projects</a>
      <a>Contact</a>
      <a>About</a>
    </div>
  );
};
export default Header;

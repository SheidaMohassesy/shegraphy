import { ReactNode } from "react";
import ContentContainer from "./ContentContainer/ContentContainer";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </div>
  );
};

export default Layout;

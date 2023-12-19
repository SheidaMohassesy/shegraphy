import { ReactNode } from "react";
import "./ContentContainer.css";

type ContentContainerProps = {
  children: ReactNode;
};
const ContentContainer = ({ children }: ContentContainerProps) => {
  return <div className="content-container">{children}</div>;
};
export default ContentContainer;

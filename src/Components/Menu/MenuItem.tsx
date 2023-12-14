import "./MenuItem.css";

type MenuItemProps = {
  title: string;
  isSelected?: boolean;
};

const MenuItem = ({ title, isSelected }: MenuItemProps) => {
  let cssClasses = "menu-item";
  if (isSelected) {
    cssClasses += " selected";
  }
  return (
    <div className={cssClasses}>
      <a>{title}</a>
    </div>
  );
};

export default MenuItem;
